'use client';

import React, { useState } from 'react';
import { Search, Filter, ShieldCheck, MapPin, CheckCircle2, ChevronRight, Grid, List, MessageCircle, ExternalLink, Download } from 'lucide-react';
import { usePlots } from '../context/PlotsContext';
import { BENGALURU_CORRIDORS } from '../data/plotsData';

export default function ProjectsPage({ setActivePage, setSelectedProjectId }) {
  const { projects } = usePlots();
  const [search, setSearch] = useState('');
  const [corridorFilter, setCorridorFilter] = useState('all');
  const whatsappNumber = '917676077879';

  const filteredProjects = projects.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.location.toLowerCase().includes(search.toLowerCase());
    const matchesCorridor = corridorFilter === 'all' || p.corridorId === corridorFilter;
    return matchesSearch && matchesCorridor;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Title Header */}
      <div className="space-y-3 border-b border-[#e2e8f0] pb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0f1d3d]/8 border border-[#0f1d3d]/15 text-[#0f1d3d] text-xs font-semibold">
          <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
          100% Legal Clearance & Verified Title Deeds
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0f1d3d] tracking-tight font-heading">
          Verified Plotted Developments in Bengaluru
        </h1>
        <p className="text-[#718096] text-sm sm:text-base max-w-3xl">
          Browse premium open plot developments across Devanahalli Airport Hub, Sarjapur Tech Corridor, Yelahanka Aerospace Zone & Whitefield East.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-6 rounded-2xl border border-[#e2e8f0] shadow-sm space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <label className="block text-[11px] font-semibold text-[#718096] uppercase mb-1">Search Project or Location</label>
            <div className="relative">
              <Search className="w-4 h-4 text-[#a0aec0] absolute left-3 top-3" />
              <input
                type="text" placeholder="Devanahalli, STRR, Nisarga..." value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-[#f8f9fc] border border-[#e2e8f0] rounded-xl pl-9 pr-4 py-2.5 text-xs text-[#1a202c] focus:outline-none focus:border-[#0f1d3d]/40"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-[#718096] uppercase mb-1">Filter Growth Corridor</label>
            <select value={corridorFilter} onChange={(e) => setCorridorFilter(e.target.value)}
              className="w-full bg-[#f8f9fc] border border-[#e2e8f0] rounded-xl px-3 py-2.5 text-xs text-[#4a5568] focus:outline-none focus:border-[#0f1d3d]/40"
            >
              <option value="all">All Corridors ({projects.length})</option>
              {BENGALURU_CORRIDORS.map((c) => (
                <option key={c.id} value={c.id}>{c.name.split('(')[0]}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Projects Grid List */}
      <div className="space-y-6">
        <div className="flex justify-between items-center text-xs text-[#718096] border-b border-[#e2e8f0] pb-3">
          <span>Showing <strong className="text-[#0f1d3d]">{filteredProjects.length}</strong> verified project listings</span>
          <span className="text-[#1e3a6e] font-semibold">Direct Developer Allocation • 0% Brokerage</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div key={proj.id} className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group">
              <div>
                <div className="relative h-60 overflow-hidden bg-[#060e1a]">
                  <img src={proj.heroImage} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060e1a]/80 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-[#0f1d3d] text-[11px] font-bold px-2.5 py-1 rounded-full shadow-lg">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                      {proj.approvalType}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[11px] text-[#d4af37] font-bold block uppercase">📍 {proj.location}</span>
                    <h3 className="text-xl font-bold text-white font-heading">{proj.title}</h3>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-xs text-[#718096] line-clamp-2">{proj.overview}</p>

                  <div className="grid grid-cols-2 gap-2 text-xs bg-[#f8f9fc] p-3 rounded-xl border border-[#e2e8f0]">
                    <div>
                      <div className="text-[#a0aec0] text-[10px]">Indicative Price</div>
                      <div className="text-[#d4af37] font-bold text-sm">{proj.formattedStartPrice}</div>
                    </div>
                    <div>
                      <div className="text-[#a0aec0] text-[10px]">Available Units</div>
                      <div className="text-[#1e3a6e] font-bold text-sm">{proj.availablePlots} / {proj.totalPlots} Plots</div>
                    </div>
                  </div>

                  <div className="space-y-1 text-xs text-[#4a5568]">
                    <div className="text-[11px] text-[#a0aec0] font-semibold uppercase">Configurations</div>
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {(proj.dimensions || []).map((d, i) => (
                        <span key={i} className="px-2.5 py-1 rounded bg-[#f0f2f7] border border-[#e2e8f0] text-[11px] font-bold text-[#0f1d3d]">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 grid grid-cols-2 gap-3">
                <button
                  onClick={() => { setSelectedProjectId(proj.id); setActivePage('project-details'); }}
                  className="py-3 rounded-xl bg-[#f0f2f7] text-[#0f1d3d] text-xs font-bold hover:bg-[#e2e8f0] transition-colors text-center border border-[#e2e8f0]"
                >
                  View Layout Map
                </button>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi! I want to book a site visit for ${proj.title} in ${proj.location}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold py-3 text-xs uppercase font-extrabold text-center flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  Book Visit
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
