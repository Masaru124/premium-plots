export const BENGALURU_CORRIDORS = [
  { id: 'all-corridors', name: 'All Bengaluru & Regional Corridors', distance: 'Prime High-Growth Belts', potential: '18.4% YoY Average' },
  { id: 'chikkaballapura-nandi', name: 'Chikkaballapura & Nandi Hills Belt', distance: 'Scenic Living & STRR North Gateway', potential: '21.5% YoY Growth' },
  { id: 'airport-chikkajala', name: 'Airport & Chikkajala Corridor', distance: '5-10 mins from Kempegowda International Airport', potential: '22.8% YoY Growth' },
  { id: 'east-kothanur-hoskote', name: 'East Corridor (Kothanur & Hoskote)', distance: '10 mins from STRR & Hope Farm Junction', potential: '17.6% YoY Growth' },
  { id: 'south-jigani-apc', name: 'South Industrial Belt (APC Circle, Jigani & Kanakapura Rd)', distance: 'Direct Electronic City & NICE Corridor Link', potential: '16.9% YoY Growth' },
  { id: 'west-tumkur-kolar', name: 'West & Extended Hubs (Tumkur Rd & Kolar Belt)', distance: 'Industrial Corridor & Expressway Access', potential: '15.4% YoY Growth' },
  { id: 'dubai', name: 'Dubai Global Investment Belt (Marina & Harbour)', distance: 'Tax-Free 8-10% USD Yields & Golden Visa', potential: '24.0% YoY Growth' }
];

export const FEATURED_GROUPS = [
  {
    id: 'oriaiyan-group',
    name: 'Oriaiyan Group',
    tagline: 'Premier Plotted Development & Land Infrastructure Head',
    badge: 'Project Head',
    categories: ['Plots', 'Villa Plots'],
    locations: ['Kolar', 'Chikkaballapura', 'APC Circle', 'Jigani', 'Tumkur Rd', 'Kanakapura Rd'],
    priceRange: '₹50 Lakhs - ₹2.0 Crore',
    maxSize: 'Up to 4,499 Sq.Ft',
    icon: '🏛',
    highlights: '6 Strategic Growth Corridors • Direct Clear Titles • 100% RERA/BMRDA Guidelines'
  },
  {
    id: 'tripon-groups',
    name: 'Tripon Groups',
    tagline: 'Luxury High-Rise Residences & Scenic Nandi Villa Enclaves',
    badge: 'Luxury Developer',
    categories: ['Apartments', 'Villas'],
    locations: ['Airport Corridor (Devanahalli)', 'Chikkaballapura (Nandi Foothills)'],
    priceRange: '₹52 Lakhs - ₹4.0 Crore',
    maxSize: '2, 3, 4 & 5 BHK Estates',
    icon: '✨',
    highlights: 'Aero Gardens (5 Mins from Airport) & Nandi Hills 3/4/5 BHK Private Villas'
  },
  {
    id: 'vinra-group',
    name: 'Vinra Group / Vinra KBR',
    tagline: 'Modern High-Connectivity Urban Living',
    badge: 'Twin-Corridor Specialist',
    categories: ['Apartments'],
    locations: ['Chikkajala (North Bengaluru)', 'Kothanur near Hoskote (East Bengaluru)'],
    priceRange: '₹59 Lakhs - ₹1.9 Crore',
    maxSize: '1, 2, 3 & 4 BHK Units',
    icon: '🏢',
    highlights: 'Dual-location residences with clubhouse amenities in Chikkajala & Kothanur'
  },
  {
    id: 'd1-projects',
    name: 'D1 Projects / Sun Valley',
    tagline: 'Scenic Plotted Community & Nandi Gateway Living',
    badge: 'Value Plotted Enclave',
    categories: ['Plots'],
    locations: ['Chikkaballapura'],
    priceRange: '₹35 Lakhs - ₹90 Lakhs',
    maxSize: '1,200 - 2,400 Sq.Ft Plots',
    icon: '🏞',
    highlights: 'Sun Valley scenic township with wide blacktop roads, landscaped parks & water supply'
  },
  {
    id: 'dubai-estates',
    name: 'Dubai Global Estates',
    tagline: 'Global Luxury Waterfront Residences & Golden Visa Assets',
    badge: 'International Portfolio',
    categories: ['Dubai Apartments'],
    locations: ['Dubai Marina & Harbour, UAE'],
    priceRange: 'AED 1.4M (₹3.10 Cr onwards)',
    maxSize: '1, 2, 3 BHK Ocean Suites',
    icon: '🌍',
    highlights: 'Guaranteed 8-10% tax-free rental returns with 10-Year UAE Golden Visa eligibility'
  }
];

export const INITIAL_LEADS = [
  {
    id: 'lead-101',
    name: 'Dr. Anand Kumar',
    phone: '+91 84319 09508',
    email: 'anand.k@oriaiyaninvest.com',
    projectTitle: 'Oriaiyan Signature Plotted & Villa Plot Developments',
    visitDate: '2026-10-15',
    visitTime: '11:00 AM',
    cabPickup: true,
    pickupLocation: 'Kempegowda Airport Terminal 1',
    status: 'Confirmed',
    createdAt: '2026-10-06 10:30 AM'
  },
  {
    id: 'lead-102',
    name: 'Vikram & Radhika Seth',
    phone: '+91 98450 12345',
    email: 'vikram.seth@techcorp.com',
    projectTitle: 'Tripon Nandi Luxury Villas (3, 4 & 5 BHK)',
    visitDate: '2026-10-18',
    visitTime: '03:30 PM',
    cabPickup: false,
    pickupLocation: 'Self Drive',
    status: 'Confirmed',
    createdAt: '2026-10-07 09:15 AM'
  }
];

export const INITIAL_PROJECTS = [
  {
    id: 'project-oriaiyan-signature-plots',
    title: 'Oriaiyan Signature Plotted Developments & Villa Plots',
    slug: 'oriaiyan-signature-plotted-villa-plots-bengaluru',
    propertyType: 'Open Plots',
    groupName: 'Oriaiyan Group',
    tagline: 'Flagship Plotted & Villa Plot Enclaves across 6 High-Growth Bengaluru Corridors by Oriaiyan Group',
    developer: 'Oriaiyan Group (Project Head)',
    location: 'Kolar, Chikkaballapura, APC Circle, Jigani, Tumkur Rd, Kanakapura Rd',
    corridorId: 'chikkaballapura-nandi',
    corridorsCovered: ['Kolar', 'Chikkaballapura', 'APC Circle (Jigani/Anekal)', 'Jigani', 'Tumkur Road', 'Kanakapura Road'],
    constructionStatus: 'Ready for Construction',
    coordinates: { lat: 13.4355, lng: 77.7289 },
    googleMapsUrl: 'https://maps.google.com/?q=Oriaiyan+Plotted+Developments+Bengaluru',
    developerPhone: '+91 8431909508',
    whatsappPhone: '+91 8431909508',
    priceRange: '₹50 Lakhs - ₹2.0 Crore',
    startPrice: 5000000,
    formattedStartPrice: '₹50.0 Lakhs',
    dimensions: ['1200 sq.ft (30x40)', '1500 sq.ft (30x50)', '2400 sq.ft (40x60)', '3000 sq.ft (50x60)', '4499 sq.ft (Grand Estate)'],
    totalPlots: 320,
    availablePlots: 94,
    reraId: 'PRM/KA/RERA/1250/303/PR/250112/008890',
    approvalType: 'RERA & Local Town Planning Approved',
    bankApprovals: ['SBI Home Loans', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Canara Bank'],
    heroImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Oriaiyan Group presents its signature portfolio of residential plots and luxury villa plots spread across six premier growth corridors: Kolar, Chikkaballapura, APC Circle (Jigani/Anekal), Jigani Industrial Hub, Tumkur Road, and Kanakapura Road. Featuring plot dimensions up to 4,499 Sq.Ft with underground cabling, wide avenue trees, and 100% clear titles.',
    highlights: [
      'Plots & Villa Plots spanning up to 4,499 Sq.Ft with grand setbacks',
      'Available across 6 High-Growth Corridors: Kolar, Chikkaballapura, APC Circle, Jigani, Tumkur Rd & Kanakapura Rd',
      'Direct pricing starting from ₹50 Lakhs up to ₹2.0 Crore',
      'Underground electrical cabling, dedicated water lines & grand entry archways',
      'Pre-approved home and plot loans from SBI, HDFC and leading nationalized banks'
    ],
    landmarks: [
      { name: 'Chikkaballapura Town & STRR Interchange', distance: '8 mins' },
      { name: 'APC Circle / Jigani Industrial Gateway', distance: '5 mins' },
      { name: 'Kanakapura Expressway & Metro Corridor', distance: '12 mins' },
      { name: 'Tumkur Road Industrial Corridor', distance: '10 mins' },
      { name: 'Kolar Highway & Industrial SEZ', distance: '15 mins' }
    ]
  },
  {
    id: 'project-sun-valley-chikkaballapura',
    title: 'Sun Valley Plotted Enclave - Chikkaballapura',
    slug: 'sun-valley-plots-chikkaballapura-d1',
    propertyType: 'Open Plots',
    groupName: 'D1 Projects',
    tagline: 'Scenic Plotted Community in Chikkaballapura with Unobstructed Views of Nandi Hills',
    developer: 'D1 Projects / Sun Valley Developers',
    location: 'Chikkaballapura (Near Nandi Hills Foothills)',
    corridorId: 'chikkaballapura-nandi',
    constructionStatus: 'Ready for Construction',
    coordinates: { lat: 13.4320, lng: 77.7260 },
    googleMapsUrl: 'https://maps.google.com/?q=Sun+Valley+Chikkaballapura',
    developerPhone: '+91 8431909508',
    whatsappPhone: '+91 8431909508',
    priceRange: '₹35 Lakhs - ₹90 Lakhs',
    startPrice: 3500000,
    formattedStartPrice: '₹35.0 Lakhs',
    dimensions: ['1200 sq.ft (30x40)', '1500 sq.ft (30x50)', '2400 sq.ft (40x60)'],
    totalPlots: 180,
    availablePlots: 52,
    reraId: 'PRM/KA/RERA/1250/303/PR/240918/007120',
    approvalType: 'CUDDA & RERA Approved',
    bankApprovals: ['SBI Home Loans', 'HDFC Bank', 'ICICI Bank', 'Axis Bank'],
    heroImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Sun Valley by D1 Projects is a serene, beautifully master-planned plotted development located in Chikkaballapura near the Nandi Hills belt. Offering residential plots priced attractively from ₹35 Lakhs to ₹90 Lakhs with blacktop roads, dedicated children play parks, and immediate registration.',
    highlights: [
      'Prime location in Chikkaballapura with fresh air and scenic mountain backdrops',
      'Attractive value pricing from ₹35 Lakhs to ₹90 Lakhs',
      'Complete township infrastructure: overhead water tank, street lights & 24/7 security',
      '10 Mins from the upcoming STRR North corridor and national highway'
    ],
    landmarks: [
      { name: 'Nandi Hills Base Road', distance: '12 mins' },
      { name: 'Chikkaballapura Medical College & DC Office', distance: '6 mins' },
      { name: 'Kempegowda International Airport', distance: '25 mins' }
    ]
  },
  {
    id: 'project-vinra-kbr-residences',
    title: 'Vinra KBR Residences - Chikkajala & Kothanur',
    slug: 'vinra-kbr-apartments-chikkajala-kothanur-hoskote',
    propertyType: 'Apartments',
    groupName: 'Vinra Group',
    tagline: 'Modern High-Rise Apartments Across Two Strategic Hubs: Chikkajala (North) & Kothanur (East)',
    developer: 'Vinra Group / Vinra KBR',
    location: '1) Chikkajala (North Bengaluru) • 2) Kothanur near Hoskote (East Bengaluru)',
    corridorId: 'airport-chikkajala',
    constructionStatus: 'Under Construction',
    coordinates: { lat: 13.1789, lng: 77.6250 },
    googleMapsUrl: 'https://maps.google.com/?q=Vinra+KBR+Chikkajala',
    developerPhone: '+91 8431909508',
    whatsappPhone: '+91 8431909508',
    priceRange: '₹59 Lakhs - ₹1.9 Crore',
    startPrice: 5900000,
    formattedStartPrice: '₹59.0 Lakhs',
    dimensions: ['750 sq.ft (1 BHK)', '1150 sq.ft (2 BHK)', '1550 sq.ft (3 BHK)', '2100 sq.ft (4 BHK Penthouse)'],
    totalPlots: 260,
    availablePlots: 74,
    reraId: 'PRM/KA/RERA/1251/309/PR/241105/008122',
    approvalType: 'BDA & RERA Approved',
    bankApprovals: ['SBI Home Loans', 'HDFC Bank', 'ICICI Bank', 'Axis Bank'],
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Vinra KBR Residences by Vinra Group offers contemporary 1, 2, 3, and 4 BHK luxury residences across two of Bengaluru\'s most active real estate corridors: Chikkajala (on the Airport Expressway) and Kothanur near Hoskote (East Bengaluru). Equipped with modern clubhouses, rooftop swimming pools, and high-speed elevator access.',
    highlights: [
      'Dual-Corridor Presence: Chikkajala (Airport Road) & Kothanur (Hoskote East Belt)',
      '1, 2, 3 & 4 BHK apartments priced from ₹59 Lakhs to ₹1.9 Crore',
      'Luxury amenities including rooftop lounge, fitness gym, children creche & multi-tier security',
      'Superb rental demand from Airport professionals, IT parks & Hoskote Industrial Hub'
    ],
    landmarks: [
      { name: 'Kempegowda International Airport (from Chikkajala)', distance: '8 mins' },
      { name: 'Kothanur / Hoskote Industrial Belt', distance: '5 mins' },
      { name: 'Whitefield ITPB & Hope Farm (from Kothanur)', distance: '15 mins' }
    ]
  },
  {
    id: 'project-tripon-aero-gardens',
    title: 'Tripon Aero Gardens - Airport Corridor',
    slug: 'tripon-aero-gardens-devanahalli-airport',
    propertyType: 'Apartments',
    groupName: 'Tripon Groups',
    tagline: 'Premium High-Rise Residences Located Just 5 Minutes from Kempegowda International Airport',
    developer: 'Tripon Groups',
    location: 'Devanahalli (5 mins from Kempegowda International Airport)',
    corridorId: 'airport-chikkajala',
    constructionStatus: 'Under Construction',
    coordinates: { lat: 13.2458, lng: 77.7121 },
    googleMapsUrl: 'https://maps.google.com/?q=Tripon+Aero+Gardens+Airport',
    developerPhone: '+91 8431909508',
    whatsappPhone: '+91 8431909508',
    priceRange: '₹52 Lakhs - ₹1.5 Crore',
    startPrice: 5200000,
    formattedStartPrice: '₹52.0 Lakhs',
    dimensions: ['850 sq.ft (1.5 BHK)', '1200 sq.ft (2 BHK)', '1650 sq.ft (3 BHK Premium)', '2050 sq.ft (3 BHK + Maid)'],
    totalPlots: 310,
    availablePlots: 88,
    reraId: 'PRM/KA/RERA/1250/303/PR/241201/009100',
    approvalType: 'BIAPPA & RERA Approved',
    bankApprovals: ['SBI Home Loans', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Bank of Baroda'],
    heroImage: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Tripon Aero Gardens by Tripon Groups is an iconic luxury residential community situated just 5 minutes from Kempegowda International Airport. Tailored for aviation professionals, global executives, and astute investors seeking high rental yield assets in North Bengaluru\'s aerospace corridor.',
    highlights: [
      'Unmatched location: 5 minutes from Terminal 1 & 2 of Kempegowda Airport',
      'Attractive pricing from ₹52 Lakhs to ₹1.5 Crore',
      'Resort-style amenities: 25,000 sq.ft clubhouse, badminton courts & jogging track',
      'Direct frontage on the 6-lane Airport Expressway and upcoming Airport Metro line'
    ],
    landmarks: [
      { name: 'Kempegowda International Airport', distance: '5 mins' },
      { name: 'KIADB Aerospace & Hardware SEZ', distance: '4 mins' },
      { name: 'Devanahalli Business Park & STRR', distance: '6 mins' }
    ]
  },
  {
    id: 'project-tripon-nandi-villas',
    title: 'Tripon Nandi Luxury Villas (3, 4 & 5 BHK)',
    slug: 'tripon-nandi-villas-chikkaballapura-nandi-hills',
    propertyType: 'Villas',
    groupName: 'Tripon Groups',
    tagline: 'Exclusive Gated Luxury Villa Community in Chikkaballapura with Scenic Views of Nandi Hills',
    developer: 'Tripon Groups',
    location: 'Chikkaballapura (Nandi Foothills)',
    corridorId: 'chikkaballapura-nandi',
    constructionStatus: 'Under Construction',
    coordinates: { lat: 13.4180, lng: 77.7110 },
    googleMapsUrl: 'https://maps.google.com/?q=Tripon+Nandi+Villas+Chikkaballapura',
    developerPhone: '+91 8431909508',
    whatsappPhone: '+91 8431909508',
    priceRange: '₹2.4 Crore - ₹4.0 Crore',
    startPrice: 24000000,
    formattedStartPrice: '₹2.40 Crore',
    dimensions: ['2400 sq.ft (3 BHK Villa)', '3200 sq.ft (4 BHK Grand Villa)', '4500 sq.ft (5 BHK Signature Mansion)'],
    totalPlots: 65,
    availablePlots: 18,
    reraId: 'PRM/KA/RERA/1250/304/PR/250210/009855',
    approvalType: 'CUDDA & RERA Approved',
    bankApprovals: ['SBI Home Loans', 'HDFC Bank', 'ICICI Bank', 'Axis Bank'],
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Tripon Nandi Villas by Tripon Groups is a boutique 15-acre gated villa community nestled in the serene foothills of Nandi Hills, Chikkaballapura. Offering 3, 4, and 5 BHK custom architectural villas with private landscaped courtyards, plunge pools, and luxury finishes, priced from ₹2.4 Cr to ₹4.0 Cr.',
    highlights: [
      'Exclusive boutique enclave with 3, 4 & 5 BHK luxury villas (2,400 to 4,500 sq.ft)',
      'Spectacular views of Nandi Hills with clean air and tranquil microclimate',
      'Private clubhouse with heated pool, tennis court, organic farming zone & wellness spa',
      'Fast 20-minute direct expressway drive to Kempegowda International Airport'
    ],
    landmarks: [
      { name: 'Nandi Hills Scenic Viewpoint', distance: '10 mins' },
      { name: 'Chikkaballapura City Centre & Hospital Hub', distance: '7 mins' },
      { name: 'Kempegowda International Airport', distance: '20 mins' }
    ]
  },
  {
    id: 'project-dubai-marina-residences',
    title: 'Dubai Marina Sunset Waterfront Apartments',
    slug: 'dubai-marina-sunset-residences',
    propertyType: 'Dubai Apartments',
    groupName: 'Dubai Global Estates',
    tagline: 'Ultra-Luxury Waterfront Towers with Guaranteed 8-10% Tax-Free USD Rental Yields & 10-Yr Golden Visa',
    developer: 'Emaar Properties Dubai / Dubai Global Estates',
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
    title: 'Why Oriaiyan Plotted Developments Across Kolar & Chikkaballapura Lead Bengaluru Land Investments',
    slug: 'why-oriaiyan-plotted-developments-bengaluru-corridors',
    category: 'Market Spotlight',
    date: 'October 06, 2026',
    readTime: '5 min read',
    author: 'Lakshie Real Estate Research Cell',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    summary: 'Discover how Oriaiyan Group\'s plotted enclaves up to 4,499 sq.ft across Kolar, Chikkaballapura, APC Circle, Jigani, Tumkur Rd & Kanakapura Rd offer unmatched capital appreciation.',
    content: `Oriaiyan Group has set a new benchmark in verified plotted land and villa plot infrastructure in Bengaluru.`
  },
  {
    id: 'blog-2',
    title: 'Tripon Aero Gardens & Nandi Luxury Villas: Dual-Asset Power in North Bengaluru',
    slug: 'tripon-aero-gardens-nandi-villas-guide',
    category: 'Developer Focus',
    date: 'September 28, 2026',
    readTime: '6 min read',
    author: 'North Bengaluru Advisory Team',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    summary: 'Explore Tripon Groups\' high-growth apartments 5 minutes from Kempegowda Airport and bespoke 3, 4, 5 BHK luxury villas at Nandi Hills.',
    content: `Tripon Groups provides exceptional real estate assets in Bengaluru\'s highest growth corridor.`
  },
  {
    id: 'blog-3',
    title: 'Dubai Real Estate Investment Guide: Tax-Free USD Yields & UAE Golden Visa',
    slug: 'dubai-real-estate-golden-visa-investment-guide',
    category: 'Dubai Property',
    date: 'August 15, 2026',
    readTime: '6 min read',
    author: 'Dubai International Advisory Team',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    summary: 'Learn why Indian investors are acquiring waterfront apartments in Dubai Marina & Downtown for 8-10% tax-free rental yields and 10-year Golden Visas.',
    content: `Dubai continues to lead global real estate investments with zero property taxes and high rental returns.`
  }
];

export const CLIENT_REVIEWS = [
  {
    id: 'rev-1',
    name: 'Dr. Vikram & Ananya Reddy',
    location: 'Villa Plot Owner at Oriaiyan Group (Chikkaballapura Corridor)',
    profession: 'Senior Software Director at Foxconn Tech',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    quote: 'We booked a 2400 sq.ft villa plot in Oriaiyan Signature development. The clear documentation and prompt channel partner guidance by Lakshie was outstanding!',
    project: 'Oriaiyan Group'
  },
  {
    id: 'rev-2',
    name: 'Karthik & Sneha Iyer',
    location: 'Homeowner at Tripon Aero Gardens (Airport Corridor)',
    profession: 'Aviation Executive, Kempegowda International Airport',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: 'Being just 5 minutes from the airport, Tripon Aero Gardens was the perfect investment for us. Outstanding appreciation potential!',
    project: 'Tripon Aero Gardens'
  }
];


export const INTERIOR_PACKAGES = [
  {
    name: 'Silver Package',
    dryAreaPrice: '₹1,250 / sq.ft',
    wetAreaPrice: '₹1,550 / sq.ft',
    coreDry: 'Action TESA HDHMR Grade Plywood',
    coreWet: 'Greenply 710 BWP Boiling Water Proof Ply',
    finish: '0.8mm High-Gloss Merino / Stylam Laminate',
    hardware: 'Ebco Soft-Close Hinges & Heavy-Duty Channels',
    accessories: 'Stainless Steel 202 4-Basket Modular Wire Organizers',
    handles: 'Brushed Aluminium Edge Profile Handles'
  },
  {
    name: 'Gold Package',
    dryAreaPrice: '₹1,650 / sq.ft',
    wetAreaPrice: '₹2,050 / sq.ft',
    coreDry: 'Century MR Grade / Action TESA HDHMR',
    coreWet: 'Century Club Prime 710 Marine Grade BWP Ply',
    finish: '1.0mm Anti-Scratch Acrylic / High-Gloss Laminate',
    hardware: 'HETTICH Sensys Soft-Close Concealed Hinges',
    accessories: 'Stainless Steel 304 Grade 6-Basket Tandem Box Set',
    handles: 'Concealed Gola Profile & Rose Gold Edge Handles'
  },
  {
    name: 'Platinum Package',
    dryAreaPrice: '₹2,250 / sq.ft',
    wetAreaPrice: '₹2,850 / sq.ft',
    coreDry: 'Century Pro / Green Gold Premium HDHMR',
    coreWet: 'Century Architect Platinum 710 Waterproof Marine Ply',
    finish: 'PU Lacquered Paint / Ceramic Finish & Glass Shutter Doors',
    hardware: 'HAFELE Matrix Box Premium Soft-Close Drawers & Hinges',
    accessories: 'Hafele Magic Corner, Tall Unit & Deep Pantry Pullouts',
    handles: 'Handleless Integrated Magnetic Push-to-Open System'
  }
];

