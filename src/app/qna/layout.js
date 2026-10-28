const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://premium-plots.vercel.app';

export const metadata = {
  title: 'Bengaluru Property Q&A | Plots, Villas & Prices',
  description:
    'Ask practical questions about buying residential plots and villas in Bengaluru, from A-Khata and RERA checks to corridor pricing. Get clear, source-backed answers.',
  alternates: {
    canonical: `${SITE_URL}/qna`,
  },
  openGraph: {
    title: 'Bengaluru Property Q&A | Lakshie Real Estate',
    description: 'Clear answers to common questions about buying plots and villas in Bengaluru.',
    url: `${SITE_URL}/qna`,
    siteName: 'Lakshie Real Estate Advisory',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function QnaLayout({ children }) {
  return children;
}
