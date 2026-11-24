'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { ArrowRight, ArrowUpRight, MapPin, Phone } from 'lucide-react';
import { usePlots } from '../context/PlotsContext';
import { BENGALURU_CORRIDORS } from '../data/plotsData';

const WHATSAPP = '918431909508';
const PHONE_DISPLAY = '+91 84319 09508';
const MAPS_URL = 'https://maps.google.com/?q=UB+City+Bengaluru';

/* The catalogue stores 500px thumbnails; the same photograph is requested at
   display size rather than shipping a new asset. */
function hire(url, width = 2000) {
  if (!url) return url;
  return url.replace(/([?&])w=\d+/, `$1w=${width}`).replace(/([?&])q=\d+/, '$1q=80');
}

const CORRIDOR_LABEL = {
  'airport-chikkajala': 'Airport & Devanahalli',
  'chikkaballapura-nandi': 'Nandi Hills',
  'east-kothanur-hoskote': 'East, Hoskote',
  'south-bannerghatta': 'Bannerghatta',
  'south-jigani-apc': 'Jigani',
  'west-tumkur-kolar': 'Tumkur & Kolar',
  dubai: 'Dubai'
};

const GROUPS = [
  { id: 'plots', label: 'Open plots', match: (p) => p.propertyType === 'Open Plots' },
  { id: 'villas', label: 'Villas', match: (p) => p.propertyType === 'Villas' },
  { id: 'apartments', label: 'Apartments', match: (p) => p.propertyType === 'Apartments' },
  { id: 'dubai', label: 'Dubai', match: (p) => p.propertyType === 'Dubai Apartments' }
];

const FAQ = [
  {
    q: 'What does the seller advertise for the Purva Symphony resale?',
    a: 'A five-bedroom resale unit at Purva Symphony, The Sound of Water, currently quoted at ₹9.0 Cr, with 5,000 sq ft of land and 7,000 sq ft built-up area reported by the seller. Verify the sanctioned plan, measurements, price and availability against original documents before you commit.'
  },
  {
    q: 'Which corridors does the desk follow?',
    a: 'The airport and STRR belt, Chikkaballapura and Nandi Hills, Bannerghatta and NICE Road, the APC Circle and Jigani industrial edge, Tumkur and Kolar, and Dubai. Growth figures shown here are corridor-level commentary, not audited returns.'
  },
  {
    q: 'How are approvals checked?',
    a: 'Each project is checked for its approval record and title documents before it is published. Every listing carries the approval type and the RERA reference supplied for that project, and both should be verified against the original documents for the plot or unit you choose.'
  },
  {
    q: 'Why is there no brokerage for buyers?',
    a: 'As an authorised channel partner, the desk is paid by the developer. Advisory, documentation support and site visit arrangements are free to buyers.'
  },
  {
    q: 'Can Indian residents buy in Dubai?',
    a: 'Under the RBI Liberalised Remittance Scheme, Indian residents may remit up to USD 250,000 per financial year. Yields, visa eligibility and return figures quoted by sellers are indicative and must be confirmed with the developer and your advisor.'
  }
];

export default function HomePage({ setActivePage, setSelectedProjectId }) {
  const { projects, openSiteVisitModal } = usePlots();
  const [corridor, setCorridor] = useState('all');

  // Section entrances: one staggered rise as each heading and plate arrives.
  // Without script the content is never hidden; reduced motion opts out.
  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    root.classList.add('js-reveal');
    const items = Array.from(document.querySelectorAll('[data-reveal]'));
    if (!('IntersectionObserver' in window) || !items.length) {
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
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
    );
    items.forEach((el) => {
      const siblings = el.parentElement ? Array.from(el.parentElement.children) : [];
      el.style.transitionDelay = `${(siblings.indexOf(el) % 4) * 70}ms`;
      observer.observe(el);
    });
    return () => {
      observer.disconnect();
      root.classList.remove('js-reveal');
    };
  }, []);

  const openProject = (project) => {
    if (project.id === 'project-purva-sounds-of-water-villa') {
      setActivePage('purva-villa');
      return;
    }
    setSelectedProjectId(project.id);
    setActivePage('project-details');
  };

  const corridors = useMemo(
    () =>
      BENGALURU_CORRIDORS.filter(
        (c) => c.id !== 'all-corridors' && projects.some((p) => p.corridorId === c.id)
      ),
    [projects]
  );

  // Each corridor shows its most distinctive entry, not the same first row.
  const heroProject =
    (corridor === 'all'
      ? projects.find((p) => p.heroImage?.includes('1600585154340')) || projects[0]
      : projects.filter((p) => p.corridorId === corridor).slice(-1)[0]) || projects[0];
  const heroKey = `${corridor}-${heroProject.id}`;

  // One entry, one line: a project is printed under the first group it belongs to.
  const registerGroups = useMemo(() => {
    const seen = new Set();
    return GROUPS.map((group) => ({
      ...group,
      rows: projects.filter((p) => {
        if (seen.has(p.id) || !group.match(p)) return false;
        seen.add(p.id);
        return true;
      })
    })).filter((group) => group.rows.length);
  }, [projects]);

  const rail = projects.slice(0, 6);
  const faqPhoto = projects.find((p) => p.id === 'project-triton-nandi-villas') || projects[1];
  const contactPhoto = projects.find((p) => p.id === 'project-vinra-kbr-residences') || projects[2];
  const deskPhoto = projects.find((p) => p.id === 'project-sun-valley-chikkaballapura') || projects[1];

  return (
    <div>
      {/* ------------------------------------------------------------- hero */}
      <section className="relative isolate flex min-h-[calc(100svh-80px)] flex-col overflow-hidden bg-[#0B192C] text-white">
        <div className="relative min-h-[300px] flex-1 overflow-hidden sm:min-h-[380px]">
        {heroProject && (
          <img
            key={heroProject.id}
            src={hire(heroProject.heroImage, 2400)}
            alt={`${heroProject.title}, ${heroProject.location}`}
            width={2400}
            height={1500}
            fetchPriority="high"
                          className="absolute inset-0 -z-20 h-full w-full hero-plate object-cover"
          />
        )}
        <div className="absolute inset-0 -z-10 bg-[#070F1B]/30" aria-hidden="true" />
        </div>

        <div className="shell flex items-start justify-between gap-6 pb-5 pt-5 text-[14px] leading-relaxed text-[var(--text-soft)]">
          <p>Independent advisory · Zero brokerage to buyers</p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-white/75 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white sm:block"
          >
            UB City, Bengaluru
          </a>
        </div>

        {/* The title band sits on solid ink, so the register line is legible over any
            photograph and the plate above keeps its full colour. */}
        <div className="relative mt-auto w-full bg-[#070F1B]">
        <div className="shell grid gap-8 pb-24 pt-10 sm:gap-12 sm:pb-14 sm:pt-14 lg:grid-cols-12 lg:items-end lg:gap-10 lg:pb-14 lg:pt-16">
          <div className="lg:col-span-7">
            <h1 className="display-xl max-w-[13ch] text-white">A verified property register.</h1>
            <p className="mt-6 max-w-[44ch] text-[17px] leading-relaxed text-white/80 sm:text-[19px]">
              Plots, villas and apartments across Bengaluru and Dubai, checked for approval and
              title before they are listed.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
              <button type="button" onClick={() => openSiteVisitModal()} className="btn-gold">
                Book a site visit
              </button>
              <button
                type="button"
                onClick={() => setActivePage('projects')}
                className="inline-flex min-h-11 items-center gap-2 text-[17px] text-white underline decoration-[#D4AF37] decoration-2 underline-offset-[6px] transition-colors hover:text-[#E9C349]"
              >
                Browse the register
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 lg:justify-self-end lg:pb-1">
            {heroProject && (
              <div key={heroKey} className="max-w-[36ch]">
                <p className="font-heading text-[1.5rem] leading-snug text-white">
                  {heroProject.title}
                </p>
                <p className="mt-1 text-[14px] leading-relaxed text-white/65">
                  {heroProject.location}
                </p>
                <p className="mt-3 text-[14px] text-white/85">
                  <span className="figures">{heroProject.priceRange}</span>
                  <span className="ml-2 text-[14px] text-white/55">
                    {heroProject.propertyType === 'Villas' ? 'seller-quoted' : 'developer quote'}
                  </span>
                </p>
              </div>
            )}

            <div
              role="group"
              aria-label="Choose a corridor"
              className="mt-7 flex flex-wrap gap-x-5 gap-y-2 pr-16"
            >
              <button
                type="button"
                onClick={() => setCorridor('all')}
                aria-pressed={corridor === 'all'}
                className={`min-h-11 text-[14px] transition-colors ${
                  corridor === 'all' ? 'text-white underline decoration-[#D4AF37] decoration-2 underline-offset-4' : 'text-white/60 hover:text-white'
                }`}
              >
                All
              </button>
              {corridors.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setCorridor(c.id)}
                  aria-pressed={corridor === c.id}
                  className={`min-h-11 text-[14px] transition-colors ${
                    corridor === c.id ? 'text-white underline decoration-[#D4AF37] decoration-2 underline-offset-4' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {CORRIDOR_LABEL[c.id] || c.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* --------------------------------------------------------- showcase */}
      <section aria-labelledby="collection" className="relative isolate overflow-hidden bg-[#070F1B] py-20 text-white lg:py-28">
        <img
          src={hire(projects[3]?.heroImage || projects[0]?.heroImage, 2400)}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[#070F1B]/88" aria-hidden="true" />

        <div className="shell">
          <h2 data-reveal id="collection" className="display-lg max-w-[22ch] text-white">
            A short list, held by one desk.
          </h2>
          <p className="mt-5 max-w-[52ch] text-[17px] leading-relaxed text-white/70">
            Each entry below is a project the desk represents or a resale it has been asked to
            place. Prices are the developer’s or seller’s current quote.
          </p>
        </div>

        <ul className="shell mt-14 grid gap-12">
          {rail.slice(0, 3).map((project, index) => (
            <li
              key={project.id}
              data-reveal
              className={index % 2 === 1 ? 'lg:ml-auto lg:w-[76%]' : 'lg:w-[76%]'}
            >
              <article>
                <button
                  type="button"
                  onClick={() => openProject(project)}
                  className="frame block w-full text-left"
                  aria-label={`View ${project.title}`}
                >
                  <img
                    src={hire(project.galleryImages?.[0] || project.heroImage, 1600)}
                    alt={project.title}
                    width={1600}
                    height={1000}
                    loading="lazy"
                    decoding="async"
                    className="h-[240px] w-full object-cover sm:h-[320px] lg:h-[400px]"
                  />
                </button>
                <div className="sheet mt-0 px-6 py-5 sm:px-8">
                  <h3 className="font-heading text-[1.5rem] leading-snug">
                    {project.groupName || project.title}
                  </h3>
                  <p className="mt-2 max-w-[56ch] text-[14px] leading-relaxed text-[var(--sheet-soft)]">
                    {project.title}
                  </p>
                  <p className="mt-1 max-w-[56ch] text-[14px] leading-relaxed text-[var(--sheet-soft)]">
                    {project.location}
                  </p>
                  <p className="mt-4 font-heading text-[1.5rem] text-[var(--gold-on-light)] figures">
                    {project.priceRange}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>

      {/* --------------------------------------------------------- register */}
      <section aria-labelledby="register" className="page-section bg-[var(--sheet)] text-[var(--sheet-ink)]">
        <div className="shell">
          <h2 data-reveal id="register" className="display-lg max-w-[20ch] text-[var(--sheet-ink)]">
            The register, this week.
          </h2>
          <p className="lede mt-5 max-w-[52ch] text-[var(--sheet-soft)]">
            The full list runs to seven entries. Every line is confirmed with the developer or
            seller before the desk quotes it.
          </p>

          <div data-reveal className="mt-12">
            {registerGroups.map((group) => {
              const rows = group.rows;
              return (
                <div key={group.id} className="mt-14 first:mt-0">
                  <div className="flex items-baseline justify-between gap-6 pb-4">
                    <h3 className="font-heading text-[1.5rem] leading-none text-[var(--sheet-ink)]">{group.label}</h3>
                    <span className="shrink-0 text-[14px] text-[var(--sheet-soft)] figures">
                      {rows.length} {rows.length === 1 ? 'entry' : 'entries'}
                    </span>
                  </div>
                  <ul className={`grid gap-5 ${rows.length === 1 ? '' : 'sm:grid-cols-2'}`}>
                    {rows.map((project) => (
                      <li key={project.id}>
                        <button
                          type="button"
                          onClick={() => openProject(project)}
                          className="group relative block w-full overflow-hidden bg-[#070F1B] text-left transition-transform duration-500 hover:-translate-y-0.5"
                        >
                          <img
                            src={hire(project.heroImage, 1000)}
                            alt=""
                            aria-hidden="true"
                            width={1000}
                            height={1250}
                            loading="lazy"
                            decoding="async"
                            className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${
                              rows.length === 1 ? 'aspect-[4/3] sm:aspect-[16/9]' : 'aspect-[4/3] sm:aspect-[3/4]'
                            }`}
                          />
                          <div className="absolute inset-x-0 bottom-0 bg-[#070F1B]/92 px-5 py-4 sm:px-6 sm:py-5">
                            <p className="font-heading text-[1.25rem] leading-snug text-white">{project.title}</p>
                            <p className="mt-1 text-[14px] text-white/70">{project.location}</p>
                            <p className="mt-2 font-heading text-[1.15rem] text-[#D4AF37] figures">{project.priceRange}</p>
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
              <p className="text-[14px] text-[var(--sheet-soft)]">
                Corridors, approvals and price bands for every entry.
              </p>
              <button type="button" onClick={() => setActivePage('projects')} className="btn-ink">
                Open the full register
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ memo */}
      <section aria-labelledby="memo" className="section-navy page-section">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 data-reveal id="memo" className="display-lg text-white">
              The desk’s arithmetic.
            </h2>
            <p className="mt-5 max-w-[38ch] text-[17px] leading-relaxed text-white/75">
              Rather than hand you a calculator, here is the sum on one listed plot: what it costs
              today, and what a conservative holding period does to it.
            </p>
            <p className="mt-5 max-w-[40ch] text-[14px] leading-relaxed text-white/55">
              The corridor commentary quoted in the register is higher than the rate used here. The
              illustration is arithmetic, not a forecast, and land can stay flat.
            </p>
          </div>

          <div data-reveal className="sheet lg:col-span-7 px-7 py-9 sm:px-10 sm:py-11">
            <p className="font-heading text-[1.5rem] leading-snug">
              Oriaiyan Signature Plotted Developments
            </p>
            <p className="mt-1 text-[14px] text-[var(--sheet-soft)]">
              Kolar · 1,500 sq ft plot · seller-quoted rate
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5 sm:gap-x-10">
              {[
                { term: 'Plot area', value: '1,500 sq ft' },
                { term: 'Rate quoted', value: '₹4,200 / sq ft' },
                { term: 'Purchase price', value: '₹63,00,000' },
                { term: 'Holding period', value: '5 years' },
                { term: 'Assumed growth', value: '12% a year' },
                { term: 'Value after 5 years', value: '₹1.11 Cr' }
              ].map((row) => (
                <div key={row.term}>
                  <dt className="text-[14px] text-[var(--sheet-soft)]">{row.term}</dt>
                  <dd className="mt-1 font-heading text-[1.5rem] figures">{row.value}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-8 max-w-[52ch] text-[14px] leading-relaxed text-[var(--sheet-soft)]">
              ₹63,00,000 compounding at 12% for five years is ₹1,11,02,753 — a gain of ₹48.0 lakh
              before stamp duty, registration, taxes and holding costs. Ask for the current price
              sheet for the plot you are actually considering.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hello Setty Relators. Please send the current price sheet for Oriaiyan Signature Plotted Developments.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                Ask for the price sheet
              </a>
              <button type="button" onClick={() => openSiteVisitModal()} className="btn-quiet">
                Book a site visit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- about */}
      <section aria-labelledby="desk" className="page-section">
        <div className="shell">
          <h2 data-reveal id="desk" className="display-lg max-w-[18ch]">
            Why buyers work with the desk.
          </h2>
          <p className="mt-5 max-w-[46ch] text-[19px] leading-relaxed text-[var(--text-soft)]">
            We represent the developer directly, so the price you see is the allocation price, the
            paperwork is opened before you sign, and the visit is arranged around your schedule.
          </p>

          <div className="mt-12 grid gap-4 lg:grid-cols-12">
            <div data-reveal className="relative lg:col-span-8">
              <img
                src={hire(deskPhoto?.heroImage, 1800)}
                alt={deskPhoto ? `${deskPhoto.title}, ${deskPhoto.location}` : 'Plotted development'}
                width={1800}
                height={1125}
                loading="lazy"
                decoding="async"
                className="h-[320px] w-full object-cover sm:h-[440px]"
              />
              <div className="sheet p-5 sm:absolute sm:right-0 sm:top-0 sm:w-[330px]">
                <p className="text-[14px] leading-relaxed">
                  Six corridors, seven live entries, one desk. Nothing is published until its
                  approval record and title have been read.
                </p>
              </div>
            </div>

            <div data-reveal className="bg-[#133324] p-6 text-white lg:col-span-4">
              <svg viewBox="0 0 320 200" role="img" aria-label="Schematic of the corridors the desk follows, around Bengaluru" className="h-[170px] w-full">
                <path d="M40 150 L120 40 L200 70 L280 130" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeDasharray="5 6" />
                <circle cx="120" cy="40" r="4" fill="#D4AF37" />
                <circle cx="200" cy="70" r="4" fill="#D4AF37" />
                <circle cx="280" cy="130" r="4" fill="#D4AF37" />
                <circle cx="40" cy="150" r="4" fill="#D4AF37" />
                <circle cx="160" cy="110" r="9" fill="#E9C349" />
                <text x="160" y="140" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="var(--body-face)">Bengaluru</text>
                <text x="120" y="28" textAnchor="middle" fill="rgba(255,255,255,0.65)" fontSize="11" fontFamily="var(--body-face)">Airport</text>
                <text x="200" y="58" textAnchor="middle" fill="rgba(255,255,255,0.65)" fontSize="11" fontFamily="var(--body-face)">Nandi Hills</text>
                <text x="266" y="152" textAnchor="middle" fill="rgba(255,255,255,0.65)" fontSize="11" fontFamily="var(--body-face)">Jigani</text>
                <text x="78" y="170" textAnchor="middle" fill="rgba(255,255,255,0.65)" fontSize="11" fontFamily="var(--body-face)">Bannerghatta</text>
              </svg>

              <dl className="mt-6 grid grid-cols-2 gap-5">
                {[
                  ['Corridors', '6'],
                  ['Live entries', String(projects.length)],
                  ['Brokerage', 'Zero'],
                  ['Visits', 'By appointment']
                ].map(([term, value]) => (
                  <div key={term}>
                    <dt className="text-[14px] text-white/55">{term}</dt>
                    <dd className="mt-1 font-heading text-[1.5rem] text-white figures">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <ul className="mt-12 grid gap-x-12 gap-y-4 text-[17px] leading-relaxed text-[#FBFBFD] sm:grid-cols-2">
            {[
              'Direct developer allocation and pricing',
              'Approval records read per project, not assumed',
              'Channel partner for Puravankara, Oriaiyan, Triton, Vinra and D1',
              'Site visits arranged with cab pickup',
              'Title and documentation support',
              'Loan coordination with SBI, HDFC and ICICI'
            ].map((point) => (
              <li key={point} className="flex gap-3">
                <span aria-hidden="true" className="mt-[10px] h-1.5 w-1.5 shrink-0 bg-[#D4AF37]" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ----------------------------------------------------------- proof */}
      <section aria-labelledby="developers" className="section-blue overflow-hidden py-20 lg:py-28">
        <div data-reveal className="sheet mx-auto w-[90%] max-w-[720px] -rotate-1 px-7 py-12 text-center sm:px-12">
          <h2 data-reveal id="developers" className="font-heading text-[1.5rem]">
            The developers we represent
          </h2>
          <img
            src={hire(deskPhoto?.galleryImages?.[0] || deskPhoto?.heroImage, 1200)}
            alt={deskPhoto ? `Site at ${deskPhoto.title}` : 'Plotted development'}
            width={1200}
            height={675}
            loading="lazy"
            decoding="async"
            className="mt-7 h-[190px] w-full object-cover"
          />
          <p className="mx-auto mt-8 max-w-[26ch] font-heading text-[1.5rem] leading-[1.7]">
            Puravankara · Oriaiyan Group · Triton Groups · Vinra Group · D1 Projects · Dubai Global
            Estates
          </p>
          <p className="mx-auto mt-6 max-w-[46ch] text-[14px] leading-relaxed text-[var(--sheet-soft)]">
            Approvals are read per project, not inferred from the developer’s name.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------- faq */}
      <section aria-labelledby="questions" className="page-section">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 data-reveal id="questions" className="display-lg">
              Questions buyers ask.
            </h2>
            <p className="mt-4 max-w-[40ch] text-[17px] leading-relaxed text-[var(--text-soft)]">
              Approvals, brokerage, visits and Dubai remittance. Ask anything that is not covered.
            </p>

            <div className="mt-8 space-y-1">
              {FAQ.map((item) => (
                <details key={item.q} className="group py-4">
                  <summary className="flex min-h-11 cursor-pointer list-none items-start justify-between gap-6 text-[17px] leading-snug text-[#FBFBFD] transition-colors hover:text-[#D4AF37]">
                    <span>{item.q}</span>
                    <span aria-hidden="true" className="mt-1 shrink-0 text-[#A8871F] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-[58ch] text-[17px] leading-relaxed text-[var(--text-soft)]">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>

            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hello Setty Relators. I have a question about approvals and title verification.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-11 items-center gap-2 text-[17px] text-[#FBFBFD] underline decoration-[#D4AF37] decoration-2 underline-offset-4 hover:text-[#D4AF37]"
            >
              Ask the advisory desk
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div data-reveal className="relative lg:col-span-7">
            {faqPhoto && (
              <>
                <img
                  src={hire(faqPhoto.heroImage, 1400)}
                  alt={`${faqPhoto.title}, ${faqPhoto.location}`}
                  width={1000}
                  height={1333}
                  loading="lazy"
                  decoding="async"
                  className="h-[420px] w-full object-cover sm:h-[560px] lg:h-[640px]"
                />
                <img
                  src={hire(faqPhoto.galleryImages?.[1] || faqPhoto.galleryImages?.[0] || faqPhoto.heroImage, 800)}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  className="absolute bottom-[-32px] left-6 hidden h-[200px] w-[30%] object-cover sm:block"
                />
              </>
            )}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- contact */}
      <section aria-labelledby="visit" className="relative isolate">
        <img
          src={hire(contactPhoto?.heroImage, 2400)}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[#070F1B]/45" aria-hidden="true" />

        <div className="shell flex min-h-[76svh] items-start justify-end py-14">
          <div data-reveal className="sheet w-full max-w-[420px] px-7 py-8 sm:px-8">
            <h2 data-reveal id="visit" className="font-heading text-[1.5rem] leading-tight">
              Visit the desk
            </h2>
            <p className="mt-3 text-[17px] leading-relaxed">
              Level 5, Concorde Towers, UB City,
              <br />
              Vittal Mallya Road, Bengaluru 560001
            </p>

            <dl className="mt-6 space-y-3 text-[14px]">
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-[var(--sheet-soft)]">Site visits</dt>
                <dd className="text-right">By appointment</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-[var(--sheet-soft)]">Brokerage to buyers</dt>
                <dd className="text-right">Zero</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-[var(--sheet-soft)]">Desk</dt>
                <dd className="text-right figures">{PHONE_DISPLAY}</dd>
              </div>
            </dl>

            <button type="button" onClick={() => openSiteVisitModal()} className="btn-gold mt-7 w-full">
              Book a site visit
            </button>
            <a
              href={`tel:+${WHATSAPP}`}
              className="mt-3 flex min-h-11 items-center justify-center gap-2 text-[14px] text-[var(--sheet-ink)] underline decoration-[var(--gold-on-light)] decoration-2 underline-offset-4"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Speak to an advisor
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
