
import React from 'react';
import { DIRECTOR, COMPANY_INFO } from '../constants';
import { Target, Lightbulb, Briefcase } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Header with Background Image */}
      <div className="relative py-32 md:py-40 bg-ndnex-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069" 
            alt="Modern Office Interior" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ndnex-dark to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">About Us</h1>
           <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
             We are specialized experts dedicated to increasing patient access through evidence-based solutions.
           </p>
        </div>
      </div>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 -mt-24 relative z-20">
            {/* Vision Card */}
            <div className="bg-white p-10 rounded-2xl border-t-4 border-ndnex-blue shadow-xl shadow-slate-200/50 relative overflow-hidden group hover:-translate-y-2 transition-all duration-300">
               <div className="absolute top-0 right-0 p-8 opacity-5 text-ndnex-blue transform group-hover:scale-110 transition-transform">
                  <Lightbulb size={150} />
               </div>
               <div className="relative z-10">
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-ndnex-blue mb-6 shadow-sm">
                    <Lightbulb size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-ndnex-dark mb-4 font-display">Vision</h3>
                  <h4 className="text-lg font-semibold text-ndnex-blue mb-3">Customized Integrated Solutions</h4>
                  <p className="text-gray-600 leading-relaxed">
                    We provide tailored solutions that respond to changes in the healthcare paradigm with reliable evidence generation and strategic insights.
                  </p>
               </div>
            </div>

             {/* Mission Card */}
             <div className="bg-white p-10 rounded-2xl border-t-4 border-ndnex-orange shadow-xl shadow-slate-200/50 relative overflow-hidden group hover:-translate-y-2 transition-all duration-300">
               <div className="absolute top-0 right-0 p-8 opacity-5 text-ndnex-orange transform group-hover:scale-110 transition-transform">
                  <Target size={150} />
               </div>
               <div className="relative z-10">
                  <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center text-ndnex-orange mb-6 shadow-sm">
                    <Target size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-ndnex-dark mb-4 font-display">Mission</h3>
                  <h4 className="text-lg font-semibold text-ndnex-orange mb-3">Increasing Patient Access</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Ultimately, we aim to expand healthcare coverage and significantly increase the accessibility of critical treatments for patients who need them.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-slate-50">
         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-ndnex-dark font-display">Leadership</h2>
              <div className="w-20 h-1 bg-ndnex-orange mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden p-8 md:p-16 text-center md:text-left relative">
               {/* Decorative background element */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-gray-50 to-transparent rounded-bl-[100px] -z-0"></div>
               
               <div className="max-w-4xl mx-auto relative z-10">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12">
                     <div className="flex-1 text-center md:text-left">
                        <h3 className="text-4xl font-bold text-ndnex-dark font-display mb-2">{DIRECTOR.name}</h3>
                        <p className="text-ndnex-orange font-bold text-xl mb-8 uppercase tracking-wider">{DIRECTOR.role}</p>
                        
                        <div className="bg-slate-50/80 rounded-2xl p-8 border border-slate-100">
                           <div className="flex items-center justify-center md:justify-start gap-3 mb-6 border-b border-slate-200 pb-4">
                             <div className="p-2 bg-white rounded-lg shadow-sm">
                               <Briefcase size={20} className="text-ndnex-dark" />
                             </div>
                             <h4 className="font-bold text-gray-900 text-lg font-display">Professional Highlights</h4>
                           </div>
                           <ul className="space-y-4">
                             {DIRECTOR.experience.map((exp, i) => (
                               <li key={i} className="flex items-start gap-4 text-gray-700 text-left">
                                 <span className="block w-1.5 h-1.5 mt-2.5 rounded-full bg-ndnex-orange shrink-0"></span>
                                 <span className="leading-relaxed text-lg text-gray-600">{exp}</span>
                               </li>
                             ))}
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};
