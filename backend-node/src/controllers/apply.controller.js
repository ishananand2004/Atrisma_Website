const emailService = require('../services/email.service');

class ApplyController {
  async submitApplication(req, res, next) {
    try {
      // Send email
      await emailService.sendApplyEmail(req.body);
      
      res.status(200).json({
        success: true,
        message: "Application submitted successfully"
      });
    } catch (error) {
      console.error("Error processing job application", error);
      res.status(500).json({
        success: false,
        message: "Failed to submit application"
      });
    }
  }
}

module.exports = new ApplyController();
