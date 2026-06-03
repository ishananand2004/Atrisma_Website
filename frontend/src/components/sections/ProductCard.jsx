import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

export default function ProductCard({ product, index, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={clsx("h-full group", className)}
    >
      <Link to={`/products/${product.slug}`} className="block h-full cursor-pointer relative">
        <div className="h-full flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-[#06041A] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)] dark:hover:shadow-[0_10px_30px_rgba(6,182,212,0.2)] transition-all duration-300 transform group-hover:-translate-y-1">
          <div className="relative h-56 overflow-hidden bg-gray-50 dark:bg-black/40 border-b border-gray-100 dark:border-white/5">
            <div className="absolute inset-0 bg-black/5 dark:bg-black/40 group-hover:bg-transparent transition-colors z-10" />
            <img 
              src={product.image} 
              alt={product.name} 
              loading="lazy"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-white/90 dark:bg-black/60 backdrop-blur-md text-[#06B6D4] border border-[#06B6D4]/30 shadow-sm font-semibold text-xs rounded-full uppercase tracking-wide">
              {product.category}
            </div>
          </div>
          
          <div className="p-6 flex-grow flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#06B6D4] transition-colors">
              {product.name}
            </h3>
            <p className="text-gray-600 dark:text-white/60 text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
              {product.description}
            </p>
            
            <div className="mt-auto flex items-center gap-2 text-[#7C3AED] dark:text-[#A78BFA] font-medium group-hover:text-[#06B6D4] dark:group-hover:text-[#06B6D4] transition-colors">
              <span>View Product</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
