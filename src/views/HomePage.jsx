'use client';

import React, { useState } from 'react';
import {
  Search, MapPin, ShieldCheck, TrendingUp, Calendar, ArrowRight, Star, Award,
  CheckCircle2, ChevronRight, PhoneCall, MessageCircle, Navigation,
  Building2, Globe, Layers, Eye, Grid, ExternalLink, Download, Phone, Home,
  Building, Compass, Check, ChevronDown
} from 'lucide-react';
import { usePlots } from '../context/PlotsContext';
import ROICalculator from '../components/ROICalculator';
import InteractiveMap from '../components/InteractiveMap';
import { FEATURED_GROUPS } from '../data/plotsData';

export default function HomePage({ setActivePage, setSelectedProjectId }) {
  const { projects, openSiteVisitModal } = usePlots();
  const [selectedGroupFilter, setSelectedGroupFilter] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const whatsappNumber = '918431909508';
  const displayPhone = '+91 84319 09508';

  const faqItems = [
    {
      q: "What does the seller advertise for the Purva Symphony resale villa?",
      a: "The seller advertises an individual five-bedroom resale unit at Purva Symphony, The Sound of Water, and currently quotes ₹9.0 Cr. The seller also reports 5,000 sq.ft of land and 7,000 sq.ft built-up area. Puravankara describes the wider community as offering 3- and 4-BHK residences; verify this unit’s sanctioned plan, measurements, features, price and availability against original documents."
    },
    {
      q: "Where is Purva Symphony at The Sound of Water located?",
      a: "Puravankara describes the community as off Bannerghatta Road, Bengaluru. Confirm the exact unit location, current travel routes and BMRCL metro status before relying on distances or journey times."
    },
    {
      q: "What are the best locations to buy residential plots in Bengaluru in 2026?",
      a: "The top high-appreciation corridors in Bengaluru are North Bengaluru (Devanahalli Airport Corridor & STRR Satellite Town Ring Road), Chikkaballapura Nandi Hills belt, and South Bengaluru (Bannerghatta Road & NICE Corridor), delivering 18% to 22% average YoY appreciation."
    },
    {
      q: "Are the plots and villas verified with RERA and BIAAPA approvals?",
      a: "Yes. 100% of plotted layouts and villa projects represented by Lakshie Real Estate are thoroughly legally vetted with RERA Karnataka registration, BIAAPA/BMRDA town planning approvals, clear marketable titles, and A-Khata ownership."
    },
    {
      q: "Why is there zero brokerage on plot and villa purchases through Lakshie Real Estate?",
      a: "As an authorized direct Channel Partner for premier developers including Puravankara Limited, Oriaiyan Group, and Tripon Groups, all client advisory, documentation support, and VIP site visit arrangements are completely free with 0% brokerage to buyers."
    },
    {
      q: "How does the complimentary VIP site visit work?",
      a: "You can schedule a private site inspection online or via WhatsApp (+91 84319 09508). We arrange complimentary chauffeured doorstep cab pickup, an on-site guided tour with masterplan blueprints, and direct developer pricing negotiation."
    },
    {
      q: "Can Indian citizens invest in Dubai properties through Lakshie Real Estate?",
      a: "Yes. Under the RBI Liberalised Remittance Scheme (LRS), Indian residents can legally invest up to $250,000 USD per financial year in Dubai waterfront real estate, enjoying 8-10% tax-free rental yields and 10-Year UAE Golden Visa residency eligibility."
    }
  ];

  const categoryCards = [
    { id: 'plots', title: 'Open Plots', icon: MapPin, desc: 'Oriaiyan and Sun Valley plotted communities', count: '500+ plots', href: '/plots-in-bangalore' },
    { id: 'villa-plots', title: 'Villa Plots', icon: Layers, desc: 'Estate plots up to 4,499 sq.ft by Oriaiyan Group', count: 'Up to 4,499 sq.ft', href: '/plots-in-bangalore' },
    { id: 'villas', title: 'Luxury Villas', icon: Home, desc: 'Tripon Nandi Hills and a Purva Symphony resale', count: 'Bengaluru', href: '/luxury-villas-bangalore' },
    { id: 'apartments', title: 'Apartments', icon: Building2, desc: 'Vinra KBR and Tripon Aero Gardens', count: '570+ units', href: '/?page=apartments' },
    { id: 'dubai', title: 'Dubai Properties', icon: Globe, desc: 'Dubai waterfront investment listings', count: 'Dubai', href: '/?page=dubai' }
  ];

  const filteredProjects = projects.filter((p) => {
    const matchesGroup = selectedGroupFilter === 'all' || p.groupName?.toLowerCase().includes(selectedGroupFilter.toLowerCase());
    const matchesCategory = selectedCategory === 'all' ||
      (selectedCategory === 'plots' && (p.propertyType === 'Open Plots' || p.propertyType === 'Villa Plots' || p.title?.toLowerCase().includes('plot'))) ||
      (selectedCategory === 'villa-plots' && (p.propertyType === 'Open Plots' || p.propertyType === 'Villa Plots' || p.title?.toLowerCase().includes('villa plot') || p.overview?.toLowerCase().includes('villa plot'))) ||
      (selectedCategory === 'villas' && (p.propertyType === 'Villas' || p.title?.toLowerCase().includes('villa'))) ||
      (selectedCategory === 'apartments' && p.propertyType === 'Apartments') ||
      (selectedCategory === 'dubai' && p.propertyType === 'Dubai Apartments');
    return matchesGroup && matchesCategory;
  });

  const whyChooseUsPoints = [
    'Direct Developer Allocation & Pricing',
    '100% Verified RERA, BDA, BIAPPA & CUDDA Clear Titles',
    'Puravankara, Oriaiyan Group, Tripon, Vinra & D1 Authorized Channel Partner',
    'Complimentary VIP Site Visit with Guided Chauffeur',
    'Complete Legal Documentation & Title Verification Support',
    'End-to-End Home & Plot Bank Loan Approvals (SBI, HDFC, ICICI)'
  ];

  return (
    <div className="space-y-0 pb-0 bg-[#F8F8F5]">
      
      {/* 1. LUXURY HOMEPAGE HERO WITH ARCHITECTURAL CAD GRID */}
      <section className="relative bg-[#0B1F3A] text-white overflow-hidden cad-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-14 sm:py-20 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.82fr)] lg:gap-16">

            {/* Left: the claim and the first action */}
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-[2.1rem] sm:text-5xl lg:text-[4.5rem] font-black tracking-tight leading-[1.02] font-heading hero-settle">
                Verified properties in <span className="text-[#C8A34D]">Bengaluru and Dubai</span>
              </h1>

              <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Plots, villas and apartments from developers we represent directly, plus a seller-listed resale at Purva Symphony. Every listing is checked for approval and title before it reaches you.
              </p>

              <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start">
                <button
                  onClick={() => setActivePage('projects')}
                  className="btn-gold py-4 px-7 flex items-center gap-2 cursor-pointer text-sm"
                >
                  <span>Browse all properties</span>
                  <ArrowRight className="w-4 h-4 text-[#0B1F3A]" aria-hidden="true" />
                </button>

                <button
                  onClick={() => openSiteVisitModal()}
                  className="py-4 px-6 rounded-lg border border-white/25 hover:border-[#C8A34D] hover:text-[#C8A34D] text-white text-sm font-semibold transition-colors cursor-pointer"
                >
                  Book a site visit
                </button>
              </div>

              <a
                href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent('Hello Lakshie Real Estate! I would like details on Oriaiyan Plots, Tripon Groups, Vinra KBR, and Sun Valley developments.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#C8A34D] hover:text-white transition-colors font-semibold"
              >
                <MessageCircle className="w-4 h-4 text-[#C8A34D]" aria-hidden="true" />
                <span>Or message the advisory desk on {displayPhone}</span>
              </a>

              <ul className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 pt-2 text-sm text-white/75">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C8A34D] shrink-0" aria-hidden="true" />
                  RERA and BIAAPA checked
                </li>
                <li className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#C8A34D] shrink-0" aria-hidden="true" />
                  Zero brokerage to buyers
                </li>
                <li className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#C8A34D] shrink-0" aria-hidden="true" />
                  Chauffeured site tours
                </li>
              </ul>
            </div>

            {/* Right: one property photograph, with the price fact set on it */}
            <div className="relative hero-settle hero-settle-delay">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/images/purva-sounds-of-water/purva-villas-community.jpeg"
                  alt="Villa residences and landscaped gardens at Purva Symphony, off Bannerghatta Road"
                  width={1200}
                  height={1400}
                  fetchPriority="high"
                  className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[560px]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-[#0B1F3A] px-5 py-4 sm:px-6 sm:py-5">
                  <p className="font-heading text-xl font-bold text-white sm:text-2xl">
                    Purva Symphony resale, <span className="text-[#C8A34D] tabular-nums">₹9.0 Cr</span>
                  </p>
                </div>
              </div>
              <p className="mt-3 text-sm text-white/60">
                Five-bedroom resale unit. Confirm configuration, measurements and availability with the advisor.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 2. PROPERTY CATEGORIES AS ONE INDEX BAND */}
      <section className="bg-white">
        <h2 className="sr-only">Property categories</h2>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="grid grid-cols-1 divide-y divide-[#0B1F3A]/10 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-5">
            {categoryCards.map((cat) => (
              <li key={cat.id} className="sm:border-r sm:border-[#0B1F3A]/10 sm:last:border-r-0">
                <a
                  href={cat.href}
                  onClick={(e) => {
                    if (cat.href.startsWith('/?')) {
                      e.preventDefault();
                      if (cat.id === 'dubai') {
                        setActivePage('dubai');
                      } else if (cat.id === 'apartments') {
                        setActivePage('apartments');
                      } else {
                        setActivePage('projects');
                      }
                    }
                  }}
                  className="group flex h-full flex-col gap-1 px-4 py-6 no-underline transition-colors hover:bg-[#F8F8F5] lg:px-6"
                >
                  <span className="flex items-center gap-2 font-heading text-lg font-bold text-[#0B1F3A] transition-colors group-hover:text-[#7A5C10]">
                    <cat.icon className="h-4 w-4 shrink-0 text-[#C8A34D]" aria-hidden="true" />
                    {cat.title}
                  </span>
                  <span className="text-sm leading-relaxed text-[#555555]">{cat.desc}</span>
                  <span className="mt-1 text-sm font-semibold text-[#0B1F3A] tabular-nums">{cat.count}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 2. FEATURED PROJECTS PORTFOLIO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight font-heading">
              Featured Available Developments
            </h2>
            <div className="divider-gold mt-3" />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Categories' },
              { id: 'plots', label: 'Open Plots' },
              { id: 'villa-plots', label: 'Villa Plots' },
              { id: 'villas', label: 'Luxury Villas' },
              { id: 'apartments', label: 'Apartments' },
              { id: 'dubai', label: 'Dubai' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'bg-[#0B1F3A] text-[#C8A34D] border border-[#C8A34D]/40'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div key={proj.id} className="rounded-2xl overflow-hidden flex flex-col justify-between group bg-white border border-slate-200 transition-colors hover:border-[#C8A34D]">
              <div>
                <div className="relative h-64 overflow-hidden bg-[#0B1F3A]">
                  <img src={proj.heroImage} alt={proj.title} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />

                  {/* Flat band carries the price: no scrim, no floating chips. */}
                  <div className="absolute inset-x-0 bottom-0 bg-[#0B1F3A] px-5 py-4 text-white">
                    <p className="text-sm font-semibold text-[#C8A34D]">
                      {proj.propertyType}{proj.groupName ? ` · ${proj.groupName}` : ''}
                    </p>
                    <p className="mt-1 font-heading text-lg font-bold tabular-nums">{proj.priceRange}</p>
                  </div>
                </div>

                <div className="space-y-4 p-6">
                  <div>
                    <h3 className="font-heading text-xl font-bold leading-snug text-[#0B1F3A]">
                      {proj.title}
                    </h3>
                    <div className="mt-2 flex items-center gap-2 text-sm text-[#555555]">
                      <MapPin className="h-4 w-4 shrink-0 text-[#7A5C10]" aria-hidden="true" />
                      <span className="line-clamp-2">{proj.location}</span>
                    </div>
                  </div>

                  <p className="line-clamp-3 text-base leading-relaxed text-[#555555]">
                    {proj.overview}
                  </p>

                  {/* Dimension Pills */}
                  <div className="space-y-2 pt-2">
                    <span className="text-sm font-semibold text-[#0B1F3A]">Configurations</span>
                    <div className="flex flex-wrap gap-2">
                      {proj.dimensions?.slice(0, 3).map((dim, idx) => (
                        <span key={idx} className="rounded bg-[#F8F8F5] px-3 py-1.5 text-sm text-slate-700">
                          {dim}
                        </span>
                      ))}
                      {(proj.dimensions?.length || 0) > 3 && (
                        <span className="rounded bg-[#0B1F3A]/5 px-3 py-1.5 text-sm font-semibold text-[#0B1F3A]">
                          +{proj.dimensions.length - 3} more
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-[#0B1F3A]">{proj.availablePlots} available</p>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  {proj.id === 'project-purva-sounds-of-water-villa' ? (
                    <a
                      href="/purva-sounds-of-water"
                      className="py-2.5 px-3 rounded-lg border border-[#0B1F3A]/20 hover:border-[#0B1F3A] text-[#0B1F3A] text-xs font-bold text-center transition-colors block"
                    >
                      View Villa Page
                    </a>
                  ) : (
                    <button
                      onClick={() => {
                        setSelectedProjectId(proj.id);
                        setActivePage('project-details');
                      }}
                      className="py-3 px-3 rounded-lg border border-[#0B1F3A]/20 hover:border-[#0B1F3A] text-[#0B1F3A] text-sm font-bold text-center transition-colors cursor-pointer"
                    >
                      View details
                    </button>
                  )}

                  <button
                    onClick={() => openSiteVisitModal(proj)}
                    className="btn-gold py-3 px-3 text-sm text-center cursor-pointer"
                  >
                    Book visit
                  </button>
                </div>

                <a
                  href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(`Hello! I would like masterplan PDF and pricing details for ${proj.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`WhatsApp Brochure for ${proj.title}`}
                  className="w-full py-2.5 px-3 rounded-lg bg-[#0B1F3A] hover:bg-[#142E54] text-[#C8A34D] text-sm font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#C8A34D]" aria-hidden="true" />
                  <span>WhatsApp brochure</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. INTERACTIVE ROI CALCULATOR & MAP */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] font-heading">
              What a plot could be worth
            </h2>
            <p className="text-sm text-[#555555]">
              Estimate your plot or property return on investment across Kolar, Chikkaballapura, Airport corridor, Jigani, Tumkur Road, and Dubai.
            </p>
            <div className="divider-gold mx-auto" />
          </div>

          <ROICalculator />
          <InteractiveMap onSelectCorridor={() => setActivePage('projects')} />
        </div>
      </section>

      {/* 6. WHY CHOOSE LAKSHIE REAL ESTATE */}
      <section className="bg-[#0B1F3A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
                Why buyers work with us
              </h2>
              <p className="text-base text-white/75 leading-relaxed max-w-md">
                We represent the developer directly, so the price you see is the allocation price, the paperwork is verified before you sign, and the site visit is arranged around your schedule.
              </p>
            </div>

            <ul className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {whyChooseUsPoints.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#C8A34D]" aria-hidden="true" />
                  <span className="text-base leading-relaxed text-white/90">{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Banner */}
          <div className="rounded-lg border border-[#C8A34D]/40 bg-[#142E54] px-6 py-8 sm:px-10 sm:py-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-2 max-w-xl">
              <h3 className="text-2xl sm:text-3xl font-black text-white font-heading leading-tight">
                Looking for a specific plot size or villa layout?
              </h3>
              <p className="text-base text-white/80 leading-relaxed">
                Tell our property advisors your preferred corridor and budget, and we will match you with verified developer allotments.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => setActivePage('matchmaker')}
                className="btn-gold py-3.5 px-6 text-sm cursor-pointer"
              >
                Open the property finder
              </button>
              <button
                onClick={() => openSiteVisitModal()}
                className="py-3.5 px-6 rounded-lg border border-white/30 hover:border-white text-white font-semibold text-sm transition-colors cursor-pointer"
              >
                Schedule a tour
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS (AEO & GEO VERIFIED) */}
      <section className="bg-[#F8F8F5] py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] font-heading">
              Frequently Asked Questions & Advisory Insights
            </h2>
            <p className="text-sm sm:text-base text-[#555555] max-w-2xl mx-auto">
              Direct, verified answers to common questions regarding RERA clearance, high-growth corridors, zero brokerage, and VIP site visits.
            </p>
            <div className="divider-gold mx-auto" />
          </div>

          <div className="space-y-4">
            {faqItems.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/60 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <h3 className="text-base sm:text-lg font-bold text-[#0B1F3A] font-heading pr-2">
                      {item.q}
                    </h3>
                    <div className={`w-8 h-8 rounded-full bg-[#0B1F3A]/5 flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#C8A34D]/20 text-[#0B1F3A]' : 'text-slate-500'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/30">
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Need more answers */}
          <div className="text-center pt-4">
            <p className="text-sm text-slate-700 mb-3">
              Have a specific legal, title, or project configuration query?
            </p>
            <a
              href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent('Hello Lakshie Real Estate! I have a question regarding plot approval and title verification.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B1F3A] bg-[#C8A34D]/20 hover:bg-[#C8A34D]/30 border border-[#C8A34D]/60 px-5 py-2.5 rounded-xl transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#0B1F3A]" />
              <span>Ask Our Advisory Team on WhatsApp</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
