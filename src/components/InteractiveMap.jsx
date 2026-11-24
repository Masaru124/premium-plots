'use client';

import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

export default function InteractiveMap() {
  const [selectedHotspot, setSelectedHotspot] = useState('devanahalli');

  const hotspots = [
    {
      id: 'devanahalli',
      name: 'Devanahalli Airport Corridor',
      short: 'Devanahalli',
      subtitle: 'North Bengaluru airport corridor',
      coordinates: { x: '68%', y: '22%' },
      priceSqft: '₹4,800 – ₹5,400 / sq.ft',
      growth: '18.4%',
      highlights: ['KIADB Aerospace Park', 'Satellite Town Ring Road', 'Foxconn assembly plant']
    },
    {
      id: 'yelahanka',
      name: 'Yelahanka–Bagalur Belt',
      short: 'Yelahanka',
      subtitle: 'Institutional and aerospace hub',
      coordinates: { x: '52%', y: '35%' },
      priceSqft: '₹5,900 – ₹6,500 / sq.ft',
      growth: '14.8%',
      highlights: ['Boeing technology centre', 'Galleria and metro station', 'International schools']
    },
    {
      id: 'whitefield',
      name: 'Whitefield–Hoskote Corridor',
      short: 'Whitefield',
      subtitle: 'East Bengaluru industrial hub',
      coordinates: { x: '82%', y: '50%' },
      priceSqft: '₹3,450 – ₹3,900 / sq.ft',
      growth: '15.9%',
      highlights: ['Chennai expressway interchange', 'Auto and tech industries', 'Metro Purple Line']
    },
    {
      id: 'sarjapur',
      name: 'Sarjapur–Attibele Tech Belt',
      short: 'Sarjapur',
      subtitle: 'East Bengaluru IT corridor',
      coordinates: { x: '75%', y: '78%' },
      priceSqft: '₹3,950 – ₹4,400 / sq.ft',
      growth: '16.2%',
      highlights: ['Wipro campus and ORR', 'Upcoming Sarjapur metro', 'Rental villa demand']
    }
  ];

  const current = hotspots.find((h) => h.id === selectedHotspot) || hotspots[0];

  return (
    <div className="bg-[#11233D]">
      <div className="flex flex-col justify-between gap-5 p-6 sm:flex-row sm:items-end sm:p-8">
        <div>
          <h3 className="font-heading text-2xl leading-tight text-[#FBFBFD]">
            The belts we follow
          </h3>
          <p className="mt-2 max-w-[52ch] text-[14px] leading-relaxed text-[#B0B8C4]">
            Price bands and growth figures are corridor-level commentary gathered for this desk.
            Treat them as indicative, not as a valuation of any specific plot.
          </p>
        </div>

        <div className="flex flex-wrap gap-0 bg-[#0B192C]" role="group" aria-label="Choose a corridor">
          {hotspots.map((spot) => (
            <button
              key={spot.id}
              type="button"
              onClick={() => setSelectedHotspot(spot.id)}
              aria-pressed={selectedHotspot === spot.id}
              className={`min-h-11 px-3.5 text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors ${
                selectedHotspot === spot.id
                  ? 'bg-[#D4AF37] text-[#0B192C]'
                  : 'bg-[#0B192C] text-[#B0B8C4] hover:text-[#FBFBFD]'
              }`}
            >
              {spot.short}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-12">
        {/* Map plate */}
        <div className="relative min-h-[360px] overflow-hidden bg-[#0B192C] lg:col-span-7">
          <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
            <path d="M 60 300 Q 240 210 380 268 T 520 330" fill="none" stroke="rgba(200,163,77,0.22)" strokeWidth="2" strokeDasharray="5 6" />
            <path d="M 250 360 L 330 70" fill="none" stroke="rgba(200,163,77,0.35)" strokeWidth="2" />
          </svg>

          <div className="absolute right-[20%] top-[10%] border border-[#D4AF37]/60 px-2 py-1 text-[13px] uppercase tracking-[0.12em] text-[#E9C349]">
            Kempegowda Airport
          </div>

          {hotspots.map((spot) => {
            const selected = selectedHotspot === spot.id;
            return (
              <button
                key={spot.id}
                type="button"
                onClick={() => setSelectedHotspot(spot.id)}
                aria-pressed={selected}
                aria-label={`${spot.name} — ${spot.priceSqft}, ${spot.growth} indicative annual growth`}
                style={{ left: spot.coordinates.x, top: spot.coordinates.y }}
                className="absolute z-20 flex min-h-11 min-w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center p-1"
              >
                <span
                  className={`flex h-8 w-8 items-center justify-center border transition-colors ${
                    selected
                      ? 'border-[#D4AF37] bg-[#D4AF37] text-[#0B192C]'
                      : 'border-white/40 bg-[#0B192C] text-white/80 hover:border-[#D4AF37] hover:text-[#E9C349]'
                  }`}
                >
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </span>
                <span
                  className={`absolute top-11 whitespace-nowrap border px-2 py-0.5 text-[13px] font-semibold uppercase tracking-[0.1em] ${
                    selected
                      ? 'border-[#D4AF37] bg-[#D4AF37] text-[#0B192C]'
                      : 'border-white/25 bg-[#0B192C] text-white/75'
                  }`}
                >
                  {spot.short}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected corridor */}
        <div className="p-6 sm:p-8 lg:col-span-5">
          <h4 className="font-heading text-xl leading-snug text-[#FBFBFD]">{current.name}</h4>
          <p className="mt-1 text-[13px] text-[#B0B8C4]">{current.subtitle}</p>

          <dl className="mt-6 space-y-4">
            <div className="flex items-baseline justify-between gap-4">
              <dt className="label">Price band</dt>
              <dd className="text-right text-[14px] font-semibold text-[#FBFBFD] figures">{current.priceSqft}</dd>
            </div>
            <div className="flex items-baseline justify-between gap-4">
              <dt className="label">Growth quoted</dt>
              <dd className="text-right text-[14px] font-semibold text-[#D4AF37] figures">
                {current.growth}
                <span className="ml-1 text-[13px] uppercase tracking-[0.1em] text-[#B0B8C4]">indicative</span>
              </dd>
            </div>
          </dl>

          <div className="mt-6">
            <p className="label">Growth drivers</p>
            <ul className="mt-3 space-y-2">
              {current.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-[14px] leading-relaxed text-[#C5C6CD]">
                  <span className="mt-2 h-1 w-1 shrink-0 bg-[#A8871F]" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 text-[15px] leading-relaxed text-[#B0B8C4]">
            Ask the desk for the current price sheet and the approval record for any corridor you
            are considering.
          </p>
        </div>
      </div>
    </div>
  );
}
