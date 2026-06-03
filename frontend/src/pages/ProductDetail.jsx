import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { PRODUCTS } from '@/constants/products';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import CTASection from '@/components/sections/CTASection';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = PRODUCTS.find(p => p.slug === slug);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const relatedProducts = PRODUCTS.filter(
    p => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return (
    <div className="w-full pt-[72px] bg-white dark:bg-[#030014] text-gray-900 dark:text-white transition-colors duration-300">
      <Helmet>
        <title>{product.name} | Atrisma Pharmaceuticals</title>
        <meta name="description" content={product.description} />
      </Helmet>

      {/* Header with back button */}
      <div className="border-b border-gray-200 dark:border-white/5 bg-white/90 dark:bg-[#030014]/80 backdrop-blur-md sticky top-[72px] z-40 transition-colors">
        <div className="max-w-[1200px] mx-auto px-5 py-4">
          <Link 
            to="/products"
            className="inline-flex items-center text-sm font-medium text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Products
          </Link>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 py-10">
        {/* Top Section: 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden glass-panel p-6 shadow-sm dark:shadow-[0_0_50px_rgba(124,58,237,0.1)] lg:sticky top-32"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-brand-purple)]/10 dark:bg-neonPurple/20 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-brand-cyan)]/10 dark:bg-neonCyan/20 rounded-full blur-[80px] pointer-events-none" />
            
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-auto object-contain drop-shadow-xl relative z-10 max-h-[350px]"
            />
          </motion.div>

          {/* Right Column: Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-brand-cyan)]/30 bg-[var(--color-brand-cyan)]/10 text-[var(--color-brand-cyan)] text-xs font-bold tracking-[0.2em] uppercase mb-4 shadow-sm">
              {product.category}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-3 tracking-tight">
              {product.name}
            </h1>
            
            <h2 className="text-lg md:text-xl text-[var(--color-brand-purple)] font-semibold mb-5">
              {product.composition}
            </h2>

            <div className="w-16 h-1 bg-gradient-to-r from-[var(--color-brand-purple)] to-[var(--color-brand-cyan)] mb-6 rounded-full" />

            <p className="text-base text-gray-600 dark:text-white/70 leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="mb-8 p-5 rounded-2xl glass-panel">
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                <div className="w-2 h-2 rounded-full bg-[var(--color-brand-cyan)] mr-3 shadow-sm" />
                Key Benefits
              </h3>
              <ul className="space-y-2.5">
                {product.benefits?.map((benefit, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-700 dark:text-white/70">
                    <CheckCircle2 size={18} className="text-[var(--color-brand-purple)] mr-3 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link 
              to={`/contact?product=${product.slug}`}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[var(--color-brand-purple)] text-white font-bold hover:bg-[#6b21a8] hover:scale-[1.02] transition-all shadow-md"
            >
              Inquire About Product
            </Link>
          </motion.div>
        </div>

        {/* Bottom Section: Detailed Description & Usage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mt-12 pt-10 border-t border-gray-200 dark:border-white/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Detailed Description</h3>
              <p className="text-gray-600 dark:text-white/60 leading-relaxed text-base">
                {product.detailedDescription}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Usage Directions</h3>
              <div className="p-5 rounded-2xl glass-panel">
                <p className="text-gray-700 dark:text-white/80 leading-relaxed text-base">
                  {product.usage}
                </p>
                <div className="mt-3 text-xs text-[var(--color-brand-cyan)] font-medium">
                  * Please consult with your healthcare provider for personalized medical advice.
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Related Products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link 
                  to={`/products/${relatedProduct.slug}`}
                  key={relatedProduct.id}
                  className="group relative rounded-2xl glass-panel overflow-hidden hover:border-[var(--color-brand-cyan)]/30 transition-all duration-300 shadow-sm hover:shadow-md block"
                >
                  <div className="h-48 p-6 relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-100 dark:from-[#01000B] to-transparent opacity-80" />
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name}
                      className="max-h-full max-w-full object-contain relative z-10 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1.5 group-hover:text-[var(--color-brand-cyan)] transition-colors">
                      {relatedProduct.name}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-white/50 line-clamp-2">
                      {relatedProduct.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <CTASection 
        title="Require specialized information?"
        description="Our medical affairs team is available to provide comprehensive product monographs and clinical data."
        buttonText="Contact Medical Team"
        buttonLink="/contact"
      />
    </div>
  );
}
