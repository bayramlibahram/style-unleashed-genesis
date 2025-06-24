
import React from 'react';
import { Code, Smartphone, ShoppingCart, Palette, MessageSquare, BarChart3, Settings } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Veb Layihələr',
      description: 'Korporativ saytlar, portallar və interaktiv dashboard həlləri',
      features: ['React & Next.js', 'API İnteqrasiyası', 'Admin Panellər'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Smartphone,
      title: 'Mobil Tətbiqlər',
      description: 'Cross-platform mobil tətbiqlər və native həllər',
      features: ['Flutter', 'React Native', 'iOS & Android'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: ShoppingCart,
      title: 'E-ticarət',
      description: 'Ödəniş inteqrasiyaları ilə fərdi e-ticarət platformalar',
      features: ['Ödəniş Sistemləri', 'İnventory İdarəsi', 'CRM İnteqrasiya'],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Palette,
      title: 'Brending & Dizayn',
      description: 'UI/UX dizayn, loqolar və rəqəmsal dizayn sistemləri',
      features: ['UI/UX Dizayn', 'Brend İdentifikasiya', 'Dizayn Sistemləri'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MessageSquare,
      title: 'Rəqəmsal Kommunikasiya',
      description: 'Chatbot, mesajlaşma sistemləri və admin panellər',
      features: ['AI Chatbotlar', 'Mesajlaşma API', 'Real-time Chat'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: BarChart3,
      title: 'Rəqəmsal Marketinq Alətləri',
      description: 'SEO texnologiyalar, analitika və performans optimallaşdırma',
      features: ['SEO Optimallaşdırma', 'Google Analytics', 'Performans Analizi'],
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Settings,
      title: 'Biznes Avtomatlaşdırma',
      description: 'Anbar, barkod sistemləri, POS və ERP həlləri',
      features: ['ERP Sistemləri', 'Anbar İdarəsi', 'POS Həlləri'],
      color: 'from-gray-500 to-gray-700'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Xidmətlərimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Müasir biznesin ehtiyaclarına uyğun 7 əsas sahədə kompleks rəqəmsal həllər təqdim edirik
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="text-yellow-600 font-semibold hover:text-yellow-700 transition-colors group-hover:translate-x-1 transform duration-300">
                Ətraflı məlumat →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
