import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Microscope, ShieldCheck, Globe, Activity } from 'lucide-react';
import GlassCard from '../ui/GlassCard';

const STEPS = [
  {
    icon: Microscope,
    title: 'Advanced Formulations',
    description: 'Developing high-quality pharmaceutical formulations including syrups, tablets, capsules, and injectables for Indian healthcare needs.',
    color: '#7C3AED'
  },
  {
    icon: Activity,
    title: 'Quality Assurance',
    description: 'Strict quality control processes ensuring every product meets Indian regulatory standards and safety requirements.',
    color: '#06B6D4'
  },
  {
    icon: ShieldCheck,
    title: 'Certified Manufacturing',
    description: 'Manufactured in WHO-GMP certified facilities with a focus on consistency, purity, and reliability.',
    color: '#A78BFA'
  },
  {
    icon: Globe,
    title: 'Pan India Distribution',
    description: 'Strong distribution network delivering medicines across hospitals, clinics, and pharmacies throughout India.',
    color: '#38BDF8'
  }
];

export default function HowItWorksSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-32 relative bg-white dark:bg-[#01000B] transition-colors duration-300 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 -right-1/4 w-[600px] h-[600px] bg-neonPurple/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight transition-colors duration-300"
          >
           Atrisma Pharmaceuticals <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonCyan to-neonPurple">Process</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-white/50 max-w-2xl mx-auto transition-colors duration-300"
            >
            How we transform scientific discoveries into accessible, life-enhancing treatments.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-[40px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 dark:bg-white/5 -translate-x-1/2 transition-colors duration-300">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-neonCyan via-neonPurple to-neonCyan"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-24">
            {STEPS.map((step, index) => {
              const isEven = index % 2 === 0;
              const Icon = step.icon;

              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center w-full group">
                  {/* Timeline Dot */}
                  <div className="absolute left-[40px] md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="w-10 h-10 rounded-full bg-white dark:bg-[#030014] border-2 border-gray-300 dark:border-white/20 flex items-center justify-center transition-colors duration-500"
                      style={{ borderColor: step.color }}
                    >
                      <div className="w-3 h-3 rounded-full shadow-[0_0_10px_currentColor]" style={{ backgroundColor: step.color, color: step.color }} />
                    </motion.div>
                  </div>

                  {/* Content Container */}
                  <div className={`w-full md:w-1/2 flex ${isEven ? 'md:justify-end md:pr-16' : 'md:justify-start md:pl-16'} pl-24 md:pl-0`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
                      className="w-full max-w-md"
                    >
                      <GlassCard hoverEffect={true} className="p-8">
                        <div className="w-14 h-14 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center mb-6 border border-gray-200 dark:border-white/10 group-hover:border-gray-300 dark:group-hover:border-white/20 transition-colors">
                          <Icon size={28} style={{ color: step.color }} className="drop-shadow-[0_0_8px_currentColor]" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">{step.title}</h3>
                        <p className="text-gray-600 dark:text-white/60 leading-relaxed transition-colors">
                          {step.description}
                        </p>
                      </GlassCard>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
