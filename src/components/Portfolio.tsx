
import React, { useState } from 'react';
import { ExternalLink, Code, Smartphone, ShoppingCart, BarChart3 } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Government Portal',
      category: 'web',
      image: '/placeholder.svg',
      description: 'Hökumət xidmətləri üçün tam avtomatlaşdırılmış portal',
      tech: ['React', 'Node.js', 'PostgreSQL'],
      icon: Code
    },
    {
      id: 2,
      title: 'Banking Mobile App',
      category: 'mobile',
      image: '/placeholder.svg',
      description: 'Mobil bank tətbiqi - güvənli və istifadəçi dostu',
      tech: ['Flutter', 'Firebase', 'Biometric Auth'],
      icon: Smartphone
    },
    {
      id: 3,
      title: 'E-commerce Platform',
      category: 'ecommerce',
      image: '/placeholder.svg',
      description: 'Müasir online mağaza həlli - tam avtomatlaşdırılmış',
      tech: ['Next.js', 'Stripe', 'AWS'],
      icon: ShoppingCart
    },
    {
      id: 4,
      title: 'Business Analytics Dashboard',
      category: 'web',
      image: '/placeholder.svg',
      description: 'Real-time analitika və hesabat sistemi',
      tech: ['React', 'D3.js', 'Python API'],
      icon: BarChart3
    },
    {
      id: 5,
      title: 'Restaurant Management App',
      category: 'mobile',
      image: '/placeholder.svg',
      description: 'Restoran sifarişləri və masa rezervasiya sistemi',
      tech: ['React Native', 'Socket.io', 'MongoDB'],
      icon: Smartphone
    },
    {
      id: 6,
      title: 'Healthcare Platform',
      category: 'web',
      image: '/placeholder.svg',
      description: 'Tibbi mərkəzlər üçün idarəetmə sistemi',
      tech: ['Vue.js', 'Laravel', 'MySQL'],
      icon: Code
    }
  ];

  const filters = [
    { id: 'all', label: 'Bütün Layihələr' },
    { id: 'web', label: 'Veb Layihələr' },
    { id: 'mobile', label: 'Mobil Tətbiqlər' },
    { id: 'ecommerce', label: 'E-ticarət' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Müştərilərimiz üçün reallaşdırdığımız uğurlu layihələrin nümunələri
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <project.icon className="w-16 h-16 text-gray-400" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 bg-white rounded-full p-3 transform scale-90 group-hover:scale-100 transition-all duration-300">
                    <ExternalLink className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button className="text-yellow-600 font-semibold hover:text-yellow-700 transition-colors">
                  Layihəni İzlə →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
