'use client';

import React, { useState } from 'react';
import { Globe, Building2, ShieldCheck, Sparkles, TrendingUp, CheckCircle2, MessageCircle, ArrowRight, Download, Award } from 'lucide-react';
import { usePlots } from '../context/PlotsContext';

export default function DubaiView({ setActivePage, setSelectedProjectId }) {
  const { projects } = usePlots();
  const dubaisProjects = projects.filter(p => p.propertyType === 'Dubai Apartments' || p.corridorId === 'dubai');
  const whatsappNumber = '918431909508';
  const displayPhone = '+91 84319 09508';

  return (
    <div className="space-y-16 py-10 bg-[#F8F8F5]">
      {/* Hero Banner */}
      <section className="relative py-20 bg-[#0B1F3A] text-white border-b border-[#C8A34D]/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C8A34D]/20 border border-[#C8A34D]/40 text-[#C8A34D] text-xs font-bold uppercase tracking-wider">
            <Globe className="w-4 h-4" />
            Dubai Real Estate Investment Desk
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-heading leading-tight max-w-4xl">
            Invest in High-Yield <span className="gold-gradient-text">Dubai Properties</span>
          </h1>

          <p className="text-base sm:text-lg text-white/80 max-w-2xl font-light leading-relaxed">
            Acquire luxury waterfront apartments in Dubai Marina, Downtown, and Palm Jumeirah with 8-10% tax-free rental returns and 10-Year UAE Golden Visa eligibility.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi! I want a consultation for Dubai property investment & Golden Visa details.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold py-4 px-8"
            >
              <MessageCircle className="w-4 h-4 fill-[#0B1F3A]" />
              Book Dubai Consultation ({displayPhone})
            </a>
          </div>
        </div>
      </section>

      {/* Investment Benefits Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-extrabold text-[#0B1F3A] font-heading">
            Why Invest in Dubai Real Estate?
          </h2>
          <div className="divider-gold mx-auto" />
          <p className="text-[#555555] text-xs sm:text-sm">
            Dubai offers unmatched financial incentives for Indian and global property investors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card p-6 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#0B1F3A] text-[#C8A34D] flex items-center justify-center font-bold text-lg font-heading">
              0%
            </div>
            <h3 className="text-lg font-bold text-[#0B1F3A] font-heading">100% Tax-Free Income</h3>
            <p className="text-xs text-[#555555] leading-relaxed">
              Zero income tax, zero capital gains tax, and zero property tax on all rental returns and capital appreciation.
            </p>
          </div>

          <div className="glass-card p-6 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#C8A34D] text-[#0B1F3A] flex items-center justify-center font-bold text-lg font-heading">
              10Y
            </div>
            <h3 className="text-lg font-bold text-[#0B1F3A] font-heading">10-Year Golden Visa</h3>
            <p className="text-xs text-[#555555] leading-relaxed">
              Invest AED 2M (approx. ₹4.5 Cr) in real estate to qualify for long-term UAE residency for your entire family.
            </p>
          </div>

          <div className="glass-card p-6 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#0B1F3A] text-[#C8A34D] flex items-center justify-center font-bold text-lg font-heading">
              8-10%
            </div>
            <h3 className="text-lg font-bold text-[#0B1F3A] font-heading">High USD Rental Yield</h3>
            <p className="text-xs text-[#555555] leading-relaxed">
              Enjoy industry-leading annual rental yields paid in strong UAE Dirham (AED pegged to US Dollar).
            </p>
          </div>

          <div className="glass-card p-6 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#C8A34D] text-[#0B1F3A] flex items-center justify-center font-bold text-lg font-heading">
              100%
            </div>
            <h3 className="text-lg font-bold text-[#0B1F3A] font-heading">Freehold Ownership</h3>
            <p className="text-xs text-[#555555] leading-relaxed">
              Complete outright title ownership for foreign nationals in Dubai prime designated zones.
            </p>
          </div>
        </div>
      </section>

      {/* Available Dubai Projects Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h2 className="text-2xl font-bold text-[#0B1F3A] font-heading border-b border-[#0B1F3A]/10 pb-3">
          Available Dubai Luxury Apartments
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dubaisProjects.map((proj) => (
            <div key={proj.id} className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between">
              <div>
                <div className="relative h-64 overflow-hidden bg-[#0B1F3A]">
                  <img src={proj.heroImage} alt={proj.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#C8A34D] text-[#0B1F3A] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase">
                      Dubai Freehold
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-xs text-[#C8A34D] font-bold block uppercase">📍 {proj.location}</span>
                    <h3 className="text-xl font-bold text-white font-heading">{proj.title}</h3>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-xs text-[#555555] leading-relaxed">{proj.overview}</p>
                  <div className="bg-[#F8F8F5] p-3 rounded-xl border border-[#0B1F3A]/10 flex justify-between items-center text-xs">
                    <div>
                      <div className="text-[10px] text-[#555555]">Starting Price</div>
                      <div className="text-[#C8A34D] font-black text-base">{proj.formattedStartPrice}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-[#555555]">Developer</div>
                      <div className="text-[#0B1F3A] font-bold">{proj.developer}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 grid grid-cols-2 gap-3">
                <button
                  onClick={() => { setSelectedProjectId(proj.id); setActivePage('project-details'); }}
                  className="btn-primary text-xs py-3"
                >
                  View Details
                </button>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi! I want details on ${proj.title} in Dubai.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold text-xs py-3 text-center"
                >
                  Book Visit
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
