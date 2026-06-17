import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';

const faqs = [
  {
    question: "What products do you offer?",
    answer: "We offer a diverse portfolio of pharmaceutical products including tablets, capsules, syrups, sachets, injections, and nutritional supplements covering various therapeutic segments."
  },
  {
    question: "Are your medicines approved and safe?",
    answer: "Yes, All our medicines are manufactured in WHO-GMP certified facilities and undergo stringent quality control checks to ensure they meet the highest standards of safety and efficacy."
  },
  {
    question: "Do you operate only in India?",
    answer: "Yes, we currently operate within India, serving healthcare providers, pharmacies, and distributors across the country."
  },
  {
    question: "How can I contact your team?",
    answer: "You can reach us through our Contact page, email us directly, or call our customer support lines. Our dedicated team is always ready to assist you."
  },
  
  {
    question: "How do you ensure quality?",
    answer: "Quality is embedded in our processes. We follow strict Good Manufacturing Practices (GMP), utilize advanced testing equipment, and have a dedicated quality assurance team at every step."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white dark:bg-[#030014] relative transition-colors duration-300 z-10">
      <div className="container mx-auto px-6 md:px-10 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-cyan)] to-[var(--color-brand-purple)]">Questions</span>
          </h2>
          <p className="text-gray-600 dark:text-white/50 transition-colors">Find answers to some of the most common questions about our company and products.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden bg-gray-50 dark:bg-white/5 transition-colors duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              >
                <span className="font-semibold text-lg text-gray-900 dark:text-white transition-colors">{faq.question}</span>
                <ChevronDown 
                  className={clsx(
                    "text-gray-500 dark:text-white/50 transition-transform duration-300 shrink-0 ml-4",
                    openIndex === index ? "rotate-180" : ""
                  )} 
                  size={20} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-gray-600 dark:text-white/60 leading-relaxed transition-colors border-t border-gray-100 dark:border-white/5 mt-4 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
