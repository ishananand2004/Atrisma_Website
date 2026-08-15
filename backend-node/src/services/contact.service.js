const db = require('../models');

class ContactService {
  async saveContactMessage(dto) {
    await db.ContactMessage.create({
      name: dto.name,
      email: dto.email,
      message: dto.message,
      // createdAt is handled by the DB/Model automatically
    });
  }
}

module.exports = new ContactService();
