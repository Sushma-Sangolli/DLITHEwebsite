// routes/transactionRoutes.js
const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

// Payment endpoints (Razorpay)
router.post('/payment/create-order', transactionController.createOrder);
router.post('/payment/verify-payment', transactionController.verifyPayment);

// ✅ FIXED: Register transaction
router.post('/', transactionController.createTransaction);  // <-- THIS WAS MISSING OR INCORRECT

// Admin / reporting
router.get('/', transactionController.getAllTransactions);
router.get('/:Transaction_Id', transactionController.getTransactionById);
router.put('/:Transaction_Id', transactionController.updateTransaction);
router.delete('/:Transaction_Id', transactionController.deleteTransaction);

module.exports = router;
