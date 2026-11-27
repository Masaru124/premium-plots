import { PROJECTS, projectPath, absoluteImage } from '../lib/seo';
import { CORRIDORS } from '../data/seoContent';
import { GUIDES } from '../data/guides';
import { CONTENT_DATES, PROJECT_DATA_DATE } from '../data/contentDates';

// Next.js sitemap interpolation inserts image URLs and loc verbatim into XML without escaping.
// Any '&' in query parameters (e.g. Unsplash dynamic resize params) breaks XML parsing.
const escapeXml = (value) =>
  typeof value === 'string'
    ? value
        .replace(/&(?!amp;|lt;|gt;|quot;|apos;)/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;')
    : value;

// Google ignores <priority> and <changefreq>, so neither is emitted. <lastmod>
// is only useful when it is real, so every entry takes its own date from the
// content ledger (src/data/contentDates.js) or from the guide's updated field.
const dateFor = (path, fallback) => CONTENT_DATES[path] || fallback;

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.settyrelators.in';

  const pages = [
    { path: '' },
    { path: '/premium-plots-in-bangalore' },
    { path: '/plots-in-bangalore' },
    { path: '/luxury-villas-bangalore' },
    { path: '/purva-sounds-of-water' },
    { path: '/projects' },
    { path: '/guides' },
    ...GUIDES.map((guide) => ({
      path: `/guides/${guide.slug}`,
      lastModified: guide.updated
    })),
    ...CORRIDORS.map((corridor) => ({ path: `/${corridor.slug}` })),
    ...PROJECTS.map((project) => ({
      path: projectPath(project.slug),
      lastModified: PROJECT_DATA_DATE,
      images: [project.heroImage, ...(project.galleryImages || []).slice(0, 4)]
        .filter(Boolean)
        .map(absoluteImage)
        .map(escapeXml)
    })),
    { path: '/matchmaker' },
    { path: '/qna' },
    { path: '/property-finder' },
    { path: '/about' }
  ];

  return pages.map(({ path, lastModified, images }) => ({
    url: escapeXml(`${baseUrl}${path}`),
    lastModified: lastModified || dateFor(path, PROJECT_DATA_DATE),
    ...(images && images.length ? { images } : {})
  }));
}
