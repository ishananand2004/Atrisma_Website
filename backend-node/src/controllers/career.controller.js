const careerService = require('../services/career.service');

class CareerController {
  async getAllCareers(req, res, next) {
    try {
      const careers = await careerService.getAllCareers();
      res.status(200).json(careers);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CareerController();
