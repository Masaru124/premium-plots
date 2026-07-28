'use client';

import React from 'react';
import { MapPin, Phone, Mail, ShieldCheck, ArrowUpRight, Award, MessageCircle } from 'lucide-react';
import { BENGALURU_CORRIDORS } from '../data/plotsData';

export default function Footer({ setActivePage }) {
  const whatsappNumber = '918431909508';
  const displayPhone = '+91 84319 09508';

  return (
    <footer className="bg-[#0f1d3d] text-white/60 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#b8922f] flex items-center justify-center shadow-lg">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-bold tracking-tight text-white font-heading">PREMIUM</span>
                <span className="text-2xl font-bold tracking-tight text-[#d4af37] font-heading">PLOTS</span>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-white/50 pr-4">
              Bengaluru's premier real estate portal dedicated exclusively to verified open plot projects and luxury villa plots. Direct developer access, 100% legal clarity, and transparent investment guidance.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-1" />
                <span>Level 5, Concorde Towers, UB City, Vittal Mallya Road & Indiranagar 100ft Road, Bengaluru, Karnataka 560001</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a href={`tel:+918431909508`} className="text-white font-bold hover:text-[#d4af37] transition-colors">
                  {displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi! I am looking for open plots in Bengaluru.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] font-bold hover:underline"
                >
                  WhatsApp: {displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>invest@premiumplotsbengaluru.com</span>
              </div>
            </div>
          </div>

          {/* Hot Corridors */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[#d4af37] uppercase tracking-wider font-heading">Growth Corridors</h3>
            <ul className="space-y-2.5 text-sm">
              {BENGALURU_CORRIDORS.map((corridor) => (
                <li key={corridor.id}>
                  <button
                    onClick={() => setActivePage('projects')}
                    className="hover:text-[#d4af37] transition-colors text-left flex items-center gap-1.5 group text-white/50"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{corridor.name.split('(')[0]}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[#d4af37] uppercase tracking-wider font-heading">Navigation</h3>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li>
                <button onClick={() => setActivePage('home')} className="hover:text-[#d4af37] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('projects')} className="hover:text-[#d4af37] transition-colors">
                  All Verified Projects
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('why-invest')} className="hover:text-[#d4af37] transition-colors">
                  Why Invest in Bengaluru
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('about')} className="hover:text-[#d4af37] transition-colors">
                  About Premium Plots
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('blog')} className="hover:text-[#d4af37] transition-colors">
                  Blog & Legal Guide
                </button>
              </li>
            </ul>
          </div>

          {/* Trust Guarantees */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[#d4af37] uppercase tracking-wider font-heading">Trust Guarantees</h3>
            <div className="space-y-3 text-xs">
              <div className="bg-white/5 p-3.5 rounded-xl border border-white/8 flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">100% Legal Clearance</div>
                  <div className="text-white/40 text-[11px] mt-0.5">30-year mother deed & clear title verified by advocates.</div>
                </div>
              </div>
              <div className="bg-white/5 p-3.5 rounded-xl border border-white/8 flex items-start gap-2.5">
                <Award className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">RERA & Bank Approved</div>
                  <div className="text-white/40 text-[11px] mt-0.5">Instant home loan sanction up to 80% from SBI, HDFC, ICICI.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <p>© 2026 Premium Plots Bengaluru. All Rights Reserved. Contact WhatsApp: {displayPhone}.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/60">Privacy Policy</a>
            <a href="#" className="hover:text-white/60">Terms of Service</a>
            <a href="#" className="hover:text-white/60">RERA Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
