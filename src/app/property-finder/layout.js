const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://premium-plots.vercel.app';

export const metadata = {
  title: 'Property Finder | Plots & Villas in Bangalore',
  description:
    'Search Bengaluru residential plots and villas by budget, corridor and configuration, then confirm current availability and pricing with an advisor.',
  alternates: {
    canonical: `${SITE_URL}/property-finder`,
  },
  openGraph: {
    title: 'Property Finder Bangalore | Lakshie Real Estate',
    description: 'Search Bengaluru plots and villas by budget, corridor and configuration.',
    url: `${SITE_URL}/property-finder`,
    siteName: 'Lakshie Real Estate Advisory',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function PropertyFinderLayout({ children }) {
  return children;
}
