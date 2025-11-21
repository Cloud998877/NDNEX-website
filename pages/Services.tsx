
import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { Globe, BarChart, Database, Server, Check, ArrowRight, ChevronDown, ChevronUp, Award } from 'lucide-react';

export const Services: React.FC = () => {
  const [activeServiceId, setActiveServiceId] = useState(SERVICES[0].id);
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const getIcon = (name: string, className = "w-6 h-6") => {
    switch(name) {
      case 'Globe': return <Globe className={className} />;
      case 'BarChart': return <BarChart className={className} />;
      case 'Database': return <Database className={className} />;
      case 'Server': return <Server className={className} />;
      default: return <Globe className={className} />;
    }
  };

  const activeService = SERVICES.find(s => s.id === activeServiceId) || SERVICES[0];

  // Mobile Toggle
  const toggleService = (id: string) => {
    setExpandedService(expandedService === id ? null : id);
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

      {/* Desktop Split View (Hidden on Mobile) */}
      <div className="hidden lg:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-12 gap-12">
          
          {/* Left Sidebar Navigation */}
          <div className="col-span-4 space-y-4">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 px-4">Select a Service</h3>
            {SERVICES.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveServiceId(service.id)}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 group relative overflow-hidden border-l-4 ${
                  activeServiceId === service.id 
                    ? 'bg-white shadow-lg border-ndnex-orange translate-x-2' 
                    : 'bg-transparent hover:bg-white/50 border-transparent hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-4 relative z-10">
                  <div className={`p-2 rounded-lg transition-colors ${
                    activeServiceId === service.id ? 'bg-orange-50 text-ndnex-orange' : 'bg-white text-gray-400 group-hover:text-ndnex-dark'
                  }`}>
                    {getIcon(service.iconName, "w-5 h-5")}
                  </div>
                  <div>
                    <h4 className={`font-bold text-lg font-display ${
                      activeServiceId === service.id ? 'text-ndnex-dark' : 'text-gray-500 group-hover:text-gray-800'
                    }`}>
                      {service.title}
                    </h4>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right Content Area */}
          <div className="col-span-8">
            <div key={activeService.id} className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 animate-fade-in h-full relative overflow-hidden">
               {/* Decorative Background blob */}
               <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
               
               <div className="relative z-10">
                 <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-ndnex-dark text-white rounded-2xl flex items-center justify-center shadow-lg">
                       {getIcon(activeService.iconName, "w-8 h-8")}
                    </div>
                    <h2 className="text-3xl font-bold text-ndnex-dark font-display">{activeService.title}</h2>
                 </div>

                 <div className="prose prose-lg text-gray-600 mb-10 leading-relaxed">
                   <p className="font-medium text-gray-800 mb-4 text-xl">{activeService.description}</p>
                   <p>{activeService.longDescription}</p>
                 </div>

                 <div className="bg-slate-50 rounded-2xl p-8 border border-gray-100">
                    <h3 className="text-sm font-bold text-ndnex-orange uppercase tracking-widest mb-6 flex items-center gap-2">
                      <Award size={16} /> Key Capabilities
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                      {activeService.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="mt-1 w-5 h-5 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 text-ndnex-blue shadow-sm">
                            <Check size={12} strokeWidth={3} />
                          </div>
                          <span className="text-gray-700 font-medium text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Accordion View (Visible only on Mobile) */}
      <div className="lg:hidden max-w-3xl mx-auto px-4 py-12 space-y-4">
        {SERVICES.map((service) => {
          const isExpanded = expandedService === service.id;
          return (
            <div 
              key={service.id} 
              className={`bg-white rounded-xl overflow-hidden transition-all duration-300 border ${
                isExpanded ? 'border-ndnex-orange shadow-lg ring-1 ring-ndnex-orange/20' : 'border-gray-200 shadow-sm'
              }`}
            >
              <button
                onClick={() => toggleService(service.id)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${isExpanded ? 'bg-orange-50 text-ndnex-orange' : 'bg-slate-50 text-gray-500'}`}>
                    {getIcon(service.iconName)}
                  </div>
                  <h3 className={`font-bold text-lg font-display ${isExpanded ? 'text-ndnex-dark' : 'text-gray-700'}`}>
                    {service.title}
                  </h3>
                </div>
                {isExpanded ? <ChevronUp className="text-ndnex-orange" /> : <ChevronDown className="text-gray-400" />}
              </button>

              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 border-t border-gray-100 bg-slate-50/50">
                  <p className="text-gray-600 mb-6 leading-relaxed pt-4">
                    {service.longDescription}
                  </p>
                  
                  <div className="bg-white rounded-lg p-5 border border-gray-100">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Capabilities</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                          <Check size={16} className="text-ndnex-blue mt-0.5 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
