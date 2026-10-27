'use client';

import React, { useState } from 'react';
import { PlotsProvider, usePlots } from '../../context/PlotsContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingActions from '../../components/WhatsAppButton';
import BookSiteVisitModal from '../../components/BookSiteVisitModal';
import ProjectsPage from '../../views/ProjectsPage';
import {
  ShieldCheck, MapPin, CheckCircle2, Phone, MessageCircle, HelpCircle,
  ChevronDown, Sparkles, Award, Home, ArrowRight, Trees, Bath, Bed
} from 'lucide-react';

const VILLAS_FAQS = [
  {
    q: 'What are the top luxury villa communities available through Lakshie Real Estate in Bangalore?',
    a: 'We exclusively represent: 1) Purva Sounds of Water – Bannerghatta Road (A+ Type 5 BHK Luxury Villa, 5,000 sq.ft land, 7,000 sq.ft built-up area, private swimming pool, 2,200 sq.ft garden, ₹9.0 Cr negotiable with 0% brokerage); and 2) Tripon Nandi Luxury Villas – Chikkaballapura (3, 4 & 5 BHK boutique villas in Nandi Foothills, ₹2.4 Cr to ₹4.0 Cr).'
  },
  {
    q: 'Do these luxury villas feature private swimming pools and private gardens?',
    a: 'Yes. The flagship A+ Type villa at Purva Sounds of Water features an exclusive private swimming pool on premises and approx. 2,200 sq.ft private landscaped lawn. Tripon Nandi Villas also offers custom plunge pools, landscaped courtyards, and scenic mountain backdrops.'
  },
  {
    q: 'Why should buyers purchase luxury villas through Lakshie Real Estate?',
    a: 'We are authorized direct Channel Partners for Tier-1 developers including Puravankara Limited and Tripon Groups. We offer 100% zero brokerage to buyers, pre-arranged chauffeured VIP site visits, transparent price negotiations, and complete legal due diligence at no cost.'
  },
  {
    q: 'Are bank home loans available for luxury villas in Bangalore?',
    a: 'Yes. Both Purva Sounds of Water and Tripon Nandi Villas have pre-approved home loan options with SBI Home Loans, HDFC Bank, ICICI Bank, Axis Bank, and Kotak Mahindra Bank.'
  }
];

function VillasContent() {
  const [activePage, setActivePage] = useState('villas');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const { openSiteVisitModal } = usePlots();

  const whatsappNumber = '918431909508';
  const displayPhone = '+91 84319 09508';

  const handleNavClick = (pageId, filterType = 'all', projId = null) => {
    if (pageId === 'home') {
      window.location.href = '/';
    } else if (pageId === 'plots') {
      window.location.href = '/plots-in-bangalore';
    } else if (pageId === 'villas') {
      window.location.href = '/luxury-villas-bangalore';
    } else if (pageId === 'purva-villa') {
      window.location.href = '/purva-sounds-of-water';
    } else if (pageId === 'project-details') {
      window.location.href = `/?page=project-details&id=${projId || 'project-purva-sounds-of-water-villa'}`;
    } else {
      window.location.href = `/?page=${pageId}`;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F8F5] text-[#1A1A1A] flex flex-col justify-between selection:bg-[#F2B705] selection:text-[#0B1F3A]">
      <div>
        <Navbar activePage="villas" setActivePage={handleNavClick} />

        <main className="animate-fadeIn">
          {/* Breadcrumb Bar */}
          <div className="bg-[#0B1F3A] text-white/80 py-3 border-b border-white/10 text-xs">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
              <nav aria-label="Breadcrumb" className="flex items-center gap-2">
                <a href="/" className="hover:text-[#C8A34D] transition-colors">Home</a>
                <span>/</span>
                <span className="text-[#C8A34D] font-bold">Luxury Villas in Bangalore</span>
              </nav>

              <span className="hidden sm:inline-flex items-center gap-1.5 text-emerald-400 font-bold">
                <ShieldCheck className="w-4 h-4" /> Tier-1 Developers • 0% Brokerage
              </span>
            </div>
          </div>

          {/* Dedicated Hero Banner */}
          <section className="bg-gradient-to-b from-[#0B1F3A] to-[#0E2749] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-white/10">
            <div className="max-w-7xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-bold text-[#C8A34D] uppercase tracking-wider">
                <Home className="w-4 h-4" />
                Bengaluru Luxury Villa Enclaves
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading">
                Exclusive 3, 4 & 5 BHK Luxury Villas in Bangalore
              </h1>
              <p className="text-sm sm:text-base text-white/70 max-w-3xl mx-auto leading-relaxed">
                Featuring Purva Sounds of Water (A+ Type 5 BHK on Bannerghatta Road, ₹9 Cr) and Tripon Nandi Foothills Villas (3, 4 & 5 BHK, ₹2.4 Cr to ₹4 Cr). Experience private swimming pools, landscaped gardens, and zero buyer brokerage.
              </p>
              <div className="pt-2 flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => openSiteVisitModal()}
                  className="btn-gold py-3 px-6 text-xs font-black uppercase tracking-wider cursor-pointer shadow-lg"
                >
                  Schedule Private Villa Tour
                </button>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Lakshie Real Estate! Please send me the brochure and price list for luxury villas in Bangalore.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-5 rounded-xl border border-white/20 hover:border-white text-white text-xs font-bold flex items-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#C8A34D]" />
                  Request Villa Details on WhatsApp
                </a>
              </div>
            </div>
          </section>

          {/* Featured Highlight: Purva Sounds of Water Banner */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
            <div className="rounded-2xl bg-gradient-to-r from-[#0B1F3A] via-[#142E54] to-[#0B1F3A] text-white p-6 sm:p-8 border border-[#C8A34D]/40 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-bold text-[#C8A34D] tracking-widest bg-white/10 px-2.5 py-1 rounded-full">
                  Featured Ultra-Luxury Spotlight
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                  Purva Sounds of Water – Premium 5 BHK Luxury Villa
                </h2>
                <p className="text-xs sm:text-sm text-white/75 max-w-2xl leading-relaxed">
                  A+ Type flagship residence on Bannerghatta Road: 5,000 sq.ft land, 7,000 sq.ft built-up area, private swimming pool, 2,200 sq.ft garden, and outhouse cottage. Priced at ₹9.0 Cr (negotiable).
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href="/purva-sounds-of-water"
                  className="btn-gold py-3 px-6 text-xs font-black uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Explore Purva Villa Page</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </section>

          {/* Villa Projects Listing View */}
          <ProjectsPage
            filterType="Villas"
            isSubpage={true}
            setActivePage={handleNavClick}
            setSelectedProjectId={() => {}}
          />

          {/* Villas FAQ Section */}
          <section className="bg-white py-16 border-t border-slate-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
              <div className="text-center space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1F3A]/5 text-[#0B1F3A] text-xs font-bold uppercase">
                  <HelpCircle className="w-4 h-4 text-[#C8A34D]" />
                  Luxury Villa Investment Advisory
                </div>
                <h2 className="text-3xl font-extrabold text-[#0B1F3A] font-heading">
                  Frequently Asked Questions – Luxury Villas in Bangalore
                </h2>
                <div className="divider-gold mx-auto" />
              </div>

              <div className="space-y-4">
                {VILLAS_FAQS.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-200 overflow-hidden bg-[#F8F8F5] transition-all shadow-sm"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                        className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-100 transition-colors"
                        aria-expanded={isOpen}
                      >
                        <h3 className="text-base font-bold text-[#0B1F3A] font-heading pr-2">
                          {faq.q}
                        </h3>
                        <div className={`w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 transition-transform ${isOpen ? 'rotate-180 text-[#C8A34D]' : 'text-slate-500'}`}>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6 pt-1 text-sm text-slate-700 leading-relaxed border-t border-slate-200 bg-white">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

        </main>
      </div>

      <FloatingActions />
      <BookSiteVisitModal />
      <Footer setActivePage={handleNavClick} />
    </div>
  );
}

export default function VillasLandingView() {
  return (
    <PlotsProvider>
      <VillasContent />
    </PlotsProvider>
  );
}
