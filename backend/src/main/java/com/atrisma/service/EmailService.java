package com.atrisma.service;

import com.atrisma.dto.ApplyRequestDTO;
import com.atrisma.dto.ContactRequestDTO;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class EmailService {

    private final JavaMailSender javaMailSender;

    @Value("${spring.mail.username}")
    private String fromEmail;

    private final String TO_EMAIL = "atrismapharmaceuticals@gmail.com";

    public void sendContactEmail(ContactRequestDTO request) {
        try {
            MimeMessage message = javaMailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            helper.setFrom(fromEmail, "Atrisma Pharmaceuticals Website");
            helper.setTo(TO_EMAIL);
            helper.setSubject("New Contact Message: " + request.getSubject());

            String htmlContent = String.format(
                "<div style='font-family: Arial, sans-serif; padding: 20px;'>" +
                "<h2 style='color: #2c3e50;'>📩 New Contact Message</h2>" +
                "<hr style='border: 1px solid #ddd;'/>" +
                "<p><strong>Name:</strong> %s</p>" +
                "<p><strong>Email:</strong> <a href='mailto:%s'>%s</a></p>" +
                "<p><strong>Subject:</strong> %s</p>" +
                "<p><strong>Message:</strong></p>" +
                "<div style='background:#f9f9f9; padding:15px; border-left:4px solid #3498db;'>%s</div>" +
                "<hr/><p style='color:gray; font-size:12px;'>Sent via Atrisma Website Contact Form</p>" +
                "</div>",
                request.getName(),
                request.getEmail(), request.getEmail(),
                request.getSubject(),
                request.getMessage()
            );

            helper.setText(htmlContent, true);
            helper.setReplyTo(request.getEmail());

            javaMailSender.send(message);
            log.info("✅ Contact email sent successfully from: {}", request.getEmail());

        } catch (MessagingException e) {
            log.error("❌ Failed to send contact email: {}", e.getMessage(), e);
            throw new RuntimeException("Failed to send email: " + e.getMessage());
        } catch (Exception e) {
            log.error("❌ Unexpected error sending contact email: {}", e.getMessage(), e);
            throw new RuntimeException("Failed to send email: " + e.getMessage());
        }
    }

    public void sendApplyEmail(ApplyRequestDTO request) {
        try {
            MimeMessage message = javaMailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            helper.setFrom(fromEmail, "Atrisma Pharmaceuticals Website");
            helper.setTo(TO_EMAIL);
            helper.setSubject("💼 New Job Application: " + request.getRole() + " - " + request.getName());

            String htmlContent = String.format(
                "<div style='font-family: Arial, sans-serif; padding: 20px;'>" +
                "<h2 style='color: #2c3e50;'>💼 New Job Application</h2>" +
                "<hr style='border: 1px solid #ddd;'/>" +
                "<p><strong>Name:</strong> %s</p>" +
                "<p><strong>Email:</strong> <a href='mailto:%s'>%s</a></p>" +
                "<p><strong>Phone:</strong> %s</p>" +
                "<p><strong>Role Applied For:</strong> %s</p>" +
                "<p><strong>Cover Letter / Message:</strong></p>" +
                "<div style='background:#f9f9f9; padding:15px; border-left:4px solid #27ae60;'>%s</div>" +
                "<hr/><p style='color:gray; font-size:12px;'>Sent via Atrisma Website Career Form</p>" +
                "</div>",
                request.getName(),
                request.getEmail(), request.getEmail(),
                request.getPhone(),
                request.getRole(),
                request.getMessage()
            );

            helper.setText(htmlContent, true);
            helper.setReplyTo(request.getEmail());

            javaMailSender.send(message);
            log.info("✅ Application email sent successfully from: {}", request.getEmail());

        } catch (MessagingException e) {
            log.error("❌ Failed to send application email: {}", e.getMessage(), e);
            throw new RuntimeException("Failed to send email: " + e.getMessage());
        } catch (Exception e) {
            log.error("❌ Unexpected error sending application email: {}", e.getMessage(), e);
            throw new RuntimeException("Failed to send email: " + e.getMessage());
        }
    }
}
