import React from 'react';
import { Modal } from '@/components/ui/modal';
import { Play, CheckCircle, Star } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const features = [
    'Müasir və responsive dizayn',
    'Sürətli yükləmə vaxtı',
    'SEO optimallaşdırılmış',
    'Mobil uyğun interfeys',
    'Güvənlik sertifikatları',
    'Analytics inteqrasiyası'
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Demo Videosu">
      <div className="space-y-6">
        {/* Video Placeholder */}
        <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Play className="w-8 h-8 text-white ml-1" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-black/70 backdrop-blur-sm rounded-lg p-3">
              <h3 className="text-white font-semibold">Smartcode Portfolio Demo</h3>
              <p className="text-gray-300 text-sm">Layihələrimizin qısa təqdimatı</p>
            </div>
          </div>
        </div>

        {/* Demo Features */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Demo-da nələri görəcəksiniz:</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-4">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900">100+</div>
              <div className="text-sm text-gray-600">Layihə</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-600">Məmnuniyyət</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">5+</div>
              <div className="text-sm text-gray-600">İl təcrübə</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 font-medium">
            Layihə Başlat
          </button>
          <button 
            onClick={onClose}
            className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Bağla
          </button>
        </div>

        {/* Rating */}
        <div className="text-center pt-4 border-t border-gray-200">
          <div className="flex items-center justify-center space-x-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-sm text-gray-600">
            Müştərilərimizin 98%-i xidmətlərimizdən razıdır
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default DemoModal;