'use client';

import React, { useState, useEffect } from 'react';
import { Search, Filter, ShieldCheck, MapPin, CheckCircle2, ChevronRight, Grid, List, MessageCircle, ExternalLink, Download, Home, Building2, Globe, Sparkles } from 'lucide-react';
import { usePlots } from '../context/PlotsContext';
import { BENGALURU_CORRIDORS, FEATURED_GROUPS } from '../data/plotsData';

export default function ProjectsPage({ setActivePage, setSelectedProjectId, filterType = 'all' }) {
  const { projects, openSiteVisitModal } = usePlots();
  const [search, setSearch] = useState('');
  const [selectedPropertyType, setSelectedPropertyType] = useState(filterType);
  const [selectedGroup, setSelectedGroup] = useState('all');
  const [selectedCorridor, setSelectedCorridor] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [maxPrice, setMaxPrice] = useState(45000000);

  const whatsappNumber = '918431909508';
  const displayPhone = '+91 84319 09508';

  useEffect(() => {
    setSelectedPropertyType(filterType);
  }, [filterType]);

  const filteredProjects = projects.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase()) ||
      p.developer.toLowerCase().includes(search.toLowerCase()) ||
      (p.groupName && p.groupName.toLowerCase().includes(search.toLowerCase()));

    const matchesType =
      selectedPropertyType === 'all' ||
      p.propertyType === selectedPropertyType ||
      (selectedPropertyType === 'Open Plots' && (p.propertyType === 'Open Plots' || p.propertyType === 'Villa Plots'));

    const matchesGroup = selectedGroup === 'all' || (p.groupName && p.groupName.toLowerCase().includes(selectedGroup.toLowerCase()));
    const matchesCorridor = selectedCorridor === 'all' || p.corridorId === selectedCorridor;
    const matchesStatus = selectedStatus === 'all' || p.constructionStatus === selectedStatus;
    const matchesPrice = p.startPrice <= maxPrice;

    return matchesSearch && matchesType && matchesGroup && matchesCorridor && matchesStatus && matchesPrice;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Page Title Header */}
      <div className="space-y-3 border-b border-[#0B1F3A]/10 pb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1F3A]/8 border border-[#0B1F3A]/15 text-[#0B1F3A] text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4 text-[#C8A34D]" />
          Verified Channel Partner Portfolio
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-[#0B1F3A] tracking-tight font-heading">
          {selectedPropertyType === 'all' ? 'All Verified Properties' : `${selectedPropertyType} Portfolio`}
        </h1>
        <p className="text-[#555555] text-sm sm:text-base max-w-3xl">
          Browse verified open plot townships, custom villa developments, high-rise apartments, and Dubai luxury investments across premier corridors.
        </p>

        {/* Quick Segmented Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          {[
            { id: 'all', label: 'All Portfolios' },
            { id: 'Open Plots', label: '🏞 Plots & Villa Plots' },
            { id: 'Apartments', label: '🏢 Apartments' },
            { id: 'Villas', label: '🏡 Luxury Villas' },
            { id: 'Dubai Apartments', label: '🌍 Dubai Properties' }
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedPropertyType(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedPropertyType === tab.id
                  ? 'bg-[#0B1F3A] text-[#C8A34D] shadow-md border border-[#C8A34D]/50'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Comprehensive Search & Filter Controls */}
      <div className="glass-card p-6 space-y-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          
          {/* Keyword Search */}
          <div>
            <label className="block text-[10px] font-bold text-[#555555] uppercase mb-1">Search Keywords</label>
            <div className="relative">
              <Search className="w-4 h-4 text-[#a0aec0] absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Oriaiyan, Tripon, Vinra, Kolar..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-[#F8F8F5] border border-[#0B1F3A]/10 rounded-lg pl-9 pr-3 py-2 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#C8A34D]"
              />
            </div>
          </div>

          {/* Group / Company Filter */}
          <div>
            <label className="block text-[10px] font-bold text-[#555555] uppercase mb-1">Developer Group / Company</label>
            <select
              value={selectedGroup}
              onChange={(e) => setSelectedGroup(e.target.value)}
              className="w-full bg-[#F8F8F5] border border-[#0B1F3A]/10 rounded-lg px-3 py-2 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#C8A34D] cursor-pointer font-medium"
            >
              <option value="all">All Groups & Companies</option>
              {FEATURED_GROUPS.map((g) => (
                <option key={g.id} value={g.name}>{g.name}</option>
              ))}
            </select>
          </div>

          {/* Corridor Filter */}
          <div>
            <label className="block text-[10px] font-bold text-[#555555] uppercase mb-1">Corridor / Belt</label>
            <select
              value={selectedCorridor}
              onChange={(e) => setSelectedCorridor(e.target.value)}
              className="w-full bg-[#F8F8F5] border border-[#0B1F3A]/10 rounded-lg px-3 py-2 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#C8A34D] cursor-pointer font-medium"
            >
              <option value="all">All Corridors</option>
              {BENGALURU_CORRIDORS.filter(c => c.id !== 'all-corridors').map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>

          {/* Property Category */}
          <div>
            <label className="block text-[10px] font-bold text-[#555555] uppercase mb-1">Property Category</label>
            <select
              value={selectedPropertyType}
              onChange={(e) => setSelectedPropertyType(e.target.value)}
              className="w-full bg-[#F8F8F5] border border-[#0B1F3A]/10 rounded-lg px-3 py-2 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#C8A34D] cursor-pointer font-medium"
            >
              <option value="all">All Property Categories</option>
              <option value="Open Plots">Open Plots & Villa Plots</option>
              <option value="Apartments">Apartments</option>
              <option value="Villas">Luxury Villas</option>
              <option value="Dubai Apartments">Dubai Properties</option>
            </select>
          </div>

          {/* Construction Status */}
          <div>
            <label className="block text-[10px] font-bold text-[#555555] uppercase mb-1">Status</label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full bg-[#F8F8F5] border border-[#0B1F3A]/10 rounded-lg px-3 py-2 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#C8A34D] cursor-pointer font-medium"
            >
              <option value="all">All Stages</option>
              <option value="Ready for Construction">Ready for Construction</option>
              <option value="Under Construction">Under Construction</option>
            </select>
          </div>

        </div>

        {/* Price Slider and Count */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 text-xs text-[#555555]">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <span className="font-bold shrink-0">Max Budget:</span>
            <input
              type="range"
              min="3000000"
              max="45000000"
              step="1000000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-48 accent-[#0B1F3A] cursor-pointer"
            />
            <span className="font-black text-[#0B1F3A]">
              Up to ₹{(maxPrice / 10000000).toFixed(2)} Cr
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span>Showing <strong>{filteredProjects.length}</strong> of <strong>{projects.length}</strong> Verified Projects</span>
            {(search || selectedGroup !== 'all' || selectedCorridor !== 'all' || selectedPropertyType !== 'all' || selectedStatus !== 'all') && (
              <button
                onClick={() => {
                  setSearch('');
                  setSelectedGroup('all');
                  setSelectedCorridor('all');
                  setSelectedPropertyType('all');
                  setSelectedStatus('all');
                  setMaxPrice(45000000);
                }}
                className="text-rose-600 hover:underline font-bold text-xs cursor-pointer"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Projects Grid Display */}
      {filteredProjects.length === 0 ? (
        <div className="glass-card p-12 text-center space-y-4 bg-white rounded-2xl border border-slate-200">
          <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center text-2xl">
            🔍
          </div>
          <h3 className="text-xl font-bold text-[#0B1F3A] font-heading">No Matching Projects Found</h3>
          <p className="text-sm text-[#555555] max-w-md mx-auto">
            Try adjusting your search keywords, budget slider, or corridor filters to explore available developer inventory.
          </p>
          <button
            onClick={() => {
              setSearch('');
              setSelectedGroup('all');
              setSelectedCorridor('all');
              setSelectedPropertyType('all');
            }}
            className="btn-primary py-2 px-6 text-xs uppercase"
          >
            Clear All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div key={proj.id} className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group bg-white border border-slate-200 hover:border-[#C8A34D] transition-all shadow-sm">
              <div>
                <div className="relative h-60 overflow-hidden bg-[#0B1F3A]">
                  <img src={proj.heroImage} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 bg-[#0B1F3A]/90 backdrop-blur-md text-[#C8A34D] border border-[#C8A34D]/40 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                    {proj.propertyType}
                  </span>

                  {/* Group Badge */}
                  {proj.groupName && (
                    <span className="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-[#0B1F3A] px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm">
                      {proj.groupName}
                    </span>
                  )}

                  {/* Price Banner */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <div>
                      <div className="text-[10px] uppercase font-bold text-[#C8A34D]">Price Range</div>
                      <div className="text-lg font-black text-white font-heading">{proj.priceRange}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] uppercase font-bold text-slate-300">Plots / Units</div>
                      <div className="text-xs font-bold text-[#C8A34D]">{proj.availablePlots} Available</div>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-black text-[#0B1F3A] font-heading group-hover:text-[#C8A34D] transition-colors leading-snug">
                      {proj.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-[#555555] mt-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#C8A34D] shrink-0" />
                      <span className="line-clamp-1">{proj.location}</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#555555] line-clamp-2 leading-relaxed">
                    {proj.overview}
                  </p>

                  {/* Configurations */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Available Configurations:</span>
                    <div className="flex flex-wrap gap-1">
                      {proj.dimensions?.slice(0, 3).map((dim, idx) => (
                        <span key={idx} className="bg-slate-50 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded border border-slate-200">
                          {dim}
                        </span>
                      ))}
                      {(proj.dimensions?.length || 0) > 3 && (
                        <span className="bg-[#0B1F3A]/5 text-[#0B1F3A] text-[10px] font-bold px-1.5 py-0.5 rounded">
                          +{proj.dimensions.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Actions */}
              <div className="p-6 pt-0 space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      setSelectedProjectId(proj.id);
                      setActivePage('project-details');
                    }}
                    className="py-2.5 px-3 rounded-lg border border-[#0B1F3A]/20 hover:border-[#0B1F3A] text-[#0B1F3A] text-xs font-bold text-center transition-colors cursor-pointer"
                  >
                    View Details
                  </button>

                  <button
                    onClick={() => openSiteVisitModal(proj)}
                    className="btn-gold py-2.5 px-3 text-xs font-black text-center cursor-pointer"
                  >
                    Book Visit
                  </button>
                </div>

                <a
                  href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(`Hello! I would like masterplan PDF and pricing details for ${proj.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-lg bg-[#0B1F3A] hover:bg-[#142E54] text-[#C8A34D] text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#C8A34D]" />
                  <span>WhatsApp Brochure</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Trust Guarantee Section */}
      <div className="p-8 rounded-3xl bg-[#0B1F3A] text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-[#C8A34D]/30 shadow-xl">
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold text-[#C8A34D] uppercase">
            <Sparkles className="w-4 h-4 text-[#C8A34D]" />
            Direct Developer Allotment Desk
          </div>
          <h3 className="text-2xl font-black font-heading">
            Need Expert Advice on Plot Legalities or Villa Customization?
          </h3>
          <p className="text-xs text-white/80 max-w-2xl">
            Our land advisors verify title clearance, RERA certification, and bank approvals for every project in our portfolio.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            onClick={() => setActivePage('contact')}
            className="btn-gold py-3.5 px-6 text-xs uppercase font-extrabold cursor-pointer"
          >
            Speak to Advisor
          </button>
        </div>
      </div>
    </div>
  );
}
