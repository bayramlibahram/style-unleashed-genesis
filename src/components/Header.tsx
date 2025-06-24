
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('AZ');

  const navigationItems = [
    { az: 'Ana Səhifə', en: 'Home', href: '#home' },
    { az: 'Xidmətlər', en: 'Services', href: '#services' },
    { az: 'Haqqımızda', en: 'About', href: '#about' },
    { az: 'Portfolio', en: 'Portfolio', href: '#portfolio' },
    { az: 'Əlaqə', en: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="ml-3 text-2xl font-bold text-gray-900">Smartcode.az</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                className="text-gray-700 hover:text-yellow-600 transition-colors font-medium"
              >
                {language === 'AZ' ? item.az : item.en}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => setLanguage(language === 'AZ' ? 'EN' : 'AZ')}
              className="px-3 py-1 bg-gray-100 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              {language}
            </button>
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 font-medium">
              {language === 'AZ' ? 'Təklif Al' : 'Get Quote'}
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-2">
            {navigationItems.map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                className="block py-2 text-gray-700 hover:text-yellow-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {language === 'AZ' ? item.az : item.en}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <button 
                onClick={() => setLanguage(language === 'AZ' ? 'EN' : 'AZ')}
                className="w-full mb-2 px-3 py-2 bg-gray-100 rounded-md text-sm font-medium"
              >
                {language}
              </button>
              <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-2 rounded-full font-medium">
                {language === 'AZ' ? 'Təklif Al' : 'Get Quote'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
