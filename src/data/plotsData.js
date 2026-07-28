export const BENGALURU_CORRIDORS = [
  { id: 'devanahalli', name: 'North Bengaluru (Airport & STRR Corridor)', distance: '12 mins from KIADB Industrial Hub', potential: '18.4% YoY Growth' },
  { id: 'sarjapur', name: 'East Bengaluru (Sarjapur-Attibele Tech Belt)', distance: '15 mins from Wipro SEZ', potential: '16.2% YoY Growth' },
  { id: 'yelahanka', name: 'North Bengaluru (Yelahanka Extension)', distance: '8 mins from Metro & Galleria Mall', potential: '14.8% YoY Growth' },
  { id: 'whitefield', name: 'East Bengaluru (Whitefield-Hoskote Corridor)', distance: '10 mins from ITPB', potential: '15.9% YoY Growth' }
];

export const INITIAL_PROJECTS = [
  {
    id: 'project-nisarga-boulevard',
    title: 'Nisarga Boulevard - Devanahalli',
    slug: 'nisarga-boulevard-devanahalli',
    tagline: 'Thoughtfully Planned Premium Residential Development by PGR Buildtech on STRR',
    developer: 'PGR Buildtech Pvt Ltd',
    location: 'Devanahalli, North Bengaluru (On STRR)',
    corridorId: 'devanahalli',
    coordinates: { lat: 13.2458, lng: 77.7121 },
    googleMapsUrl: 'https://maps.app.goo.gl/nd1REcJDzUBVkFAg9',
    developerPhone: '+91 8431909508',
    whatsappPhone: '+91 8431909508',
    priceRange: '₹3,500 - ₹4,200 per sq.ft (Pre-Launch Indicative)',
    startPrice: 5250000,
    formattedStartPrice: '₹52.5 Lakhs (Indicative)',
    dimensions: ['1500 sq.ft (30x50)', '2400 sq.ft (40x60)', '2800 sq.ft (40x70)', 'ODD Sites'],
    totalPlots: 254,
    availablePlots: 68,
    reraId: 'PRM/KA/RERA/1250/303/PR/240726/009988',
    approvalType: 'BIAPPA & RERA Approved',
    bankApprovals: ['SBI Home Loans', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Canara Bank'],
    heroImage: '/images/nisarga-boulevard.jpg',
    galleryImages: [
      '/images/nisarga-boulevard.jpg',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Nisarga Boulevard by PGR Buildtech Pvt Ltd is a thoughtfully planned 26-acre premium residential development in Devanahalli, North Bengaluru, strategically positioned on the Satellite Town Ring Road (STRR). Designed to offer modern lifestyle comforts along with strong long-term investment potential, featuring approx. 254 residential plots from 1500 Sq. Ft. onwards.',
    highlights: [
      'Spread across 26 Acres with Phase Development Started',
      'Approx. 254 Residential Plots (1500 sq.ft, 2400 sq.ft, 2800 sq.ft & ODD Sites)',
      'Strategically located in Devanahalli directly on Satellite Town Ring Road (STRR)',
      'Efficiently planned plots with optimal space utilization & signature PGR quality',
      'Excellent connectivity to Kempegowda Airport & KIADB Aerospace Hub',
      'High growth corridor with very strong long-term appreciation potential'
    ],
    landmarks: [
      { name: 'Satellite Town Ring Road (STRR)', distance: 'Direct Entry (0 min)' },
      { name: 'Kempegowda International Airport', distance: '12 mins' },
      { name: 'KIADB Aerospace & Hardware Park', distance: '8 mins' },
      { name: 'Devaraj Urs Medical College & Hospital', distance: '5 mins' },
      { name: 'Upcoming Airport Metro Station (Phase 2B)', distance: '7 mins' }
    ],
    layoutGrid: Array.from({ length: 48 }, (_, index) => {
      const num = index + 101;
      const status = index % 8 === 0 ? 'sold' : index % 6 === 0 ? 'reserved' : 'available';
      const isCorner = num % 4 === 0;
      const size = index % 3 === 0 ? '1500 sq.ft (30x50)' : index % 2 === 0 ? '2400 sq.ft (40x60)' : '2800 sq.ft (40x70)';
      const sqft = index % 3 === 0 ? 1500 : index % 2 === 0 ? 2400 : 2800;
      const pricePerSqft = isCorner ? 3850 : 3500;
      return {
        plotNo: `PGR-${num}`,
        status,
        dimension: size,
        facing: index % 2 === 0 ? 'East Facing (Vastu Compliant)' : 'North Facing (Vastu Compliant)',
        sqft,
        pricePerSqft,
        totalPrice: sqft * pricePerSqft,
        isCorner
      };
    })
  }
];

export const INITIAL_BLOGS = [
  {
    id: 'blog-1',
    title: 'Why Nisarga Boulevard on Devanahalli STRR is North Bengaluru\'s #1 Land Investment',
    slug: 'why-nisarga-boulevard-devanahalli-strr-plot-investment',
    category: 'Project Spotlight',
    date: 'July 26, 2026',
    readTime: '5 min read',
    author: 'PGR Buildtech Property Research Team',
    image: '/images/nisarga-boulevard.jpg',
    summary: 'Discover how Nisarga Boulevard by PGR Buildtech on the Satellite Town Ring Road (STRR) offers unparalleled connectivity to Kempegowda Airport, KIADB Aerospace Park, and high annual land appreciation.',
    content: `Nisarga Boulevard is a thoughtfully planned 26-acre premium residential development by PGR Buildtech Pvt Ltd in Devanahalli.

### Key Highlights of Nisarga Boulevard:
1. **Strategic Location on STRR**: Direct access to the Satellite Town Ring Road, providing 6-lane seamless connectivity across North & East Bengaluru.
2. **26 Acres Plotted Township**: Approx. 254 residential plots with sizes starting from 1500 Sq. Ft, 2400 Sq. Ft, 2800 Sq. Ft, and ODD custom parcels.
3. **PGR Signature Quality**: Built with wide asphalt roads, underground utilities, water lines, and 100% Vastu compliance.`
  },
  {
    id: 'blog-2',
    title: 'STRR Highway Expansion & Devanahalli Plot Appreciation Forecast 2026-2030',
    slug: 'strr-highway-expansion-devanahalli-plot-appreciation',
    category: 'Market Trends',
    date: 'July 20, 2026',
    readTime: '6 min read',
    author: 'Siddharth Rao, Senior Real Estate Legal Analyst',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    summary: 'With over $10 Billion in infrastructure investments around Devanahalli, Satellite Town Ring Road (STRR) plots are witnessing 18%+ annual value growth.',
    content: `The Satellite Town Ring Road (STRR) is Devanahalli's biggest growth catalyst. Plotted developments located directly on or near STRR benefit from immediate appreciation as commercial and tech hubs expand around Kempegowda Airport.`
  }
];

export const INITIAL_LEADS = [
  {
    id: 'lead-101',
    name: 'Anand Kumar',
    phone: '+91 84319 09508',
    email: 'anand.k@pgrbuildtech.com',
    projectTitle: 'Nisarga Boulevard - Devanahalli',
    visitDate: '2026-07-28',
    visitTime: '11:00 AM',
    cabPickup: true,
    pickupLocation: 'Kempegowda Airport Terminal 1',
    status: 'Confirmed',
    createdAt: '2026-07-26 10:30 AM'
  }
];

export const CLIENT_REVIEWS = [
  {
    id: 'rev-1',
    name: 'Vikram & Ananya Reddy',
    location: 'Plot Owner at Nisarga Boulevard, Devanahalli',
    profession: 'Senior Software Director at Foxconn Tech',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    quote: 'We booked a 1500 sq.ft plot in Nisarga Boulevard on the STRR. The entrance gate, wide roads, and legal transparency by PGR Buildtech are top notch!',
    project: 'Nisarga Boulevard'
  },
  {
    id: 'rev-2',
    name: 'Dr. Suresh Natarajan',
    location: 'Plot Owner at Nisarga Boulevard',
    profession: 'Consultant Surgeon, Columbia Asia Hospital',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: 'Direct connectivity to STRR and Kempegowda Airport makes Nisarga Boulevard the best investment decision for our family.',
    project: 'Nisarga Boulevard'
  }
];
