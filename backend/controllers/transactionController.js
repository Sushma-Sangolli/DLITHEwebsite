

const Program = require('../models/Program');
const Coupon = require('../models/Coupon');
const Transaction = require('../models/Transaction');
const { v4: uuidv4 } = require('uuid');
const Razorpay = require('razorpay');
const crypto = require('crypto');
const mongoose = require('mongoose');

const sendMail = require("../utils/sendMail"); 

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const createOrder = async (req, res) => {
  try {
    const { program_Id, user, coupon_id } = req.body;
    if (!program_Id) {
      return res.status(400).json({ success: false, message: "program_Id is required" });
    }

    // 1) Fetch program
    const program = await Program.findOne({ program_id: program_Id });
    if (!program) {
      return res.status(404).json({ success: false, message: "Program not found" });
    }

    // 2) Compute price (handles coupon validation & discount)
    const { finalPrice, amountPaise, couponInfo } = await computePrice(program_Id, coupon_id);

    // 3) Create temp transaction
    const tempTxnId = uuidv4();
    const transactionDoc = new Transaction({
      Transaction_Id: tempTxnId,
      program_Id,
      Program_name: program.program_name,
      Program_mode: program.program_mode,
      Location: program.location,
      Duration: program.duration,
      Category: program.category,
      Price: finalPrice,                 // ✅ discounted or normal price
      Coupon: couponInfo ? couponInfo.coupon_id : null, // ✅ store only if valid
      Payment_Status: "Pending",
      lead_Time_Stamp: new Date(),
      Prefix: user?.prefix || "",
      Full_Name: user?.name || "",
      E_Mail: user?.email || "",
      Contact: user?.contact || "",
    });

    await transactionDoc.save();

    // 4) Razorpay order
    const options = {
      amount: amountPaise, // ✅ already in paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
      notes: { program_id: program_Id, coupon_id: coupon_id || null, tempTxnId },
    };

    const order = await razorpay.orders.create(options);

    // 5) Send response
    return res.status(200).json({
      success: true,
      order,
      key: process.env.RAZORPAY_KEY_ID,
      tempTxnId,
      finalPrice,
      couponInfo,
    });
  } catch (error) {
    console.error("CreateOrder error:", error);
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};






/* ---------------------------------------
   🔧 Helpers
----------------------------------------*/

function getField(obj, ...keys) {
  for (const k of keys) {
    if (obj && Object.prototype.hasOwnProperty.call(obj, k)) return obj[k];
  }
  return undefined;
}

async function findProgramByAnyId(programId) {
  if (!programId) return null;
  return await Program.findOne({
    $or: [
      { program_Id: programId },
      { program_id: programId },
      { _id: programId },
    ]
  });
}

async function findCouponByAnyIdForProgram(couponId, programId) {
  const orClauses = [
    { coupon_id: couponId, program_Id: programId },
    { coupon_Id: couponId, program_Id: programId },
    { coupon_id: couponId, program_id: programId },
    { coupon_Id: couponId, program_id: programId },
  ];

  return await Coupon.findOne({ $or: orClauses });
}

const computePrice = async (program_id, coupon_id = null) => {
  const program = await Program.findOne({ program_id });
  if (!program) throw new Error('Program not found');

  let finalPrice = program.price;
  let coupon = null;

  if (coupon_id) {
    coupon = await Coupon.findOne({ coupon_id: coupon_id.trim() });
    if (!coupon || coupon.coupon_limit <= 0)
      throw { status: 400, message: 'Invalid or unusable coupon' };
    if (coupon.program_Id !== program_id)
      throw { status: 400, message: 'Coupon not valid for this program' };

    const now = new Date();
    if (now < new Date(coupon.start_date) || now > new Date(coupon.end_date))
      throw { status: 400, message: 'Coupon expired or not active yet' };

    finalPrice = program.price - (coupon.discount_price || 0);
  }

  const amountPaise = Math.round(finalPrice * 100);
  return { finalPrice, amountPaise, program, couponInfo: coupon };
};

module.exports = computePrice;

const verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, metadata } = req.body || {};
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature)
      return res.status(400).json({ success: false, error: "Missing payment verification fields" });

    // ✅ Verify Razorpay signature
    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");

    if (generatedSignature !== razorpay_signature)
      return res.status(400).json({ success: false, error: "Invalid signature" });

    // ✅ Extract metadata
    const programId = metadata?.program_id;
    const couponId = metadata?.coupon_id || null;
    const student = metadata?.student || {};
    const incomingTxnId = metadata?.transaction_id;

    // ✅ Compute final price
    const { finalPrice, program } = await computePrice(programId, couponId);

    // ✅ Apply coupon decrement
    let appliedCoupon = null;
    if (couponId) {
      try {
        const updatedCoupon = await Coupon.findOneAndUpdate(
          {
            coupon_id: couponId.trim(),
            coupon_limit: { $gt: 0 },
          },
          { $inc: { coupon_limit: -1 } },
          { new: true }
        );

        appliedCoupon = updatedCoupon
          ? { coupon_id: updatedCoupon.coupon_id }
          : { coupon_id: couponId };
      } catch (err) {
        console.error("❌ Error applying coupon:", err.message);
        appliedCoupon = { coupon_id: couponId };
      }
    }

    // ✅ Prepare transaction updates
    const updates = {
      Prefix: student.prefix || "",
      Full_Name: student.name || "",
      Reg_No: student.reg_no || student.usn || "",
      Student_Id: student.student_id || student.reg_no || "",
      College: student.college || "",
      E_Mail: student.email || "",
      Contact: student.contact || "",
      program_Id: program.program_id,
      Program_name: program.program_name,
      Program_mode: metadata.program_mode || "NA",
      Location: program.location,
      Duration: program.duration,
      Payment_Status: "Paid",
      Category: program.category,
      Price: finalPrice,
      Payment_TimeStamp: new Date(),
      Coupon: appliedCoupon?.coupon_id || null,
      lead_Time_Stamp: new Date(),
    };

    // ✅ Update or insert transaction
    let transactionDoc;
    if (incomingTxnId) {
      transactionDoc = await Transaction.findOneAndUpdate(
        { Transaction_Id: incomingTxnId },
        { $set: updates },
        { new: true }
      );
    }

    if (!transactionDoc) {
      const transactionId = incomingTxnId || uuidv4();
      transactionDoc = new Transaction({ ...updates, Transaction_Id: transactionId });
      await transactionDoc.save();
    }

// ✅ Send success email
if (student.email) {
  const emailHtml = `
    <div style="font-family: sans-serif; line-height:1.6; padding:20px; color:#333;">
      <h2 style="color:#2563eb;">Registration & Payment Successful 🎉</h2>
      <p>Dear ${student.name || "Student"},</p>
      <p>Your payment for <b>${program.program_name}</b> has been successfully received.</p>
      <p>Amount Paid: ₹${finalPrice}</p>
      <p>Your registration has been <b>successfully confirmed</b>. Our team will contact you soon with further details.</p>
      <br/>
      <p>Thanks & Regards,<br/><b>Dlithe Company</b></p>
      <hr/>
      <p><b>Phone:</b> +91 9008815252</p>
      <p><b>Email:</b> Info@dlithe.com</p>
    </div>
  `;

  await sendMail(
    student.email,
    "Registration Successful - Dlithe",
    emailHtml
  );

    }

    return res.json({ success: true, transaction: transactionDoc });
  } catch (err) {
    console.error("verifyPayment error:", err);
    return res.status(500).json({ success: false, error: "Internal server error" });
  }
};

module.exports = { verifyPayment };




/* ---------------------------------------
   📖 Admin APIs
----------------------------------------*/

async function getAllTransactions(req, res) {
  try {
    const limit = Math.min(100, Number(req.query.limit) || 20);
    const page = Math.max(0, Number(req.query.page || 1) - 1);
    const skip = page * limit;

    const [total, transactions] = await Promise.all([
      Transaction.countDocuments(),
      Transaction.find().sort({ createdAt: -1 }).skip(skip).limit(limit)
    ]);

    res.json({ success: true, total, page: page + 1, limit, transactions });
  } catch (err) {
    console.error('getAllTransactions error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function getTransactionById(req, res) {
  try {
    const id = req.params.Transaction_Id || req.params.id;
    if (!id) return res.status(400).json({ error: 'Transaction_Id required' });

    const txn = await Transaction.findOne({ Transaction_Id: id });
    if (!txn) return res.status(404).json({ error: 'Transaction not found' });

    res.json({ success: true, transaction: txn });
  } catch (err) {
    console.error('getTransactionById error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}
// ✅ Add this inside transactionController.js (anywhere before module.exports)



// Create transaction
async function createTransaction(req, res) {
  try {
    const data = req.body;

   if (!data || !data.E_Mail || !data.Contact || !data.program_Id) {
  return res.status(400).json({ error: 'Missing required fields: E_Mail, Contact, and program_Id are required' });
}


    // Build safe query to prevent CastError
    const orConditions = [
      { program_Id: data.program_Id },
      { program_id: data.program_Id }
    ];

    if (mongoose.Types.ObjectId.isValid(data.program_Id)) {
      orConditions.push({ _id: data.program_Id });
    }

    // Step 1: Fetch program
    const program = await Program.findOne({ $or: orConditions });

    if (!program) {
      return res.status(404).json({ error: 'Program not found' });
    }

    // Step 2: Coupon validation
    if (data.coupon_id) {
      const coupon = await Coupon.findOne({ coupon_id: data.coupon_id });

      if (!coupon) {
        return res.status(400).json({ error: 'Invalid coupon code' });
      }

      if (
        coupon.program_Id !== program.program_Id &&
        coupon.program_Id !== program.program_id
      ) {
        return res.status(400).json({ error: 'Coupon does not belong to this program' });
      }

      if (coupon.coupon_limit <= 0) {
        return res.status(400).json({ error: 'Coupon usage limit reached' });
      }
    }

    // Step 3: Create transaction
    const transactionId = uuidv4();
    const transaction = new Transaction({
      ...data,
      Transaction_Id: transactionId,
      lead_Time_Stamp: new Date(),
      Payment_Status: 'Pending',
      Program_name: program.program_name,
      Program_mode: program.program_mode,
      Location: program.location,
      Duration: program.duration,
      Category: program.category,
      Price: program.price
    });

    await transaction.save();

    res.status(201).json({ success: true, transaction });
  } catch (err) {
    console.error('createTransaction error:', err);
    res.status(500).json({ error: 'Failed to create transaction' });
  }
}



async function updateTransaction(req, res) {
  try {
    const id = req.params.Transaction_Id || req.params.id;
    if (!id) return res.status(400).json({ error: 'Transaction_Id required' });

    const updates = { ...req.body };
    delete updates.Transaction_Id;
    delete updates.Student_Id;

    const updated = await Transaction.findOneAndUpdate({ Transaction_Id: id }, updates, { new: true });
    if (!updated) return res.status(404).json({ error: 'Transaction not found' });

    res.json({ success: true, transaction: updated });
  } catch (err) {
    console.error('updateTransaction error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function deleteTransaction(req, res) {
  try {
    const id = req.params.Transaction_Id || req.params.id;
    if (!id) return res.status(400).json({ error: 'Transaction_Id required' });

    const deleted = await Transaction.findOneAndDelete({ Transaction_Id: id });
    if (!deleted) return res.status(404).json({ error: 'Transaction not found' });

    res.json({ success: true, message: 'Transaction deleted', transaction: deleted });
  } catch (err) {
    console.error('deleteTransaction error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  createOrder,
  verifyPayment,
  getAllTransactions,
  getTransactionById,
  createTransaction,
  updateTransaction,
  deleteTransaction
};