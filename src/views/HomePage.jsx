'use client';

import React, { useState } from 'react';
import {
  Search, MapPin, ShieldCheck, TrendingUp, Calendar, ArrowRight, Star, Award,
  CheckCircle2, ChevronRight, PhoneCall, Sparkles, MessageCircle, Navigation,
  Building2, Globe, Layers, Eye, Grid, ExternalLink, Download, Phone, Home,
  Building, Compass, Check, ChevronDown, HelpCircle
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
      q: "What are the specifications, price, and dimensions of the 5 BHK luxury villa in Purva Sounds of Water?",
      a: "The exclusive A+ Type villa at Purva Sounds of Water on Bannerghatta Road is priced at ₹9.0 Cr (negotiable with 0% brokerage). It is built on a 5,000 sq.ft land parcel with 7,000 sq.ft built-up area across multiple levels, featuring 5 bedrooms, 6 bathrooms, 2 spacious family halls, an approx. 2,200 sq.ft private garden, private swimming pool, home theatre/gym space, independent outhouse cottage, and handcrafted furniture."
    },
    {
      q: "Where is Purva Sounds of Water located and what is the nearest metro station?",
      a: "Purva Sounds of Water is situated off Bannerghatta Main Road in South Bengaluru, approximately 5 minutes from Royal Meenakshi Mall and the proposed Pink Line Metro (Kalena Agrahara / Gottigere station), with rapid 8-minute connectivity to the NICE Ring Road."
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
    { id: 'plots', title: 'Open Plots', icon: '🏞', desc: 'Oriaiyan & Sun Valley Verified Plotted Communities', count: '500+ Plots', href: '/plots-in-bangalore' },
    { id: 'villa-plots', title: 'Villa Plots', icon: '📐', desc: 'Up to 4,499 sq.ft Grand Estates by Oriaiyan Group', count: '4499 Sq.Ft', href: '/plots-in-bangalore' },
    { id: 'villas', title: 'Luxury Villas', icon: '🏡', desc: 'Purva Sounds of Water (5 BHK) & Tripon Nandi Estates', count: 'Tier-1 Luxury', href: '/luxury-villas-bangalore' },
    { id: 'apartments', title: 'Apartments', icon: '🏢', desc: 'Vinra KBR & Tripon Aero Gardens Airport Towers', count: '570+ Units', href: '/?page=apartments' },
    { id: 'dubai', title: 'Dubai Properties', icon: '🌍', desc: 'Tax-Free 8-10% USD Yields & UAE 10-Yr Golden Visa', count: 'Exclusive', href: '/?page=dubai' }
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
      <section className="relative pt-12 sm:pt-20 pb-28 bg-[#0B1F3A] text-white overflow-hidden border-b border-[#C8A34D]/25 cad-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1F3A]/60 to-[#0B1F3A] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 text-center sm:text-left">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C8A34D]/20 border border-[#C8A34D]/50 text-[#C8A34D] text-xs font-extrabold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4 text-[#C8A34D]" />
            Authorized Real Estate Consultancy & Channel Partner
          </div>

          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] font-heading">
              Verified Properties Across <span className="gold-gradient-text">Bengaluru & Dubai</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#C8A34D] font-semibold tracking-wide font-heading">
              Purva Sounds of Water • Oriaiyan Plotted Enclaves • Tripon Villas & Apartments • Vinra KBR • Dubai Luxury
            </p>
          </div>

          <p className="text-base sm:text-lg text-white/80 max-w-3xl font-light leading-relaxed">
            Direct developer inventory with zero brokerage to buyers. Explore Purva Sounds of Water 5 BHK luxury villa on Bannerghatta Road, Oriaiyan Group signature plots up to 4,499 sq.ft across 6 growth corridors, Tripon Aero Gardens 5 mins from the Airport, Nandi luxury villas, Vinra KBR twin-corridor apartments, and tax-free Dubai waterfront investments.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2 justify-center sm:justify-start">
            <button
              onClick={() => setActivePage('projects')}
              className="btn-gold py-4 px-8 shadow-2xl flex items-center gap-2 cursor-pointer text-xs uppercase font-extrabold"
            >
              <span>Explore All Projects</span>
              <ArrowRight className="w-4 h-4 text-[#0B1F3A]" />
            </button>

            <button
              onClick={() => openSiteVisitModal()}
              className="btn-primary py-4 px-8 border border-white/20 hover:border-[#C8A34D] cursor-pointer text-xs uppercase font-bold"
            >
              Book Site Visit
            </button>

            <a
              href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent('Hello Lakshie Real Estate! I would like details on Oriaiyan Plots, Tripon Groups, Vinra KBR, and Sun Valley developments.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-6 rounded-lg bg-white/10 hover:bg-white/15 border border-[#C8A34D]/40 text-[#C8A34D] text-xs font-bold flex items-center gap-2 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#C8A34D]" />
              <span>WhatsApp: {displayPhone}</span>
            </a>
          </div>

          {/* Value Assurance Badges */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-4 text-xs font-bold text-[#C8A34D]">
            <span className="flex items-center gap-1.5 bg-white/5 py-1 px-3.5 rounded-full border border-white/10">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C8A34D]" />
              100% RERA & BIAAPA Cleared
            </span>
            <span className="flex items-center gap-1.5 bg-white/5 py-1 px-3.5 rounded-full border border-white/10">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              0% Brokerage (Direct Channel Partner)
            </span>
            <span className="flex items-center gap-1.5 bg-white/5 py-1 px-3.5 rounded-full border border-white/10">
              <Calendar className="w-3.5 h-3.5 text-[#C8A34D]" />
              VIP Guided Site Tours
            </span>
          </div>

        </div>
      </section>

      {/* 2. PROPERTY CATEGORIES SEPARATE CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <h2 className="sr-only">Property Categories & Verified Asset Portfolios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {categoryCards.map((cat) => (
            <a
              key={cat.id}
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
              className="glass-card tactile-card p-6 text-left space-y-3 group border border-slate-200 hover:border-[#C8A34D] cursor-pointer bg-white block no-underline"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0B1F3A]/5 group-hover:bg-[#0B1F3A] flex items-center justify-center text-2xl transition-colors">
                {cat.icon}
              </div>
              <div>
                <h3 className="text-base font-extrabold text-[#0B1F3A] font-heading group-hover:text-[#C8A34D] transition-colors">{cat.title}</h3>
                <span className="text-[10px] text-[#7A5C10] font-black block mt-0.5">{cat.count}</span>
              </div>
              <p className="text-[11px] text-[#555555] leading-relaxed">{cat.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* 2. FEATURED PROJECTS PORTFOLIO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1F3A]/8 border border-[#0B1F3A]/15 text-[#0B1F3A] text-xs font-bold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5 text-[#C8A34D]" />
              Verified Project Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight font-heading">
              Featured Available Developments
            </h2>
            <div className="divider-gold mt-3" />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Categories' },
              { id: 'plots', label: '🏞 Open Plots' },
              { id: 'villa-plots', label: '📐 Villa Plots' },
              { id: 'villas', label: '🏡 Luxury Villas' },
              { id: 'apartments', label: '🏢 Apartments' },
              { id: 'dubai', label: '🌍 Dubai' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'bg-[#0B1F3A] text-[#C8A34D] shadow-sm border border-[#C8A34D]/40'
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
            <div key={proj.id} className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group bg-white border border-slate-200 hover:border-[#C8A34D] transition-all">
              <div>
                <div className="relative h-60 overflow-hidden bg-[#0B1F3A]">
                  <img src={proj.heroImage} alt={proj.title} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-transparent" />
                  
                  {/* Property Type Badge */}
                  <span className="absolute top-4 left-4 bg-[#0B1F3A]/90 backdrop-blur-md text-[#C8A34D] border border-[#C8A34D]/40 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                    {proj.propertyType}
                  </span>

                  {/* Group Name Badge */}
                  {proj.groupName && (
                    <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-[#0B1F3A] px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                      {proj.groupName}
                    </span>
                  )}

                  {/* Price Tag Overlay */}
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

                  {/* Dimension Pills */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <span className="text-[10px] font-bold text-slate-600 uppercase">Available Configurations:</span>
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
                      className="py-2.5 px-3 rounded-lg border border-[#0B1F3A]/20 hover:border-[#0B1F3A] text-[#0B1F3A] text-xs font-bold text-center transition-colors cursor-pointer"
                    >
                      View Details
                    </button>
                  )}

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
                  aria-label={`WhatsApp Brochure for ${proj.title}`}
                  className="w-full py-2 px-3 rounded-lg bg-[#0B1F3A] hover:bg-[#142E54] text-[#C8A34D] text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#C8A34D]" />
                  <span>WhatsApp Brochure</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. INTERACTIVE ROI CALCULATOR & MAP */}
      <section className="bg-white py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] font-heading">
              Calculate Investment Appreciation Across Corridors
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
      <section className="bg-[#0B1F3A] text-white py-20 border-t border-[#C8A34D]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C8A34D]/20 border border-[#C8A34D]/50 text-[#C8A34D] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#C8A34D]" />
              Direct Channel Partner Assurance
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              Why Invest Through Lakshie Real Estate?
            </h2>
            <div className="divider-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUsPoints.map((pt, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#C8A34D]/20 flex items-center justify-center shrink-0 text-[#C8A34D] font-black text-sm">
                  ✓
                </div>
                <p className="text-sm font-semibold text-white/90 leading-relaxed pt-1">
                  {pt}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-[#142E54] via-[#0B1F3A] to-[#142E54] border border-[#C8A34D]/40 text-center space-y-6">
            <h3 className="text-2xl sm:text-3xl font-black text-white font-heading">
              Looking for a Specific Plot Dimension or Villa Configuration?
            </h3>
            <p className="text-sm text-white/80 max-w-2xl mx-auto">
              Tell our property advisors your preferred corridor and budget. We will match you directly with verified developer allotments.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => setActivePage('matchmaker')}
                className="btn-gold py-3.5 px-8 font-extrabold text-xs uppercase cursor-pointer"
              >
                Launch Smart Property Finder
              </button>
              <button
                onClick={() => openSiteVisitModal()}
                className="py-3.5 px-8 rounded-lg bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs uppercase transition-all cursor-pointer"
              >
                Schedule Free Site Tour
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS (AEO & GEO VERIFIED) */}
      <section className="bg-[#F8F8F5] py-20 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1F3A]/5 border border-[#0B1F3A]/15 text-[#0B1F3A] text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-4 h-4 text-[#C8A34D]" />
              Property Advisory Knowledge Hub
            </div>
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
                  className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden transition-all duration-200"
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
