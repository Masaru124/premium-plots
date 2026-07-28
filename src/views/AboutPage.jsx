'use client';

import React from 'react';
import { ShieldCheck, Award, Users, CheckCircle2, Building2, MapPin, Sparkles, MessageCircle } from 'lucide-react';
import { usePlots } from '../context/PlotsContext';

export default function AboutPage({ setActivePage }) {
  const whatsappNumber = '918431909508';
  const displayPhone = '+91 84319 09508';

  const whyChooseUsPoints = [
    'Multiple Trusted Developers',
    'Verified Projects',
    'Expert Property Guidance',
    'Site Visit Assistance',
    'Documentation Support',
    'Investment Consultation',
    'Transparent Process'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1F3A]/8 border border-[#0B1F3A]/15 text-[#0B1F3A] text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4 text-[#C8A34D]" />
          Authorized Channel Partner Consultancy
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0B1F3A] font-heading tracking-tight">
          About Premium Properties
        </h1>
        <div className="divider-gold mx-auto" />
      </div>

      {/* Core Statement Box */}
      <div className="bg-[#0B1F3A] text-white p-8 sm:p-12 rounded-3xl border border-[#C8A34D]/30 shadow-2xl space-y-6 max-w-4xl mx-auto text-center">
        <p className="text-lg sm:text-xl font-light leading-relaxed text-white/90">
          "We are an independent real estate consultancy working with multiple reputed developers as Channel Partners. We help buyers compare projects, arrange site visits and connect directly with developers."
        </p>

        <div className="pt-4 border-t border-white/15 flex flex-wrap justify-center gap-6 text-xs text-white/70">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#C8A34D]" />
            <span>0% Brokerage to Buyers</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#C8A34D]" />
            <span>Direct Developer Allocations</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#C8A34D]" />
            <span>Free Doorstep AC Cab Pickup</span>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-extrabold text-[#0B1F3A] font-heading">Why Choose Us?</h2>
          <div className="divider-gold mx-auto" />
          <p className="text-xs sm:text-sm text-[#555555]">
            Unbiased property evaluation and end-to-end buyer support across Bengaluru and Dubai.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {whyChooseUsPoints.map((point, index) => (
            <div key={index} className="glass-card p-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#0B1F3A] text-[#C8A34D] flex items-center justify-center font-bold text-sm shrink-0">
                ✓
              </div>
              <span className="font-bold text-[#0B1F3A] text-sm font-heading">{point}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Callout */}
      <div className="bg-[#F8F8F5] p-8 rounded-2xl border border-[#0B1F3A]/10 text-center space-y-4 max-w-2xl mx-auto">
        <h3 className="text-xl font-bold text-[#0B1F3A] font-heading">Speak with a Senior Land & Property Advisor</h3>
        <p className="text-xs text-[#555555]">Get authentic price sheets, RERA documents, and layout masterplans delivered to your WhatsApp.</p>
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi! I want to speak with a senior real estate advisor.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold py-3.5 px-8 inline-flex"
        >
          <MessageCircle className="w-4 h-4 fill-[#0B1F3A]" />
          Contact Hotline: {displayPhone}
        </a>
      </div>
    </div>
  );
}
