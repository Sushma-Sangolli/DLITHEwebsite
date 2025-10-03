// backend/server.js (CommonJS)
require('dotenv').config();
const nodemailer = require('nodemailer');


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');

const authRoutes = require('./routes/authRoutes');
const programRoutes = require('./routes/programRoutes');
const couponRoutes = require('./routes/couponRoutes');
const transactionRoutes = require('./routes/transactionRoutes');

const app = express();


app.use(express.json());
// Middleware
app.use(helmet());
app.use(cors({
  // In production set allowed origins explicitly, e.g.:
  // origin: process.env.FRONTEND_ORIGIN || 'http://localhost:5173'
}));
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));


// POST endpoint to send mail
app.post("/send-email", async (req, res) => {
  const { name, email, message, formName } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // Generated from Google 2-Step
      },
    });

    await transporter.sendMail({
      from: email,
      to: "info@dlithe.com",
      subject: `New message from ${formName}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    res.status(200).send({ message: "Email sent successfully" });
  } catch (error) {
    res.status(500).send({ message: "Failed to send email", error });
  }
});


// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', ts: new Date().toISOString() });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/programs', programRoutes);
app.use('/api/coupons', couponRoutes);
app.use('/api/transactions', transactionRoutes);

app.use("/", require("./routes/contact-us"));







// 404 handler (must be after routes)
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Error handler — 4 args so Express recognizes it
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err && err.stack ? err.stack : err);
  const status = err.status || 500;
  const message = process.env.NODE_ENV === 'production'
    ? 'Internal server error'
    : (err.message || 'Internal server error');
  res.status(status).json({ error: message });
});

// Mongoose + Server start
mongoose.set('strictQuery', false);
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/yourdb';
const PORT = process.env.PORT || 5000;

let server = null;

async function start() {
  try {
    // 1) Connect to MongoDB
    await mongoose.connect(MONGO_URI, {
      // add options if needed for your mongoose version
    });
    console.log('MongoDB connected');

    // 2) Optional: run coupon migration if requested via env var
    // Usage (PowerShell): $env:MIGRATE_COUPONS="true"; node server.js
    // or Unix: MIGRATE_COUPONS=true node server.js
    if (process.env.MIGRATE_COUPONS === 'true') {
      try {
        // require model relative to this file
        // ensure models/Coupon.js exports the model and optionally a migrateStringsToTypes function
        // We only call it if the function exists so startup won't crash if you didn't implement migration helper.
        // eslint-disable-next-line global-require
        const Coupon = require('./models/Coupon');
        if (Coupon && typeof Coupon.migrateStringsToTypes === 'function') {
          console.log('MIGRATE_COUPONS=true -> running Coupon.migrateStringsToTypes() ...');
          const result = await Coupon.migrateStringsToTypes();
          console.log('Coupon migration result:', result);
        } else {
          console.log('MIGRATE_COUPONS=true but Coupon.migrateStringsToTypes() not found — skipping migration.');
        }
      } catch (migErr) {
        console.error('Coupon migration failed:', migErr);
        // Do not throw here — we still want server to start; inspect the logs and fix.
      }
    }

    // 3) Start HTTP server
    server = app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

    // Graceful shutdown helper
    const gracefulShutdown = async (signal) => {
      try {
        console.log(`\nReceived ${signal}. Closing HTTP server and MongoDB connection...`);
        if (server) {
          await new Promise((resolve, reject) => {
            server.close((err) => {
              if (err) {
                console.error('Error closing server:', err);
                return reject(err);
              }
              console.log('HTTP server closed');
              resolve();
            });
          });
        }

        await mongoose.disconnect();
        console.log('MongoDB disconnected. Exiting process.');
        process.exit(0);
      } catch (shutdownErr) {
        console.error('Error during graceful shutdown:', shutdownErr);
        process.exit(1);
      }
    };

    process.on('SIGINT', () => gracefulShutdown('SIGINT'));
    process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));

    // visibility handlers
    process.on('unhandledRejection', (reason, promise) => {
      console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    });

    process.on('uncaughtException', (err) => {
      console.error('Uncaught Exception thrown:', err);
      // Let logs flush and exit
      setTimeout(() => process.exit(1), 100);
    });

  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
}

start();

// Export app for tests or serverless reuse (optional)
module.exports = app;
