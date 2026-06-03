import { motion } from 'framer-motion';
import PageHeader from '@/components/layout/PageHeader';
import CTASection from '@/components/sections/CTASection';
import { MapPin, Phone, Mail } from 'lucide-react';
import { OFFICE_LOCATIONS } from '@/constants';
import GlassCard from '@/components/ui/GlassCard';

export default function GlobalPresence() {
  return (
    <div className="w-full bg-[#030014] min-h-screen flex flex-col">
      <PageHeader 
        title="Global Footprint"
        subtitle="Delivering healthcare solutions across borders, reaching patients wherever they are."
      />

      <section className="py-24 relative overflow-hidden flex-grow">
        <div className="absolute left-0 top-1/4 w-[600px] h-[600px] bg-neonCyan/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute right-0 bottom-1/4 w-[600px] h-[600px] bg-neonPurple/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-10 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Our Global <span className="text-neonCyan">Reach</span></h2>
            <p className="text-white/50 max-w-2xl mx-auto leading-relaxed">
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
            {/* SVG World Map Placeholder with neon grid */}
            <div className="aspect-video glass-panel rounded-2xl flex items-center justify-center relative overflow-hidden border border-white/10 group">
              <div className="absolute inset-0 opacity-20" 
                  style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
              
              <svg viewBox="0 0 800 400" className="w-full h-full text-neonPurple/20 fill-current relative z-10 group-hover:text-neonPurple/30 transition-colors duration-700">
                <path d="M120 100 Q150 50 200 80 T300 120 T400 90 T500 140 T600 100 T700 130 L700 300 L120 300 Z" />
                <path d="M250 150 Q280 200 350 180 T450 220 T550 190 L550 350 L250 350 Z" />
              </svg>
              
              {/* Map Dots */}
              <div className="absolute top-[30%] left-[20%] w-3 h-3 bg-neonCyan rounded-full animate-ping z-20 shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
              <div className="absolute top-[30%] left-[20%] w-3 h-3 bg-neonCyan rounded-full z-20" />
              
              <div className="absolute top-[40%] left-[45%] w-3 h-3 bg-neonPurple rounded-full z-20 shadow-[0_0_10px_rgba(124,58,237,0.8)]" />
              <div className="absolute top-[25%] left-[65%] w-3 h-3 bg-neonPurple rounded-full z-20 shadow-[0_0_10px_rgba(124,58,237,0.8)]" />
              <div className="absolute top-[50%] left-[55%] w-3 h-3 bg-neonPurple rounded-full z-20 shadow-[0_0_10px_rgba(124,58,237,0.8)]" />
              <div className="absolute top-[60%] left-[75%] w-3 h-3 bg-neonPurple rounded-full z-20 shadow-[0_0_10px_rgba(124,58,237,0.8)]" />
            </div>
          </motion.div>

          <div id="locations" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-white/10">
            {OFFICE_LOCATIONS.map((office, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="h-full"
              >
                <GlassCard hoverEffect={true} className="h-full p-6 group">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center group-hover:text-neonCyan transition-colors">
                    <MapPin className="text-neonCyan mr-2" size={20} />
                    {office.city}
                  </h3>
                  <div className="space-y-3 text-sm text-white/60">
                    <p className="leading-relaxed">{office.address}</p>
                    <p className="flex items-center hover:text-white transition-colors cursor-pointer">
                      <Phone size={16} className="mr-2 text-white/40" />
                      {office.phone}
                    </p>
                    <p className="flex items-center hover:text-white transition-colors cursor-pointer">
                      <Mail size={16} className="mr-2 text-white/40" />
                      contact@atrisma.com
                    </p>
                  </div>
                </GlassCard>
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
