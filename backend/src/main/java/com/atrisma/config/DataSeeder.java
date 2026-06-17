package com.atrisma.config;

import com.atrisma.model.Career;
import com.atrisma.model.Product;
import com.atrisma.repository.CareerRepository;
import com.atrisma.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import java.util.List;

@Component
@RequiredArgsConstructor
public class DataSeeder implements CommandLineRunner {

    private final ProductRepository productRepository;
    private final CareerRepository careerRepository;

    @Override
    public void run(String... args) throws Exception {
        if (productRepository.count() == 0) {
            productRepository.saveAll(List.of(
                new Product(null, "Atris-Cardio Plus", "Cardiology", "Advanced cardiovascular support.", "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600&auto=format&fit=crop"),
                new Product(null, "Neuroliv SR", "Neurology", "Sustained release neurological care.", "https://images.unsplash.com/photo-1550572017-edb799988b40?q=80&w=600&auto=format&fit=crop"),
                new Product(null, "DermaGlow Forte", "Dermatology", "Premium dermatological formulation.", "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=600&auto=format&fit=crop"),
                new Product(null, "OncoShield", "Oncology", "Targeted oncology therapy.", "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop")
            ));
        }

        if (careerRepository.count() == 0) {
            careerRepository.saveAll(List.of(
                new Career(null, "Senior Research Scientist", "Mumbai, India", "Lead research initiatives in our main R&D center.", "Ph.D. in related field, 5+ years experience"),
                new Career(null, "Clinical Trial Manager", "London, UK", "Manage global clinical trials for new therapeutics.", "BSc/MSc in Life Sciences, 3+ years clinical management"),
                new Career(null, "Quality Assurance Lead", "New Jersey, USA", "Ensure all products meet FDA and global standards.", "BS in Science, 5+ years QA experience in Pharma"),
                new Career(null, "Territory Manager", "India", "Drive sales and build relationships with healthcare professionals.", "Excellent communication, prior pharma sales experience")
            ));
        }
    }
}
