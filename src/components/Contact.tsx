
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@digitalcraft.az',
      gradient: 'from-gold-primary to-gold-secondary'
    },
    {
      icon: Phone,
      label: 'Telefon',
      value: '+994 (50) 123-45-67',
      gradient: 'from-teal to-gold-primary'
    },
    {
      icon: MapPin,
      label: 'Ünvan',
      value: t('location'),
      gradient: 'from-gold-primary to-wine'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-navy-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('contact')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card p-8 rounded-2xl">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Ad / Name / Имя
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 glass-panel border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-gold-primary focus:ring-1 focus:ring-gold-primary transition-colors"
                  placeholder="Adınızı daxil edin"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 glass-panel border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-gold-primary focus:ring-1 focus:ring-gold-primary transition-colors"
                  placeholder="example@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Mesaj / Message / Сообщение
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 glass-panel border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-gold-primary focus:ring-1 focus:ring-gold-primary transition-colors resize-none"
                  placeholder="Layihəniz haqqında bizə danışın..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full glass-card bg-gradient-to-r from-gold-primary to-gold-secondary text-navy-primary py-3 rounded-lg font-semibold hover-lift transition-all duration-300"
              >
                Göndər / Send / Отправить
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">{t('contactInfo')}</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${info.gradient} rounded-lg flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-navy-primary" />
                      </div>
                      <div>
                        <p className="text-gray-300">{info.label}</p>
                        <p className="text-white font-semibold">{info.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="glass-card p-6 rounded-2xl">
              <div className="aspect-video glass-panel rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-gold-primary mx-auto mb-2" />
                  <p className="text-gray-300 text-sm">Bakı, Azərbaycan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
