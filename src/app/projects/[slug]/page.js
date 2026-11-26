import React from 'react';
import Link from 'next/link';
import LandingShell from '../../../components/LandingShell';
import { Breadcrumbs, FaqList, ListingGrid } from '../../../components/seo/SeoBlocks';
import {
  PROJECTS,
  SITE_URL,
  absoluteImage,
  projectDescription,
  projectFaqs,
  projectImage,
  projectPath,
  whatsappLink
} from '../../../lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);
  if (!project) return {};
  const url = `${SITE_URL}${projectPath(project.slug)}`;

  return {
    title: { absolute: `${project.title} | Setty Relators` },
    description: projectDescription(project),
    alternates: { canonical: url },
    openGraph: {
      title: project.title,
      description: projectDescription(project),
      url,
      siteName: 'Setty Relators',
      locale: 'en_IN',
      type: 'website',
      images: [{ url: absoluteImage(projectImage(project)), width: 1200, height: 630, alt: project.title }]
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: `${project.priceRange} — ${project.location}`
    }
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);
  if (!project) return null;

  const faqs = projectFaqs(project);
  const url = `${SITE_URL}${projectPath(project.slug)}`;
  const related = PROJECTS.filter((item) => item.corridorId === project.corridorId && item.slug !== project.slug).slice(0, 2);

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'RealEstateListing',
        '@id': `${url}#listing`,
        url,
        name: project.title,
        description: project.overview || project.tagline,
        image: [absoluteImage(projectImage(project)), ...(project.galleryImages || []).slice(0, 4).map(absoluteImage)],
        address: {
          '@type': 'PostalAddress',
          addressLocality: project.corridorId === 'dubai' ? 'Dubai' : 'Bengaluru',
          addressRegion: project.corridorId === 'dubai' ? '' : 'Karnataka',
          addressCountry: project.corridorId === 'dubai' ? 'AE' : 'IN'
        },
        ...(project.coordinates
          ? { geo: { '@type': 'GeoCoordinates', latitude: project.coordinates.lat, longitude: project.coordinates.lng } }
          : {}),
        ...(project.startPrice
          ? {
              offers: {
                '@type': 'Offer',
                price: project.startPrice,
                priceCurrency: project.corridorId === 'dubai' ? 'AED' : 'INR',
                availability: 'https://schema.org/InStock',
                url
              }
            }
          : {})
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Projects', item: `${SITE_URL}/projects` },
          { '@type': 'ListItem', position: 3, name: project.title, item: url }
        ]
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a }
        }))
      }
    ]
  };

  const facts = [
    ['Type', project.propertyType],
    ['Developer', project.developer],
    ['Location', project.location],
    ['Price range', project.priceRange],
    ['Sizes', project.dimensions.join(' · ')],
    ['Approvals', project.approvalType],
    ['RERA reference', project.reraId || 'Ask the desk for the current registration'],
    ['Status', project.constructionStatus],
    ...(project.availablePlots && project.totalPlots
      ? [['Availability as listed', `${project.availablePlots} of ${project.totalPlots} units`]]
      : []),
    ...(project.bankApprovals && project.bankApprovals.length
      ? [['Lenders named for this project', project.bankApprovals.join(' · ')]]
      : [])
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingShell activePage="plots">
        <Breadcrumbs
          items={[
            { name: 'Home', path: '/' },
            { name: 'Projects', path: '/projects' },
            { name: project.groupName || project.title }
          ]}
        />

        <section className="shell pb-10 pt-6 lg:pt-10" data-reveal>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
            <div className="lg:col-span-6">
              <h1 className="display-lg text-[#FBFBFD] max-sm:text-[1.75rem]">{project.title}</h1>
              <p className="mt-3 text-[15px] text-[var(--text-soft)]">
                {project.groupName} · {project.propertyType}
              </p>
              <p className="mt-5 max-w-[46ch] text-[18px] leading-relaxed text-[var(--text-soft)]">
                {project.tagline}
              </p>
              <dl className="mt-8 flex flex-wrap gap-x-12 gap-y-5">
                <div>
                  <dt className="label">Price</dt>
                  <dd className="mt-1 font-heading text-[1.35rem] text-[#D4AF37] figures">{project.priceRange}</dd>
                </div>
                <div>
                  <dt className="label">Location</dt>
                  <dd className="mt-1 max-w-[30ch] text-[16px] text-[#FBFBFD]">{project.location}</dd>
                </div>
              </dl>
              <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
                <a
                  href={whatsappLink(`Hello Setty Relators. I would like details and a site visit for ${project.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                >
                  Ask about this listing
                </a>
                <a
                  href={`/?page=project-details&id=${project.id}`}
                  className="inline-flex min-h-11 items-center text-[17px] text-[#FBFBFD] underline decoration-[#D4AF37] decoration-2 underline-offset-[6px] hover:text-[#D4AF37]"
                >
                  Open the full listing page
                </a>
              </div>
            </div>
            <div className="lg:col-span-6">
              <img
                src={projectImage(project, 1200)}
                alt={`${project.title} — ${project.location}`}
                width={1200}
                height={900}
                className="aspect-[4/3] w-full object-cover"
              />
              {project.galleryImages && project.galleryImages.length > 1 && (
                <div className="mt-3 grid grid-cols-2 gap-3" data-reveal>
                  {[project.galleryImages[1], project.galleryImages[2]]
                    .filter(Boolean)
                    .map((image, index) => (
                      <img
                        key={image}
                        src={absoluteImage(image)}
                        alt={`${project.title}, view ${index + 2}`}
                        width={600}
                        height={450}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover"
                      />
                    ))}
                </div>
              )}
              <p className="mt-3 text-[14px] leading-relaxed text-[var(--text-soft)]">
                Images are representational or supplied by the developer or seller.
              </p>
            </div>
          </div>
        </section>

        <section className="page-section bg-[var(--sheet)] text-[var(--sheet-ink)]">
          <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6" data-reveal>
              <h2 className="display-lg text-[var(--sheet-ink)]">What this project is.</h2>
              <p className="mt-5 max-w-[54ch] text-[17px] leading-relaxed text-[var(--sheet-soft)]">
                {project.overview}
              </p>
              {project.highlights && project.highlights.length > 0 && (
                <ul className="mt-7 space-y-3 text-[16px] leading-relaxed text-[var(--sheet-ink)]">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 py-1" data-reveal>
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-[var(--gold-on-light)]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="lg:col-span-6">
              <table data-ui className="w-full table-fixed border-collapse text-left">
                <caption className="sr-only">Facts about {project.title}</caption>
                <tbody>
                  {facts.map(([term, value]) => (
                    <tr key={term} data-ui className="border-b border-[var(--sheet-line)]">
                      <th scope="row" className="w-[38%] break-words py-3 pr-6 align-top text-[15px] font-normal text-[var(--sheet-soft)]">
                        {term}
                      </th>
                      <td className="break-words py-3 text-[16px] leading-relaxed text-[var(--sheet-ink)]">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {project.landmarks && project.landmarks.length > 0 && (
          <section className="page-section" data-reveal>
            <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <h2 className="display-lg text-white">What is nearby.</h2>
                <p className="mt-4 max-w-[36ch] text-[17px] leading-relaxed text-[var(--text-soft)]">
                  Drive times are the desk’s reading of the routes. Check them yourself on a site
                  visit before you rely on them.
                </p>
              </div>
              <ul className="lg:col-span-7" data-reveal>
                {project.landmarks.map((landmark) => (
                  <li
                    key={landmark.name}
                    className="flex flex-wrap items-baseline justify-between gap-3 py-3"
                    data-reveal
                  >
                    <span className="text-[17px] text-[#FBFBFD]">{landmark.name}</span>
                    <span className="text-[16px] text-[var(--text-soft)] figures">{landmark.distance}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <section className="section-navy on-ink page-section" data-reveal>
          <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <FaqList faqs={faqs} heading="Before you visit." />
            </div>
            <aside className="lg:col-span-5">
              <div className="sheet px-6 py-7 sm:px-8">
                <p className="label text-[var(--gold-on-light)]">Keep reading</p>
                <ul className="mt-4 space-y-3 text-[17px]">
                  <li>
                    <Link
                      href="/premium-plots-in-bangalore"
                      className="text-[var(--sheet-ink)] underline decoration-[var(--gold-on-light)] decoration-2 underline-offset-4"
                    >
                      Premium plots in Bangalore
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects"
                      className="text-[var(--sheet-ink)] underline decoration-[var(--gold-on-light)] decoration-2 underline-offset-4"
                    >
                      Every listing in the register
                    </Link>
                  </li>
                  {related.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={projectPath(item.slug)}
                        className="text-[var(--sheet-ink)] underline decoration-[var(--gold-on-light)] decoration-2 underline-offset-4"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>
      </LandingShell>
    </>
  );
}
