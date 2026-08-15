const contactService = require('../services/contact.service');
const emailService = require('../services/email.service');

class ContactController {
  async submitContact(req, res, next) {
    try {
      // 1. Save to DB
      await contactService.saveContactMessage(req.body);
      
      // 2. Send email
      await emailService.sendContactEmail(req.body);
      
      // 3. Return response exactly like Spring Boot:
      // response.put("success", true);
      // response.put("message", "Message sent successfully");
      res.status(200).json({
        success: true,
        message: "Message sent successfully"
      });
    } catch (error) {
      console.error("Error processing contact submission", error);
      res.status(500).json({
        success: false,
        message: "Failed to send message"
      });
    }
  }
}

module.exports = new ContactController();
