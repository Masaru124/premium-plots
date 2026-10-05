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
    <div className="bg-white border border-[#0B1F3A]/10 rounded-2xl p-6 sm:p-8 shadow-lg space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#0B1F3A]/10 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1F3A]/8 border border-[#0B1F3A]/15 text-[#0B1F3A] text-xs font-semibold mb-2">
            <Compass className="w-3.5 h-3.5 text-[#C8A34D]" />
            Interactive Bengaluru Investment Map
          </div>
          <h3 className="text-2xl font-bold text-[#0B1F3A] tracking-tight font-heading">
            Explore High-Appreciation Plot Corridors
          </h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {hotspots.map((spot) => (
            <button
              key={spot.id}
              onClick={() => setSelectedHotspot(spot.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all border cursor-pointer ${
                selectedHotspot === spot.id
                  ? 'bg-[#0B1F3A] text-[#C8A34D] border-[#C8A34D]/50 shadow-md font-bold'
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
        <div className="lg:col-span-7 relative bg-gradient-to-br from-[#0B1F3A] to-[#142E54] rounded-2xl border border-[#C8A34D]/30 p-6 min-h-[380px] flex items-center justify-center overflow-hidden cad-grid">
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
                  className={`w-9 h-9 rounded-full flex items-center justify-center border shadow-lg ${
                    selectedHotspot === spot.id
                      ? 'bg-[#C8A34D] text-[#0B1F3A] border-[#C8A34D] shadow-[#C8A34D]/40 font-bold'
                      : 'bg-white/20 text-white border-white/30'
                  }`}
                >
                  <MapPin className="w-5 h-5" />
                </div>
              </div>
              <div className="absolute top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-white text-[#0B1F3A] text-[11px] font-bold px-2.5 py-1 rounded-md shadow-lg border border-[#0B1F3A]/10">
                {spot.name.split(' ')[0]}
              </div>
            </button>
          ))}

          {/* Airport Marker */}
          <div className="absolute top-[12%] right-[25%] bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded-md border border-[#C8A34D]/40 text-[10px] text-[#C8A34D] font-bold flex items-center gap-1">
            ✈ Kempegowda Airport
          </div>
        </div>

        {/* Selected Corridor Info Card */}
        <div className="lg:col-span-5 space-y-5 bg-[#F8F8F5] p-6 rounded-2xl border border-[#0B1F3A]/10">
          <div>
            <span className="text-xs text-[#C8A34D] font-bold tracking-wider uppercase font-heading">Corridor Spotlight</span>
            <h4 className="text-xl font-bold text-[#0B1F3A] mt-1 font-heading">{current.name}</h4>
            <p className="text-xs text-[#555555] mt-1">{current.subtitle}</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white p-3.5 rounded-xl border border-[#0B1F3A]/10">
              <div className="text-[11px] text-[#555555]">Price Trend</div>
              <div className="text-sm font-bold text-[#0B1F3A] mt-0.5">{current.priceSqft}</div>
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-[#0B1F3A]/10">
              <div className="text-[11px] text-[#555555]">Est. YoY Appreciation</div>
              <div className="text-sm font-bold text-[#C8A34D] mt-0.5">{current.growth}</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-semibold text-[#0B1F3A] uppercase tracking-wider font-heading">Key Growth Catalysts</div>
            <ul className="space-y-1.5 text-xs text-[#555555]">
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
