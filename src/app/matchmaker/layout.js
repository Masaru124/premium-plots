const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://premium-plots.vercel.app';

export const metadata = {
  title: 'Property Matchmaker | Bangalore Plots & Villas',
  description:
    'Answer a few quick questions and get matched to verified Bengaluru plots and villas that fit your corridor, budget and timeline. Ask about current availability.',
  alternates: {
    canonical: `${SITE_URL}/matchmaker`,
  },
  openGraph: {
    title: 'Property Matchmaker | Lakshie Real Estate Bangalore',
    description: 'Get matched to verified Bengaluru plots and villas by corridor, budget and timeline.',
    url: `${SITE_URL}/matchmaker`,
    siteName: 'Lakshie Real Estate Advisory',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function MatchmakerLayout({ children }) {
  return children;
}
