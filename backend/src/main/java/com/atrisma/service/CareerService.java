package com.atrisma.service;

import com.atrisma.model.Career;
import com.atrisma.repository.CareerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CareerService {

    private final CareerRepository careerRepository;

    public List<Career> getAllCareers() {
        return careerRepository.findAll();
    }
}
