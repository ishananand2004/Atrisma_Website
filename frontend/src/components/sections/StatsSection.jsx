import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { COMPANY_STATS } from '@/constants';
import { Card, CardContent } from '@/components/ui/card';

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
    >
      <Card className="border-none shadow-md hover:shadow-lg transition-shadow text-center h-full bg-white/50 backdrop-blur-sm">
        <CardContent className="pt-8 pb-6 px-4">
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-3">
            {count}
          </h3>
          <p className="text-gray-600 font-medium">{stat.label}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function StatsSection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Global Impact at a Glance
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our commitment to healthcare excellence is reflected in our growing global footprint and the millions of lives we touch every day.
          </p>
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
