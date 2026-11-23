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
import { MessageCircle, ArrowRight } from 'lucide-react';

const WHATSAPP = '918431909508';

const VILLAS_FAQS = [
  {
    q: 'What luxury villa listings are available in Bengaluru?',
    a: 'The portfolio includes Tripon Nandi Hills villas and a seller-advertised resale at Purva Symphony, The Sound of Water, off Bannerghatta Road. The seller describes that individual unit as a five-bedroom villa and quotes ₹9.0 Cr; verify its sanctioned plan, measurements, features, price and current availability. Puravankara describes the wider community as offering 3- and 4-BHK residences.'
  },
  {
    q: 'Does the Purva Symphony resale unit include a private pool or garden?',
    a: 'The seller advertises a private pool and garden for this specific resale unit. Confirm unit-specific features during inspection; amenities at other communities vary by listing.'
  },
  {
    q: 'Why should buyers purchase luxury villas through Setty Relators?',
    a: 'We are authorized direct Channel Partners for Tier-1 developers including Puravankara Limited and Tripon Groups. We offer 100% zero brokerage to buyers, pre-arranged chauffeured VIP site visits, transparent price negotiations, and complete legal due diligence at no cost.'
  },
  {
    q: 'What should I verify before buying a resale villa?',
    a: 'Request and independently verify the sanctioned plan, title and sale documents, khata, occupancy status, applicable RERA phase, and any lender-specific eligibility for the unit.'
  }
];

function VillasContent() {
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
      window.location.href = `/?page=project-details&id=${projId || 'project-purva-sounds-of-water-villa'}`;
    } else {
      window.location.href = `/?page=${pageId}`;
    }
  };

  return (
    <div className="min-h-svh bg-[#F8F8F5] text-[#1A1A1A] flex flex-col justify-between">
      <div>
        <Navbar activePage="villas" setActivePage={handleNavClick} />

        <main>
          {/* breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="shell flex flex-wrap items-center gap-2 py-4 text-[14px] text-[var(--text-soft)]"
          >
            <Link href="/" className="hover:text-[#0B1F3A]">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#0B1F3A]">Luxury villas in Bangalore</span>
          </nav>

          {/* hero */}
          <section className="shell pt-12 lg:pt-16">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
              <div data-reveal className="lg:col-span-7">
                <h1 className="display-xl max-w-[16ch] text-[#0B1F3A]">
                  Villas, with the unit read before the visit.
                </h1>
                <p className="mt-6 max-w-[52ch] text-[19px] leading-relaxed text-[var(--text-soft)]">
                  Tripon Nandi Hills villas and one seller-listed resale at Purva Symphony, The Sound
                  of Water, off Bannerghatta Road. Configuration, details and availability confirmed
                  with the desk.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
                  <button type="button" onClick={() => openSiteVisitModal()} className="btn-gold">
                    Schedule a private villa tour
                  </button>
                  <a
                    href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hello Setty Relators! Please send me the brochure and price list for luxury villas in Bangalore.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 text-[17px] text-[#0B1F3A] underline decoration-[#C8A34D] decoration-2 underline-offset-[6px] hover:text-[#7A5C10]"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Ask for villa details
                  </a>
                </div>
              </div>

              <figure data-reveal className="lg:col-span-5">
                <img
                  src="/images/purva-sounds-of-water/purva-villas-community.jpeg"
                  alt="Villa residences and landscaped gardens at Purva Symphony"
                  width={1600}
                  height={1000}
                  fetchPriority="high"
                  className="h-[260px] w-full object-cover sm:h-[340px] lg:h-[380px]"
                />
                <figcaption className="plate-line">
                  <span>Purva Symphony, off Bannerghatta Road</span>
                  <span className="plate-price">from ₹4.80 Cr</span>
                </figcaption>
              </figure>
            </div>
          </section>

          {/* resale feature */}
          <section className="shell mt-14 lg:mt-20">
            <div data-reveal className="grid items-stretch gap-0 bg-[#0B1F3A] text-white lg:grid-cols-2">
              <img
                src="/images/purva-sounds-of-water/purva-villa-front-portico.jpeg"
                alt="Villa entrance portico at Purva Symphony"
                width={1400}
                height={950}
                loading="lazy"
                className="h-64 w-full object-cover sm:h-80 lg:h-full lg:min-h-[380px]"
              />
              <div className="flex flex-col justify-between gap-6 px-7 py-9 sm:px-10 lg:py-12">
                <div>
                  <h2 className="display-md text-white">Purva Symphony villa resale</h2>
                  <p className="mt-4 max-w-[46ch] text-[17px] leading-relaxed text-white/75">
                    The seller quotes ₹9.0 Cr for an advertised five-bedroom resale. Puravankara
                    describes the wider community as 3- and 4-BHK residences; verify this unit’s
                    documents, features, price and availability.
                  </p>
                </div>
                <a
                  href="/purva-sounds-of-water"
                  className="inline-flex min-h-11 w-fit items-center gap-2 text-[17px] text-white underline decoration-[#C8A34D] decoration-2 underline-offset-[6px] hover:text-[#DFC06E]"
                >
                  The resale details
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </section>

          <ProjectsPage
            filterType="Villas"
            isSubpage={true}
            setActivePage={handleNavClick}
            setSelectedProjectId={() => {}}
          />

          {/* faq */}
          <section className="page-section">
            <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div data-reveal className="lg:col-span-4">
                <h2 className="display-lg text-[#0B1F3A]">Questions on villas.</h2>
                <p className="mt-4 max-w-[34ch] text-[17px] leading-relaxed text-[var(--text-soft)]">
                  What is on the market, what the seller advertises, and what to verify before an
                  offer.
                </p>
              </div>

              <div data-reveal className="lg:col-span-8">
                {VILLAS_FAQS.map((faq) => (
                  <details key={faq.q} className="group py-5">
                    <summary className="flex min-h-11 cursor-pointer list-none items-start justify-between gap-6 text-[17px] leading-snug text-[#1A1A1A] transition-colors hover:text-[#7A5C10]">
                      <span>{faq.q}</span>
                      <span aria-hidden="true" className="mt-0.5 shrink-0 text-[#A6832A] transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 max-w-[62ch] text-[17px] leading-relaxed text-[var(--text-soft)]">
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

export default function VillasLandingView() {
  return (
    <PlotsProvider>
      <VillasContent />
    </PlotsProvider>
  );
}
