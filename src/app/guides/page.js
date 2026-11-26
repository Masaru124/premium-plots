import React from 'react';
import Link from 'next/link';
import LandingShell from '../../components/LandingShell';
import { Breadcrumbs } from '../../components/seo/SeoBlocks';
import { GUIDES } from '../../data/guides';
import { SITE_URL, findProject, projectImage } from '../../lib/seo';

const PAGE_URL = `${SITE_URL}/guides`;

export const metadata = {
  title: { absolute: 'Bangalore Property Guides: Approvals, Loans, Areas' },
  description:
    'Practical guides from the Setty Relators desk: verifying plot approvals, plot versus apartment, plot loans, and the corridors the register covers.',
  keywords: [
    'bangalore property guides',
    'plot buying guide bangalore',
    'plot approval verification',
    'plot loan guide',
    'best areas to buy plots bangalore'
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Bangalore Property Guides | Setty Relators',
    description:
      'Approvals, documents, loans and corridor comparisons, written for buyers who check the paperwork.',
    url: PAGE_URL,
    siteName: 'Setty Relators',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630 }]
  }
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: 'Bangalore property guides',
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: GUIDES.length,
    itemListElement: GUIDES.map((guide, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: guide.title,
      url: `${PAGE_URL}/${guide.slug}`
    }))
  }
};

export default function GuidesIndexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingShell activePage="guides">
        <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Guides' }]} />

        <section className="shell pb-6 pt-8 lg:pt-12" data-reveal>
          <h1 className="display-xl max-w-[18ch] text-[#FBFBFD]">The paperwork, explained.</h1>
          <p className="mt-6 max-w-[54ch] text-[19px] leading-relaxed text-[var(--text-soft)]">
            Approvals, documents, loans and corridor choices — written for buyers who would rather
            read the file than the brochure. Each guide is checked against the primary source and
            dated.
          </p>
          <div className="mt-8">
            <Link href="/projects" className="btn-gold">
              See every listing
            </Link>
          </div>
        </section>

        <section className="page-section" data-reveal>
          <div className="shell">
            <ul className="grid gap-5 sm:grid-cols-2">
              {GUIDES.map((guide) => (
                <li key={guide.slug} className="bg-[var(--ink-soft)]" data-reveal>
                  {guide.imageProject && (
                    <Link href={`/guides/${guide.slug}`} aria-hidden="true" tabIndex={-1} className="block">
                      <img
                        src={projectImage(findProject(guide.imageProject) || {}, 900)}
                        alt=""
                        width={900}
                        height={420}
                        loading="lazy"
                        className="aspect-[15/7] w-full object-cover"
                      />
                    </Link>
                  )}
                  <div className="p-7 sm:p-8">
                  <p className="text-[14px] text-[var(--text-soft)]">
                    Updated{' '}
                    {new Date(guide.updated).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </p>
                  <h2 className="mt-3 font-heading text-[1.55rem] leading-snug text-white">
                    <Link
                      href={`/guides/${guide.slug}`}
                      className="underline decoration-[#D4AF37] decoration-1 underline-offset-4 hover:text-[#E9C349]"
                    >
                      {guide.shortTitle || guide.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-[16px] leading-relaxed text-[var(--text-soft)]">
                    {guide.description}
                  </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </LandingShell>
    </>
  );
}
