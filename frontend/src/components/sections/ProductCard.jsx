import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full perspective-1000"
    >
      <Link to={`/products/${product.slug}`} className="block h-full cursor-pointer relative group">
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="h-full cursor-pointer relative group"
        >
          <GlassCard hoverEffect={true} className="h-full flex flex-col overflow-hidden">
          <div className="relative h-56 overflow-hidden border-b border-white/5" style={{ transform: "translateZ(30px)" }}>
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10" />
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-black/40 backdrop-blur-md text-neonCyan border border-neonCyan/30 shadow-sm font-semibold text-xs rounded-full uppercase tracking-wide">
              {product.category}
            </div>
          </div>
          
          <div className="p-6 flex-grow flex flex-col" style={{ transform: "translateZ(40px)" }}>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neonCyan transition-colors">
              {product.name}
            </h3>
            <p className="text-white/50 text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
              {product.description}
            </p>
            
            <div className="mt-auto flex items-center gap-2 text-neonPurple font-medium group/btn group-hover:text-white transition-colors">
              <span>View Product</span>
              <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform group-hover:text-white" />
            </div>
          </div>
        </GlassCard>
        </motion.div>
      </Link>
    </motion.div>
  );
}
