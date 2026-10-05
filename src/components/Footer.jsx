'use client';

import React from 'react';
import { Compass, MapPin, Phone, Mail, ShieldCheck, ArrowUpRight, Award, MessageCircle } from 'lucide-react';

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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#DFC06E] via-[#C8A34D] to-[#A6832A] p-0.5 shadow-lg flex items-center justify-center">
                <div className="w-full h-full bg-[#0B1F3A] rounded-[10px] flex items-center justify-center">
                  <Compass className="w-5 h-5 text-[#C8A34D]" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-bold tracking-tight text-white font-heading">PREMIUM</span>
                  <span className="text-xl font-bold tracking-tight text-[#C8A34D] font-heading">PROPERTIES</span>
                </div>
                <p className="text-[9px] uppercase tracking-widest text-[#C8A34D] font-mono font-bold">
                  BENGALURU • DUBAI
                </p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-white/60 pr-4">
              Independent Real Estate Consultancy and Authorized Channel Partner for premier open plot townships, luxury villa developments, high-rise apartments, and Dubai waterfront investments.
            </p>

            <div className="space-y-2.5 pt-2 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C8A34D] shrink-0 mt-0.5" />
                <span>Level 5, Concorde Towers, UB City, Vittal Mallya Road & Indiranagar, Bengaluru, Karnataka 560001</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-[#C8A34D] shrink-0" />
                <a
                  href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent('Hi Premium Properties Advisory! I want property details & consultation.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C8A34D] font-bold hover:underline"
                >
                  Contact Hotline: {displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C8A34D] shrink-0" />
                <span>advisory@premiumpropertiesbengaluru.com</span>
              </div>
            </div>
          </div>

          {/* Property Portfolios */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-[#C8A34D] uppercase tracking-wider font-heading">Property Portfolios</h3>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <button onClick={() => setActivePage('plots')} className="hover:text-[#C8A34D] transition-colors cursor-pointer text-left">
                  🏞 Open Plots (Devanahalli STRR)
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('villas')} className="hover:text-[#C8A34D] transition-colors cursor-pointer text-left">
                  🏡 Custom Luxury Villas (Vinra Alora)
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('apartments')} className="hover:text-[#C8A34D] transition-colors cursor-pointer text-left">
                  🏢 High-Rise Apartments (Prestige)
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('dubai')} className="hover:text-[#C8A34D] transition-colors cursor-pointer text-left">
                  🌍 Dubai Investments (Emaar Harbour)
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('interior')} className="hover:text-[#C8A34D] transition-colors cursor-pointer text-left">
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
                <button onClick={() => setActivePage('projects')} className="hover:text-[#C8A34D] transition-colors cursor-pointer">
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('about')} className="hover:text-[#C8A34D] transition-colors cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('contact')} className="hover:text-[#C8A34D] transition-colors cursor-pointer">
                  Contact Us
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('privacy')} className="hover:text-[#C8A34D] transition-colors cursor-pointer">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('terms')} className="hover:text-[#C8A34D] transition-colors cursor-pointer">
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('disclaimer')} className="hover:text-[#C8A34D] transition-colors cursor-pointer">
                  Disclaimer
                </button>
              </li>
            </ul>
          </div>

          {/* Channel Partner Trust */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-[#C8A34D] uppercase tracking-wider font-heading">Consultancy Assurance</h3>
            <div className="space-y-2.5 text-[11px]">
              <div className="bg-white/5 p-3.5 rounded-xl border border-white/10 space-y-1">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C8A34D]" />
                  <span>Authorized Channel Partner</span>
                </div>
                <p className="text-white/50 leading-relaxed">
                  Working directly with reputed developers for plot & villa allocations.
                </p>
              </div>
              <div className="bg-white/5 p-3.5 rounded-xl border border-white/10 space-y-1">
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
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-xs text-white/60 space-y-2 leading-relaxed">
          <div className="font-bold text-white text-[11px] uppercase tracking-wider text-[#C8A34D] font-heading">
            Disclaimer & Transparency Disclosure
          </div>
          <p>
            "We are an independent real estate consultancy working with multiple reputed developers as Channel Partners. We help buyers compare projects, arrange site visits and connect directly with developers."
          </p>
          <p className="text-[11px] text-white/40 pt-1">
            All project images, architectural plans, layout blueprints, specifications, and prices shown on this platform are for representational and indicative purposes. Official booking agreements, allotment terms, and payments are executed directly between the buyer and the respective developer.
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 pt-2 border-t border-white/5">
          <p>© {new Date().getFullYear()} Premium Properties Real Estate Advisory. All rights reserved.</p>
          <p className="text-[11px] font-mono">Channel Partner Registration Verified • Bengaluru & Dubai</p>
        </div>

      </div>
    </footer>
  );
}
