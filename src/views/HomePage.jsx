'use client';

import React, { useState } from 'react';
import {
  Search, MapPin, ShieldCheck, TrendingUp, Calendar, ArrowRight, Star, Award,
  CheckCircle2, ChevronRight, PhoneCall, Sparkles, MessageCircle, Navigation,
  Building2, Globe, Layers, Eye, Grid, ExternalLink, Download, Phone, Home, Paintbrush
} from 'lucide-react';
import { usePlots } from '../context/PlotsContext';
import ROICalculator from '../components/ROICalculator';
import InteractiveMap from '../components/InteractiveMap';

export default function HomePage({ setActivePage, setSelectedProjectId }) {
  const { projects, reviews, blogs } = usePlots();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCorridor, setSelectedCorridor] = useState('all');
  const [viewModes, setViewModes] = useState({});

  const whatsappNumber = '918431909508';
  const displayPhone = '+91 84319 09508';

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

  const categoryCards = [
    { id: 'plots', title: 'Open Plots', icon: '🏞', desc: 'BIAPPA & STRR Highway Verified Residential Plot Layouts', count: '254+ Plots' },
    { id: 'villas', title: 'Villas', icon: '🏡', desc: '5-Acre Gated Custom Villa Communities (Vinra Alora)', count: '78+ Villas' },
    { id: 'apartments', title: 'Apartments', icon: '🏢', desc: 'High-Rise Master Townships (Prestige & Sobha)', count: '450+ Units' },
    { id: 'dubai', title: 'Dubai Apartments', icon: '🌍', desc: 'Waterfront Investments with 8-10% Tax-Free Yields & Golden Visa', count: 'Exclusive' },
    { id: 'interior', title: 'Interior Design', icon: '🎨', desc: 'Turnkey Construction & Interiors (Silver, Gold, Platinum)', count: 'Custom' }
  ];

  const whyChooseUsPoints = [
    'Multiple Trusted Developers',
    'Verified Projects',
    'Expert Property Guidance',
    'Site Visit Assistance',
    'Documentation Support',
    'Investment Consultation',
    'Transparent Process'
  ];

  return (
    <div className="space-y-0 pb-0 bg-[#F8F8F5]">
      
      {/* 1. LUXURY HOMEPAGE HERO */}
      <section className="relative pt-12 sm:pt-20 pb-28 bg-[#0B1F3A] text-white overflow-hidden border-b border-[#C8A34D]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 text-center sm:text-left">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C8A34D]/20 border border-[#C8A34D]/40 text-[#C8A34D] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#C8A34D]" />
            Independent Real Estate Consultancy & Channel Partner
          </div>

          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] font-heading">
              Find Premium Properties Across <span className="gold-gradient-text">Bengaluru & Dubai</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#C8A34D] font-semibold tracking-wide font-heading">
              Plots • Villas • Apartments • Interior Design • Dubai Investments
            </p>
          </div>

          <p className="text-base sm:text-lg text-white/80 max-w-2xl font-light leading-relaxed">
            Compare verified open plots, custom luxury villa layouts, high-rise apartments, and Dubai waterfront investments with 0% brokerage to buyers.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => setActivePage('projects')}
              className="btn-gold py-4 px-8"
            >
              Explore Projects
            </button>

            <button
              onClick={() => setActivePage('contact')}
              className="btn-primary py-4 px-8 border border-white/20"
            >
              Book Site Visit
            </button>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi! I want details on plots, villas, apartments & Dubai properties.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold transition-all flex items-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              WhatsApp ({displayPhone})
            </a>
          </div>

        </div>
      </section>

      {/* 2. SEPARATE PROPERTY CATEGORY CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {categoryCards.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActivePage(cat.id)}
              className="glass-card p-6 text-left space-y-3 group hover:border-[#C8A34D] cursor-pointer"
            >
              <div className="text-3xl">{cat.icon}</div>
              <div>
                <h3 className="text-base font-bold text-[#0B1F3A] font-heading group-hover:text-[#C8A34D] transition-colors">{cat.title}</h3>
                <span className="text-[10px] text-[#C8A34D] font-extrabold block mt-0.5">{cat.count}</span>
              </div>
              <p className="text-[11px] text-[#555555] leading-relaxed">{cat.desc}</p>
            </button>
          ))}
        </div>
      </section>

      {/* 3. FEATURED PROJECTS PORTFOLIO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1F3A]/8 border border-[#0B1F3A]/15 text-[#0B1F3A] text-xs font-bold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5 text-[#C8A34D]" />
              Verified Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight font-heading">
              Featured Verified Projects
            </h2>
            <div className="divider-gold mt-3" />
          </div>

          <button
            onClick={() => setActivePage('projects')}
            className="text-[#C8A34D] hover:text-[#0B1F3A] text-xs font-bold flex items-center gap-1 transition-colors"
          >
            <span>View All ({filteredProjects.length})</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Featured Cards Grid */}
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
                    <span className="text-[11px] text-[#C8A34D] font-bold block uppercase">📍 {proj.location}</span>
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

                  <div className="bg-[#F8F8F5] p-3 rounded-xl border border-[#0B1F3A]/10 flex justify-between items-center text-xs">
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
                  className="btn-primary py-2.5 px-2 text-[11px] text-center"
                >
                  View Details
                </button>

                <button
                  onClick={() => setActivePage('contact')}
                  className="btn-primary bg-white text-[#0B1F3A] border border-[#0B1F3A]/20 hover:bg-[#F8F8F5] py-2.5 px-2 text-[11px] text-center font-bold"
                >
                  Book Visit
                </button>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi! I want details on ${proj.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold py-2.5 px-2 text-[11px] text-center flex items-center justify-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-[#0B1F3A]" />
                  WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHY CHOOSE US SECTION */}
      <section className="bg-white py-20 border-y border-[#0B1F3A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-[#0B1F3A] font-heading">Why Choose Us?</h2>
            <div className="divider-gold mx-auto" />
            <p className="text-xs sm:text-sm text-[#555555]">
              Independent Channel Partner assistance designed to give property buyers clarity and confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUsPoints.map((point, i) => (
              <div key={i} className="glass-card p-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#0B1F3A] text-[#C8A34D] flex items-center justify-center font-bold text-xs shrink-0 font-heading">
                  ✓
                </div>
                <span className="font-bold text-[#0B1F3A] text-xs font-heading">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DUBAI SECTION SUMMARY */}
      <section className="bg-[#0B1F3A] text-white py-20 border-y border-[#C8A34D]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C8A34D]/20 text-[#C8A34D] text-xs font-bold uppercase tracking-wider">
              <Globe className="w-4 h-4 text-[#C8A34D]" />
              Dubai Property Desk
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-heading leading-tight">
              Dubai Real Estate <span className="gold-gradient-text">Investment Benefits</span>
            </h2>
            <p className="text-sm text-white/80 leading-relaxed font-light">
              Acquire luxury waterfront apartments in Dubai Marina & Downtown with 8-10% tax-free rental returns and 10-Year UAE Golden Visa eligibility.
            </p>

            <div className="grid grid-cols-2 gap-4 text-xs text-white/90 pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C8A34D]" />
                <span>100% Tax-Free Income</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C8A34D]" />
                <span>10-Year Golden Visa</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C8A34D]" />
                <span>8-10% Annual USD Yield</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C8A34D]" />
                <span>100% Freehold Ownership</span>
              </div>
            </div>

            <div className="pt-2">
              <button onClick={() => setActivePage('dubai')} className="btn-gold">
                Explore Dubai Apartments
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-2xl border border-white/20 h-72 lg:h-80">
            <img
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80"
              alt="Dubai Skyline"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 6. INTERIOR DESIGN SECTION SUMMARY */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1F3A]/8 text-[#0B1F3A] text-xs font-bold uppercase tracking-wider">
            <Paintbrush className="w-4 h-4 text-[#C8A34D]" />
            Vinra Interiors
          </div>
          <h2 className="text-3xl font-extrabold text-[#0B1F3A] font-heading">
            Turnkey Interior Design Packages
          </h2>
          <div className="divider-gold mx-auto" />
          <p className="text-xs sm:text-sm text-[#555555]">
            Custom modular interiors & 3D villa elevations starting at ₹1,000 / sq.ft.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#555555]">
          <div className="glass-card p-6 space-y-3">
            <h3 className="font-bold text-[#0B1F3A] text-base font-heading">Silver Package</h3>
            <div className="text-[#C8A34D] font-black text-lg">₹1,000 / Sq.Ft</div>
            <p>Engineered wood & MDF pre-laminated modular kitchen & bedroom wardrobes with EBCO hardware.</p>
          </div>
          <div className="glass-card p-6 space-y-3 border-[#C8A34D]">
            <h3 className="font-bold text-[#0B1F3A] text-base font-heading">Gold Package</h3>
            <div className="text-[#C8A34D] font-black text-lg">₹1,300 / Sq.Ft</div>
            <p>MR Ply Century/Green, BWP Ply wet area, Merino/Century HGL finish & HETTICH/HAFELE hardware.</p>
          </div>
          <div className="glass-card p-6 space-y-3">
            <h3 className="font-bold text-[#0B1F3A] text-base font-heading">Platinum Package</h3>
            <div className="text-[#C8A34D] font-black text-lg">₹1,550 / Sq.Ft</div>
            <p>Acrylic/Veneer finish, Century MR Ply, BWP Ply wet area & soft close HETTICH/HAFELE hardware.</p>
          </div>
        </div>

        <div className="text-center pt-2">
          <button onClick={() => setActivePage('interior')} className="btn-primary">
            Explore Interior Packages & 3D Plans
          </button>
        </div>
      </section>

      {/* 7. MANDATORY CHANNEL PARTNER DISCLAIMER BOX */}
      <section className="max-w-5xl mx-auto px-4 pb-20">
        <div className="bg-[#0B1F3A] text-white p-8 rounded-3xl border border-[#C8A34D]/40 text-center space-y-3 shadow-xl">
          <span className="text-[#C8A34D] text-xs font-bold uppercase tracking-wider font-heading">
            Mandatory Channel Partner Disclosure
          </span>
          <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-light max-w-3xl mx-auto">
            "We are an independent real estate consultancy working with multiple reputed developers as Channel Partners. We help buyers compare projects, arrange site visits and connect directly with developers."
          </p>
        </div>
      </section>

    </div>
  );
}
