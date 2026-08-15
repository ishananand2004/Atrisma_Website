const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Career = sequelize.define('Career', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  jobTitle: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'job_title',
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  requirements: {
    type: DataTypes.TEXT,
  },
}, {
  tableName: 'careers',
  timestamps: false,
});

module.exports = Career;
