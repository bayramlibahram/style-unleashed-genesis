
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
    <section id="portfolio" className="py-20 bg-navy-secondary relative particles-bg">
      <div className="absolute inset-0 parallax-blur-bg"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('portfolio')}
          </h2>
          
          {/* Enhanced filter buttons with glass morphism */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2 rounded-full transition-all duration-300 hover-lift ${
                  activeFilter === filter.key
                    ? 'glass-card gold-glow bg-gradient-to-r from-gold-primary to-gold-secondary text-navy-primary font-semibold'
                    : 'glass-panel text-gray-300 hover:text-white border-teal/20'
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
              className="group glass-card rounded-xl overflow-hidden hover-lift transition-all duration-500 border-gold/20 hover:border-gold/40"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-primary via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gold-primary/20 opacity-0 group-hover:opacity-20 transition-opacity duration-300 filter blur-sm"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold-primary transition-colors">
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
