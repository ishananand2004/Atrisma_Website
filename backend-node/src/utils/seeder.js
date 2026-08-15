const db = require('../models');

const seedData = async () => {
  try {
    const productCount = await db.Product.count();
    if (productCount === 0) {
      await db.Product.bulkCreate([
        { name: "Atris-Cardio Plus", category: "Cardiology", description: "Advanced cardiovascular support.", imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600&auto=format&fit=crop" },
        { name: "Neuroliv SR", category: "Neurology", description: "Sustained release neurological care.", imageUrl: "https://images.unsplash.com/photo-1550572017-edb799988b40?q=80&w=600&auto=format&fit=crop" },
        { name: "DermaGlow Forte", category: "Dermatology", description: "Premium dermatological formulation.", imageUrl: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=600&auto=format&fit=crop" },
        { name: "OncoShield", category: "Oncology", description: "Targeted oncology therapy.", imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop" }
      ]);
      console.log('Products seeded successfully.');
    }

    const careerCount = await db.Career.count();
    if (careerCount === 0) {
      await db.Career.bulkCreate([
        { jobTitle: "Senior Research Scientist", location: "Mumbai, India", description: "Lead research initiatives in our main R&D center.", requirements: "Ph.D. in related field, 5+ years experience" },
        { jobTitle: "Clinical Trial Manager", location: "London, UK", description: "Manage global clinical trials for new therapeutics.", requirements: "BSc/MSc in Life Sciences, 3+ years clinical management" },
        { jobTitle: "Quality Assurance Lead", location: "New Jersey, USA", description: "Ensure all products meet FDA and global standards.", requirements: "BS in Science, 5+ years QA experience in Pharma" },
        { jobTitle: "Territory Manager", location: "India", description: "Drive sales and build relationships with healthcare professionals.", requirements: "Excellent communication, prior pharma sales experience" }
      ]);
      console.log('Careers seeded successfully.');
    }
  } catch (error) {
    console.error('Error seeding data:', error);
  }
};

module.exports = seedData;
