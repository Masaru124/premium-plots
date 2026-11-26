import React from 'react';
import Link from 'next/link';
import LandingShell from '../LandingShell';
import { AnswerBlock, Breadcrumbs, FaqList, FactList, ListingGrid } from './SeoBlocks';
import { findCorridor } from '../../data/seoContent';
import { projectImage, projectsBySlug, whatsappLink } from '../../lib/seo';

// Shared body for the corridor landing pages so each corridor keeps its own
// copy, listing set and facts without a template that reads the same everywhere.
export default function CorridorPage({ slug }) {
  const corridor = findCorridor(slug);
  if (!corridor) return null;

  const projects = projectsBySlug(corridor.projectSlugs);
  const hero = projects[0];
  const shortName = corridor.name.split(/[·&]/)[0].trim();

  return (
    <LandingShell activePage="plots">
      <Breadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'Plots in Bangalore', path: '/plots-in-bangalore' },
          { name: corridor.name }
        ]}
      />

      <section className="shell pb-10 pt-6 lg:pt-10" data-reveal>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-6">
            <h1 className="display-xl max-w-[16ch] text-[#FBFBFD]">{corridor.h1}</h1>
            <p className="mt-6 max-w-[46ch] text-[19px] leading-relaxed text-[var(--text-soft)]">
              {corridor.intro[0]}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
              <Link href="/projects" className="btn-gold">
                See the listings
              </Link>
              <a
                href={whatsappLink(`Hello Setty Relators. I am looking at ${corridor.name}. Please share current prices and availability.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center text-[17px] text-[#FBFBFD] underline decoration-[#D4AF37] decoration-2 underline-offset-[6px] hover:text-[#D4AF37]"
              >
                Ask about this corridor
              </a>
            </div>
          </div>
          <div className="lg:col-span-6" data-reveal>
            <AnswerBlock>{corridor.answer}</AnswerBlock>
          </div>
        </div>
      </section>

      {hero && (
        <section className="shell pb-4" data-reveal>
          <img
            src={projectImage(hero, 1600)}
            alt={`${hero.title} — ${hero.location}`}
            width={1600}
            height={686}
            className="aspect-[21/9] w-full object-cover"
          />
          <p className="mt-3 max-w-[70ch] text-[14px] leading-relaxed text-[var(--text-soft)]">
            {hero.title}. Images are representational or supplied by the developer or seller.
          </p>
        </section>
      )}

      <section className="page-section bg-[var(--sheet)] text-[var(--sheet-ink)]">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6" data-reveal>
            <h2 className="display-lg text-[var(--sheet-ink)]">What you are buying into.</h2>
            <div className="mt-5 space-y-4 text-[17px] leading-relaxed text-[var(--sheet-soft)]">
              {corridor.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="max-w-[52ch]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6">
            <FactList rows={corridor.facts} caption={`${corridor.name} at a glance`} />
          </div>
        </div>
      </section>

      <ListingGrid
        projects={projects}
        heading={`Listings in ${shortName}.`}
        intro="Open a listing for its approvals, sizes, landmarks and the questions buyers ask before a site visit."
      />

      <section className="section-navy on-ink page-section" data-reveal>
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <FaqList faqs={corridor.faqs} heading={`${shortName}: the questions.`} />
          </div>
          <aside className="lg:col-span-5">
            <div className="sheet px-6 py-7 sm:px-8">
              <h2 className="font-heading text-[1.6rem] leading-snug text-[var(--sheet-ink)]">
                Other corridors
              </h2>
              <ul className="mt-4 space-y-3 text-[17px]">
                <li>
                  <Link
                    href="/premium-plots-in-bangalore"
                    className="text-[var(--sheet-ink)] underline decoration-[var(--gold-on-light)] decoration-2 underline-offset-4"
                  >
                    Premium plots across Bengaluru
                  </Link>
                </li>
                <li>
                  <Link
                    href="/plots-in-bangalore"
                    className="text-[var(--sheet-ink)] underline decoration-[var(--gold-on-light)] decoration-2 underline-offset-4"
                  >
                    Every plot in the register
                  </Link>
                </li>
                <li>
                  <Link
                    href="/luxury-villas-bangalore"
                    className="text-[var(--sheet-ink)] underline decoration-[var(--gold-on-light)] decoration-2 underline-offset-4"
                  >
                    Luxury villas in Bangalore
                  </Link>
                </li>
                <li>
                  <Link
                    href="/guides/verify-plot-approvals-bangalore"
                    className="text-[var(--sheet-ink)] underline decoration-[var(--gold-on-light)] decoration-2 underline-offset-4"
                  >
                    How to verify a plot before you pay
                  </Link>
                </li>
                <li>
                  <Link
                    href="/guides/best-areas-to-invest-bangalore"
                    className="text-[var(--sheet-ink)] underline decoration-[var(--gold-on-light)] decoration-2 underline-offset-4"
                  >
                    Where to buy land in Bangalore
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </LandingShell>
  );
}
