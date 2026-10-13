const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

// Middleware mimicking Spring Boot CorsConfig
const corsOptions = {
  origin: ["https://atrisma-website-8nfi.vercel.app/"],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['*'],
  credentials: false
};

app.use(cors(corsOptions));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount all API routes under /api
app.use('/api', require('./routes'));

// Global Error Handler
app.use(require('./middleware/error.middleware'));

module.exports = app;
