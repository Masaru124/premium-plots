'use client';

import React, { useState } from 'react';
import { TrendingUp, Calculator, ShieldCheck, DollarSign, Calendar, ArrowUpRight, MessageCircle } from 'lucide-react';
import { usePlots } from '../context/PlotsContext';

export default function ROICalculator() {
  const { openSiteVisitModal } = usePlots();
  const [plotSqft, setPlotSqft] = useState(1500);
  const [pricePerSqft, setPricePerSqft] = useState(4950);
  const [appreciationRate, setAppreciationRate] = useState(16.5);
  const [holdingYears, setHoldingYears] = useState(3);
  const whatsappNumber = '917676077879';

  const initialInvestment = plotSqft * pricePerSqft;
  const futureValue = initialInvestment * Math.pow(1 + appreciationRate / 100, holdingYears);
  const totalProfit = futureValue - initialInvestment;
  const percentageGain = ((totalProfit / initialInvestment) * 100).toFixed(1);

  const formatLakhs = (val) => {
    const inLakhs = val / 100000;
    return `₹${inLakhs.toFixed(2)} Lakhs`;
  };

  return (
    <div className="bg-white border border-[#e2e8f0] rounded-2xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl -z-0 pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Controls */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0f1d3d]/8 border border-[#0f1d3d]/15 text-[#0f1d3d] text-xs font-semibold">
            <Calculator className="w-3.5 h-3.5 text-[#d4af37]" />
            Bengaluru Open Plot ROI Forecaster
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0f1d3d] tracking-tight font-heading">
              Calculate Your Land Appreciation & Profit Forecast
            </h3>
            <p className="text-[#718096] text-sm mt-2">
              Historically, Bengaluru open plot corridors (Devanahalli, Sarjapur, Whitefield Extension) deliver 15% - 20% annual land appreciation due to infrastructure expansion.
            </p>
          </div>

          <div className="space-y-5 bg-[#f8f9fc] p-6 rounded-xl border border-[#e2e8f0]">
            {/* Slider 1: Plot Area */}
            <div>
              <div className="flex justify-between items-center text-xs font-semibold text-[#4a5568] mb-2">
                <span>PLOT AREA (SQ.FT)</span>
                <span className="text-[#1e3a6e] font-bold text-sm">{plotSqft} sq.ft</span>
              </div>
              <input
                type="range" min="1200" max="4000" step="300" value={plotSqft}
                onChange={(e) => setPlotSqft(Number(e.target.value))}
                className="w-full h-2 bg-[#e2e8f0] rounded-lg appearance-none cursor-pointer accent-[#0f1d3d]"
              />
              <div className="flex justify-between text-[11px] text-[#a0aec0] mt-1">
                <span>30x40 (1200 sqft)</span>
                <span>30x50 (1500 sqft)</span>
                <span>40x60 (2400 sqft)</span>
                <span>50x80 (4000 sqft)</span>
              </div>
            </div>

            {/* Slider 2: Price per sqft */}
            <div>
              <div className="flex justify-between items-center text-xs font-semibold text-[#4a5568] mb-2">
                <span>PRICE PER SQ.FT</span>
                <span className="text-[#d4af37] font-bold text-sm">₹{pricePerSqft} / sq.ft</span>
              </div>
              <input
                type="range" min="3500" max="7500" step="150" value={pricePerSqft}
                onChange={(e) => setPricePerSqft(Number(e.target.value))}
                className="w-full h-2 bg-[#e2e8f0] rounded-lg appearance-none cursor-pointer accent-[#d4af37]"
              />
            </div>

            {/* Slider 3: Projected Annual Growth Rate */}
            <div>
              <div className="flex justify-between items-center text-xs font-semibold text-[#4a5568] mb-2">
                <span>ESTIMATED ANNUAL APPRECIATION</span>
                <span className="text-[#1e3a6e] font-bold text-sm">{appreciationRate}% YoY</span>
              </div>
              <input
                type="range" min="10" max="24" step="0.5" value={appreciationRate}
                onChange={(e) => setAppreciationRate(Number(e.target.value))}
                className="w-full h-2 bg-[#e2e8f0] rounded-lg appearance-none cursor-pointer accent-[#0f1d3d]"
              />
            </div>

            {/* Holding Period Tabs */}
            <div>
              <div className="text-xs font-semibold text-[#4a5568] mb-2">INVESTMENT HORIZON</div>
              <div className="grid grid-cols-3 gap-2">
                {[3, 5, 7].map((yrs) => (
                  <button
                    key={yrs}
                    onClick={() => setHoldingYears(yrs)}
                    className={`py-2.5 rounded-xl text-xs font-semibold transition-all border ${
                      holdingYears === yrs
                        ? 'bg-[#0f1d3d] text-white border-[#0f1d3d] shadow-md'
                        : 'bg-white text-[#4a5568] border-[#e2e8f0] hover:bg-[#f0f2f7]'
                    }`}
                  >
                    {yrs} Years Holding
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Output Box */}
        <div className="lg:col-span-5 bg-gradient-to-b from-[#0f1d3d] to-[#162550] p-6 sm:p-8 rounded-2xl shadow-2xl space-y-6">
          <div className="border-b border-white/15 pb-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-white/50">Total Purchase Cost</div>
            <div className="text-3xl font-extrabold text-white mt-1">{formatLakhs(initialInvestment)}</div>
            <div className="text-xs text-white/40 mt-1">({plotSqft} sq.ft @ ₹{pricePerSqft}/sq.ft)</div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
                Projected Value in {holdingYears} Years
              </div>
              <div className="text-4xl font-extrabold text-[#d4af37] mt-1">
                {formatLakhs(futureValue)}
              </div>
            </div>

            <div className="bg-[#d4af37]/10 border border-[#d4af37]/25 p-4 rounded-xl space-y-1">
              <div className="flex justify-between text-xs font-semibold text-white/80">
                <span>Estimated Net Profit</span>
                <span className="text-[#d4af37] font-bold text-sm">+{formatLakhs(totalProfit)}</span>
              </div>
              <div className="flex justify-between text-xs text-white/50">
                <span>Compound Value Growth</span>
                <span className="text-[#d4af37] font-bold">+{percentageGain}% Return</span>
              </div>
            </div>
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi! I used the ROI calculator and I am interested in high growth plots in Bengaluru.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold w-full py-3.5 text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            Book Site Visit for High Growth Plots
          </a>
        </div>
      </div>
    </div>
  );
}
