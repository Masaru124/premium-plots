'use client';

import React, { useState } from 'react';
import { MapPin, Navigation, Compass, ExternalLink, Sparkles, TrendingUp, Building } from 'lucide-react';
import { BENGALURU_CORRIDORS } from '../data/plotsData';

export default function InteractiveMap({ onSelectCorridor }) {
  const [selectedHotspot, setSelectedHotspot] = useState('devanahalli');

  const hotspots = [
    {
      id: 'devanahalli',
      name: 'Devanahalli Airport Corridor',
      subtitle: 'North Bengaluru #1 Appreciation Zone',
      coordinates: { x: '68%', y: '22%' },
      priceSqft: '₹4,800 - ₹5,400 / sq.ft',
      growth: '18.4% YoY',
      highlights: ['12 mins to KIADB Aerospace Park', 'Satellite Town Ring Road (STRR)', 'Foxconn iPhone Assembly Plant']
    },
    {
      id: 'yelahanka',
      name: 'Yelahanka - Bagalur Belt',
      subtitle: 'Premium Institutional & Aerospace Hub',
      coordinates: { x: '52%', y: '35%' },
      priceSqft: '₹5,900 - ₹6,500 / sq.ft',
      growth: '14.8% YoY',
      highlights: ['Adjacent to Boeing Tech Center', 'Galleria Mall & Metro Station', 'Top International Schools']
    },
    {
      id: 'whitefield',
      name: 'Whitefield - Hoskote Corridor',
      subtitle: 'East Bengaluru Industrial Hub',
      coordinates: { x: '82%', y: '50%' },
      priceSqft: '₹3,450 - ₹3,900 / sq.ft',
      growth: '15.9% YoY',
      highlights: ['Chennai Expressway Interchange', '200+ Auto & Tech Industries', 'Metro Purple Line Terminal']
    },
    {
      id: 'sarjapur',
      name: 'Sarjapur - Attibele Tech Belt',
      subtitle: 'East Bengaluru IT Corridor',
      coordinates: { x: '75%', y: '78%' },
      priceSqft: '₹3,950 - ₹4,400 / sq.ft',
      growth: '16.2% YoY',
      highlights: ['15 mins to Wipro Campus & ORR', 'Upcoming Sarjapur Metro Line', 'High Rental Villa Demand']
    }
  ];

  const current = hotspots.find((h) => h.id === selectedHotspot) || hotspots[0];

  return (
    <div className="space-y-6 rounded-lg border border-[#0B1F3A]/10 bg-white p-6 sm:p-8">
      <div className="flex flex-col items-start justify-between gap-4 pb-2 sm:flex-row sm:items-center">
        <div className="space-y-1">
          <h3 className="font-heading text-2xl font-bold tracking-tight text-[#0B1F3A]">
            Explore the corridors
          </h3>
          <p className="text-base text-[#555555]">Select an area to see its price trend and growth drivers.</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {hotspots.map((spot) => (
            <button
              key={spot.id}
              onClick={() => setSelectedHotspot(spot.id)}
              className={`rounded-lg border px-3.5 py-2 text-sm font-semibold transition-colors cursor-pointer ${
                selectedHotspot === spot.id
                  ? 'bg-[#0B1F3A] text-[#C8A34D] border-[#C8A34D]/50 font-bold'
                  : 'bg-[#F8F8F5] text-[#555555] border-[#0B1F3A]/10 hover:bg-white'
              }`}
            >
              {spot.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Visual Map Canvas */}
        <div className="relative flex min-h-[380px] items-center justify-center overflow-hidden rounded-lg bg-[#0B1F3A] p-6 lg:col-span-7 cad-grid">
          {/* Key Highways SVG */}
          <svg className="absolute inset-0 w-full h-full stroke-[#C8A34D]/20" strokeWidth="2">
            <path d="M 100 280 Q 250 200 380 260 T 480 320" fill="none" strokeDasharray="4,4" />
            <path d="M 250 350 L 320 80" fill="none" className="stroke-[#C8A34D]/40" strokeWidth="3" />
          </svg>

          {/* Interactive Pins */}
          {hotspots.map((spot) => (
            <button
              key={spot.id}
              onClick={() => setSelectedHotspot(spot.id)}
              style={{ left: spot.coordinates.x, top: spot.coordinates.y }}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 group transition-all z-20 cursor-pointer ${
                selectedHotspot === spot.id ? 'scale-125 z-30' : 'hover:scale-110'
              }`}
            >
              <div className="relative flex items-center justify-center">
                <span
                  className={`absolute w-8 h-8 rounded-full animate-ping ${
                    selectedHotspot === spot.id ? 'bg-[#C8A34D]/40' : 'bg-white/15'
                  }`}
                />
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center border ${
                    selectedHotspot === spot.id
                      ? 'bg-[#C8A34D] text-[#0B1F3A] border-[#C8A34D] font-bold'
                      : 'bg-white/20 text-white border-white/30'
                  }`}
                >
                  <MapPin className="w-5 h-5" />
                </div>
              </div>
              <div className="absolute left-1/2 top-10 -translate-x-1/2 whitespace-nowrap rounded bg-white px-2.5 py-1 text-[13px] font-semibold text-[#0B1F3A]">
                {spot.name.split(' ')[0]}
              </div>
            </button>
          ))}

          {/* Airport Marker */}
          <div className="absolute right-[25%] top-[12%] rounded bg-[#C8A34D] px-2.5 py-1 text-xs font-semibold text-[#0B1F3A]">
            Kempegowda Airport
          </div>
        </div>

        {/* Selected Corridor Info Card */}
        <div className="space-y-5 rounded-lg bg-[#F8F8F5] p-6 lg:col-span-5">
          <div>
            <h4 className="font-heading text-xl font-bold text-[#0B1F3A]">{current.name}</h4>
            <p className="mt-1 text-sm text-[#555555]">{current.subtitle}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-[#555555]">Price trend</div>
              <div className="mt-0.5 text-base font-bold tabular-nums text-[#0B1F3A]">{current.priceSqft}</div>
            </div>
            <div>
              <div className="text-sm text-[#555555]">Appreciation</div>
              <div className="mt-0.5 text-base font-bold tabular-nums text-[#7A5C10]">{current.growth}</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="font-heading text-base font-semibold text-[#0B1F3A]">Growth catalysts</div>
            <ul className="space-y-1.5 text-sm text-[#555555]">
              {current.highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8A34D] shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
