'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PlotsProvider, usePlots } from '../../context/PlotsContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingActions from '../../components/WhatsAppButton';
import BookSiteVisitModal from '../../components/BookSiteVisitModal';
import ProjectsPage from '../../views/ProjectsPage';
import useReveal from '../../hooks/useReveal';
import { MessageCircle } from 'lucide-react';

const WHATSAPP = '918431909508';

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
    a: 'Yes. Every project represented by Setty Relators is legally cleared with RERA Karnataka registration, BIAAPA / CUDDA / BDA / BMRDA sanctions, clear marketable titles, and A-Khata ownership.'
  },
  {
    q: 'Why is there zero brokerage for buyers purchasing plots through Setty Relators?',
    a: 'As an authorized developer channel partner for Oriaiyan Group, D1 Projects, and Tripon Groups, our consultancy is compensated directly by developers. All buyer services—including legal vetting, masterplan reviews, price negotiation, and chauffeured VIP site visits—are 100% free with 0% brokerage.'
  },
  {
    q: 'What plot sizes and configurations are available?',
    a: 'Standard dimensions include 1200 sq.ft (30x40), 1500 sq.ft (30x50), 2400 sq.ft (40x60), 3000 sq.ft (50x60), and grand estate villa plots up to 4,499 sq.ft with wide avenue setbacks and underground utilities.'
  }
];

const CORRIDORS = [
  {
    name: 'Airport & Chikkajala',
    rate: '₹4,200 – ₹5,800',
    growth: '22.8%',
    drivers: 'KIADB Aerospace SEZ, Airport Expressway, upcoming Metro',
    authority: 'BIAPPA & RERA'
  },
  {
    name: 'Chikkaballapura & Nandi Hills',
    rate: '₹2,800 – ₹3,900',
    growth: '21.5%',
    drivers: 'STRR northern arc, tourism infrastructure, medical hub',
    authority: 'CUDDA & RERA'
  },
  {
    name: 'South industrial belt (APC Circle, Jigani)',
    rate: '₹3,200 – ₹4,400',
    growth: '16.9%',
    drivers: 'Electronic City link, NICE Expressway, manufacturing SEZs',
    authority: 'BMRDA & RERA'
  },
  {
    name: 'East (Kothanur & Hoskote)',
    rate: '₹3,400 – ₹4,600',
    growth: '17.6%',
    drivers: 'Hoskote auto hub, STRR interchanges, Whitefield access',
    authority: 'BMRDA & RERA'
  }
];

function PlotsContent() {
  const { openSiteVisitModal } = usePlots();
  useReveal();

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
    <div className="min-h-svh bg-[#F8F8F5] text-[#1A1A1A] flex flex-col justify-between">
      <div>
        <Navbar activePage="plots" setActivePage={handleNavClick} />

        <main>
          {/* breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="shell flex flex-wrap items-center gap-2 py-4 text-[14px] text-[var(--text-soft)]"
          >
            <Link href="/" className="hover:text-[#0B1F3A]">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#0B1F3A]">Plots in Bangalore</span>
          </nav>

          {/* hero */}
          <section className="shell pb-4 pt-12 lg:pt-16">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
              <div data-reveal className="lg:col-span-8">
                <h1 className="display-xl max-w-[18ch] text-[#0B1F3A]">
                  Plots, corridor by corridor.
                </h1>
                <p className="mt-6 max-w-[54ch] text-[19px] leading-relaxed text-[var(--text-soft)]">
                  Pre-cleared land across Devanahalli, STRR, Chikkaballapura, Nandi Hills, APC
                  Circle, Jigani and Kanakapura Road. A-Khata titles, approvals read before listing,
                  and zero brokerage to buyers.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
                  <button type="button" onClick={() => openSiteVisitModal()} className="btn-gold">
                    Book a chauffeured site tour
                  </button>
                  <a
                    href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hello Setty Relators! Please share masterplan blueprints and pricing for verified plots in Bangalore.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 text-[17px] text-[#0B1F3A] underline decoration-[#C8A34D] decoration-2 underline-offset-[6px] hover:text-[#7A5C10]"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Ask for the plots file
                  </a>
                </div>
              </div>

              <p data-reveal className="lg:col-span-4 text-[15px] leading-relaxed text-[var(--text-soft)]">
                Growth figures shown here are corridor-level commentary published by the desk, not
                audited returns. Confirm current pricing with the developer.
              </p>
            </div>
          </section>

          <ProjectsPage
            filterType="Open Plots"
            isSubpage={true}
            setActivePage={handleNavClick}
            setSelectedProjectId={() => {}}
          />

          {/* corridor prices */}
          <section className="page-section">
            <div className="shell">
              <div data-reveal className="grid gap-6 lg:grid-cols-12 lg:items-end">
                <h2 className="display-lg lg:col-span-7 text-[#0B1F3A]">Prices by corridor.</h2>
                <p className="lg:col-span-5 max-w-[44ch] text-[17px] leading-relaxed text-[var(--text-soft)]">
                  Indicative per-square-foot rates and the infrastructure each corridor is priced
                  against.
                </p>
              </div>

              <div data-reveal className="mt-10 overflow-x-auto">
                <table data-ui className="w-full min-w-[760px] border-collapse text-left">
                  <caption className="sr-only">Plot prices by Bengaluru corridor</caption>
                  <thead>
                    <tr data-ui className="border-b border-[#0B1F3A]">
                      {['Corridor', 'Per sq ft', 'Growth', 'Drivers', 'Authority'].map((h) => (
                        <th key={h} scope="col" className="py-3 pr-6 font-normal text-[14px] text-[var(--text-soft)]">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {CORRIDORS.map((c) => (
                      <tr key={c.name} data-ui className="border-b border-[var(--rule)]">
                        <th scope="row" className="py-4 pr-6 text-[16px] font-normal text-[#0B1F3A]">
                          {c.name}
                        </th>
                        <td className="py-4 pr-6 text-[16px] text-[#1A1A1A] figures">{c.rate}</td>
                        <td className="py-4 pr-6 text-[16px] text-[#1A1A1A] figures">{c.growth}</td>
                        <td className="py-4 pr-6 text-[16px] leading-relaxed text-[var(--text-soft)]">
                          {c.drivers}
                        </td>
                        <td className="py-4 pr-6 text-[16px] text-[var(--text-soft)]">{c.authority}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* faq */}
          <section className="section-navy on-ink">
            <div className="shell page-section grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div data-reveal className="lg:col-span-4">
                <h2 className="display-lg text-white">Buying a plot here.</h2>
                <p className="mt-4 max-w-[34ch] text-[17px] leading-relaxed text-white/65">
                  Approvals, sizes, brokerage and corridor data. Ask the desk for anything not
                  covered.
                </p>
              </div>

              <div data-reveal className="lg:col-span-8">
                {PLOTS_FAQS.map((faq) => (
                  <details key={faq.q} className="group py-5">
                    <summary className="flex min-h-11 cursor-pointer list-none items-start justify-between gap-6 text-[17px] leading-snug text-white transition-colors hover:text-[#DFC06E]">
                      <span>{faq.q}</span>
                      <span aria-hidden="true" className="mt-0.5 shrink-0 text-[#DFC06E] transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 max-w-[62ch] text-[17px] leading-relaxed text-white/70">
                      {faq.a}
                    </p>
                  </details>
                ))}
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
