'use client';

import React, { useState } from 'react';
import {
  Search, MapPin, ShieldCheck, TrendingUp, Calendar, ArrowRight, Star, Award,
  CheckCircle2, ChevronRight, PhoneCall, Sparkles, MessageCircle, Navigation,
  Compass, Flame, Shield, Building2, Layers, Eye, Grid, ExternalLink, Download, Phone
} from 'lucide-react';
import { usePlots } from '../context/PlotsContext';
import ROICalculator from '../components/ROICalculator';
import InteractiveMap from '../components/InteractiveMap';

export default function HomePage({ setActivePage, setSelectedProjectId }) {
  const { projects, reviews, blogs, openSiteVisitModal } = usePlots();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCorridor, setSelectedCorridor] = useState('all');

  const whatsappNumber = '917676077879';
  const pgrPhone = '+91 9886161155';
  const googleMapsUrl = 'https://maps.app.goo.gl/nd1REcJDzUBVkFAg9';

  // Sample Interactive Grid Selector
  const samplePlots = [
    { no: 'PGR-101', sqft: 1500, dim: '1500 sq.ft (30x50)', status: 'available', facing: 'East Facing Vastu', price: '₹52.5 L' },
    { no: 'PGR-102', sqft: 2400, dim: '2400 sq.ft (40x60)', status: 'available', facing: 'North Facing Vastu', price: '₹84.0 L' },
    { no: 'PGR-103', sqft: 2800, dim: '2800 sq.ft (40x70)', status: 'reserved', facing: 'East Facing Vastu', price: '₹98.0 L' },
    { no: 'PGR-104', sqft: 1500, dim: '1500 sq.ft (30x50)', status: 'available', facing: 'North Facing Vastu', price: '₹52.5 L' },
    { no: 'PGR-105', sqft: 3200, dim: 'ODD Custom Site', status: 'available', facing: 'Corner Vastu', price: '₹1.12 Cr' },
    { no: 'PGR-106', sqft: 2400, dim: '2400 sq.ft (40x60)', status: 'sold', facing: 'East Facing Vastu', price: '₹84.0 L' },
  ];
  const [activePlot, setActivePlot] = useState(samplePlots[0]);
  const [viewModes, setViewModes] = useState({});

  const toggleViewMode = (projId) => {
    setViewModes(prev => ({
      ...prev,
      [projId]: prev[projId] === 'blueprint' ? 'photo' : 'blueprint'
    }));
  };

  const filteredProjects = projects.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCorridor = selectedCorridor === 'all' || p.corridorId === selectedCorridor;
    return matchesSearch && matchesCorridor;
  });

  return (
    <div className="space-y-0 pb-0 bg-[#f7f6f2]">
      
      {/* 1. ARCHITECTURAL HERO SECTION */}
      <section className="relative pt-10 sm:pt-16 pb-28 bg-[#060e1a] text-white overflow-hidden blueprint-grid-dark border-b border-[#d4af37]/20">
        
        {/* Glow ambient background */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#d4af37]/10 rounded-full blur-[180px] pointer-events-none -z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
          
          {/* Top Architectural Ticker */}
          <div className="flex flex-wrap justify-between items-center gap-4 text-xs font-mono-code border-b border-white/10 pb-4 text-white/70">
            <div className="flex items-center gap-3">
              <span className="text-[#d4af37] font-bold">PGR BUILDTECH PVT LTD</span>
              <span>•</span>
              <span className="text-white/90">DEVANAHALLI STRR HIGHWAY</span>
              <span>•</span>
              <span className="text-[#d4af37]">26 ACRES • 254 PLOTS</span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d4af37] hover:underline flex items-center gap-1 font-bold"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Google Maps Location</span>
              </a>
              <span>|</span>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi PGR Buildtech! I want details on open plot projects.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline flex items-center gap-1 font-bold"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-emerald-400 text-black" />
                <span>WhatsApp: +91 76760 77879</span>
              </a>
            </div>
          </div>

          {/* Hero Main Grid Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Title & Project Overview */}
            <div className="lg:col-span-7 space-y-7">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#d4af37] text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-4 h-4 text-[#d4af37]" />
                Featured Project Presentation • PGR Buildtech
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] font-heading">
                  NISARGA <span className="gold-gradient-text">BOULEVARD</span>
                </h1>
                <p className="text-lg sm:text-xl text-[#d4af37] font-semibold tracking-wide font-heading">
                  DEVANAHALLI • NORTH BENGALURU ON STRR HIGHWAY
                </p>
              </div>

              <p className="text-base sm:text-lg text-white/80 font-normal leading-relaxed max-w-2xl">
                A thoughtfully planned <strong>26-Acre premium residential development</strong> by <strong>PGR Buildtech Pvt Ltd</strong>, offering approx. <strong>254 residential plots</strong> (1500 Sq. Ft. onwards) with optimal space utilization & signature PGR quality.
              </p>

              {/* Fast Search & Corridor Filter */}
              <div className="bg-white/10 backdrop-blur-xl p-4 sm:p-5 rounded-2xl border border-white/20 shadow-2xl space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                  <div className="sm:col-span-6 relative">
                    <Search className="w-4 h-4 text-white/50 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      placeholder="Search Devanahalli, STRR, Nisarga..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder-white/50 focus:outline-none focus:border-[#d4af37] font-medium"
                    />
                  </div>

                  <div className="sm:col-span-3">
                    <select
                      value={selectedCorridor}
                      onChange={(e) => setSelectedCorridor(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-3 text-xs font-bold text-white focus:outline-none focus:border-[#d4af37] cursor-pointer"
                    >
                      <option value="all" className="bg-[#060e1a]">All Growth Corridors</option>
                      <option value="devanahalli" className="bg-[#060e1a]">North (Airport Hub / STRR)</option>
                      <option value="sarjapur" className="bg-[#060e1a]">East (Sarjapur SEZ)</option>
                      <option value="yelahanka" className="bg-[#060e1a]">North (Yelahanka)</option>
                      <option value="whitefield" className="bg-[#060e1a]">East (Whitefield)</option>
                    </select>
                  </div>

                  <div className="sm:col-span-3">
                    <button
                      onClick={() => setActivePage('projects')}
                      className="btn-gold w-full py-3 text-xs uppercase font-extrabold tracking-wider"
                    >
                      Explore Plots
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-1">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi PGR Buildtech! I want to book a site visit for Nisarga Boulevard in Devanahalli.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold py-4 px-7 text-xs uppercase font-extrabold shadow-2xl flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-[#d4af37]" />
                  Book Site Visit via WhatsApp (+91 76760 77879)
                </a>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi PGR Buildtech! Please send me the brochure packet and price list for Nisarga Boulevard.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white text-xs font-bold hover:bg-white/20 transition-all flex items-center gap-2 backdrop-blur-md"
                >
                  <Download className="w-4 h-4 text-[#d4af37]" />
                  Request Digital Brochure & Plan
                </a>
              </div>

              {/* Developer Contact Footer */}
              <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-white/60 gap-4">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#d4af37]" />
                  <span>Developer: <strong>PGR Buildtech Pvt Ltd</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#d4af37]" />
                  <a href={`tel:${pgrPhone.replace(/\s+/g, '')}`} className="text-white font-bold hover:text-[#d4af37]">
                    Tel: {pgrPhone}
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Entrance Media Preview & Interactive Plot Selector */}
            <div className="lg:col-span-5 space-y-4">
              
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-black">
                <img
                  src="/images/nisarga-boulevard.jpg"
                  alt="Nisarga Boulevard Entrance Gate by PGR Buildtech"
                  className="w-full h-[360px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060e1a] via-transparent to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 bg-black/80 backdrop-blur-md text-[#d4af37] text-[11px] font-bold px-3 py-1 rounded-full border border-[#d4af37]/40 shadow-lg">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                    PGR Signature Entrance Quality
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div>
                    <span className="text-[11px] text-[#d4af37] font-bold uppercase tracking-wider block">
                      📍 Devanahalli STRR Highway
                    </span>
                    <h3 className="text-xl font-extrabold text-white font-heading">Nisarga Boulevard Entrance</h3>
                  </div>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#d4af37] text-[#060e1a] hover:scale-105 transition-transform"
                    title="Open in Google Maps"
                  >
                    <Navigation className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Sample Plot Interactive Quick Selector */}
              <div className="bg-white/10 backdrop-blur-xl p-5 rounded-2xl border border-white/15 space-y-3">
                <div className="flex justify-between items-center text-xs border-b border-white/10 pb-2">
                  <span className="text-[#d4af37] font-mono-code font-bold uppercase">AVAILABLE CONFIGURATIONS MATRIX</span>
                  <span className="text-white/60">254 Total Plots</span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {samplePlots.map((pt) => (
                    <button
                      key={pt.no}
                      onClick={() => setActivePlot(pt)}
                      className={`p-2.5 rounded-xl border text-center text-xs transition-all ${
                        activePlot.no === pt.no
                          ? 'bg-[#d4af37] text-[#060e1a] font-extrabold border-[#d4af37]'
                          : 'bg-white/10 text-white border-white/15 hover:bg-white/20'
                      }`}
                    >
                      <div className="font-bold text-[11px]">{pt.no}</div>
                      <div className="text-[10px] opacity-80">{pt.dim.split(' ')[0]}</div>
                    </button>
                  ))}
                </div>

                <div className="bg-black/40 p-3 rounded-xl border border-white/10 flex justify-between items-center text-xs">
                  <div>
                    <div className="text-white/60 text-[10px]">SELECTED PLOT SPEC</div>
                    <div className="font-bold text-white">{activePlot.no} ({activePlot.dim})</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#d4af37] font-bold text-sm">{activePlot.price}</div>
                    <div className="text-[10px] text-emerald-400 font-semibold">{activePlot.facing}</div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 2. VERIFIED PLOTTED DEVELOPMENTS LIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#060e1a]/8 border border-[#060e1a]/15 text-[#060e1a] text-xs font-bold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5 text-[#d4af37]" />
              Verified Open Plot Listings
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#060e1a] tracking-tight font-heading">
              Featured Verified Plotted Developments
            </h2>
            <div className="divider-gold mt-4" />
            <p className="text-[#6b7280] text-sm mt-3">
              Handpicked gated layouts with wide asphalt roads, underground utilities & high investment yield.
            </p>
          </div>

          <button
            onClick={() => setActivePage('projects')}
            className="text-[#c9a033] hover:text-[#060e1a] text-sm font-bold flex items-center gap-1.5 transition-colors group"
          >
            <span>View All Projects ({filteredProjects.length})</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => {
            const isBlueprint = viewModes[proj.id] === 'blueprint';

            return (
              <div
                key={proj.id}
                className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Card Media Header with Photo vs Blueprint Toggle */}
                  <div className="relative h-64 overflow-hidden bg-[#060e1a]">
                    {isBlueprint ? (
                      /* Architectural Blueprint Mode */
                      <div className="w-full h-full p-6 blueprint-grid-dark flex flex-col justify-between text-white">
                        <div className="flex justify-between items-center text-[10px] font-mono-code text-[#d4af37]">
                          <span>LAYOUT MAP MATRIX</span>
                          <span>{proj.totalPlots} PARCELS</span>
                        </div>
                        <div className="text-center space-y-1">
                          <Grid className="w-10 h-10 text-[#d4af37] mx-auto opacity-80" />
                          <div className="text-xs font-bold">{proj.title}</div>
                          <div className="text-[11px] text-white/70">{proj.approvalType}</div>
                        </div>
                        <div className="text-[10px] text-center text-emerald-400 font-bold">
                          ● {proj.availablePlots} PLOTS AVAILABLE TODAY
                        </div>
                      </div>
                    ) : (
                      /* Real On-Site Photography Mode */
                      <>
                        <img
                          src={proj.heroImage}
                          alt={proj.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#060e1a] via-[#060e1a]/20 to-transparent" />
                      </>
                    )}

                    {/* Top RERA Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-[#060e1a] text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                        {proj.approvalType.split('&')[0]}
                      </span>
                    </div>

                    {/* Toggle Button (Photo / Blueprint) */}
                    <button
                      onClick={() => toggleViewMode(proj.id)}
                      className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black/80 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg backdrop-blur-md flex items-center gap-1 border border-white/20 transition-all"
                    >
                      <Eye className="w-3 h-3 text-[#d4af37]" />
                      {isBlueprint ? 'Photo View' : 'Blueprint View'}
                    </button>

                    {/* Title Overlay */}
                    {!isBlueprint && (
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="text-[11px] text-[#d4af37] font-bold uppercase tracking-wider block">
                          📍 {proj.location}
                        </span>
                        <h3 className="text-xl font-extrabold text-white font-heading line-clamp-1">{proj.title}</h3>
                      </div>
                    )}
                  </div>

                  {/* Body Specs */}
                  <div className="p-6 space-y-5">
                    <p className="text-xs text-[#3f4756] leading-relaxed line-clamp-2">
                      {proj.tagline}
                    </p>

                    <div className="grid grid-cols-2 gap-3 text-xs bg-[#efeee8] p-3.5 rounded-xl border border-[#e6e8ee]">
                      <div>
                        <span className="text-[#6b7280] block text-[10px] font-semibold uppercase">Starting Price</span>
                        <span className="text-[#c9a033] font-black text-lg">{proj.formattedStartPrice}</span>
                      </div>
                      <div>
                        <span className="text-[#6b7280] block text-[10px] font-semibold uppercase">Available Units</span>
                        <span className="text-[#060e1a] font-black text-lg">{proj.availablePlots} Plots Left</span>
                      </div>
                    </div>

                    <div className="space-y-2 text-xs text-[#3f4756]">
                      {(proj.highlights || []).slice(0, 2).map((h, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#060e1a] shrink-0" />
                          <span className="truncate">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-6 pt-0 grid grid-cols-2 gap-3">
                  <button
                    onClick={() => {
                      setSelectedProjectId(proj.id);
                      setActivePage('project-details');
                    }}
                    className="py-3 rounded-xl bg-[#efeee8] text-[#060e1a] text-xs font-bold hover:bg-[#e6e8ee] transition-colors text-center border border-[#e6e8ee]"
                  >
                    View Layout Map
                  </button>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      `Hi! I want to book a site visit for ${proj.title} in ${proj.location}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold py-3 text-xs uppercase font-extrabold text-center flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    Book Now
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. INTERACTIVE BENGALURU GROWTH MAP */}
      <section className="bg-[#efeee8] py-24 border-y border-[#e6e8ee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InteractiveMap onSelectCorridor={() => setActivePage('projects')} />
        </div>
      </section>

      {/* 4. ROI CALCULATOR */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ROICalculator />
        </div>
      </section>

      {/* 5. VERIFIED BUYER REVIEWS */}
      <section className="bg-[#efeee8] py-24 border-y border-[#e6e8ee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#c9a033] text-xs font-bold uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 fill-[#d4af37] text-[#d4af37]" />
              Verified Investor Feedback
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#060e1a] tracking-tight font-heading">
              What Plot Investors Say
            </h2>
            <div className="divider-gold mx-auto mt-3" />
            <p className="text-[#6b7280] text-sm mt-2">
              Authentic reviews from tech leads, doctors, and NRI land investors in Bengaluru.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {reviews.map((rev) => (
              <div key={rev.id} className="glass-card p-7 rounded-2xl flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex gap-1 text-[#d4af37]">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#d4af37]" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-[#3f4756] italic leading-relaxed">
                    "{rev.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-5 border-t border-[#e6e8ee]">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#d4af37]/40 shadow-sm"
                  />
                  <div>
                    <div className="text-sm font-bold text-[#060e1a] font-heading">{rev.name}</div>
                    <div className="text-xs text-[#060e1a] font-semibold">{rev.profession}</div>
                    <div className="text-[10px] text-[#6b7280]">{rev.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL VIP SITE VISIT BANNER */}
      <section className="section-navy py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#d4af37]/40 text-[#d4af37] text-xs font-bold uppercase tracking-wider shadow-lg">
            <Sparkles className="w-4 h-4 text-[#d4af37]" />
            Direct WhatsApp Hotline: +91 76760 77879
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight max-w-3xl mx-auto font-heading leading-tight">
            Ready to Inspect Your Future Plot in Bengaluru?
          </h2>

          <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto font-medium">
            Book a private site visit today with complimentary doorstep AC cab pickup, plot demarcation inspection, and legal document verification packet.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                'Hi! I want to book a VIP site visit for open plot projects in Bengaluru.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold py-4 px-8 text-xs uppercase tracking-wider font-extrabold shadow-2xl flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5 fill-white text-[#d4af37]" />
              Book Now via WhatsApp (+91 76760 77879)
            </a>
            <a
              href={`tel:${pgrPhone.replace(/\s+/g, '')}`}
              className="px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white text-xs font-bold hover:bg-white/20 transition-all flex items-center gap-2 backdrop-blur-md"
            >
              <Phone className="w-5 h-5 text-[#d4af37]" />
              Call PGR Buildtech: {pgrPhone}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
