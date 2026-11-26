// Evidence-backed guides. These target the questions a portal listing grid
// cannot answer, which is where an independent desk can actually rank.
// Regulatory claims are hedged and linked to the primary source; nothing here
// is a substitute for the buyer's own document check.

export const GUIDES = [
  {
    slug: 'verify-plot-approvals-bangalore',
    listingSlugs: ['sun-valley-plots-chikkaballapura-d1','oriaiyan-signature-plotted-villa-plots-bengaluru','triton-nandi-villas-chikkaballapura-nandi-hills'],
    shortTitle: 'Verifying plot approvals',
    imageProject: 'sun-valley-plots-chikkaballapura-d1',
    title: 'How to Verify Plot Approvals in Bangalore (Checklist)',
    description:
      'A document-by-document check for a Bangalore plot: sanctioning authority, RERA Karnataka registration, A-Khata and e-Khata, survey sketch and encumbrance certificate.',
    h1: 'How to verify a plot before you pay.',
    answer:
      'Before paying a token amount for a plot in Bangalore, check five things: the sale deed and its chain of title, the encumbrance certificate, the survey sketch and survey number, the khata (A-Khata or the applicable revenue record), and the layout sanction from the planning authority that has jurisdiction — BIAAPA, BMRDA, BDA or the local town planning body. Then check the project registration on the Karnataka RERA portal. A layout that cannot produce all five is not ready to buy, whatever the brochure shows.',
    updated: '2026-11-26',
    keywords: [
      'how to verify plot approval in bangalore',
      'documents to check before buying a plot in bangalore',
      'a khata plots in bangalore',
      'e khata plot bangalore',
      'rera registered plots in karnataka',
      'biaapa approved plots',
      'bmrda approved plots',
      'plot legal verification bangalore'
    ],
    sections: [
      {
        h2: 'Which authority sanctions a plot layout?',
        paragraphs: [
          'The answer depends on where the land sits, not on what the brochure prints. Inside Bengaluru city the layout falls to BDA and the khata to BBMP. In the Bengaluru Metropolitan Region but outside the city, BMRDA and its planning authorities apply — BIAAPA covers the airport belt around Devanahalli, and separate planning authorities cover other taluks. Outside those boundaries the local panchayat or town planning authority sanctions the layout.',
          'Some developers advertise "CUDDA approved" layouts. Ask which authority issued the sanction, for which survey numbers, and for the sanction number itself. Confirm that the named authority actually has jurisdiction over that parcel; a sanction from the wrong body does not make the layout legal.'
        ]
      },
      {
        h2: 'The five documents that matter',
        bullets: [
          'Sale deed and mother deed, read as a chain: every transfer should be accounted for, with no gap in ownership.',
          'Encumbrance certificate for the survey number, covering the period since the last transfer, showing no unexplained mortgage or charge.',
          'Survey sketch and survey number, matched against the plot number on the layout plan and the deed.',
          'Khata — A-Khata or the applicable revenue record — plus the latest property tax receipt.',
          'Layout sanction and approved plan from the planning authority, with the RERA registration for the phase being sold.'
        ]
      },
      {
        h2: 'A-Khata, B-Khata and e-Khata, plainly',
        paragraphs: [
          'A-Khata is the revenue record for a property that has been assessed and entered in the municipal register; it is the record most buyers mean when they say the papers are clear. B-Khata is a separate register for properties that are unassessed or have irregularities, and it carries real risk of higher charges or regularisation later.',
          'e-Khata is the digitised version of the khata record. It is a copy of the register entry, not a substitute for reading the sanction, the deed or the survey documents. Verify the khata number on the municipal portal rather than accepting a scanned copy.'
        ]
      },
      {
        h2: 'What to check on the Karnataka RERA portal',
        paragraphs: [
          'Search the project name and the promoter on the Karnataka RERA portal (rera.karnataka.gov.in). A registered project shows its registration number, the promoter, the phase, the declared completion date and the quarterly progress reports where filed. Match the registration to the phase you are being sold — a registered tower does not cover an unregistered extension behind it.',
          'Also check that the person or firm selling to you is a registered agent where the law requires it, and read the declared project documents rather than the marketing deck.'
        ]
      },
      {
        h2: 'The questions to ask before a token payment',
        bullets: [
          'Which authority sanctioned this layout, and what is the sanction number?',
          'Is this plot number on the approved plan, or in a later unapproved extension?',
          'Is the khata in the developer name or already split per plot?',
          'What is the RERA registration number for this phase, and what does its declared completion date say?',
          'Who pays for the khata transfer, registration and any betterment charges?',
          'Are there any pending court cases, acquisitions or road-widening lines on these survey numbers?'
        ]
      },
      {
        h2: 'A practical order of work',
        paragraphs: [
          'Ask for the document set before the site visit, read it, then visit the land. If the documents are produced only after a booking amount is requested, treat that as the answer to your question. A lawyer independent of the developer should read the chain of title; the desk can explain what each paper does, but it should not be the only pair of eyes on a purchase of this size.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Is A-Khata necessary to buy a plot in Bangalore?',
        a: 'It is the record buyers should expect to see. A plot without a khata, or with a B-Khata entry, needs a clear explanation of why and what regularisation would cost before you commit. Ask for the khata number and verify it on the municipal portal rather than relying on a scanned certificate.'
      },
      {
        q: 'How do I check if a plot project is RERA registered in Karnataka?',
        a: 'Search the project and promoter name on rera.karnataka.gov.in. Confirm the registration number, the phase it covers and the declared completion date, and match them to the unit or plot being sold. Registration of one phase does not cover a different, later layout.'
      },
      {
        q: 'What is the difference between BIAAPA and BMRDA approval?',
        a: 'BMRDA is the metropolitan region development authority; BIAAPA is one of its planning authorities, covering the Bengaluru airport belt around Devanahalli. Which one applies depends on where the land sits. Ask for the sanction letter and check that the issuing authority has jurisdiction over that survey number.'
      },
      {
        q: 'Can a plot be sold without an encumbrance certificate?',
        a: 'It can be offered that way, but you should not buy without one. The EC shows registered transactions and charges against the survey number over a chosen period. Ask for a period that runs back to the last transfer, and read it against the deed chain.'
      }
    ],
    sources: [
      { label: 'BBMP — A-Khata and e-Khata', url: 'https://bbmp.karnataka.gov.in/BtoAKhata' },
      { label: 'Karnataka RERA', url: 'https://rera.karnataka.gov.in/' },
      { label: 'BMRDA — local planning authorities', url: 'https://bmrda.karnataka.gov.in/8/local-planning-areas/en' }
    ],
    related: [
      { label: 'Premium plots in Bangalore', href: '/premium-plots-in-bangalore' },
      { label: 'Plots in Chikkaballapura', href: '/plots-in-chikkaballapura' },
      { label: 'Plot or apartment in Bangalore?', href: '/guides/plot-vs-apartment-bangalore' }
    ]
  },
  {
    slug: 'plot-vs-apartment-bangalore',
    listingSlugs: ['oriaiyan-signature-plotted-villa-plots-bengaluru','triton-aero-gardens-devanahalli-airport','triton-nandi-villas-chikkaballapura-nandi-hills'],
    shortTitle: 'Plot or apartment',
    imageProject: 'triton-nandi-villas-chikkaballapura-nandi-hills',
    title: 'Plot vs Apartment in Bangalore: Which to Buy?',
    description:
      'A side-by-side on land and flats in Bangalore: cash flow, appreciation, maintenance, loan terms, liquidity and who each one suits.',
    h1: 'Plot or apartment in Bangalore?',
    answer:
      'A plot in Bangalore is land: no rent until you build, no maintenance charge, and value that moves with the corridor rather than the building. An apartment produces rent immediately, is easier to finance and to sell in most markets, and depreciates as the structure ages. The right choice depends on whether you need income now, a home soon, or a long-horizon land position — and on how much of your capital you can leave untouched.',
    updated: '2026-11-26',
    keywords: [
      'plot vs apartment in bangalore',
      'plots vs flats bangalore',
      'plot or flat which is better bangalore',
      'plots vs villas for investment bangalore',
      'is buying a plot a good investment bangalore'
    ],
    sections: [
      {
        h2: 'The comparison that actually decides it',
        table: {
          caption: 'Plot and apartment compared on the things buyers ask about',
          head: ['Question', 'Plot', 'Apartment'],
          rows: [
            ['Income before you build', 'None', 'Rent from possession'],
            ['Monthly outgo', 'Property tax; upkeep of the layout', 'Maintenance charge, sinking fund, parking'],
            ['What appreciates', 'The land and its access', 'The land share, less building depreciation'],
            ['Typical loan', 'Shorter tenure, lower share of value financed', 'Longer tenure, higher share financed'],
            ['Liquidity', 'Slower; buyer pool is smaller', 'Faster in most Bengaluru micro-markets'],
            ['Effort after purchase', 'Fencing, watchman, construction decisions', 'Managed by the association'],
            ['Biggest risk', 'Title, approval and access', 'Builder delivery, and later, ageing stock']
          ]
        }
      },
      {
        h2: 'Cash flow is the first filter',
        paragraphs: [
          'An apartment bought for investment pays you while you hold it. A plot pays nothing until something is built, and it costs you tax and upkeep in the meantime. If the plan depends on rental income to service a loan, a plot usually fails that test — the numbers are arithmetic, not opinion.',
          'The desk runs this comparison with buyers before showing inventory, because the answer changes which corridor and which budget make sense.'
        ]
      },
      {
        h2: 'Appreciation is a corridor question, not a category question',
        paragraphs: [
          'Land in a corridor that gains access — a ring road interchange, a metro extension, an employment cluster — can outperform a building that is ageing in a corridor that has not changed. The reverse is equally true: a plot on a road that never arrives can sit flat for a decade while a flat in a working micro-market pays rent and holds value.',
          'That is why corridor pages on this site list what each corridor is priced against, rather than promising a growth number. Ask what specifically is being built, when it is funded, and what has already been delivered.'
        ]
      },
      {
        h2: 'Loans and holding costs',
        paragraphs: [
          'Plot loans are generally available for a smaller share of the value and over a shorter tenure than home loans, and lenders are stricter about approvals and title. Construction after purchase is a separate loan. An apartment loan is a single, longer instrument secured on the unit.',
          'Model the holding cost honestly: property tax, upkeep, and — for a plot — the years before construction. A plot that costs ₹60 lakh and sits for six years has a real carrying cost even when the price does not move.'
        ]
      },
      {
        h2: 'Who each one suits',
        bullets: [
          'A plot suits a buyer with a five-to-ten year horizon, capital that does not need to produce income, and patience for paperwork and a build.',
          'An apartment suits a buyer who needs a home soon, wants rent or a managed asset, and prefers a single loan and a single association to deal with.',
          'A villa sits between the two: land plus a structure, with the maintenance and the premium that come with both.',
          'Neither is universally better. Anyone who tells you otherwise without your numbers is selling, not advising.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Is a plot a better investment than an apartment in Bangalore?',
        a: 'Not by category. A plot can outperform where the corridor gains infrastructure and the title is clean; an apartment can outperform where it produces rent in a working micro-market and the plot corridor stalls. Compare the specific plot and the specific flat on holding cost, loan terms and exit liquidity.'
      },
      {
        q: 'Can I get a home loan for a plot in Bangalore?',
        a: 'Lenders offer plot loans for approved layouts, usually for a smaller share of the value and over a shorter tenure than a home loan, and construction later needs a separate loan. Ask the lender about eligibility for the specific survey number rather than assuming the project qualifies.'
      },
      {
        q: 'Do plots in Bangalore have maintenance charges?',
        a: 'A gated plotted layout usually charges for common-area upkeep, security and water once the association is formed. Ask what the current charge is and who collects it before you compare it with an apartment maintenance figure.'
      },
      {
        q: 'Which is easier to sell later?',
        a: 'Apartments generally have a larger buyer pool and sell faster in Bengaluru; plots take longer because the buyer must also be comfortable with title, approval and construction. Liquidity matters if you may need the capital back within a few years.'
      }
    ],
    sources: [
      { label: 'Karnataka RERA — registered projects', url: 'https://rera.karnataka.gov.in/' },
      { label: 'BMRDA — local planning authorities', url: 'https://bmrda.karnataka.gov.in/8/local-planning-areas/en' }
    ],
    related: [
      { label: 'How to verify a plot before you pay', href: '/guides/verify-plot-approvals-bangalore' },
      { label: 'Plot loans in Bangalore', href: '/guides/plot-loan-bangalore' },
      { label: 'Plots in south Bangalore', href: '/plots-in-south-bangalore' }
    ]
  },
  {
    slug: 'plot-loan-bangalore',
    listingSlugs: ['sun-valley-plots-chikkaballapura-d1','oriaiyan-signature-plotted-villa-plots-bengaluru'],
    shortTitle: 'Plot loans',
    imageProject: 'oriaiyan-signature-plotted-villa-plots-bengaluru',
    title: 'Plot Loan in Bangalore: Eligibility, LTV and Documents',
    description:
      'How plot loans work in Bangalore: what lenders check, how much they finance, the documents they ask for, and why construction later needs a separate loan.',
    h1: 'Plot loans, without the brochure.',
    answer:
      'A plot loan in Bangalore is a secured loan against land, offered only for layouts a lender is willing to accept. Lenders typically finance a smaller share of the value than a home loan, over a shorter tenure, and they check the title, the layout sanction and the RERA registration before sanction. A plot loan does not pay for construction afterwards — that is a separate construction or composite loan, applied for once the plan is approved.',
    updated: '2026-11-26',
    keywords: [
      'plot loan in bangalore',
      'plot loan eligibility',
      'plot loan interest rate bangalore',
      'loan for buying plot',
      'plot loan documents',
      'plot plus construction loan bangalore'
    ],
    sections: [
      {
        h2: 'What the lender is actually assessing',
        paragraphs: [
          'Three things decide a plot loan: the borrower, the land, and the exit. The borrower is income and credit history. The land is title, approval and access — lenders publish lists of approved layouts and reject plots in unapproved or agriculturally classified land. The exit is how the lender could recover the money if you default, which is why an approachable, sanctioned layout in a recognised corridor is financed more readily than an isolated parcel.',
          'Because of that third point, plot loans commonly finance a lower share of the property value than a home loan, and over a shorter tenure. Ask the lender for the current figures for your case rather than relying on a rate card.'
        ]
      },
      {
        h2: 'Documents a lender will ask for',
        bullets: [
          'KYC: identity, address and PAN.',
          'Income proof: salary slips and Form 16, or audited financials and ITR for self-employed buyers.',
          'Bank statements for the last six months.',
          'The chain of title documents, encumbrance certificate and survey sketch.',
          'The approved layout plan and the sanction from the planning authority.',
          'The RERA registration for the project or phase, where applicable.',
          'A valuation and legal opinion arranged by the lender — budget time for both.'
        ]
      },
      {
        h2: 'Plot loan versus plot-plus-construction',
        table: {
          caption: 'Two instruments, two purposes',
          head: ['', 'Plot loan', 'Plot + construction'],
          rows: [
            ['Purpose', 'Land purchase only', 'Land, then building on it'],
            ['Disbursement', 'Lump sum at registration', 'Staged, tied to construction milestones'],
            ['Tenure', 'Shorter', 'Longer, closer to a home loan'],
            ['When to apply', 'Before registration', 'Before registration, with an approved building plan']
          ]
        }
      },
      {
        h2: 'Four questions to ask before you apply',
        bullets: [
          'Is this specific layout on your approved list, and does that cover this survey number?',
          'What share of the value will you finance, and over how many years?',
          'What is the processing fee, and who pays for the valuation and legal opinion?',
          'If I build in two years, does this convert to a construction loan or do I apply again?'
        ]
      },
      {
        h2: 'Where the desk fits',
        paragraphs: [
          'The desk is not a lender and does not sanction loans. What it can do is put the document set in front of you early — deed chain, EC, survey sketch, sanction and RERA reference — so a lender’s legal check does not stall two weeks before registration. Ask for the document file for any listing before you apply.'
        ]
      }
    ],
    faqs: [
      {
        q: 'How much of a plot’s value will a bank finance?',
        a: 'Less than a home loan, in most cases, and over a shorter tenure. The exact share depends on the lender, the layout approval and your profile. Ask for the current loan-to-value for your specific plot rather than an advertised maximum.'
      },
      {
        q: 'Can I get a loan for a plot without approvals?',
        a: 'Most lenders will not finance an unapproved layout or land classified as agricultural. If a seller says a loan is easy on an unapproved plot, ask which lender has issued a sanction letter for that survey number.'
      },
      {
        q: 'Does a plot loan cover construction?',
        a: 'No. Construction needs a separate construction or composite loan, usually applied for with an approved building plan. Ask whether your lender offers a combined product before you register the plot.'
      },
      {
        q: 'Is a plot loan eligible for tax benefits?',
        a: 'Tax treatment differs from a home loan and depends on how the land is used and what is built. Confirm the current position with a tax adviser for your case; do not assume home-loan deductions apply to land alone.'
      }
    ],
    sources: [
      { label: 'Karnataka RERA', url: 'https://rera.karnataka.gov.in/' },
      { label: 'BMRDA — planning authorities', url: 'https://bmrda.karnataka.gov.in/8/local-planning-areas/en' }
    ],
    related: [
      { label: 'How to verify a plot before you pay', href: '/guides/verify-plot-approvals-bangalore' },
      { label: 'Plot or apartment in Bangalore?', href: '/guides/plot-vs-apartment-bangalore' },
      { label: 'Premium plots in Bangalore', href: '/premium-plots-in-bangalore' }
    ]
  },
  {
    slug: 'best-areas-to-invest-bangalore',
    listingSlugs: ['sun-valley-plots-chikkaballapura-d1','triton-aero-gardens-devanahalli-airport','oriaiyan-signature-plotted-villa-plots-bengaluru'],
    shortTitle: 'Where to buy land',
    imageProject: 'triton-aero-gardens-devanahalli-airport',
    title: 'Best Areas to Buy a Plot in Bangalore (2026 Guide)',
    description:
      'Four Bengaluru plot corridors compared on price band, access, employment drivers and what each one asks of a buyer in 2026.',
    h1: 'Where to buy land in Bangalore.',
    answer:
      'In 2026 the desk’s plotted register sits in four places: the airport belt around Devanahalli and Chikkajala, Chikkaballapura and the Nandi Hills foothills, the south industrial belt around APC Circle and Jigani, and Kanakapura Road and Bannerghatta Road. Prices run from about ₹35 lakh in Chikkaballapura to ₹2 crore for the largest estate plots. Each corridor asks something different of a buyer — distance, patience, or a higher entry price.',
    updated: '2026-11-26',
    keywords: [
      'best areas to invest in bangalore 2026',
      'best place to buy plots in bangalore for investment',
      'which area is best for plot investment bangalore',
      'upcoming areas in bangalore for investment',
      'bangalore plot investment corridors'
    ],
    sections: [
      {
        h2: 'The four corridors at a glance',
        table: {
          caption: 'Plot corridors in the desk register',
          head: ['Corridor', 'Price band', 'What drives it', 'What it asks of you'],
          rows: [
            ['Chikkaballapura & Nandi Hills', '₹35 lakh – ₹2 crore', 'Airport access, tourism belt, STRR northern arc', 'Distance; a five-year horizon'],
            ['Airport belt: Devanahalli & Chikkajala', '₹52 lakh – ₹1.9 crore', 'Airport, KIADB aerospace SEZ, expressway', 'Buying an apartment rather than land'],
            ['South: Jigani & APC Circle', '₹50 lakh – ₹2 crore', 'Electronic City, NICE Road, industrial employment', 'Industrial-adjacent living; verify access roads'],
            ['Kanakapura & Bannerghatta Road', '₹50 lakh – ₹2 crore', 'Metro, expressway, established residential base', 'A higher entry price for city access']
          ]
        }
      },
      {
        h2: 'North: the airport belt',
        paragraphs: [
          'The airport corridor is priced against employment rather than scenery: airport operations, the KIADB aerospace and hardware SEZ, and the business park around Devanahalli. Rental demand is real here, which is why the desk’s airport-corridor listings are apartments rather than open plots.',
          'The risk is brochure distance. Five minutes to a terminal is a claim about a specific gate and a specific road; check it at peak hour before paying for proximity.'
        ]
      },
      {
        h2: 'North-west: Chikkaballapura and the Nandi foothills',
        paragraphs: [
          'This is where land is still land: plots from ₹35 lakh, a district town with its own hospitals and colleges, and the Nandi Hills ridge as the backdrop. Layouts here are typically sanctioned for the local planning area with RERA registration per phase.',
          'The honest trade-off is time. This is not a daily commute to Whitefield or Electronic City, and the desk says so before a site visit. It suits a weekend home, a long-horizon land position, or a buyer who wants to build later at a lower land cost.'
        ]
      },
      {
        h2: 'South: Jigani, APC Circle and Kanakapura Road',
        paragraphs: [
          'The south belt is the most urban of the plotted corridors: employment at Electronic City and the Jigani industrial area, and road access through NICE Road. Prices reflect city reach rather than views, and layouts vary from industrial-adjacent plots to villa enclaves off Bannerghatta Road.',
          'Ask about the approach road and the drainage before the price. Industrial belts can have heavy vehicles and patchy last-mile access that a masterplan drawing does not show.'
        ]
      },
      {
        h2: 'How to choose between them',
        bullets: [
          'Write down the horizon: under three years, a plot rarely beats a rented flat; over seven, land in a funded corridor usually deserves a look.',
          'Check what is already built, not what is proposed. A ring-road interchange under construction is different from one in a chief minister’s speech.',
          'Price the holding cost: tax, upkeep, and the years before you build.',
          'Visit at 9am and again at 7pm. Access and noise change with the hour.',
          'Read the papers before you fall for the view — the approvals checklist is on this site.'
        ]
      },
      {
        h2: 'What this page is not',
        paragraphs: [
          'Growth percentages published elsewhere on this site are the desk’s corridor commentary, not audited returns, and they are not a forecast. Nobody can promise a ranking of areas that will hold for your holding period. What can be checked is access, approval, title and what has been delivered.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Which area in Bangalore is best for plot investment in 2026?',
        a: 'There is no single answer: the airport belt suits a buyer who wants rental-adjacent apartments, Chikkaballapura suits a long-horizon land buyer at a lower entry price, and the south belt suits buyers who want city access. Match the corridor to your horizon and holding cost, then check the specific layout.'
      },
      {
        q: 'Are plots in Chikkaballapura worth buying?',
        a: 'They are the lowest entry point in the desk register, from about ₹35 lakh, with airport access and the Nandi Hills belt as the drivers. The trade-off is distance and a longer horizon. Check the layout sanction, the access road and the khata before deciding.'
      },
      {
        q: 'Is Devanahalli good for plots or flats?',
        a: 'The desk’s current airport-corridor listings are apartments, because rental demand comes from airport and aerospace employment. If you want land in the wider northern belt, the Chikkaballapura page is the closer match.'
      },
      {
        q: 'How much do plots cost in Bangalore right now?',
        a: 'In this register, plotted developments run from ₹35 lakh in Chikkaballapura to ₹2 crore for 4,499 sq.ft estate plots, with villa plots and villas above that. These are developer or seller quotes for current inventory, and they move with it.'
      }
    ],
    sources: [
      { label: 'BMRDA — local planning authorities', url: 'https://bmrda.karnataka.gov.in/8/local-planning-areas/en' },
      { label: 'Karnataka RERA', url: 'https://rera.karnataka.gov.in/' }
    ],
    related: [
      { label: 'Plots in Chikkaballapura', href: '/plots-in-chikkaballapura' },
      { label: 'Property near Bangalore airport', href: '/property-near-bangalore-airport' },
      { label: 'Plots in south Bangalore', href: '/plots-in-south-bangalore' }
    ]
  },
  {
    slug: 'buy-property-in-dubai-from-india',
    listingSlugs: ['dubai-marina-sunset-residences'],
    shortTitle: 'Dubai from India',
    imageProject: 'dubai-marina-sunset-residences',
    title: 'Buying Dubai Property From India: Costs and Rules',
    description:
      'What an Indian buyer should check before buying in Dubai: freehold areas, the DLD transfer fee, the LRS limit, Golden Visa thresholds and the INR exposure.',
    h1: 'Dubai property, from India.',
    answer:
      'An Indian resident can buy freehold property in designated Dubai areas. The purchase is usually paid in dirhams and funded through the Liberalised Remittance Scheme, which caps outward remittance per person per financial year — confirm the current limit with your bank. Budget the Dubai Land Department transfer fee, agency commission and service charges on top of the price, and remember that a ten-year Golden Visa is tied to a property-value threshold, not to any property purchase.',
    updated: '2026-11-26',
    keywords: [
      'buy property in dubai from india',
      'dubai property investment for indians',
      'can indians buy property in dubai',
      'dubai property price in inr',
      'dubai golden visa property investment',
      'lrs limit dubai property'
    ],
    sections: [
      {
        h2: 'Can an Indian resident buy in Dubai?',
        paragraphs: [
          'Yes, in areas designated as freehold for foreign buyers. Dubai Land Department publishes the freehold designation, and the developer’s project should sit inside it. Outside those areas, foreign buyers generally acquire leasehold or an interest through a UAE company, which changes the cost and the exit.',
          'Confirm the designation for the specific unit, not for the tower next door. Ask for the title deed type and the DLD registration.'
        ]
      },
      {
        h2: 'The money side, from India',
        paragraphs: [
          'Outward remittance for property is made under the Liberalised Remittance Scheme, which is capped per person per financial year. The cap is set by the Reserve Bank of India and can change, so check the current figure with your bank before you sign anything. Payments through informal channels are a compliance problem, not a shortcut.',
          'A mortgage on a Dubai property from an Indian lender is uncommon; UAE banks lend to non-residents on selected projects. Most Indian buyers fund in cash or through a UAE mortgage, so plan the source of funds before the reservation.'
        ]
      },
      {
        h2: 'Costs on top of the price',
        table: {
          caption: 'Costs commonly quoted in a Dubai purchase',
          head: ['Item', 'Typical basis'],
          rows: [
            ['DLD transfer fee', 'A percentage of the price, paid on transfer'],
            ['Agency commission', 'A percentage of the price where an agent is involved'],
            ['Developer administration fee', 'Fixed or percentage, per developer'],
            ['Service charges', 'Annual, per square foot, set by the building'],
            ['NOC and trustee fees', 'Fixed, at transfer'],
            ['Currency conversion', 'Bank spread on INR to AED']
          ]
        }
      },
      {
        h2: 'The Golden Visa question',
        paragraphs: [
          'The ten-year Golden Visa is linked to a property investment threshold set by UAE authorities. It is a residency route, not a return, and the threshold and conditions change. Ask the developer or a UAE-licensed adviser for the current requirement in writing rather than accepting a brochure line.',
          'A visa does not make a yield. Rental returns depend on the building, the service charge and the letting market in that specific tower.'
        ]
      },
      {
        h2: 'Currency and exit',
        paragraphs: [
          'Your return is in dirhams against a rupee cost base. A flat that holds its price in AED can still lose money in INR if the rupee strengthens, and the reverse is also true. Model the purchase and the exit in both currencies.',
          'Exit costs mirror entry: agency commission, DLD fees where applicable and any mortgage settlement. Ask what the resale market in that building actually clears at, not what the launch price was.'
        ]
      },
      {
        h2: 'What the desk will and will not do',
        paragraphs: [
          'The desk can show the unit, explain the cost stack, and put you in front of the developer’s documents. It cannot give tax or FEMA advice, and it should not be your only check on a cross-border purchase. Use a qualified adviser for the remittance and tax position.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Can Indians buy property in Dubai without a visa?',
        a: 'Property purchase does not require prior residency in Dubai, but it does require compliant funding from India and a freehold-designated unit. The Golden Visa is a separate residency route tied to an investment threshold; confirm the current rules before assuming eligibility.'
      },
      {
        q: 'How much is the Dubai Land Department fee?',
        a: 'DLD charges a transfer fee calculated as a percentage of the property price, with additional trustee and administration charges. Ask the developer or agent for the full cost sheet in writing, including agency commission, before you reserve.'
      },
      {
        q: 'How much can I remit from India for a Dubai property?',
        a: 'Outward remittance for property falls under the Liberalised Remittance Scheme, which has a per-person, per-financial-year cap set by the RBI. The figure changes, so confirm it with your bank for the current year and keep every remittance documented.'
      },
      {
        q: 'Is a Dubai property a good investment for an Indian buyer?',
        a: 'It can be, but the case rests on the specific building, its service charges, the letting market and the rupee–dirham rate, not on the city’s reputation. Ask for actual rents achieved in that tower and model the exit costs before deciding.'
      }
    ],
    sources: [
      { label: 'Dubai Land Department', url: 'https://dld.gov.ae/' },
      { label: 'Reserve Bank of India', url: 'https://www.rbi.org.in/' }
    ],
    related: [
      { label: 'Dubai Marina waterfront residences', href: '/projects/dubai-marina-sunset-residences' },
      { label: 'Project register', href: '/projects' },
      { label: 'Property Q&A', href: '/qna' }
    ]
  }
];

export const findGuide = (slug) => GUIDES.find((guide) => guide.slug === slug) || null;
