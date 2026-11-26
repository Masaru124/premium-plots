import React from 'react';
import Link from 'next/link';
import LandingShell from '../../components/LandingShell';
import { AnswerBlock, Breadcrumbs, FaqList, FactList, ListingGrid } from '../../components/seo/SeoBlocks';
import { PILLAR, CORRIDORS } from '../../data/seoContent';
import {
  PROJECTS,
  SITE_URL,
  absoluteImage,
  faqSchema,
  organisationId,
  projectImage,
  projectsBySlug,
  whatsappLink,
  websiteId
} from '../../lib/seo';

const PAGE_URL = `${SITE_URL}${PILLAR.path}`;

export const metadata = {
  title: { absolute: PILLAR.title },
  description: PILLAR.description,
  keywords: [
    'premium plots in bangalore',
    'premium plots bangalore',
    'premium residential plots bengaluru',
    'luxury plots in bangalore',
    'villa plots in bangalore',
    'gated community plots bangalore',
    'plots in chikkaballapura',
    'plots near nandi hills',
    'plots in jigani',
    'plots on kanakapura road',
    'a khata plots bangalore',
    'rera approved plots bangalore'
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Premium Plots in Bangalore | Setty Relators',
    description: PILLAR.description,
    url: PAGE_URL,
    siteName: 'Setty Relators',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: absoluteImage(PROJECTS[0]?.heroImage), width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Plots in Bangalore | Setty Relators',
    description: PILLAR.description
  }
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: PILLAR.title,
      description: PILLAR.description,
      isPartOf: { '@id': websiteId },
      about: { '@id': organisationId },
      mainEntity: {
        '@type': 'ItemList',
        name: 'Plotted developments in the register',
        numberOfItems: PROJECTS.length,
        itemListElement: PROJECTS.map((project, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: project.title,
          url: `${SITE_URL}/projects/${project.slug}`
        }))
      }
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Premium plots in Bangalore', item: PAGE_URL }
      ]
    },
    faqSchema(PILLAR.faqs)
  ]
};

const plotProjects = projectsBySlug([
  'sun-valley-plots-chikkaballapura-d1',
  'oriaiyan-signature-plotted-villa-plots-bengaluru',
  'triton-nandi-villas-chikkaballapura-nandi-hills'
]);

const hero = plotProjects[0];
const corridorCards = CORRIDORS.map((corridor) => ({
  slug: corridor.slug,
  name: corridor.name,
  band: corridor.facts[1][1],
  access: corridor.facts[3][1]
}));

export default function PremiumPlotsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingShell activePage="plots">
        <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Premium plots in Bangalore' }]} />

        <section className="shell pb-10 pt-6 lg:pt-10" data-reveal>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-6">
              <h1 className="display-xl max-w-[16ch] text-[#FBFBFD]">{PILLAR.h1}</h1>
              <p className="mt-6 max-w-[46ch] text-[19px] leading-relaxed text-[var(--text-soft)]">
                Land the desk has read the papers on: sanctioned layouts, clear titles and plot
                dimensions you can build against. Bengaluru, corridor by corridor.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
                <Link href="/plots-in-bangalore" className="btn-gold">
                  See every plot in the register
                </Link>
                <a
                  href={whatsappLink('Hello Setty Relators. Please share the premium plots file with current prices.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center text-[17px] text-[#FBFBFD] underline decoration-[#D4AF37] decoration-2 underline-offset-[6px] hover:text-[#D4AF37]"
                >
                  Ask for the plots file
                </a>
              </div>
            </div>
            <div className="lg:col-span-6">
              <AnswerBlock>{PILLAR.answer}</AnswerBlock>
            </div>
          </div>
        </section>

        {hero && (
          <section className="shell pb-4" data-reveal>
            <img
              src={projectImage(hero, 1600)}
              alt={`${hero.title} — plotted development in ${hero.location}`}
              width={1600}
              height={686}
              className="aspect-[21/9] w-full object-cover"
            />
            <p className="mt-3 max-w-[70ch] text-[14px] leading-relaxed text-[var(--text-soft)]">
              {hero.title}. Images are representational or supplied by the developer or seller.
            </p>
          </section>
        )}

        <section className="page-section bg-[var(--sheet)] text-[var(--sheet-ink)]" data-reveal>
          <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="display-lg text-[var(--sheet-ink)]">What premium means here.</h2>
              <p className="mt-5 max-w-[42ch] text-[17px] leading-relaxed text-[var(--sheet-soft)]">
                Four checks run before a plot is written into the register. A layout that fails any
                of them is not listed, however attractive the price looks.
              </p>
            </div>
            <ul className="space-y-8 lg:col-span-7">
              {PILLAR.checks.map((check) => (
                <li key={check.title}>
                  <h3 className="font-heading text-[1.35rem] leading-snug text-[var(--sheet-ink)]">
                    {check.title}
                  </h3>
                  <p className="mt-2 max-w-[56ch] text-[16px] leading-relaxed text-[var(--sheet-soft)]">
                    {check.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ListingGrid
          projects={plotProjects}
          heading="Plots and villa plots in the register."
          intro="Each listing opens on its own page with the layout facts, approvals, plot sizes and the questions buyers ask before a site visit."
        />

        <section className="bg-[var(--sheet)] text-[var(--sheet-ink)] page-section" data-reveal>
          <div className="shell">
            <h2 className="display-lg max-w-[24ch] text-[var(--sheet-ink)]">Where the land sits.</h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-3" data-reveal>
              {corridorCards.map((corridor) => (
                <li key={corridor.slug} className="bg-[var(--sheet-tint)] p-6">
                  <h3 className="font-heading text-[1.3rem] leading-snug text-[var(--sheet-ink)]">
                    <Link
                      href={`/${corridor.slug}`}
                      className="underline decoration-[var(--gold-on-light)] decoration-2 underline-offset-4"
                    >
                      {corridor.name}
                    </Link>
                  </h3>
                  <p className="mt-3 font-heading text-[1.15rem] text-[var(--gold-on-light)] figures">
                    {corridor.band}
                  </p>
                  <p className="mt-2 text-[15px] leading-relaxed text-[var(--sheet-soft)]">{corridor.access}</p>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <FactList
                caption="How the register is priced"
                rows={[
                  ['What the price means', 'Developer or seller quotes for current inventory, not valuations'],
                  ['Plot sizes', '1,200 sq.ft (30x40) to 4,499 sq.ft estate plots'],
                  ['Approvals', 'BIAAPA, CUDDA, BMRDA or local sanction per layout, with RERA per phase'],
                  ['Brokerage to buyers', 'None — the desk is compensated by the developer']
                ]}
              />
            </div>
          </div>
        </section>

        <section className="section-navy on-ink page-section" data-reveal>
          <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <FaqList faqs={PILLAR.faqs} />
            </div>
            <aside className="lg:col-span-5">
              <div className="sheet px-6 py-7 sm:px-8">
                <h2 className="font-heading text-[1.75rem] leading-snug text-[var(--sheet-ink)]">
                  Ask for the plot sheet.
                </h2>
                <p className="mt-3 text-[16px] leading-relaxed text-[var(--sheet-soft)]">
                  Send your budget and the corridor you are considering. The desk replies with the
                  current availability, the approval documents and two site-visit slots.
                </p>
                <ul className="mt-5 space-y-2 text-[16px]">
                  <li>
                    <Link href="/guides/verify-plot-approvals-bangalore" className="text-[var(--sheet-ink)] underline decoration-[var(--gold-on-light)] decoration-2 underline-offset-4">
                      Verifying plot approvals
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides/plot-vs-apartment-bangalore" className="text-[var(--sheet-ink)] underline decoration-[var(--gold-on-light)] decoration-2 underline-offset-4">
                      Plot or apartment?
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides/plot-loan-bangalore" className="text-[var(--sheet-ink)] underline decoration-[var(--gold-on-light)] decoration-2 underline-offset-4">
                      Plot loans in Bangalore
                    </Link>
                  </li>
                </ul>
                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href={whatsappLink('Hello Setty Relators. My budget is ____ and I am considering premium plots in Bangalore.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold w-full justify-center"
                  >
                    Message the desk
                  </a>
                  <a
                    href="tel:+918431909508"
                    className="btn-quiet w-full justify-center text-[var(--sheet-ink)]"
                  >
                    Call +91 84319 09508
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </LandingShell>
    </>
  );
}
