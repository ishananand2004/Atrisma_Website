import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { PRODUCTS } from '@/constants/products';

export default function ProductGrid() {
  const displayProducts = PRODUCTS.slice(0, 6);

  return (
    <section className="py-24 bg-white dark:bg-[#030014] transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              {/* Discover Our Portfolio */}
              Our Products
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 dark:text-white/60 leading-relaxed"
            >
              Explore our range of high-quality pharmaceutical formulations designed to improve patient outcomes across various therapeutic areas.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link 
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-[#7C3AED] hover:bg-[#6b21a8] dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:border dark:border-white/20 transition-all duration-300 hover:shadow-md"
            >
              View All Products
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
