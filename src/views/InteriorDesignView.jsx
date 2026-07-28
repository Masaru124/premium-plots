'use client';

import React from 'react';
import { Sparkles, CheckCircle2, MessageCircle, ShieldCheck, Download, Award, Home } from 'lucide-react';
import { INTERIOR_PACKAGES } from '../data/plotsData';

export default function InteriorDesignView({ setActivePage }) {
  const whatsappNumber = '918431909508';
  const displayPhone = '+91 84319 09508';

  return (
    <div className="space-y-16 py-10 bg-[#F8F8F5]">
      {/* Hero Banner */}
      <section className="relative py-20 bg-[#0B1F3A] text-white border-b border-[#C8A34D]/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C8A34D]/20 border border-[#C8A34D]/40 text-[#C8A34D] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#C8A34D]" />
            Vinra Interiors & Renovations Pvt Ltd
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-heading leading-tight max-w-4xl">
            Turnkey <span className="gold-gradient-text">Interior Design & Villa Construction</span>
          </h1>

          <p className="text-base sm:text-lg text-white/80 max-w-2xl font-light leading-relaxed">
            Custom modular interiors, 3D elevation planning, and premium material execution for plot owners and luxury villa buyers across Bengaluru.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi Vinra Interiors! I want to request an interior design quote & 3D consultation.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold py-4 px-8"
            >
              <MessageCircle className="w-4 h-4 fill-[#0B1F3A]" />
              Book Interior Consultation ({displayPhone})
            </a>
          </div>
        </div>
      </section>

      {/* Interior Packages Grid (Silver, Gold, Platinum) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-extrabold text-[#0B1F3A] font-heading">
            Turnkey Interior Design Packages
          </h2>
          <div className="divider-gold mx-auto" />
          <p className="text-[#555555] text-xs sm:text-sm">
            Transparent sq.ft pricing with factory-finish modular woodworking, Century/Greenply materials, and HETTICH/HAFELE hardware.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INTERIOR_PACKAGES.map((pkg, i) => (
            <div
              key={i}
              className={`glass-card p-8 space-y-6 flex flex-col justify-between relative ${
                pkg.name === 'Gold Package' ? 'ring-2 ring-[#C8A34D] shadow-2xl scale-105 bg-white' : ''
              }`}
            >
              {pkg.name === 'Gold Package' && (
                <span className="absolute -top-3 right-6 bg-[#C8A34D] text-[#0B1F3A] text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  MOST POPULAR VILLA CHOICE
                </span>
              )}

              <div className="space-y-4">
                <div className="border-b border-[#0B1F3A]/10 pb-4">
                  <h3 className="text-xl font-bold text-[#0B1F3A] font-heading">{pkg.name}</h3>
                  <div className="text-2xl font-black text-[#C8A34D] mt-1">{pkg.dryAreaPrice}</div>
                  <div className="text-[11px] text-[#555555]">Dry Area Costing (Wet Area: {pkg.wetAreaPrice})</div>
                </div>

                <ul className="space-y-2.5 text-xs text-[#555555]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0B1F3A] shrink-0 mt-0.5" />
                    <span><strong>Core Material (Dry):</strong> {pkg.coreDry}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0B1F3A] shrink-0 mt-0.5" />
                    <span><strong>Core Material (Wet):</strong> {pkg.coreWet}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0B1F3A] shrink-0 mt-0.5" />
                    <span><strong>Finish Type:</strong> {pkg.finish}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0B1F3A] shrink-0 mt-0.5" />
                    <span><strong>Hardware & Hinges:</strong> {pkg.hardware}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0B1F3A] shrink-0 mt-0.5" />
                    <span><strong>Kitchen Accessories:</strong> {pkg.accessories}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0B1F3A] shrink-0 mt-0.5" />
                    <span><strong>Handles:</strong> {pkg.handles}</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-[#0B1F3A]/10">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi Vinra Interiors! I want details on the ${pkg.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full text-center text-xs py-3.5"
                >
                  Select {pkg.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="bg-white py-16 border-y border-[#0B1F3A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl font-extrabold text-[#0B1F3A] font-heading">Complete Scope of Work</h2>
            <p className="text-xs text-[#555555]">Modular Kitchens • Master Wardrobes • False Ceiling • Civil Masonry • Electrical & Lighting</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#555555]">
            <div className="p-5 rounded-2xl bg-[#F8F8F5] border border-[#0B1F3A]/10 space-y-2">
              <h4 className="font-bold text-[#0B1F3A] text-sm font-heading">Modular Kitchen & Dining</h4>
              <p>Granite/Quartz countertops, soft-close drawers, tandem boxes, chimney cutouts & dado tiles.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#F8F8F5] border border-[#0B1F3A]/10 space-y-2">
              <h4 className="font-bold text-[#0B1F3A] text-sm font-heading">Bedrooms & Living Units</h4>
              <p>Floor-to-ceiling wardrobes, wooden laminate flooring, TV entertainment units & accent panelling.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#F8F8F5] border border-[#0B1F3A]/10 space-y-2">
              <h4 className="font-bold text-[#0B1F3A] text-sm font-heading">Civil, Electrical & Lighting</h4>
              <p>M25 RCC frame masonry, UPVC windows, cove lighting, CCTV wiring, and car charging points.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
