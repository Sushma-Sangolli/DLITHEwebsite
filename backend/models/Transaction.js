const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  Prefix: String,
  Student_Id: { type: String, index: true }, // optional now
  Full_Name: String,
  
  College: String,
  E_Mail: { type: String, required: true, trim: true }, // now required
  Contact: { type: String, required: true, trim: true }, // now required
  program_Id: { type: String, required: true, index: true },
  Program_name: String,
  Program_mode: String,
  Location: String,
  Duration: String,
  Payment_Status: { type: String, default: 'Pending' },
  Category: String,
  lead_Time_Stamp: Date,
  Price: Number,
  Payment_TimeStamp: Date,
  Coupon: String,
  Transaction_Id: { type: String, required: true, unique: true, index: true },
}, { timestamps: true });

module.exports = mongoose.model('Transaction', TransactionSchema);
