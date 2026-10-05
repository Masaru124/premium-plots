'use client';

import React from 'react';
import { TrendingUp, ShieldCheck, DollarSign, Building, Compass, CheckCircle2, ArrowUpRight, Sparkles, MessageCircle } from 'lucide-react';
import { usePlots } from '../context/PlotsContext';
import ROICalculator from '../components/ROICalculator';

export default function WhyInvestPage() {
  const { openSiteVisitModal } = usePlots();
  const whatsappNumber = '917676077879';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Title Banner */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0f1d3d]/8 border border-[#0f1d3d]/15 text-[#0f1d3d] text-xs font-semibold">
          <TrendingUp className="w-4 h-4 text-[#FFC727]" />
          Bengaluru Real Estate Land Growth Intelligence 2026
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0f1d3d] tracking-tight font-heading">
          Why Open Plot Investment Beats Apartments in <span className="gold-gradient-text">Bengaluru</span>
        </h1>
        <div className="divider-gold mx-auto" />

        <p className="text-[#4a5568] text-sm sm:text-base leading-relaxed mt-3">
          Land is a finite asset in Silicon Valley of India. Discover why top investors shift capital from high-depreciation apartments to 100% clear-title gated villa plots.
        </p>
      </div>

      {/* Comparison Table: Plot vs Apartment */}
      <div className="bg-white border border-[#e2e8f0] rounded-2xl p-6 sm:p-10 shadow-lg space-y-6">
        <div className="border-b border-[#e2e8f0] pb-4">
          <h3 className="text-xl font-bold text-[#0f1d3d] font-heading">Land Plot vs Built Apartment Investment Comparison</h3>
          <p className="text-xs text-[#718096] mt-1">Based on 10-year historical land registry data across Devanahalli, Whitefield, and Sarjapur.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm text-[#4a5568]">
            <thead className="bg-[#f8f9fc] text-[#718096] uppercase tracking-wider text-[11px] border-b border-[#e2e8f0]">
              <tr>
                <th className="py-3.5 px-4 font-semibold">Feature / Metric</th>
                <th className="py-3.5 px-4 font-bold text-[#0f1d3d] bg-[#0f1d3d]/5 border-x border-[#0f1d3d]/10">Open Plots (Bengaluru)</th>
                <th className="py-3.5 px-4 font-semibold text-[#718096]">High-Rise Apartments</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e2e8f0]">
              <tr>
                <td className="py-4 px-4 font-semibold text-[#0f1d3d]">Annual Capital Appreciation</td>
                <td className="py-4 px-4 font-bold text-[#1e3a6e] bg-[#0f1d3d]/3 border-x border-[#0f1d3d]/10">15% - 22% YoY Growth</td>
                <td className="py-4 px-4 text-[#718096]">6% - 9% YoY Growth</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-semibold text-[#0f1d3d]">Asset Depreciation Risk</td>
                <td className="py-4 px-4 font-bold text-[#1e3a6e] bg-[#0f1d3d]/3 border-x border-[#0f1d3d]/10">Zero (Land never depreciates)</td>
                <td className="py-4 px-4 text-rose-500">High (Building ages after 10-15 yrs)</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-semibold text-[#0f1d3d]">Undivided Share of Land (UDS)</td>
                <td className="py-4 px-4 font-bold text-[#1e3a6e] bg-[#0f1d3d]/3 border-x border-[#0f1d3d]/10">100% Sole Land Ownership</td>
                <td className="py-4 px-4 text-[#718096]">Only 20% - 25% UDS fraction</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-semibold text-[#0f1d3d]">Construction Flexibility</td>
                <td className="py-4 px-4 font-bold text-[#1e3a6e] bg-[#0f1d3d]/3 border-x border-[#0f1d3d]/10">Build custom villa anytime</td>
                <td className="py-4 px-4 text-[#718096]">Fixed layout set by builder</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-semibold text-[#0f1d3d]">Maintenance Costs</td>
                <td className="py-4 px-4 font-bold text-[#1e3a6e] bg-[#0f1d3d]/3 border-x border-[#0f1d3d]/10">Minimal (~₹500/month HOA)</td>
                <td className="py-4 px-4 text-[#FFC727]">Heavy (~₹6,000 - ₹12,000/month)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 4 Pillars of Bengaluru Land Growth */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0f1d3d] font-heading">4 Pillars Driving Bengaluru Open Plot Demand</h2>
          <div className="divider-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#0f1d3d] text-[#FFC727] flex items-center justify-center font-bold text-lg font-heading">
              01
            </div>
            <h3 className="text-lg font-bold text-[#0f1d3d] font-heading">STRR Expressway</h3>
            <p className="text-xs text-[#718096] leading-relaxed">
              280km 6-lane Satellite Town Ring Road bypasses city congestion, unlocking massive land value in Devanahalli, Hoskote & Attibele.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FFC727] text-white flex items-center justify-center font-bold text-lg font-heading">
              02
            </div>
            <h3 className="text-lg font-bold text-[#0f1d3d] font-heading">KIADB Industrial SEZ</h3>
            <p className="text-xs text-[#718096] leading-relaxed">
              Multi-billion dollar FDI from Boeing, Foxconn Apple Hub, and Safran driving over 1,50,000+ high-income engineering jobs.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#0f1d3d] text-[#FFC727] flex items-center justify-center font-bold text-lg font-heading">
              03
            </div>
            <h3 className="text-lg font-bold text-[#0f1d3d] font-heading">Namma Metro Expansion</h3>
            <p className="text-xs text-[#718096] leading-relaxed">
              Metro Phase 2B Airport Line connecting Central Bengaluru to Airport in 35 minutes elevates nearby plot corridor liquidity.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FFC727] text-white flex items-center justify-center font-bold text-lg font-heading">
              04
            </div>
            <h3 className="text-lg font-bold text-[#0f1d3d] font-heading">Clear Title Security</h3>
            <p className="text-xs text-[#718096] leading-relaxed">
              100% legal verification with A-Katha, BIAPPA/BMRDA approvals, and instant home loan sanctioning up to 80%.
            </p>
          </div>
        </div>
      </div>

      {/* Embedded ROI Calculator */}
      <ROICalculator />

      {/* CTA Box */}
      <div className="bg-gradient-to-r from-[#0f1d3d] to-[#162550] border border-[#1e3a6e]/30 p-8 sm:p-12 rounded-2xl text-center space-y-5">
        <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">Want Personal Land Investment Guidance?</h3>
        <p className="text-xs text-white/50 max-w-xl mx-auto">
          Our senior real estate advisors will provide customized corridor appreciation analysis based on your budget and holding period.
        </p>
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi! I want personal land investment guidance for Bengaluru plots.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold py-3.5 px-8 text-xs uppercase font-bold tracking-wider inline-flex items-center gap-2"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          Schedule Free Investment Advisory Visit
        </a>
      </div>
    </div>
  );
}
