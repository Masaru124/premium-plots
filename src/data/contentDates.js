// One place that records when each URL's content last changed. The sitemap reads
// it, so <lastmod> is a real date rather than the build timestamp for every URL.
// Update the entry when you change that page's copy, structured data or links —
// not for a deploy or a footer edit.
export const CONTENT_DATES = {
  // 2026-11-26 — Sovereign restyle plus the search pages built this week.
  '/': '2026-11-26',
  '/premium-plots-in-bangalore': '2026-11-26',
  '/plots-in-bangalore': '2026-11-26',
  '/plots-in-chikkaballapura': '2026-11-26',
  '/plots-in-south-bangalore': '2026-11-26',
  '/property-near-bangalore-airport': '2026-11-26',
  '/projects': '2026-11-26',
  '/guides': '2026-11-26',
  '/about': '2026-11-26',

  // Pages whose main copy predates this week's work.
  '/luxury-villas-bangalore': '2026-11-24',
  '/purva-sounds-of-water': '2026-11-23',
  '/matchmaker': '2026-11-24',
  '/qna': '2026-11-24',
  '/property-finder': '2026-11-24'
};

// Project pages are rendered from the register data, so they share that file's
// date until an individual listing is edited.
export const PROJECT_DATA_DATE = '2026-11-24';
