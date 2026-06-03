import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '@/components/sections/ProductCard';
import CTASection from '@/components/sections/CTASection';
import { PRODUCTS } from '@/constants/products';
import { X, Search } from 'lucide-react';

export default function Products() {
  const products = PRODUCTS;
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = useMemo(() => {
    const cats = new Set(products.map(p => p.category));
    return ['All', ...Array.from(cats)];
  }, [products]);

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return products;
    return products.filter(p => p.category === activeCategory);
  }, [products, activeCategory]);

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#030014]">
      <Helmet>
        <title>Our Therapeutics Portfolio | Atrisma Pharmaceuticals</title>
        <meta name="description" content="Explore Atrisma Pharmaceuticals' comprehensive portfolio of high-quality therapeutic solutions and pharmaceutical products." />
      </Helmet>

      {/* Page Header */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030014] to-neonPurple/5" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neonPurple/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-10 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
              Our Therapeutics <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonCyan to-neonPurple">Portfolio</span>
            </h1>
            <p className="text-xl text-white/50">
              Comprehensive solutions for complex healthcare challenges.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 flex-grow relative">
        <div className="container mx-auto px-6 md:px-10">
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 relative z-20">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category 
                    ? "bg-neonCyan text-black shadow-[0_0_20px_rgba(6,182,212,0.4)]" 
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <ProductCard 
                    product={product} 
                    index={index} 
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-white/40 flex flex-col items-center">
              <Search size={48} className="mb-4 opacity-50" />
              <p className="text-lg">No products found in this category.</p>
            </div>
          )}

        </div>
      </section>

      <CTASection 
        title="Looking for specific formulations?"
        description="Our team can assist you with detailed product monographs and availability."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </div>
  );
}
