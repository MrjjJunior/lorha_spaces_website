import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold tracking-tight mb-4 text-white">LORHA SPACES</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              100% Black-owned multidisciplinary firm bridging the gap between infrastructure development and social impact.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-teal-500 mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-white text-sm transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white text-sm transition-colors">Services</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-white text-sm transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-teal-500 mb-6">Expertise</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">Civil Engineering</li>
              <li className="text-gray-400 text-sm">Architecture</li>
              <li className="text-gray-400 text-sm">Project Management</li>
              <li className="text-gray-400 text-sm">Skills Training</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-teal-500 mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 mt-0.5 text-teal-500 flex-shrink-0" />
                <span>South Africa</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <span>074 498 7146 / 087 188 3552</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <a href="mailto:info@lorhaspaces.co.za" className="hover:text-white transition-colors">info@lorhaspaces.co.za</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Lorha Spaces Architecture & Engineering. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;