'use client';

import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { usePlots } from '../context/PlotsContext';

export default function ROICalculator() {
  const { openSiteVisitModal } = usePlots();
  const [plotSqft, setPlotSqft] = useState(1500);
  const [pricePerSqft, setPricePerSqft] = useState(4200);
  const [appreciationRate, setAppreciationRate] = useState(12);
  const [holdingYears, setHoldingYears] = useState(5);
  const whatsappNumber = '918431909508';

  const initialInvestment = plotSqft * pricePerSqft;
  const futureValue = initialInvestment * Math.pow(1 + appreciationRate / 100, holdingYears);
  const totalProfit = futureValue - initialInvestment;
  const percentageGain = ((totalProfit / initialInvestment) * 100).toFixed(1);

  const formatLakhs = (val) => {
    const inLakhs = val / 100000;
    return `₹${inLakhs.toFixed(2)} lakh`;
  };

  const sliderClass = 'mt-2 h-1 w-full cursor-pointer appearance-none bg-[#FBFBFD]/14 accent-[#0B192C]';

  return (
    <div className="grid gap-0 border border-[var(--rule-strong)] bg-[#11233D] lg:grid-cols-12">
      {/* Controls */}
      <div className="p-6 sm:p-10 lg:col-span-7">
        <h3 className="font-heading text-2xl leading-tight text-[#FBFBFD] sm:text-3xl">
          Forecast land appreciation
        </h3>
        <p className="measure mt-3 text-[15px] leading-relaxed text-[#B0B8C4]">
          Set your plot size, rate and holding period. The projection assumes a constant annual
          growth rate you choose; it is arithmetic, not a forecast of what this land will sell for.
        </p>

        <div className="mt-8 space-y-7">
          <div>
            <div className="flex items-baseline justify-between gap-4">
              <label htmlFor="roi-plot-sqft" className="text-[13px] font-semibold text-[#FBFBFD]">
                Plot area
              </label>
              <span className="font-heading text-lg text-[#FBFBFD] figures">{plotSqft} sq.ft</span>
            </div>
            <input
              id="roi-plot-sqft"
              type="range"
              min="1200"
              max="4000"
              step="300"
              value={plotSqft}
              onChange={(e) => setPlotSqft(Number(e.target.value))}
              className={sliderClass}
            />
            <div className="mt-2 flex justify-between text-[13px] uppercase tracking-[0.06em] text-[#B0B8C4]">
              <span>30×40</span>
              <span>30×50</span>
              <span>40×60</span>
              <span>40×70</span>
            </div>
          </div>

          <div>
            <div className="flex items-baseline justify-between gap-4">
              <label htmlFor="roi-price-per-sqft" className="text-[13px] font-semibold text-[#FBFBFD]">
                Price per sq ft
              </label>
              <span className="font-heading text-lg text-[#FBFBFD] figures">₹{pricePerSqft.toLocaleString('en-IN')}</span>
            </div>
            <input
              id="roi-price-per-sqft"
              type="range"
              min="3200"
              max="6500"
              step="100"
              value={pricePerSqft}
              onChange={(e) => setPricePerSqft(Number(e.target.value))}
              className={sliderClass}
            />
          </div>

          <div>
            <div className="flex items-baseline justify-between gap-4">
              <label htmlFor="roi-appreciation-rate" className="text-[13px] font-semibold text-[#FBFBFD]">
                Assumed annual growth
              </label>
              <span className="font-heading text-lg text-[#FBFBFD] figures">{appreciationRate}%</span>
            </div>
            <input
              id="roi-appreciation-rate"
              type="range"
              min="6"
              max="20"
              step="0.5"
              value={appreciationRate}
              onChange={(e) => setAppreciationRate(Number(e.target.value))}
              className={sliderClass}
            />
            <p className="mt-2 text-[13px] leading-relaxed text-[#B0B8C4]">
              Corridor commentary for Bengaluru has quoted 15–20% in strong years. A conservative
              model uses less, and no rate is guaranteed.
            </p>
          </div>

          <fieldset>
            <legend className="text-[13px] font-semibold text-[#FBFBFD]">Holding period</legend>
            <div className="mt-2 grid grid-cols-3 border border-[#D4AF37]/20">
              {[3, 5, 7].map((yrs) => (
                <button
                  key={yrs}
                  type="button"
                  onClick={() => setHoldingYears(yrs)}
                  aria-pressed={holdingYears === yrs}
                  className={`min-h-11 border-r border-[#D4AF37]/20 text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors last:border-r-0 ${
                    holdingYears === yrs
                      ? 'bg-[#0B192C] text-[#E9C349]'
                      : 'bg-[#11233D] text-[#B0B8C4] hover:bg-[#0B192C]'
                  }`}
                >
                  {yrs} years
                </button>
              ))}
            </div>
          </fieldset>
        </div>
      </div>

      {/* Output */}
      <div className="border-t border-[var(--rule-strong)] bg-[#0B192C] p-6 text-white sm:p-10 lg:col-span-5 lg:border-l lg:border-t-0">
        <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#E9C349]">
          Modelled outcome
        </p>

        <dl className="mt-6 space-y-5">
          <div className="flex items-baseline justify-between gap-4 border-b border-white/15 pb-4">
            <dt className="text-[13px] text-white/60">Purchase cost</dt>
            <dd className="font-heading text-xl text-white figures">{formatLakhs(initialInvestment)}</dd>
          </div>
          <div className="flex items-baseline justify-between gap-4 border-b border-white/15 pb-4">
            <dt className="text-[13px] text-white/60">After {holdingYears} years</dt>
            <dd className="font-heading text-3xl text-[#E9C349] figures">{formatLakhs(futureValue)}</dd>
          </div>
          <div className="flex items-baseline justify-between gap-4">
            <dt className="text-[13px] text-white/60">Modelled gain</dt>
            <dd className="font-heading text-xl text-white figures">
              +{formatLakhs(totalProfit)}
              <span className="ml-2 align-middle text-[13px] font-sans text-[#E9C349]">({percentageGain}%)</span>
            </dd>
          </div>
        </dl>

        <p className="mt-6 border-t border-white/15 pt-4 text-[13px] leading-relaxed text-white/55">
          Based on {plotSqft} sq ft at ₹{pricePerSqft.toLocaleString('en-IN')}/sq ft, compounding at{' '}
          {appreciationRate}% for {holdingYears} years. Indicative only — excludes stamp duty,
          registration, taxes and holding costs, and assumes uninterrupted growth.
        </p>

        <div className="mt-7 flex flex-col gap-2">
          <button type="button" onClick={() => openSiteVisitModal()} className="btn-gold w-full py-3.5">
            Book a visit for these plots
          </button>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Setty Relators. I used the appreciation model on your site and would like the current price sheet.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-quiet btn-quiet--on-ink w-full py-3.5"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Ask for the price sheet
          </a>
        </div>
      </div>
    </div>
  );
}
