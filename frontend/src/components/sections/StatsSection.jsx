import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { COMPANY_STATS } from '@/constants';
import GlassCard from '../ui/GlassCard';

// Custom hook for counting animation
const useCounter = (end, duration = 2000, inView = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime = null;
    let endValue = parseInt(end.replace(/[^0-9]/g, ''));
    
    if (isNaN(endValue)) {
      setCount(end);
      return;
    }

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * endValue));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        // preserve the original formatting (like '+')
        setCount(end);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [end, duration, inView]);

  return count;
};

const StatCard = ({ stat, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useCounter(stat.value, 2000, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-full"
    >
      <GlassCard hoverEffect={true} className="text-center h-full p-8 flex flex-col justify-center">
        <h3 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br dark:from-white dark:to-white/40 mb-3 drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-colors duration-300">
          {count}
        </h3>
        <p className="text-neonCyan font-medium tracking-wide uppercase text-sm mt-2">{stat.label}</p>
      </GlassCard>
    </motion.div>
  );
};

export default function StatsSection() {
  return (
    <section className="py-32 bg-white dark:bg-[#01000B] relative overflow-hidden border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neonCyan/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neonPurple/10 rounded-full blur-[120px] translate-y-1/4 -translate-x-1/4 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight transition-colors duration-300"
          >
            Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonCyan to-neonPurple">Impact</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-white/50 max-w-2xl mx-auto transition-colors duration-300"
          >
            Our commitment to healthcare excellence is reflected in our growing global footprint and the millions of lives we touch every day.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {COMPANY_STATS.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
