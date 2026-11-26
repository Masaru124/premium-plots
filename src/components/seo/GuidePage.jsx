import React from 'react';
import Link from 'next/link';
import LandingShell from '../LandingShell';
import { Breadcrumbs, FaqList, ListingGrid } from './SeoBlocks';
import { whatsappLink } from '../../lib/seo';

// One renderer for the evidence-backed guides. Blocks are deliberately simple:
// paragraph, sub-heading, bullet list, table.
export default function GuidePage({ guide, image, listings = [] }) {
  if (!guide) return null;

  return (
    <LandingShell activePage="guides">
      <Breadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'Guides', path: '/guides' },
          { name: guide.h1 }
        ]}
      />

      <article>
        <header className="shell pb-10 pt-6 lg:pt-8" data-reveal>
          <h1 className="display-xl max-w-[24ch] text-[#FBFBFD] max-sm:text-[2rem]">{guide.h1}</h1>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-[15px] text-[var(--text-soft)]">
                Setty Relators desk · Updated{' '}
                <time dateTime={guide.updated}>
                  {new Date(guide.updated).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </time>
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3">
                <a
                  href={whatsappLink(`Hello Setty Relators. I have a question about ${guide.h1.replace(/\.$/, '')}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                >
                  Ask the desk
                </a>
                <Link
                  href="/projects"
                  className="inline-flex min-h-11 items-center text-[17px] text-[#FBFBFD] underline decoration-[#D4AF37] decoration-2 underline-offset-[6px] hover:text-[#D4AF37]"
                >
                  See the register
                </Link>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="sheet px-6 py-7 sm:px-9 sm:py-9">
                <p className="label label-gold">In short</p>
                <p className="mt-4 text-[18px] leading-relaxed text-[var(--sheet-ink)] sm:text-[19px]">
                  {guide.answer}
                </p>
              </div>
            </div>
          </div>
        </header>

        {image && (
          <section className="shell pb-4" data-reveal>
            <img
              src={image}
              alt={`${guide.h1.replace(/\.$/, '')} — Bengaluru property`}
              width={1600}
              height={686}
              className="aspect-[21/9] w-full object-cover"
            />
            <p className="mt-3 max-w-[70ch] text-[14px] leading-relaxed text-[var(--text-soft)]">
              Images are representational or supplied by the developer. This guide explains
              paperwork, not a specific unit.
            </p>
          </section>
        )}

        <div className="bg-[var(--sheet)] text-[var(--sheet-ink)]">
          <div className="shell page-section grid gap-14 lg:grid-cols-12 lg:gap-16">
            <aside className="hidden lg:col-span-3 lg:block">
              <nav aria-label="On this page" className="sticky top-28">
                <p className="text-[14px] text-[var(--sheet-soft)]">On this page</p>
                <ul className="mt-4 space-y-2 text-[15px]">
                  {guide.sections.map((section) => (
                    <li key={section.h2}>
                      <a
                        href={`#${section.h2.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                        className="text-[var(--sheet-ink)] underline decoration-transparent underline-offset-4 transition-colors hover:decoration-[var(--gold-on-light)]"
                      >
                        {section.h2}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            <div className="lg:col-span-9">
              {guide.sections.map((section) => (
                <section
                  key={section.h2}
                  id={section.h2.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                  className="mb-12 last:mb-0"
                  data-reveal
                >
                  <h2 className="font-heading text-[1.65rem] leading-snug text-[var(--sheet-ink)] sm:text-[2rem]">
                    {section.h2}
                  </h2>

                  {section.paragraphs &&
                    section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph.slice(0, 40)}
                        className="mt-4 max-w-[68ch] text-[17px] leading-relaxed text-[var(--sheet-soft)]"
                      >
                        {paragraph}
                      </p>
                    ))}

                  {section.bullets && (
                    <ul className="mt-5 max-w-[68ch] space-y-3 text-[17px] leading-relaxed text-[var(--sheet-ink)]">
                      {section.bullets.map((bullet) => (
                        <li key={bullet.slice(0, 40)} className="flex gap-3">
                          <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-[var(--gold-on-light)]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.table && (
                    <div className="mt-6 overflow-x-auto">
                      <table data-ui className="w-full border-collapse text-left">
                        <caption className="sr-only">{section.table.caption}</caption>
                        <thead>
                          <tr data-ui>
                            {section.table.head.map((cell, index) => (
                              <th
                                key={cell || index}
                                scope="col"
                                className="py-3 pr-5 text-[14px] font-normal text-[var(--sheet-soft)]"
                              >
                                {cell}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row) => (
                            <tr key={row[0]} data-ui>
                              <th
                                scope="row"
                                className="py-4 pr-5 align-top text-[16px] font-normal text-[var(--sheet-ink)]"
                              >
                                {row[0]}
                              </th>
                              {row.slice(1).map((cell, index) => (
                                <td
                                  key={index}
                                  className="py-4 pr-5 align-top text-[16px] leading-relaxed text-[var(--sheet-soft)]"
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </section>
              ))}

              <div className="mt-14">
                <h2 className="font-heading text-[1.5rem] text-[var(--sheet-ink)]">Sources</h2>
                <ul className="mt-4 space-y-2 text-[16px]">
                  {guide.sources.map((source) => (
                    <li key={source.url}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--sheet-ink)] underline decoration-[var(--gold-on-light)] decoration-2 underline-offset-4"
                      >
                        {source.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 max-w-[64ch] text-[15px] leading-relaxed text-[var(--sheet-soft)]">
                  This guide explains procedure and paperwork. It is not legal, tax or investment
                  advice, and it does not replace an independent lawyer or lender check on the
                  specific property.
                </p>
              </div>
            </div>
          </div>
        </div>

        {listings.length > 0 && (
          <ListingGrid
            projects={listings}
            heading="Listings this applies to."
            intro="The paperwork described here is checked for each of these. Open a listing for its approvals, sizes and RERA reference."
          />
        )}

        <section className="section-navy on-ink page-section" data-reveal>
          <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <FaqList faqs={guide.faqs} heading="Questions on this page." />
            </div>
            <aside className="lg:col-span-5">
              <div className="sheet px-6 py-7 sm:px-8">
                <h2 className="font-heading text-[1.5rem] leading-snug text-[var(--sheet-ink)]">
                  Keep reading
                </h2>
                <ul className="mt-4 space-y-3 text-[17px]">
                  {guide.related.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-[var(--sheet-ink)] underline decoration-[var(--gold-on-light)] decoration-2 underline-offset-4"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>
      </article>
    </LandingShell>
  );
}
