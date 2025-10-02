router.post('/verify', async (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    formData
  } = req.body;

  const expectedSignature = crypto
    .createHmac('sha256', RAZORPAY_KEY_SECRET)
    .update(razorpay_order_id + '|' + razorpay_payment_id)
    .digest('hex');

  if (expectedSignature !== razorpay_signature) {
    return res.status(400).json({ error: 'Invalid signature' });
  }

  try {
    // Find program by domain
    const program = await Program.findOne({ program_name: formData.technology_domain });
    if (!program) {
      return res.status(400).json({ error: 'Program not found' });
    }

    // Generate student ID (if needed)
    const studentId = `STU${Date.now()}`; // Or generate differently if needed

    const newTransaction = new Transaction({
      Prefix: formData.prefix,
      Full_Name: formData.full_name,
      Contact: formData.contact,
      E_Mail: formData.email,
      Reg_No: formData.reg_no,
      College: formData.college,
      Program_name: program.program_name,
      Program_mode: formData.mode,
      Location: program.location,
      Duration: program.duration,
      Category: program.category,
      lead_Time_Stamp: new Date(),
      Price: program.price, // or your final discounted amount
      Payment_TimeStamp: new Date(),
      Payment_Status: 'Paid',
      Coupon: formData.coupon,
      Transaction_Id: razorpay_payment_id,
      Student_Id: studentId,
    });

    await newTransaction.save();
    res.json({ success: true, message: 'Payment verified and transaction saved' });
  } catch (error) {
    console.error('Error saving transaction:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
