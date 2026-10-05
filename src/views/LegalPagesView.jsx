'use client';

import React from 'react';
import { ShieldCheck, FileText, AlertTriangle, ArrowLeft } from 'lucide-react';

export function PrivacyPolicyPage({ setActivePage }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-6 text-[#1A1A1A]">
      <button
        onClick={() => setActivePage('home')}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-[#0B1F3A]/15 text-xs font-semibold hover:bg-[#F8F8F5] cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </button>

      <div className="border-b border-[#0B1F3A]/10 pb-4">
        <h1 className="text-3xl font-extrabold text-[#0B1F3A] font-heading">Privacy Policy</h1>
        <p className="text-xs text-[#555555] mt-1">Last Updated: October 2026</p>
      </div>

      <div className="space-y-4 text-xs leading-relaxed text-[#555555]">
        <p>
          Premium Properties ("we", "our", or "us") respects your privacy and is committed to protecting the personal data you share with us through our website.
        </p>
        <h3 className="text-sm font-bold text-[#0B1F3A] font-heading">1. Information We Collect</h3>
        <p>
          We collect personal details such as your name, phone number, email address, and property preferences when you fill out site visit forms, request brochures, or contact us via WhatsApp.
        </p>
        <h3 className="text-sm font-bold text-[#0B1F3A] font-heading">2. Use of Information</h3>
        <p>
          Your information is strictly used to schedule VIP site visits, dispatch cab pickup details, share developer price sheets, and facilitate property consultations. We do not sell your personal information to third parties.
        </p>
        <h3 className="text-sm font-bold text-[#0B1F3A] font-heading">3. Contact Us</h3>
        <p>For privacy inquiries, contact us at +91 84319 09508 or email advisory@premiumpropertiesbengaluru.com.</p>
      </div>
    </div>
  );
}

export function TermsPage({ setActivePage }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-6 text-[#1A1A1A]">
      <button
        onClick={() => setActivePage('home')}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-[#0B1F3A]/15 text-xs font-semibold hover:bg-[#F8F8F5] cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </button>

      <div className="border-b border-[#0B1F3A]/10 pb-4">
        <h1 className="text-3xl font-extrabold text-[#0B1F3A] font-heading">Terms & Conditions</h1>
        <p className="text-xs text-[#555555] mt-1">Last Updated: October 2026</p>
      </div>

      <div className="space-y-4 text-xs leading-relaxed text-[#555555]">
        <p>
          By accessing or using the Premium Properties platform, you agree to comply with and be bound by the following Terms & Conditions.
        </p>
        <h3 className="text-sm font-bold text-[#0B1F3A] font-heading">1. Channel Partner Services</h3>
        <p>
          Premium Properties operates as an authorized independent real estate consultancy and Channel Partner for developers in Bengaluru and Dubai. Services to buyers (site visit assistance, project comparison, consultation) are provided free of brokerage.
        </p>
        <h3 className="text-sm font-bold text-[#0B1F3A] font-heading">2. Accuracy of Information</h3>
        <p>
          While we strive for 100% accuracy, property dimensions, pricing, availability, and RERA approval numbers are subject to verification directly with respective developers.
        </p>
      </div>
    </div>
  );
}

export function DisclaimerPage({ setActivePage }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-6 text-[#1A1A1A]">
      <button
        onClick={() => setActivePage('home')}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-[#0B1F3A]/15 text-xs font-semibold hover:bg-[#F8F8F5] cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </button>

      <div className="border-b border-[#0B1F3A]/10 pb-4">
        <h1 className="text-3xl font-extrabold text-[#0B1F3A] font-heading">Channel Partner & RERA Disclaimer</h1>
        <p className="text-xs text-[#555555] mt-1">Mandatory Disclosure Statement</p>
      </div>

      <div className="bg-[#0B1F3A] text-white p-6 rounded-2xl border border-[#C8A34D]/40 space-y-3">
        <div className="flex items-center gap-2 text-[#C8A34D] font-bold text-sm font-heading">
          <AlertTriangle className="w-5 h-5 text-[#C8A34D]" />
          <span>Independent Consultancy & Channel Partner Disclosure</span>
        </div>
        <p className="text-xs text-white/90 leading-relaxed font-light">
          "We are an independent real estate consultancy working with multiple reputed developers as Channel Partners. We help buyers compare projects, arrange site visits and connect directly with developers."
        </p>
      </div>

      <div className="space-y-3 text-xs text-[#555555] leading-relaxed">
        <p>
          All project logos, brand names, and trademarks belong to their respective developers (PGR Buildtech, Vinra Group, Artivea Studio, Emaar Properties, Prestige Group, Sobha Developers). Official allotment letters, registered sale agreements, and receipts are issued directly by the respective project developers.
        </p>
      </div>
    </div>
  );
}
