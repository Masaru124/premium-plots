'use client';

import React from 'react';
import { MessageCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { usePlots } from '../context/PlotsContext';

export default function DubaiView({ setActivePage, setSelectedProjectId }) {
  const { projects } = usePlots();
  const dubaisProjects = projects.filter(p => p.propertyType === 'Dubai Apartments' || p.corridorId === 'dubai');
  const whatsappNumber = '918431909508';
  const displayPhone = '+91 84319 09508';

  const benefits = [
    { figure: '0%', title: 'Tax-free income', copy: 'No income tax, capital gains tax or property tax on rental returns and appreciation.' },
    { figure: '10 yr', title: 'Golden visa', copy: 'Invest AED 2M (about ₹4.5 Cr) in property to qualify for long-term UAE residency for your family.' },
    { figure: '8–10%', title: 'Rental yield', copy: 'Annual yields paid in a currency pegged to the US dollar, rather than a depreciating rupee.' },
    { figure: '100%', title: 'Freehold title', copy: 'Outright ownership for foreign nationals in Dubai\u2019s designated freehold zones.' }
  ];

  const heroImage = dubaisProjects[0]?.heroImage;

  return (
    <div className="bg-[#F8F8F5]">
      {/* Hero */}
      <section className="bg-[#0B1F3A] text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:gap-16">
            <div className="space-y-6">
              <h1 className="font-heading text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Dubai property, <span className="text-[#C8A34D]">bought from Bengaluru</span>
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
                Waterfront apartments in Dubai Marina, Downtown and Palm Jumeirah, with 8 to 10% tax-free rental returns and 10-year Golden Visa eligibility. We handle the LRS paperwork and the developer introduction.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setActivePage('contact')}
                  className="btn-gold cursor-pointer px-7 py-4 text-sm"
                >
                  Book a Dubai consultation
                </button>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi Lakshie Real Estate! I want to discuss Dubai property investment.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#C8A34D] transition-colors hover:text-white"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Or message {displayPhone}
                </a>
              </div>
            </div>

            {heroImage && (
              <div className="overflow-hidden rounded-lg">
                <img
                  src={heroImage}
                  alt="Dubai Marina waterfront apartments at sunset"
                  width={1000}
                  height={760}
                  className="h-[300px] w-full object-cover sm:h-[400px] lg:h-[460px]"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div className="space-y-3">
            <h2 className="font-heading text-3xl font-bold text-[#0B1F3A]">
              Why Indian buyers choose Dubai
            </h2>
            <p className="text-base leading-relaxed text-[#555555]">
              Four incentives drive almost every Dubai purchase we advise on. None of them depend on the developer.
            </p>
          </div>

          <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {benefits.map((b) => (
              <div key={b.title} className="space-y-1">
                <dt className="font-heading text-2xl font-bold tabular-nums text-[#0B1F3A]">{b.figure}</dt>
                <dd className="text-base font-semibold text-[#0B1F3A]">{b.title}</dd>
                <dd className="text-base leading-relaxed text-[#555555]">{b.copy}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Listings */}
      <section className="border-t border-[#0B1F3A]/10 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-[#0B1F3A]">
            Available Dubai apartments
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#555555]">
            Confirm current pricing, unit availability and payment plans with the advisor before relying on any figure here.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {dubaisProjects.map((proj) => (
              <article key={proj.id} className="flex flex-col overflow-hidden rounded-lg border border-[#0B1F3A]/10">
                <div className="relative h-60 overflow-hidden bg-[#0B1F3A]">
                  <img src={proj.heroImage} alt={proj.title} loading="lazy" className="h-full w-full object-cover" />
                  <div className="absolute inset-x-0 bottom-0 bg-[#0B1F3A] px-5 py-4">
                    <p className="text-sm text-[#C8A34D]">{proj.location}</p>
                    <h3 className="mt-1 font-heading text-lg font-bold text-white">{proj.title}</h3>
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between gap-5 p-6">
                  <p className="line-clamp-3 text-base leading-relaxed text-[#555555]">{proj.overview}</p>

                  <div className="flex items-baseline justify-between gap-4 border-t border-[#0B1F3A]/10 pt-4">
                    <div>
                      <p className="text-sm text-[#555555]">Starting price</p>
                      <p className="font-heading text-lg font-bold tabular-nums text-[#0B1F3A]">{proj.formattedStartPrice}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-[#555555]">Developer</p>
                      <p className="text-base font-semibold text-[#0B1F3A]">{proj.developer}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => { setSelectedProjectId(proj.id); setActivePage('project-details'); }}
                      className="cursor-pointer rounded-lg border border-[#0B1F3A]/20 py-3 text-sm font-bold text-[#0B1F3A] transition-colors hover:border-[#0B1F3A]"
                    >
                      View details
                    </button>
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi! I want details on ${proj.title} in Dubai.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold py-3 text-center text-sm"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Disclosure */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-[#0B1F3A] px-6 py-8 text-white sm:px-10">
          <h2 className="font-heading text-xl font-bold text-[#C8A34D]">Channel partner disclosure</h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-white/85">
            We are an independent real estate consultancy working with multiple reputed developers as channel partners. We help buyers compare projects, arrange site visits and connect directly with developers.
          </p>
        </div>
      </section>
    </div>
  );
}
