'use client';

import React from 'react';
import { Check, MessageCircle, MapPin } from 'lucide-react';

const POINTS = [
  'We work with multiple developers, not one',
  'Every project is checked for approval and title',
  'Guidance from an advisor who knows the corridor',
  'Site visits arranged and driven for you',
  'Documentation and loan support through to registration',
  'Investment advice grounded in real transaction data',
  'Pricing and process stated plainly, in writing'
];

export default function AboutPage({ setActivePage }) {
  const whatsappNumber = '918431909508';
  const displayPhone = '+91 84319 09508';

  return (
    <div className="bg-[#F8F8F5]">
      {/* Hero */}
      <section className="bg-[#0B1F3A] text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:gap-16">
            <div className="space-y-6">
              <h1 className="font-heading text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                A Bengaluru advisory desk, <span className="text-[#C8A34D]">not a listings site</span>
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
                Lakshie Real Estate is an independent consultancy and authorised channel partner for developers in Bengaluru and Dubai. We compare projects on your behalf and connect you directly with the developer.
              </p>
              <p className="max-w-xl text-base leading-relaxed text-white/70">
                That means the price you see is the allocation price, our fee comes from the developer rather than from you, and nobody is paid to steer you toward a particular project.
              </p>
            </div>

            <figure className="overflow-hidden rounded-lg">
              <img
                src="/images/purva-sounds-of-water/purva-villa-front-portico.jpeg"
                alt="Villa entrance portico at Purva Symphony, off Bannerghatta Road"
                width={1000}
                height={760}
                className="h-[300px] w-full object-cover sm:h-[400px] lg:h-[460px]"
              />
              <figcaption className="mt-3 text-sm text-white/60">
                A development we represent in South Bengaluru.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div className="space-y-3">
            <h2 className="font-heading text-3xl font-bold text-[#0B1F3A]">How we work</h2>
            <p className="text-base leading-relaxed text-[#555555]">
              Seven things you can expect from the first call to the registration date.
            </p>
          </div>

          <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-[#7A5C10]" aria-hidden="true" />
                <span className="text-base leading-relaxed text-[#1A1A1A]">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Disclosure */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-[#0B1F3A] px-6 py-8 text-white sm:px-10">
          <h2 className="font-heading text-xl font-bold text-[#C8A34D]">Channel partner disclosure</h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-white/85">
            We are an independent real estate consultancy working with multiple reputed developers as channel partners. We help buyers compare projects, arrange site visits and connect directly with developers. Booking agreements, allotment terms and payments are executed directly between the buyer and the respective developer.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3 text-base text-white/75">
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#C8A34D]" aria-hidden="true" /> Zero brokerage to buyers
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#C8A34D]" aria-hidden="true" /> UB City and Indiranagar, Bengaluru
            </span>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-[#0B1F3A]/10 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl space-y-2">
              <h2 className="font-heading text-2xl font-bold text-[#0B1F3A] sm:text-3xl">
                Speak to an advisor
              </h2>
              <p className="text-base leading-relaxed text-[#555555]">
                Price sheets, RERA documents and layout masterplans, sent to your WhatsApp.
              </p>
            </div>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi! I want to speak with a senior real estate advisor.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex w-fit cursor-pointer items-center gap-2 px-7 py-4 text-sm"
            >
              <MessageCircle className="h-4 w-4 text-[#0B1F3A]" aria-hidden="true" />
              {displayPhone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
