const db = require('../models');

class CareerService {
  async getAllCareers() {
    return await db.Career.findAll();
  }
}

module.exports = new CareerService();
