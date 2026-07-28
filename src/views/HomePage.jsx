'use client';

import React, { useState } from 'react';
import {
  Search, MapPin, ShieldCheck, TrendingUp, Calendar, ArrowRight, Star, Award,
  CheckCircle2, ChevronRight, PhoneCall, Sparkles, MessageCircle, Navigation,
  Compass, Flame, Shield, Building2, Layers, Eye, Grid, ExternalLink, Download, Phone, Share2, Copy
} from 'lucide-react';
import { usePlots } from '../context/PlotsContext';
import ROICalculator from '../components/ROICalculator';
import InteractiveMap from '../components/InteractiveMap';

export default function HomePage({ setActivePage, setSelectedProjectId }) {
  const { projects, reviews, blogs, openSiteVisitModal, showToast } = usePlots();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCorridor, setSelectedCorridor] = useState('all');

  const whatsappNumber = '918431909508';
  const displayPhone = '+91 84319 09508';
  const googleMapsUrl = 'https://maps.app.goo.gl/nd1REcJDzUBVkFAg9';

  const [viewModes, setViewModes] = useState({});

  const toggleViewMode = (projId) => {
    setViewModes(prev => ({
      ...prev,
      [projId]: prev[projId] === 'blueprint' ? 'photo' : 'blueprint'
    }));
  };

  const handleShareWhatsApp = (title, location) => {
    const text = `Check out this verified plot development on my personal PropSite: *${title}* in ${location}. View masterplan layout & specs. Direct owner WhatsApp: https://wa.me/${whatsappNumber}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  const filteredProjects = projects.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCorridor = selectedCorridor === 'all' || p.corridorId === selectedCorridor;
    return matchesSearch && matchesCorridor;
  });

  return (
    <div className="space-y-0 pb-0 bg-[#f8faf8]">
      
      {/* 1. PROPSITE PERSONAL HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 pb-28 bg-[#0b1f17] text-white overflow-hidden blueprint-grid-dark border-b border-emerald-500/20">
        
        {/* Glow ambient background */}
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[180px] pointer-events-none -z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
          
          {/* Top Ticker */}
          <div className="flex flex-wrap justify-between items-center gap-4 text-xs font-mono-code border-b border-white/10 pb-4 text-white/70">
            <div className="flex items-center gap-3">
              <span className="text-emerald-400 font-bold">PROPSITE PORTFOLIO</span>
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
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi! Direct inquiry from your personal PropSite.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline flex items-center gap-1 font-bold"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-emerald-400 text-black" />
                <span>WhatsApp: {displayPhone}</span>
              </a>
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              ⚡ Personal Property Showcase • Direct Developer Access
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] font-heading">
              The smartest way to discover open plots <span className="gold-gradient-text">in Bengaluru.</span>
            </h1>

            <p className="text-base sm:text-xl text-white/80 max-w-2xl mx-auto font-normal leading-relaxed">
              Explore high-converting layout blueprints, 100% legal title clear plots, and direct developer pricing on Satellite Town Ring Road (STRR).
            </p>

            {/* Fast Search & Corridor Filter */}
            <div className="bg-white/10 backdrop-blur-xl p-4 sm:p-5 rounded-2xl border border-white/20 shadow-2xl max-w-3xl mx-auto space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                <div className="sm:col-span-6 relative">
                  <Search className="w-4 h-4 text-white/50 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    placeholder="Search Devanahalli, STRR, Nisarga..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder-white/50 focus:outline-none focus:border-emerald-400 font-medium"
                  />
                </div>

                <div className="sm:col-span-3">
                  <select
                    value={selectedCorridor}
                    onChange={(e) => setSelectedCorridor(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-3 text-xs font-bold text-white focus:outline-none focus:border-emerald-400 cursor-pointer"
                  >
                    <option value="all" className="bg-[#0b1f17]">All Corridors</option>
                    <option value="devanahalli" className="bg-[#0b1f17]">Devanahalli (STRR)</option>
                    <option value="sarjapur" className="bg-[#0b1f17]">Sarjapur Corridor</option>
                    <option value="yelahanka" className="bg-[#0b1f17]">Yelahanka Zone</option>
                    <option value="whitefield" className="bg-[#0b1f17]">Whitefield East</option>
                  </select>
                </div>

                <div className="sm:col-span-3">
                  <button
                    onClick={() => setActivePage('projects')}
                    className="btn-gold w-full py-3 text-xs uppercase font-extrabold tracking-wider"
                  >
                    Explore Listings
                  </button>
                </div>
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi! I want to book a VIP site visit for Nisarga Boulevard.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold py-4 px-8 text-xs uppercase font-extrabold shadow-2xl flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-white text-[#d4af37]" />
                Book Site Visit via WhatsApp ({displayPhone})
              </a>

              <button
                onClick={() => handleShareWhatsApp('Nisarga Boulevard', 'Devanahalli STRR')}
                className="px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white text-xs font-bold hover:bg-white/20 transition-all flex items-center gap-2 backdrop-blur-md"
              >
                <Share2 className="w-4 h-4 text-emerald-400" />
                Share PropSite Page on WhatsApp
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 2. HOW IT WORKS (PROPSITE 3-STEP FLOW) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-bold uppercase tracking-wider">
            Seamless Land Buying Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1f17] font-heading">
            How PropSite Buying Works
          </h2>
          <div className="divider-gold mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-[#e0e6e2] shadow-sm space-y-4 text-center">
            <div className="w-14 h-14 bg-[#0b1f17] text-emerald-400 rounded-2xl flex items-center justify-center font-black text-xl mx-auto font-heading">
              1
            </div>
            <h3 className="text-lg font-bold text-[#0b1f17] font-heading">Browse Blueprint & Layout Specs</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Inspect interactive plot dimensions (1500, 2400, 2800 sq.ft & ODD sites), Vastu facing, and live availability.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#e0e6e2] shadow-sm space-y-4 text-center">
            <div className="w-14 h-14 bg-[#d4af37] text-white rounded-2xl flex items-center justify-center font-black text-xl mx-auto font-heading">
              2
            </div>
            <h3 className="text-lg font-bold text-[#0b1f17] font-heading">Book Free VIP AC Site Visit</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Enjoy complimentary doorstep AC cab pickup from anywhere in Bengaluru with direct site demarcation inspection.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#e0e6e2] shadow-sm space-y-4 text-center">
            <div className="w-14 h-14 bg-[#0b1f17] text-emerald-400 rounded-2xl flex items-center justify-center font-black text-xl mx-auto font-heading">
              3
            </div>
            <h3 className="text-lg font-bold text-[#0b1f17] font-heading">Direct Developer Booking</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Close your deal directly with PGR Buildtech Pvt Ltd with 100% legal title verification and zero brokerage.
            </p>
          </div>
        </div>
      </section>

      {/* 3. FEATURED LISTINGS GRID WITH WHATSAPP SHARE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0b1f17]/8 text-[#0b1f17] text-xs font-bold uppercase tracking-wider mb-2">
              <Award className="w-3.5 h-3.5 text-[#d4af37]" />
              Personal Property Listings
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1f17] font-heading">
              Featured Open Plot Projects
            </h2>
          </div>

          <button
            onClick={() => setActivePage('projects')}
            className="text-[#c9a033] hover:text-[#0b1f17] text-sm font-bold flex items-center gap-1.5 transition-colors group"
          >
            <span>View All Projects ({filteredProjects.length})</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => {
            const isBlueprint = viewModes[proj.id] === 'blueprint';

            return (
              <div key={proj.id} className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group border border-[#e0e6e2]">
                <div>
                  <div className="relative h-64 overflow-hidden bg-[#0b1f17]">
                    {isBlueprint ? (
                      <div className="w-full h-full p-6 blueprint-grid-dark flex flex-col justify-between text-white">
                        <div className="flex justify-between items-center text-[10px] font-mono-code text-[#d4af37]">
                          <span>LAYOUT MATRIX</span>
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
                      <>
                        <img src={proj.heroImage} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f17] via-[#0b1f17]/20 to-transparent" />
                      </>
                    )}

                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-[#0b1f17] text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                        {proj.approvalType.split('&')[0]}
                      </span>
                    </div>

                    <button
                      onClick={() => toggleViewMode(proj.id)}
                      className="absolute top-4 right-4 z-10 bg-black/60 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg backdrop-blur-md flex items-center gap-1 border border-white/20"
                    >
                      <Eye className="w-3 h-3 text-[#d4af37]" />
                      {isBlueprint ? 'Photo View' : 'Blueprint View'}
                    </button>

                    {!isBlueprint && (
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="text-[11px] text-[#d4af37] font-bold uppercase tracking-wider block">
                          📍 {proj.location}
                        </span>
                        <h3 className="text-xl font-extrabold text-white font-heading line-clamp-1">{proj.title}</h3>
                      </div>
                    )}
                  </div>

                  <div className="p-6 space-y-5">
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {proj.tagline}
                    </p>

                    <div className="grid grid-cols-2 gap-3 text-xs bg-[#f4f6f4] p-3.5 rounded-xl border border-[#e0e6e2]">
                      <div>
                        <span className="text-slate-500 block text-[10px] font-semibold uppercase">Starting Price</span>
                        <span className="text-[#c9a033] font-black text-lg">{proj.formattedStartPrice}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[10px] font-semibold uppercase">Available Units</span>
                        <span className="text-[#0b1f17] font-black text-lg">{proj.availablePlots} Plots Left</span>
                      </div>
                    </div>

                    <div className="space-y-2 text-xs text-slate-700">
                      {(proj.highlights || []).slice(0, 2).map((h, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0b1f17] shrink-0" />
                          <span className="truncate">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => {
                        setSelectedProjectId(proj.id);
                        setActivePage('project-details');
                      }}
                      className="py-3 rounded-xl bg-[#f4f6f4] text-[#0b1f17] text-xs font-bold hover:bg-[#e0e6e2] transition-colors text-center border border-[#e0e6e2]"
                    >
                      View Masterplan
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
                      Book Visit
                    </a>
                  </div>

                  <button
                    onClick={() => handleShareWhatsApp(proj.title, proj.location)}
                    className="w-full py-2.5 rounded-xl bg-emerald-50 text-emerald-800 text-[11px] font-bold border border-emerald-200 hover:bg-emerald-100 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    Share Listing on WhatsApp
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. INTERACTIVE GROWTH MAP */}
      <section className="bg-[#f4f6f4] py-20 border-y border-[#e0e6e2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InteractiveMap onSelectCorridor={() => setActivePage('projects')} />
        </div>
      </section>

      {/* 5. ROI CALCULATOR */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ROICalculator />
        </div>
      </section>

      {/* 6. BUYER REVIEWS */}
      <section className="bg-[#f4f6f4] py-20 border-y border-[#e0e6e2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#c9a033] text-xs font-bold uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 fill-[#d4af37] text-[#d4af37]" />
              Verified Buyers Feedback
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1f17] font-heading">
              What Nisarga Boulevard Buyers Say
            </h2>
            <div className="divider-gold mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {reviews.map((rev) => (
              <div key={rev.id} className="glass-card p-7 rounded-2xl flex flex-col justify-between space-y-6 border border-[#e0e6e2]">
                <div className="space-y-4">
                  <div className="flex gap-1 text-[#d4af37]">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#d4af37]" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                    "{rev.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-5 border-t border-[#e0e6e2]">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#d4af37]/40 shadow-sm"
                  />
                  <div>
                    <div className="text-sm font-bold text-[#0b1f17] font-heading">{rev.name}</div>
                    <div className="text-xs text-[#0b1f17] font-semibold">{rev.profession}</div>
                    <div className="text-[10px] text-slate-500">{rev.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PROPSITE BANNER */}
      <section className="bg-[#0b1f17] text-white py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            PropSite Personal Showcase Portal
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-heading leading-tight">
            Ready to Inspect Nisarga Boulevard?
          </h2>

          <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto font-normal">
            Schedule your site visit today with doorstep AC cab pickup and instant layout verification.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi! I want to book a VIP site visit.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold py-4 px-8 text-xs uppercase tracking-wider font-extrabold shadow-2xl flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5 fill-white text-[#d4af37]" />
              Book Now via WhatsApp ({displayPhone})
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
