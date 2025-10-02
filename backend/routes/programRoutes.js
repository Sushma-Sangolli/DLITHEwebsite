const express = require('express');
const router = express.Router();
const Program = require('../models/Program'); // <- import your model
const programController = require('../controllers/programController');

// Create program
router.post('/', programController.createProgram);

// Get all programs or filter by category
// Example: GET /api?category=bootcamp
router.get('/', async (req, res) => {
  const category = req.query.category;
  let filter = {};
  if (category) filter.category = category;

  try {
    const programs = await Program.find(filter);
    res.json(programs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Get program by ID
router.get('/:program_Id', programController.getProgramById);

// Update program
router.put('/:program_Id', programController.updateProgram);

// Delete program
router.delete('/:program_Id', programController.deleteProgram);

module.exports = router;
