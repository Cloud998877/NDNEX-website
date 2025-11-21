
import React from 'react';
import { PUBLICATIONS, DISEASE_AREAS } from '../constants';
import { BookOpen, Activity, ExternalLink, ArrowUpRight } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
       {/* Header with Background */}
       <div className="relative pt-40 pb-24 bg-ndnex-dark overflow-hidden">
         <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=2070" 
              alt="Medical Research" 
              className="w-full h-full object-cover opacity-15 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ndnex-dark"></div>
         </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">Experience & <br/>Publications</h1>
           <p className="text-xl text-gray-300 max-w-3xl font-light leading-relaxed border-l-4 border-white/20 pl-6">
             A proven track record of scientific excellence across diverse therapeutic areas, supported by peer-reviewed research.
           </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Disease Areas - Tag Cloud Style */}
        <div className="mb-24 bg-white p-10 md:p-14 rounded-3xl border border-gray-200 shadow-lg relative overflow-hidden">
           <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
              <Activity size={300} />
           </div>
          <div className="flex items-center gap-4 mb-10 border-b border-gray-100 pb-6 relative z-10">
            <div className="p-3 bg-orange-50 rounded-xl text-ndnex-orange">
               <Activity size={28} />
            </div>
            <h2 className="text-3xl font-bold text-ndnex-dark font-display">Therapeutic Areas</h2>
          </div>
          
          <div className="flex flex-wrap gap-2 relative z-10">
            {DISEASE_AREAS.map((area, idx) => (
              <span 
                key={idx} 
                className="px-4 py-2 bg-white text-gray-600 text-sm font-medium border border-gray-200 rounded-full hover:border-ndnex-blue hover:text-ndnex-blue hover:bg-blue-50 transition-all cursor-default shadow-sm hover:shadow-md"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Publications - Academic List Style */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-blue-50 rounded-xl text-ndnex-blue">
               <BookOpen size={28} />
            </div>
            <h2 className="text-3xl font-bold text-ndnex-dark font-display">Selected Publications</h2>
          </div>

          <div className="grid gap-6">
            {PUBLICATIONS.map((pub, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-ndnex-orange/50 hover:shadow-lg transition-all group relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200 group-hover:bg-ndnex-orange transition-colors"></div>
                <div className="flex flex-col md:flex-row justify-between gap-6 pl-4">
                   <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-3 text-xs font-bold mb-3">
                        <span className="bg-slate-800 text-white px-3 py-1 rounded-full">{pub.year}</span>
                        <span className="text-ndnex-blue uppercase tracking-wider bg-blue-50 px-2 py-1 rounded">{pub.journal}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 font-display leading-snug group-hover:text-ndnex-dark transition-colors">
                        {pub.title}
                      </h3>
                      
                      <p className="text-base text-gray-600 font-medium">
                        {pub.authors}
                      </p>
                   </div>
                   
                   {pub.link && (
                     <div className="shrink-0 self-start md:self-center">
                       <a 
                         href={pub.link} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="inline-flex items-center gap-2 text-sm font-bold text-ndnex-dark bg-gray-50 px-6 py-3 rounded-xl hover:bg-ndnex-orange hover:text-white transition-all hover:-translate-y-1 shadow-sm"
                       >
                         Read Article <ArrowUpRight size={18} />
                       </a>
                     </div>
                   )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
