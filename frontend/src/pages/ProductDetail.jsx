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
    <div className="w-full min-h-screen bg-[#030014] text-white">
      <Helmet>
        <title>{product.name} | Atrisma Pharmaceuticals</title>
        <meta name="description" content={product.description} />
      </Helmet>

      {/* Header with back button */}
      <div className="pt-32 pb-8 border-b border-white/5 bg-[#030014]/80 backdrop-blur-md sticky top-0 z-40">
        <div className="container mx-auto px-6 md:px-10">
          <Link 
            to="/products"
            className="inline-flex items-center text-sm font-medium text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Products
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-10 py-16">
        {/* Top Section: 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-tr from-white/5 to-white/10 p-8 border border-white/10 shadow-[0_0_50px_rgba(124,58,237,0.1)] lg:sticky top-40"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-neonPurple/20 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-neonCyan/20 rounded-full blur-[80px] pointer-events-none" />
            
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-auto object-contain drop-shadow-2xl relative z-10"
              style={{ maxHeight: '500px' }}
            />
          </motion.div>

          {/* Right Column: Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-neonCyan/30 bg-neonCyan/10 text-neonCyan text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              {product.category}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight drop-shadow-md">
              {product.name}
            </h1>
            
            <h2 className="text-xl md:text-2xl text-neonPurple font-semibold mb-6">
              {product.composition}
            </h2>

            <div className="w-16 h-1 bg-gradient-to-r from-neonPurple to-neonCyan mb-8 rounded-full" />

            <p className="text-lg text-white/70 leading-relaxed mb-10">
              {product.description}
            </p>

            <div className="mb-10 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <div className="w-2 h-2 rounded-full bg-neonCyan mr-3 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                Key Benefits
              </h3>
              <ul className="space-y-3">
                {product.benefits?.map((benefit, idx) => (
                  <li key={idx} className="flex items-start text-white/70">
                    <CheckCircle2 size={20} className="text-neonPurple mr-3 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link 
              to={`/contact?product=${product.slug}`}
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              Inquire About Product
            </Link>
          </motion.div>
        </div>

        {/* Bottom Section: Detailed Description & Usage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-24 pt-16 border-t border-white/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Detailed Description</h3>
              <p className="text-white/60 leading-relaxed text-lg">
                {product.detailedDescription}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Usage Directions</h3>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-white/80 leading-relaxed">
                  {product.usage}
                </p>
                <div className="mt-4 text-sm text-neonCyan/80 font-medium">
                  * Please consult with your healthcare provider for personalized medical advice.
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-32">
            <h3 className="text-3xl font-bold text-white mb-10 text-center">Related Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link 
                  to={`/products/${relatedProduct.slug}`}
                  key={relatedProduct.id}
                  className="group relative rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(124,58,237,0.15)] block"
                >
                  <div className="h-64 p-8 relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#01000B] to-transparent opacity-80" />
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name}
                      className="max-h-full max-w-full object-contain relative z-10 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-neonCyan transition-colors">
                      {relatedProduct.name}
                    </h4>
                    <p className="text-sm text-white/50 line-clamp-2">
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
