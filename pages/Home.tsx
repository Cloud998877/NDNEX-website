
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, TrendingUp, Award, Users, Globe, ChevronRight } from 'lucide-react';
import { CLIENTS } from '../constants';

export const Home: React.FC = () => {
  // List of clients that need gigantic logo display (approx 4x)
  const GIGANTIC_LOGOS = [
    "Daewoo"
  ];

  // List of clients that need huge logo display (approx 3x)
  const HUGE_LOGOS = [
    "Daewoong"
  ];

  // List of clients that need very large logo display (approx 2.5x)
  const VERY_LARGE_LOGOS = [
    "Hyundai",
    "Myungin",
    "PharmaEssentia",
    "Roche"
  ];

  // List of clients that need extra large logo display (approx 2x)
  const EXTRA_LARGE_LOGOS = [
    "Ahn-Gook",
    "LitePharmTech",
    "Ipsen"
  ];

  // List of clients that need larger logo display (approx 1.5x)
  const LARGE_LOGOS = [
    "Daewon", 
    "Daiichi-Sankyo", 
    "Samchundang",
    "Samjin",
    "Santen",
    "Taejoon"
  ];

  // List of clients that need medium logo display (approx 0.8x)
  const MEDIUM_LOGOS = [
    // Optus moved to EXTRA_SMALL
  ];

  // List of clients that need medium-small logo display (approx 0.6x)
  const MEDIUM_SMALL_LOGOS = [
    "Kyowa Kirin"
  ];

  // List of clients that need smaller logo display (approx 0.5x)
  const SMALL_LOGOS = [
    "CSL Behring",
    "Sanofi"
  ];

  // List of clients that need extra small logo display (approx 0.4x)
  const EXTRA_SMALL_LOGOS = [
    "Optus"
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden font-sans">
      {/* Professional Hero Section with Background Image */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Abstract Network / Science Image (No people) */}
          <img 
            src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=2070" 
            alt="Abstract Healthcare Network" 
            className="w-full h-full object-cover"
          />
          {/* Dark Blue/Grey Overlay for text readability */}
          <div className="absolute inset-0 bg-ndnex-dark/90 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-ndnex-dark/60 via-ndnex-dark/60 to-ndnex-dark"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-20">
          <div className="max-w-4xl animate-fade-in-up">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md mb-8">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ndnex-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-ndnex-orange"></span>
              </span>
              <span className="text-xs font-semibold text-white tracking-widest uppercase font-display">Evidence-Based Healthcare Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8 font-display text-white drop-shadow-lg">
              Scientific Rigor Meets <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-200">
                Market Strategy
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl font-light drop-shadow-sm">
              NDNEX provides world-class HEOR, Market Access, and Data Analytics to demonstrate value and secure patient access.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link to="/services" className="w-full sm:w-auto bg-white text-ndnex-dark px-8 py-4 rounded-lg font-bold text-center hover:bg-gray-50 transition-all flex items-center justify-center gap-2 font-sans shadow-lg shadow-white/10">
                Explore Services <ArrowRight size={18} />
              </Link>
              <Link to="/experience" className="w-full sm:w-auto px-8 py-4 rounded-lg font-medium text-center text-white border border-white/30 hover:bg-white/10 transition-all font-sans backdrop-blur-sm">
                View Experience
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Stats Bar */}
      <section className="border-b border-gray-100 bg-white relative z-20 -mt-8 mx-4 md:mx-8 rounded-xl shadow-xl overflow-hidden max-w-7xl lg:mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100 bg-white">
          {[
            { number: "60+", label: "Clients", sub: "Global & Domestic Partners" },
            { number: "70+", label: "Therapeutic Areas", sub: "Oncology, Rare Diseases, & More" },
            { number: "100%", label: "Client Retention Focus", sub: "Long-term Strategic Partnership" }
          ].map((stat, i) => (
            <div key={i} className="py-10 px-8 flex flex-col items-center md:items-start hover:bg-gray-50/50 transition-colors">
              <span className="text-4xl md:text-5xl font-bold text-ndnex-dark font-display tracking-tight">{stat.number}</span>
              <span className="text-sm font-bold text-ndnex-orange uppercase tracking-widest mt-2">{stat.label}</span>
              <span className="text-gray-500 text-sm mt-1">{stat.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Introduction / Philosophy with Image */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <div>
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

            {/* Right: Image Composition */}
            <div className="relative">
              <div className="absolute -inset-4 bg-ndnex-orange/10 rounded-2xl transform rotate-3"></div>
              {/* Data Analytics / Evidence Image (No people faces) */}
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015" 
                alt="Data Analytics and Strategy" 
                className="relative rounded-xl shadow-2xl object-cover w-full h-[400px] grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-8 -left-8 bg-white p-6 rounded-lg shadow-xl max-w-xs hidden md:block border-l-4 border-ndnex-blue">
                <p className="font-display font-bold text-ndnex-dark text-lg">Evidence Generation</p>
                <p className="text-sm text-gray-500 mt-1">Robust methodologies ensuring regulatory and reimbursement success.</p>
              </div>
            </div>
          </div>

          {/* Services Grid Summary */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
             {[
               { title: "Market Access Consulting", desc: "Optimization of pricing and reimbursement strategies tailored to the Korean market landscape." },
               { title: "HEOR & Economic Modeling", desc: "Cost-effectiveness analysis (CEA) and budget impact models (BIM) adhering to global standards." },
               { title: "Real World Evidence", desc: "Retrospective studies and chart reviews to bridge clinical trial gaps." },
               { title: "Big Data Analytics", desc: "Leveraging HIRA & NHIS datasets for representative market insights." }
             ].map((item, i) => (
               <div key={i} className="bg-white p-8 rounded-xl border border-gray-100 hover:border-ndnex-orange transition-all shadow-sm hover:shadow-md group hover:-translate-y-1 duration-300">
                  <h4 className="text-lg font-bold text-ndnex-dark mb-3 font-display group-hover:text-ndnex-orange transition-colors leading-tight">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Clients Grid - LOGO + TEXT Fallback VERSION + LINKS */}
      <section className="py-24 bg-ndnex-dark relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
             <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 100 L100 0 L100 100 Z" fill="white" />
             </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
             <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-2">Our Clients</h2>
                <p className="text-gray-300 text-lg font-light">Trusted by over 60 industry leaders in biopharma and medtech.</p>
             </div>
             <Link to="/experience" className="px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white hover:text-ndnex-dark transition-all font-bold text-sm flex items-center gap-2 group">
               View Success Stories <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
             </Link>
           </div>
           
           {/* Compact Client Grid */}
           <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3">
             {CLIENTS.map((client, idx) => {
               const isGigantic = GIGANTIC_LOGOS.includes(client.name);
               const isHuge = HUGE_LOGOS.includes(client.name);
               const isVeryLarge = VERY_LARGE_LOGOS.includes(client.name);
               const isExtraLarge = EXTRA_LARGE_LOGOS.includes(client.name);
               const isLarge = LARGE_LOGOS.includes(client.name);
               const isMedium = MEDIUM_LOGOS.includes(client.name);
               const isMediumSmall = MEDIUM_SMALL_LOGOS.includes(client.name);
               const isSmall = SMALL_LOGOS.includes(client.name);
               const isExtraSmall = EXTRA_SMALL_LOGOS.includes(client.name);
               
               let sizeClass = 'h-7 md:h-8'; // Default Standard Size (approx 32px)
               if (isGigantic) sizeClass = 'h-28 md:h-32'; // Gigantic (4x)
               else if (isHuge) sizeClass = 'h-20 md:h-24'; // Huge (3x)
               else if (isVeryLarge) sizeClass = 'h-16 md:h-20'; // Very Large (2.5x)
               else if (isExtraLarge) sizeClass = 'h-14 md:h-16'; // Extra Large (2x)
               else if (isLarge) sizeClass = 'h-10 md:h-12'; // Large (1.5x)
               else if (isMedium) sizeClass = 'h-6 md:h-7'; // Medium (0.8x approx 26px)
               else if (isMediumSmall) sizeClass = 'h-4 md:h-5'; // Medium Small (0.6x)
               else if (isSmall) sizeClass = 'h-3.5 md:h-4'; // Small (0.5x)
               else if (isExtraSmall) sizeClass = 'h-2.5 md:h-3'; // Extra Small (0.4x)

               const content = (
                 <>
                   {client.logo ? (
                     <div className="w-full h-full flex items-center justify-center">
                        <img 
                          src={client.logo} 
                          alt={client.name} 
                          className={`${sizeClass} w-auto max-w-[90%] object-contain transition-all duration-500`}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            // Fallback to showing text
                            const sibling = e.currentTarget.nextSibling as HTMLElement;
                            if (sibling) sibling.style.display = 'block';
                          }}
                        />
                        <span className="hidden text-[10px] md:text-xs font-bold text-ndnex-dark text-center leading-tight">{client.name}</span>
                     </div>
                   ) : (
                     <span className="text-[10px] md:text-xs font-bold text-ndnex-dark text-center leading-tight px-1">
                       {client.name}
                     </span>
                   )}
                 </>
               );

               return client.link ? (
                 <a 
                   key={idx} 
                   href={client.link} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="bg-white h-16 rounded-lg flex items-center justify-center p-2 hover:bg-blue-50 hover:scale-[1.02] transition-all duration-300 shadow-lg cursor-pointer group overflow-hidden relative"
                 >
                   {content}
                 </a>
               ) : (
                 <div key={idx} className="bg-white h-16 rounded-lg flex items-center justify-center p-2 hover:bg-blue-50 hover:scale-[1.02] transition-all duration-300 shadow-lg cursor-default group overflow-hidden relative">
                   {content}
                 </div>
               );
             })}
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
           <div className="max-w-2xl">
             <h2 className="text-3xl md:text-4xl font-bold text-ndnex-dark font-display mb-4">Ready to demonstrate value?</h2>
             <p className="text-lg text-gray-500 font-light">
               Contact our team of experts to discuss your specific Market Access and HEOR needs.
             </p>
           </div>
           <Link to="/contact" className="whitespace-nowrap bg-ndnex-orange text-white px-10 py-5 rounded-xl font-bold hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20 hover:-translate-y-1 text-lg">
             Start a Conversation
           </Link>
        </div>
      </section>
    </div>
  );
};
