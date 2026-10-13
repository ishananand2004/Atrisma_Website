require('dotenv').config();
const app = require('./src/app');

const PORT = process.env.PORT || 8000;

// For local development: start the server
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
}

// Export for Vercel serverless functions
module.exports = app;
