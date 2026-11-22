'use client';

import React, { useState } from 'react';
import { TrendingUp, Calculator, ShieldCheck, DollarSign, Calendar, ArrowUpRight, MessageCircle } from 'lucide-react';
import { usePlots } from '../context/PlotsContext';

export default function ROICalculator() {
  const { openSiteVisitModal } = usePlots();
  const [plotSqft, setPlotSqft] = useState(1500);
  const [pricePerSqft, setPricePerSqft] = useState(4200);
  const [appreciationRate, setAppreciationRate] = useState(16.5);
  const [holdingYears, setHoldingYears] = useState(3);
  const whatsappNumber = '918431909508';
  const displayPhone = '+91 84319 09508';

  const initialInvestment = plotSqft * pricePerSqft;
  const futureValue = initialInvestment * Math.pow(1 + appreciationRate / 100, holdingYears);
  const totalProfit = futureValue - initialInvestment;
  const percentageGain = ((totalProfit / initialInvestment) * 100).toFixed(1);

  const formatLakhs = (val) => {
    const inLakhs = val / 100000;
    return `₹${inLakhs.toFixed(2)} Lakhs`;
  };

  return (
    <div className="relative overflow-hidden rounded-lg border border-[#0B1F3A]/10 bg-white p-6 sm:p-10">
      <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
        {/* Left Controls */}
        <div className="space-y-6 lg:col-span-7">
          <div>
            <h3 className="font-heading text-2xl font-bold tracking-tight text-[#0B1F3A] sm:text-3xl">
              Forecast land appreciation
            </h3>
            <p className="mt-2 text-base leading-relaxed text-[#555555]">
              Bengaluru plot corridors have historically returned 15% to 20% a year, driven by highway connectivity and the airport corridor. Set your plot size, rate and holding period.
            </p>
          </div>

          <div className="space-y-5 rounded-lg bg-[#F8F8F5] p-6">
            {/* Slider 1: Plot Area */}
            <div>
              <label htmlFor="roi-plot-sqft" className="mb-2 flex cursor-pointer items-center justify-between text-sm font-semibold text-[#1A1A1A]">
                <span>Plot area in sq ft</span>
                <span className="text-[#0B1F3A] font-bold text-sm">{plotSqft} sq.ft</span>
              </label>
              <input
                id="roi-plot-sqft"
                aria-label="Plot Area in Square Feet"
                type="range" min="1200" max="4000" step="300" value={plotSqft}
                onChange={(e) => setPlotSqft(Number(e.target.value))}
                className="w-full h-2 bg-[#0B1F3A]/15 rounded-lg appearance-none cursor-pointer accent-[#C8A34D]"
              />
              <div className="mt-1 flex justify-between text-xs font-medium text-[#555555]">
                <span>30x40 (1200 sqft)</span>
                <span>30x50 (1500 sqft)</span>
                <span>40x60 (2400 sqft)</span>
                <span>40x70 (2800 sqft)</span>
              </div>
            </div>

            {/* Slider 2: Price per sqft */}
            <div>
              <label htmlFor="roi-price-per-sqft" className="mb-2 flex cursor-pointer items-center justify-between text-sm font-semibold text-[#1A1A1A]">
                <span>Price per sq ft</span>
                <span className="text-[#7A5C10] font-bold text-sm">₹{pricePerSqft} / sq.ft</span>
              </label>
              <input
                id="roi-price-per-sqft"
                aria-label="Price Per Square Foot"
                type="range" min="3200" max="6500" step="100" value={pricePerSqft}
                onChange={(e) => setPricePerSqft(Number(e.target.value))}
                className="w-full h-2 bg-[#0B1F3A]/15 rounded-lg appearance-none cursor-pointer accent-[#C8A34D]"
              />
            </div>

            {/* Slider 3: Projected Annual Growth Rate */}
            <div>
              <label htmlFor="roi-appreciation-rate" className="mb-2 flex cursor-pointer items-center justify-between text-sm font-semibold text-[#1A1A1A]">
                <span>Annual appreciation</span>
                <span className="text-[#0B1F3A] font-bold text-sm">{appreciationRate}% YoY</span>
              </label>
              <input
                id="roi-appreciation-rate"
                aria-label="Estimated Annual Appreciation Rate"
                type="range" min="10" max="24" step="0.5" value={appreciationRate}
                onChange={(e) => setAppreciationRate(Number(e.target.value))}
                className="w-full h-2 bg-[#0B1F3A]/15 rounded-lg appearance-none cursor-pointer accent-[#0B1F3A]"
              />
            </div>

            {/* Holding Period Tabs */}
            <div>
              <div className="mb-2 font-heading text-base font-semibold text-[#1A1A1A]">Holding period</div>
              <div className="grid grid-cols-3 gap-2">
                {[3, 5, 7].map((yrs) => (
                  <button
                    key={yrs}
                    onClick={() => setHoldingYears(yrs)}
                    className={`rounded-lg border py-2.5 text-sm font-semibold transition-colors cursor-pointer ${
                      holdingYears === yrs
                        ? 'border-[#C8A34D] bg-[#0B1F3A] text-[#C8A34D]'
                        : 'border-[#0B1F3A]/10 bg-white text-[#1A1A1A] hover:bg-[#F8F8F5]'
                    }`}
                  >
                    {yrs} years
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Output Box */}
        <div className="space-y-6 rounded-lg bg-[#0B1F3A] p-6 text-white sm:p-8 lg:col-span-5">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <span className="text-sm text-white/60">Purchase cost</span>
            <span className="font-heading text-2xl font-bold tabular-nums text-white">{formatLakhs(initialInvestment)}</span>
          </div>

          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <span className="text-sm text-white/60">After {holdingYears} years</span>
            <span className="font-heading text-3xl font-bold tabular-nums text-[#DFC06E]">
              {formatLakhs(futureValue)}
            </span>
          </div>

          <div className="space-y-2 rounded-lg bg-white/5 p-4">
            <div className="flex justify-between text-sm font-semibold text-white/90">
              <span>Net profit</span>
              <span className="font-bold tabular-nums text-[#DFC06E]">+{formatLakhs(totalProfit)}</span>
            </div>
            <div className="flex justify-between text-sm text-white/70">
              <span>Total return</span>
              <span className="font-bold tabular-nums text-[#DFC06E]">+{percentageGain}%</span>
            </div>
          </div>

          <p className="text-sm tabular-nums text-white/60">
            Based on {plotSqft} sq ft at ₹{pricePerSqft} per sq ft.
          </p>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi! I used the ROI calculator on your site and I am interested in high appreciation plots in Bengaluru.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold flex w-full cursor-pointer items-center justify-center gap-2 py-3.5 text-sm"
          >
            <MessageCircle className="h-4 w-4 text-[#0B1F3A]" aria-hidden="true" />
            Book a visit for these plots
          </a>
        </div>
      </div>
    </div>
  );
}
