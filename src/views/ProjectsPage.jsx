'use client';

import React, { useState, useEffect } from 'react';
import { Search, Filter, ShieldCheck, MapPin, CheckCircle2, ChevronRight, Grid, List, MessageCircle, ExternalLink, Download, Home, Building2, Globe, Sparkles } from 'lucide-react';
import { usePlots } from '../context/PlotsContext';
import { BENGALURU_CORRIDORS } from '../data/plotsData';

export default function ProjectsPage({ setActivePage, setSelectedProjectId, filterType = 'all' }) {
  const { projects } = usePlots();
  const [search, setSearch] = useState('');
  const [selectedPropertyType, setSelectedPropertyType] = useState(filterType);
  const [selectedCorridor, setSelectedCorridor] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [maxPrice, setMaxPrice] = useState(35000000);

  const whatsappNumber = '918431909508';
  const displayPhone = '+91 84319 09508';

  useEffect(() => {
    setSelectedPropertyType(filterType);
  }, [filterType]);

  const filteredProjects = projects.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || 
                          p.location.toLowerCase().includes(search.toLowerCase()) ||
                          p.developer.toLowerCase().includes(search.toLowerCase());
    const matchesType = selectedPropertyType === 'all' || p.propertyType === selectedPropertyType;
    const matchesCorridor = selectedCorridor === 'all' || p.corridorId === selectedCorridor;
    const matchesStatus = selectedStatus === 'all' || p.constructionStatus === selectedStatus;
    const matchesPrice = p.startPrice <= maxPrice;

    return matchesSearch && matchesType && matchesCorridor && matchesStatus && matchesPrice;
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
            { id: 'Open Plots', label: '🏞 Open Plots' },
            { id: 'Villas', label: '🏡 Custom Villas' },
            { id: 'Apartments', label: '🏢 Apartments' },
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
      <div className="glass-card p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          
          {/* Keyword Search */}
          <div>
            <label className="block text-[10px] font-bold text-[#555555] uppercase mb-1">Search Keywords</label>
            <div className="relative">
              <Search className="w-4 h-4 text-[#a0aec0] absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Devanahalli, Whitefield, Emaar..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-[#F8F8F5] border border-[#0B1F3A]/10 rounded-lg pl-9 pr-3 py-2 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#C8A34D]"
              />
            </div>
          </div>

          {/* Property Type Filter */}
          <div>
            <label className="block text-[10px] font-bold text-[#555555] uppercase mb-1">Property Type</label>
            <select
              value={selectedPropertyType}
              onChange={(e) => setSelectedPropertyType(e.target.value)}
              className="w-full bg-[#F8F8F5] border border-[#0B1F3A]/10 rounded-lg px-3 py-2 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#C8A34D] cursor-pointer"
            >
              <option value="all">All Property Types ({projects.length})</option>
              <option value="Open Plots">🏞 Open Plots</option>
              <option value="Villas">🏡 Custom Villas</option>
              <option value="Apartments">🏢 High-Rise Apartments</option>
              <option value="Dubai Apartments">🌍 Dubai Properties</option>
            </select>
          </div>

          {/* Location Corridor Filter */}
          <div>
            <label className="block text-[10px] font-bold text-[#555555] uppercase mb-1">Location Corridor</label>
            <select
              value={selectedCorridor}
              onChange={(e) => setSelectedCorridor(e.target.value)}
              className="w-full bg-[#F8F8F5] border border-[#0B1F3A]/10 rounded-lg px-3 py-2 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#C8A34D] cursor-pointer"
            >
              <option value="all">All Corridors</option>
              {BENGALURU_CORRIDORS.map((c) => (
                <option key={c.id} value={c.id}>{c.name.split('(')[0]}</option>
              ))}
            </select>
          </div>

          {/* Construction Status Filter */}
          <div>
            <label className="block text-[10px] font-bold text-[#555555] uppercase mb-1">Construction Status</label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full bg-[#F8F8F5] border border-[#0B1F3A]/10 rounded-lg px-3 py-2 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#C8A34D] cursor-pointer"
            >
              <option value="all">All Statuses</option>
              <option value="Ready for Construction">Ready for Construction</option>
              <option value="Under Construction">Under Construction</option>
            </select>
          </div>

          {/* Max Price Slider */}
          <div>
            <div className="flex justify-between items-center text-[10px] font-bold text-[#555555] uppercase mb-1">
              <span>Max Budget</span>
              <span className="text-[#C8A34D] font-extrabold">₹{(maxPrice / 100000).toFixed(0)} Lakhs</span>
            </div>
            <input
              type="range"
              min="4000000"
              max="40000000"
              step="1000000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full h-2 bg-[#0B1F3A]/10 rounded-lg appearance-none cursor-pointer accent-[#C8A34D] mt-2"
            />
          </div>

        </div>
      </div>

      {/* Grid Results */}
      <div className="space-y-6">
        <div className="flex justify-between items-center text-xs text-[#555555] border-b border-[#0B1F3A]/10 pb-3">
          <span>Showing <strong className="text-[#0B1F3A]">{filteredProjects.length}</strong> verified property listings</span>
          <span className="text-[#C8A34D] font-bold">Direct Developer Allocations • 0% Brokerage</span>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="glass-card p-12 text-center space-y-3">
            <h3 className="text-xl font-bold text-[#0B1F3A] font-heading">No properties match your filter criteria</h3>
            <p className="text-xs text-[#555555]">Try adjusting the budget slider or select "All Property Types".</p>
            <button
              onClick={() => { setSearch(''); setSelectedPropertyType('all'); setSelectedCorridor('all'); setSelectedStatus('all'); setMaxPrice(40000000); }}
              className="btn-gold text-xs py-2 px-5 cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((proj) => (
              <div key={proj.id} className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group">
                <div>
                  <div className="relative h-60 overflow-hidden bg-[#0B1F3A]">
                    <img src={proj.heroImage} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#C8A34D] text-[#0B1F3A] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase shadow-md">
                        {proj.propertyType}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="text-[11px] text-[#C8A34D] font-bold block uppercase">{proj.location}</span>
                      <h3 className="text-xl font-bold text-white font-heading">{proj.title}</h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-center text-xs border-b border-[#0B1F3A]/10 pb-3">
                      <div>
                        <span className="text-[10px] text-[#555555] block">Developer</span>
                        <span className="font-bold text-[#0B1F3A] text-xs">{proj.developer}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-[#555555] block">RERA Status</span>
                        <span className="font-bold text-[#C8A34D] text-[11px]">{proj.approvalType.split('&')[0]}</span>
                      </div>
                    </div>

                    <p className="text-xs text-[#555555] leading-relaxed line-clamp-2">{proj.overview}</p>

                    <div className="bg-[#F8F8F5] p-3.5 rounded-xl border border-[#0B1F3A]/10 flex justify-between items-center text-xs">
                      <div>
                        <div className="text-[#555555] text-[10px]">Starting Price</div>
                        <div className="text-[#C8A34D] font-extrabold text-base">{proj.formattedStartPrice}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[#555555] text-[10px]">Availability</div>
                        <div className="text-[#0B1F3A] font-bold">{proj.availablePlots} Units</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 grid grid-cols-3 gap-2 text-xs">
                  <button
                    onClick={() => { setSelectedProjectId(proj.id); setActivePage('project-details'); }}
                    className="btn-primary py-2.5 px-2 text-[11px] text-center cursor-pointer"
                  >
                    View Details
                  </button>

                  <button
                    onClick={() => setActivePage('contact')}
                    className="btn-primary bg-white text-[#0B1F3A] border border-[#0B1F3A]/20 hover:bg-[#F8F8F5] py-2.5 px-2 text-[11px] text-center font-bold cursor-pointer"
                  >
                    Book Visit
                  </button>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi! I want details on ${proj.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold py-2.5 px-2 text-[11px] text-center flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-[#0B1F3A]" />
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Mandatory Disclaimer */}
      <div className="bg-white p-6 rounded-2xl border border-[#0B1F3A]/10 text-center space-y-2">
        <span className="text-[#C8A34D] text-xs font-bold uppercase tracking-wider font-heading">
          Channel Partner Disclosure
        </span>
        <p className="text-xs text-[#555555] max-w-3xl mx-auto">
          "We are an independent real estate consultancy working with multiple reputed developers as Channel Partners. We help buyers compare projects, arrange site visits and connect directly with developers."
        </p>
      </div>
    </div>
  );
}
