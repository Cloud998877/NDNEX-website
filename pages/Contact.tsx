import React from 'react';
import { COMPANY_INFO } from '../constants';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-slate-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 overflow-hidden">
          
          {/* Info Section */}
          <div className="space-y-8">
             <div>
                <h1 className="text-4xl font-bold text-ndnex-dark mb-6 font-display">Get in Touch</h1>
                <p className="text-lg text-gray-600">
                  Interested in our services or have a question? Reach out to our team directly.
                </p>
             </div>

             <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-ndnex-orange shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1 font-display">Visit Us</h3>
                    <p className="text-gray-600">{COMPANY_INFO.address}</p>
                    <p className="text-sm text-gray-400 mt-1">Gangnam-gu, Seoul</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-ndnex-blue shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1 font-display">Call Us</h3>
                    <p className="text-gray-600">{COMPANY_INFO.phone}</p>
                    <p className="text-sm text-gray-400 mt-1">Mon-Fri, 9am - 6pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1 font-display">Email Us</h3>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-ndnex-orange hover:underline block">
                      {COMPANY_INFO.email}
                    </a>
                    <a href={`mailto:${COMPANY_INFO.contactPersonEmail}`} className="text-gray-600 hover:text-ndnex-orange transition-colors block mt-1">
                      {COMPANY_INFO.contactPersonEmail}
                    </a>
                  </div>
                </div>
             </div>
          </div>

          {/* Map / Form Placeholder */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
            {/* Simple Contact Form */}
            <div className="p-8 bg-ndnex-dark text-white">
               <h3 className="text-2xl font-bold mb-2 font-display">Send a Message</h3>
               <p className="text-gray-300 text-sm">We usually reply within 24 hours.</p>
            </div>
            <form className="p-8 space-y-6 flex-1" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2 sm:col-span-1">
                   <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                   <input type="text" className="w-full bg-slate-50 border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-ndnex-orange transition-colors" placeholder="John Doe" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                   <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                   <input type="email" className="w-full bg-slate-50 border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-ndnex-orange transition-colors" placeholder="john@company.com" />
                </div>
              </div>
              <div>
                 <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                 <select className="w-full bg-slate-50 border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-ndnex-orange transition-colors text-gray-600">
                   <option>Market Access Consulting</option>
                   <option>HEOR Study</option>
                   <option>RWE / Database Study</option>
                   <option>General Inquiry</option>
                 </select>
              </div>
              <div>
                 <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                 <textarea rows={4} className="w-full bg-slate-50 border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-ndnex-orange transition-colors resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full bg-ndnex-orange text-white font-bold py-4 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                 Send Message <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};