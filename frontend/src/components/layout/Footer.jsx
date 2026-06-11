import { Link } from 'react-router-dom';
import { NAV_LINKS, OFFICE_LOCATIONS, COMPANY_LOGO } from '@/constants';
import { Mail, Phone, MapPin } from 'lucide-react';
import ParticleBackground from '../ui/ParticleBackground';

export default function Footer() {
  const headOffice = OFFICE_LOCATIONS[0];

  return (
    <footer className="relative bg-[#01000B] text-white pt-20 pb-8 border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-neonPurple/20 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & About */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <img
                src={COMPANY_LOGO}
                alt="Atrisma Pharmaceuticals"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-white/50 mb-6 text-sm leading-relaxed">
              Advancing global healthcare through innovation, quality, and commitment. 
              Dedicated to improving patient lives worldwide with premium pharmaceutical solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white/90">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-white/50 hover:text-neonCyan transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-neonCyan transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white/90">Head Office</h3>
            <ul className="space-y-4 text-sm text-white/50">
              <li className="flex items-start group cursor-default">
                <MapPin className="mr-3 shrink-0 text-neonCyan group-hover:text-neonPurple transition-colors mt-0.5" size={18} />
                <span>{headOffice.address}</span>
              </li>
              <li className="flex items-center group cursor-default">
                <Phone className="mr-3 shrink-0 text-neonCyan group-hover:text-neonPurple transition-colors" size={18} />
                <span>{headOffice.phone}</span>
              </li>
              <li className="flex items-center group cursor-pointer">
                <Mail className="mr-3 shrink-0 text-neonCyan group-hover:text-neonPurple transition-colors" size={18} />
                <span className="hover:text-white transition-colors">atrismapharmaceuticals@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Atrisma Pharmaceuticals Pvt. Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link to="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
