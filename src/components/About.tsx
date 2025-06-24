import React from 'react';
import { Users, Award, Zap, Shield } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Users,
      title: 'Peşəkar Komanda',
      description: '10+ illik təcrübəyə malik mütəxəssislər'
    },
    {
      icon: Award,
      title: 'Keyfiyyətli Həllər',
      description: 'Beynəlxalq standartlara uyğun məhsullar'
    },
    {
      icon: Zap,
      title: 'Sürətli İnkişaf',
      description: 'Müasir texnologiyalar və metodlar'
    },
    {
      icon: Shield,
      title: 'Etibarlı Dəstək',
      description: '24/7 texniki dəstək və servis'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Smartcode - Peşəkar IT Həllər və Xidmətlər
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Biz sizin rəqəmsal uğurunuz üçün çalışırıq! Smartcode-un təcrübəli mütəxəssisləri 
            veb sayt, mobil tətbiq, proqram təminatı və digər IT həllərinin hazırlanmasında 
            10+ illik təcrübəyə malikdir.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Xidmətlərimiz
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-4"></div>
                <span className="text-gray-700 text-lg">Veb saytların hazırlanması</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-4"></div>
                <span className="text-gray-700 text-lg">Mobil tətbiqlərin yaradılması</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-4"></div>
                <span className="text-gray-700 text-lg">Proqram təminatının işlənməsi</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-4"></div>
                <span className="text-gray-700 text-lg">IT konsaltinq</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-4"></div>
                <span className="text-gray-700 text-lg">Texniki dəstək və servis</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Bizimlə əlaqə saxlayın:
              </h4>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center">
                  <span className="font-medium">📧 E-mail:</span>
                  <span className="ml-2">info@smartcode.az</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium">📞 Telefon:</span>
                  <span className="ml-2">+99450-709-39-96</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium">🌐 Sayt:</span>
                  <span className="ml-2">smartcode.az</span>
                </div>
              </div>
            </div>

            <p className="text-lg font-semibold text-gray-900 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Peşəkar və etibarlı tərəfdaşınız Smartcode ilə rəqəmsal dünyada öz yerinizi tutun!
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;