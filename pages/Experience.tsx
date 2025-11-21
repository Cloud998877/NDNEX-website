
import React from 'react';
import { PUBLICATIONS, DISEASE_AREAS } from '../constants';
import { BookOpen, Activity, ExternalLink, ArrowUpRight } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
       {/* Header */}
       <div className="bg-ndnex-dark pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">Experience & Publications</h1>
           <p className="text-xl text-gray-300 max-w-3xl font-light">
             A proven track record of scientific excellence across diverse therapeutic areas.
           </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Disease Areas - Tag Cloud Style */}
        <div className="mb-24 bg-white p-8 md:p-12 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-6">
            <Activity className="text-ndnex-orange" size={24} />
            <h2 className="text-2xl font-bold text-ndnex-dark font-display">Therapeutic Areas</h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {DISEASE_AREAS.map((area, idx) => (
              <span 
                key={idx} 
                className="px-3 py-1.5 bg-slate-50 text-gray-600 text-sm border border-gray-200 rounded hover:bg-white hover:border-ndnex-blue hover:text-ndnex-blue transition-colors cursor-default"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Publications - Academic List Style */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <BookOpen className="text-ndnex-orange" size={24} />
            <h2 className="text-2xl font-bold text-ndnex-dark font-display">Selected Publications</h2>
          </div>

          <div className="grid gap-4">
            {PUBLICATIONS.map((pub, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200 hover:border-ndnex-orange transition-all group">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                   <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold mb-2">
                        <span className="bg-blue-50 text-ndnex-blue px-2 py-0.5 rounded border border-blue-100">{pub.year}</span>
                        <span className="text-gray-500 uppercase tracking-wider">{pub.journal}</span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-2 font-display leading-snug">
                        {pub.title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 italic mb-4">
                        {pub.authors}
                      </p>
                   </div>
                   
                   {pub.link && (
                     <div className="shrink-0">
                       <a 
                         href={pub.link} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="inline-flex items-center gap-2 text-sm font-bold text-ndnex-dark bg-gray-50 px-4 py-2 rounded hover:bg-ndnex-dark hover:text-white transition-colors"
                       >
                         Read Article <ArrowUpRight size={16} />
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
