import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ParticleBackground from '../ui/ParticleBackground';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const words = "Trusted 10+ years Pioneering the Future of Medicine".split(" ");

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
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden bg-gray-50 dark:bg-[#030014] transition-colors duration-300 flex items-center">
      {/* Background Mesh and Particles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-neonPurple/20 rounded-full mix-blend-screen filter blur-[150px] opacity-70 animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-neonCyan/20 rounded-full mix-blend-screen filter blur-[150px] opacity-70 animate-pulse" style={{ animationDelay: '2s' }} />
        <ParticleBackground />
      </div>

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 flex justify-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-md text-teal-600 dark:text-neonCyan text-[11px] font-bold tracking-[0.25em] uppercase shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              Transforming Lives Through Science
            </span>
          </motion.div>

          {/* Animated Headline */}
          <motion.h1
            style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", justifyContent: "center" }}
            variants={container}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight tracking-tight transition-colors duration-300"
          >
            {words.map((word, index) => (
              <motion.span variants={child} style={{ marginRight: "0.25em" }} key={index}>
                {word === "Medicine" ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPurple to-neonCyan text-glow">
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
            className="text-lg md:text-xl text-gray-600 dark:text-white/60 mb-12 max-w-2xl mx-auto font-light leading-relaxed transition-colors duration-300"
          >
            Atrisma Pharmaceuticals is dedicated to developing innovative solutions that improve patient outcomes worldwide across critical therapeutic areas.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              to="/products"
              className="relative group w-full sm:w-auto"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neonPurple to-neonCyan blur opacity-75 group-hover:opacity-100 transition duration-300" />
              <div className="relative flex items-center justify-center px-8 py-4 bg-gray-900 dark:bg-black rounded-full leading-none">
                <span className="text-white font-bold tracking-wide">Explore Therapeutics</span>
              </div>
            </Link>

            <Link
              to="/about"
              className="relative group w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-full border border-gray-300 dark:border-white/20 hover:border-gray-400 dark:hover:border-white/50 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition duration-300 backdrop-blur-sm"
            >
              <span className="text-gray-900 dark:text-white font-semibold tracking-wide transition-colors">Learn About Us</span>
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
