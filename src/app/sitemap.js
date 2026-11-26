import { PROJECTS, projectPath, absoluteImage } from '../lib/seo';
import { CORRIDORS } from '../data/seoContent';
import { GUIDES } from '../data/guides';

// Google ignores <priority> and <changefreq>, so neither is emitted. <lastmod>
// is only useful when it is real: each guide carries its own updated date, and
// the static surfaces use the date their copy last changed.
const CONTENT_DATE = '2026-11-26';

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://premium-plots.vercel.app';

  const pages = [
    { path: '', lastModified: CONTENT_DATE },
    { path: '/premium-plots-in-bangalore', lastModified: CONTENT_DATE },
    { path: '/plots-in-bangalore', lastModified: CONTENT_DATE },
    { path: '/luxury-villas-bangalore', lastModified: CONTENT_DATE },
    { path: '/purva-sounds-of-water', lastModified: CONTENT_DATE },
    { path: '/projects', lastModified: CONTENT_DATE },
    { path: '/guides', lastModified: CONTENT_DATE },
    ...GUIDES.map((guide) => ({
      path: `/guides/${guide.slug}`,
      lastModified: guide.updated
    })),
    ...CORRIDORS.map((corridor) => ({
      path: `/${corridor.slug}`,
      lastModified: CONTENT_DATE
    })),
    ...PROJECTS.map((project) => ({
      path: projectPath(project.slug),
      lastModified: CONTENT_DATE,
      images: [project.heroImage, ...(project.galleryImages || []).slice(0, 4)].filter(Boolean).map(absoluteImage)
    })),
    { path: '/matchmaker', lastModified: CONTENT_DATE },
    { path: '/qna', lastModified: CONTENT_DATE },
    { path: '/property-finder', lastModified: CONTENT_DATE }
  ];

  return pages.map(({ path, lastModified, images }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    ...(images && images.length ? { images } : {})
  }));
}
