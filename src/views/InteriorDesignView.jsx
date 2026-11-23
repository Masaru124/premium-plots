'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { INTERIOR_PACKAGES } from '../data/plotsData';

const WHATSAPP = '918431909508';
const PHONE_DISPLAY = '+91 84319 09508';

const WORK_PHOTOS = [
  {
    src: '/images/purva-sounds-of-water/purva-villa-handcrafted-kitchen.jpeg',
    alt: 'Modular kitchen with island, dark cabinetry and stone worktop'
  },
  {
    src: '/images/purva-sounds-of-water/purva-villa-balcony-terrace.jpeg',
    alt: 'Covered balcony terrace with seating and timber ceiling'
  },
  {
    src: '/images/purva-sounds-of-water/purva-villa-swimming-pool.jpeg',
    alt: 'Private pool bordered by paving and planting'
  }
];

const SCOPE = [
  {
    title: 'Modular kitchen and dining',
    copy: 'Granite or quartz worktops, soft-close drawers, tandem boxes, chimney cut-outs and dado tiles.'
  },
  {
    title: 'Bedrooms and living areas',
    copy: 'Floor-to-ceiling wardrobes, laminate flooring, television units and accent panelling.'
  },
  {
    title: 'Civil, electrical and lighting',
    copy: 'RCC frame masonry, UPVC windows, cove lighting, CCTV wiring and car charging points.'
  }
];

const ROWS = [
  ['Dry area rate', 'dryAreaPrice', true],
  ['Wet area rate', 'wetAreaPrice', false],
  ['Core material, dry', 'coreDry', false],
  ['Core material, wet', 'coreWet', false],
  ['Finish', 'finish', false],
  ['Hardware and hinges', 'hardware', false],
  ['Kitchen accessories', 'accessories', false],
  ['Handles', 'handles', false]
];

export default function InteriorDesignView() {
  return (
    <div>
      {/* ------------------------------------------------------------- hero */}
      <section className="shell pt-10 lg:pt-14">
        <p className="text-[14px] text-[#7A5C10]">Interiors · executed with Vinra</p>
        <div className="mt-4 grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <h1 className="display-xl max-w-[15ch] text-[#0B1F3A]">
              Interiors, priced by the square foot.
            </h1>
            <p className="mt-6 max-w-[50ch] text-[19px] leading-relaxed text-[var(--text-soft)]">
              Modular interiors, elevation planning and material execution for plot owners and villa
              buyers across Bengaluru, delivered by Vinra Interiors and Renovations.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
              <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hi Vinra Interiors! I want to request an interior design quote and 3D consultation.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Book a consultation
              </a>
              <a
                href={`tel:+${WHATSAPP}`}
                className="inline-flex min-h-11 items-center text-[17px] text-[#0B1F3A] underline decoration-[#C8A34D] decoration-2 underline-offset-4 hover:text-[#7A5C10] figures"
              >
                or call {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <figure className="lg:col-span-5">
            <img
              src={WORK_PHOTOS[0].src}
              alt={WORK_PHOTOS[0].alt}
              width={1000}
              height={760}
              className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[420px]"
            />
            <figcaption className="plate-line">
              <span>A kitchen delivered under the Gold package</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* -------------------------------------------------------------- work */}
      <section className="shell mt-12 lg:mt-16">
        <div className="grid gap-4 sm:grid-cols-2">
          {WORK_PHOTOS.slice(1).map((photo, i) => (
            <figure key={photo.src} className={i === 1 ? 'sm:mt-10' : ''}>
              <img
                src={photo.src}
                alt={photo.alt}
                width={1000}
                height={700}
                loading="lazy"
                decoding="async"
                className="h-[240px] w-full object-cover sm:h-[320px]"
              />
            </figure>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------- packages */}
      <section className="page-section">
        <div className="shell">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <h2 className="display-lg lg:col-span-7 text-[#0B1F3A]">Three turnkey packages.</h2>
            <p className="lg:col-span-5 max-w-[46ch] text-[17px] leading-relaxed text-[var(--text-soft)]">
              Transparent per-square-foot pricing with factory-finish modular woodwork, Century and
              Greenply boards, and Hettich or Hafele hardware.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto">
            <table data-ui className="w-full min-w-[720px] border-collapse text-left">
              <caption className="sr-only">
                Interior package comparison: Silver, Gold and Platinum
              </caption>
              <thead>
                <tr data-ui className="border-b border-[#0B1F3A]">
                  <th scope="col" className="py-4 pr-6 text-[14px] font-normal text-[var(--text-soft)]">
                    Included
                  </th>
                  {INTERIOR_PACKAGES.map((pkg) => (
                    <th key={pkg.name} scope="col" className="px-6 py-4 align-bottom">
                      <span className="block font-heading text-[1.25rem] text-[#0B1F3A]">
                        {pkg.name.replace(' Package', '')}
                      </span>
                      {pkg.name === 'Gold Package' && (
                        <span className="mt-1 block text-[14px] text-[#7A5C10]">Most chosen</span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map(([label, key, strong]) => (
                  <tr key={label} data-ui className="border-b border-[var(--rule)]">
                    <th scope="row" className="py-4 pr-6 text-[16px] font-normal text-[var(--text-soft)]">
                      {label}
                    </th>
                    {INTERIOR_PACKAGES.map((pkg) => (
                      <td
                        key={pkg.name}
                        className={`px-6 py-4 text-[16px] leading-relaxed ${
                          strong ? 'text-[#0B1F3A] figures' : 'text-[#1A1A1A]'
                        }`}
                      >
                        {pkg[key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
            {INTERIOR_PACKAGES.map((pkg) => (
              <a
                key={pkg.name}
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hi Vinra Interiors! I want details on the ${pkg.name}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center text-[16px] text-[#0B1F3A] underline decoration-[#C8A34D] decoration-2 underline-offset-4 hover:text-[#7A5C10]"
              >
                Ask about {pkg.name.replace(' Package', '')}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- scope */}
      <section className="section-navy on-ink">
        <div className="shell page-section">
          <h2 className="display-lg max-w-[18ch] text-white">What the work covers.</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {SCOPE.map((item, i) => (
              <div key={item.title}>
                <p className="font-heading text-[1.25rem] text-[#DFC06E] figures">{i + 1}</p>
                <h3 className="mt-2 font-heading text-[1.25rem] text-white">{item.title}</h3>
                <p className="mt-2 text-[16px] leading-relaxed text-white/70">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
