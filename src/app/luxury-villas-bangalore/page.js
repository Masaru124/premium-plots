import React from 'react';
import VillasLandingView from './VillasLandingView';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://premium-plots.vercel.app';
const PAGE_URL = `${SITE_URL}/luxury-villas-bangalore`;

export const metadata = {
  title: 'Luxury Villas in Bangalore | 3, 4 & 5 BHK Gated Community Villas | ₹2.4 Cr to ₹9 Cr',
  description: 'Explore premier luxury villas for sale in Bengaluru. Featuring Purva Sounds of Water (A+ Type 5 BHK on Bannerghatta Road, ₹9 Cr) and Tripon Nandi Foothills Villas (3, 4 & 5 BHK, ₹2.4 Cr - ₹4 Cr). Private swimming pools, lush gardens & zero brokerage.',
  keywords: [
    'luxury villas in bangalore',
    'villas for sale in bangalore',
    'gated community villas in bangalore',
    '5 bhk villa bangalore',
    '4 bhk villa bangalore',
    '3 bhk villa bangalore',
    'purva sounds of water',
    'purva sounds of water villa',
    'purva sounds of water 5 bhk villa',
    'purva sounds of water price 9 cr',
    'tripon nandi luxury villas',
    'villas in bannerghatta road',
    'villas in chikkaballapura',
    'villas near nandi hills',
    'villa with private swimming pool bangalore',
    'villa with private garden bangalore',
    'ready to move luxury villa bangalore',
    'zero brokerage villas bangalore'
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'Luxury Villas in Bangalore | 3, 4 & 5 BHK Gated Enclaves | 0% Brokerage',
    description: 'Exclusive luxury villas in South Bangalore (Purva Sounds of Water 5 BHK) and North Bangalore (Tripon Nandi Hills). Private pools, designer gardens, 0% brokerage.',
    url: PAGE_URL,
    siteName: 'Lakshie Real Estate Advisory',
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
    title: 'Luxury Villas in Bangalore | Purva Sounds of Water & Tripon Nandi Estates',
    description: 'Exclusive 3, 4 & 5 BHK luxury villas with private pools and landscaped gardens. Direct developer allocations with zero brokerage.',
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
      'description': 'Curated portfolio of exclusive luxury villas across South and North Bengaluru, featuring Purva Sounds of Water on Bannerghatta Road and Tripon Nandi Hills Villas.',
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
          'name': 'What are the top luxury villa projects available in Bangalore through Lakshie Real Estate?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Our featured luxury villa projects include: 1) Purva Sounds of Water on Bannerghatta Road (A+ Type 5 BHK Luxury Villa, 5,000 sq.ft plot, 7,000 sq.ft built-up, private swimming pool, 2,200 sq.ft garden, ₹9.0 Cr negotiable); and 2) Tripon Nandi Luxury Villas in Chikkaballapura (3, 4 & 5 BHK boutique villas in Nandi Foothills, ₹2.4 Cr to ₹4.0 Cr).'
          }
        },
        {
          '@type': 'Question',
          'name': 'Do these luxury villas come with private swimming pools and gardens?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes. Both Purva Sounds of Water (A+ Type) and Tripon Nandi Signature Mansions feature private swimming pools, landscaped private gardens, sun decks, and dedicated outhouse staff quarters.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Why purchase luxury villas through Lakshie Real Estate rather than standard brokers?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'As an authorized Tier-1 channel partner, all client advisory, legal title vetting, private site inspections, and developer negotiations are completely free with 0% brokerage to buyers, saving you lakhs in standard brokerage commissions.'
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
