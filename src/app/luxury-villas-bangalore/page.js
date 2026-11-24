import React from 'react';
import VillasLandingView from './VillasLandingView';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://premium-plots.vercel.app';
const PAGE_URL = `${SITE_URL}/luxury-villas-bangalore`;

export const metadata = {
  title: 'Luxury Villas in Bangalore | Purva, Nandi Hills',
  description: 'Luxury villas for sale in Bangalore, from Nandi Hills estates to a seller-listed Purva Symphony resale off Bannerghatta Road. Ask about availability.',
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'Luxury Villas for Sale in Bengaluru | Setty Relators',
    description: 'Bengaluru villa listings, including Triton Nandi Hills homes and a seller-listed Purva Symphony resale off Bannerghatta Road. Verify unit details and availability.',
    url: PAGE_URL,
    siteName: 'Setty Relators Advisory',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/images/purva-sounds-of-water/purva-villas-community.jpeg`,
        width: 900,
        height: 622,
        alt: 'Luxury Villas in Bangalore'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Villas in Bengaluru | Setty Relators',
    description: 'Browse Bengaluru villa listings and verify current unit details, pricing and availability.',
    images: [`${SITE_URL}/images/purva-sounds-of-water/purva-villas-community.jpeg`]
  }
};

const jsonLdVillas = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'RealEstateListing',
      '@id': `${PAGE_URL}/#listing`,
      'name': 'Luxury Villas in Bengaluru Portfolio',
      'description': 'Curated villa listings in Bengaluru, including Triton Nandi Hills homes and a seller-advertised resale unit at Purva Symphony, The Sound of Water, off Bannerghatta Road.',
      'url': PAGE_URL
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}/#breadcrumb`,
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': SITE_URL
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Luxury Villas in Bangalore',
          'item': PAGE_URL
        }
      ]
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}/#faq`,
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'What are the top luxury villa projects available in Bangalore through Setty Relators?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'The portfolio includes Triton Nandi Hills villas and a seller-advertised resale at Purva Symphony, The Sound of Water, off Bannerghatta Road. The seller describes that individual unit as five-bedroom and quotes ₹9.0 Cr; verify its sanctioned plan, measurements, features, price and availability. Puravankara describes the wider community as offering 3- and 4-BHK residences.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Do these luxury villas come with private swimming pools and gardens?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'The seller advertises a private pool and garden for the specific Purva Symphony resale unit. Confirm those unit-specific features during inspection; amenities at other communities vary by listing.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Why purchase luxury villas through Setty Relators rather than standard brokers?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Setty Relators describes itself as an authorized channel partner. Ask the advisor to explain the specific services, any buyer charges, and the applicable agreement terms for each listing.'
          }
        }
      ]
    }
  ]
};

export default function LuxuryVillasLandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdVillas) }}
      />
      <VillasLandingView />
    </>
  );
}
