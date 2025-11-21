
import React from 'react';
import { DIRECTOR, COMPANY_INFO } from '../constants';
import { Target, Lightbulb, Briefcase } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-20 bg-white min-h-screen font-sans">
      {/* Header */}
      <div className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h1 className="text-4xl font-bold text-ndnex-dark mb-4 font-display">About Us</h1>
           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
             We are specialized experts dedicated to increasing patient access through evidence-based solutions.
           </p>
        </div>
      </div>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision Card */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-10 text-ndnex-orange transform group-hover:scale-110 transition-transform">
                  <Lightbulb size={120} />
               </div>
               <div className="relative z-10">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-ndnex-orange mb-6">
                    <Lightbulb size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-ndnex-dark mb-4 font-display">Vision</h3>
                  <h4 className="text-lg font-semibold text-ndnex-orange mb-3">Customized Integrated Solutions</h4>
                  <p className="text-gray-600 leading-relaxed">
                    We provide tailored solutions that respond to changes in the healthcare paradigm with reliable evidence generation and strategic insights.
                  </p>
               </div>
            </div>

             {/* Mission Card */}
             <div className="bg-ndnex-dark p-8 rounded-2xl shadow-xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-10 text-white transform group-hover:scale-110 transition-transform">
                  <Target size={120} />
               </div>
               <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-ndnex-orange mb-6">
                    <Target size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-display">Mission</h3>
                  <h4 className="text-lg font-semibold text-ndnex-orange mb-3">Increasing Patient Access</h4>
                  <p className="text-gray-300 leading-relaxed">
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

            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden p-8 md:p-12 text-center md:text-left">
               <div className="max-w-4xl mx-auto">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12">
                     <div className="flex-1 text-center md:text-left">
                        <h3 className="text-3xl font-bold text-ndnex-dark font-display mb-2">{DIRECTOR.name}</h3>
                        <p className="text-ndnex-orange font-bold text-lg mb-8">{DIRECTOR.role}</p>
                        
                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-inner">
                           <div className="flex items-center justify-center md:justify-start gap-2 mb-6 border-b border-slate-200 pb-4">
                             <Briefcase size={20} className="text-ndnex-dark" />
                             <h4 className="font-bold text-gray-900 text-lg font-display">Professional Highlights</h4>
                           </div>
                           <ul className="space-y-4">
                             {DIRECTOR.experience.map((exp, i) => (
                               <li key={i} className="flex items-start gap-3 text-gray-700 text-left">
                                 <span className="block w-2 h-2 mt-2 rounded-full bg-ndnex-orange shrink-0"></span>
                                 <span className="leading-relaxed text-base">{exp}</span>
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
