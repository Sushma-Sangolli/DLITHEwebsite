// controllers/couponController.js
const Coupon = require('../models/Coupon');
const Program = require('../models/Program');

function parseToDateOrNull(input) {
  if (!input) return null;
  const d = new Date(input);
  if (isNaN(d.getTime())) return null;
  return d;
}

// Create a new coupon
async function createCoupon(req, res) {
  try {
    const { program_Id, Start_date, End_date } = req.body;

    const programExists = await Program.findOne({ program_Id });
    if (!programExists) {
      return res.status(400).json({ success: false, error: 'Program ID not found' });
    }

    const startDateObj = parseToDateOrNull(Start_date || req.body.start_date);
    const endDateObj = parseToDateOrNull(End_date || req.body.end_date);

    if (!startDateObj || !endDateObj) {
      return res.status(400).json({ success: false, error: 'Start_date and End_date must be valid ISO date strings' });
    }
    if (startDateObj >= endDateObj) {
      return res.status(400).json({ success: false, error: 'Start_date must be before End_date' });
    }

    const couponData = {
      coupon_id: req.body.coupon_id || req.body.Coupon_id,
      coupon_limit: Number(req.body.coupon_limit ?? req.body.Coupon_limit ?? 1),
      start_date: startDateObj,
      end_date: endDateObj,
      discount_price: Number(req.body.discount_price ?? req.body.Discount_price ?? 0),
      program_Id: req.body.program_Id || req.body.program_id,
      location: req.body.location || req.body.Location || undefined,
    };

    const coupon = new Coupon(couponData);
    await coupon.save();
    res.status(201).json({ success: true, coupon });
  } catch (err) {
    console.error('Error creating coupon:', err);
    res.status(500).json({ success: false, error: err.message });
  }
}

// Get all coupons
async function getCoupons(req, res) {
  try {
    const coupons = await Coupon.find();
    res.json({ success: true, coupons });
  } catch (err) {
    console.error('Error fetching coupons:', err);
    res.status(500).json({ success: false, error: err.message });
  }
}

// Get coupon by ID
async function getCouponById(req, res) {
  try {
    const coupon = await Coupon.findOne({ coupon_id: req.params.Coupon_id });
    if (!coupon) return res.status(404).json({ success: false, error: 'Coupon not found' });
    res.json({ success: true, coupon });
  } catch (err) {
    console.error('Error fetching coupon:', err);
    res.status(500).json({ success: false, error: err.message });
  }
}

// Update coupon
async function updateCoupon(req, res) {
  try {
    const updated = await Coupon.findOneAndUpdate(
      { coupon_id: req.params.Coupon_id },
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ success: false, error: 'Coupon not found' });
    res.json({ success: true, coupon: updated });
  } catch (err) {
    console.error('Error updating coupon:', err);
    res.status(500).json({ success: false, error: err.message });
  }
}

// Delete coupon
async function deleteCoupon(req, res) {
  try {
    const deleted = await Coupon.findOneAndDelete({ coupon_id: req.params.Coupon_id });
    if (!deleted) return res.status(404).json({ success: false, error: 'Coupon not found' });
    res.json({ success: true, message: 'Coupon deleted' });
  } catch (err) {
    console.error('Error deleting coupon:', err);
    res.status(500).json({ success: false, error: err.message });
  }
}

// Redeem coupon (decrement limit after use)
async function redeemCoupon(req, res) {
  try {
    const { coupon_id } = req.body;

    const updated = await Coupon.findOneAndUpdate(
      { coupon_id, coupon_limit: { $gt: 0 } },
      { $inc: { coupon_limit: -1 } },
      { new: true }
    );

    if (!updated) {
      return res.status(400).json({ success: false, error: 'Coupon not found or limit reached' });
    }

    res.json({ success: true, coupon: updated });
  } catch (err) {
    console.error('Error redeeming coupon:', err);
    res.status(500).json({ success: false, error: err.message });
  }
}

module.exports = {
  createCoupon,
  getCoupons,
  getCouponById,
  updateCoupon,
  deleteCoupon,
  redeemCoupon
};
