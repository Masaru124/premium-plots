# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: growth-focused property investors evaluating Bengaluru plotted
developments and Dubai yield assets — often comparing corridors, entry price and
projected appreciation before they will speak to anyone. Many are buying
remotely and want current availability and pricing confirmed by a person.

Secondary: Bengaluru end-users buying a plot, villa or apartment to build or
live in, who arrive through project-specific searches and want to book a site
visit.

## Product Purpose

Lakshie Real Estate is an independent real estate consultancy and authorised
developer channel partner covering Bengaluru and Dubai. The site exists to turn
property research into a conversation with an advisor: it publishes verified
project detail, corridor comparisons and pricing context, then routes the buyer
to a booked site visit, a WhatsApp thread or a call.

Success = a booked site visit or a direct call/WhatsApp conversation with an
advisor. Leads are worked personally; browsing depth is not the goal.

## Positioning

Channel-partner access rather than a listing portal: the buyer gets direct
developer pricing with 0% brokerage to buyers, complimentary VIP site visits
(including cab pickup), and a single advisor across plotted developments, luxury
villas, high-rise apartments and Dubai waterfront assets. The claim a competing
portal could not truthfully copy is the combination of multi-developer
comparison, no buyer-side brokerage, and hands-on visit logistics.

## Operating Context

- Buyers evaluate by corridor (Airport/Chikkajala, Chikkaballapura & Nandi Hills,
  East Kothanur/Hoskote, South Bannerghatta/Kanakapura, APC/Jigani, Tumkur/Kolar)
  and by developer group (Oriaiyan, Tripon, Vinra, D1/Sun Valley, Puravankara).
- Site visits are the main conversion ritual: the buyer picks a project, date,
  time and optional cab pickup, and an advisor confirms.
- Enquiries are also taken by phone and WhatsApp on +91 84319 09508.
- Enquiries are reviewed by the team in an in-app admin dashboard
  (`/admin`, leads table), not by email.
- The team also sells turnkey interior design as a follow-on service.
- Content is English, INR-first with AED for Dubai, and aimed at buyers in India
  and overseas.

## Capabilities and Constraints

Confirmed capabilities (implemented in `src/`):

- Project catalogue with corridor/property-type filtering, project detail pages,
  plot masterplan viewer, interactive map, gallery and RERA/approval fields.
- ROI calculator, property matchmaker / Q&A flow, market guides blog.
- Site-visit booking modal with cab pickup, saved through `/api/leads` into
  Postgres; admin dashboard reads and updates the same leads.
- Legal pages (privacy, terms, disclaimer), sitemap, RealEstateAgent JSON-LD,
  Google site verification.
- Stack is fixed by the existing codebase: Next.js 16 App Router + React 19,
  Tailwind CSS 4, `pg` against a Neon/Postgres database (`projects` and `leads`
  tables, auto-created and seeded on first use), deployed on Vercel, remote
  imagery from Unsplash plus local WhatsApp photos. No CMS: project data lives
  in `src/data/plotsData.js` and is synced to the database.
- Routing is hybrid: real routes for `/plots-in-bangalore`,
  `/luxury-villas-bangalore`, `/purva-sounds-of-water`, `/matchmaker`, `/qna`,
  `/property-finder`, `/admin`, with legacy paths redirecting in
  `next.config.mjs`; the remaining views are switched client-side by
  `?page=` / hash.

Constraints and undecided facts:

- Prices, corridor YoY growth figures, Dubai rental yields and Golden Visa
  eligibility are **indicative**. They must stay visibly labelled as
  seller-quoted / to-be-verified and must never be tightened into guarantees.
  Existing hedges such as "Seller-quoted ₹9.0 Cr • verify current price" are
  intentional and must survive rewrites.
- Availability ("available plots"), RERA IDs and approval types are per-project
  fields that the team must confirm before publishing changes.
- The project is a single business site; there is no plan recorded for buyer
  accounts or saved shortlists.
- The portfolio console (`/admin`) is protected by a server-side session. It
  requires `ADMIN_PASSWORD` in the environment; without it the console and the
  authenticated APIs fail closed. Enquiries (name, phone, email, pickup address)
  are only returned to an authenticated console.

## Brand Commitments

- Name: Lakshie Real Estate (also "Lakshie Real Estate Advisory"); wordmark
  LAKSHIE REAL ESTATE with the "Bengaluru · Dubai" locality line.
- Voice: advisory and reassuring, explicitly transparent about being an
  independent consultancy and channel partner, with a standing disclaimer that
  imagery, plans and prices are representational and that bookings and payments
  happen directly with the developer.
- Standing commitments repeated across surfaces: 0% brokerage to buyers,
  verified channel partner status, complimentary/VIP site visits.
- Incumbent identity to preserve unless a redesign is explicitly requested:
  deep navy (#0B1F3A) with gold (#C8A34D), light stone surfaces (#F8F8F5), a
  compass crest mark, and serif-leaning display headings.

## Evidence on Hand

- Real business contact facts: hotline +91 84319 09508, advisory email
  `advisory@premiumpropertiesbengaluru.com`, address Level 5, Concorde Towers,
  UB City, Vittal Mallya Road & Indiranagar, Bengaluru 560001.
- Real project facts per development in `src/data/plotsData.js` (project names,
  developer groups, corridors, plot dimensions, approval types, landmarks).
- Site photography: unlabelled WhatsApp images in the repository root; the
  listing imagery otherwise comes from Unsplash stock URLs.
- Absent — future work must not fabricate: named testimonials or customer
  stories, audited ROI/return data, transaction records, press coverage, a
  brokerage registration number, or verified photos of every project. The leads
  seeded in `plotsData.js` and `src/lib/db.js` are demo rows, not real customers.

## Product Principles

1. **A conversation beats a form.** Every surface should make booking a visit or
   opening WhatsApp the obvious next step; depth of browsing is not the measure.
2. **Numbers carry their caveat.** Prices, yields and growth projections are
   presented with their status (quoted, indicative, to verify) or not at all.
3. **Compare, then commit.** Corridor and developer comparison is the core
   research job; keep project facts comparable rather than decorative.
4. **The advisor is the product.** Transparency about being a channel partner,
   plus no buyer brokerage, is the trust mechanism; never obscure it.
5. **One clear identity, consistently.** Navy, gold and the advisory voice stay
   coherent across landing pages, listings and utility screens.

## Accessibility & Inclusion

- The site targets WCAG 2.2 AA: body and placeholder text at least 4.5:1, large
  text at least 3:1, and brand gold never used as text on the ivory ground
  (the deeper `#7A5C10` is the text-safe gold).
- Every interactive control is reachable and operable by keyboard, with a
  visible focus ring, and every target is at least 44×44 CSS pixels.
- The site visit flow is a modal dialog with focus trapping, Escape to close and
  focus restoration, because much of the audience arrives on a phone and some
  use screen readers or switch access.
- Motion is decorative only and is removed under `prefers-reduced-motion`
  without removing state feedback.
- Prices, projections and yields are labelled with their status so a buyer using
  a screen reader, or skimming, meets the caveat with the number.
