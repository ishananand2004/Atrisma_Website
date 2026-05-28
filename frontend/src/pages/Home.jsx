import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import HeroCarousel from '@/components/sections/HeroCarousel';
import StatsSection from '@/components/sections/StatsSection';
import ProductCard from '@/components/sections/ProductCard';
import CTASection from '@/components/sections/CTASection';
import { getProducts } from '@/services/api';

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    // Fetch products and slice first 3 for featured section
    getProducts().then(data => setFeaturedProducts(data.slice(0, 3)));
  }, []);

  return (
    <div className="w-full">
      <HeroCarousel />
      
      <StatsSection />

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                Our Therapeutics
              </h2>
              <p className="text-gray-600 text-lg">
                Discover our comprehensive portfolio of high-quality medications designed to address complex health challenges.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Research & Innovation Teaser */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <img 
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1200&auto=format&fit=crop" 
                alt="Research Laboratory" 
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                Pioneering the Future of Medicine
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our state-of-the-art R&D centers are at the forefront of medical innovation. We invest heavily in scientific research to develop breakthrough therapies that address unmet medical needs across various therapeutic areas.
              </p>
              <ul className="space-y-4 mb-8">
                {['Advanced Formulation Technologies', 'Rigorous Clinical Trials', 'Global Regulatory Compliance'].map((item, i) => (
                  <li key={i} className="flex items-center text-primary font-medium">
                    <div className="w-2 h-2 rounded-full bg-accent mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Join Our Global Network"
        description="Partner with us to expand access to high-quality healthcare in your region."
        buttonText="Contact Us Today"
        buttonLink="/contact"
      />
    </div>
  );
}
