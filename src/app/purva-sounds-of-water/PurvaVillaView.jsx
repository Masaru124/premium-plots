'use client';

import React from 'react';
import Link from 'next/link';
import { PlotsProvider, usePlots } from '../../context/PlotsContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingActions from '../../components/WhatsAppButton';
import BookSiteVisitModal from '../../components/BookSiteVisitModal';
import ProjectDetailsPage from '../../views/ProjectDetailsPage';
import useReveal from '../../hooks/useReveal';
import { MessageCircle, ArrowRight } from 'lucide-react';

const WHATSAPP = '918431909508';
const PHONE_DISPLAY = '+91 84319 09508';
const RERA = 'PRM/KA/RERA/1251/310/PR/210907/004300';

const PURVA_FAQS = [
  {
    q: 'Are Purva Sounds of Water and Purva Symphony at The Sound of Water the same project?',
    a: 'They refer to the same Bannerghatta Road location. Puravankara’s official project name is Purva Symphony at The Sound of Water, while resale listings commonly advertise it as Purva Sounds of Water. Puravankara describes the community as 3- and 4-BHK villas, so confirm the exact unit configuration against original documents.'
  },
  {
    q: 'What does Puravankara officially list for this project?',
    a: 'Puravankara publishes Purva Symphony at The Sound of Water as a 20-acre enclave of luxury 3- and 4-BHK villas off Bannerghatta Road in South Bengaluru, priced from ₹4.80 Cr onwards, with project RERA PRM/KA/RERA/1251/310/PR/210907/004300, status ongoing and possession listed as 30-06-2026. These are developer-published figures that can change; confirm them directly with Puravankara.'
  },
  {
    q: 'What is the asking price for this Purva Symphony resale villa?',
    a: 'The seller currently quotes ₹9.0 Crore for this resale listing. Price and availability may change; confirm both with the listing advisor before arranging a visit.'
  },
  {
    q: 'What configuration and areas does the seller advertise?',
    a: 'The seller advertises this individual villa as having five bedrooms, around 5,000 sq.ft of land and 7,000 sq.ft built-up area. Puravankara describes the wider Purva Symphony community as offering 3- and 4-BHK residences, so verify the unit’s sanctioned plan and area documents.'
  },
  {
    q: 'Does the seller-listed unit include a private swimming pool and garden?',
    a: 'The seller advertises a private pool and garden for this individual unit. Confirm these unit-specific features during the site visit and against the property documents.'
  },
  {
    q: 'Where is Purva Symphony at The Sound of Water located?',
    a: 'Puravankara describes Purva Symphony as being off Bannerghatta Road in Bengaluru. Check the exact unit pin and current route before relying on travel times or nearby-station distances.'
  },
  {
    q: 'What should I verify before purchasing this resale villa?',
    a: 'Check the applicable RERA phase, sanctioned plan, title, khata, occupancy documents, unit configuration and lender eligibility against original records. Puravankara lists Purva Symphony under RERA registration PRM/KA/RERA/1251/310/PR/210907/004300; confirm which phase and approvals apply to the specific unit.'
  },
  {
    q: 'What is the orientation of this villa?',
    a: 'The seller describes the villa as west-facing. Confirm the orientation from the unit plan and during an in-person inspection.'
  },
  {
    q: 'How can I enquire about this resale listing?',
    a: 'Contact the listing advisor to confirm whether the unit is still available, request current seller-provided details and documents, and arrange a viewing.'
  }
];

const SPECS = [
  {
    term: 'Seller-reported area',
    body: '5,000 sq ft of land and 7,000 sq ft built-up, as reported by the seller. Verify measurements and area basis in the unit documents.'
  },
  {
    term: 'Garden and pool',
    body: 'The seller reports a private garden and swimming pool. Confirm these features during inspection.'
  },
  {
    term: 'Bedrooms',
    body: 'The seller describes five bedrooms. Puravankara lists 3- and 4-BHK residences for the wider community; check this unit’s sanctioned plan.'
  },
  {
    term: 'Official project',
    body: 'Puravankara describes Purva Symphony at The Sound of Water as 3- and 4-BHK residences across about 20 acres.'
  }
];

const UNIT_ROWS = [
  ['Project name', 'Purva Symphony at The Sound of Water', 'Puravankara’s official name and community description'],
  ['Villa type', 'Seller-advertised five-bedroom resale', 'Configuration is not developer-confirmed; verify the sanctioned plan'],
  ['Land parcel', 'Seller-reported 5,000 sq ft', 'Confirm the land measurement in the unit documents'],
  ['Built-up area', 'Seller-reported 7,000 sq ft', 'Confirm the area basis and approved plan'],
  ['Configuration', 'Seller advertises five bedrooms', 'Verify the bedroom count and additional rooms against the sanctioned plan'],
  ['Private garden', 'Seller-advertised garden', 'Confirm size, boundaries and ownership during inspection'],
  ['Private pool', 'Seller advertises a private pool', 'Confirm this unit-specific feature during inspection'],
  ['Outhouse', 'Seller advertises an outhouse', 'Confirm approvals and details in the unit documents'],
  ['Facing', 'Seller describes the unit as west-facing', 'Confirm orientation from the site plan'],
  ['Price', 'Seller-quoted ₹9.0 Cr asking price', 'Reconfirm price, availability and buyer charges with the desk'],
  ['Approvals', `Project RERA ${RERA}`, 'Confirm the applicable phase, unit approvals, title, khata and occupancy independently']
];

const PROJECT_FACTS = [
  ['Official project name', 'Purva Symphony at The Sound of Water'],
  ['Developer', 'Puravankara Limited'],
  ['Location', 'Off Bannerghatta Road, South Bengaluru'],
  ['Development size', 'About 20 acres'],
  ['Official configurations', '3 and 4 BHK villas'],
  ['Developer price', '₹4.80 Cr onwards*'],
  ['Project RERA', RERA],
  ['Project status', 'Ongoing · possession 30-06-2026'],
  ['Project financing', 'ICICI HFC and SBM Bank']
];

const PLACES = [
  {
    title: 'Schools, healthcare and retail',
    items: [
      'IIM Bangalore — 5 minutes',
      'Royal Meenakshi Mall and Decathlon Bannerghatta — 5 minutes',
      'Ryan International and BGS National Public School — 10 minutes',
      'Fortis and Apollo Hospitals Bannerghatta — 10 minutes',
      'Vega City Mall — 10 minutes',
      'Narayana Health City — 20 minutes'
    ]
  },
  {
    title: 'Metro, IT and airport',
    items: [
      'Kalyani Magnum IT Tech Park — 10 minutes',
      'Jayadeva Hospital Metro — 15 minutes',
      'HSBC Software Development India — 15 minutes',
      'Electronic City — 25 minutes',
      'MG Road Metro and City Railway Station — 30 minutes',
      'Kempegowda International Airport — 60 minutes'
    ]
  },
  {
    title: 'Developer-listed amenities',
    items: [
      'Man-made waterfall and Aqua Clubhouse',
      'Infinity pool, yoga space and jogging track',
      'Temple of Body and Mind with gym, steam and sauna',
      'Tennis and multipurpose courts, cricket practice pitch',
      'Garden of Five Senses and children’s play area',
      'Confirm current availability with the developer'
    ]
  }
];

function PurvaVillaContent() {
  const { openSiteVisitModal } = usePlots();
  useReveal();

  const handleNavClick = (pageId) => {
    if (pageId === 'home') {
      window.location.href = '/';
    } else if (pageId === 'plots') {
      window.location.href = '/plots-in-bangalore';
    } else if (pageId === 'villas') {
      window.location.href = '/luxury-villas-bangalore';
    } else if (pageId === 'purva-villa') {
      window.location.href = '/purva-sounds-of-water';
    } else {
      window.location.href = `/?page=${pageId}`;
    }
  };

  return (
    <div className="min-h-svh bg-[#0B192C] text-[#FBFBFD] flex flex-col justify-between">
      <div>
        <Navbar activePage="villas" setActivePage={handleNavClick} />

        <main>
          <nav
            aria-label="Breadcrumb"
            className="shell flex flex-wrap items-center gap-2 py-4 text-[14px] text-[var(--text-soft)]"
          >
            <Link href="/" className="hover:text-[#FBFBFD]">Home</Link>
            <span aria-hidden="true">/</span>
            <a href="/luxury-villas-bangalore" className="hover:text-[#FBFBFD]">Luxury villas</a>
            <span aria-hidden="true">/</span>
            <span className="text-[#FBFBFD]">Purva Symphony resale</span>
          </nav>

          <ProjectDetailsPage projectId="project-purva-sounds-of-water-villa" setActivePage={handleNavClick} />

          {/* ---------------------------------------------- community photos */}
          <section aria-label="Photographs of the community" className="shell mt-12 lg:mt-16">
            <div className="grid gap-4 sm:grid-cols-2">
              <figure>
                <img
                  src="/images/purva-sounds-of-water/purva-villas-community.jpeg"
                  alt="Villa residences and landscaped gardens at Purva Symphony"
                  width={1400}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  className="h-[240px] w-full object-cover sm:h-[320px]"
                />
                <figcaption className="plate-line">
                  <span>Community, Purva Symphony at The Sound of Water</span>
                </figcaption>
              </figure>
              <figure className="sm:mt-10">
                <img
                  src="/images/purva-sounds-of-water/purva-villa-swimming-pool.jpeg"
                  alt="Pool and paving at the Purva Symphony community"
                  width={1400}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  className="h-[240px] w-full object-cover sm:h-[320px]"
                />
                <figcaption className="plate-line">
                  <span>Photographs from the project listing set; unit fit-out and pool to be confirmed on inspection</span>
                </figcaption>
              </figure>
            </div>
          </section>

          {/* ------------------------------------------------------- the unit */}
          <section className="page-section">
            <div className="shell">
              <div data-reveal className="grid gap-6 lg:grid-cols-12 lg:items-end">
                <h2 className="display-lg lg:col-span-7 max-w-[22ch] text-[#FBFBFD]">
                  One seller-listed villa, read closely.
                </h2>
                <p className="lg:col-span-5 max-w-[46ch] text-[17px] leading-relaxed text-[var(--text-soft)]">
                  This page describes one seller-advertised resale unit. Configuration, measurements,
                  price, availability and unit-specific features need confirming against original
                  documents.
                </p>
              </div>

              <dl data-reveal className="mt-12 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
                {SPECS.map((s) => (
                  <div key={s.term} className="bg-[#11233D] px-5 py-5">
                    <dt className="font-heading text-[1.125rem] text-[#FBFBFD]">{s.term}</dt>
                    <dd className="mt-2 text-[16px] leading-relaxed text-[var(--text-soft)]">{s.body}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          {/* ---------------------------------------------------- unit record */}
          <section className="section-stone">
            <div className="shell page-section">
              <h2 className="display-md text-[#FBFBFD]">Seller-advertised details, and what to check.</h2>
              <p className="mt-3 max-w-[58ch] text-[17px] leading-relaxed text-[var(--text-soft)]">
                Every line below is what the seller states, with the verification a buyer should
                complete before committing.
              </p>

              <div data-reveal className="mt-10 overflow-x-auto">
                <table data-ui className="w-full min-w-[560px] table-fixed border-collapse text-left">
                  <caption className="sr-only">Seller-advertised unit details and verification</caption>
                  <thead>
                    <tr data-ui className="border-b border-[#0B192C]">
                      <th scope="col" className="w-[22%] py-3 pr-6 font-normal text-[14px] text-[var(--text-soft)]">Parameter</th>
                      <th scope="col" className="w-[39%] py-3 pr-6 font-normal text-[14px] text-[var(--text-soft)]">Seller states</th>
                      <th scope="col" className="w-[39%] py-3 font-normal text-[14px] text-[var(--text-soft)]">Verify</th>
                    </tr>
                  </thead>
                  <tbody>
                    {UNIT_ROWS.map(([param, stated, verify]) => (
                      <tr key={param} data-ui className="border-b border-[var(--rule-strong)] align-top">
                        <th scope="row" className="py-4 pr-6 text-[16px] font-normal text-[#FBFBFD]">{param}</th>
                        <td className="py-4 pr-8 text-[16px] leading-relaxed text-[#FBFBFD] [overflow-wrap:anywhere]">{stated}</td>
                        <td className="py-4 text-[16px] leading-relaxed text-[var(--text-soft)]">{verify}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* --------------------------------------------------------- facts */}
          <section className="page-section">
            <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div data-reveal className="lg:col-span-4">
                <h2 className="display-lg text-[#FBFBFD]">The developer’s own record.</h2>
                <p className="mt-4 max-w-[36ch] text-[17px] leading-relaxed text-[var(--text-soft)]">
                  Published by Puravankara for the wider project. It is not a description of this
                  resale unit.
                </p>
                <a
                  href="https://www.puravankara.com/residential/bengaluru/purva-symphony"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-11 items-center gap-2 text-[16px] text-[#FBFBFD] underline decoration-[#D4AF37] decoration-2 underline-offset-4 hover:text-[#D4AF37]"
                >
                  Puravankara’s project page
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

              <dl data-reveal className="lg:col-span-8">
                {PROJECT_FACTS.map(([term, value]) => (
                  <div
                    key={term}
                    className="grid gap-1 py-3.5 sm:grid-cols-[14rem_1fr] sm:gap-6"
                  >
                    <dt className="text-[15px] text-[var(--text-soft)]">{term}</dt>
                    <dd className="min-w-0 text-[16px] leading-relaxed text-[#FBFBFD] figures [overflow-wrap:anywhere]">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <p className="shell mt-6 max-w-[70ch] text-[14px] leading-relaxed text-[var(--text-soft)]">
              *Developer-published project information for Purva Symphony, current as of our last
              review; prices, inventory, configuration and possession dates change. Confirm all
              details directly with Puravankara. The five-bedroom villa described on this page is a
              separate seller-advertised resale unit and is not a developer-confirmed configuration.
            </p>
          </section>

          {/* ------------------------------------------------------ location */}
          <section className="section-navy on-ink">
            <div className="shell page-section">
              <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
                <h2 className="display-lg lg:col-span-7 max-w-[20ch] text-white">
                  On Bannerghatta Road.
                </h2>
                <p className="lg:col-span-5 max-w-[44ch] text-[16px] leading-relaxed text-white/65">
                  Distances are published by Puravankara for the wider project. Travel time from this
                  specific unit varies with route and traffic.
                </p>
              </div>

              <div data-reveal className="mt-12 grid gap-10 md:grid-cols-3">
                {PLACES.map((group) => (
                  <div key={group.title}>
                    <h3 className="font-heading text-[1.125rem] text-[#E9C349]">{group.title}</h3>
                    <ul className="mt-3 space-y-2 text-[16px] leading-relaxed text-white/70">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ----------------------------------------------------------- faq */}
          <section className="page-section">
            <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div data-reveal className="lg:col-span-4">
                <h2 className="display-lg text-[#FBFBFD]">Questions on this listing.</h2>
                <p className="mt-4 max-w-[34ch] text-[17px] leading-relaxed text-[var(--text-soft)]">
                  Seller-provided details are not developer-verified. Puravankara’s record is linked
                  above.
                </p>
              </div>

              <div data-reveal className="lg:col-span-8">
                {PURVA_FAQS.map((faq) => (
                  <details key={faq.q} className="group py-5">
                    <summary className="flex min-h-11 cursor-pointer list-none items-start justify-between gap-6 text-[17px] leading-snug text-[#FBFBFD] transition-colors hover:text-[#D4AF37]">
                      <span>{faq.q}</span>
                      <span aria-hidden="true" className="mt-0.5 shrink-0 text-[#A8871F] transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 max-w-[62ch] text-[17px] leading-relaxed text-[var(--text-soft)]">
                      {faq.a}
                    </p>
                  </details>
                ))}

                <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3">
                  <button type="button" onClick={() => openSiteVisitModal()} className="btn-gold">
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Book a viewing
                  </button>
                  <a
                    href={`tel:+${WHATSAPP}`}
                    className="inline-flex min-h-11 items-center text-[17px] text-[#FBFBFD] underline decoration-[#D4AF37] decoration-2 underline-offset-4 hover:text-[#D4AF37] figures"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
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

export default function PurvaVillaView() {
  return (
    <PlotsProvider>
      <PurvaVillaContent />
    </PlotsProvider>
  );
}
