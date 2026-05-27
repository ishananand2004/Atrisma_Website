package com.atrisma.service;

import com.atrisma.dto.ContactRequestDTO;
import com.atrisma.model.ContactMessage;
import com.atrisma.repository.ContactMessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ContactService {

    private final ContactMessageRepository contactMessageRepository;

    public void saveContactMessage(ContactRequestDTO dto) {
        ContactMessage message = new ContactMessage();
        message.setName(dto.getName());
        message.setEmail(dto.getEmail());
        message.setMessage(dto.getMessage());
        contactMessageRepository.save(message);
    }
}
