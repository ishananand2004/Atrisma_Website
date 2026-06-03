import HeroSection from '@/components/sections/HeroSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import ProductShowcaseSection from '@/components/sections/ProductShowcaseSection';
import StatsSection from '@/components/sections/StatsSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <div className="w-full bg-white dark:bg-[#030014] transition-colors duration-300">
      <HeroSection />

      <HowItWorksSection />
      
      <section className="py-12 bg-gray-50 dark:bg-[#020010] transition-colors duration-300">
        <div className="container mx-auto px-6 md:px-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-8 transition-colors duration-300">
            Our Premium Products
          </h2>
          <ProductShowcaseSection />
        </div>
      </section>

      <StatsSection />

      <CTASection 
        title="Ready to Transform Healthcare?"
        description="Partner with us to expand access to high-quality, innovative therapies in your region."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </div>
  );
}
