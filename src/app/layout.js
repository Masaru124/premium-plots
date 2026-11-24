import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const display = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  style: ['normal', 'italic']
});

const body = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body'
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://premium-plots.vercel.app';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Setty Relators | Verified Plots & Villas in Bengaluru',
    template: '%s | Setty Relators'
  },
  description:
    'Property listings and advisory in Bengaluru and Dubai — residential plots, villa plots and luxury villas. Ask Setty Relators for current availability and pricing.',
  alternates: {
    canonical: SITE_URL
  },
  authors: [{ name: 'Setty Relators Advisory', url: SITE_URL }],
  creator: 'Setty Relators',
  publisher: 'Setty Relators',
  formatDetection: {
    telephone: true,
    email: true,
    address: true
  },
  openGraph: {
    title: 'Setty Relators | Verified Plots & Luxury Villas Bengaluru & Dubai',
    description:
      'Explore residential plots, villas and property advisory in Bengaluru and Dubai. Ask Setty Relators for current listing details, availability and pricing.',
    url: SITE_URL,
    siteName: 'Setty Relators',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&h=630&q=85',
        width: 1200,
        height: 630,
        alt: 'Setty Relators - Verified Plots & Luxury Villas Bengaluru'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Setty Relators | Verified Plots & Luxury Villas',
    description:
      'Property listings and advisory for residential plots and villas in Bengaluru and Dubai. Contact Setty Relators for current details.',
    images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&h=630&q=85']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: [
      'dzgEAOMp4g_iBXbX1IvtwnOh9RdW7c1Ul0TvpVeoYPM',
      'FtkGZfsvTwj7MirAnYIX5rMtF5yM7UfX3pxZDXCaAl0'
    ]
  }
};

const jsonLdRealEstate = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  '@id': `${SITE_URL}/#organization`,
  name: 'Setty Relators Advisory',
  alternateName: 'Setty Relators Realestate & Developer Channel Partner',
  url: SITE_URL,
  telephone: '+918431909508',
  email: 'advisory@settyrelators.com',
  priceRange: '₹₹₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Level 5, Concorde Towers, UB City, Vittal Mallya Road & Indiranagar',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560001',
    addressCountry: 'IN'
  },
  areaServed: [
    { '@type': 'City', name: 'Bengaluru' },
    { '@type': 'City', name: 'Devanahalli' },
    { '@type': 'City', name: 'Chikkaballapura' },
    { '@type': 'Place', name: 'Bannerghatta Road' },
    { '@type': 'City', name: 'Dubai' }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full antialiased ${display.variable} ${body.variable}`}>
      <head>
        {/* Google Site Verification (Mandatory) */}
        <meta name="google-site-verification" content="dzgEAOMp4g_iBXbX1IvtwnOh9RdW7c1Ul0TvpVeoYPM" />
        <meta name="google-site-verification" content="FtkGZfsvTwj7MirAnYIX5rMtF5yM7UfX3pxZDXCaAl0" />

        {/* The display and body faces are self-hosted by next/font; property
            imagery is the only third-party origin left to preconnect. */}
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />

        {/* JSON-LD Structured Data Schema for Search & AI Answer Engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdRealEstate) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
