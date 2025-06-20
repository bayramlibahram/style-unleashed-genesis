
import React from 'react';
import { ArrowRight, Play, Zap, Palette, LifeBuoy } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background elements with Buta pattern inspiration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-400/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-600/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-amber-400/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        
        {/* Subtle Buta pattern elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 opacity-5">
          <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-transparent rounded-full transform rotate-45"></div>
        </div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 opacity-5">
          <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-transparent rounded-full transform -rotate-45"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {t('heroTitle').split(' ').slice(0, -2).join(' ')}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"> {t('heroTitle').split(' ').slice(-2).join(' ')}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {t('heroSubtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 px-8 py-4 rounded-full hover:shadow-xl hover:shadow-yellow-400/25 transition-all duration-300 hover:scale-105 flex items-center font-semibold">
              {t('contactNow')}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group flex items-center text-gray-300 hover:text-yellow-400 transition-colors">
              <div className="w-12 h-12 bg-white/10 rounded-full shadow-lg flex items-center justify-center mr-3 group-hover:shadow-xl group-hover:bg-yellow-400/20 transition-all backdrop-blur-sm border border-white/20">
                <Play className="w-5 h-5 ml-1" />
              </div>
              {t('watchDemo')}
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="group p-6 bg-white/5 rounded-xl border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-slate-900" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{t('fastPerformance')}</h3>
            </div>
            
            <div className="group p-6 bg-white/5 rounded-xl border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Palette className="w-6 h-6 text-slate-900" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{t('modernDesign')}</h3>
            </div>
            
            <div className="group p-6 bg-white/5 rounded-xl border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <LifeBuoy className="w-6 h-6 text-slate-900" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{t('support247')}</h3>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-400">500+</div>
              <div className="text-gray-400">{t('projectsCompleted')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400">98%</div>
              <div className="text-gray-400">{t('clientSatisfaction')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400">5 İl</div>
              <div className="text-gray-400">{t('experience')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400">24/7</div>
              <div className="text-gray-400">{t('support')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
