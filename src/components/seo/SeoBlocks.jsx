import React from 'react';
import Link from 'next/link';
import { projectImage, projectPath } from '../../lib/seo';

export function AnswerBlock({ label = 'In short', children }) {
  return (
    <div className="sheet px-6 py-7 sm:px-9 sm:py-9">
      <p className="label label-gold">{label}</p>
      <p className="mt-4 max-w-[72ch] text-[18px] leading-relaxed text-[var(--sheet-ink)] sm:text-[19px]">
        {children}
      </p>
    </div>
  );
}

export function Breadcrumbs({ items, tone = 'dark' }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`shell flex flex-wrap items-center gap-2 py-4 text-[14px] ${
        tone === 'dark' ? 'text-[var(--text-soft)]' : 'text-[var(--sheet-soft)]'
      }`}
    >
      {items.map((item, index) => (
        <span key={item.name} className="flex items-center gap-2">
          {index > 0 && <span aria-hidden="true">/</span>}
          {item.path && index < items.length - 1 ? (
            <Link href={item.path} className="hover:underline">
              {item.name}
            </Link>
          ) : (
            <span aria-current="page">{item.name}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

export function FaqList({ faqs, heading = 'Questions buyers ask.' }) {
  return (
    <div>
      <h2 className="display-lg text-white">{heading}</h2>
      <div className="mt-8">
        {faqs.map((faq) => (
          <details key={faq.q} className="group py-5">
            <summary className="flex min-h-11 cursor-pointer list-none items-start justify-between gap-6 text-[18px] leading-snug text-white transition-colors hover:text-[#E9C349]">
              <span>{faq.q}</span>
              <span
                aria-hidden="true"
                className="mt-0.5 shrink-0 text-[#E9C349] transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 max-w-[66ch] text-[17px] leading-relaxed text-white/70">{faq.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

export function ListingCard({ project }) {
  return (
    <Link
      href={projectPath(project.slug)}
      className="group relative block overflow-hidden bg-[#070F1B]"
    >
      <img
        src={projectImage(project, 900)}
        alt={`${project.title} — ${project.location}`}
        width={900}
        height={675}
        loading="lazy"
        decoding="async"
        className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-x-0 bottom-0 bg-[#070F1B]/92 px-5 py-4">
        <p className="font-heading text-[1.2rem] leading-snug text-white">{project.title}</p>
        <p className="mt-1 text-[14px] text-white/70">{project.location}</p>
        <p className="mt-2 font-heading text-[1.1rem] text-[#D4AF37] figures">{project.priceRange}</p>
      </div>
    </Link>
  );
}

export function ListingGrid({ projects, heading, intro }) {
  if (!projects.length) return null;
  return (
    <section className="page-section" data-reveal>
      <div className="shell">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 className="display-lg text-white lg:col-span-7">{heading}</h2>
          {intro && (
            <p className="max-w-[44ch] text-[17px] leading-relaxed text-[var(--text-soft)] lg:col-span-5">
              {intro}
            </p>
          )}
        </div>
        <ul className={`mt-10 grid gap-5 ${projects.length === 1 ? '' : 'sm:grid-cols-2'}`}>
          {projects.map((project) => (
            <li key={project.id} data-reveal>
              <ListingCard project={project} />
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[15px] leading-relaxed text-[var(--text-soft)]">
          Images are representational or supplied by the developer or seller. Confirm current
          pricing, availability and specifications in writing before booking.
        </p>
      </div>
    </section>
  );
}

// Used inside the white sheet sections, so it is set in ink rather than white.
export function FactList({ rows, caption }) {
  return (
    <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
      {rows.map(([term, value]) => (
        <div key={term}>
          <dt className="text-[15px] text-[var(--sheet-soft)]">{term}</dt>
          <dd className="mt-1 text-[17px] leading-relaxed text-[var(--sheet-ink)]">{value}</dd>
        </div>
      ))}
      <span className="sr-only">{caption}</span>
    </dl>
  );
}
