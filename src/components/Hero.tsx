
import React from 'react';
import { ArrowRight, Play, Zap, Palette, LifeBuoy } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden particles-bg">
      {/* Enhanced background with blur layers */}
      <div className="absolute inset-0 parallax-blur-bg"></div>
      
      {/* Floating blur elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gold-primary/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-teal/15 rounded-full mix-blend-multiply filter blur-2xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-gold-secondary/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        
        {/* Enhanced Buta pattern elements with blur */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-gold-primary to-transparent rounded-full transform rotate-45 filter blur-sm"></div>
        </div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-teal to-transparent rounded-full transform -rotate-45 filter blur-sm"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight gpu-accelerated">
            {t('heroTitle').split(' ').slice(0, -2).join(' ')}
            <span className="gradient-text"> {t('heroTitle').split(' ').slice(-2).join(' ')}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {t('heroSubtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group glass-card gold-glow bg-gradient-to-r from-gold-primary to-gold-secondary text-navy-primary px-8 py-4 rounded-full hover-lift transition-all duration-300 flex items-center font-semibold">
              {t('contactNow')}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group flex items-center text-gray-300 hover:text-gold-primary transition-colors">
              <div className="glass-card w-12 h-12 rounded-full flex items-center justify-center mr-3 group-hover:gold-glow transition-all">
                <Play className="w-5 h-5 ml-1" />
              </div>
              {t('watchDemo')}
            </button>
          </div>

          {/* Enhanced Features Grid with glass morphism */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="group glass-card p-6 rounded-xl hover-lift border-gold/20 hover:border-gold/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-gold-primary to-gold-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform mx-auto">
                <Zap className="w-6 h-6 text-navy-primary" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{t('fastPerformance')}</h3>
            </div>
            
            <div className="group glass-card p-6 rounded-xl hover-lift border-teal/20 hover:border-teal/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-teal to-wine rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform mx-auto">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{t('modernDesign')}</h3>
            </div>
            
            <div className="group glass-card p-6 rounded-xl hover-lift border-gold/20 hover:border-gold/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-gold-primary to-gold-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform mx-auto">
                <LifeBuoy className="w-6 h-6 text-navy-primary" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{t('support247')}</h3>
            </div>
          </div>

          {/* Enhanced Stats with glass effect */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="glass-panel p-4 rounded-lg">
              <div className="text-3xl font-bold text-gold-primary">500+</div>
              <div className="text-gray-400">{t('projectsCompleted')}</div>
            </div>
            <div className="glass-panel p-4 rounded-lg">
              <div className="text-3xl font-bold text-gold-primary">98%</div>
              <div className="text-gray-400">{t('clientSatisfaction')}</div>
            </div>
            <div className="glass-panel p-4 rounded-lg">
              <div className="text-3xl font-bold text-gold-primary">5 İl</div>
              <div className="text-gray-400">{t('experience')}</div>
            </div>
            <div className="glass-panel p-4 rounded-lg">
              <div className="text-3xl font-bold text-gold-primary">24/7</div>
              <div className="text-gray-400">{t('support')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
