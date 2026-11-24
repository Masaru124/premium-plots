'use client';

import React, { useEffect, useState } from 'react';
import { MapPin, MessageCircle, Search, ArrowRight, ArrowUpRight } from 'lucide-react';
import { usePlots } from '../context/PlotsContext';
import { BENGALURU_CORRIDORS, FEATURED_GROUPS } from '../data/plotsData';

const FIELD = 'min-h-12 w-full bg-[#11233D] px-4 text-[17px] text-[#FBFBFD] placeholder:text-[#B0B8C4] focus:outline-none focus:ring-2 focus:ring-[#0B192C]';
const LABEL = 'mb-2 block text-[14px] text-[#B0B8C4]';

export default function ProjectsPage({ setActivePage, setSelectedProjectId, filterType = 'all', isSubpage = false }) {
  const { projects, openSiteVisitModal } = usePlots();
  const [search, setSearch] = useState('');
  const [selectedPropertyType, setSelectedPropertyType] = useState(filterType);
  const [selectedGroup, setSelectedGroup] = useState('all');
  const [selectedCorridor, setSelectedCorridor] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [maxPrice, setMaxPrice] = useState(100000000);

  const whatsappNumber = '918431909508';

  // Navigation can hand this surface a different portfolio while it stays
  // mounted, so adopt the incoming filter during render rather than in an effect.
  const [appliedFilterType, setAppliedFilterType] = useState(filterType);
  if (appliedFilterType !== filterType) {
    setAppliedFilterType(filterType);
    setSelectedPropertyType(filterType);
  }

  const filteredProjects = projects.filter((p) => {
    const matchesSearch =
      p.title?.toLowerCase().includes(search.toLowerCase()) ||
      p.location?.toLowerCase().includes(search.toLowerCase()) ||
      p.developer?.toLowerCase().includes(search.toLowerCase()) ||
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

  // Entrances for the register rows; content is never hidden without script.
  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    root.classList.add('js-reveal');
    const items = Array.from(document.querySelectorAll('[data-reveal]'));
    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-revealed'));
      return () => root.classList.remove('js-reveal');
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.04 }
    );
    items.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      root.classList.remove('js-reveal');
    };
  }, [filteredProjects.length]);

  const isFiltered =
    Boolean(search) ||
    selectedGroup !== 'all' ||
    selectedCorridor !== 'all' ||
    selectedPropertyType !== 'all' ||
    selectedStatus !== 'all' ||
    maxPrice < 100000000;

  const resetFilters = () => {
    setSearch('');
    setSelectedGroup('all');
    setSelectedCorridor('all');
    setSelectedPropertyType('all');
    setSelectedStatus('all');
    setMaxPrice(100000000);
  };

  const title = selectedPropertyType === 'all' ? 'The property register' : `${selectedPropertyType} portfolio`;

  return (
    <div>
      {/* Header */}
      <section className="bg-[#11233D]">
        <div className="shell pb-9 pt-12 lg:pt-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              {isSubpage ? (
                <h2 data-reveal className="display-lg text-[#FBFBFD]">{title}</h2>
              ) : (
                <h1 data-reveal className="display-xl text-[#FBFBFD]">{title}</h1>
              )}
              <p className="mt-5 max-w-[52ch] text-[19px] leading-relaxed text-[var(--text-soft)]">
                {selectedPropertyType === 'Villas'
                  ? 'Triton’s Nandi Hills collection and the seller-listed Purva Symphony resale. Unit details, price and availability are confirmed with the advisor.'
                  : 'Seven verified plots, villas and apartments across Bengaluru and Dubai, each at the seller’s or developer’s current quote.'}
              </p>
              <p className="mt-6 text-[17px] leading-relaxed text-[var(--text-soft)]">
                <span className="font-heading text-[1.5rem] text-[#FBFBFD] figures">{filteredProjects.length}</span>
                {' '}of{' '}
                <span className="font-heading text-[1.5rem] text-[#FBFBFD] figures">{projects.length}</span> match now
              </p>
            </div>

            <div className="lg:col-span-5">
              <img
                src={(projects[0]?.heroImage || '').replace(/w=\d+/, 'w=1400')}
                alt={projects[0] ? `${projects[0].title}, ${projects[0].location}` : 'Property in the register'}
                width={1400}
                height={900}
                fetchPriority="high"
                className="h-[240px] w-full object-cover sm:h-[320px] lg:h-[300px]"
              />
            </div>
          </div>

          {!isSubpage && (
            <div className="mt-8 flex flex-wrap items-center gap-1" role="group" aria-label="Filter by portfolio">
              {[
                { id: 'all', label: 'All portfolios' },
                { id: 'Open Plots', label: 'Open plots' },
                { id: 'Villa Plots', label: 'Villa plots' },
                { id: 'Villas', label: 'Luxury villas' },
                { id: 'Apartments', label: 'Apartments' },
                { id: 'Dubai Apartments', label: 'Dubai' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedPropertyType(tab.id)}
                  aria-pressed={selectedPropertyType === tab.id}
                  className={`min-h-11 px-4 text-[14px] transition-colors ${
                    selectedPropertyType === tab.id
                      ? 'bg-[#11233D] text-[#FBFBFD]'
                      : 'text-[#B0B8C4] hover:text-[#FBFBFD]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Filters */}
      <section aria-labelledby="filters-heading" className="bg-[#070F1B]">
        <div className="shell py-8">
          <h2 id="filters-heading" className="sr-only">Search and filter properties</h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5">
            <div>
              <label htmlFor="filter-search" className={LABEL}>Keyword</label>
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#B0B8C4]" aria-hidden="true" />
                <input
                  id="filter-search"
                  type="text"
                  placeholder="Oriaiyan, Triton, Kolar…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className={`${FIELD} pl-9`}
                />
              </div>
            </div>

            <div>
              <label htmlFor="filter-group" className={LABEL}>Developer</label>
              <select
                id="filter-group"
                value={selectedGroup}
                onChange={(e) => setSelectedGroup(e.target.value)}
                className={`${FIELD} cursor-pointer`}
              >
                <option value="all">All developers</option>
                {FEATURED_GROUPS.map((g) => (
                  <option key={g.id} value={g.name}>{g.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="filter-corridor" className={LABEL}>Corridor</label>
              <select
                id="filter-corridor"
                value={selectedCorridor}
                onChange={(e) => setSelectedCorridor(e.target.value)}
                className={`${FIELD} cursor-pointer`}
              >
                <option value="all">All corridors</option>
                {BENGALURU_CORRIDORS.filter((c) => c.id !== 'all-corridors').map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="filter-category" className={LABEL}>Category</label>
              <select
                id="filter-category"
                value={selectedPropertyType}
                onChange={(e) => setSelectedPropertyType(e.target.value)}
                className={`${FIELD} cursor-pointer`}
              >
                <option value="all">All categories</option>
                <option value="Open Plots">Open plots &amp; villa plots</option>
                <option value="Apartments">Apartments</option>
                <option value="Villas">Luxury villas</option>
                <option value="Dubai Apartments">Dubai properties</option>
              </select>
            </div>

            <div>
              <label htmlFor="filter-status" className={LABEL}>Stage</label>
              <select
                id="filter-status"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className={`${FIELD} cursor-pointer`}
              >
                <option value="all">All stages</option>
                <option value="Ready for Construction">Ready for construction</option>
                <option value="Under Construction">Under construction</option>
              </select>
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-4 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <label htmlFor="filter-budget" className="shrink-0 text-[14px] text-[#B0B8C4]">
                Max budget
              </label>
              <input
                id="filter-budget"
                type="range"
                min="3000000"
                max="120000000"
                step="1000000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="h-1 w-48 cursor-pointer accent-[#0B192C]"
              />
              <output htmlFor="filter-budget" className="font-heading text-base text-[#FBFBFD] figures">
                ₹{(maxPrice / 10000000).toFixed(2)} Cr
              </output>
            </div>

            <div className="flex items-center gap-5">
              <p className="text-[13px] text-[#B0B8C4] figures" aria-live="polite">
                Showing {filteredProjects.length} of {projects.length}
              </p>
              {isFiltered && (
                <button
                  onClick={resetFilters}
                  className="min-h-11 text-[14px] text-[#FBFBFD] underline decoration-2 underline-offset-4"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section aria-labelledby="results-heading" className="page-section pt-12">
        <div className="shell">
          <h2 id="results-heading" className="sr-only">Properties</h2>

          {filteredProjects.length === 0 ? (
            <div className="py-20 text-center">
              <p className="label label-gold">No match</p>
              <h3 className="mt-4 display-md text-[#FBFBFD]">Nothing in the register matches those filters</h3>
              <p className="mx-auto mt-3 max-w-[46ch] text-[15px] leading-relaxed text-[#B0B8C4]">
                Widen the budget or corridor, or ask the desk — some allotments are released before
                they are published here.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <button onClick={resetFilters} className="btn-primary">Clear all filters</button>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Setty Relators. Please share availability outside the published register.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-quiet"
                >
                  Ask the desk
                </a>
              </div>
            </div>
          ) : (
            <ul className="space-y-8">
              {filteredProjects.map((proj) => (
                <li key={proj.id} data-reveal className="bg-[#11233D]">
                  <article className="grid gap-6 py-8 lg:grid-cols-12 lg:gap-8">
                    <div className="lg:col-span-4">
                      <button
                        onClick={() => {
                          if (proj.id === 'project-purva-sounds-of-water-villa') {
                            setActivePage('purva-villa');
                            return;
                          }
                          if (setSelectedProjectId) setSelectedProjectId(proj.id);
                          if (setActivePage) setActivePage('project-details', 'all', proj.id);
                        }}
                        className="frame block w-full text-left"
                        aria-label={`View ${proj.title}`}
                      >
                        <img
                          src={proj.heroImage}
                          alt={proj.title}
                          width={800}
                          height={520}
                          loading="lazy"
                          decoding="async"
                          className="h-56 w-full object-cover sm:h-64 lg:h-52"
                        />
                      </button>
                    </div>

                    <div className="lg:col-span-5">
                      <p className="label label-gold">
                        {proj.propertyType}{proj.groupName ? ` · ${proj.groupName}` : ''}
                      </p>
                      <h3 className="mt-2 font-heading text-xl leading-snug text-[#FBFBFD] sm:text-2xl">
                        {proj.title}
                      </h3>
                      <p className="mt-2 flex items-start gap-2 text-[16px] leading-relaxed text-[#B0B8C4]">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF37]" aria-hidden="true" />
                        {proj.location}
                      </p>
                      <p className="measure mt-4 text-[17px] leading-relaxed text-[#C5C6CD] line-clamp-3">
                        {proj.overview}
                      </p>

                      <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-3 text-[13px]">
                        <div>
                          <dt className="label">Configurations</dt>
                          <dd className="mt-1 text-[#C5C6CD]">
                            {(proj.dimensions || []).slice(0, 3).join(' · ') || 'On request'}
                          </dd>
                        </div>
                        <div>
                          <dt className="label">Listed</dt>
                          <dd className="mt-1 text-[#C5C6CD] figures">{proj.availablePlots} plots</dd>
                        </div>
                        <div>
                          <dt className="label">Stage</dt>
                          <dd className="mt-1 text-[#C5C6CD]">{proj.constructionStatus || 'On request'}</dd>
                        </div>
                      </dl>
                    </div>

                    <div className="flex flex-col justify-between gap-5 pt-5 lg:col-span-3 lg:pl-8 lg:pt-0">
                      <div>
                        <p className="label">Price</p>
                        <p className="mt-1 font-heading text-lg leading-snug text-[#FBFBFD] figures">
                          {proj.priceRange}
                        </p>
                        <p className="mt-2 text-[13px] leading-relaxed text-[#B0B8C4]">
                          Developer or seller quote. Confirm before booking.
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <button onClick={() => openSiteVisitModal(proj)} className="btn-gold flex-1 px-4 py-3">
                          Book visit
                        </button>
                        <a
                          href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(`Hello Setty Relators. Please send the masterplan and current pricing for ${proj.title}.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Message the desk about ${proj.title}`}
                          className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#11233D] text-[#FBFBFD] transition-colors hover:bg-[#D4AF37] hover:text-[#0B192C]"
                        >
                          <MessageCircle className="h-4 w-4" aria-hidden="true" />
                        </a>
                      </div>

                      <button
                        onClick={() => {
                          if (proj.id === 'project-purva-sounds-of-water-villa') {
                            setActivePage('purva-villa');
                            return;
                          }
                          if (setSelectedProjectId) setSelectedProjectId(proj.id);
                          if (setActivePage) setActivePage('project-details', 'all', proj.id);
                        }}
                        className="flex min-h-11 items-center gap-2 text-left text-[14px] text-[#FBFBFD] underline decoration-2 underline-offset-4"
                      >
                        Full details
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Advisory close */}
      <section className="section-navy on-ink">
        <div className="shell grid items-center gap-8 py-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="display-lg text-white">Need the paperwork checked?</h2>
            <p className="mt-3 max-w-[54ch] text-[17px] leading-relaxed text-white/70">
              The desk verifies title clearance, the approval record and bank approvals for every
              project in the register, and will send the documents for the plots you are considering.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
            <button onClick={() => setActivePage('contact')} className="btn-gold">
              Speak to an advisor
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
