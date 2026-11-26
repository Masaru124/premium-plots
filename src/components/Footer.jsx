'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer({ setActivePage }) {
  const whatsappNumber = '918431909508';
  const displayPhone = '+91 84319 09508';

  const portfolio = [
    { label: 'Premium plots in Bangalore', href: '/premium-plots-in-bangalore' },
    { label: 'Open plots and villa plots', href: '/plots-in-bangalore' },
    { label: 'Plots in Chikkaballapura', href: '/plots-in-chikkaballapura' },
    { label: 'Plots in south Bangalore', href: '/plots-in-south-bangalore' },
    { label: 'Property near the airport', href: '/property-near-bangalore-airport' },
    { label: 'Purva Symphony resale', href: '/purva-sounds-of-water' },
    { label: 'Luxury villas', href: '/luxury-villas-bangalore' },
    { label: 'Apartments', href: '/?page=apartments', page: 'apartments' },
    { label: 'Dubai investments', href: '/?page=dubai', page: 'dubai' },
    { label: 'Turnkey interiors', href: '/?page=interior', page: 'interior' }
  ];

  const information = [
    { label: 'Every project', href: '/projects' },
    { label: 'Guides: approvals, loans', href: '/guides' },
    { label: 'The full register', href: '/?page=projects', page: 'projects' },
    { label: 'Property finder', href: '/?page=matchmaker', page: 'matchmaker' },
    { label: 'Market guides', href: '/?page=blog', page: 'blog' },
    { label: 'The desk', href: '/about' },
    { label: 'Contact', href: '/?page=contact', page: 'contact' }
  ];

  const legal = [
    { label: 'Privacy', href: '/?page=privacy', page: 'privacy' },
    { label: 'Terms', href: '/?page=terms', page: 'terms' },
    { label: 'Disclaimer', href: '/?page=disclaimer', page: 'disclaimer' }
  ];

  const handle = (e, page) => {
    if (!page) return;
    if (typeof window !== 'undefined' && (window.location.pathname === '/' || window.location.pathname === '')) {
      e.preventDefault();
      setActivePage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0B192C] text-white">
      <div className="shell pb-12 pt-20">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <p className="display-lg text-white">
              Setty Relators
            </p>
            <p className="mt-4 max-w-[40ch] text-[17px] leading-relaxed text-white/70">
              A private register of verified plots, villas and apartments across Bengaluru and
              Dubai, kept by an independent channel-partner desk.
            </p>

            <div className="mt-8 space-y-2 text-[17px] leading-relaxed text-white/80">
              <p>
                Level 5, Concorde Towers, UB City,
                <br />
                Vittal Mallya Road &amp; Indiranagar, Bengaluru 560001
              </p>
              <p>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Setty Relators. I would like property details and a consultation.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-[#D4AF37] decoration-2 underline-offset-4 hover:text-[#E9C349]"
                >
                  {displayPhone}
                </a>
              </p>
              <p>
                <a
                  href="mailto:advisory@settyrelators.com"
                  className="underline decoration-[#D4AF37] decoration-2 underline-offset-4 hover:text-[#E9C349]"
                >
                  advisory@settyrelators.com
                </a>
              </p>
            </div>
          </div>

          <nav aria-label="Property portfolios" className="lg:col-span-3 lg:pl-6">
            <h2 className="font-heading text-[1.5rem] text-[#E9C349]">The portfolio</h2>
            <ul className="mt-5 space-y-3 text-[17px]">
              {portfolio.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handle(e, item.page)}
                    className="inline-flex items-center gap-1.5 text-white/75 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Site information" className="lg:col-span-2">
            <h2 className="font-heading text-[1.5rem] text-[#E9C349]">Information</h2>
            <ul className="mt-5 space-y-3 text-[17px]">
              {information.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handle(e, item.page)}
                    className="text-white/75 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <h2 className="font-heading text-[1.5rem] text-[#E9C349]">Next step</h2>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Setty Relators. Please share verified masterplans and current pricing.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-11 items-center gap-2 text-[17px] text-white underline decoration-[#D4AF37] decoration-2 underline-offset-4 hover:text-[#E9C349]"
            >
              Message the desk
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <p className="mt-4 text-[16px] leading-relaxed text-white/60">
              Site visits by appointment. Zero brokerage to buyers.
            </p>
          </div>
        </div>

        <details className="group mt-16 max-w-[64ch] text-[16px] leading-relaxed text-white/60">
          <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 text-[16px] text-white/70 transition-colors hover:text-white">
            <span aria-hidden="true" className="inline-block transition-transform group-open:rotate-90">
              ›
            </span>
            Disclosure and image rights
          </summary>
          <div className="mt-3 space-y-3 pb-2">
            <p>
              Setty Relators is an independent real estate consultancy and authorised channel
              partner. We help buyers compare projects, arrange site visits and connect directly
              with developers; booking agreements, allotment terms and payments are executed
              between the buyer and the respective developer.
            </p>
            <p>
              Project images, plans, specifications and prices are representational or supplied by
              the developer or seller, and are indicative until confirmed in writing. Where a
              photograph is illustrative rather than of the specific unit, the listing says so.
            </p>
          </div>
        </details>

        <div className="mt-10 flex flex-col gap-4 text-[16px] text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Setty Relators. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legal.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handle(e, item.page)}
                  className="transition-colors hover:text-white/80"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
