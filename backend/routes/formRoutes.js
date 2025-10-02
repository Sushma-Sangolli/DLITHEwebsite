// backend/routes/formRoutes.js

const express = require('express');
const router = express.Router();
const formController = require('../controllers/FormController')

router.post('/', formController.submitForm);

module.exports = router;
