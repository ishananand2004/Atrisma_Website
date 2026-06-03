import { motion } from 'framer-motion';
import { clsx } from 'clsx';

export default function GlassCard({ children, className, hoverEffect = false }) {
  return (
    <motion.div
      className={clsx(
        "glass-panel rounded-2xl overflow-hidden transition-all duration-300",
        hoverEffect && "hover:border-neonPurple/50 hover:shadow-[0_0_20px_rgba(124,58,237,0.15)]",
        className
      )}
      whileHover={hoverEffect ? { y: -5 } : {}}
    >
      {children}
    </motion.div>
  );
}
