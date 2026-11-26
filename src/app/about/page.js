import React from 'react';
import Link from 'next/link';
import LandingShell from '../../components/LandingShell';
import { AnswerBlock, Breadcrumbs, FaqList, ListingGrid } from '../../components/seo/SeoBlocks';
import { findProject, projectImage, projectsBySlug, SITE_URL, faqSchema, organisationId, whatsappLink } from '../../lib/seo';

const PAGE_URL = `${SITE_URL}/about`;

export const metadata = {
  title: { absolute: 'About Setty Relators | Bengaluru Property Advisory' },
  description:
    'An independent Bengaluru property desk and authorised channel partner. How listings are checked, how the desk is paid, and the corridors and developers it covers.',
  keywords: [
    'setty relators',
    'property advisory bengaluru',
    'authorised channel partner bangalore',
    'zero brokerage plots bangalore',
    'independent real estate advisor bengaluru'
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'About Setty Relators | Bengaluru Property Advisory',
    description:
      'How the register is checked, how the desk is paid, and the developers and corridors covered in Bengaluru and Dubai.',
    url: PAGE_URL,
    siteName: 'Setty Relators',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: 'Setty Relators' }]
  }
};

const FAQS = [
  {
    q: 'What is Setty Relators?',
    a: 'Setty Relators is an independent real estate advisory and authorised developer channel partner working in Bengaluru and Dubai. It keeps a register of plots, villas and apartments, checks the documents behind each listing, and accompanies buyers through a site visit, price confirmation and registration.'
  },
  {
    q: 'How is the desk paid if buyers pay no brokerage?',
    a: 'The desk is compensated by the developer whose project is being sold, in line with its channel-partner agreement. Buyers pay no brokerage for listings in the register. Statutory costs — stamp duty, registration, and any developer charges — are the buyer’s and should be given to you in writing.'
  },
  {
    q: 'What does the desk check before listing a project?',
    a: 'The chain of title and encumbrance certificate, the survey numbers against the approved layout, the sanction from the authority with jurisdiction, the RERA registration for the phase on sale, and the khata or applicable revenue record. Where a listing is a resale, the unit’s own documents are the seller’s responsibility and are flagged as such.'
  },
  {
    q: 'Which areas does the desk cover?',
    a: 'In Bengaluru: the airport belt around Devanahalli and Chikkajala, Chikkaballapura and the Nandi Hills foothills, the south industrial belt around APC Circle and Jigani, Kanakapura Road and Bannerghatta Road. Overseas, Dubai Marina and Harbour.'
  },
  {
    q: 'Does the desk give legal or investment advice?',
    a: 'No. The desk explains procedure, documents and price bands, and tells you what to verify. Title opinions, tax positions, loan eligibility and FEMA questions belong with your own lawyer, lender or adviser. Nothing on this site is a guarantee of returns.'
  }
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: 'About Setty Relators',
      description:
        'An independent Bengaluru property advisory and authorised channel partner, and how it vets listings.',
      about: { '@id': organisationId },
      mainEntity: { '@id': organisationId }
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'About', item: PAGE_URL }
      ]
    },
    faqSchema(FAQS)
  ]
};

const STEPS = [
  {
    title: 'The papers come first',
    body: 'A listing is written into the register only after the deed chain, encumbrance certificate, survey sketch, layout sanction and RERA reference have been read and matched.'
  },
  {
    title: 'Then the land',
    body: 'The desk walks the layout: approach road, drainage, delivered infrastructure, and the plot in relation to the plan rather than the rendering.'
  },
  {
    title: 'Then the price',
    body: 'You get the developer or seller quote as it stands, the sizes available, and the charges that follow — not a discounted headline that changes at booking.'
  },
  {
    title: 'Then the visit',
    body: 'Site visits are by appointment and chauffeured where arranged. The desk joins, answers what it can, and says plainly when a question belongs to a lawyer or a lender.'
  }
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingShell activePage="about">
        <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'About' }]} />

        <section className="shell pb-10 pt-6 lg:pt-8" data-reveal>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-6">
              <h1 className="display-xl max-w-[18ch] text-[#FBFBFD]">The desk behind the register.</h1>
              <p className="mt-6 max-w-[46ch] text-[19px] leading-relaxed text-[var(--text-soft)]">
                An independent advisory in Bengaluru, working as an authorised channel partner for
                the developers it lists — and paid by them, not by you.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
                <a
                  href={whatsappLink('Hello Setty Relators. I would like to speak to the desk about a property.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                >
                  Message the desk
                </a>
                <Link
                  href="/projects"
                  className="inline-flex min-h-11 items-center text-[17px] text-[#FBFBFD] underline decoration-[#D4AF37] decoration-2 underline-offset-[6px] hover:text-[#D4AF37]"
                >
                  See the register
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6">
              <AnswerBlock>
                Setty Relators keeps a short register of plots, villa plots, villas and apartments
                across Bengaluru and Dubai. Every listing is checked for title, sanction, RERA
                registration and khata before it appears. Buyers pay no brokerage; the desk is
                compensated by the developer. It is not a law firm or a lender, and it does not
                promise returns.
              </AnswerBlock>
            </div>
          </div>
        </section>

        <section className="shell pb-4" data-reveal>
          <img
            src={projectImage(findProject('oriaiyan-signature-plotted-villa-plots-bengaluru'), 1600)}
            alt="Plotted development in the Setty Relators register, Bengaluru"
            width={1600}
            height={686}
            className="aspect-[21/9] w-full object-cover"
          />
          <p className="mt-3 max-w-[70ch] text-[14px] leading-relaxed text-[var(--text-soft)]">
            A plotted layout in the register. Images are representational or supplied by the
            developer or seller.
          </p>
        </section>

        <section className="page-section bg-[var(--sheet)] text-[var(--sheet-ink)]" data-reveal>
          <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="display-lg text-[var(--sheet-ink)]">How the desk works.</h2>
              <p className="mt-5 max-w-[40ch] text-[17px] leading-relaxed text-[var(--sheet-soft)]">
                Four steps, in this order, before a listing reaches you. If a step fails, the
                listing does not appear.
              </p>
            </div>
            <ol className="space-y-8 lg:col-span-7" data-reveal>
              {STEPS.map((step) => (
                <li key={step.title}>
                  <h3 className="font-heading text-[1.35rem] leading-snug text-[var(--sheet-ink)]">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[56ch] text-[16px] leading-relaxed text-[var(--sheet-soft)]">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="page-section" data-reveal>
          <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <h2 className="display-lg text-white">What the desk will not do.</h2>
              <ul className="mt-6 space-y-3 text-[17px] leading-relaxed text-[var(--text-soft)]">
                <li>List a layout whose approval or title cannot be shown.</li>
                <li>Quote a price as fixed when the developer has not confirmed it in writing.</li>
                <li>Call a seller’s claim a verified fact on a resale listing.</li>
                <li>Give legal, tax or lending advice in place of your own adviser.</li>
                <li>Promise appreciation, rental yield or a visa outcome.</li>
              </ul>
            </div>
            <div className="lg:col-span-6">
              <h2 className="display-lg text-white">Where it operates.</h2>
              <ul className="mt-6 space-y-3 text-[17px] leading-relaxed text-[var(--text-soft)]">
                <li>Airport belt: Devanahalli and Chikkajala.</li>
                <li>Chikkaballapura and the Nandi Hills foothills.</li>
                <li>South Bengaluru: APC Circle, Jigani, Kanakapura and Bannerghatta Road.</li>
                <li>Dubai Marina and Harbour for overseas buyers.</li>
              </ul>
              <p className="mt-6 text-[16px] leading-relaxed text-[var(--text-soft)]">
                Developers represented include Oriaiyan Group, D1 Projects, Triton Groups, Vinra
                Group and a seller-listed Puravankara resale. Ask for the current written
                authorisation for any project before you book.
              </p>
            </div>
          </div>
        </section>

        <ListingGrid
          projects={projectsBySlug([
            'oriaiyan-signature-plotted-villa-plots-bengaluru',
            'triton-nandi-villas-chikkaballapura-nandi-hills',
            'dubai-marina-sunset-residences'
          ])}
          heading="A short list, held by one desk."
          intro="Three of the entries the desk carries across Bengaluru and Dubai. The full register has the rest, with approvals and RERA references."
        />

        <section className="section-navy on-ink page-section" data-reveal>
          <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <FaqList faqs={FAQS} heading="About the desk." />
            </div>
            <aside className="lg:col-span-5">
              <div className="sheet px-6 py-7 sm:px-8">
                <h2 className="font-heading text-[1.6rem] leading-snug text-[var(--sheet-ink)]">
                  The desk
                </h2>
                <address className="mt-4 space-y-2 text-[16px] not-italic leading-relaxed text-[var(--sheet-soft)]">
                  <p>
                    Level 5, Concorde Towers, UB City,
                    <br />
                    Vittal Mallya Road &amp; Indiranagar,
                    <br />
                    Bengaluru 560001, Karnataka, India
                  </p>
                  <p>
                    <a href="tel:+918431909508" className="text-[var(--sheet-ink)] underline decoration-[var(--gold-on-light)] decoration-2 underline-offset-4">
                      +91 84319 09508
                    </a>
                  </p>
                  <p>
                    <a href="mailto:advisory@settyrelators.com" className="text-[var(--sheet-ink)] underline decoration-[var(--gold-on-light)] decoration-2 underline-offset-4">
                      advisory@settyrelators.com
                    </a>
                  </p>
                  <p>Site visits by appointment.</p>
                </address>
                <ul className="mt-6 space-y-2 text-[16px]">
                  <li>
                    <Link href="/guides/verify-plot-approvals-bangalore" className="text-[var(--sheet-ink)] underline decoration-[var(--gold-on-light)] decoration-2 underline-offset-4">
                      How a plot is verified
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects" className="text-[var(--sheet-ink)] underline decoration-[var(--gold-on-light)] decoration-2 underline-offset-4">
                      Every project in the register
                    </Link>
                  </li>
                  <li>
                    <Link href="/?page=contact" className="text-[var(--sheet-ink)] underline decoration-[var(--gold-on-light)] decoration-2 underline-offset-4">
                      Book a site visit
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </section>
      </LandingShell>
    </>
  );
}
