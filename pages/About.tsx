import React from 'react';
import { Link } from 'react-router-dom';
import { DIRECTOR } from '../constants';
import { Briefcase, Quote, Key, TrendingUp, ArrowRight, Award, FileText, Clock } from 'lucide-react';

export const About: React.FC = () => {
  const focusAreas = [
    'HEOR & Economic Modeling',
    'Market Access Strategy',
    'Pricing & Reimbursement',
    'Real-World Evidence',
    'HIRA / NHIS Big-Data Analytics',
  ];

  const credentials = [
    { icon: Clock, value: '22+', label: 'Years in healthcare', accent: 'orange' },
    { icon: FileText, value: '12', label: 'Peer-reviewed articles', accent: 'blue' },
  ];

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
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-ndnex-blue via-ndnex-orange to-ndnex-orange"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-ndnex-orange"></span>
              <span className="text-xs font-bold text-gray-300 uppercase tracking-[0.2em]">About NDNEX</span>
            </div>
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

      {/* 01 — Overview */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern bg-dot-20 opacity-40 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <div className="flex items-baseline gap-3">
                <span className="text-sm font-bold text-ndnex-orange font-display">01</span>
                <span className="h-px flex-1 bg-gray-200 translate-y-[-4px]"></span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-ndnex-dark font-display mt-4 leading-tight">
                Who we are
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
                At NDNEX, we believe data is only as valuable as the access it unlocks. As an independent market access and health economics consultancy, we help innovators demonstrate the value of their therapies to Korea&apos;s payers and HTA agencies through rigorous, defensible evidence.
              </p>
              <p className="text-lg text-gray-500 font-light leading-relaxed mt-6">
                Our work spans the full reimbursement pathway — cost-effectiveness analysis, budget-impact modeling, real-world evidence, and pricing &amp; market access strategy — grounded in global methodological standards and powered by Korea&apos;s HIRA and NHIS datasets. Across 70+ therapeutic areas and 60+ partnerships, our mission remains constant: enhancing patient access to treatment through evidence and next solutions.
              </p>

              <div className="flex flex-wrap gap-3 mt-10">
                {focusAreas.map((area, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-ndnex-dark bg-slate-50 border border-gray-100"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${i % 2 === 0 ? 'bg-ndnex-orange' : 'bg-ndnex-blue'}`}></span>
                    {area}
                  </span>
                ))}
              </div>

              {/* Company milestone */}
              <div className="mt-10 flex items-start gap-4 bg-ndnex-dark rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-ndnex-blue to-ndnex-orange"></div>
                <div className="shrink-0 w-11 h-11 rounded-xl bg-white/10 text-ndnex-orange flex items-center justify-center">
                  <Award size={22} />
                </div>
                <div>
                  <p className="text-white font-semibold leading-relaxed">
                    Secured Korea&apos;s first HTA-based drug reimbursement.
                  </p>
                  <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                    Among numerous successful national reimbursement listings achieved for our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — Philosophy (Vision & Mission) */}
      <section className="py-24 bg-slate-50 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-3xl opacity-60 mix-blend-multiply"></div>
          <div className="absolute bottom-20 left-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl opacity-60 mix-blend-multiply"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-16">
            <div className="flex items-baseline gap-3">
              <span className="text-sm font-bold text-ndnex-orange font-display">02</span>
              <span className="h-px w-16 bg-gray-300 translate-y-[-4px]"></span>
            </div>
            <h2 className="text-sm font-bold text-ndnex-orange uppercase tracking-widest mb-3 mt-4">Our Philosophy</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-ndnex-dark font-display mb-6">Bridging Science & Strategy</h3>
            <p className="text-gray-600 text-lg font-light">
              Our core values drive every project, ensuring we deliver not just data, but actionable pathways to market success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision */}
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

            {/* Mission */}
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

      {/* 03 — Leadership */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="flex items-baseline gap-3">
              <span className="text-sm font-bold text-ndnex-orange font-display">03</span>
              <span className="h-px w-16 bg-gray-200 translate-y-[-4px]"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-ndnex-dark font-display mt-4 relative inline-block">
              Leadership
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-ndnex-orange rounded-full"></span>
            </h2>
          </div>

          {/* Credential band */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 max-w-2xl">
            {credentials.map((c, i) => {
              const tile =
                c.accent === 'orange' ? 'bg-orange-50 text-ndnex-orange'
                : c.accent === 'blue' ? 'bg-blue-50 text-ndnex-blue'
                : 'bg-ndnex-dark text-white';
              const bar =
                c.accent === 'orange' ? 'bg-ndnex-orange'
                : c.accent === 'blue' ? 'bg-ndnex-blue'
                : 'bg-ndnex-dark';
              return (
                <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all relative overflow-hidden group">
                  <div className={`absolute top-0 left-0 right-0 h-1 ${bar}`}></div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${tile}`}>
                    <c.icon size={24} />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-ndnex-dark font-display leading-none">{c.value}</div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest mt-3">{c.label}</div>
                </div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-12 gap-12 items-start">
            {/* Title / quote column */}
            <div className="md:col-span-4">
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Driven by a passion for healthcare innovation and equitable patient access.
              </p>
              <div className="p-6 bg-slate-50 rounded-xl border border-gray-100">
                <Quote className="text-ndnex-orange mb-4 opacity-50" size={32} />
                <p className="text-gray-700 italic font-medium">
                  &quot;We are building a living bridge between medical innovation and the patients who need it — transforming evidence into real-world access and impact.&quot;
                </p>
              </div>
            </div>

            {/* Profile card */}
            <div className="md:col-span-8">
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-2/5 bg-ndnex-dark text-white p-10 flex flex-col justify-center relative">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold font-display mb-1">{DIRECTOR.name}</h3>
                    <p className="text-ndnex-orange font-bold tracking-widest uppercase text-sm mb-8">{DIRECTOR.role}</p>
                    <div className="space-y-4 text-sm text-gray-300">
                      <div className="flex items-center gap-3"><div className="w-8 h-px bg-white/30"></div><span>Strategic Leadership</span></div>
                      <div className="flex items-center gap-3"><div className="w-8 h-px bg-white/30"></div><span>HEOR Expertise</span></div>
                      <div className="flex items-center gap-3"><div className="w-8 h-px bg-white/30"></div><span>Market Access</span></div>
                    </div>
                  </div>
                </div>
                <div className="md:w-3/5 p-10 bg-gradient-to-br from-white to-slate-50">
                  <h4 className="text-xl font-bold text-ndnex-dark font-display mb-6 flex items-center gap-2">
                    <Briefcase className="text-ndnex-orange" size={24} /> Professional Background
                  </h4>
                  <ul className="space-y-6">
                    {DIRECTOR.experience.map((exp, i) => (
                      <li key={i} className="flex gap-4 group">
                        <div className="mt-1.5 flex flex-col items-center">
                          <div className="w-3 h-3 rounded-full bg-ndnex-blue group-hover:scale-125 transition-transform"></div>
                          {i !== DIRECTOR.experience.length - 1 && <div className="w-px h-full bg-gray-200 my-1"></div>}
                        </div>
                        <p className="text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors">{exp}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-ndnex-dark rounded-3xl p-10 md:p-14 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white font-display mb-4">Let&apos;s build your access strategy.</h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto font-light text-lg">
                Partner with a team that turns evidence into reimbursement success. Reach out to discuss your market access and HEOR needs.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-3 bg-ndnex-orange text-white px-10 py-5 rounded-full font-bold hover:bg-orange-600 transition-all shadow-xl hover:-translate-y-1 text-lg group">
                Start a Conversation <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
