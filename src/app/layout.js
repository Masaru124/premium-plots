import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://lakshierealestate.com"),
  title: {
    default: "Lakshie Real Estate | Verified Plots, Luxury Villas & Properties in Bengaluru & Dubai",
    template: "%s | Lakshie Real Estate"
  },
  description: "Discover verified open plots, villa plots & luxury villas in Bengaluru & Dubai. Direct Channel Partner for Puravankara, Oriaiyan & Tripon with 0% brokerage. Free VIP chauffeured site visits & RERA approved land investments.",
  keywords: [
    "open plots bengaluru",
    "residential plots devanahalli",
    "villa plots bangalore",
    "luxury villas bannerghatta road",
    "purva sounds of water villa",
    "oriaiyan signature plots",
    "tripon nandi villas",
    "vinra kbr apartments",
    "strr corridor plots",
    "chikkaballapura nandi hills plots",
    "biappa approved plots bangalore",
    "rera registered plots bengaluru",
    "a-khata residential land",
    "dubai real estate investment bangalore",
    "uae golden visa property",
    "zero brokerage channel partner bangalore",
    "luxury property advisory bengaluru",
    "turnkey interior design vinra",
    "roi real estate calculator bangalore",
    "high appreciation land plots"
  ],
  authors: [{ name: "Lakshie Real Estate Advisory", url: "https://lakshierealestate.com" }],
  creator: "Lakshie Real Estate",
  publisher: "Lakshie Real Estate",
  formatDetection: {
    telephone: true,
    email: true,
    address: true
  },
  alternates: {
    canonical: "https://lakshierealestate.com"
  },
  openGraph: {
    title: "Lakshie Real Estate | Verified Plots & Luxury Villas Bengaluru & Dubai",
    description: "Verified residential plots, villa estates & luxury villas across Bengaluru's high-growth corridors & Dubai. 0% Brokerage. Book a free chauffeured site tour.",
    url: "https://lakshierealestate.com",
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
    description: "Premium open plots, villa plots & luxury villas in Bengaluru & Dubai. BIAAPA/RERA verified. 0% Brokerage. VIP site visits.",
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
  "@graph": [
    {
      "@type": "RealEstateAgent",
      "@id": "https://lakshierealestate.com/#organization",
      "name": "Lakshie Real Estate Advisory",
      "alternateName": "Lakshie Realestate & Developer Channel Partner",
      "url": "https://lakshierealestate.com",
      "logo": "https://lakshierealestate.com/logo.png",
      "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&h=630&q=85",
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
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 12.9719,
        "longitude": 77.5937
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "09:00",
          "closes": "20:00"
        }
      ],
      "areaServed": [
        { "@type": "City", "name": "Bengaluru" },
        { "@type": "City", "name": "Devanahalli" },
        { "@type": "City", "name": "Chikkaballapura" },
        { "@type": "City", "name": "Bannerghatta Road" },
        { "@type": "City", "name": "Dubai" }
      ],
      "makesOffer": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Place",
            "name": "Purva Sounds of Water 5 BHK Luxury Villa",
            "description": "A+ Type 5 BHK Luxury Villa on Bannerghatta Road by Puravankara. 2,200 sq.ft private garden, 0% brokerage."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Place",
            "name": "Oriaiyan Signature Plotted Layouts",
            "description": "Verified residential plots up to 4,499 sq.ft across 6 prime Bengaluru corridors. BIAAPA/RERA cleared."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Place",
            "name": "Tripon Nandi Hills Scenic Villas & Aero Gardens",
            "description": "Luxury 3, 4 & 5 BHK private villas in Nandi Foothills & Airport towers."
          }
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://lakshierealestate.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the best locations to buy residential plots in Bengaluru in 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The top high-appreciation corridors in Bengaluru are North Bengaluru (Devanahalli Airport Corridor & STRR Satellite Town Ring Road), Chikkaballapura Nandi Hills belt, and South Bengaluru (Bannerghatta Road & NICE Corridor), delivering 18% to 22% average YoY appreciation."
          }
        },
        {
          "@type": "Question",
          "name": "Are the plots and villas verified with RERA and BIAAPA approvals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. 100% of plotted layouts and villa projects represented by Lakshie Real Estate are thoroughly legally vetted with RERA Karnataka registration, BIAAPA/BMRDA town planning approvals, clear marketable titles, and A-Khata ownership."
          }
        },
        {
          "@type": "Question",
          "name": "Why is there zero brokerage on plot and villa purchases through Lakshie Real Estate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "As an authorized direct Channel Partner for premier developers including Puravankara Limited, Oriaiyan Group, and Tripon Groups, all client advisory, documentation support, and VIP site visit arrangements are completely free with 0% brokerage to buyers."
          }
        },
        {
          "@type": "Question",
          "name": "How does the complimentary VIP site visit work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can schedule a private site inspection online or via WhatsApp (+91 84319 09508). We arrange complimentary chauffeured doorstep cab pickup, an on-site guided tour with masterplan blueprints, and direct developer pricing negotiation."
          }
        },
        {
          "@type": "Question",
          "name": "Can Indian citizens invest in Dubai properties through Lakshie Real Estate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Under the RBI Liberalised Remittance Scheme (LRS), Indian residents can legally invest up to $250,000 USD per financial year in Dubai waterfront real estate, enjoying 8-10% tax-free rental yields and 10-Year UAE Golden Visa residency eligibility."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <head>
        {/* Google Site Verification (Mandatory) */}
        <meta name="google-site-verification" content="dzgEAOMp4g_iBXbX1IvtwnOh9RdW7c1Ul0TvpVeoYPM" />
        
        {/* Geo Meta Tags for Local & Regional SEO */}
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bengaluru" />
        <meta name="geo.position" content="12.9719;77.5937" />
        <meta name="ICBM" content="12.9719, 77.5937" />

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
