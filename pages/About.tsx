
import React from 'react';
import { DIRECTOR, COMPANY_INFO } from '../constants';
import { Target, Briefcase, Quote, Key, Users, Globe, Monitor, Plus, Settings } from 'lucide-react';

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

      {/* Vision & Mission - Background Watermark Style */}
      <section className="py-24 bg-white relative overflow-hidden">
        
        {/* Background Watermark - Puzzle Lightbulb */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.07] scale-125 lg:scale-100 translate-y-10">
           <svg width="500" height="600" viewBox="0 0 380 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Bulb Base */}
              <path d="M140 420H240V440H140V420Z" fill="#1A2B4A"/>
              <path d="M145 445H235V465H145V445Z" fill="#1A2B4A"/>
              <path d="M150 470H230V490H150V470Z" fill="#1A2B4A"/>
              
              {/* Bulb Body Container - Mask */}
              <defs>
                <clipPath id="bulbWatermark">
                   <path d="M190 0C107.157 0 40 67.1573 40 150C40 202.5 67.5 248.5 108 275C128.5 288.5 140 315 140 340V410H240V340C240 315 251.5 288.5 272 275C312.5 248.5 340 202.5 340 150C340 67.1573 272.843 0 190 0Z" />
                </clipPath>
              </defs>

              {/* Puzzle Pieces Group */}
              <g clipPath="url(#bulbWatermark)">
                 {/* Top Left Piece */}
                 <rect x="0" y="0" width="190" height="200" fill="#F08020" />
                 {/* Top Right Piece */}
                 <rect x="190" y="0" width="190" height="200" fill="#1A2B4A" />
                 {/* Bottom Left Piece */}
                 <rect x="0" y="200" width="190" height="300" fill="#1A2B4A" />
                 {/* Bottom Right Piece */}
                 <rect x="190" y="200" width="190" height="300" fill="#F08020" />
                 
                 {/* Puzzle Lines (White Dividers - Transparent in watermark) */}
                 <path d="M190 0V450" stroke="white" strokeWidth="10" />
                 <path d="M40 200H340" stroke="white" strokeWidth="10" />
                 
                 {/* Puzzle Knobs */}
                 <circle cx="190" cy="100" r="30" fill="#F08020" stroke="white" strokeWidth="10" />
                 <circle cx="95" cy="200" r="30" fill="#1A2B4A" stroke="white" strokeWidth="10" />
                 <circle cx="285" cy="200" r="30" fill="#F08020" stroke="white" strokeWidth="10" />
                 <circle cx="190" cy="300" r="30" fill="#1A2B4A" stroke="white" strokeWidth="10" />
              </g>
           </svg>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
             <h2 className="text-sm font-bold text-ndnex-orange uppercase tracking-widest mb-2">Our Philosophy</h2>
             <h3 className="text-3xl md:text-4xl font-bold text-ndnex-dark font-display">Driving Value & Access</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            {/* Vision Card */}
            <div className="bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all group">
               <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-ndnex-orange transition-colors duration-300">
                  <Key size={32} className="text-ndnex-orange group-hover:text-white transition-colors duration-300" strokeWidth={2} />
               </div>
               <h3 className="text-2xl font-bold text-ndnex-dark mb-2 font-display">VISION</h3>
               <h4 className="text-lg font-semibold text-ndnex-orange mb-4">Customized Integrated Solutions</h4>
               <p className="text-gray-600 leading-relaxed">
                 We provide tailored solutions that respond to changes in the healthcare paradigm with reliable evidence generation and strategic insights.
               </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all group">
               <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-ndnex-dark transition-colors duration-300">
                  <Users size={32} className="text-ndnex-dark group-hover:text-white transition-colors duration-300" strokeWidth={2} />
               </div>
               <h3 className="text-2xl font-bold text-ndnex-dark mb-2 font-display">MISSION</h3>
               <h4 className="text-lg font-semibold text-ndnex-blue mb-4">Increasing Patient Access to Treatment</h4>
               <p className="text-gray-600 leading-relaxed">
                 Ultimately, we aim to expand healthcare coverage and significantly increase the accessibility of critical treatments for patients who need them.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Leadership Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
         {/* Subtle Background Pattern */}
         <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
              style={{ backgroundImage: 'radial-gradient(#1A2B4A 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
         </div>

         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-ndnex-dark font-display">Leadership</h2>
            </div>

            {/* Compact Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
               <div className="flex flex-col md:flex-row">
                  
                  {/* Left: Profile Info */}
                  <div className="md:w-1/3 bg-ndnex-dark text-white p-10 flex flex-col justify-center items-center text-center relative overflow-hidden">
                     <div className="absolute top-0 left-0 w-full h-full bg-white/5 opacity-50 rotate-12 scale-150"></div>
                     <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 border border-white/20">
                        <Quote size={32} className="text-ndnex-orange" />
                     </div>
                     <h3 className="text-2xl font-bold font-display mb-2">{DIRECTOR.name}</h3>
                     <p className="text-ndnex-orange font-bold tracking-widest uppercase text-sm">{DIRECTOR.role}</p>
                  </div>

                  {/* Right: Experience List */}
                  <div className="md:w-2/3 p-10 flex flex-col justify-center">
                     <div className="flex items-center gap-3 mb-6">
                        <Briefcase className="text-ndnex-dark" size={20} />
                        <h4 className="text-lg font-bold text-gray-900 font-display">Professional Highlights</h4>
                     </div>
                     <ul className="space-y-4">
                        {DIRECTOR.experience.map((exp, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-600">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-ndnex-orange shrink-0"></span>
                            <span className="text-sm md:text-base leading-relaxed font-medium">{exp}</span>
                          </li>
                        ))}
                     </ul>
                  </div>

               </div>
            </div>
         </div>
      </section>
    </div>
  );
};
