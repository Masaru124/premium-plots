'use client';

import React from 'react';
import { Compass, MapPin, Phone, Mail, ShieldCheck, ArrowUpRight, Award, MessageCircle } from 'lucide-react';
import { BENGALURU_CORRIDORS } from '../data/plotsData';

export default function Footer({ setActivePage }) {
  const whatsappNumber = '918431909508';
  const displayPhone = '+91 84319 09508';

  return (
    <footer className="bg-[#0B1F3A] text-white/70 pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E6C875] via-[#C8A34D] to-[#997328] p-0.5 shadow-lg flex items-center justify-center">
                <div className="w-full h-full bg-[#0B1F3A] rounded-[10px] flex items-center justify-center">
                  <Compass className="w-5 h-5 text-[#E6C875]" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-bold tracking-tight text-white font-heading">PREMIUM</span>
                  <span className="text-xl font-bold tracking-tight text-[#E6C875] font-heading">PROPERTIES</span>
                </div>
                <p className="text-[9px] uppercase tracking-widest text-[#E6C875] font-mono font-bold">
                  BENGALURU • DUBAI
                </p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-white/60 pr-4">
              Independent Real Estate Consultancy & Authorized Channel Partner for premier open plot townships, luxury villa developments, high-rise apartments, and Dubai waterfront investments.
            </p>

            <div className="space-y-2.5 pt-2 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C8A34D] shrink-0 mt-0.5" />
                <span>Level 5, Concorde Towers, UB City, Vittal Mallya Road & Indiranagar, Bengaluru, Karnataka 560001</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent('Hi Premium Properties Advisory! I want property details & consultation.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 font-bold hover:underline"
                >
                  Contact Hotline: {displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C8A34D] shrink-0" />
                <span>invest@premiumpropertiesbengaluru.com</span>
              </div>
            </div>
          </div>

          {/* Property Portfolios */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-[#C8A34D] uppercase tracking-wider font-heading">Property Portfolios</h3>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <button onClick={() => setActivePage('plots')} className="hover:text-[#C8A34D] transition-colors">
                  🏞 Open Plots (Devanahalli STRR)
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('villas')} className="hover:text-[#C8A34D] transition-colors">
                  🏡 Custom Luxury Villas (Vinra Alora)
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('apartments')} className="hover:text-[#C8A34D] transition-colors">
                  🏢 High-Rise Apartments (Prestige)
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('dubai')} className="hover:text-[#C8A34D] transition-colors">
                  🌍 Dubai Investments (Emaar Harbour)
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('interior')} className="hover:text-[#C8A34D] transition-colors">
                  🎨 Turnkey Interior Design (Vinra)
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-[#C8A34D] uppercase tracking-wider font-heading">Quick Links</h3>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <button onClick={() => setActivePage('home')} className="hover:text-[#C8A34D] transition-colors">
                  Home Page
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('matchmaker')} className="text-[#C8A34D] font-bold hover:underline transition-colors flex items-center gap-1">
                  <span>✨ Smart Plot Matchmaker</span>
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('about')} className="hover:text-[#C8A34D] transition-colors">
                  About Consultancy
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('contact')} className="hover:text-[#C8A34D] transition-colors">
                  Contact Us
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('privacy')} className="hover:text-[#C8A34D] transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('terms')} className="hover:text-[#C8A34D] transition-colors">
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>

          {/* Channel Partner Trust */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-[#C8A34D] uppercase tracking-wider font-heading">Consultancy Assurance</h3>
            <div className="space-y-2.5 text-[11px]">
              <div className="bg-white/5 p-3 rounded-xl border border-white/10 space-y-1">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C8A34D]" />
                  <span>Authorized Channel Partner</span>
                </div>
                <p className="text-white/50 leading-relaxed">
                  Working directly with reputed developers for plot & villa allocations.
                </p>
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/10 space-y-1">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#C8A34D]" />
                  <span>0% Brokerage to Buyers</span>
                </div>
                <p className="text-white/50 leading-relaxed">
                  Direct developer price quotes with complimentary VIP site visits.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mandatory Channel Partner Disclaimer */}
        <div className="bg-white/5 p-5 rounded-2xl border border-white/10 text-xs text-white/50 space-y-2 leading-relaxed">
          <div className="font-bold text-white text-[11px] uppercase tracking-wider text-[#C8A34D]">
            Disclaimer & Transparency Disclosure
          </div>
          <p>
            We are an independent real estate consultancy and Channel Partner associated with multiple reputed developers. Project details, pricing, approvals and availability are provided by the respective developers and are subject to change.
          </p>
        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-2 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-white/40">
          <p>© 2026 Premium Properties Real Estate Consultancy. Contact: {displayPhone}.</p>
          <div className="flex gap-6">
            <button onClick={() => setActivePage('privacy')} className="hover:text-white/70">Privacy Policy</button>
            <button onClick={() => setActivePage('terms')} className="hover:text-white/70">Terms & Conditions</button>
            <button onClick={() => setActivePage('disclaimer')} className="hover:text-white/70">Disclaimer</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
