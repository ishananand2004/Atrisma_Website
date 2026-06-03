import { motion } from 'framer-motion';
import PageHeader from '@/components/layout/PageHeader';
import { TIMELINE } from '@/constants';
import { Shield, Award, Users, Globe } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';

const VALUES = [
  { icon: Shield, title: 'Quality Assurance', desc: 'Uncompromising commitment to the highest quality standards.' },
  { icon: Award, title: 'Innovation', desc: 'Pioneering new therapeutic solutions through cutting-edge R&D.' },
  { icon: Users, title: 'Patient-Centric', desc: 'Putting patient well-being at the heart of everything we do.' },
  { icon: Globe, title: 'Global Reach', desc: 'Ensuring accessible healthcare across diverse geographies.' },
];

export default function About() {
  return (
    <div className="w-full bg-[#030014] min-h-screen">
      <PageHeader 
        title="Who We Are"
        subtitle="A legacy of trust, driven by science and compassion."
      />

      {/* Mission & Vision */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-neonCyan/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-10 relative z-10">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-heading font-bold text-white mb-6">Our <span className="text-neonCyan">Mission</span></h2>
              <p className="text-lg text-white/60 leading-relaxed">
                To enhance the quality of human life by providing affordable, high-quality pharmaceutical products globally. We strive to be a trusted healthcare partner, driven by innovation and excellence.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-heading font-bold text-white mb-6">Our <span className="text-neonPurple">Vision</span></h2>
              <p className="text-lg text-white/60 leading-relaxed">
                To emerge as a leading global pharmaceutical company, recognized for our diverse portfolio, robust R&D, and unwavering commitment to ethical business practices.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-[#01000B] border-t border-white/5 relative">
        <div className="container mx-auto px-6 md:px-10 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonCyan to-neonPurple">Values</span></h2>
            <p className="text-white/50 max-w-2xl mx-auto">The principles that guide our decisions and shape our culture.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlassCard hoverEffect={true} className="h-full text-center p-8">
                  <div className="mx-auto w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 text-neonCyan border border-white/10">
                    <val.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{val.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{val.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-neonPurple/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-10 max-w-4xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-16 text-center">Our <span className="text-neonCyan">Journey</span></h2>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
            {TIMELINE.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#030014] bg-neonCyan text-white shadow-[0_0_15px_rgba(6,182,212,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
                
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-neonCyan/50 hover:bg-white/10 transition-all">
                  <div className="font-extrabold text-neonCyan text-2xl mb-2">{item.year}</div>
                  <h4 className="font-heading font-semibold text-lg text-white mb-2">{item.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
