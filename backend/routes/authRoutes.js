// backend/routes/authRoutes.js


const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); // ✅ correct path


router.post('/register', authController.register);

module.exports = router;
