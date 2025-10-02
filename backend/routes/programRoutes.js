// routes/programRoutes.js
const express = require('express');
const router = express.Router();
const programController = require('../controllers/programController');

// Public program endpoints
router.post('/', programController.createProgram);          // Create program
router.get('/', programController.getPrograms);             // Get all programs
router.get('/:program_Id', programController.getProgramById);// Get program by program_Id
router.put('/:program_Id', programController.updateProgram); // Update program
router.delete('/:program_Id', programController.deleteProgram); // Delete program

module.exports = router;
