import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://premium-plots.vercel.app";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Lakshie Real Estate | Verified Plots & Villas in Bengaluru",
    template: "%s | Lakshie"
  },
  description: "Property listings and advisory in Bengaluru and Dubai — residential plots, villa plots and luxury villas. Ask Lakshie for current availability and pricing.",
  alternates: {
    canonical: SITE_URL
  },
  authors: [{ name: "Lakshie Real Estate Advisory", url: SITE_URL }],
  creator: "Lakshie Real Estate",
  publisher: "Lakshie Real Estate",
  formatDetection: {
    telephone: true,
    email: true,
    address: true
  },
  openGraph: {
    title: "Lakshie Real Estate | Verified Plots & Luxury Villas Bengaluru & Dubai",
    description: "Explore residential plots, villas and property advisory in Bengaluru and Dubai. Ask Lakshie Real Estate for current listing details, availability and pricing.",
    url: SITE_URL,
    siteName: "Lakshie Real Estate",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&h=630&q=85",
        width: 1200,
        height: 630,
        alt: "Lakshie Real Estate - Verified Plots & Luxury Villas Bengaluru"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Lakshie Real Estate | Verified Plots & Luxury Villas",
    description: "Property listings and advisory for residential plots and villas in Bengaluru and Dubai. Contact Lakshie Real Estate for current details.",
    images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&h=630&q=85"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    google: "dzgEAOMp4g_iBXbX1IvtwnOh9RdW7c1Ul0TvpVeoYPM"
  }
};

const jsonLdRealEstate = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": `${SITE_URL}/#organization`,
  "name": "Lakshie Real Estate Advisory",
  "alternateName": "Lakshie Realestate & Developer Channel Partner",
  "url": SITE_URL,
  "telephone": "+918431909508",
  "email": "advisory@premiumpropertiesbengaluru.com",
  "priceRange": "₹₹₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Level 5, Concorde Towers, UB City, Vittal Mallya Road & Indiranagar",
    "addressLocality": "Bengaluru",
    "addressRegion": "Karnataka",
    "postalCode": "560001",
    "addressCountry": "IN"
  },
  "areaServed": [
    { "@type": "City", "name": "Bengaluru" },
    { "@type": "City", "name": "Devanahalli" },
    { "@type": "City", "name": "Chikkaballapura" },
    { "@type": "Place", "name": "Bannerghatta Road" },
    { "@type": "City", "name": "Dubai" }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <head>
        {/* Google Site Verification (Mandatory) */}
        <meta name="google-site-verification" content="dzgEAOMp4g_iBXbX1IvtwnOh9RdW7c1Ul0TvpVeoYPM" />
        
        {/* Preconnect to external image origin for faster asset discovery & LCP */}
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />

        {/* JSON-LD Structured Data Schema for Search & AI Answer Engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdRealEstate) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#07090e] text-slate-100">
        {children}
      </body>
    </html>
  );
}
