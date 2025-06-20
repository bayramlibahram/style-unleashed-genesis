
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-gold-primary to-gold-secondary rounded-lg flex items-center justify-center glass-card">
              <div className="w-4 h-4 bg-navy-primary rounded-sm transform rotate-45"></div>
            </div>
            <span className="ml-2 text-xl font-bold text-white">DigitalCraft</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-300 hover:text-gold-primary transition-colors duration-300">{t('home')}</a>
            <a href="#services" className="text-gray-300 hover:text-gold-primary transition-colors duration-300">{t('services')}</a>
            <a href="#portfolio" className="text-gray-300 hover:text-gold-primary transition-colors duration-300">{t('portfolio')}</a>
            <a href="#about" className="text-gray-300 hover:text-gold-primary transition-colors duration-300">{t('about')}</a>
            <a href="#contact" className="text-gray-300 hover:text-gold-primary transition-colors duration-300">{t('contact')}</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <button className="glass-card gold-glow bg-gradient-to-r from-gold-primary to-gold-secondary text-navy-primary px-6 py-2 rounded-full hover-lift transition-all duration-300 font-semibold">
              {t('contactNow')}
            </button>
          </div>

          <button 
            className="md:hidden text-white hover:text-gold-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden glass-panel border-t border-gold-primary/20">
          <div className="px-4 py-2 space-y-2">
            <a href="#home" className="block py-2 text-gray-300 hover:text-gold-primary transition-colors">{t('home')}</a>
            <a href="#services" className="block py-2 text-gray-300 hover:text-gold-primary transition-colors">{t('services')}</a>
            <a href="#portfolio" className="block py-2 text-gray-300 hover:text-gold-primary transition-colors">{t('portfolio')}</a>
            <a href="#about" className="block py-2 text-gray-300 hover:text-gold-primary transition-colors">{t('about')}</a>
            <a href="#contact" className="block py-2 text-gray-300 hover:text-gold-primary transition-colors">{t('contact')}</a>
            <div className="py-2">
              <LanguageSwitcher />
            </div>
            <button className="w-full mt-4 glass-card bg-gradient-to-r from-gold-primary to-gold-secondary text-navy-primary py-2 rounded-full font-semibold hover-lift">
              {t('contactNow')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
