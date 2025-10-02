// models/Coupon.js
const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
  coupon_id: { type: String, required: true },
  program_Id: { type: String, required: true }, // Capital 'I' to match DB
  discount_price: { type: Number, default: 0 },
  coupon_limit: { type: Number, default: 0 },
  start_date: { type: Date },
  end_date: { type: Date },
  location: { type: String } // Optional but included based on your document
}, {
  timestamps: true,
  collection: 'coupons' // Just to be explicit
});

// Optional: Migration method (run once if needed)
couponSchema.statics.migrateStringsToTypes = async function () {
  const coupons = await this.find({});
  let migrated = 0;

  for (const coupon of coupons) {
    let updated = false;

    if (typeof coupon.coupon_limit === 'string') {
      coupon.coupon_limit = Number(coupon.coupon_limit);
      updated = true;
    }

    if (typeof coupon.discount_price === 'string') {
      coupon.discount_price = Number(coupon.discount_price);
      updated = true;
    }

    if (typeof coupon.start_date === 'string') {
      coupon.start_date = new Date(coupon.start_date);
      updated = true;
    }

    if (typeof coupon.end_date === 'string') {
      coupon.end_date = new Date(coupon.end_date);
      updated = true;
    }

    if (updated) {
      await coupon.save();
      migrated++;
    }
  }

  return { migrated };
};

module.exports = mongoose.model('Coupon', couponSchema);
