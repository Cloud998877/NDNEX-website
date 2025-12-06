import React from 'react';
import { PUBLICATIONS, THERAPEUTIC_AREAS } from '../constants';
import { 
  BookOpen, 
  Activity, 
  ExternalLink, 
  ArrowUpRight, 
  Heart, 
  Brain, 
  Eye, 
  Dna, 
  Stethoscope, 
  Pill, 
  Thermometer, 
  Droplet, 
  Zap,
  ChevronRight,        // ✅ 추가
} from 'lucide-react';

export const Experience: React.FC = () => {

  // Helper to get icon based on category
  const getCategoryIcon = (category: string) => {
    if (category.includes('Oncology')) return <Dna />;
    if (category.includes('Endocrinology')) return <Droplet />;
    if (category.includes('Cardiovascular')) return <Heart />;
    if (category.includes('Neurology')) return <Brain />;
    if (category.includes('Dermatology')) return <Zap />;
    if (category.includes('Gastroenterology')) return <Pill />;
    if (category.includes('Hematology')) return <Thermometer />;
    if (category.includes('Musculoskeletal')) return <Activity />;
    if (category.includes('Ophthalmology')) return <Eye />;
    return <Stethoscope />;
  };

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
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ndnex-dark" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
            Experience & <br />
            Publications
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl font-light leading-relaxed border-l-4 border-white/20 pl-6">
            A proven track record of scientific excellence across diverse therapeutic areas,
            supported by peer-reviewed research.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Disease Areas - Categorized Grid Style */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-ndnex-orange uppercase tracking-widest mb-2">
              Deep Expertise
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-ndnex-dark font-display">
              Therapeutic Areas
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {THERAPEUTIC_AREAS.map((area, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
              >
                {/* Card Header */}
                <div className="bg-slate-50 p-6 border-b border-gray-100 flex items-center gap-4 group-hover:bg-orange-50/50 transition-colors">
                  <div className="p-3 bg-white rounded-xl text-ndnex-orange shadow-sm border border-gray-100 group-hover:scale-110 transition-transform duration-300">
                    {getCategoryIcon(area.category)}
                  </div>
                  <h4 className="font-bold text-lg text-ndnex-dark font-display leading-tight">
                    {area.category}
                  </h4>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {area.diseases.map((disease: string, dIdx: number) => (
                      <span
                        key={dIdx}
                        className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-50 text-gray-700 border border-gray-100 hover:bg-ndnex-blue/5 hover:text-ndnex-blue hover:border-ndnex-blue/20 transition-colors cursor-default"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-ndnex-orange/50 mr-2" />
                        {disease}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Publications - Academic List Style */}
        <div className="border-t border-gray-200 pt-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3
