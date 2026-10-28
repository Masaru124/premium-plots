export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://premium-plots.vercel.app';
  const lastModified = new Date();

  const pages = [
    { path: '', priority: '1.0', changeFrequency: 'weekly' },
    { path: '/purva-sounds-of-water', priority: '0.9', changeFrequency: 'weekly' },
    { path: '/luxury-villas-bangalore', priority: '0.8', changeFrequency: 'weekly' },
    { path: '/plots-in-bangalore', priority: '0.8', changeFrequency: 'weekly' },
    { path: '/property-finder', priority: '0.6', changeFrequency: 'monthly' },
    { path: '/matchmaker', priority: '0.6', changeFrequency: 'monthly' },
    { path: '/qna', priority: '0.6', changeFrequency: 'weekly' },
  ];

  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
