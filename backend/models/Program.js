const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
  program_id: { type: String, required: true, unique: true, trim: true },
  program_name: { type: String, required: true, trim: true },
  program_mode: { type: String, trim: true }, // e.g., Online, Offline, Hybrid
  duration: { type: String, trim: true },
  category: {
    type: String,
    enum: ["bootcamp", "internship", "certificate"],
    required: true
  },
  price: { type: Number, required: true },
  location: { type: String, required: true, trim: true }
}, { timestamps: true });

module.exports = mongoose.model('Program', programSchema);
