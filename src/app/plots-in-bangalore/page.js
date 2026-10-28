import React from 'react';
import PlotsLandingView from './PlotsLandingView';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://premium-plots.vercel.app';
const PAGE_URL = `${SITE_URL}/plots-in-bangalore`;

export const metadata = {
  title: 'Plots in Bangalore | RERA Approved from ₹35L',
  description: 'Verified residential and villa plots across six Bengaluru corridors from ₹35L, with clear A-Khata titles. Ask about current availability and site visits.',
  keywords: [
    'plots in bangalore',
    'residential plots in bangalore',
    'villa plots bangalore',
    'buy plots in bangalore',
    'plots for sale in bangalore',
    'gated community plots in bangalore',
    'biappa approved plots in bangalore',
    'bmrda approved plots bangalore',
    'rera registered plots in bangalore',
    'a khata plots in bangalore',
    'plots in devanahalli airport road',
    'strr corridor plots bangalore',
    'satellite town ring road plots',
    'chikkaballapura plots for sale',
    'nandi hills plots bangalore',
    'oriaiyan signature plots',
    'sun valley plots chikkaballapura',
    '30x40 plots in bangalore',
    '30x50 plots in bangalore',
    '40x60 plots in bangalore',
    'zero brokerage plots bangalore',
    'best plots to invest in bangalore 2026'
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'Plots in Bangalore | Verified Residential & Villa Plots | 0% Brokerage',
    description: 'Explore verified residential plots & villa plots in Devanahalli, STRR, Chikkaballapura, Jigani & Kanakapura Rd. BIAAPA/RERA approved. Free chauffeured cab tour.',
    url: PAGE_URL,
    siteName: 'Lakshie Real Estate Advisory',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'Verified Residential Plots in Bangalore'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verified Residential Plots in Bangalore | BIAAPA & RERA Cleared',
    description: 'Direct developer pricing from ₹35 Lakhs. Zero brokerage to buyers. Book a free chauffeured VIP site visit.',
    images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

const jsonLdPlots = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'RealEstateListing',
      '@id': `${PAGE_URL}/#listing`,
      'name': 'Verified Residential & Villa Plots in Bengaluru',
      'description': 'Comprehensive directory of legally cleared residential plots and luxury villa plots across North, South, East, and West Bengaluru corridors by authorized developer channel partner Lakshie Real Estate.',
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
          'name': 'Plots in Bangalore',
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
          'name': 'Which are the best locations to buy residential plots in Bangalore in 2026?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'The highest-appreciation corridors in Bengaluru are: 1) North Bengaluru (Devanahalli Airport & STRR Satellite Town Ring Road) with 22.8% YoY growth; 2) Chikkaballapura & Nandi Hills Foothills with 21.5% YoY growth; 3) South Industrial Belt (Jigani, APC Circle & Kanakapura Rd); and 4) East Bengaluru (Kothanur & Hoskote STRR junction).'
          }
        },
        {
          '@type': 'Question',
          'name': 'What is the starting price of residential plots in Bangalore through Lakshie Real Estate?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Verified plotted layouts start from ₹35 Lakhs in Chikkaballapura (Sun Valley by D1 Projects) up to ₹2.0 Crore for premium 4,499 sq.ft villa estates in flagship Oriaiyan Group corridors, with zero buyer brokerage.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Are all plots approved by BIAAPA, BDA, or BMRDA with RERA registration?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes. 100% of plotted communities listed on our platform are vetted with complete title deeds, RERA Karnataka registration, BIAAPA/CUDDA/BMRDA planning sanctions, and A-Khata ownership.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Can I get a bank loan for purchasing residential plots in Bangalore?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes. Our listed projects have pre-approved plot loans from leading national banks including SBI Home Loans, HDFC Bank, ICICI Bank, Axis Bank, and Canara Bank, financing up to 70-80% of the plot cost.'
          }
        }
      ]
    }
  ]
};

export default function PlotsLandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPlots) }}
      />
      <PlotsLandingView />
    </>
  );
}
