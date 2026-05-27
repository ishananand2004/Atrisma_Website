import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/constants';
import { Button } from '@/components/ui/button';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className={twMerge(
      'fixed top-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 backdrop-blur-md py-5'
    )}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link to="/" className="text-2xl font-heading font-bold text-primary">
          ATRISMA
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={clsx(
                'text-sm font-medium hover:text-accent transition-colors',
                location.pathname === link.path ? 'text-accent' : 'text-slate-600'
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col space-y-4 border-t">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={clsx(
                'text-base font-medium py-2',
                location.pathname === link.path ? 'text-accent' : 'text-slate-600'
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="w-full">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
