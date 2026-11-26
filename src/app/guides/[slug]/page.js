import React from 'react';
import { GUIDES, findGuide } from '../../../data/guides';
import GuidePage from '../../../components/seo/GuidePage';
import { SITE_URL, faqSchema, findProject, organisationId, projectImage, projectsBySlug } from '../../../lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const guide = findGuide(slug);
  if (!guide) return {};
  const url = `${SITE_URL}/guides/${guide.slug}`;

  return {
    title: { absolute: `${guide.title} | Setty Relators` },
    description: guide.description,
    keywords: guide.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url,
      siteName: 'Setty Relators',
      locale: 'en_IN',
      type: 'article',
      modifiedTime: `${guide.updated}T09:00:00+05:30`,
      images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: guide.title }]
    },
    twitter: {
      card: 'summary_large_image',
      title: guide.title,
      description: guide.description
    }
  };
}

export default async function GuideRoute({ params }) {
  const { slug } = await params;
  const guide = findGuide(slug);
  if (!guide) return null;

  const url = `${SITE_URL}/guides/${guide.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${url}#article`,
        headline: guide.title,
        description: guide.description,
        url,
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        datePublished: guide.updated,
        dateModified: guide.updated,
        inLanguage: 'en-IN',
        author: { '@id': organisationId },
        publisher: { '@id': organisationId },
        about: { '@type': 'Thing', name: guide.h1 },
        isAccessibleForFree: true
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE_URL}/guides` },
          { '@type': 'ListItem', position: 3, name: guide.h1, item: url }
        ]
      },
      faqSchema(guide.faqs)
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <GuidePage
        guide={guide}
        image={guide.imageProject ? projectImage(findProject(guide.imageProject) || {}, 1200) : null}
        listings={projectsBySlug(guide.listingSlugs || [])}
      />
    </>
  );
}
