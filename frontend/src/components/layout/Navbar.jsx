import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { clsx } from 'clsx';
import { motion, useScroll, useTransform } from 'framer-motion';
import { COMPANY_LOGO } from '@/constants';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { useTheme } from '@/context/ThemeContext';

const PRODUCT_ITEMS = [
  { label: 'Therapeutics',  path: '/products?category=therapeutics', desc: 'Advanced treatment solutions' },
  { label: 'Vaccines',      path: '/products?category=vaccines',     desc: 'Immunization & prevention' },
  { label: 'Diagnostics',   path: '/products?category=diagnostics',  desc: 'Precision diagnostic tools' },
  { label: 'View All',      path: '/products',                        desc: 'Full product portfolio' },
];

const NAV_ITEMS = [
  { label: 'Home',            path: '/' },
  { label: 'About Us',        path: '/about' },
  { label: 'Research',        path: '/research' },
  { label: 'Global Presence', path: '/global-presence' },
  { label: 'Careers',         path: '/careers' },
  { label: 'Contact',         path: '/contact' },
];

export default function Navbar() {
  const [mobileOpen,    setMobileOpen]    = useState(false);
  const [productsOpen,  setProductsOpen]  = useState(false);
  const [mobileProducts,setMobileProducts]= useState(false);
  const dropdownRef = useRef(null);
  const location    = useLocation();

  const { scrollY } = useScroll();
  const { theme } = useTheme();
  const navBgDark = useTransform(scrollY, [0, 50], ["rgba(3, 0, 20, 0)", "rgba(3, 0, 20, 0.7)"]);
  const navBgLight = useTransform(scrollY, [0, 50], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.9)"]);
  const navBlur = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(12px)"]);
  const navBorderDark = useTransform(scrollY, [0, 50], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.05)"]);
  const navBorderLight = useTransform(scrollY, [0, 50], ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.1)"]);

  /* ── close on route change ── */
  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
  }, [location.pathname]);

  /* ── close dropdown outside click ── */
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setProductsOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <>
      {/* ── Main Navbar ── */}
      <motion.nav 
        style={{ 
          backgroundColor: theme === 'dark' ? navBgDark : navBgLight, 
          backdropFilter: navBlur, 
          borderBottomColor: theme === 'dark' ? navBorderDark : navBorderLight 
        }}
        className="fixed top-0 z-50 w-full transition-all duration-300 border-b"
      >
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 flex items-center justify-between h-[72px]">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center group shrink-0">
            <img
              src={COMPANY_LOGO}
              alt="Atrisma Pharmaceuticals"
              className="h-10 md:h-11 w-auto object-contain transition-opacity group-hover:opacity-90"
            />
          </Link>

          {/* ── Desktop Links ── */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={clsx(
                  'relative px-4 py-2 text-[14px] font-medium rounded-md transition-all duration-200 group',
                  isActive(item.path)
                    ? 'text-gray-900 dark:text-white'
                    : 'text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white'
                )}
              >
                {item.label}
                {/* active / hover underline */}
                <span className={clsx(
                  'absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-gradient-to-r from-neonPurple to-neonCyan transition-all duration-300',
                  isActive(item.path) ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                )} />
              </Link>
            ))}

            {/* Products Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setProductsOpen((p) => !p)}
                className={clsx(
                  'relative flex items-center gap-1 px-4 py-2 text-[14px] font-medium rounded-md transition-all duration-200 group',
                  isActive('/products')
                    ? 'text-gray-900 dark:text-white'
                    : 'text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white'
                )}
              >
                Products
                <ChevronDown size={14} className={clsx('transition-transform duration-200 mt-0.5', productsOpen ? 'rotate-180' : '')} />
                <span className={clsx(
                  'absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-gradient-to-r from-neonPurple to-neonCyan transition-all duration-300',
                  isActive('/products') ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                )} />
              </button>

              {/* Mega dropdown */}
              {productsOpen && (
                <div className="absolute top-[calc(100%+10px)] right-0 w-64 glass-panel border border-white/10 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] py-2 z-50 overflow-hidden backdrop-blur-xl bg-black/80">
                  <div className="px-4 py-3 mb-1 border-b border-white/5">
                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-neonCyan">Our Products</p>
                  </div>
                  {PRODUCT_ITEMS.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setProductsOpen(false)}
                      className="flex flex-col px-4 py-3 hover:bg-white/5 transition-colors group/item"
                    >
                      <span className="text-[14px] font-semibold text-white/90 group-hover/item:text-neonCyan transition-colors">
                        {item.label}
                      </span>
                      <span className="text-[12px] text-white/40 mt-0.5">{item.desc}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* ── CTA Button & Theme Toggle ── */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link
              to="/contact"
              className="relative group px-6 py-2.5 text-[14px] font-bold rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neonPurple to-neonCyan opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              <span className="relative z-10 group-hover:text-white transition-colors">Get in Touch</span>
            </Link>
          </div>

          {/* ── Mobile Actions ── */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              className="p-2 rounded-md text-white/70 hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen((p) => !p)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        {mobileOpen && (
          <div className="md:hidden glass-panel border-t border-white/10 backdrop-blur-2xl bg-[#030014]/90 absolute w-full">
            <div className="px-6 py-6 space-y-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={clsx(
                    'block px-4 py-3 rounded-lg text-base font-semibold transition-colors',
                    isActive(item.path)
                      ? 'bg-white/10 text-white'
                      : 'text-white/60 hover:bg-white/5 hover:text-white'
                  )}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Products Accordion */}
              <div>
                <button
                  onClick={() => setMobileProducts((p) => !p)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-semibold text-white/60 hover:bg-white/5 hover:text-white transition-colors"
                >
                  Products <ChevronDown size={16} className={clsx('transition-transform', mobileProducts ? 'rotate-180' : '')} />
                </button>
                {mobileProducts && (
                  <div className="mt-2 ml-4 border-l border-white/10 pl-4 space-y-2">
                    {PRODUCT_ITEMS.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-2 py-2 text-sm text-white/50 hover:text-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-6">
                <Link
                  to="/contact"
                  className="block w-full text-center px-6 py-3.5 text-base font-bold rounded-lg bg-gradient-to-r from-neonPurple to-neonCyan text-white shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        )}
      </motion.nav>
    </>
  );
}
