import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Dr. Rajesh Sharma",
    role: "Senior Physician",
    comment: "High-quality medicines with consistent results. Highly reliable brand that I confidently prescribe to my patients."
  },
  {
    name: "Anita Desai",
    role: "Pharmaceutical Distributor",
    comment: "Excellent support, transparent dealings, and timely delivery. Partnering with Atrisma has significantly grown our business."
  },
  {
    name: "Dr. Meera Reddy",
    role: "Pediatrician",
    comment: "Their pediatric range is exceptional. The formulations are effective, safe, and very well tolerated by children."
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-[#01000B] border-t border-gray-200 dark:border-white/5 relative transition-colors duration-300 z-10 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-brand-purple)]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-[var(--color-brand-cyan)]/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            What People <span className="text-[var(--color-brand-cyan)]">Say About Us</span>
          </h2>
          <p className="text-gray-600 dark:text-white/50 max-w-2xl mx-auto transition-colors">
            Hear from our partners, healthcare professionals, and distributors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <div className="glass-panel h-full p-8 rounded-2xl shadow-sm hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] dark:hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300 group bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 relative overflow-hidden flex flex-col">
                <Quote className="absolute top-6 right-6 text-gray-100 dark:text-white/5 w-12 h-12 transition-colors group-hover:text-[var(--color-brand-cyan)]/10" />
                <div className="relative z-10 flex flex-col h-full">
                  <p className="text-gray-600 dark:text-white/80 leading-relaxed mb-8 italic transition-colors flex-grow">
                    "{testi.comment}"
                  </p>
                  <div className="mt-auto">
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg transition-colors group-hover:text-[var(--color-brand-cyan)]">
                      {testi.name}
                    </h4>
                    <p className="text-sm text-[var(--color-brand-purple)] dark:text-[var(--color-brand-cyan)] font-medium">
                      {testi.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
