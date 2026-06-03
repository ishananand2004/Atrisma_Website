import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { clsx } from 'clsx';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { COMPANY_LOGO } from '@/constants';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { useTheme } from '@/context/ThemeContext';

/* ── Real Atrisma Pharmaceuticals products ── */
const PRODUCT_SECTIONS = [
  {
    title: 'Tablets',
    items: [
      { name: 'Smafer-XT', path: '/products/smafer-xt-tablets' },
      { name: 'ATRINEC-SP', path: '/products/atrinec-sp-tablets' },
      { name: 'Tripam-Plus', path: '/products/tripam-plus-tablets' },
      { name: 'Tripam-LS', path: '/products/tripam-ls-tablets' },
      { name: 'Smamox CV 625', path: '/products/smamox-cv-625-tablets' },
    ],
  },
  {
    title: 'Capsules',
    items: [
      { name: 'IBGUT Capsules', path: '/products/ibgut-capsules' },
    ],
  },
  {
    title: 'Syrups',
    items: [
      { name: 'Smadryl Syrup', path: '/products/smadryl-syrup' },
      { name: 'Atrizyme Syrup', path: '/products/atrizyme-syrup' },
      { name: 'Vitalyca Suspension', path: '/products/vitalyca-suspension' },
      { name: 'Smakast-L Suspension', path: '/products/smakast-l-suspension' },
    ],
  },
  {
    title: 'Sachets',
    items: [
      { name: 'IBGUT Sachet', path: '/products/ibgut-sachet' },
    ],
  },
  {
    title: 'Injections',
    items: [
      { name: 'Smapime-250', path: '/products/smapime-250-injection' },
    ],
  },
  {
    title: 'Nutritional',
    items: [
      { name: 'SMAFER-D Protein Powder', path: '/products/smafer-d-protein-powder' },
    ],
  },
];

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProducts, setMobileProducts] = useState(false);
  const navRef = useRef(null);
  const hoverTimeout = useRef(null);
  const location = useLocation();

  const { scrollY } = useScroll();
  const { theme } = useTheme();
  const navBgDark = useTransform(scrollY, [0, 50], ['rgba(3, 0, 20, 0)', 'rgba(3, 0, 20, 0.85)']);
  const navBgLight = useTransform(scrollY, [0, 50], ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.9)']);
  const navBlur = useTransform(scrollY, [0, 50], ['blur(0px)', 'blur(12px)']);
  const navBorderDark = useTransform(scrollY, [0, 50], ['rgba(255,255,255,0)', 'rgba(255,255,255,0.05)']);
  const navBorderLight = useTransform(scrollY, [0, 50], ['rgba(0,0,0,0)', 'rgba(0,0,0,0.1)']);

  /* close on route change */
  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
  }, [location.pathname]);

  /* close mega menu on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  /* hover helpers with a small delay so the menu doesn't flicker */
  const openProducts = useCallback(() => {
    clearTimeout(hoverTimeout.current);
    setProductsOpen(true);
  }, []);

  const closeProducts = useCallback(() => {
    hoverTimeout.current = setTimeout(() => setProductsOpen(false), 150);
  }, []);

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <>
      <motion.nav
        ref={navRef}
        style={{
          backgroundColor: theme === 'dark' ? navBgDark : navBgLight,
          backdropFilter: navBlur,
          borderBottomColor: theme === 'dark' ? navBorderDark : navBorderLight,
        }}
        className="fixed top-0 z-[9999] w-full transition-all duration-300 border-b"
      >
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center group shrink-0">
            <img
              src={COMPANY_LOGO}
              alt="Atrisma Pharmaceuticals"
              className="h-10 md:h-11 w-auto rounded-full object-contain transition-opacity group-hover:opacity-90"
            />
          </Link>

          {/* ── Desktop Nav Links ── */}
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
                <span
                  className={clsx(
                    'absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-gradient-to-r from-neonPurple to-neonCyan transition-all duration-300',
                    isActive(item.path)
                      ? 'opacity-100 scale-x-100'
                      : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                  )}
                />
              </Link>
            ))}

            {/* Products trigger */}
            <button
              onClick={() => setProductsOpen((p) => !p)}
              onMouseEnter={openProducts}
              onMouseLeave={closeProducts}
              className={clsx(
                'relative flex items-center gap-1 px-4 py-2 text-[14px] font-medium rounded-md transition-all duration-200 group cursor-pointer',
                isActive('/products')
                  ? 'text-gray-900 dark:text-white'
                  : 'text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white'
              )}
            >
              Products
              <ChevronDown
                size={14}
                className={clsx(
                  'transition-transform duration-200 mt-0.5',
                  productsOpen ? 'rotate-180' : ''
                )}
              />
              <span
                className={clsx(
                  'absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-gradient-to-r from-neonPurple to-neonCyan transition-all duration-300',
                  isActive('/products')
                    ? 'opacity-100 scale-x-100'
                    : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                )}
              />
            </button>
          </div>

          {/* ── CTA & Theme Toggle ── */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link
              to="/contact"
              className="relative group px-6 py-2.5 text-[14px] font-bold rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neonPurple to-neonCyan opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              <span className="relative z-10 group-hover:text-white transition-colors">
                Get in Touch
              </span>
            </Link>
          </div>

          {/* ── Mobile Hamburger ── */}
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

        {/* ═══════════════════════════════════════════
            DESKTOP MEGA MENU
            Rendered INSIDE the nav (inherits z-[9999])
            but positioned as a full-width bar below the header.
        ═══════════════════════════════════════════ */}
        <AnimatePresence>
          {productsOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={openProducts}
              onMouseLeave={closeProducts}
              className="hidden md:block absolute left-0 right-0 top-[72px] border-t border-white/5"
              style={{ zIndex: 9999 }}
            >
              {/* opaque background so hero text can NEVER bleed through */}
              <div
                className="w-full"
                style={{
                  background: 'rgba(10, 10, 30, 0.97)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                }}
              >
                <div className="mx-auto max-w-[1280px] px-10 py-8">
                  {/* 2-column grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {PRODUCT_SECTIONS.map((section) => (
                      <div key={section.title}>
                        {/* Category title */}
                        <h3 className="text-[14px] font-bold tracking-[0.15em] uppercase text-white mb-4 pb-2 border-b border-white/10">
                          {section.title}
                        </h3>

                        {/* Product links */}
                        <ul className="space-y-1">
                          {section.items.map((item) => (
                            <li key={item.path}>
                              <Link
                                to={item.path}
                                onClick={() => setProductsOpen(false)}
                                className="flex items-center gap-2 px-3 py-2 rounded-lg text-[14px] text-white/80 font-medium hover:text-[#06B6D4] hover:bg-white/5 transition-all duration-200 cursor-pointer group/link"
                              >
                                <span className="group-hover/link:translate-x-1 transition-transform duration-200">
                                  {item.name}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Bottom bar with View All */}
                  <div className="mt-8 pt-5 border-t border-white/5 flex items-center justify-between">
                    <p className="text-[13px] text-white/30">
                      Explore our complete portfolio of pharmaceutical products.
                    </p>
                    <Link
                      to="/products"
                      onClick={() => setProductsOpen(false)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[14px] font-semibold text-white bg-gradient-to-r from-neonPurple to-neonCyan hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all duration-300"
                    >
                      View All Products
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ═══════════════════════════════════════════
            MOBILE MENU
        ═══════════════════════════════════════════ */}
        {mobileOpen && (
          <div className="absolute top-[calc(100%+10px)] left-0 right-0 mx-auto w-full max-w-5xl glass-panel border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-8 z-50 backdrop-blur-xl bg-[#030014]/95">
            <div className="px-6 py-6 space-y-1">
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
                  Products
                  <ChevronDown
                    size={16}
                    className={clsx(
                      'transition-transform duration-200',
                      mobileProducts ? 'rotate-180' : ''
                    )}
                  />
                </button>

                {mobileProducts && (
                  <div className="mt-2 ml-4 border-l border-white/10 pl-4 space-y-4 pb-2">
                    {PRODUCT_SECTIONS.map((section) => (
                      <div key={section.title}>
                        <h4 className="text-[11px] font-bold tracking-[0.12em] uppercase text-white/40 mb-2">
                          {section.title}
                        </h4>
                        <ul className="space-y-1">
                          {section.items.map((item) => (
                            <li key={item.path}>
                              <Link
                                to={item.path}
                                className="flex items-center justify-between px-2 py-1.5 text-sm text-white/60 hover:text-white transition-colors"
                              >
                                {item.name}
                                <ArrowRight size={14} className="text-white/20" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    <Link
                      to="/products"
                      className="block mt-2 px-3 py-2 text-sm font-semibold text-neonCyan hover:text-white transition-colors"
                    >
                      View All Products →
                    </Link>
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
