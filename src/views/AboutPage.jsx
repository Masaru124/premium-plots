'use client';

import React from 'react';
import { ShieldCheck, Award, Users, MapPin, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import { usePlots } from '../context/PlotsContext';

export default function AboutPage({ setActivePage }) {
  const { openSiteVisitModal } = usePlots();
  const whatsappNumber = '917676077879';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Title */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0f1d3d]/8 border border-[#0f1d3d]/15 text-[#0f1d3d] text-xs font-semibold">
          <Award className="w-4 h-4 text-[#d4af37]" />
          Bengaluru's Premier Plotted Development Advisory
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0f1d3d] tracking-tight font-heading">
          About <span className="gold-gradient-text">Premium Plots</span>
        </h1>
        <div className="divider-gold mx-auto" />

        <p className="text-[#4a5568] text-sm sm:text-base leading-relaxed mt-3">
          Founded with a single mission: to eliminate land acquisition risks in Bengaluru by offering 100% legally clear, RERA & BDA/BMRDA approved villa plot projects directly from top developers.
        </p>
      </div>

      {/* Core Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass-card p-6 sm:p-8 rounded-2xl space-y-4">
          <div className="w-12 h-12 rounded-xl bg-[#0f1d3d]/10 text-[#0f1d3d] flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-[#0f1d3d] font-heading">100% Legal Due Diligence</h3>
          <p className="text-xs text-[#718096] leading-relaxed">
            Every plot listing on Premium Plots undergoes rigorous 30-year mother deed verification by senior High Court advocates before public display.
          </p>
        </div>

        <div className="glass-card p-6 sm:p-8 rounded-2xl space-y-4">
          <div className="w-12 h-12 rounded-xl bg-[#d4af37]/15 text-[#d4af37] flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-[#0f1d3d] font-heading">Direct Developer Access</h3>
          <p className="text-xs text-[#718096] leading-relaxed">
            No middlemen, zero broker fees. Get authentic developer pricing, plot demarcation guarantees, and immediate A-Katha registration support.
          </p>
        </div>

        <div className="glass-card p-6 sm:p-8 rounded-2xl space-y-4">
          <div className="w-12 h-12 rounded-xl bg-[#0f1d3d]/10 text-[#0f1d3d] flex items-center justify-center">
            <MapPin className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-[#0f1d3d] font-heading">VIP Site Visit Experience</h3>
          <p className="text-xs text-[#718096] leading-relaxed">
            We arrange complimentary doorstep AC cab pick-up and drop for prospective buyers, guided by dedicated land investment specialists.
          </p>
        </div>
      </div>

      {/* Office & Team Banner */}
      <div className="bg-gradient-to-r from-[#0f1d3d] to-[#162550] p-8 sm:p-12 rounded-2xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <span className="text-xs text-[#d4af37] font-semibold uppercase tracking-wider">Headquarters & Experience Center</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">Visit Us in Indiranagar & UB City</h2>
          <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
            Our experience center features high-resolution masterplan maps, VR project tours, and legal verification desks.
          </p>
          <div className="space-y-2 text-xs text-white/70 pt-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
              <span>Concorde Towers, Level 5, UB City, Vittal Mallya Road, Bengaluru</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
              <span>100ft Road, Indiranagar, Bengaluru 560038</span>
            </div>
          </div>
        </div>

        <div className="space-y-4 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/15 text-center">
          <h3 className="text-lg font-bold text-white font-heading">Ready to explore plot developments?</h3>
          <p className="text-xs text-white/50">Speak directly with our Bengaluru plot investment team.</p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi! I want to visit your experience center and see plot options.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold w-full py-3 text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            Book Site Visit
          </a>
        </div>
      </div>
    </div>
  );
}
