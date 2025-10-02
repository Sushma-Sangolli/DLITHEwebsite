// routes/couponRoutes.js
const express = require('express');
const router = express.Router();
const couponController = require('../controllers/couponController');
const Coupon = require('../models/Coupon');

// Validation endpoint for frontend pre-check (returns coupon info or error)
// IMPORTANT: put this before the '/:Coupon_id' route to avoid route shadowing.
router.get('/validate/:Coupon_id/:program_Id', async (req, res) => {
  try {
    const { Coupon_id, program_Id } = req.params;
    const coupon = await Coupon.findOne({
      $or: [{ Coupon_id }, { coupon_id: Coupon_id }]
    });

    if (!coupon) return res.status(404).json({ valid: false, error: 'Coupon not found' });

    // Ensure program matches
    const programMatch = (coupon.program_Id === program_Id) || (coupon.program_id === program_Id);
    if (!programMatch) {
      return res.status(400).json({ valid: false, error: 'Coupon not valid for this program' });
    }

    // Time-window check using UTC time (Date objects are compared in UTC)
    const now = new Date();
    if (!coupon.Start_date || !coupon.End_date) {
      return res.status(400).json({ valid: false, error: 'Coupon has invalid start/end dates' });
    }
    if (coupon.coupon_limit <= 0) {
      return res.status(400).json({ valid: false, error: 'Coupon redemption limit reached' });
    }
    if (coupon.start_date > now || coupon.End_date < now) {
      return res.status(400).json({ valid: false, error: 'Coupon not in valid date range' });
    }

    // valid
    return res.json({
      valid: true,
      Coupon_id: coupon.Coupon_id,
      Discount_price: coupon.Discount_price,
      Coupon_limit: coupon.Coupon_limit,
      Start_date: coupon.Start_date,
      End_date: coupon.End_date
    });
  } catch (err) {
    console.error('Coupon validation error:', err);
    return res.status(500).json({ valid: false, error: 'Internal server error' });
  }
});

// CRUD - keep these after the validate route to avoid route conflicts
router.post('/', couponController.createCoupon);          // Create coupon
router.get('/', couponController.getCoupons);             // Get all coupons
router.get('/:Coupon_id', couponController.getCouponById);// Get coupon by Coupon_id
router.put('/:Coupon_id', couponController.updateCoupon); // Update coupon
router.delete('/:Coupon_id', couponController.deleteCoupon); // Delete coupon

module.exports = router;
