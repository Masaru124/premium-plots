'use client';

import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { usePlots } from '../context/PlotsContext';

const WHATSAPP = '918431909508';
const PHONE_DISPLAY = '+91 84319 09508';

/* The catalogue stores 500px thumbnails; the same photograph is requested at
   display size rather than shipping a new asset. */
function hire(url, width = 1600) {
  if (!url) return url;
  return url.replace(/([?&])w=\d+/, `$1w=${width}`).replace(/([?&])q=\d+/, '$1q=80');
}

const BENEFITS = [
  { figure: '0%', title: 'Tax-free income', copy: 'No income tax, capital gains tax or property tax on rental returns and appreciation.' },
  { figure: '10 yr', title: 'Golden visa', copy: 'Invest AED 2M (about ₹4.5 Cr) in property to qualify for long-term UAE residency for your family.' },
  { figure: '8–10%', title: 'Rental yield', copy: 'Annual yields paid in a currency pegged to the US dollar, rather than a depreciating rupee.' },
  { figure: '100%', title: 'Freehold title', copy: 'Outright ownership for foreign nationals in Dubai’s designated freehold zones.' }
];

export default function DubaiView({ setActivePage, setSelectedProjectId }) {
  const { projects } = usePlots();
  const dubaiProjects = projects.filter((p) => p.propertyType === 'Dubai Apartments' || p.corridorId === 'dubai');
  const heroImage = dubaiProjects[0]?.heroImage;

  return (
    <div>
      {/* ------------------------------------------------------------- hero */}
      <section className="relative isolate overflow-hidden bg-[#0B1F3A]">
        {heroImage && (
          <img
            src={hire(heroImage, 2400)}
            alt="Dubai Marina waterfront apartments at sunset"
            width={2400}
            height={1400}
            fetchPriority="high"
            className="absolute inset-0 -z-20 h-full w-full hero-plate object-cover"
          />
        )}
        <div className="absolute inset-0 -z-10 bg-[#071527]/72" aria-hidden="true" />

        <div className="shell flex min-h-[74svh] flex-col justify-end pb-14 pt-24 text-white lg:pb-16">
          <p className="text-[14px] text-white/70">Dubai · advised from Bengaluru</p>
          <h1 className="mt-4 display-xl max-w-[16ch] text-white">
            Dubai property, bought from here.
          </h1>
          <p className="mt-6 max-w-[48ch] text-[19px] leading-relaxed text-white/80">
            Waterfront apartments in Dubai Marina, Downtown and Palm Jumeirah, with the LRS paperwork
            and the developer introduction handled by the desk.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
            <button type="button" onClick={() => setActivePage('contact')} className="btn-gold">
              Book a Dubai consultation
            </button>
            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hi Setty Relators! I want to discuss Dubai property investment.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 text-[17px] text-white underline decoration-[#C8A34D] decoration-2 underline-offset-[6px] hover:text-[#DFC06E]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Message {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ reasons */}
      <section className="page-section">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="display-lg text-[#0B1F3A]">Why buyers here look at Dubai.</h2>
            <p className="mt-4 max-w-[36ch] text-[17px] leading-relaxed text-[var(--text-soft)]">
              Four incentives drive almost every Dubai purchase we advise on. None of them depend on
              the developer.
            </p>
          </div>

          <dl className="lg:col-span-8">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="grid gap-3 py-6 first:pt-0 last:pb-0 sm:grid-cols-[9rem_1fr] sm:gap-8"
              >
                <dt className="font-heading text-[2rem] leading-none text-[#0B1F3A] figures">
                  {b.figure}
                </dt>
                <dd>
                  <p className="text-[17px] text-[#1A1A1A]">{b.title}</p>
                  <p className="mt-1 max-w-[58ch] text-[17px] leading-relaxed text-[var(--text-soft)]">
                    {b.copy}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ----------------------------------------------------------- listings */}
      <section className="section-navy on-ink">
        <div className="shell page-section">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="display-lg max-w-[20ch] text-white">Apartments in the register.</h2>
            <p className="max-w-[42ch] text-[16px] leading-relaxed text-white/65">
              Confirm current pricing, unit availability and payment plans with the desk before
              relying on any figure here.
            </p>
          </div>

          <ul className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {dubaiProjects.map((proj) => (
              <li key={proj.id}>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedProjectId(proj.id);
                    setActivePage('project-details');
                  }}
                  className="frame block w-full text-left"
                  aria-label={`View ${proj.title}`}
                >
                  <img
                    src={hire(proj.heroImage, 1000)}
                    alt={proj.title}
                    width={1000}
                    height={700}
                    loading="lazy"
                    decoding="async"
                    className="h-56 w-full object-cover sm:h-64"
                  />
                </button>

                <div className="plate-line">
                  <span>{proj.location}</span>
                  <span className="plate-price figures">{proj.formattedStartPrice}</span>
                </div>

                <h3 className="mt-3 font-heading text-[1.25rem] leading-snug text-white">
                  {proj.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-[16px] leading-relaxed text-white/65">
                  {proj.overview}
                </p>
                <p className="mt-3 text-[14px] text-white/50">{proj.developer}</p>

                <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedProjectId(proj.id);
                      setActivePage('project-details');
                    }}
                    className="inline-flex min-h-11 items-center gap-2 text-[16px] text-white underline decoration-[#C8A34D] decoration-2 underline-offset-4 hover:text-[#DFC06E]"
                  >
                    Full details
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <a
                    href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hi! I want details on ${proj.title} in Dubai.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 text-[16px] text-white/60 hover:text-white"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Ask
                  </a>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-14 max-w-[62ch] text-[15px] leading-relaxed text-white/60">
            We are an independent real estate consultancy working with multiple reputed developers as
            channel partners. We help buyers compare projects, arrange site visits and connect
            directly with developers.
          </p>
        </div>
      </section>
    </div>
  );
}
