
import React from 'react';
import { Users, Award, Zap, Shield } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Users,
      title: 'Peşəkar Komanda',
      description: 'Behram Bayramlı rəhbərliyində təcrübəli mütəxəssislər'
    },
    {
      icon: Award,
      title: 'Sertifikatlı Həllər',
      description: 'Beynəlxalq standartlara uyğun keyfiyyətli məhsullar'
    },
    {
      icon: Zap,
      title: 'Sürətli İnkişaf',
      description: 'Müasir texnologiyalar və metodlarla effektiv həllər'
    },
    {
      icon: Shield,
      title: 'Etibarlı Dəstək',
      description: '24/7 texniki dəstək və uzunmüddətli əməkdaşlıq'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Smartcode Haqqında
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Azərbaycanda rəqəmsal transformasiya sahəsində aparıcı IT agentliyi olaraq, 
            hökumət və özəl sektor üçün yenilikçi həllər təqdim edirik.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Behram Bayramlı - Founder & CEO
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              5 ildən artıq təcrübəyə malik Behram Bayramlı, Smartcode.az-ı yaradarkən məqsəd 
              Azərbaycanda texnoloji innovasiyaları həyata keçirmək və müştərilərin rəqəmsal 
              transformasiya yolculuqlarında etibarlı tərəfdaş olmaq idi.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Komandamız React, Node.js, AI modellər və müasir avtomatlaşdırma texnologiyalarından 
              istifadə edərək hər bir layihəni uğurla həyata keçirir.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">React.js</span>
              <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Node.js</span>
              <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">AI & ML</span>
              <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Mobile Apps</span>
            </div>
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
