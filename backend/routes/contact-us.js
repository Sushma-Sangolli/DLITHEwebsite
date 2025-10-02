// backend/routes/contact-us.js
const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

router.post("/api/contact-us/send-email", async (req, res) => {
   // 🔍 check this
  const { name, phone, email, purpose } = req.body;


  try {
    // Create transporter
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,                // ✅ use 587 instead of 465
  secure: false,            // ✅ false for TLS
  auth: {
    user: process.env.GMAIL_USER,          // your Gmail
    pass: process.env.GMAIL_APP_PASSWORD,  // App Password (NOT your Gmail login password)
  },
});



const mailOptions = {
  from: process.env.GMAIL_USER,
  to: process.env.GMAIL_USER,
  subject: "New Contact Form Submission",
  text: `
New contact request received:

Name: ${name}
Email: ${email}
Phone: ${phone}
Purpose: ${purpose}
  `,
};


    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).json({ success: false, error: "Email not sent" });
  }
});

module.exports = router;
