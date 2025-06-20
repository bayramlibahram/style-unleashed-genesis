
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
      gradient: 'from-gold-primary to-gold-secondary',
      borderColor: 'border-gold/30 hover:border-gold/50'
    },
    {
      icon: Search,
      title: t('seoOptimization'),
      description: t('seoDesc'),
      features: ['Google Analytics', 'Keyword Research', 'Content Strategy'],
      gradient: 'from-teal to-gold-secondary',
      borderColor: 'border-teal/30 hover:border-teal/50'
    },
    {
      icon: Smartphone,
      title: t('socialMedia'),
      description: t('socialMediaDesc'),
      features: ['Instagram & Facebook', 'Content Creation', 'Analytics'],
      gradient: 'from-gold-primary to-wine',
      borderColor: 'border-gold/30 hover:border-gold/50'
    }
  ];

  return (
    <section id="services" className="py-20 bg-navy-primary relative particles-bg">
      <div className="absolute inset-0 parallax-blur-mid"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('ourServices')}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('servicesSubtitle')}
          </p>
          
          {/* Enhanced decorative element */}
          <div className="mt-8 flex justify-center">
            <div className="w-16 h-1 bg-gradient-to-r from-gold-primary to-teal rounded-full filter blur-sm"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group glass-card p-8 rounded-2xl hover-lift transition-all duration-500 ${service.borderColor}`}
            >
              {/* Enhanced gold frame effect with blur */}
              <div className="absolute inset-0 bg-gradient-to-r from-gold-primary/10 via-transparent to-teal/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 filter blur-sm"></div>
              
              <div className={`relative w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 gold-glow`}>
                <service.icon className="w-8 h-8 text-navy-primary" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gold-primary transition-colors duration-300">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-gold-primary rounded-full mr-3 filter blur-sm"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="text-gold-primary font-semibold hover:text-teal transition-colors group-hover:translate-x-1 transform duration-300 flex items-center">
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
