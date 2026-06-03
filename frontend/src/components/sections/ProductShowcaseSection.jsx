import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, animate, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MY_PRODUCTS = [
  { id: 1,  name: "ATRINEC-SP Tablets",       image: "/products/ATRINEC-SP Tablets.png", category: "Pharmaceutical", slug: "atrinec-sp-tablets" },
  { id: 2,  name: "Atrizyme Syrup",            image: "/products/Atrizyme Syrup.png", category: "Pharmaceutical", slug: "atrizyme-syrup" },
  { id: 3,  name: "IBGUT Sachet",              image: "/products/IBGUT Sachet.png", category: "Pharmaceutical", slug: "ibgut-sachet" },
  { id: 4,  name: "IBGUT Capsules",            image: "/products/IBGUT-Capsules.png", category: "Pharmaceutical", slug: "ibgut-capsules" },
  { id: 5,  name: "Smadryl Syrup",             image: "/products/Smadryl Syrup.png", category: "Pharmaceutical", slug: "smadryl-syrup" },
  { id: 6,  name: "SMAFER-D Protein Powder",   image: "/products/SMAFER-D Protein Powder.png", category: "Pharmaceutical", slug: "smafer-d-protein-powder" },
];

const CARD_WIDTH = 400;
const GAP = 32;

// Individual Card Component that calculates its own scale/opacity based on distance to center
function CarouselCard({ product, containerRef, xValue, isHoveredGlobal }) {
  const navigate = useNavigate();
  const cardRef = useRef(null);
  
  // Create motion values that update when xValue changes
  const distanceToCenter = useMotionValue(1000); // Default far away
  
  useEffect(() => {
    return xValue.onChange(() => {
      if (!cardRef.current || !containerRef.current) return;
      
      const cardRect = cardRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      
      // Calculate centers
      const cardCenter = cardRect.left + cardRect.width / 2;
      const containerCenter = containerRect.left + containerRect.width / 2;
      
      distanceToCenter.set(cardCenter - containerCenter);
    });
  }, [xValue, containerRef]);

  // Transform distance to scale, opacity, and rotation
  const scale = useTransform(distanceToCenter, [-CARD_WIDTH, 0, CARD_WIDTH], [0.9, 1.1, 0.9]);
  const opacity = useTransform(distanceToCenter, [-CARD_WIDTH, 0, CARD_WIDTH], [0.6, 1, 0.6]);
  const rotateY = useTransform(distanceToCenter, [-CARD_WIDTH, 0, CARD_WIDTH], [15, 0, -15]);
  const zIndex = useTransform(distanceToCenter, [-CARD_WIDTH, 0, CARD_WIDTH], [0, 10, 0]);

  // Text animation
  const textOpacity = useTransform(distanceToCenter, [-CARD_WIDTH / 2, 0, CARD_WIDTH / 2], [0, 1, 0]);
  const textY = useTransform(distanceToCenter, [-CARD_WIDTH / 2, 0, CARD_WIDTH / 2], [20, 0, 20]);

  // Parallax effect for the image inside
  const imageX = useTransform(distanceToCenter, [-CARD_WIDTH, 0, CARD_WIDTH], [30, 0, -30]);

  return (
    <motion.div
      ref={cardRef}
      style={{
        width: CARD_WIDTH,
        scale,
        opacity,
        rotateY,
        zIndex,
        transformStyle: "preserve-3d"
      }}
      className="flex-shrink-0 relative group"
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        onClick={() => navigate(`/products/${product.slug || ''}`)}
        className="block h-[500px] w-full rounded-3xl overflow-hidden cursor-pointer bg-white/5 border border-white/10 backdrop-blur-md relative transition-all duration-500 hover:shadow-[0_20px_50px_rgba(124,58,237,0.3)] hover:border-white/30"
      >
        {/* Ambient Glow behind image */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neonCyan/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        <div className="h-[65%] w-full relative flex items-center justify-center p-8 overflow-hidden bg-gradient-to-b from-white/5 to-transparent">
          <motion.img
            style={{ x: imageX }}
            src={product.image}
            alt={product.name}
            className="max-h-full max-w-full object-contain relative z-10 drop-shadow-2xl group-hover:scale-110 transition-transform duration-700 ease-out"
          />
        </div>

        <motion.div 
          style={{ opacity: textOpacity, y: textY }}
          className="h-[35%] w-full p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent relative z-20"
        >
          <div className="px-3 py-1 bg-neonCyan/20 text-neonCyan border border-neonCyan/30 shadow-sm font-semibold text-[10px] rounded-full uppercase tracking-widest inline-block w-max mb-4">
            {product.category || "Pharmaceutical"}
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neonCyan transition-colors duration-300">
            {product.name}
          </h3>
          
          <div className="flex items-center gap-2 text-white/50 text-sm font-medium group-hover:text-white transition-colors duration-300">
            <span>View Details</span>
            <ArrowRight size={16} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}


export default function ProductShowcaseSection({ products }) {
  const data = (products && products.length > 0) ? products : MY_PRODUCTS;
  
  // Clone array for infinite effect (3 sets)
  const loopedProducts = [...data, ...data, ...data];
  
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  
  // Calculate total width of one set of cards
  const singleSetWidth = data.length * (CARD_WIDTH + GAP);
  
  useEffect(() => {
    let controls;
    
    // Start from the middle set
    x.set(-singleSetWidth);
    
    if (!isHovered) {
      controls = animate(x, -singleSetWidth * 2, {
        duration: data.length * 3.5, // adjust speed
        ease: "linear",
        repeat: Infinity,
        onUpdate: (latest) => {
          // Reset loop seamlessly
          if (latest <= -singleSetWidth * 2) {
            x.set(-singleSetWidth);
          }
        }
      });
    }

    return () => controls?.stop();
  }, [isHovered, x, singleSetWidth, data.length]);

  return (
    <section className="py-32 relative bg-[#030014] overflow-hidden border-t border-white/5">
      {/* Background Ambient Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neonPurple/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-10 relative z-10 mb-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/80 text-sm font-semibold tracking-[0.2em] uppercase mb-6"
          >
            Premium Therapeutics
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 drop-shadow-md"
          >
            Discover Our Portfolio
          </motion.h2>
        </div>
      </div>

      <div 
        ref={containerRef}
        className="w-full relative overflow-hidden"
        style={{ perspective: "1000px" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div 
          style={{ x, gap: GAP }} 
          className="flex cursor-grab active:cursor-grabbing w-max px-[50vw]"
          drag="x"
          dragConstraints={{ left: -singleSetWidth * 2, right: -singleSetWidth }}
          onDragStart={() => setIsHovered(true)}
          onDragEnd={() => setIsHovered(false)}
        >
          {loopedProducts.map((product, index) => (
            <CarouselCard 
              key={`${product.id}-${index}`} 
              product={product} 
              containerRef={containerRef}
              xValue={x}
              isHoveredGlobal={isHovered}
            />
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto mt-16 text-center">
        <p className="text-white/30 text-xs font-medium tracking-[0.2em] uppercase">
          Drag or hover to explore
        </p>
      </div>
    </section>
  );
}
