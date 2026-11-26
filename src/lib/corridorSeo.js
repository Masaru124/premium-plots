import React from 'react';
import CorridorPage from '../components/seo/CorridorPage';
import { findCorridor } from '../data/seoContent';
import { SITE_URL, absoluteImage, faqSchema, projectsBySlug, websiteId, organisationId } from './seo';

const WHATSAPP_IMAGE_FALLBACK = `${SITE_URL}/images/purva-sounds-of-water/purva-villas-community.jpeg`;

export function corridorMetadata(slug, keywords) {
  const corridor = findCorridor(slug);
  if (!corridor) return {};
  const url = `${SITE_URL}/${corridor.slug}`;
  const projects = projectsBySlug(corridor.projectSlugs);
  const image = projects[0] ? absoluteImage(projects[0].heroImage) : WHATSAPP_IMAGE_FALLBACK;

  return {
    title: { absolute: corridor.title },
    description: corridor.description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title: corridor.title,
      description: corridor.description,
      url,
      siteName: 'Setty Relators',
      locale: 'en_IN',
      type: 'website',
      images: [{ url: image, width: 1200, height: 630, alt: corridor.name }]
    },
    twitter: {
      card: 'summary_large_image',
      title: corridor.title,
      description: corridor.description
    }
  };
}

export function corridorSchema(slug) {
  const corridor = findCorridor(slug);
  if (!corridor) return null;
  const url = `${SITE_URL}/${corridor.slug}`;
  const projects = projectsBySlug(corridor.projectSlugs);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${url}#webpage`,
        url,
        name: corridor.title,
        description: corridor.description,
        isPartOf: { '@id': websiteId },
        about: { '@id': organisationId },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: projects.length,
          itemListElement: projects.map((project, index) => ({
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
          { '@type': 'ListItem', position: 2, name: 'Plots in Bangalore', item: `${SITE_URL}/plots-in-bangalore` },
          { '@type': 'ListItem', position: 3, name: corridor.name, item: url }
        ]
      },
      faqSchema(corridor.faqs)
    ]
  };
}

export function CorridorRoute({ slug }) {
  const schema = corridorSchema(slug);
  return (
    <>
      {schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      )}
      <CorridorPage slug={slug} />
    </>
  );
}
