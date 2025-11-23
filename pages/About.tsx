
import React from 'react';
import { DIRECTOR, COMPANY_INFO } from '../constants';
import { Target, Briefcase, Quote, Key, Users, Globe, Monitor, Plus, Settings, ArrowRight, TrendingUp } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Header with Background Image */}
      <div className="relative py-32 md:py-44 bg-ndnex-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
            alt="Modern Office Interior" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ndnex-dark via-ndnex-dark/90 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="max-w-3xl animate-fade-in-up">
             <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display tracking-tight leading-tight">
               Evidence & <br/>
               <span className="text-ndnex-orange">Next Solutions</span>
             </h1>
             <p className="text-xl text-gray-200 font-light leading-relaxed border-l-4 border-ndnex-orange pl-6">
               We are specialized experts dedicated to increasing patient access through rigorous evidence generation and strategic market insights.
             </p>
           </div>
        </div>
      </div>

      {/* Vision & Mission - Modern Minimalist Design */}
      <section className="py-24 bg-slate-50 overflow-hidden relative">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
           <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-3xl opacity-60 mix-blend-multiply"></div>
           <div className="absolute bottom-20 left-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl opacity-60 mix-blend-multiply"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-sm font-bold text-ndnex-orange uppercase tracking-widest mb-3">Our Philosophy</h2>
             <h3 className="text-3xl md:text-4xl font-bold text-ndnex-dark font-display mb-6">Bridging Science & Strategy</h3>
             <p className="text-gray-600 text-lg font-light">
               Our core values drive every project, ensuring we deliver not just data, but actionable pathways to market success.
             </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Vision Card - Modern Light Style */}
            <div className="bg-white rounded-[2rem] p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-50 to-transparent rounded-bl-full opacity-50 group-hover:scale-110 transition-transform"></div>
               
               <div className="relative z-10">
                 <div className="flex justify-between items-start mb-8">
                    <div className="p-4 bg-orange-50 text-ndnex-orange rounded-2xl shadow-sm group-hover:bg-ndnex-orange group-hover:text-white transition-colors duration-300">
                       <Key size={32} />
                    </div>
                    <span className="text-6xl font-bold text-gray-100 font-display select-none group-hover:text-orange-50 transition-colors">01</span>
                 </div>
                 
                 <h3 className="text-2xl font-bold text-ndnex-orange mb-4 font-display tracking-wide">VISION</h3>
                 <h4 className="text-xl font-semibold text-gray-800 mb-4">Customized Integrated Solutions</h4>
                 <p className="text-gray-600 leading-relaxed text-lg">
                   We provide tailored solutions that respond to changes in the healthcare paradigm with reliable evidence generation and strategic insights.
                 </p>
               </div>
            </div>

            {/* Mission Card - Modern Dark Style */}
            <div className="bg-ndnex-dark rounded-[2rem] p-10 shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 to-transparent rounded-bl-full opacity-50 group-hover:scale-110 transition-transform"></div>
               <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-ndnex-blue to-ndnex-orange"></div>

               <div className="relative z-10">
                 <div className="flex justify-between items-start mb-8">
                    <div className="p-4 bg-white/10 text-white rounded-2xl shadow-sm backdrop-blur-sm group-hover:bg-white group-hover:text-ndnex-dark transition-colors duration-300">
                       <TrendingUp size={32} />
                    </div>
                    <span className="text-6xl font-bold text-white/5 font-display select-none group-hover:text-white/10 transition-colors">02</span>
                 </div>
                 
                 <h3 className="text-2xl font-bold text-ndnex-orange mb-4 font-display tracking-wide">MISSION</h3>
                 <h4 className="text-xl font-semibold text-gray-200 mb-4">Enhancing Patient Access</h4>
                 <p className="text-gray-400 leading-relaxed text-lg">
                   Ultimately, we aim to expand healthcare coverage and significantly increase the accessibility of critical treatments for patients who need them.
                 </p>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Leadership Section - Executive Profile */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-12 gap-12 items-start">
               
               {/* Title Column */}
               <div className="md:col-span-4">
                  <h2 className="text-4xl font-bold text-ndnex-dark font-display mb-6 relative inline-block">
                    Leadership
                    <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-ndnex-orange rounded-full"></span>
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    Driven by a passion for healthcare innovation and equitable patient access.
                  </p>
                  <div className="p-6 bg-slate-50 rounded-xl border border-gray-100">
                    <Quote className="text-ndnex-orange mb-4 opacity-50" size={32} />
                    <p className="text-gray-700 italic font-medium">
                      "Our goal is to build the bridge between medical innovation and the patients who need it most."
                    </p>
                  </div>
               </div>

               {/* Profile Card */}
               <div className="md:col-span-8">
                  <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col md:flex-row">
                     
                     {/* ID Side */}
                     <div className="md:w-2/5 bg-ndnex-dark text-white p-10 flex flex-col justify-center relative">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                        <div className="relative z-10">
                          <h3 className="text-2xl font-bold font-display mb-1">{DIRECTOR.name}</h3>
                          <p className="text-ndnex-orange font-bold tracking-widest uppercase text-sm mb-8">{DIRECTOR.role}</p>
                          
                          <div className="space-y-4 text-sm text-gray-300">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-[1px] bg-white/30"></div>
                              <span>Strategic Leadership</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-[1px] bg-white/30"></div>
                              <span>HEOR Expertise</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-[1px] bg-white/30"></div>
                              <span>Market Access</span>
                            </div>
                          </div>
                        </div>
                     </div>

                     {/* Experience Side */}
                     <div className="md:w-3/5 p-10 bg-gradient-to-br from-white to-slate-50">
                        <h4 className="text-xl font-bold text-ndnex-dark font-display mb-6 flex items-center gap-2">
                          <Briefcase className="text-ndnex-orange" size={24} /> Professional Background
                        </h4>
                        <ul className="space-y-6">
                           {DIRECTOR.experience.map((exp, i) => (
                             <li key={i} className="flex gap-4 group">
                               <div className="mt-1.5 flex flex-col items-center">
                                 <div className="w-3 h-3 rounded-full bg-ndnex-blue group-hover:scale-125 transition-transform"></div>
                                 {i !== DIRECTOR.experience.length - 1 && <div className="w-[1px] h-full bg-gray-200 my-1"></div>}
                               </div>
                               <p className="text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors">
                                 {exp}
                               </p>
                             </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>
    </div>
  );
};
