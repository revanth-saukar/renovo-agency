import { Link } from 'react-router-dom';
import { Share2, Code2, Mail, Phone } from 'lucide-react';

import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-[#050812] pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <Logo className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-bold text-2xl tracking-tight">Renovo</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A premium web development agency crafting modern, fast, and scalable digital experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Share2 className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Code2 className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Services</h3>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Web Design</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Full-Stack Development</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">E-Commerce</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">SEO & Performance</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>renovoweb0@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-blue-500" />
                <span>9449264142</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Renovo Agency. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
