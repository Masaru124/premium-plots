import React from 'react';
import PurvaVillaView from './PurvaVillaView';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://premium-plots.vercel.app';
const PAGE_URL = `${SITE_URL}/purva-sounds-of-water`;

export const metadata = {
  title: 'Purva Sounds of Water 5 BHK Luxury Villa for Sale | ₹9 Cr Bannerghatta Road Bangalore',
  description: 'Exclusive A+ Type 5 BHK Luxury Villa at Purva Sounds of Water, Bannerghatta Road, South Bangalore. 5,000 sq.ft land, 7,000 sq.ft built-up area, private swimming pool, 2,200 sq.ft private garden, outhouse cottage. Price ₹9.0 Cr (negotiable) with 0% brokerage. Book VIP site visit.',
  keywords: [
    'purva sounds of water',
    'purva sounds of water villa',
    'purva sounds of water 5 bhk villa',
    'purva sounds of water price 9 cr',
    'purva sounds of water villa for sale bangalore',
    'purva sounds of water resale price',
    'purva sounds of water bannerghatta road',
    'purva sounds of water a+ type villa',
    'purva sounds of water floor plan 7000 sq ft',
    'purva sounds of water reviews',
    'purva sounds of water rera number',
    'purva sounds of water brochure pdf',
    'puravankara sounds of water villa bangalore',
    '5 bhk luxury villa bannerghatta road bangalore',
    'luxury villa near meenakshi mall',
    'ready to move luxury villa south bangalore',
    'villa with 2200 sq ft private garden bangalore',
    'villa with private swimming pool and outhouse bangalore',
    'west facing vaastu luxury villa bangalore',
    '5000 sq ft plot 7000 sq ft built up villa bangalore',
    'zero brokerage purva sounds of water villa',
    'luxury villas in south bangalore',
    'tier 1 developer villa bannerghatta road'
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'Purva Sounds of Water - Premium 5 BHK Luxury Villa | ₹9 Cr South Bangalore',
    description: 'A+ Type 5 BHK Luxury Villa in Purva Sounds of Water, Off Bannerghatta Main Road. 5,000 sq.ft plot, 7,000 sq.ft built-up, private pool, 2,200 sq.ft garden, outhouse. 0% Brokerage.',
    url: PAGE_URL,
    siteName: 'Lakshie Real Estate Advisory',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/images/purva-sounds-of-water/purva-villas-community.jpeg`,
        width: 900,
        height: 622,
        alt: 'Purva Sounds of Water 5 BHK Luxury Villa Bannerghatta Road'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Purva Sounds of Water - 5 BHK Luxury Villa | ₹9 Cr Bannerghatta Road',
    description: 'Exclusive 5 BHK A+ Type Villa at Purva Sounds of Water. 5000 sqft land, 7000 sqft built-up, private pool, 2200 sqft garden. Zero Brokerage.',
    images: [`${SITE_URL}/images/purva-sounds-of-water/purva-villas-community.jpeg`]
  }
};

const jsonLdPurvaVilla = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SingleFamilyResidence',
      '@id': `${PAGE_URL}/#residence`,
      'name': 'Purva Sounds of Water - Premium 5 BHK Luxury Villa',
      'description': 'Exclusive A+ Type 5 BHK Luxury Villa by Puravankara Limited at Purva Sounds of Water, Off Bannerghatta Main Road, South Bengaluru. Features 5,000 sq.ft land area, 7,000 sq.ft built-up area across 3 levels, approx. 2,200 sq.ft private garden, private swimming pool, outhouse cottage, home theatre/gym, handcrafted furniture, west-facing Vaastu alignment, and zero brokerage.',
      'numberOfRooms': 15,
      'numberOfBedrooms': 5,
      'numberOfBathroomsTotal': 6,
      'floorSize': {
        '@type': 'QuantitativeValue',
        'value': 7000,
        'unitCode': 'FTK'
      },
      'occupancy': {
        '@type': 'QuantitativeValue',
        'value': 5000,
        'unitCode': 'FTK'
      },
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Purva Sounds of Water, Off Bannerghatta Main Road, Near Royal Meenakshi Mall',
        'addressLocality': 'Bengaluru',
        'addressRegion': 'Karnataka',
        'postalCode': '560076',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 12.8710,
        'longitude': 77.5970
      },
      'image': [
        `${SITE_URL}/images/purva-sounds-of-water/purva-villas-community.jpeg`,
        `${SITE_URL}/images/purva-sounds-of-water/purva-villa-front-portico.jpeg`,
        `${SITE_URL}/images/purva-sounds-of-water/purva-villa-swimming-pool.jpeg`,
        `${SITE_URL}/images/purva-sounds-of-water/purva-villa-private-garden-outhouse.jpeg`,
        `${SITE_URL}/images/purva-sounds-of-water/purva-villa-balcony-terrace.jpeg`,
        `${SITE_URL}/images/purva-sounds-of-water/purva-villa-handcrafted-kitchen.jpeg`,
        `${SITE_URL}/images/purva-sounds-of-water/purva-villa-kitchen-island.jpeg`
      ],
      'offers': {
        '@type': 'Offer',
        'price': '90000000',
        'priceCurrency': 'INR',
        'priceValidUntil': '2026-12-31',
        'availability': 'https://schema.org/InStock',
        'validFrom': '2026-01-01',
        'priceSpecification': {
          '@type': 'PriceSpecification',
          'price': '90000000',
          'priceCurrency': 'INR',
          'description': '₹9.0 Cr (Negotiable) • Zero Brokerage Channel Partner Direct Developer Allocation'
        }
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
          'name': 'Purva Sounds of Water 5 BHK Luxury Villa',
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
          'name': 'What is the price and brokerage of the 5 BHK villa in Purva Sounds of Water?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'The exclusive A+ Type 5 BHK villa in Purva Sounds of Water is offered at ₹9.0 Crore (negotiable for genuine buyers). As an authorized channel partner, Lakshie Real Estate provides 100% zero brokerage to buyers, with direct developer pricing and transparent negotiations.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What are the plot area and built-up dimensions of this villa?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'This villa is constructed on a massive 5,000 sq.ft land plot with an expansive 7,000 sq.ft of built-up area across 3 levels. It features 5 ensuite bedrooms, 6 luxury bathrooms, 2 grand living halls, an approx. 2,200 sq.ft private garden lawn, and an independent outhouse cottage.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Does this villa have a private swimming pool?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes. In addition to the massive community clubhouse pools, this specific A+ Type villa features its own private swimming pool surrounded by teak wood deck accents and tropical landscaping for complete privacy.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Where is Purva Sounds of Water located and what is the metro connectivity?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Purva Sounds of Water is located off Bannerghatta Main Road in South Bengaluru, only 5 minutes from Royal Meenakshi Mall. It is located 5 minutes from the proposed Pink Line Metro (Kalena Agrahara / Gottigere station) and 8 minutes from the NICE Ring Road interchange connecting to Electronic City.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Is the property legally verified with BBMP and RERA approval?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes. Purva Sounds of Water is fully RERA registered (PRM/KA/RERA/1251/310/PR/170915/000219), has BBMP approval, clear A-Khata ownership title, and pre-approved home loan clearances from SBI, HDFC Bank, ICICI Bank, Axis Bank, and Kotak Mahindra Bank.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What is the orientation of the villa according to Vaastu?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'The villa features a prime west-facing main entry orientation, aligned according to traditional Vaastu principles with abundant natural sunlight, cross-ventilation, and open garden views.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How can I schedule a VIP private site visit for this villa?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'You can book a complimentary VIP site visit online or via WhatsApp (+91 84319 09508). We arrange private chauffeured doorstep cab pickup, an on-site masterplan and blueprint walkthrough, and direct developer pricing negotiation.'
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
