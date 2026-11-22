'use client';

import React, { useState, useEffect } from 'react';
import { Search, MapPin, MessageCircle } from 'lucide-react';
import { usePlots } from '../context/PlotsContext';
import { BENGALURU_CORRIDORS, FEATURED_GROUPS } from '../data/plotsData';

export default function ProjectsPage({ setActivePage, setSelectedProjectId, filterType = 'all', isSubpage = false }) {
  const { projects, openSiteVisitModal } = usePlots();
  const [search, setSearch] = useState('');
  const [selectedPropertyType, setSelectedPropertyType] = useState(filterType);
  const [selectedGroup, setSelectedGroup] = useState('all');
  const [selectedCorridor, setSelectedCorridor] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [maxPrice, setMaxPrice] = useState(100000000);

  const whatsappNumber = '918431909508';

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
      (selectedPropertyType === 'Open Plots' && (p.propertyType === 'Open Plots' || p.propertyType === 'Villa Plots' || p.title?.toLowerCase().includes('plot'))) ||
      (selectedPropertyType === 'Villa Plots' && (p.propertyType === 'Open Plots' || p.propertyType === 'Villa Plots' || p.title?.toLowerCase().includes('villa plot') || p.overview?.toLowerCase().includes('villa plot'))) ||
      (selectedPropertyType === 'Villas' && p.propertyType === 'Villas');

    const matchesGroup = selectedGroup === 'all' || (p.groupName && p.groupName.toLowerCase().includes(selectedGroup.toLowerCase()));
    const matchesCorridor = selectedCorridor === 'all' || p.corridorId === selectedCorridor;
    const matchesStatus = selectedStatus === 'all' || p.constructionStatus === selectedStatus;
    const matchesPrice = p.startPrice <= maxPrice;

    return matchesSearch && matchesType && matchesGroup && matchesCorridor && matchesStatus && matchesPrice;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Page Title Header */}
      <div className="space-y-5 pb-2">
        {isSubpage ? (
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B1F3A] tracking-tight font-heading">
            {selectedPropertyType === 'all' ? 'All Verified Properties' : `${selectedPropertyType} Portfolio`}
          </h2>
        ) : (
          <h1 className="text-3xl sm:text-5xl font-black text-[#0B1F3A] tracking-tight font-heading">
            {selectedPropertyType === 'all' ? 'All Verified Properties' : `${selectedPropertyType} Portfolio`}
          </h1>
        )}
        <p className="text-[#555555] text-base sm:text-lg max-w-3xl leading-relaxed">
          {selectedPropertyType === 'Villas'
            ? 'Browse Tripon’s Nandi Hills collection and the seller-listed Purva Symphony resale. Confirm unit details, price and availability with the advisor.'
            : 'Browse verified open plot townships, custom villa developments, high-rise apartments, and Dubai luxury investments across premier corridors.'}
        </p>

        {/* Quick category filters are redundant on dedicated category routes; the filter form below remains available. */}
        {!isSubpage && <div className="flex flex-wrap items-center gap-2 pt-2">
          {[
            { id: 'all', label: 'All Portfolios' },
            { id: 'Open Plots', label: 'Open Plots' },
            { id: 'Villa Plots', label: 'Villa Plots' },
            { id: 'Villas', label: 'Luxury Villas' },
            { id: 'Apartments', label: 'Apartments' },
            { id: 'Dubai Apartments', label: 'Dubai Properties' }
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedPropertyType(tab.id)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                selectedPropertyType === tab.id
                  ? 'bg-[#0B1F3A] text-[#C8A34D] border border-[#C8A34D]/50'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>}
      </div>

      {/* Comprehensive Search & Filter Controls */}
      <div className="p-6 space-y-5 bg-white border border-slate-200 rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          
          {/* Keyword Search */}
          <div>
            <label className="block text-sm font-semibold text-[#555555] mb-2">Search Keywords</label>
            <div className="relative">
              <Search className="w-4 h-4 text-[#a0aec0] absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Oriaiyan, Tripon, Vinra, Kolar..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-[#F8F8F5] border border-[#0B1F3A]/10 rounded-lg pl-9 pr-3 py-2 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C8A34D]"
              />
            </div>
          </div>

          {/* Group / Company Filter */}
          <div>
            <label className="block text-sm font-semibold text-[#555555] mb-2">Developer Group / Company</label>
            <select
              value={selectedGroup}
              onChange={(e) => setSelectedGroup(e.target.value)}
              className="w-full bg-[#F8F8F5] border border-[#0B1F3A]/10 rounded-lg px-3 py-2 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C8A34D] cursor-pointer font-medium"
            >
              <option value="all">All Groups & Companies</option>
              {FEATURED_GROUPS.map((g) => (
                <option key={g.id} value={g.name}>{g.name}</option>
              ))}
            </select>
          </div>

          {/* Corridor Filter */}
          <div>
            <label className="block text-sm font-semibold text-[#555555] mb-2">Corridor / Belt</label>
            <select
              value={selectedCorridor}
              onChange={(e) => setSelectedCorridor(e.target.value)}
              className="w-full bg-[#F8F8F5] border border-[#0B1F3A]/10 rounded-lg px-3 py-2 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C8A34D] cursor-pointer font-medium"
            >
              <option value="all">All Corridors</option>
              {BENGALURU_CORRIDORS.filter(c => c.id !== 'all-corridors').map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>

          {/* Property Category */}
          <div>
            <label className="block text-sm font-semibold text-[#555555] mb-2">Property Category</label>
            <select
              value={selectedPropertyType}
              onChange={(e) => setSelectedPropertyType(e.target.value)}
              className="w-full bg-[#F8F8F5] border border-[#0B1F3A]/10 rounded-lg px-3 py-2 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C8A34D] cursor-pointer font-medium"
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
            <label className="block text-sm font-semibold text-[#555555] mb-2">Status</label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full bg-[#F8F8F5] border border-[#0B1F3A]/10 rounded-lg px-3 py-2 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C8A34D] cursor-pointer font-medium"
            >
              <option value="all">All Stages</option>
              <option value="Ready for Construction">Ready for Construction</option>
              <option value="Under Construction">Under Construction</option>
            </select>
          </div>

        </div>

        {/* Price Slider and Count */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 text-sm text-[#555555]">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <span className="font-bold shrink-0">Max Budget:</span>
            <input
              type="range"
              min="3000000"
              max="120000000"
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
            {(search || selectedGroup !== 'all' || selectedCorridor !== 'all' || selectedPropertyType !== 'all' || selectedStatus !== 'all' || maxPrice < 100000000) && (
              <button
                onClick={() => {
                  setSearch('');
                  setSelectedGroup('all');
                  setSelectedCorridor('all');
                  setSelectedPropertyType('all');
                  setSelectedStatus('all');
                  setMaxPrice(100000000);
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
        <div className="p-12 text-center space-y-4 bg-white rounded-2xl border border-slate-200">
          <Search className="w-8 h-8 text-[#7A5C10] mx-auto" aria-hidden="true" />
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
            <div key={proj.id} className="rounded-xl overflow-hidden flex flex-col justify-between group bg-white border border-slate-200 transition-colors hover:border-[#C8A34D]">
              <div>
                <div className="relative h-60 overflow-hidden bg-[#0B1F3A]">
                  <img src={proj.heroImage} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-x-0 bottom-0 bg-[#0B1F3A]/90 p-4 text-white sm:p-5">
                    <p className="text-sm font-semibold text-[#C8A34D]">{proj.propertyType} · {proj.groupName}</p>
                    <p className="mt-1 text-lg font-bold font-heading">{proj.priceRange}</p>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#0B1F3A] font-heading leading-snug">
                      {proj.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-[#555555] mt-2">
                      <MapPin className="w-4 h-4 text-[#7A5C10] shrink-0" aria-hidden="true" />
                      <span className="line-clamp-2">{proj.location}</span>
                    </div>
                  </div>

                  <p className="text-base text-[#555555] line-clamp-3 leading-relaxed">
                    {proj.overview}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-base font-semibold text-[#0B1F3A]">Configurations</span>
                    <ul className="flex flex-wrap gap-2">
                      {proj.dimensions?.slice(0, 3).map((dim, idx) => (
                        <li key={idx} className="bg-[#F8F8F5] text-slate-700 text-sm px-3 py-1.5 rounded">
                          {dim}
                        </li>
                      ))}
                      {(proj.dimensions?.length || 0) > 3 && (
                        <li className="bg-[#0B1F3A]/5 text-[#0B1F3A] text-sm font-semibold px-3 py-1.5 rounded">
                          +{proj.dimensions.length - 3} more
                        </li>
                      )}
                    </ul>
                    <p className="text-sm font-semibold text-[#0B1F3A]">{proj.availablePlots} available</p>
                  </div>
                </div>
              </div>

              {/* Card Actions */}
              <div className="p-6 pt-0 space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  {proj.id === 'project-purva-sounds-of-water-villa' ? (
                    <a
                      href="/purva-sounds-of-water"
                      className="py-3 px-3 rounded-lg border border-[#0B1F3A]/20 hover:border-[#0B1F3A] text-[#0B1F3A] text-sm font-bold text-center transition-colors block"
                    >
                      View Villa Page
                    </a>
                  ) : (
                    <a
                      href={`/?page=project-details&id=${proj.id}`}
                      onClick={(e) => {
                        if (typeof window !== 'undefined' && (window.location.pathname === '/' || window.location.pathname === '')) {
                          e.preventDefault();
                          if (setSelectedProjectId) setSelectedProjectId(proj.id);
                          if (setActivePage) setActivePage('project-details', 'all', proj.id);
                        }
                      }}
                      className="py-3 px-3 rounded-lg border border-[#0B1F3A]/20 hover:border-[#0B1F3A] text-[#0B1F3A] text-sm font-bold text-center transition-colors block"
                    >
                      View Details
                    </a>
                  )}

                  <button
                    onClick={() => openSiteVisitModal(proj)}
                    className="btn-gold py-3 px-3 text-sm font-black text-center cursor-pointer"
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
      <div className="p-8 rounded-2xl bg-[#0B1F3A] text-white flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-2xl font-black font-heading leading-tight">
            Need Expert Advice on Plot Legalities or Villa Customization?
          </h3>
          <p className="text-base text-white/85 max-w-2xl leading-relaxed">
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
