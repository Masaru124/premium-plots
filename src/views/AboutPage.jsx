'use client';

import React from 'react';
import { MessageCircle, MapPin } from 'lucide-react';

const WHATSAPP = '918431909508';
const PHONE_DISPLAY = '+91 84319 09508';

const POINTS = [
  'We work with multiple developers, not one',
  'Every project is checked for approval and title',
  'Guidance from an advisor who knows the corridor',
  'Site visits arranged and driven for you',
  'Documentation and loan support through to registration',
  'Investment advice grounded in real transaction data',
  'Pricing and process stated plainly, in writing'
];

export default function AboutPage() {
  return (
    <div>
      {/* ------------------------------------------------------------- hero */}
      <section className="shell pt-10 lg:pt-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <h1 className="display-xl max-w-[26ch] text-[#0B1F3A]">
              A Bengaluru advisory desk, not a listings site.
            </h1>
            <p className="mt-6 max-w-[54ch] text-[19px] leading-relaxed text-[var(--text-soft)]">
              Setty Relators is an independent consultancy and authorised channel partner for
              developers in Bengaluru and Dubai. We compare projects on your behalf and connect you
              directly with the developer.
            </p>
            <p className="mt-4 max-w-[54ch] text-[17px] leading-relaxed text-[var(--text-soft)]">
              That means the price you see is the allocation price, our fee comes from the developer
              rather than from you, and nobody is paid to steer you toward a particular project.
            </p>
          </div>

          <figure className="lg:col-span-5">
            <img
              src="/images/purva-sounds-of-water/purva-villa-front-portico.jpeg"
              alt="Villa entrance portico at Purva Symphony, off Bannerghatta Road"
              width={1000}
              height={760}
              className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[420px]"
            />
            <figcaption className="plate-line">
              <span>A development we represent in South Bengaluru</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ------------------------------------------------------------ photos */}
      <section aria-label="Developments the desk represents" className="shell mt-12 lg:mt-16">
        <div className="grid gap-4 sm:grid-cols-2">
          <figure>
            <img
              src="/images/purva-sounds-of-water/purva-villas-community.jpeg"
              alt="Villa residences and landscaped gardens at a community in South Bengaluru"
              width={1400}
              height={900}
              loading="lazy"
              decoding="async"
              className="h-[240px] w-full object-cover sm:h-[300px]"
            />
            <figcaption className="plate-line">
              <span>The community, off Bannerghatta Road</span>
            </figcaption>
          </figure>
          <figure className="sm:mt-10">
            <img
              src="/images/purva-sounds-of-water/purva-villa-swimming-pool.jpeg"
              alt="Pool and paving at a villa community the desk represents"
              width={1400}
              height={900}
              loading="lazy"
              decoding="async"
              className="h-[240px] w-full object-cover sm:h-[300px]"
            />
            <figcaption className="plate-line">
              <span>Photographs of the developments, not of a specific unit</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* -------------------------------------------------------- how we work */}
      <section className="page-section">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="display-lg text-[#0B1F3A]">How we work</h2>
            <p className="mt-4 max-w-[34ch] text-[17px] leading-relaxed text-[var(--text-soft)]">
              Seven things you can expect from the first call to the registration date.
            </p>
          </div>

          <ol className="lg:col-span-8">
            {POINTS.map((point, i) => (
              <li
                key={point}
                className="flex gap-5 py-5 text-[17px] leading-relaxed text-[#1A1A1A] first:pt-0 last:pb-0 sm:gap-8"
              >
                <span className="w-8 shrink-0 font-heading text-[1.25rem] text-[#A6832A] figures">
                  {i + 1}
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* --------------------------------------------------------- disclosure */}
      <section className="section-navy on-ink">
        <div className="shell page-section">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="display-md text-white">Channel partner disclosure</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="max-w-[64ch] text-[19px] leading-relaxed text-white/85">
                We are an independent real estate consultancy working with multiple reputed
                developers as channel partners. We help buyers compare projects, arrange site visits
                and connect directly with developers. Booking agreements, allotment terms and
                payments are executed directly between the buyer and the respective developer.
              </p>
              <dl className="mt-8 flex flex-wrap gap-x-12 gap-y-4 text-[16px] text-white/70">
                <div>
                  <dt className="text-white/50">Brokerage to buyers</dt>
                  <dd className="mt-1 text-white">Zero</dd>
                </div>
                <div>
                  <dt className="text-white/50">Desk</dt>
                  <dd className="mt-1 flex items-center gap-2 text-white">
                    <MapPin className="h-4 w-4 text-[#C8A34D]" aria-hidden="true" />
                    UB City and Indiranagar, Bengaluru
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ contact */}
      <section className="page-section">
        <div className="shell flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="display-lg text-[#0B1F3A]">Speak to an advisor</h2>
            <p className="mt-4 max-w-[46ch] text-[17px] leading-relaxed text-[var(--text-soft)]">
              Price sheets, RERA documents and layout masterplans, sent to your WhatsApp.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hi! I want to speak with a senior real estate advisor.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Message the desk
            </a>
            <a
              href={`tel:+${WHATSAPP}`}
              className="inline-flex min-h-11 items-center text-[17px] text-[#0B1F3A] underline decoration-[#C8A34D] decoration-2 underline-offset-4 hover:text-[#7A5C10] figures"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
