
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
      {/* Header with Background Image */}
      <div className="relative pt-40 pb-20 bg-ndnex-dark border-b border-gray-200 overflow-hidden">
         <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070" 
              alt="Data Analytics Dashboard" 
              className="w-full h-full object-cover opacity-10 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ndnex-dark via-ndnex-dark/95 to-ndnex-dark/80"></div>
         </div>
         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-ndnex-orange font-bold tracking-widest uppercase text-xs mb-3 block">Our Expertise</span>
            <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6">Comprehensive <br/>Solutions</h1>
            <p className="text-xl text-gray-300 max-w-3xl font-light leading-relaxed border-l-4 border-ndnex-orange pl-6">
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
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col lg:flex-row group hover:border-ndnex-orange/30 hover:shadow-xl transition-all duration-300"
            >
              {/* Title/Icon Column */}
              <div className="lg:w-1/3 bg-slate-50 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-gray-100 flex flex-col justify-between relative group-hover:bg-orange-50/10 transition-colors">
                 <span className="absolute top-6 right-8 text-8xl font-display font-black text-gray-100 select-none group-hover:text-orange-100/50 transition-colors">0{index + 1}</span>
                 <div className="relative z-10">
                   <div className="w-14 h-14 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-ndnex-dark mb-6 shadow-sm group-hover:text-ndnex-orange group-hover:border-orange-200 transition-all">
                      {getIcon(service.iconName)}
                   </div>
                   <h2 className="text-3xl font-bold text-ndnex-dark font-display mb-4">{service.title}</h2>
                   <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
                 </div>
                 <div className="mt-10 h-1.5 w-16 bg-gray-200 rounded-full group-hover:bg-ndnex-orange transition-colors"></div>
              </div>

              {/* Features Column */}
              <div className="lg:w-2/3 p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">Key Capabilities</h3>
                <div className="grid md:grid-cols-2 gap-x-10 gap-y-5">
                   {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 group/item">
                        <div className="mt-1.5 w-4 h-4 rounded-full border border-ndnex-orange/30 flex items-center justify-center shrink-0 group-hover/item:bg-ndnex-orange group-hover/item:border-ndnex-orange transition-colors">
                          <Check className="text-ndnex-orange w-2.5 h-2.5 group-hover/item:text-white transition-colors" />
                        </div>
                        <span className="text-base text-gray-700 font-medium leading-relaxed group-hover/item:text-gray-900">{feature}</span>
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
