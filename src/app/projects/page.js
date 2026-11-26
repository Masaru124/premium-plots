import React from 'react';
import Link from 'next/link';
import LandingShell from '../../components/LandingShell';
import { Breadcrumbs } from '../../components/seo/SeoBlocks';
import { PROJECTS, SITE_URL, projectImage, projectPath } from '../../lib/seo';

const PAGE_URL = `${SITE_URL}/projects`;
const GROUPS = ['Open Plots', 'Villas', 'Apartments', 'Dubai Apartments'];

export const metadata = {
  title: {
    absolute: 'Project Register | Plots, Villas & Apartments'
  },
  description:
    'Every project in the register, from plotted communities in Chikkaballapura and Jigani to airport-corridor apartments, Nandi Hills villas and Dubai Marina.',
  keywords: [
    'plots in bangalore projects',
    'villa projects bangalore',
    'apartment projects bangalore',
    'gated plotted development bengaluru',
    'project register bengaluru real estate'
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Project Register | Setty Relators',
    description:
      'Plots, villas and apartments carried by the Setty Relators desk across Bengaluru and Dubai.',
    url: PAGE_URL,
    siteName: 'Setty Relators',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: 'Setty Relators project register' }]
  }
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: 'Project register',
  description: 'Every listed project carried by the Setty Relators desk.',
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: PROJECTS.length,
    itemListElement: PROJECTS.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: project.title,
      url: `${SITE_URL}${projectPath(project.slug)}`
    }))
  }
};

export default function ProjectsIndexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingShell activePage="plots">
        <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Projects' }]} />

        <section className="shell pb-6 pt-8 lg:pt-12">
          <p className="label label-gold">The register</p>
          <h1 className="display-xl mt-4 max-w-[20ch] text-[#FBFBFD]">Every project, one page each.</h1>
          <p className="mt-6 max-w-[54ch] text-[19px] leading-relaxed text-[var(--text-soft)]">
            Plotted communities, villas and apartments carried by the desk, with the approvals,
            sizes and price bands that are on file. Prices are quoted by the developer or seller and
            move with inventory.
          </p>
        </section>

        <section className="page-section">
          <div className="shell space-y-16">
            {GROUPS.map((group) => {
              const projects = PROJECTS.filter((project) => project.propertyType === group);
              if (!projects.length) return null;
              return (
                <div key={group}>
                  <div className="flex items-baseline justify-between gap-6 pb-4">
                    <h2 className="font-heading text-[1.5rem] text-white">{group}</h2>
                    <span className="text-[14px] text-[var(--text-soft)] figures">
                      {projects.length} {projects.length === 1 ? 'entry' : 'entries'}
                    </span>
                  </div>
                  <ul className={`mt-6 grid gap-5 ${projects.length === 1 ? '' : 'sm:grid-cols-2'}`}>
                    {projects.map((project) => (
                      <li key={project.id}>
                        <Link
                          href={projectPath(project.slug)}
                          className="group relative block overflow-hidden bg-[#070F1B]"
                        >
                          <img
                            src={projectImage(project, 900)}
                            alt={`${project.title} — ${project.location}`}
                            width={900}
                            height={675}
                            loading="lazy"
                            decoding="async"
                            className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                          />
                          <div className="absolute inset-x-0 bottom-0 bg-[#070F1B]/92 px-5 py-4">
                            <p className="font-heading text-[1.2rem] leading-snug text-white">{project.title}</p>
                            <p className="mt-1 text-[14px] text-white/70">{project.location}</p>
                            <p className="mt-2 font-heading text-[1.1rem] text-[#D4AF37] figures">
                              {project.priceRange}
                            </p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}

            <p className="text-[15px] leading-relaxed text-[var(--text-soft)]">
              Images are representational or supplied by the developer or seller. Confirm current
              pricing, availability and specifications in writing before booking.
            </p>
          </div>
        </section>
      </LandingShell>
    </>
  );
}
