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
  ChevronDown, Sparkles, TrendingUp, Compass, Award, Layers
} from 'lucide-react';

const PLOTS_FAQS = [
  {
    q: 'Which are the top high-growth corridors for buying plots in Bangalore in 2026?',
    a: 'The highest-growth corridors are: 1) North Bengaluru (Devanahalli Airport Corridor & STRR Satellite Town Ring Road), recording 22.8% YoY growth; 2) Chikkaballapura & Nandi Hills Foothills (21.5% YoY growth); 3) South Industrial Belt (Jigani, APC Circle, Kanakapura Rd); and 4) East Bengaluru (Kothanur & Hoskote STRR intersection).'
  },
  {
    q: 'What is the starting price for residential plots in Bangalore?',
    a: 'Verified plotted layouts start from ₹35 Lakhs in Chikkaballapura (Sun Valley by D1 Projects) up to ₹2.0 Crore for premium 4,499 sq.ft villa estates by Oriaiyan Group across 6 strategic corridors.'
  },
  {
    q: 'Are all listed plots approved by BIAAPA, CUDDA, or BMRDA with RERA registration?',
    a: 'Yes. Every project represented by Lakshie Real Estate is legally cleared with RERA Karnataka registration, BIAAPA / CUDDA / BDA / BMRDA sanctions, clear marketable titles, and A-Khata ownership.'
  },
  {
    q: 'Why is there zero brokerage for buyers purchasing plots through Lakshie Real Estate?',
    a: 'As an authorized developer channel partner for Oriaiyan Group, D1 Projects, and Tripon Groups, our consultancy is compensated directly by developers. All buyer services—including legal vetting, masterplan reviews, price negotiation, and chauffeured VIP site visits—are 100% free with 0% brokerage.'
  },
  {
    q: 'What plot sizes and configurations are available?',
    a: 'Standard dimensions include 1200 sq.ft (30x40), 1500 sq.ft (30x50), 2400 sq.ft (40x60), 3000 sq.ft (50x60), and grand estate villa plots up to 4,499 sq.ft with wide avenue setbacks and underground utilities.'
  }
];

function PlotsContent() {
  const [activePage, setActivePage] = useState('plots');
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
      window.location.href = `/?page=project-details&id=${projId || 'project-oriaiyan-signature-plots'}`;
    } else {
      window.location.href = `/?page=${pageId}`;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F8F5] text-[#1A1A1A] flex flex-col justify-between selection:bg-[#F2B705] selection:text-[#0B1F3A]">
      <div>
        <Navbar activePage="plots" setActivePage={handleNavClick} />

        <main className="animate-fadeIn">
          {/* Breadcrumb Bar */}
          <div className="bg-[#0B1F3A] text-white/80 py-3 border-b border-white/10 text-xs">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
              <nav aria-label="Breadcrumb" className="flex items-center gap-2">
                <a href="/" className="hover:text-[#C8A34D] transition-colors">Home</a>
                <span>/</span>
                <span className="text-[#C8A34D] font-bold">Plots in Bangalore</span>
              </nav>

              <span className="hidden sm:inline-flex items-center gap-1.5 text-emerald-400 font-bold">
                <ShieldCheck className="w-4 h-4" /> BIAAPA & RERA Approved • 0% Brokerage
              </span>
            </div>
          </div>

          {/* Dedicated Hero Banner */}
          <section className="bg-gradient-to-b from-[#0B1F3A] to-[#0E2749] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-white/10">
            <div className="max-w-7xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-bold text-[#C8A34D] uppercase tracking-wider">
                <Layers className="w-4 h-4" />
                Bengaluru Plotted Development Directory 2026
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading">
                Verified Residential Plots & Villa Plots in Bangalore
              </h1>
              <p className="text-sm sm:text-base text-white/70 max-w-3xl mx-auto leading-relaxed">
                Discover pre-cleared, high-appreciation residential land across Devanahalli Airport Corridor, STRR, Chikkaballapura, Nandi Hills, APC Circle, Jigani & Kanakapura Road. Clear A-Khata titles with zero brokerage to buyers.
              </p>
              <div className="pt-2 flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => openSiteVisitModal()}
                  className="btn-gold py-3 px-6 text-xs font-black uppercase tracking-wider cursor-pointer shadow-lg"
                >
                  Book Free Chauffeured Site Tour
                </button>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Lakshie Real Estate! Please share masterplan blueprints and pricing for verified plots in Bangalore.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-5 rounded-xl border border-white/20 hover:border-white text-white text-xs font-bold flex items-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#C8A34D]" />
                  Request Plots PDF on WhatsApp
                </a>
              </div>
            </div>
          </section>

          {/* Plotted Projects Listing View */}
          <ProjectsPage
            filterType="Open Plots"
            isSubpage={true}
            setActivePage={handleNavClick}
            setSelectedProjectId={() => {}}
          />

          {/* Corridor Appreciation Metrics Table */}
          <section className="bg-white py-16 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="text-center space-y-3 max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7A5C10] uppercase tracking-wider">
                  <TrendingUp className="w-4 h-4" /> Capital Growth Benchmarks
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] font-heading">
                  Bangalore Plotted Corridor Appreciation & Price Analysis (2026)
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Data-backed appreciation trends across prime infrastructure growth corridors.
                </p>
              </div>

              <div className="bg-[#F8F8F5] p-6 rounded-2xl border border-[#0B1F3A]/10 overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-[#0B1F3A]/15 text-[#0B1F3A] uppercase font-bold tracking-wider">
                      <th className="py-3 px-4">Corridor Name</th>
                      <th className="py-3 px-4">Avg. Price / Sq.Ft</th>
                      <th className="py-3 px-4">Historical YoY Growth</th>
                      <th className="py-3 px-4">Key Growth Drivers</th>
                      <th className="py-3 px-4">Approval Authorities</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="py-3 px-4 font-bold text-[#0B1F3A]">Airport & Chikkajala Corridor</td>
                      <td className="py-3 px-4 text-[#7A5C10] font-bold">₹4,200 - ₹5,800</td>
                      <td className="py-3 px-4 text-emerald-600 font-bold">22.8% YoY</td>
                      <td className="py-3 px-4">KIADB Aerospace SEZ, Airport Expressway & Upcoming Metro</td>
                      <td className="py-3 px-4">BIAPPA & RERA</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-[#0B1F3A]">Chikkaballapura & Nandi Hills</td>
                      <td className="py-3 px-4 text-[#7A5C10] font-bold">₹2,800 - ₹3,900</td>
                      <td className="py-3 px-4 text-emerald-600 font-bold">21.5% YoY</td>
                      <td className="py-3 px-4">STRR Northern Arc, Tourism Infrastructure & Medical Hub</td>
                      <td className="py-3 px-4">CUDDA & RERA</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-[#0B1F3A]">South Industrial Belt (APC Circle/Jigani)</td>
                      <td className="py-3 px-4 text-[#7A5C10] font-bold">₹3,200 - ₹4,400</td>
                      <td className="py-3 px-4 text-emerald-600 font-bold">16.9% YoY</td>
                      <td className="py-3 px-4">Electronic City Link, NICE Expressway & Manufacturing SEZs</td>
                      <td className="py-3 px-4">BMRDA & RERA</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-[#0B1F3A]">East Corridor (Kothanur & Hoskote)</td>
                      <td className="py-3 px-4 text-[#7A5C10] font-bold">₹3,400 - ₹4,600</td>
                      <td className="py-3 px-4 text-emerald-600 font-bold">17.6% YoY</td>
                      <td className="py-3 px-4">Hoskote Auto Hub, STRR Interchanges & Whitefield Access</td>
                      <td className="py-3 px-4">BMRDA & RERA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Plots FAQ Section */}
          <section className="bg-[#F8F8F5] py-16 border-t border-slate-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
              <div className="text-center space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1F3A]/5 text-[#0B1F3A] text-xs font-bold uppercase">
                  <HelpCircle className="w-4 h-4 text-[#C8A34D]" />
                  Bangalore Land Advisory Insights
                </div>
                <h2 className="text-3xl font-extrabold text-[#0B1F3A] font-heading">
                  Frequently Asked Questions – Buying Plots in Bangalore
                </h2>
                <div className="divider-gold mx-auto" />
              </div>

              <div className="space-y-4">
                {PLOTS_FAQS.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-200 overflow-hidden bg-white transition-all shadow-sm"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                        className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                        aria-expanded={isOpen}
                      >
                        <h3 className="text-base font-bold text-[#0B1F3A] font-heading pr-2">
                          {faq.q}
                        </h3>
                        <div className={`w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0 transition-transform ${isOpen ? 'rotate-180 text-[#C8A34D]' : 'text-slate-500'}`}>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6 pt-1 text-sm text-slate-700 leading-relaxed border-t border-slate-100 bg-slate-50/40">
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

export default function PlotsLandingView() {
  return (
    <PlotsProvider>
      <PlotsContent />
    </PlotsProvider>
  );
}
