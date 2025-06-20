
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Portfolio = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      description: 'Modern online store with payment integration'
    },
    {
      id: 2,
      title: 'Brand Identity',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
      description: 'Complete brand identity package'
    },
    {
      id: 3,
      title: 'Social Media Campaign',
      category: 'marketing',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      description: 'Successful Instagram marketing campaign'
    },
    {
      id: 4,
      title: 'Corporate Website',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500&h=300&fit=crop',
      description: 'Professional corporate website'
    },
    {
      id: 5,
      title: 'Logo Design',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500&h=300&fit=crop',
      description: 'Minimalist logo design'
    },
    {
      id: 6,
      title: 'SEO Campaign',
      category: 'marketing',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&h=300&fit=crop',
      description: 'Successful SEO optimization project'
    }
  ];

  const filters = [
    { key: 'all', label: { az: 'Hamısı', en: 'All', ru: 'Все' } },
    { key: 'web', label: { az: 'Veb Saytlar', en: 'Websites', ru: 'Веб-сайты' } },
    { key: 'design', label: { az: 'Loqo Dizayn', en: 'Design', ru: 'Дизайн' } },
    { key: 'marketing', label: { az: 'Rəqəmsal Marketinq', en: 'Digital Marketing', ru: 'Цифровой Маркетинг' } }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('portfolio')}
          </h2>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 font-semibold'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                }`}
              >
                {filter.label.az}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="group relative bg-slate-900 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-yellow-400/10 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
