const nodemailer = require('nodemailer');

class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
    this.toEmail = 'atrismapharmaceuticals@gmail.com';
    this.fromEmail = process.env.SMTP_USER;
  }

  async sendContactEmail(request) {
    try {
      const htmlContent = `
        <div style='font-family: Arial, sans-serif; padding: 20px;'>
          <h2 style='color: #2c3e50;'>📩 New Contact Message</h2>
          <hr style='border: 1px solid #ddd;'/>
          <p><strong>Name:</strong> ${request.name}</p>
          <p><strong>Email:</strong> <a href='mailto:${request.email}'>${request.email}</a></p>
          <p><strong>Subject:</strong> ${request.subject}</p>
          <p><strong>Message:</strong></p>
          <div style='background:#f9f9f9; padding:15px; border-left:4px solid #3498db;'>${request.message}</div>
          <hr/><p style='color:gray; font-size:12px;'>Sent via Atrisma Website Contact Form</p>
        </div>
      `;

      await this.transporter.sendMail({
        from: `"Atrisma Pharmaceuticals Website" <${this.fromEmail}>`,
        to: this.toEmail,
        replyTo: request.email,
        subject: `New Contact Message: ${request.subject}`,
        html: htmlContent,
      });

      console.log(`✅ Contact email sent successfully from: ${request.email}`);
    } catch (error) {
      console.error(`❌ Failed to send contact email: ${error.message}`, error);
      throw new Error("Failed to send email: " + error.message);
    }
  }

  async sendApplyEmail(request) {
    try {
      const htmlContent = `
        <div style='font-family: Arial, sans-serif; padding: 20px;'>
          <h2 style='color: #2c3e50;'>💼 New Job Application</h2>
          <hr style='border: 1px solid #ddd;'/>
          <p><strong>Name:</strong> ${request.name}</p>
          <p><strong>Email:</strong> <a href='mailto:${request.email}'>${request.email}</a></p>
          <p><strong>Phone:</strong> ${request.phone}</p>
          <p><strong>Role Applied For:</strong> ${request.role}</p>
          <p><strong>Cover Letter / Message:</strong></p>
          <div style='background:#f9f9f9; padding:15px; border-left:4px solid #27ae60;'>${request.message}</div>
          <hr/><p style='color:gray; font-size:12px;'>Sent via Atrisma Website Career Form</p>
        </div>
      `;

      await this.transporter.sendMail({
        from: `"Atrisma Pharmaceuticals Website" <${this.fromEmail}>`,
        to: this.toEmail,
        replyTo: request.email,
        subject: `💼 New Job Application: ${request.role} - ${request.name}`,
        html: htmlContent,
      });

      console.log(`✅ Application email sent successfully from: ${request.email}`);
    } catch (error) {
      console.error(`❌ Failed to send application email: ${error.message}`, error);
      throw new Error("Failed to send email: " + error.message);
    }
  }
}

module.exports = new EmailService();
