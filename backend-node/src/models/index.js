const sequelize = require('../config/db.config');
const Product = require('./Product');
const Career = require('./Career');
const ContactMessage = require('./ContactMessage');

const db = {
  sequelize,
  Product,
  Career,
  ContactMessage,
};

module.exports = db;
