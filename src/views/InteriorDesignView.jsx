'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { INTERIOR_PACKAGES } from '../data/plotsData';

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

export default function InteriorDesignView({ setActivePage }) {
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
                Interiors, <span className="text-[#C8A34D]">priced by the sq ft</span>
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
                Modular interiors, elevation planning and material execution for plot owners and villa buyers across Bengaluru, delivered by Vinra Interiors and Renovations.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi Vinra Interiors! I want to request an interior design quote and 3D consultation.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold cursor-pointer px-7 py-4 text-sm"
                >
                  <MessageCircle className="h-4 w-4 text-[#0B1F3A]" aria-hidden="true" />
                  Book a consultation
                </a>
                <a
                  href={`tel:+${whatsappNumber}`}
                  className="text-sm font-semibold text-[#C8A34D] transition-colors hover:text-white"
                >
                  or call {displayPhone}
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg">
              <img
                src={WORK_PHOTOS[0].src}
                alt={WORK_PHOTOS[0].alt}
                width={1000}
                height={760}
                className="h-[300px] w-full object-cover sm:h-[400px] lg:h-[460px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Work photographs */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {WORK_PHOTOS.slice(1).map((photo) => (
            <figure key={photo.src} className="overflow-hidden rounded-lg">
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-72 w-full object-cover sm:h-80"
              />
            </figure>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="border-t border-[#0B1F3A]/10 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-[#0B1F3A]">
            Three turnkey packages
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#555555]">
            Transparent per-square-foot pricing with factory-finish modular woodwork, Century and Greenply boards, and Hettich or Hafele hardware.
          </p>

          {/* A comparison table is the honest shape for three packages priced line by line. */}
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <caption className="sr-only">Interior package comparison: Silver, Gold and Platinum</caption>
              <thead>
                <tr className="bg-[#0B1F3A] text-white">
                  <th scope="col" className="rounded-tl-lg px-5 py-4 text-base font-semibold">
                    Included
                  </th>
                  {INTERIOR_PACKAGES.map((pkg, i) => (
                    <th
                      key={pkg.name}
                      scope="col"
                      className={`px-5 py-4 text-base font-semibold ${i === INTERIOR_PACKAGES.length - 1 ? 'rounded-tr-lg' : ''}`}
                    >
                      {pkg.name.replace(' Package', '')}
                      {pkg.name === 'Gold Package' && (
                        <span className="mt-1 block text-sm font-normal text-[#C8A34D]">Most chosen</span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#F8F8F5]">
                  <th scope="row" className="px-5 py-4 text-base font-semibold text-[#0B1F3A]">Dry area rate</th>
                  {INTERIOR_PACKAGES.map((pkg) => (
                    <td key={pkg.name} className="px-5 py-4 text-base font-bold tabular-nums text-[#0B1F3A]">
                      {pkg.dryAreaPrice}
                    </td>
                  ))}
                </tr>
                <tr className="bg-white">
                  <th scope="row" className="px-5 py-4 text-base font-semibold text-[#0B1F3A]">Wet area rate</th>
                  {INTERIOR_PACKAGES.map((pkg) => (
                    <td key={pkg.name} className="px-5 py-4 text-base tabular-nums text-[#555555]">
                      {pkg.wetAreaPrice}
                    </td>
                  ))}
                </tr>
                {[
                  ['Core material, dry', 'coreDry'],
                  ['Core material, wet', 'coreWet'],
                  ['Finish', 'finish'],
                  ['Hardware and hinges', 'hardware'],
                  ['Kitchen accessories', 'accessories'],
                  ['Handles', 'handles']
                ].map(([label, key], rowIndex) => (
                  <tr key={label} className={rowIndex % 2 === 0 ? 'bg-[#F8F8F5]' : 'bg-white'}>
                    <th scope="row" className="px-5 py-4 text-base font-semibold text-[#0B1F3A]">{label}</th>
                    {INTERIOR_PACKAGES.map((pkg) => (
                      <td key={pkg.name} className="px-5 py-4 text-base leading-relaxed text-[#555555]">
                        {pkg[key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {INTERIOR_PACKAGES.map((pkg) => (
              <a
                key={pkg.name}
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi Vinra Interiors! I want details on the ${pkg.name}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-[#0B1F3A]/20 px-5 py-3 text-sm font-bold text-[#0B1F3A] transition-colors hover:border-[#0B1F3A]"
              >
                Ask about {pkg.name.replace(' Package', '')}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Scope */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-[#0B1F3A]">What the work covers</h2>
        <div className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-3">
          {SCOPE.map((item) => (
            <div key={item.title} className="space-y-2">
              <h3 className="font-heading text-lg font-bold text-[#0B1F3A]">{item.title}</h3>
              <p className="text-base leading-relaxed text-[#555555]">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
