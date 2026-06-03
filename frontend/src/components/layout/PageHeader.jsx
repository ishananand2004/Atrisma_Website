import { motion } from 'framer-motion';

export default function PageHeader({ title, subtitle }) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden border-b border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#030014] transition-colors duration-300">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 dark:from-[#030014] to-neonPurple/5 transition-colors duration-300" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neonPurple/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="container mx-auto px-6 md:px-10 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-gray-600 dark:text-white/50 transition-colors duration-300">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
