import { motion } from 'framer-motion';
import HeroSection from '@/components/sections/HeroSection';
import CTASection from '@/components/sections/CTASection';
import { Card, CardContent } from '@/components/ui/card';
import { Microscope, Dna, Activity, Brain } from 'lucide-react';

const FOCUS_AREAS = [
  { icon: Microscope, title: 'Oncology', desc: 'Developing targeted therapies and immunotherapies to combat various forms of cancer.' },
  { icon: Brain, title: 'Neurology', desc: 'Advancing treatments for neurodegenerative diseases and central nervous system disorders.' },
  { icon: Activity, title: 'Cardiology', desc: 'Creating innovative solutions for cardiovascular health and disease management.' },
  { icon: Dna, title: 'Rare Diseases', desc: 'Dedicated research programs for orphan diseases with high unmet medical needs.' },
];

export default function Research() {
  return (
    <div className="w-full">
      <HeroSection 
        title="Research & Innovation"
        subtitle="Transforming scientific discoveries into life-saving therapies."
        image="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2000&auto=format&fit=crop"
        ctaText="View Our Pipeline"
        ctaLink="#pipeline"
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                Our R&D Philosophy
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Atrisma Pharmaceuticals, research and development is the cornerstone of our strategy. We invest over 10% of our annual revenue into R&D, focusing on complex formulations, novel drug delivery systems, and innovative biologicals.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our global network of research centers employs over 2,000 scientists who work tirelessly to bring safe, effective, and affordable medicines to patients worldwide.
              </p>
            </motion.div>

            <motion.div 
              className="lg:w-1/2 grid grid-cols-2 gap-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=600&auto=format&fit=crop" alt="Lab Work 1" className="rounded-xl w-full h-48 object-cover" />
              <img src="https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=600&auto=format&fit=crop" alt="Lab Work 2" className="rounded-xl w-full h-48 object-cover mt-8" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Therapeutic Focus Areas */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Therapeutic Focus Areas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Concentrating our efforts where we can make the most significant impact on patient lives.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FOCUS_AREAS.map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="h-full border-none shadow-sm hover:shadow-xl transition-all duration-300 bg-white group">
                  <CardContent className="pt-8 pb-6 px-6">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <area.icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{area.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{area.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Partner with our R&D Team"
        description="We are actively seeking strategic partnerships and in-licensing opportunities."
        buttonText="Contact Business Development"
        buttonLink="/contact"
      />
    </div>
  );
}
