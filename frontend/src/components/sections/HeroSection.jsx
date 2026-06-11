import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ParticleBackground from '../ui/ParticleBackground';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const words = "Pioneering the Future of Medicine".split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#030014] flex items-center pt-14 md:pt-[72px]">
      {/* Background Mesh and Particles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-neonPurple/20 rounded-full mix-blend-screen filter blur-[150px] opacity-70 animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-neonCyan/20 rounded-full mix-blend-screen filter blur-[150px] opacity-70 animate-pulse" style={{ animationDelay: '2s' }} />
        <ParticleBackground />
      </div>

      <div className="container mx-auto px-5 sm:px-8 md:px-10 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center relative">
          
          {/* Dark radial overlay for text contrast */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#030014]/60 blur-[60px] -z-10 pointer-events-none rounded-full" />

          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 flex justify-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white/90 text-xs font-bold tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-shadow duration-300">
              TRUSTED 10+ YEARS
            </span>
          </motion.div>

          {/* Animated Headline */}
          <motion.h1
            style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", justifyContent: "center" }}
            variants={container}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
          >
            {words.map((word, index) => (
              <motion.span variants={child} style={{ marginRight: "0.25em" }} key={index}>
                {word === "Medicine" ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#4facfe] pb-1">
                    {word}
                  </span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-base sm:text-lg md:text-xl text-white/60 mb-10 sm:mb-12 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Atrisma Pharmaceuticals is dedicated to developing innovative solutions that improve patient outcomes worldwide across critical therapeutic areas.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6 px-4 sm:px-0"
          >
            <Link
              to="/products"
              className="relative group w-full sm:w-auto transition-transform duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neonPurple to-neonCyan blur opacity-75 group-hover:opacity-100 transition duration-300 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]" />
              <div className="relative flex items-center justify-center px-8 py-4 bg-black rounded-full leading-none">
                <span className="text-white font-bold tracking-wide">Explore Therapeutics</span>
              </div>
            </Link>

            <Link
              to="/about"
              className="relative group w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-full border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              <span className="text-white font-semibold tracking-wide">Learn About Us</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-gray-500 dark:text-white/40 tracking-[0.2em] uppercase font-medium">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-gray-400 dark:text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
