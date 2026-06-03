import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const changeTheme = (mode) => {
    setTheme(mode);
    setOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="relative p-2 rounded-full bg-white/5 border border-white/10 text-gray-500 hover:text-white dark:text-white/70 dark:hover:text-white transition-colors flex items-center justify-center overflow-hidden"
        aria-label="Toggle Theme"
      >
        <motion.div
          initial={false}
          animate={{ 
            scale: theme === 'dark' ? 1 : 0,
            opacity: theme === 'dark' ? 1 : 0,
            rotate: theme === 'dark' ? 0 : -90
          }}
          transition={{ duration: 0.3 }}
          className="absolute"
        >
          <Moon size={20} className="text-neonCyan" />
        </motion.div>

        <motion.div
          initial={false}
          animate={{ 
            scale: theme === 'light' ? 1 : 0,
            opacity: theme === 'light' ? 1 : 0,
            rotate: theme === 'light' ? 0 : 90
          }}
          transition={{ duration: 0.3 }}
          className={theme === 'dark' ? 'absolute' : ''}
        >
          <Sun size={20} className="text-amber-500" />
        </motion.div>
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[calc(100%+10px)] right-0 w-36 bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-white/10 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] py-2 z-50 overflow-hidden"
          >
            <button
              onClick={() => changeTheme('light')}
              className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                theme === 'light' 
                  ? 'bg-gray-100 dark:bg-white/10 text-teal-600 dark:text-neonCyan' 
                  : 'text-gray-700 dark:text-white/80 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Light Mode
            </button>
            <button
              onClick={() => changeTheme('dark')}
              className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                theme === 'dark' 
                  ? 'bg-gray-100 dark:bg-white/10 text-teal-600 dark:text-neonCyan' 
                  : 'text-gray-700 dark:text-white/80 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Dark Mode
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
