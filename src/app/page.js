import React from 'react';
import HomeApp from './HomeApp';
import { PROJECTS, SITE_URL, absoluteImage, projectPath, websiteId, organisationId } from '../lib/seo';

export const metadata = {
  title: {
    absolute: 'Premium Plots in Bangalore | Setty Relators'
  },
  description:
    'A verified register of premium plots, villa plots and luxury villas across Bengaluru and Dubai: corridor prices, approvals read before listing, zero brokerage.',
  keywords: [
    'premium plots in bangalore',
    'villa plots in bangalore',
    'plots for sale in bangalore',
    'luxury villas in bangalore',
    'property in bangalore',
    'real estate bengaluru',
    'plots near nandi hills',
    'plots in chikkaballapura',
    'apartments near bangalore airport',
    'dubai property for indian buyers'
  ],
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    title: 'Premium Plots in Bangalore & Luxury Villas | Setty Relators',
    description:
      'Verified plots, villas and apartments across Bengaluru and Dubai, with corridor prices and approvals read before listing.',
    url: SITE_URL,
    siteName: 'Setty Relators',
    locale: 'en_IN',
    type: 'website'
  }
};

const listingsSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ItemList',
      '@id': `${SITE_URL}/#listings`,
      name: 'Plots, villas and apartments in the Setty Relators register',
      numberOfItems: PROJECTS.length,
      itemListElement: PROJECTS.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${SITE_URL}${projectPath(project.slug)}`,
        name: project.title,
        image: absoluteImage(project.heroImage)
      }))
    },
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: 'Premium plots and luxury villas in Bangalore',
      isPartOf: { '@id': websiteId },
      about: { '@id': organisationId },
      primaryImageOfPage: absoluteImage(PROJECTS[0]?.heroImage)
    }
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listingsSchema) }}
      />
      <HomeApp />
    </>
  );
}
