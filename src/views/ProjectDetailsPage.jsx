'use client';

import React, { useEffect, useState } from 'react';
import { MapPin, Calendar, MessageCircle, ArrowLeft, ArrowRight, Download } from 'lucide-react';
import { usePlots } from '../context/PlotsContext';
import PlotMasterplanViewer from '../components/PlotMasterplanViewer';

const WHATSAPP = '918431909508';
const PHONE_DISPLAY = '+91 84319 09508';

/* The catalogue stores 500px thumbnails; the same photograph is requested at
   display size rather than shipping a new asset. */
function hire(url, width = 1600) {
  if (!url) return url;
  return url.replace(/([?&])w=\d+/, `$1w=${width}`).replace(/([?&])q=\d+/, '$1q=80');
}

export default function ProjectDetailsPage({ projectId, setActivePage }) {
  const { projects, openSiteVisitModal } = usePlots();
  const project = projects.find((p) => p.id === projectId) || projects[0] || {};

  const [activeImage, setActiveImage] = useState(project.heroImage || '/images/nisarga-boulevard.jpg');

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
    items.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      root.classList.remove('js-reveal');
    };
  }, [project.id]);

  const googleMapsUrl = project.googleMapsUrl || 'https://maps.app.goo.gl/nd1REcJDzUBVkFAg9';
  const isResale = project.id === 'project-purva-sounds-of-water-villa';
  const gallery = project.galleryImages || [];
  /* The catalogue title carries the full seller claim; the page headline stays
     short enough to set as a headline, with the claim in the copy below. */
  const displayTitle = isResale ? 'Purva Sounds of Water villa resale' : project.title;

  return (
    <div>
      {/* ------------------------------------------------------------ header */}
      <section className="shell pt-10 lg:pt-14">
        <div className="flex flex-wrap items-center gap-4 text-[14px]">
          <button
            type="button"
            onClick={() => setActivePage('projects')}
            className="inline-flex min-h-11 items-center gap-2 text-[#FBFBFD] underline decoration-[#D4AF37] decoration-2 underline-offset-4 hover:text-[#D4AF37]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to the register
          </button>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-[14px] text-[#D4AF37]">
              {project.propertyType}
              {project.groupName ? ` · ${project.groupName}` : ''}
              {project.corridorId ? ` · ${project.location}` : ''}
            </p>
            <h1 className="mt-3 display-lg max-w-[24ch] text-[#FBFBFD]">{displayTitle}</h1>
            <p className="mt-5 text-[17px] leading-relaxed text-[var(--text-soft)]">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2 underline decoration-[#D4AF37] decoration-2 underline-offset-4 hover:text-[#D4AF37]"
              >
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#D4AF37]" aria-hidden="true" />
                {project.location}
              </a>
            </p>
          </div>

          <div className="lg:col-span-4">
            <p className="font-heading text-[2rem] leading-tight text-[#FBFBFD] figures sm:text-[2.5rem]">
              {project.formattedStartPrice}
            </p>
            <p className="mt-1 text-[15px] text-[var(--text-soft)] figures">{project.priceRange}</p>
            <p className="mt-1 text-[14px] text-[var(--text-soft)]">
              {isResale ? 'Seller-quoted asking price' : 'Developer quote, confirmed before booking'}
              <span className="block">By {project.developer}</span>
            </p>
            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                `Hi! I want to book a site visit for ${project.title} (${project.location}).`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-5 w-full"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Book a site visit
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                `Hi! Please send me the brochure packet and price list for ${project.title}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex min-h-11 w-full items-center gap-2 text-[14px] text-[#FBFBFD] underline decoration-[#D4AF37] decoration-2 underline-offset-4 hover:text-[#D4AF37]"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              {isResale ? 'Request unit details' : 'Request the brochure packet'}
            </a>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- plate */}
      <section aria-label={`Photographs of ${project.title}`} className="shell mt-10 lg:mt-12">
        <figure>
          <img
            src={hire(activeImage, 1800)}
            alt={`${project.title}, ${project.location}`}
            width={1800}
            height={1100}
            fetchPriority="high"
            className="h-[300px] w-full object-cover sm:h-[440px] lg:h-[560px]"
          />
          <figcaption className="plate-line">
            <span>
              {project.title} · {project.location}
            </span>
            <span className="plate-price figures">{project.formattedStartPrice}</span>
          </figcaption>
        </figure>

        {gallery.length > 0 && (
          <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
            {gallery.map((img, i) => (
              <button
                key={img + i}
                type="button"
                onClick={() => setActiveImage(img)}
                aria-label={`Show photograph ${i + 1} of ${project.title}`}
                aria-pressed={activeImage === img}
                className={`frame block w-full text-left ${activeImage === img ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
              >
                <img
                  src={hire(img, 500)}
                  alt=""
                  width={500}
                  height={340}
                  loading="lazy"
                  decoding="async"
                  className="h-20 w-full object-cover sm:h-24"
                />
              </button>
            ))}
          </div>
        )}
      </section>

      {/* ----------------------------------------------------------- record */}
      <section className="shell mt-12 lg:mt-16">
        <dl className="grid gap-x-10 gap-y-6 pt-2 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Approval', project.approvalType],
            ['RERA', project.reraId],
            [
              isResale ? 'Listed units' : 'Plots listed',
              isResale ? 'One resale listing' : String(project.totalPlots ?? '—')
            ],
            [
              isResale ? 'Availability' : 'Open now',
              isResale ? 'Confirm with the desk' : String(project.availablePlots ?? '—')
            ]
          ].map(([term, value]) => (
            <div key={term} className="min-w-0">
              <dt className="label">{term}</dt>
              <dd className="mt-1 min-w-0 text-[16px] leading-relaxed text-[#FBFBFD] figures [overflow-wrap:anywhere]">{value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 max-w-[70ch] text-[14px] leading-relaxed text-[var(--text-soft)]">
          {isResale
            ? 'Project RERA listed by the developer. Confirm which phase and approvals apply to this specific unit.'
            : 'Approval and registration references are supplied at listing. Verify them against the original documents for the plot or unit you choose.'}
        </p>
      </section>

      {/* ------------------------------------------------------------ detail */}
      <section className="page-section">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-14 lg:col-span-8">
            <div data-reveal>
              <h2 className="display-md text-[#FBFBFD]">The project</h2>
              <p className="measure mt-4 text-[17px] leading-relaxed text-[var(--text-soft)] sm:text-[19px]">
                {project.overview}
              </p>

              {(project.highlights || []).length > 0 && (
                <ul className="mt-8 grid gap-x-10 gap-y-3 text-[17px] leading-relaxed text-[#FBFBFD] sm:grid-cols-2">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-3">
                      <span aria-hidden="true" className="mt-[10px] h-1.5 w-1.5 shrink-0 bg-[#D4AF37]" />
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div data-reveal>
              <PlotMasterplanViewer project={project} />
            </div>

            {project.id === 'project-vinra-alora' && (
              <div data-reveal className="section-navy on-ink px-6 py-10 sm:px-10">
                <p className="label text-[#E9C349]">Vinra Interiors &amp; Renovations · package add-ons</p>
                <h2 className="mt-3 display-md text-white">Turnkey construction and interiors</h2>
                <p className="mt-3 max-w-[58ch] text-[17px] leading-relaxed text-white/70">
                  Three packages for Vinra Alora plot owners, priced by the square foot and itemised
                  line by line before any work begins.
                </p>

                <dl className="mt-10 space-y-8">
                  {[
                    {
                      name: 'Silver',
                      rate: '₹1,000 / sq ft',
                      rows: [
                        ['Wet area', '₹1,350 / sq ft'],
                        ['Core material', 'MDF pre-laminated and BWR ply'],
                        ['Hardware', 'EBCO or equivalent']
                      ]
                    },
                    {
                      name: 'Gold',
                      rate: '₹1,300 / sq ft',
                      rows: [
                        ['Wet area', '₹1,500 / sq ft'],
                        ['Core material', 'MR ply (Century or Green) and BWP ply'],
                        ['Hardware', 'Hettich or Hafele, standard range']
                      ]
                    },
                    {
                      name: 'Platinum',
                      rate: '₹1,550 / sq ft',
                      rows: [
                        ['Wet area', '₹1,850 / sq ft'],
                        ['Core material', 'MR ply or MDF Century and BWP ply'],
                        ['Hardware', 'Hettich or Hafele, soft close']
                      ]
                    }
                  ].map((pkg) => (
                    <div key={pkg.name}>
                      <div className="flex flex-wrap items-baseline justify-between gap-3">
                        <dt className="font-heading text-[1.5rem] text-white">{pkg.name}</dt>
                        <dd className="font-heading text-[1.25rem] text-[#E9C349] figures">{pkg.rate}</dd>
                      </div>
                      <dd className="mt-3 grid gap-x-8 gap-y-2 text-[15px] leading-relaxed text-white/75 sm:grid-cols-3">
                        {pkg.rows.map(([term, value]) => (
                          <div key={term}>
                            <span className="block text-white/50">{term}</span>
                            <span className="text-white/90">{value}</span>
                          </div>
                        ))}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            <div data-reveal>
              <h2 className="display-md text-[#FBFBFD]">What is nearby</h2>
              <p className="mt-3 max-w-[58ch] text-[17px] leading-relaxed text-[var(--text-soft)]">
                Distances are as published by the developer for the wider project. Confirm the exact
                pin and the route from the unit you are considering.
              </p>
              <dl className="mt-8 grid gap-x-12 gap-y-4 sm:grid-cols-2">
                {(project.landmarks || []).map((lm) => (
                  <div key={lm.name} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 text-[17px]">
                    <dt className="text-[#FBFBFD]">{lm.name}</dt>
                    <dd className="text-[var(--text-soft)] figures">{lm.distance}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {isResale && (
              <div data-reveal className="bg-[var(--stone)] px-6 py-9 sm:px-9">
                <h2 className="display-md text-[#FBFBFD]">
                  Purva Symphony, off Bannerghatta Road
                </h2>
                <p className="mt-3 max-w-[62ch] text-[17px] leading-relaxed text-[var(--text-soft)]">
                  The seller advertises a five-bedroom unit. Its configuration, measurements,
                  amenities and legal status require verification against original documents.
                </p>

                <p className="mt-5 max-w-[62ch] text-[16px] leading-relaxed text-[var(--text-soft)]">
                  Puravankara describes Purva Symphony at The Sound of Water as a community of 3- and
                  4-BHK residences off Bannerghatta Road, which is separate from the seller’s
                  five-bedroom resale claim.{' '}
                  <a
                    className="text-[#FBFBFD] underline decoration-[#D4AF37] decoration-2 underline-offset-4"
                    href="https://www.puravankara.com/residential/bengaluru/purva-symphony"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Puravankara’s project page
                  </a>
                  .
                </p>

                <h3 className="mt-8 font-heading text-[1.25rem] text-[#FBFBFD]">
                  Details to verify before purchase
                </h3>
                <ul className="mt-3 grid gap-x-10 gap-y-2 text-[16px] leading-relaxed text-[#FBFBFD] sm:grid-cols-2 [overflow-wrap:anywhere]">
                  <li>Title, khata and occupancy records for the unit</li>
                  <li>Project RERA PRM/KA/RERA/1251/310/PR/210907/004300, phase confirmed</li>
                  <li>Seller-advertised five bedrooms against the sanctioned plan</li>
                  <li>Buyer charges, confirmed with the listing advisor</li>
                  <li>Seller-quoted ₹9.0 Cr asking price, reconfirmed before a visit</li>
                  <li>Current availability, confirmed by the desk</li>
                </ul>

                <a
                  href="/purva-sounds-of-water"
                  className="mt-7 inline-flex min-h-11 items-center gap-2 text-[16px] text-[#FBFBFD] underline decoration-[#D4AF37] decoration-2 underline-offset-4 hover:text-[#D4AF37]"
                >
                  The dedicated villa page
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            )}
          </div>

          {/* ---------------------------------------------------------- aside */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 bg-[var(--stone)] px-6 py-7">
              <p className="font-heading text-[1.25rem] leading-snug text-[#FBFBFD]">{project.title}</p>
              <p className="mt-1 text-[14px] text-[var(--text-soft)]">By {project.developer}</p>

              <dl className="mt-6 space-y-3 text-[15px]">
                {[
                  [
                    isResale ? 'Listed units' : 'Plots / parcels',
                    isResale ? 'One resale listing' : `${project.totalPlots} units`
                  ],
                  [
                    isResale ? 'Availability' : 'Open now',
                    isResale ? 'Confirm with the desk' : `${project.availablePlots} open`
                  ],
                  ['Approval', project.approvalType],
                  ['Advisory desk', PHONE_DISPLAY]
                ].map(([term, value]) => (
                  <div key={term} className="flex items-baseline justify-between gap-5">
                    <dt className="text-[var(--text-soft)]">{term}</dt>
                    <dd className="text-right text-[#FBFBFD] figures">{value}</dd>
                  </div>
                ))}
              </dl>

              {(project.bankApprovals || []).length > 0 && (
                <div className="mt-6">
                  <p className="text-[14px] text-[var(--text-soft)]">Pre-approved lenders</p>
                  <p className="mt-1 text-[15px] leading-relaxed text-[#FBFBFD]">
                    {(project.bankApprovals || []).join(' · ')}
                  </p>
                </div>
              )}

              <div className="mt-7 space-y-3">
                <button type="button" onClick={() => openSiteVisitModal(project)} className="btn-gold w-full">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  Book a site visit
                </button>

                <a
                  href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                    `Hi! I want to book a site visit for ${project.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-quiet w-full"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Message the desk
                </a>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-11 items-center justify-center text-[14px] text-[#FBFBFD] underline decoration-[#D4AF37] decoration-2 underline-offset-4 hover:text-[#D4AF37]"
                >
                  Open the location pin
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
