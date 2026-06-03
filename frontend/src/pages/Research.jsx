import { motion } from 'framer-motion';
import PageHeader from '@/components/layout/PageHeader';
import CTASection from '@/components/sections/CTASection';
import { Microscope, Dna, Activity, Brain } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';

const FOCUS_AREAS = [
  { icon: Microscope, title: 'Oncology', desc: 'Developing targeted therapies and immunotherapies to combat various forms of cancer.' },
  { icon: Brain, title: 'Neurology', desc: 'Advancing treatments for neurodegenerative diseases and central nervous system disorders.' },
  { icon: Activity, title: 'Cardiology', desc: 'Creating innovative solutions for cardiovascular health and disease management.' },
  { icon: Dna, title: 'Rare Diseases', desc: 'Dedicated research programs for orphan diseases with high unmet medical needs.' },
];

export default function Research() {
  return (
    <div className="w-full bg-[#030014] min-h-screen flex flex-col">
      <PageHeader 
        title="Research & Innovation"
        subtitle="Transforming scientific discoveries into life-saving therapies."
      />

      <section className="py-24 relative overflow-hidden border-b border-white/5">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-neonPurple/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-10 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                Our R&D <span className="text-neonCyan">Philosophy</span>
              </h2>
              <p className="text-lg text-white/60 mb-6 leading-relaxed">
                At Atrisma Pharmaceuticals, research and development is the cornerstone of our strategy. We invest over 10% of our annual revenue into R&D, focusing on complex formulations, novel drug delivery systems, and innovative biologicals.
              </p>
              <p className="text-lg text-white/60 leading-relaxed">
                Our global network of research centers employs over 2,000 scientists who work tirelessly to bring safe, effective, and affordable medicines to patients worldwide.
              </p>
            </motion.div>

            <motion.div 
              className="lg:w-1/2 grid grid-cols-2 gap-6 relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-neonCyan/20 to-transparent rounded-2xl blur-xl" />
              <img src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=600&auto=format&fit=crop" alt="Lab Work 1" className="rounded-2xl w-full h-56 object-cover border border-white/10 relative z-10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]" />
              <img src="https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=600&auto=format&fit=crop" alt="Lab Work 2" className="rounded-2xl w-full h-56 object-cover mt-12 border border-white/10 relative z-10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Therapeutic Focus Areas */}
      <section className="py-24 bg-[#01000B] relative overflow-hidden flex-grow">
        <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-neonCyan/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-10 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Therapeutic <span className="text-neonPurple">Focus Areas</span></h2>
            <p className="text-white/50 max-w-2xl mx-auto">Concentrating our efforts where we can make the most significant impact on patient lives.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FOCUS_AREAS.map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="h-full"
              >
                <GlassCard hoverEffect={true} className="h-full group">
                  <div className="p-8 h-full flex flex-col">
                    <div className="w-14 h-14 rounded-xl bg-neonPurple/10 flex items-center justify-center mb-6 text-neonPurple group-hover:bg-neonPurple group-hover:text-white transition-all duration-300 border border-neonPurple/20 group-hover:shadow-[0_0_15px_rgba(124,58,237,0.5)]">
                      <area.icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neonCyan transition-colors">{area.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed flex-grow">{area.desc}</p>
                  </div>
                </GlassCard>
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
