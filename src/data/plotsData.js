export const BENGALURU_CORRIDORS = [
  { id: 'devanahalli', name: 'North Bengaluru (Airport & STRR Corridor)', distance: '12 mins from KIADB Industrial Hub', potential: '18.4% YoY Growth' },
  { id: 'whitefield', name: 'East Bengaluru (Whitefield-Hoskote Corridor)', distance: '5 mins from STRR & 10 mins from Hope Farm', potential: '15.9% YoY Growth' },
  { id: 'sarjapur', name: 'East Bengaluru (Sarjapur-Attibele Tech Belt)', distance: '15 mins from Wipro SEZ & Commercial Belts', potential: '16.2% YoY Growth' },
  { id: 'dubai', name: 'Dubai Global Investment Belt (Downtown & Marina)', distance: 'Tax-Free 8-10% Rental Yields', potential: '22.0% YoY Growth' }
];

export const INTERIOR_PACKAGES = [
  {
    name: 'Silver Package',
    dryAreaPrice: '₹1,000 / Sq.Ft',
    wetAreaPrice: '₹1,350 / Sq.Ft',
    coreDry: 'Engineered Wood / MDF Pre-Laminated',
    coreWet: 'BWR Ply',
    finish: 'Pre-Laminated Finish',
    hardware: 'EBCO Regular or Equivalent',
    accessories: 'EBCO Regular',
    handles: 'NIKKY or Equivalent'
  },
  {
    name: 'Gold Package',
    dryAreaPrice: '₹1,300 / Sq.Ft',
    wetAreaPrice: '₹1,500 / Sq.Ft',
    coreDry: 'MR Ply (Century/Green/Apple) or MDF',
    coreWet: 'BWP Ply (Exterior Grade Century/Green)',
    finish: 'Merino / Century / Green HGL, SF & Matt Finish',
    hardware: 'HETTICH / HAFELE Regular',
    accessories: 'HETTICH / HAFELE Regular',
    handles: 'EBCO or Equivalent'
  },
  {
    name: 'Platinum Package',
    dryAreaPrice: '₹1,550 / Sq.Ft',
    wetAreaPrice: '₹1,850 / Sq.Ft',
    coreDry: 'MR Ply / MDF (Century/Green)',
    coreWet: 'BWP Ply / Exterior Grade MDF',
    finish: 'Merino / Century Acrylic, Textured & Veneer Finish',
    hardware: 'HETTICH / HAFELE Soft Close',
    accessories: 'HETTICH / HAFELE Soft Close',
    handles: 'Custom Designer Option'
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

export const INITIAL_PROJECTS = [
  {
    id: 'project-nisarga-boulevard',
    title: 'Nisarga Boulevard - Devanahalli',
    slug: 'nisarga-boulevard-devanahalli',
    propertyType: 'Open Plots',
    tagline: 'Thoughtfully Planned Premium Residential Development by PGR Buildtech on STRR',
    developer: 'PGR Buildtech Pvt Ltd',
    location: 'Devanahalli, North Bengaluru (On STRR)',
    corridorId: 'devanahalli',
    constructionStatus: 'Ready for Construction',
    coordinates: { lat: 13.2458, lng: 77.7121 },
    googleMapsUrl: 'https://maps.app.goo.gl/nd1REcJDzUBVkFAg9',
    developerPhone: '+91 8431909508',
    whatsappPhone: '+91 8431909508',
    priceRange: '₹3,500 - ₹4,200 per sq.ft (Pre-Launch Indicative)',
    startPrice: 5250000,
    formattedStartPrice: '₹52.5 Lakhs',
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
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Nisarga Boulevard by PGR Buildtech Pvt Ltd is a thoughtfully planned 26-acre premium residential development in Devanahalli, North Bengaluru, strategically positioned on the Satellite Town Ring Road (STRR). Designed to offer modern lifestyle comforts along with strong long-term investment potential, featuring approx. 254 residential plots from 1500 Sq. Ft. onwards.',
    highlights: [
      'Spread across 26 Acres with Phase Development Started',
      'Approx. 254 Residential Plots (1500 sq.ft, 2400 sq.ft, 2800 sq.ft & ODD Sites)',
      'Strategically located in Devanahalli directly on Satellite Town Ring Road (STRR)',
      'Efficiently planned plots with optimal space utilization & signature PGR quality',
      'Excellent connectivity to Kempegowda Airport & KIADB Aerospace Hub'
    ],
    landmarks: [
      { name: 'Satellite Town Ring Road (STRR)', distance: 'Direct Entry (0 min)' },
      { name: 'Kempegowda International Airport', distance: '12 mins' },
      { name: 'KIADB Aerospace & Hardware Park', distance: '8 mins' }
    ]
  },
  {
    id: 'project-vinra-alora',
    title: 'Vinra Alora - Custom Luxury Villa Plots',
    slug: 'vinra-alora-whitefield-custom-villas',
    propertyType: 'Villas',
    tagline: '5-Acre Gated Custom Villa & Plotted Community near Whitefield & STRR Highway',
    developer: 'Vinra Group (Complete Living Solutions)',
    location: 'Yettakodi Village, Whitefield Extension (Chikkatirupathi Rd)',
    corridorId: 'whitefield',
    constructionStatus: 'Under Construction',
    coordinates: { lat: 12.9698, lng: 77.7500 },
    googleMapsUrl: 'https://maps.google.com/?q=Vinra+Alora+Whitefield',
    developerPhone: '+91 8431909508',
    whatsappPhone: '+91 8431909508',
    priceRange: '₹4,500 - ₹5,800 per sq.ft (Plot + Villa Customization)',
    startPrice: 8500000,
    formattedStartPrice: '₹85.0 Lakhs',
    dimensions: ['1700 sq.ft (Ebony 3BHK)', '2450 sq.ft (Ferns 4BHK)', '3000 sq.ft (Oak 4BHK+Gym)', 'Custom Villa Sites'],
    totalPlots: 78,
    availablePlots: 24,
    reraId: 'PRM/KA/RERA/1250/304/PR/241014/004800',
    approvalType: 'BMRDA & Local Authority Approved',
    bankApprovals: ['SBI Home Loans', 'HDFC Bank', 'ICICI Bank', 'Axis Bank'],
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Vinra Alora is a premier 5-acre gated villa community in Whitefield New Extension by Vinra Group. Featuring 10+ pre-approved architectural villa elevation designs (Ebony 1700 sq.ft, Ferns 2450 sq.ft, Oak 3000 sq.ft) with turnkey interior design packages (Silver, Gold & Platinum by Vinra Interiors).',
    highlights: [
      '5-Acre Gated Villa Community in Whitefield New Extension',
      '10+ Pre-Approved Custom Architectural Elevations (Ebony, Ferns & Oak)',
      'Turnkey Interior Packages (Silver ₹1000/sqft, Gold ₹1300/sqft, Platinum ₹1550/sqft)',
      'Direct 5 Mins Connectivity to Satellite Town Ring Road (STRR)'
    ],
    landmarks: [
      { name: 'Satellite Town Ring Road (STRR)', distance: '5 mins' },
      { name: 'Chikka Tirupati Temple', distance: '6 mins' },
      { name: 'Whitefield Railway Station & Hope Farm', distance: '15 mins' }
    ]
  },
  {
    id: 'project-prestige-city-apartments',
    title: 'Prestige City High-Rise Luxury Apartments',
    slug: 'prestige-city-apartments-sarjapur',
    propertyType: 'Apartments',
    tagline: '180-Acre Master Township with 2, 3 & 4 BHK Luxury High-Rise Apartments',
    developer: 'Prestige Group',
    location: 'Sarjapur Main Road, East Bengaluru',
    corridorId: 'sarjapur',
    constructionStatus: 'Under Construction',
    coordinates: { lat: 12.9250, lng: 77.6850 },
    googleMapsUrl: 'https://maps.google.com/?q=Prestige+City+Sarjapur',
    developerPhone: '+91 8431909508',
    whatsappPhone: '+91 8431909508',
    priceRange: '₹7,200 per sq.ft onwards',
    startPrice: 9500000,
    formattedStartPrice: '₹95.0 Lakhs',
    dimensions: ['1175 sq.ft (2 BHK)', '1650 sq.ft (3 BHK)', '2200 sq.ft (4 BHK Luxury)'],
    totalPlots: 450,
    availablePlots: 85,
    reraId: 'PRM/KA/RERA/1251/308/PR/210907/004315',
    approvalType: 'BDA & RERA Approved',
    bankApprovals: ['SBI Home Loans', 'HDFC Bank', 'ICICI Bank', 'Axis Bank'],
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Prestige City Sarjapur is an iconic 180-acre integrated township offering 2, 3, and 4 BHK luxury high-rise apartments equipped with a 50,000 sq.ft clubhouse, infinity swimming pools, and direct tech corridor access.',
    highlights: [
      '180-Acre Integrated Smart Township on Sarjapur Road',
      '50,000 Sq. Ft. Grand Clubhouse & 5 Star Amenities',
      'Seamless Connectivity to Wipro SEZ, Electronic City & Outer Ring Road'
    ],
    landmarks: [
      { name: 'Wipro SEZ Sarjapur', distance: '3 mins' },
      { name: 'Outer Ring Road (ORR) Junction', distance: '10 mins' }
    ]
  },
  {
    id: 'project-dubai-marina-residences',
    title: 'Dubai Marina Sunset Waterfront Apartments',
    slug: 'dubai-marina-sunset-residences',
    propertyType: 'Dubai Apartments',
    tagline: 'Ultra-Luxury Waterfront Towers with Guaranteed 8-10% Tax-Free USD Rental Yields',
    developer: 'Emaar Properties Dubai',
    location: 'Dubai Marina & Harbour, Dubai UAE',
    corridorId: 'dubai',
    constructionStatus: 'Under Construction',
    coordinates: { lat: 25.0772, lng: 55.1332 },
    googleMapsUrl: 'https://maps.google.com/?q=Dubai+Marina+Emaar',
    developerPhone: '+91 8431909508',
    whatsappPhone: '+91 8431909508',
    priceRange: 'AED 1.4 Million Onwards (Approx. ₹3.1 Cr)',
    startPrice: 31000000,
    formattedStartPrice: 'AED 1.4M (₹3.10 Cr)',
    dimensions: ['850 sq.ft (1 BHK Marina View)', '1400 sq.ft (2 BHK Ocean Suite)', '2200 sq.ft (3 BHK Penthouse)'],
    totalPlots: 120,
    availablePlots: 35,
    reraId: 'RERA-DUBAI-PERMIT-884910',
    approvalType: 'Dubai Land Department (DLD) Approved',
    bankApprovals: ['Mashreq Bank Dubai', 'ENBD Emirates NBD', 'First Abu Dhabi Bank'],
    heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Invest in Dubai Marina Sunset Residences by Emaar, featuring 1, 2 & 3 BHK waterfront apartments with panoramic Arabian Gulf & Yacht Club views. Eligible for 10-Year UAE Golden Visa with tax-free rental returns.',
    highlights: [
      '10-Year UAE Golden Visa Eligibility for Property Investors',
      '100% Tax-Free Income & High USD Capital Growth',
      'Waterfront Marina Promenade Access & Private Yacht Docking'
    ],
    landmarks: [
      { name: 'Dubai Marina Mall & Yacht Club', distance: 'Direct Entry' },
      { name: 'Palm Jumeirah', distance: '8 mins' },
      { name: 'Downtown Dubai & Burj Khalifa', distance: '18 mins' }
    ]
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
    summary: 'Discover how Nisarga Boulevard by PGR Buildtech on the Satellite Town Ring Road (STRR) offers total legal clarity and high land appreciation.',
    content: `Nisarga Boulevard is a 26-acre premium residential development by PGR Buildtech Pvt Ltd in Devanahalli.`
  },
  {
    id: 'blog-2',
    title: 'Dubai Real Estate Investment Guide 2026: Tax-Free Yields & UAE Golden Visa',
    slug: 'dubai-real-estate-golden-visa-investment-guide',
    category: 'Dubai Property',
    date: 'March 15, 2026',
    readTime: '6 min read',
    author: 'Dubai International Advisory Team',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    summary: 'Learn why Indian investors are acquiring waterfront apartments in Dubai Marina & Downtown for 8-10% tax-free rental yields and 10-year Golden Visas.',
    content: `Dubai continues to lead global real estate investments.`
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
    quote: 'We booked a 1500 sq.ft plot in Nisarga Boulevard on the STRR. Legal transparency and Channel Partner guidance was top notch!',
    project: 'Nisarga Boulevard'
  },
  {
    id: 'rev-2',
    name: 'Dr. Suresh Natarajan',
    location: 'Villa Buyer at Vinra Alora, Whitefield',
    profession: 'Consultant Surgeon, Manipal Hospital',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: 'Vinra Alora gave us the Oak 3000 sq.ft villa customization option with Platinum interior package. Outstanding guidance!',
    project: 'Vinra Alora'
  }
];
