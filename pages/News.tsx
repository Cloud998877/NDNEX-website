import React from "react";
import { ArrowRight } from "lucide-react";
import { NEWS } from "../constants";

type NewsItem = {
  date: string;
  title: string;
  summary: string;
  tag?: string;
  image?: string;
  link?: string;
  linkLabel?: string;
};

export const News: React.FC = () => {
  const BASE_URL = import.meta.env.BASE_URL || "/";

  const resolvePublicAsset = (path?: string) => {
    if (!path) return "";
    if (/^https?:\/\//i.test(path) || /^data:/i.test(path)) return path;
    const normalized = path.startsWith("/") ? path.slice(1) : path;
    return `${BASE_URL}${normalized}`;
  };

  const items = NEWS as NewsItem[];

  return (
    <div className="flex flex-col w-full font-sans bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="relative bg-ndnex-dark pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-ndnex-dark via-transparent to-ndnex-dark/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-block border-b-2 border-ndnex-orange pb-1 mb-6">
            <h2 className="text-sm font-bold text-white uppercase tracking-widest">Newsroom</h2>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-display leading-tight mb-6">
            News &amp; Updates
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            The latest milestones, insights, and announcements from NDNEX.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <p className="text-gray-500 text-center text-lg">No news yet. Please check back soon.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item, idx) => (
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
                    <h3 className="text-xl font-bold text-ndnex-dark font-display mb-3 leading-tight group-hover:text-ndnex-orange transition-colors">
                      {item.title}
                    </h3>
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
          )}
        </div>
      </section>
    </div>
  );
};
