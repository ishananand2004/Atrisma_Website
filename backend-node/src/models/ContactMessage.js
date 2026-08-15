const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const ContactMessage = sequelize.define('ContactMessage', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
    field: 'created_at',
  },
}, {
  tableName: 'contact_messages',
  timestamps: false, // We handle createdAt manually like Spring Boot PrePersist or via defaultValue
});

module.exports = ContactMessage;
