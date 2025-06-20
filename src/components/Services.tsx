
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
      gradient: 'from-gold-primary to-gold-secondary'
    },
    {
      icon: Search,
      title: t('seoOptimization'),
      description: t('seoDesc'),
      features: ['Google Analytics', 'Keyword Research', 'Content Strategy'],
      gradient: 'from-teal to-gold-secondary'
    },
    {
      icon: Smartphone,
      title: t('socialMedia'),
      description: t('socialMediaDesc'),
      features: ['Instagram & Facebook', 'Content Creation', 'Analytics'],
      gradient: 'from-gold-primary to-wine'
    }
  ];

  return (
    <section id="services" className="py-20 bg-navy-primary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('ourServices')}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('servicesSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="group glass-card p-8 rounded-2xl hover-lift transition-all duration-300 border-gold/20 hover:border-gold/40"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-navy-primary" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gold-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-gold-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="text-gold-primary font-semibold hover:text-teal transition-colors group-hover:translate-x-1 transform duration-300 flex items-center">
                  {t('learnMore')} →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
