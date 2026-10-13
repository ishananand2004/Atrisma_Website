const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

// Middleware mimicking Spring Boot CorsConfig
const corsOptions = {
  origin: ["https://atrisma-website-8nfi.vercel.app"],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'Origin', 'X-Requested-With'],
  credentials: false
};

// Preflight must be registered before cors() and helmet()
app.options('*', cors(corsOptions));
app.use(cors(corsOptions));

// Helmet's crossOriginResourcePolicy defaults to 'same-origin' which blocks
// cross-origin responses — disable it so CORS headers aren't overridden
app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount all API routes under /api
app.use('/api', require('./routes'));

// Global Error Handler
app.use(require('./middleware/error.middleware'));

module.exports = app;
