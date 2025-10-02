// controllers/programController.js
const Program = require('../models/Program');

// Create a new program
async function createProgram(req, res) {
  try {
    const program = new Program(req.body);
    await program.save();
    res.status(201).json({ success: true, program });
  } catch (err) {
    console.error('Error creating program:', err);
    res.status(500).json({ success: false, error: err.message });
  }
}

// Get all programs
async function getPrograms(req, res) {
  try {
    const programs = await Program.find();
    res.json({ success: true, programs });
  } catch (err) {
    console.error('Error fetching programs:', err);
    res.status(500).json({ success: false, error: err.message });
  }
}

// Get a single program by program_Id
async function getProgramById(req, res) {
  try {
    const program = await Program.findOne({ program_Id: req.params.program_Id });
    if (!program) return res.status(404).json({ success: false, error: 'Program not found' });
    res.json({ success: true, program });
  } catch (err) {
    console.error('Error fetching program:', err);
    res.status(500).json({ success: false, error: err.message });
  }
}

// Update program
async function updateProgram(req, res) {
  try {
    const updated = await Program.findOneAndUpdate(
      { program_Id: req.params.program_Id },
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ success: false, error: 'Program not found' });
    res.json({ success: true, program: updated });
  } catch (err) {
    console.error('Error updating program:', err);
    res.status(500).json({ success: false, error: err.message });
  }
}

// Delete program
async function deleteProgram(req, res) {
  try {
    const deleted = await Program.findOneAndDelete({ program_Id: req.params.program_Id });
    if (!deleted) return res.status(404).json({ success: false, error: 'Program not found' });
    res.json({ success: true, message: 'Program deleted' });
  } catch (err) {
    console.error('Error deleting program:', err);
    res.status(500).json({ success: false, error: err.message });
  }
}

module.exports = {
  createProgram,
  getPrograms,
  getProgramById,
  updateProgram,
  deleteProgram
};
