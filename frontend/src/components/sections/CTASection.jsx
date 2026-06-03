import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CTASection({ title, description, buttonText, buttonLink }) {
  return (
    <section className="py-32 bg-gray-50 dark:bg-[#030014] relative overflow-hidden border-t border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
      {/* Background Pattern & Glows */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '48px 48px' }} />
           
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-neonPurple/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-10 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring" }}
          className="max-w-4xl w-full glass-panel border border-gray-200 dark:border-white/10 rounded-[3rem] p-12 md:p-24 relative overflow-hidden"
        >
          {/* Inner animated border glow */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neonCyan to-transparent opacity-50" />
            <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-neonPurple to-transparent opacity-50" />
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight tracking-tight transition-colors duration-300">
              {title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-white/60 mb-12 max-w-2xl mx-auto font-light leading-relaxed transition-colors duration-300">
              {description}
            </p>
            
            <Link 
              to={buttonLink}
              className="inline-flex relative group"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neonPurple to-neonCyan blur-md opacity-70 group-hover:opacity-100 group-hover:blur-lg transition duration-300" />
              <div className="relative flex items-center justify-center px-10 py-5 bg-white dark:bg-[#030014] rounded-full leading-none border border-gray-300 dark:border-white/20 group-hover:border-gray-400 dark:group-hover:border-white/40 transition-colors">
                <span className="text-gray-900 dark:text-white font-bold tracking-wide text-lg transition-colors">{buttonText}</span>
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
