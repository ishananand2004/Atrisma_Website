import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_LOGO } from '@/constants';

export default function PageLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('loading'); // 'loading' | 'done'

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setPhase('done');
            setTimeout(onComplete, 800);
          }, 300);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1,
            filter: "blur(20px)"
          }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030014] overflow-hidden"
        >
          {/* Animated background mesh */}
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neonPurple rounded-full mix-blend-screen filter blur-[128px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neonCyan rounded-full mix-blend-screen filter blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo / Brand */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="flex flex-col items-center mb-16"
            >
              <div className="relative w-28 h-28 md:w-32 md:h-32 mb-8 flex items-center justify-center">
                <motion.div
                  className="absolute inset-0 rounded-xl border border-neonPurple/50"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                  className="absolute inset-0 rounded-xl border border-neonCyan/50 scale-110"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                />
                <img
                  src={COMPANY_LOGO}
                  alt="Atrisma Pharmaceuticals"
                  className="relative z-10 h-14 md:h-16 w-auto max-w-full object-contain px-2"
                />
              </div>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-80"
            >
              <div className="w-full h-[2px] bg-white/10 overflow-hidden relative">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-neonPurple to-neonCyan"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ ease: 'easeOut' }}
                />
                <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-r from-transparent to-white/50 animate-pulse" />
              </div>
              <div className="flex justify-between mt-4">
                <p className="text-white/40 text-[10px] tracking-[0.2em] uppercase font-medium">
                  Loading Sequence
                </p>
                <p className="text-neonCyan text-[10px] tracking-wider tabular-nums font-bold text-glow">
                  {Math.min(Math.round(progress), 100)}%
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
