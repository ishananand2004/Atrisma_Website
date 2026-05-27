package com.atrisma.controller;

import com.atrisma.dto.ContactRequestDTO;
import com.atrisma.service.ContactService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
public class ContactController {

    private final ContactService contactService;

    @PostMapping
    public ResponseEntity<Map<String, String>> submitContact(@Valid @RequestBody ContactRequestDTO dto) {
        contactService.saveContactMessage(dto);
        Map<String, String> response = new HashMap<>();
        response.put("message", "Contact message saved successfully");
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
}
