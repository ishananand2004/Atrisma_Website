const { Sequelize } = require('sequelize');
require('dotenv').config();

// Explicit require so Vercel's Node File Tracer bundles mysql2
// (Sequelize loads it dynamically, which NFT can't trace)
require('mysql2');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    logging: false,
    dialectOptions: process.env.DB_SSL === 'true'
      ? {
          ssl: {
            rejectUnauthorized: false,
          },
        }
      : {},
    define: {
      timestamps: false
    }
  }
);

module.exports = sequelize;
