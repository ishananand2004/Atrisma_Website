import { Link } from 'react-router-dom';
import { NAV_LINKS, OFFICE_LOCATIONS } from '@/constants';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const headOffice = OFFICE_LOCATIONS[0];

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & About */}
          <div>
            <h2 className="text-2xl font-heading font-bold mb-4">ATRISMA</h2>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Advancing global healthcare through innovation, quality, and commitment. 
              Dedicated to improving patient lives worldwide with premium pharmaceutical solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-lightAccent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* R&D & Innovation */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Our Focus</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/products" className="hover:text-lightAccent">Cardiology</Link></li>
              <li><Link to="/products" className="hover:text-lightAccent">Neurology</Link></li>
              <li><Link to="/products" className="hover:text-lightAccent">Oncology</Link></li>
              <li><Link to="/research" className="hover:text-lightAccent">Clinical Trials</Link></li>
              <li><Link to="/research" className="hover:text-lightAccent">R&D Pipeline</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Head Office</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin className="mr-3 shrink-0 text-accent" size={18} />
                <span>{headOffice.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 shrink-0 text-accent" size={18} />
                <span>{headOffice.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 shrink-0 text-accent" size={18} />
                <span>contact@atrisma.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Atrisma Pharmaceuticals Pvt. Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-gray-300">Privacy Policy</Link>
            <Link to="#" className="hover:text-gray-300">Terms of Use</Link>
            <Link to="#" className="hover:text-gray-300">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
