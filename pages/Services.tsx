
import React from 'react';
import { SERVICES } from '../constants';
import { Globe, BarChart, Database, Server, Check } from 'lucide-react';

export const Services: React.FC = () => {
  
  const getIcon = (name: string) => {
    switch(name) {
      case 'Globe': return <Globe className="w-6 h-6" />;
      case 'BarChart': return <BarChart className="w-6 h-6" />;
      case 'Database': return <Database className="w-6 h-6" />;
      case 'Server': return <Server className="w-6 h-6" />;
      default: return <Globe className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Header */}
      <div className="bg-white pt-32 pb-16 border-b border-gray-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-ndnex-orange font-bold tracking-widest uppercase text-xs mb-2 block">Our Expertise</span>
            <h1 className="text-4xl md:text-5xl font-bold font-display text-ndnex-dark mb-6">Comprehensive Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl font-light leading-relaxed">
              From regulatory strategy to complex economic modeling, we provide the end-to-end evidence generation required for successful market access.
            </p>
         </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-12">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              className="bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col lg:flex-row group hover:border-ndnex-blue/30 transition-colors"
            >
              {/* Title/Icon Column */}
              <div className="lg:w-1/3 bg-slate-50 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-gray-100 flex flex-col justify-between relative">
                 <span className="absolute top-8 right-8 text-6xl font-display font-black text-gray-200 select-none">0{index + 1}</span>
                 <div>
                   <div className="w-12 h-12 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-ndnex-dark mb-6 shadow-sm">
                      {getIcon(service.iconName)}
                   </div>
                   <h2 className="text-2xl font-bold text-ndnex-dark font-display mb-3">{service.title}</h2>
                   <p className="text-gray-600 leading-relaxed">{service.description}</p>
                 </div>
                 <div className="mt-8 h-1 w-12 bg-ndnex-orange rounded-full"></div>
              </div>

              {/* Features Column */}
              <div className="lg:w-2/3 p-8 lg:p-12">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Key Capabilities</h3>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                   {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <Check className="text-ndnex-orange shrink-0 mt-1 w-4 h-4" />
                        <span className="text-sm text-gray-700 font-medium leading-relaxed">{feature}</span>
                      </div>
                   ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
