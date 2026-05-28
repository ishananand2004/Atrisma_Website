import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { clsx } from 'clsx';

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
  const [scrolled,      setScrolled]      = useState(false);
  const [mobileOpen,    setMobileOpen]    = useState(false);
  const [productsOpen,  setProductsOpen]  = useState(false);
  const [mobileProducts,setMobileProducts]= useState(false);
  const dropdownRef = useRef(null);
  const location    = useLocation();

  /* ── scroll detection ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
      {/* ── Top Info Bar ── */}
      <div className={clsx(
        'hidden md:flex items-center justify-end gap-6 px-10 py-1.5 text-[11px] font-medium tracking-wide transition-all duration-300',
        scrolled ? 'hidden' : 'bg-[#0f2d4a] text-blue-200'
      )}>
        <a href="tel:+912212345678" className="flex items-center gap-1.5 hover:text-white transition-colors">
          <Phone size={11} /> +91 22 1234 5678
        </a>
        <a href="mailto:info@atrisma.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
          <Mail size={11} /> info@atrisma.com
        </a>
      </div>

      {/* ── Main Navbar ── */}
      <nav className={clsx(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'bg-white shadow-[0_2px_20px_rgba(0,0,0,0.10)] py-0'
          : 'bg-white border-b border-slate-100 py-0'
      )}>
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 flex items-center justify-between h-[62px]">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#1B4F72] to-[#2E86C1] flex items-center justify-center shadow-md group-hover:shadow-blue-300/40 transition-shadow">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                <path d="M12 3C7.03 3 3 7.03 3 12S7.03 21 12 21 21 16.97 21 12 16.97 3 12 3Z" fill="rgba(255,255,255,0.15)" />
                <path d="M12 7v10M7 12h10" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="leading-none">
              <span className="block text-[17px] font-extrabold tracking-tight text-[#0f2d4a]">ATRISMA</span>
              <span className="block text-[9px] tracking-[0.18em] text-slate-400 uppercase font-medium mt-0.5">Pharmaceuticals</span>
            </div>
          </Link>

          {/* ── Desktop Links ── */}
          <div className="hidden md:flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={clsx(
                  'relative px-3.5 py-2 text-[13px] font-semibold rounded-md transition-colors duration-200 group',
                  isActive(item.path)
                    ? 'text-[#1B4F72]'
                    : 'text-slate-500 hover:text-[#1B4F72]'
                )}
              >
                {item.label}
                {/* active / hover underline */}
                <span className={clsx(
                  'absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-[#2E86C1] transition-all duration-300',
                  isActive(item.path) ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                )} />
              </Link>
            ))}

            {/* Products Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setProductsOpen((p) => !p)}
                className={clsx(
                  'relative flex items-center gap-1 px-3.5 py-2 text-[13px] font-semibold rounded-md transition-colors duration-200 group',
                  isActive('/products')
                    ? 'text-[#1B4F72]'
                    : 'text-slate-500 hover:text-[#1B4F72]'
                )}
              >
                Products
                <ChevronDown size={13} className={clsx('transition-transform duration-200 mt-0.5', productsOpen ? 'rotate-180' : '')} />
                <span className={clsx(
                  'absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-[#2E86C1] transition-all duration-300',
                  isActive('/products') ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                )} />
              </button>

              {/* Mega dropdown */}
              {productsOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-slate-100 py-2 z-50 overflow-hidden">
                  <div className="px-4 py-2 mb-1 border-b border-slate-100">
                    <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-slate-400">Our Products</p>
                  </div>
                  {PRODUCT_ITEMS.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setProductsOpen(false)}
                      className="flex flex-col px-4 py-2.5 hover:bg-blue-50 transition-colors group/item"
                    >
                      <span className="text-[13px] font-semibold text-slate-700 group-hover/item:text-[#1B4F72] transition-colors">
                        {item.label}
                      </span>
                      <span className="text-[11px] text-slate-400 mt-0.5">{item.desc}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* ── CTA Button ── */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="px-5 py-2 text-[13px] font-bold rounded-lg bg-gradient-to-r from-[#1B4F72] to-[#2E86C1] text-white shadow-md hover:shadow-blue-400/40 hover:-translate-y-0.5 transition-all duration-200 tracking-wide"
            >
              Get in Touch
            </Link>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            className="md:hidden p-2 rounded-md text-slate-600 hover:bg-slate-100 transition-colors"
            onClick={() => setMobileOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* ── Mobile Menu ── */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 shadow-xl">
            <div className="px-5 py-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={clsx(
                    'block px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors',
                    isActive(item.path)
                      ? 'bg-blue-50 text-[#1B4F72]'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-[#1B4F72]'
                  )}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Products Accordion */}
              <div>
                <button
                  onClick={() => setMobileProducts((p) => !p)}
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:text-[#1B4F72] transition-colors"
                >
                  Products <ChevronDown size={14} className={clsx('transition-transform', mobileProducts ? 'rotate-180' : '')} />
                </button>
                {mobileProducts && (
                  <div className="mt-1 ml-4 border-l-2 border-blue-100 pl-3 space-y-1">
                    {PRODUCT_ITEMS.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-3 py-2 text-sm text-slate-500 hover:text-[#1B4F72] transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-3">
                <Link
                  to="/contact"
                  className="block w-full text-center px-5 py-3 text-sm font-bold rounded-lg bg-gradient-to-r from-[#1B4F72] to-[#2E86C1] text-white shadow-md"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Mobile info */}
            <div className="px-5 py-3 border-t border-slate-100 flex gap-5 text-[11px] text-slate-400">
              <a href="tel:+912212345678" className="flex items-center gap-1"><Phone size={10} /> +91 22 1234 5678</a>
              <a href="mailto:info@atrisma.com" className="flex items-center gap-1"><Mail size={10} /> info@atrisma.com</a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
