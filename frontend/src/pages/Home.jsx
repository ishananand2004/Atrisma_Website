import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/sections/HeroSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import ProductGrid from '@/components/sections/ProductGrid';
import StatsSection from '@/components/sections/StatsSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <div className="w-full bg-white dark:bg-[#030014] transition-colors duration-300">
      <Helmet>
        <title>Atrisma Pharmaceuticals | Pioneering the Future of Medicine</title>
        <meta name="description" content="Atrisma Pharmaceuticals is dedicated to developing innovative solutions that improve patient outcomes worldwide across critical therapeutic areas." />
      </Helmet>
      
      <HeroSection />

      <HowItWorksSection />
      
      <ProductGrid />

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
