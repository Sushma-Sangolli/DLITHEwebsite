// backend/controllers/formController.js

const FormData = require('../models/FormData');

exports.submitForm = async (req, res) => {
    try {
        const formData = new FormData(req.body);
        await formData.save();
        res.status(201).json({ message: 'Form submitted successfully' });
    } catch (error) {
        console.error('Error submitting form:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
