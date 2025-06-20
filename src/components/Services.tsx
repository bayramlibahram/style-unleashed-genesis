
import React from 'react';
import { Code, Search, Smartphone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Code,
      title: t('webDesign'),
      description: t('webDesignDesc'),
      features: ['React & Next.js', 'Responsive Design', 'API Integration'],
      gradient: 'from-yellow-400 to-amber-500'
    },
    {
      icon: Search,
      title: t('seoOptimization'),
      description: t('seoDesc'),
      features: ['Google Analytics', 'Keyword Research', 'Content Strategy'],
      gradient: 'from-amber-400 to-orange-500'
    },
    {
      icon: Smartphone,
      title: t('socialMedia'),
      description: t('socialMediaDesc'),
      features: ['Instagram & Facebook', 'Content Creation', 'Analytics'],
      gradient: 'from-yellow-500 to-yellow-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('ourServices')}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('servicesSubtitle')}
          </p>
          
          {/* Decorative Azerbaijani pattern */}
          <div className="mt-8 flex justify-center">
            <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-yellow-400/10 transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-yellow-400/30"
            >
              {/* Gold frame effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-transparent to-yellow-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className={`relative w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-8 h-8 text-slate-900" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors group-hover:translate-x-1 transform duration-300 flex items-center">
                {t('learnMore')} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
