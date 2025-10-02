const Transaction = require('../models/Transaction');

exports.register = async (req, res) => {
  try {
    const newTransaction = new Transaction({
      ...req.body,
      Payment_Status: "Pending",
      Transaction_Id: Date.now().toString(),
      lead_Time_Stamp: new Date(),
    });

    await newTransaction.save();

    res.status(201).json({ message: "Transaction saved successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

