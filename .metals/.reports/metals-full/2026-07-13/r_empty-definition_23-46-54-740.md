error id: file://<WORKSPACE>/backend/src/main/java/com/atrisma/controller/ApplyController.java:_empty_/EmailService#sendApplyEmail#
file://<WORKSPACE>/backend/src/main/java/com/atrisma/controller/ApplyController.java
empty definition using pc, found symbol in pc: _empty_/EmailService#sendApplyEmail#
empty definition using semanticdb
empty definition using fallback
non-local guesses:

offset: 1019
uri: file://<WORKSPACE>/backend/src/main/java/com/atrisma/controller/ApplyController.java
text:
```scala
package com.atrisma.controller;

import com.atrisma.dto.ApplyRequestDTO;
import com.atrisma.service.EmailService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/apply")
@RequiredArgsConstructor
@Slf4j
public class ApplyController {

    private final EmailService emailService;

    @PostMapping
    public ResponseEntity<Map<String, Object>> submitApplication(@Valid @RequestBody ApplyRequestDTO dto) {
        Map<String, Object> response = new HashMap<>();
        try {
            // Send email
            emailService.sendApply@@Email(dto);
            
            response.put("success", true);
            response.put("message", "Application submitted successfully");
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            log.error("Error processing job application", e);
            response.put("success", false);
            response.put("message", "Failed to submit application");
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

```


#### Short summary: 

empty definition using pc, found symbol in pc: _empty_/EmailService#sendApplyEmail#