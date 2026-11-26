import { INITIAL_PROJECTS } from '../data/plotsData.js';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://premium-plots.vercel.app';
export const SITE_NAME = 'Setty Relators';
export const WHATSAPP_NUMBER = '918431909508';
export const PHONE_DISPLAY = '+91 84319 09508';
export const EMAIL = 'advisory@settyrelators.com';

// The register rows carry a slug; the older project-tripon-* duplicates do not
// pass through here because only the initial dataset is used for static pages.
export const PROJECTS = INITIAL_PROJECTS.filter((project) => project && project.slug);

export const findProject = (slug) => PROJECTS.find((project) => project.slug === slug) || null;

export const projectsBySlug = (slugs) =>
  slugs.map(findProject).filter(Boolean);

export const projectPath = (slug) => `/projects/${slug}`;

export const abs = (path = '/') => `${SITE_URL}${path}`;

export const absoluteImage = (src) => (src && src.startsWith('http') ? src : abs(src || '/'));

export const projectImage = (project, width = 1200) => {
  const source = project.heroImage || '';
  if (!source.startsWith('http')) return absoluteImage(source);
  return source.replace(/w=\d+/, `w=${width}`).replace(/q=\d+/, 'q=80');
};

export const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const breadcrumb = (items) => ({
  '@type': 'BreadcrumbList',
  '@id': `${abs()}#breadcrumb-placeholder`,
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: abs(item.path)
  }))
});

export const faqSchema = (faqs) => ({
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a }
  }))
});

export const organisationId = `${SITE_URL}/#organization`;
export const websiteId = `${SITE_URL}/#website`;

export const projectFaqs = (project) => {
  const faqs = [
    {
      q: `Where is ${project.title} located?`,
      a: `${project.location}${
        project.landmarks && project.landmarks[0]
          ? ` The desk lists ${project.landmarks[0].name} at roughly ${project.landmarks[0].distance} from the site.`
          : ''
      } Confirm the exact gate and route before relying on journey times.`
    },
    {
      q: `What is the current price range for ${project.title}?`,
      a: `The register currently shows ${project.priceRange}. Prices here are quoted by the developer or seller and change with inventory, so ask the desk to reconfirm the current quote before you plan a purchase.`
    },
    {
      q: `What sizes or configurations are available here?`,
      a: `Sizes listed in the register: ${project.dimensions.join('; ')}. Ask for the current availability sheet, because unsold inventory changes week to week.`
    },
    {
      q: `Is ${project.title} approved and RERA registered?`,
      a: `${project.approvalType || 'Approval details are shared on request'}. RERA reference on file: ${project.reraId || 'ask the desk for the current registration number'}. Verify the registration and unit documents yourself before paying a token amount.`
    }
  ];

  if (project.availablePlots && project.totalPlots) {
    faqs.push({
      q: `How many units are still available?`,
      a: `The register shows ${project.availablePlots} of ${project.totalPlots} units as available. That figure is a desk snapshot, not a live inventory feed — confirm it before scheduling a visit.`
    });
  }

  faqs.push({
    q: 'Can I visit before deciding?',
    a: 'Yes. Site visits are by appointment and there is no buyer brokerage. Message the desk on WhatsApp with two preferred dates and the team will confirm the slot.'
  });

  return faqs;
};

// Search-result length: keep the description inside about 155 characters and
// end on a whole clause rather than slicing mid-word.
export const projectDescription = (project) => {
  const parts = [
    `${project.title} in ${project.location}.`,
    `${project.priceRange}.`,
    project.approvalType ? `${project.approvalType}.` : '',
    'Confirm current pricing and availability with the desk.'
  ].filter(Boolean);

  let text = '';
  for (const part of parts) {
    if ((text + ' ' + part).trim().length > 158) break;
    text = `${text} ${part}`.trim();
  }
  return text || `${project.title}. ${project.priceRange}.`;
};
