import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/smartcode-gold-logo.png" 
                alt="Smartcode.az Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="ml-3 text-2xl font-bold">Smartcode.az</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Azərbaycanda rəqəmsal transformasiya sahəsində aparıcı IT agentliyi. 
              Hökumət və özəl sektor üçün yenilikçi həllər.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Xidmətlər</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Veb Layihələr</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mobil Tətbiqlər</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">E-ticarət</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Brending & Dizayn</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Biznes Avtomatlaşdırma</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Şirkət</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Haqqımızda</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Əlaqə</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Karyera</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Əlaqə Məlumatları</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">hello@smartcode.az</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+994 (55) 123-45-67</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">Bakı, Azərbaycan</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Smartcode.az. Bütün hüquqlar qorunur.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Məxfilik Siyasəti
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                İstifadə Şərtləri
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;