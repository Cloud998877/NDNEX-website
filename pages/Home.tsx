import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Award,
  Users,
  Globe,
  ChevronRight,
  BarChart2,
  Database,
} from "lucide-react";
import { CLIENTS, NEWS } from "../constants";

type Client = {
  name: string;
  logo?: string; // "/logos/xxx.jpg"
  link?: string;
};

type NewsItem = {
  date: string;
  title: string;
  summary: string;
  tag?: string;
  image?: string; // "/news/xxx.jpg" 또는 외부 URL
  link?: string;     // 자세히 보기 링크 (선택)
  linkLabel?: string; // 링크 버튼 문구 (기본: Read More)
};

export const Home: React.FC = () => {
  // Vercel + Vite base path 대응 (보통 "/" 또는 "/subpath/")
  const BASE_URL = import.meta.env.BASE_URL || "/";

  const resolvePublicAsset = (path?: string) => {
    if (!path) return "";
    if (/^https?:\/\//i.test(path) || /^data:/i.test(path)) return path;
    const normalized = path.startsWith("/") ? path.slice(1) : path; // "logos/a.jpg"
    return `${BASE_URL}${normalized}`;
  };

  const ClientLogo: React.FC<{ client: Client }> = ({ client }) => {
    const [failed, setFailed] = React.useState(false);

    if (!client.logo || failed) {
      return (
        <span className="text-[10px] md:text-xs font-bold text-gray-700 text-center leading-tight px-1">
          {client.name}
        </span>
      );
    }

    return (
      <img
        src={resolvePublicAsset(client.logo)}
        alt={client.name}
        loading="lazy"
        onError={() => setFailed(true)}
        className="
          max-h-7 md:max-h-7
          max-w-[100px] md:max-w-[120px]
          w-auto h-auto
          object-contain
          transition-transform duration-300
          group-hover:scale-[1.08]
        "
      />
    );
  };

  return (
    <div className="flex flex-col w-full overflow-hidden font-sans bg-slate-50">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1558494949-ef5209529422?auto=format&fit=crop&q=80&w=2013"
            alt="Healthcare Data Evidence and Value"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-ndnex-dark/90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-ndnex-dark/80 via-transparent to-slate-50" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-28 md:pt-20 pb-32">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-fade-in shadow-2xl">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ndnex-orange opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-ndnex-orange" />
              </span>
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase font-display">
                Evidence-Based Healthcare Solutions
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8 font-display text-white drop-shadow-2xl animate-fade-in-up">
              Scientific Rigor Meets <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ndnex-orange via-white to-blue-200">
                Healthcare Value
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl font-light drop-shadow-sm animate-fade-in-up delay-100">
              NDNEX bridges the gap between clinical data and reimbursement success. We provide world-class HEOR, Market Access,
              and Data Analytics to secure patient access.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5 animate-fade-in-up delay-200">
              <Link
                to="/services"
                className="w-full sm:w-auto bg-ndnex-orange text-white px-10 py-5 rounded-xl font-bold text-lg text-center hover:bg-orange-600 transition-all flex items-center justify-center gap-2 font-sans shadow-xl shadow-orange-900/20 hover:translate-y-[-2px]"
              >
                Explore Services <ArrowRight size={20} />
              </Link>
              <Link
                to="/experience"
                className="w-full sm:w-auto px-10 py-5 rounded-xl font-bold text-lg text-center text-white border border-white/20 hover:bg-white/10 transition-all font-sans backdrop-blur-sm flex items-center justify-center gap-2"
              >
                View Experience
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute right-0 bottom-0 w-1/3 h-full bg-gradient-to-l from-ndnex-blue/20 to-transparent blur-3xl pointer-events-none" />
      </section>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-24">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x divide-gray-100">
          {[
            { number: "60+", label: "Clients", sub: "Global & Domestic Partners", icon: <Globe className="text-ndnex-orange mb-4" size={32} /> },
            { number: "70+", label: "Therapeutic Areas", sub: "Oncology, Rare Diseases, & More", icon: <Award className="text-ndnex-blue mb-4" size={32} /> },
            { number: "100%", label: "Client Retention", sub: "Strategic Partnership Focus", icon: <Users className="text-ndnex-dark mb-4" size={32} /> },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center group hover:transform hover:scale-105 transition-transform duration-300">
              {stat.icon}
              <span className="text-5xl font-bold text-ndnex-dark font-display tracking-tight mb-2">{stat.number}</span>
              <span className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.label}</span>
              <span className="text-gray-500 text-sm font-medium">{stat.sub}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Intro */}
      <section className="py-32 bg-slate-50 relative">
        <div className="absolute inset-0 bg-grid-pattern bg-grid-40 opacity-50 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-block border-b-2 border-ndnex-orange pb-1">
                <h2 className="text-sm font-bold text-ndnex-dark uppercase tracking-widest">Why NDNEX</h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-ndnex-dark font-display leading-tight">
                Bridging the gap between <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ndnex-orange to-orange-600">Innovation</span>{" "}
                and{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ndnex-blue to-indigo-600">Access</span>.
              </h3>
              <p className="text-gray-600 text-xl leading-relaxed font-light">
                In a rapidly evolving healthcare landscape, data is only as valuable as the insights it generates. We combine deep
                scientific expertise with strategic market understanding to build compelling value stories that resonate with payers
                and policymakers.
              </p>

              <div className="pt-4">
                <Link to="/about" className="inline-flex items-center gap-3 text-ndnex-dark font-bold text-lg hover:gap-5 transition-all group">
                  <span className="border-b-2 border-ndnex-dark group-hover:border-ndnex-orange transition-colors">
                    Learn about our Mission
                  </span>
                  <ArrowRight size={20} className="text-ndnex-orange" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-ndnex-orange/20 to-ndnex-blue/20 rounded-3xl blur-lg" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/50">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015"
                  alt="Data Analytics and Strategy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-100 animate-float hidden md:block">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-lg text-ndnex-blue">
                      <BarChart2 size={24} />
                    </div>
                    <div>
                      <p className="font-display font-bold text-ndnex-dark text-lg">Evidence Generation</p>
                      <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                        Robust methodologies ensuring regulatory and reimbursement success through data-driven insights.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-32">
            {[
              { title: "Market Access Consulting", desc: "Optimization of pricing and reimbursement strategies tailored to the Korean market landscape.", icon: Globe, color: "text-blue-600", bg: "bg-blue-50" },
              { title: "HEOR & Economic Modeling", desc: "Cost-effectiveness analysis (CEA) and budget impact models (BIM) adhering to global standards.", icon: TrendingUp, color: "text-green-600", bg: "bg-green-50" },
              { title: "Real World Evidence", desc: "Retrospective studies and chart reviews to bridge clinical trial gaps.", icon: CheckCircle2, color: "text-purple-600", bg: "bg-purple-50" },
              { title: "Big Data Analytics", desc: "Leveraging HIRA & NHIS datasets for representative market insights.", icon: Database, color: "text-orange-600", bg: "bg-orange-50" },
            ].map((item, i) => (
              <Link
                to="/services"
                key={i}
                className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-ndnex-orange/30 transition-all shadow-sm hover:shadow-xl hover:-translate-y-2 duration-300 group relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-24 h-24 ${item.bg} rounded-bl-full opacity-50 transition-transform group-hover:scale-150 duration-500`} />
                <div className={`w-14 h-14 ${item.bg} rounded-xl flex items-center justify-center ${item.color} mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
                  <item.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-ndnex-dark mb-3 font-display group-hover:text-ndnex-orange transition-colors leading-tight">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{item.desc}</p>
                <div className="flex items-center text-xs font-bold text-gray-400 group-hover:text-ndnex-orange transition-colors uppercase tracking-widest">
                  Learn More <ChevronRight size={14} className="ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid-40 opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-gray-200 pb-8">
            <div>
              <div className="inline-block border-b-2 border-ndnex-orange pb-1 mb-4">
                <h2 className="text-sm font-bold text-ndnex-dark uppercase tracking-widest">Newsroom</h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-ndnex-dark font-display leading-tight">
                News &amp; Updates
              </h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(NEWS as NewsItem[]).map((item, idx) => (
              <article
                key={idx}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group flex flex-col"
              >
                {item.image && (
                  <div className="h-44 overflow-hidden">
                    <img
                      src={resolvePublicAsset(item.image)}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                )}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    {item.tag && (
                      <span className="text-[10px] font-bold uppercase tracking-widest text-ndnex-orange bg-orange-50 px-3 py-1 rounded-full">
                        {item.tag}
                      </span>
                    )}
                    <span className="text-xs text-gray-400 font-medium">{item.date}</span>
                  </div>
                  <h4 className="text-xl font-bold text-ndnex-dark font-display mb-3 leading-tight group-hover:text-ndnex-orange transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-grow">{item.summary}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-ndnex-dark group-hover:gap-3 transition-all"
                    >
                      {item.linkLabel || "Read More"} <ArrowRight size={16} className="text-ndnex-orange" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-32 bg-ndnex-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-ndnex-dark via-transparent to-ndnex-dark" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-white/10 pb-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white font-display mb-3">Our Clients</h2>
              <p className="text-gray-400 text-lg font-light max-w-xl">
                Trusted by over 60 industry leaders in biopharma and medtech to solve their most complex challenges.
              </p>
            </div>
            <Link
              to="/experience"
              className="px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white hover:bg-white hover:text-ndnex-dark transition-all font-bold text-sm flex items-center gap-2 group backdrop-blur-sm"
            >
              View Success Stories <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
            {(CLIENTS as Client[]).map((client, idx) => {
              const cardClass =
                "bg-white h-20 rounded-xl flex items-center justify-center border border-transparent hover:border-ndnex-orange hover:shadow-lg hover:scale-[1.03] transition-all duration-300 shadow-md overflow-hidden relative";

              const inner = (
                <div className="w-full h-full flex items-center justify-center p-2 group">
                  <ClientLogo client={client} />
                </div>
              );

              return client.link ? (
                <a
                  key={idx}
                  href={client.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${cardClass} cursor-pointer group`}
                >
                  {inner}
                </a>
              ) : (
                <div key={idx} className={`${cardClass} cursor-default group`}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid-40 opacity-30 pointer-events-none" />
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-orange-50 to-transparent opacity-50" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-ndnex-dark font-display mb-6">Ready to demonstrate value?</h2>
          <p className="text-xl text-gray-500 font-light mb-10 max-w-2xl mx-auto">
            Contact our team of experts to discuss your specific Market Access and HEOR needs. We are ready to partner with you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-ndnex-dark text-white px-12 py-6 rounded-full font-bold hover:bg-ndnex-blue transition-all shadow-2xl hover:-translate-y-1 text-lg group"
          >
            Start a Conversation <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};
