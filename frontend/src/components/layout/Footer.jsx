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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-16 justify-items-center sm:justify-items-start">
          {/* Brand & About */}
          <div className="flex flex-col items-center sm:items-start">
            <Link to="/" className="inline-block mb-6 mx-auto sm:mx-0">
              <img
                src={COMPANY_LOGO}
                alt="Atrisma Pharmaceuticals"
                className="h-10 w-auto object-contain rounded-full"
              />
            </Link>
            <p className="text-white/50 mb-6 text-sm leading-relaxed">
              Advancing global healthcare through innovation, quality, and commitment. 
              Dedicated to improving patient lives worldwide with premium pharmaceutical solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-semibold mb-6 text-white/90">Quick Links</h3>
            <ul className="space-y-3 flex flex-col items-center sm:items-start">
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
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-semibold mb-6 text-white/90">Head Office</h3>
            <ul className="space-y-4 text-sm text-white/50 flex flex-col items-center sm:items-start break-words">
              <li className="flex flex-col sm:flex-row items-center sm:items-start group cursor-default text-center sm:text-left">
                <MapPin className="mb-2 sm:mb-0 sm:mr-3 shrink-0 text-neonCyan group-hover:text-neonPurple transition-colors sm:mt-0.5" size={18} />
                <span>{headOffice.address}</span>
              </li>
              
              <li className="flex flex-col sm:flex-row items-center sm:items-start group cursor-pointer">
                <Mail className="mb-2 sm:mb-0 sm:mr-3 shrink-0 text-neonCyan group-hover:text-neonPurple transition-colors" size={18} />
                <span className="hover:text-white transition-colors break-all sm:break-normal">atrismapharmaceuticals@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Atrisma Pharmaceuticals Pvt. Ltd. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link to="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
