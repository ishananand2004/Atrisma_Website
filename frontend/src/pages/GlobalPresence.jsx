import { motion } from 'framer-motion';
import HeroSection from '@/components/sections/HeroSection';
import CTASection from '@/components/sections/CTASection';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail } from 'lucide-react';
import { OFFICE_LOCATIONS } from '@/constants';

export default function GlobalPresence() {
  return (
    <div className="w-full">
      <HeroSection 
        title="Global Footprint"
        subtitle="Delivering healthcare solutions across borders, reaching patients wherever they are."
        image="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=2000&auto=format&fit=crop"
        ctaText="Find an Office"
        ctaLink="#locations"
      />

      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Our Global Reach</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              With a presence in over 50 countries, our extensive network of manufacturing facilities, R&D centers, and sales offices ensures a seamless supply of quality medicines globally.
            </p>
          </div>

          <motion.div 
            className="w-full max-w-5xl mx-auto mb-20 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* SVG World Map Placeholder */}
            <div className="aspect-video bg-blue-50 rounded-2xl flex items-center justify-center border border-blue-100 relative overflow-hidden">
              <svg viewBox="0 0 800 400" className="w-full h-full text-blue-200 fill-current opacity-60">
                <path d="M120 100 Q150 50 200 80 T300 120 T400 90 T500 140 T600 100 T700 130 L700 300 L120 300 Z" />
                <path d="M250 150 Q280 200 350 180 T450 220 T550 190 L550 350 L250 350 Z" />
              </svg>
              
              {/* Map Dots */}
              <div className="absolute top-[30%] left-[20%] w-3 h-3 bg-accent rounded-full animate-ping" />
              <div className="absolute top-[30%] left-[20%] w-3 h-3 bg-accent rounded-full" />
              
              <div className="absolute top-[40%] left-[45%] w-3 h-3 bg-primary rounded-full" />
              <div className="absolute top-[25%] left-[65%] w-3 h-3 bg-primary rounded-full" />
              <div className="absolute top-[50%] left-[55%] w-3 h-3 bg-primary rounded-full" />
              <div className="absolute top-[60%] left-[75%] w-3 h-3 bg-primary rounded-full" />
            </div>
          </motion.div>

          <div id="locations" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-gray-100">
            {OFFICE_LOCATIONS.map((office, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow bg-white">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                      <MapPin className="text-accent mr-2" size={20} />
                      {office.city}
                    </h3>
                    <div className="space-y-3 text-sm text-gray-600">
                      <p className="leading-relaxed">{office.address}</p>
                      <p className="flex items-center">
                        <Phone size={16} className="mr-2 text-gray-400" />
                        {office.phone}
                      </p>
                      <p className="flex items-center">
                        <Mail size={16} className="mr-2 text-gray-400" />
                        contact@atrisma.com
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Distribute with Atrisma"
        description="Explore distribution and partnership opportunities in your region."
        buttonText="Become a Partner"
        buttonLink="/contact"
      />
    </div>
  );
}
