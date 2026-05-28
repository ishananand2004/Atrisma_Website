import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
            setTimeout(onComplete, 600);
          }, 300);
          return 100;
        }
        return prev + Math.random() * 12 + 4;
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
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
        >
          {/* Logo / Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col items-center mb-12"
          >
            {/* Icon circle */}
            <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center mb-5">
              <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4C11.16 4 4 11.16 4 20C4 28.84 11.16 36 20 36C28.84 36 36 28.84 36 20C36 11.16 28.84 4 20 4Z" fill="#1B4F72" />
                <path d="M14 20H26M20 14V26" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>

            <h1 className="text-white text-3xl font-bold tracking-widest uppercase font-sans">
              ATRISMA
            </h1>
            <p className="text-white/40 text-xs tracking-[0.3em] uppercase mt-2 font-light">
              Pharmaceuticals Pvt. Ltd.
            </p>
          </motion.div>

          {/* Spinner */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <div className="relative w-10 h-10">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-white/10" />
              {/* Spinning arc */}
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-white animate-spin" />
            </div>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="w-64"
          >
            <div className="w-full h-px bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white rounded-full"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
            <div className="flex justify-between mt-2">
              <p className="text-white/30 text-[10px] tracking-widest uppercase">
                Loading
              </p>
              <p className="text-white/30 text-[10px] tracking-wider tabular-nums">
                {Math.min(Math.round(progress), 100)}%
              </p>
            </div>
          </motion.div>

          {/* Bottom tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-10 text-white/20 text-[10px] tracking-[0.25em] uppercase"
          >
            Advancing Healthcare · Empowering Lives
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
