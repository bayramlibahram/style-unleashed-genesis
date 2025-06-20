
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'az' | 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  az: {
    // Navigation
    home: 'Əsas Səhifə',
    services: 'Xidmətlər',
    portfolio: 'İşlərimiz',
    about: 'Haqqımızda',
    contact: 'Əlaqə',
    
    // Hero Section
    heroTitle: 'Peşəkar Veb Həllərimizlə Biznesinizi İnkişaf Etdirin',
    heroSubtitle: 'Xüsusi dizayn, sürətli performans, beynəlxalq standartlar.',
    contactNow: 'İndi Əlaqə Saxlayın',
    watchDemo: 'Demo İzləyin',
    
    // Features
    fastPerformance: 'Sürətli Performans',
    modernDesign: 'Müasir Dizayn',
    support247: '24/7 Dəstək',
    
    // Services
    ourServices: 'Xidmətlərimiz',
    servicesSubtitle: 'Biznesinizi rəqəmsal dünyada irəli aparmaq üçün tam həllər təklif edirik.',
    webDesign: 'Veb Dizayn',
    webDesignDesc: 'Müasir texnologiyalar ilə yaradılmış xüsusi veb saytlar.',
    seoOptimization: 'SEO Optimallaşdırma',
    seoDesc: 'Axtarış nəticələrində yüksək mövqe əldə etmək üçün strategiyalar.',
    socialMedia: 'Sosial Media İdarəetmə',
    socialMediaDesc: 'Sosial şəbəkələrdə brendinizi güclü şəkildə təmsil etmək.',
    learnMore: 'Ətraflı',
    
    // Contact
    contactInfo: 'Əlaqə Məlumatları',
    location: 'Bakı, Azərbaycan',
    
    // Footer
    footerText: '© 2024 DigitalCraft. Bütün hüquqlar qorunur.',
    
    // Stats
    projectsCompleted: 'Tamamlanmış Layihələr',
    clientSatisfaction: 'Müştəri Məmnuniyyəti',
    experience: 'Təcrübə',
    support: 'Dəstək'
  },
  en: {
    // Navigation
    home: 'Home',
    services: 'Services',
    portfolio: 'Portfolio',
    about: 'About',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Grow Your Business with Professional Web Solutions',
    heroSubtitle: 'Custom design, fast performance, international standards.',
    contactNow: 'Contact Now',
    watchDemo: 'Watch Demo',
    
    // Features
    fastPerformance: 'Fast Performance',
    modernDesign: 'Modern Design',
    support247: '24/7 Support',
    
    // Services
    ourServices: 'Our Services',
    servicesSubtitle: 'We offer complete solutions to advance your business in the digital world.',
    webDesign: 'Web Design',
    webDesignDesc: 'Custom websites built with modern technologies.',
    seoOptimization: 'SEO Optimization',
    seoDesc: 'Strategies to achieve high rankings in search results.',
    socialMedia: 'Social Media Management',
    socialMediaDesc: 'Strongly represent your brand on social networks.',
    learnMore: 'Learn More',
    
    // Contact
    contactInfo: 'Contact Information',
    location: 'Baku, Azerbaijan',
    
    // Footer
    footerText: '© 2024 DigitalCraft. All rights reserved.',
    
    // Stats
    projectsCompleted: 'Projects Completed',
    clientSatisfaction: 'Client Satisfaction',
    experience: 'Experience',
    support: 'Support'
  },
  ru: {
    // Navigation
    home: 'Главная',
    services: 'Услуги',
    portfolio: 'Портфолио',
    about: 'О нас',
    contact: 'Контакты',
    
    // Hero Section
    heroTitle: 'Развивайте Свой Бизнес с Профессиональными Веб-Решениями',
    heroSubtitle: 'Индивидуальный дизайн, быстрая производительность, международные стандарты.',
    contactNow: 'Связаться Сейчас',
    watchDemo: 'Посмотреть Демо',
    
    // Features
    fastPerformance: 'Быстрая Производительность',
    modernDesign: 'Современный Дизайн',
    support247: 'Поддержка 24/7',
    
    // Services
    ourServices: 'Наши Услуги',
    servicesSubtitle: 'Мы предлагаем полные решения для продвижения вашего бизнеса в цифровом мире.',
    webDesign: 'Веб-Дизайн',
    webDesignDesc: 'Индивидуальные веб-сайты, созданные с использованием современных технологий.',
    seoOptimization: 'SEO Оптимизация',
    seoDesc: 'Стратегии для достижения высоких позиций в результатах поиска.',
    socialMedia: 'Управление Социальными Сетями',
    socialMediaDesc: 'Сильное представление вашего бренда в социальных сетях.',
    learnMore: 'Подробнее',
    
    // Contact
    contactInfo: 'Контактная Информация',
    location: 'Баку, Азербайджан',
    
    // Footer
    footerText: '© 2024 DigitalCraft. Все права защищены.',
    
    // Stats
    projectsCompleted: 'Завершенных Проектов',
    clientSatisfaction: 'Удовлетворенность Клиентов',
    experience: 'Опыт',
    support: 'Поддержка'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('az');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.az] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
