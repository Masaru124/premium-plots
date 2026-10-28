import React from 'react';
import PurvaVillaView from './PurvaVillaView';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://premium-plots.vercel.app';
const PAGE_URL = `${SITE_URL}/purva-sounds-of-water`;

export const metadata = {
  title: {
    absolute: 'Purva Sounds of Water 5 BHK Villa, Bannerghatta | Lakshie'
  },
  description: 'Seller-listed 5 BHK villa resale at Purva Sounds of Water, off Bannerghatta Road, Bengaluru. Confirm this unit’s areas, ₹9 Cr asking price and availability.',
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'Purva Sounds of Water 5 BHK Villa Resale | Bannerghatta Road',
    description: 'Seller-listed 5 BHK villa at Purva Sounds of Water, off Bannerghatta Road, Bengaluru. Check reported unit details, ₹9 Cr asking price and availability.',
    url: PAGE_URL,
    siteName: 'Lakshie Real Estate Advisory',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/images/purva-sounds-of-water/purva-villas-community.jpeg`,
        width: 900,
        height: 622,
        alt: 'Seller-listed villa at Purva Symphony, The Sound of Water, Bengaluru'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Purva Sounds of Water 5 BHK Villa Resale',
    description: 'Seller-listed 5 BHK villa at Purva Sounds of Water, off Bannerghatta Road. Confirm unit details, asking price and availability.',
    images: [`${SITE_URL}/images/purva-sounds-of-water/purva-villas-community.jpeg`]
  }
};

const jsonLdPurvaVilla = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'RealEstateListing',
      '@id': `${PAGE_URL}/#residence`,
      'name': 'Seller-listed villa resale at Purva Symphony, The Sound of Water',
      'url': PAGE_URL,
      'description': 'Seller-advertised resale at Purva Symphony, The Sound of Water, off Bannerghatta Road, Bengaluru. Configuration, measurements, price, availability and unit-specific features are seller-provided and must be verified against current listing details and original unit documents.',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Off Bannerghatta Road',
        'addressLocality': 'Bengaluru',
        'addressRegion': 'Karnataka',
        'addressCountry': 'IN'
      },
      'image': [
        `${SITE_URL}/images/purva-sounds-of-water/purva-villas-community.jpeg`,
        `${SITE_URL}/images/purva-sounds-of-water/purva-villa-front-portico.jpeg`,
        `${SITE_URL}/images/purva-sounds-of-water/purva-villa-swimming-pool.jpeg`,
        `${SITE_URL}/images/purva-sounds-of-water/purva-villa-private-garden-outhouse.jpeg`,
        `${SITE_URL}/images/purva-sounds-of-water/purva-villa-balcony-terrace.jpeg`,
        `${SITE_URL}/images/purva-sounds-of-water/purva-villa-handcrafted-kitchen.jpeg`,
        `${SITE_URL}/images/purva-sounds-of-water/purva-villa-kitchen-island.jpeg`
      ]
    },
    {
      '@type': 'Place',
      '@id': `${PAGE_URL}/#project`,
      'name': 'Purva Symphony at The Sound of Water',
      'alternateName': 'Purva Sounds of Water',
      'description': 'Puravankara describes Purva Symphony at The Sound of Water as a 20-acre enclave of luxury 3- and 4-BHK villas off Bannerghatta Road in South Bengaluru, with an Aqua Clubhouse, man-made waterfall and 20-plus amenities.',
      'url': 'https://www.puravankara.com/residential/bengaluru/purva-symphony',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Off Bannerghatta Road',
        'addressLocality': 'Bengaluru',
        'addressRegion': 'Karnataka',
        'addressCountry': 'IN'
      },
      'amenityFeature': [
        { '@type': 'LocationFeatureSpecification', 'name': 'Aqua Clubhouse', 'value': true },
        { '@type': 'LocationFeatureSpecification', 'name': 'Man-made waterfall', 'value': true },
        { '@type': 'LocationFeatureSpecification', 'name': 'Infinity pool', 'value': true },
        { '@type': 'LocationFeatureSpecification', 'name': 'Gated community', 'value': true }
      ],
      'publicAccess': true
    },
    {
      '@type': 'WebPage',
      '@id': `${PAGE_URL}/#webpage`,
      'url': PAGE_URL,
      'name': 'Seller-listed villa at Purva Symphony, The Sound of Water',
      'about': {
        '@type': 'Place',
        'name': 'Purva Symphony at The Sound of Water',
        'url': 'https://www.puravankara.com/residential/bengaluru/purva-symphony'
      },
      'isPartOf': {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        'url': SITE_URL,
        'name': 'Lakshie Real Estate Advisory'
      }
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
          'item': `${SITE_URL}/luxury-villas-bangalore`
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': 'Purva Symphony resale villa listing',
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
          'name': 'Are Purva Sounds of Water and Purva Symphony at The Sound of Water the same project?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'They refer to the same Bannerghatta Road location. Puravankara’s official project name is Purva Symphony at The Sound of Water, while resale listings commonly advertise it as Purva Sounds of Water. Puravankara describes the community as 3- and 4-BHK villas, so confirm the exact unit configuration against original documents.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What does Puravankara officially list for this project?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Puravankara publishes Purva Symphony at The Sound of Water as a 20-acre enclave of luxury 3- and 4-BHK villas off Bannerghatta Road in South Bengaluru, priced from ₹4.80 Cr onwards, with project RERA PRM/KA/RERA/1251/310/PR/210907/004300, status ongoing and possession listed as 30-06-2026. These are developer-published project figures that can change; confirm them directly with Puravankara.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What is the asking price for the seller-listed villa at Purva Symphony?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'The listing currently displays a seller-quoted asking price of ₹9.0 Crore. Price and availability can change; contact the listing advisor to reconfirm before arranging a visit.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What are the plot area and built-up dimensions of this villa?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'The seller advertises this individual villa as having five bedrooms, approximately 5,000 sq.ft of land and 7,000 sq.ft built-up area. Puravankara describes the wider Purva Symphony community as offering 3- and 4-BHK residences, so verify the unit’s sanctioned plan and area documents.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Does this villa have a private swimming pool?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'The seller advertises a private swimming pool and garden for this individual resale unit. Confirm these unit-specific features during inspection and against the property documents.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Where is Purva Symphony at The Sound of Water located?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Puravankara describes Purva Symphony as being off Bannerghatta Road in Bengaluru. Check the exact unit pin and route before relying on journey times or nearby-station distances.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What should buyers verify before purchasing this resale villa?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Check the relevant RERA phase, sanctioned plan, title, khata, occupancy documents, actual bedroom configuration, and lender eligibility for this specific unit. Puravankara lists Purva Symphony under RERA registration PRM/KA/RERA/1251/310/PR/210907/004300; verify the unit against official records and original documents.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How can I enquire about this resale listing?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Contact the listing advisor to confirm whether the unit is still available, request current seller-provided details and documents, and arrange a viewing.'
          }
        }
      ]
    }
  ]
};

export default function PurvaSoundsOfWaterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPurvaVilla) }}
      />
      <PurvaVillaView />
    </>
  );
}
