'use client';

import React from 'react';
import { ArrowLeft } from 'lucide-react';

function LegalShell({ title, updated, onBack, children }) {
  return (
    <div className="shell page-section hero-settle max-w-[860px] pt-12 lg:pt-16">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex min-h-11 items-center gap-2 text-[14px] text-[#FBFBFD] underline decoration-[#D4AF37] decoration-2 underline-offset-4 hover:text-[#D4AF37]"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Home
      </button>

      <header className="mt-8">
        <h1 className="display-xl max-w-[24ch] text-[#FBFBFD]">{title}</h1>
        <p className="mt-3 text-[15px] text-[var(--text-soft)]">{updated}</p>
      </header>

      <div className="mt-10 space-y-6">{children}</div>
    </div>
  );
}

function Heading({ children }) {
  return <h2 className="mt-10 font-heading text-[1.5rem] text-[#FBFBFD] first:mt-0">{children}</h2>;
}

function Body({ children }) {
  return <p className="max-w-[68ch] text-[19px] leading-[1.75] text-[#FBFBFD]">{children}</p>;
}

export function PrivacyPolicyPage({ setActivePage }) {
  return (
    <LegalShell title="Privacy Policy" updated="Last updated October 2026" onBack={() => setActivePage('home')}>
      <Body>
        Setty Relators (“we”, “our”, or “us”) respects your privacy and is committed to protecting the
        personal data you share with us through our website.
      </Body>

      <Heading>1. Information we collect</Heading>
      <Body>
        We collect personal details such as your name, phone number, email address, and property
        preferences when you fill out site visit forms, request brochures, or contact us via WhatsApp.
      </Body>

      <Heading>2. Use of information</Heading>
      <Body>
        Your information is strictly used to schedule VIP site visits, dispatch cab pickup details,
        share developer price sheets, and facilitate property consultations. We do not sell your
        personal information to third parties.
      </Body>

      <Heading>3. Contact us</Heading>
      <Body>
        For privacy inquiries, contact us at +91 84319 09508 or email advisory@settyrelators.com.
      </Body>
    </LegalShell>
  );
}

export function TermsPage({ setActivePage }) {
  return (
    <LegalShell title="Terms & Conditions" updated="Last updated October 2026" onBack={() => setActivePage('home')}>
      <Body>
        By accessing or using the Setty Relators platform, you agree to comply with and be bound by
        the following Terms &amp; Conditions.
      </Body>

      <Heading>1. Channel partner services</Heading>
      <Body>
        Setty Relators operates as an authorized independent real estate consultancy and Channel
        Partner for developers in Bengaluru and Dubai. Services to buyers (site visit assistance,
        project comparison, consultation) are provided free of brokerage.
      </Body>

      <Heading>2. Accuracy of information</Heading>
      <Body>
        While we strive for accuracy, property dimensions, pricing, availability, and RERA approval
        numbers are subject to verification directly with the respective developers.
      </Body>
    </LegalShell>
  );
}

export function DisclaimerPage({ setActivePage }) {
  return (
    <LegalShell
      title="Channel Partner & RERA Disclaimer"
      updated="Mandatory disclosure statement"
      onBack={() => setActivePage('home')}
    >
      <div className="section-navy on-ink px-6 py-8 sm:px-9">
        <h2 className="font-heading text-[1.25rem] text-[#E9C349]">
          Independent consultancy &amp; channel partner disclosure
        </h2>
        <p className="mt-3 max-w-[62ch] text-[19px] leading-relaxed text-white/85">
          “We are an independent real estate consultancy working with multiple reputed developers as
          Channel Partners. We help buyers compare projects, arrange site visits and connect directly
          with developers.”
        </p>
      </div>

      <Body>
        All project logos, brand names, and trademarks belong to their respective developers (PGR
        Buildtech, Vinra Group, Artivea Studio, Emaar Properties, Prestige Group, Sobha Developers).
        Official allotment letters, registered sale agreements, and receipts are issued directly by
        the respective project developers.
      </Body>
    </LegalShell>
  );
}
