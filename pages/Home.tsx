
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, TrendingUp, Award, Users, Globe, ChevronRight } from 'lucide-react';
import { CLIENTS } from '../constants';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden font-sans">
      {/* Professional Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-ndnex-dark overflow-hidden">
        {/* Technical/Data Grid Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-ndnex-blue opacity-20 blur-[100px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="max-w-4xl animate-fade-in-up">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ndnex-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-ndnex-orange"></span>
              </span>
              <span className="text-xs font-semibold text-gray-300 tracking-widest uppercase font-display">Evidence-Based Healthcare Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8 font-display text-white">
              Scientific Rigor Meets <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-200">
                Market Strategy
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl font-light">
              NDNEX provides world-class HEOR, Market Access, and Data Analytics to demonstrate value and secure patient access.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link to="/services" className="w-full sm:w-auto bg-white text-ndnex-dark px-8 py-4 rounded-lg font-bold text-center hover:bg-gray-50 transition-all flex items-center justify-center gap-2 font-sans">
                Explore Services <ArrowRight size={18} />
              </Link>
              <Link to="/experience" className="w-full sm:w-auto px-8 py-4 rounded-lg font-medium text-center text-white border border-white/20 hover:bg-white/5 transition-all font-sans">
                View Experience
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Stats Bar */}
      <section className="border-b border-gray-100 bg-white relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {[
              { number: "60+", label: "Clients", sub: "Global & Domestic Partners" },
              { number: "70+", label: "Therapeutic Areas", sub: "Oncology, Rare Diseases, & More" },
              { number: "100%", label: "Client Retention Focus", sub: "Long-term Strategic Partnership" }
            ].map((stat, i) => (
              <div key={i} className="py-12 px-8 flex flex-col items-center md:items-start hover:bg-gray-50/50 transition-colors">
                <span className="text-4xl md:text-5xl font-bold text-ndnex-dark font-display tracking-tight">{stat.number}</span>
                <span className="text-sm font-bold text-ndnex-orange uppercase tracking-widest mt-2">{stat.label}</span>
                <span className="text-gray-500 text-sm mt-1">{stat.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction / Philosophy */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="sticky top-24">
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Why NDNEX</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-ndnex-dark font-display leading-tight mb-6">
                Bridging the gap between <br/>
                <span className="text-ndnex-orange">Innovation</span> and <span className="text-ndnex-blue">Access</span>.
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                In a rapidly evolving healthcare landscape, data is only as valuable as the insights it generates. We combine deep scientific expertise with strategic market understanding to build compelling value stories.
              </p>
              <Link to="/about" className="text-ndnex-dark font-bold flex items-center gap-2 hover:gap-4 transition-all border-b-2 border-ndnex-orange pb-1 w-fit">
                Learn about our Mission <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid gap-6">
               {[
                 { title: "Market Access Consulting", desc: "Optimization of pricing and reimbursement strategies tailored to the Korean market landscape." },
                 { title: "HEOR & Economic Modeling", desc: "Cost-effectiveness analysis (CEA) and budget impact models (BIM) adhering to global standards." },
                 { title: "Real World Evidence", desc: "Retrospective studies and chart reviews to bridge clinical trial gaps." },
                 { title: "Big Data Analytics", desc: "Leveraging HIRA & NHIS datasets for representative market insights." }
               ].map((item, i) => (
                 <div key={i} className="bg-white p-8 border-l-4 border-gray-100 hover:border-ndnex-orange transition-all shadow-sm hover:shadow-md group">
                    <h4 className="text-xl font-bold text-ndnex-dark mb-2 font-display group-hover:text-ndnex-orange transition-colors">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients Grid - Professional Logo Wall Style */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
             <div>
                <h2 className="text-3xl font-bold text-ndnex-dark font-display">Our Clients</h2>
                <p className="text-gray-500 mt-2">Trusted by over 60 industry leaders in biopharma and medtech.</p>
             </div>
             <Link to="/experience" className="text-sm font-bold text-ndnex-orange flex items-center gap-1 hover:text-orange-700">
               View Success Stories <ChevronRight size={16} />
             </Link>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
             {CLIENTS.map((client, idx) => (
               <div key={idx} className="bg-white border border-gray-100 rounded-lg h-20 flex items-center justify-center hover:border-ndnex-orange hover:shadow-md transition-all duration-300 group px-4">
                 <span className="text-sm font-display font-bold text-gray-500 group-hover:text-ndnex-dark transition-colors text-center">
                   {client}
                 </span>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-ndnex-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10">
           <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
              <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="40" strokeDasharray="20 20" />
           </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
           <div className="max-w-2xl">
             <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-4">Ready to demonstrate value?</h2>
             <p className="text-lg text-gray-400 font-light">
               Contact our team of experts to discuss your specific Market Access and HEOR needs.
             </p>
           </div>
           <Link to="/contact" className="whitespace-nowrap bg-ndnex-orange text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-900/20">
             Start a Conversation
           </Link>
        </div>
      </section>
    </div>
  );
};
