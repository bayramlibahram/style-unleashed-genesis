
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-800 text-white relative">
      {/* Subtle Azerbaijani Buta pattern in footer */}
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-yellow-400 to-transparent rounded-full transform translate-x-32 translate-y-32"></div>
        <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-yellow-400 to-transparent rounded-full transform -translate-x-24 -translate-y-24"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-slate-900 rounded-sm transform rotate-45"></div>
              </div>
              <span className="ml-2 text-xl font-bold">DigitalCraft</span>
            </div>
            <p className="text-gray-400 mb-6">
              Azərbaycanda rəqəmsal həllərlə biznesinizi inkişaf etdirən şirkət.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">{t('services')}</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">{t('webDesign')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">{t('seoOptimization')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">{t('socialMedia')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Şirkət</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">{t('about')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">{t('portfolio')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Karyera</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">{t('contact')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">{t('contactInfo')}</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-yellow-400 mr-3" />
                <span className="text-gray-400">hello@digitalcraft.az</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-yellow-400 mr-3" />
                <span className="text-gray-400">+994 (50) 123-45-67</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-yellow-400 mr-3" />
                <span className="text-gray-400">{t('location')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              {t('footerText')}
            </p>
            
            {/* Traditional Azerbaijani decorative element */}
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
