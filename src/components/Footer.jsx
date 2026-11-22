'use client';

import React from 'react';
import { Compass, MapPin, Phone, Mail, ShieldCheck, ArrowUpRight, Award, MessageCircle } from 'lucide-react';

export default function Footer({ setActivePage }) {
  const whatsappNumber = '918431909508';
  const displayPhone = '+91 84319 09508';

  return (
    <footer className="bg-[#0B1F3A] text-white/70 pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg border border-[#C8A34D] p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#0B1F3A] rounded-[6px] flex items-center justify-center">
                  <Compass className="w-5 h-5 text-[#C8A34D]" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-bold tracking-tight text-white font-heading">LAKSHIE</span>
                  <span className="text-xl font-bold tracking-tight text-[#C8A34D] font-heading">REAL ESTATE</span>
                </div>
                <p className="text-sm text-[#C8A34D] font-semibold">
                  Bengaluru and Dubai
                </p>
              </div>
            </div>

            <p className="max-w-md text-base leading-relaxed text-white/80">
              Independent Real Estate Consultancy and Authorized Channel Partner for premier open plot townships, luxury villa developments, high-rise apartments, and Dubai waterfront investments.
            </p>

            <div className="space-y-3 pt-2 text-base">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C8A34D] shrink-0 mt-0.5" />
                <span>Level 5, Concorde Towers, UB City, Vittal Mallya Road & Indiranagar, Bengaluru, Karnataka 560001</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-[#C8A34D] shrink-0" />
                <a
                  href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent('Hi Premium Properties Advisory! I want property details & consultation.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C8A34D] font-bold hover:underline"
                >
                  Contact Hotline: {displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C8A34D] shrink-0" />
                <span>advisory@premiumpropertiesbengaluru.com</span>
              </div>
            </div>
          </div>

          {/* Property Portfolios */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-[#C8A34D] font-heading">Property portfolios</h3>
            <ul className="space-y-2.5 text-base text-white/70">
              <li>
                <a href="/plots-in-bangalore" className="hover:text-[#C8A34D] transition-colors text-left block">
                  Open plots, Devanahalli and STRR
                </a>
              </li>
              <li>
                <a href="/plots-in-bangalore" className="hover:text-[#C8A34D] transition-colors text-left block">
                  Villa plots by Oriaiyan Group
                </a>
              </li>
              <li>
                <a href="/purva-sounds-of-water" className="hover:text-[#C8A34D] transition-colors text-left block">
                  Purva Symphony resale, Bannerghatta
                </a>
              </li>
              <li>
                <a href="/luxury-villas-bangalore" className="hover:text-[#C8A34D] transition-colors text-left block">
                  Luxury villas in Bangalore
                </a>
              </li>
              <li>
                <a
                  href="/?page=apartments"
                  onClick={(e) => {
                    if (typeof window !== 'undefined' && (window.location.pathname === '/' || window.location.pathname === '')) {
                      e.preventDefault();
                      setActivePage('apartments');
                    }
                  }}
                  className="hover:text-[#C8A34D] transition-colors cursor-pointer text-left block"
                >
                  High-rise apartments, airport corridor
                </a>
              </li>
              <li>
                <a
                  href="/?page=dubai"
                  onClick={(e) => {
                    if (typeof window !== 'undefined' && (window.location.pathname === '/' || window.location.pathname === '')) {
                      e.preventDefault();
                      setActivePage('dubai');
                    }
                  }}
                  className="hover:text-[#C8A34D] transition-colors cursor-pointer text-left block"
                >
                  Dubai waterfront investments
                </a>
              </li>
              <li>
                <a
                  href="/?page=interior"
                  onClick={(e) => {
                    if (typeof window !== 'undefined' && (window.location.pathname === '/' || window.location.pathname === '')) {
                      e.preventDefault();
                      setActivePage('interior');
                    }
                  }}
                  className="hover:text-[#C8A34D] transition-colors cursor-pointer text-left block"
                >
                  Turnkey interior design
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading text-base font-semibold text-[#C8A34D]">Quick links</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a
                  href="/?page=projects"
                  onClick={(e) => {
                    if (typeof window !== 'undefined' && (window.location.pathname === '/' || window.location.pathname === '')) {
                      e.preventDefault();
                      setActivePage('projects');
                    }
                  }}
                  className="hover:text-[#C8A34D] transition-colors cursor-pointer block"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/?page=blog"
                  onClick={(e) => {
                    if (typeof window !== 'undefined' && (window.location.pathname === '/' || window.location.pathname === '')) {
                      e.preventDefault();
                      setActivePage('blog');
                    }
                  }}
                  className="hover:text-[#C8A34D] transition-colors cursor-pointer block"
                >
                  Market Guides & Insights
                </a>
              </li>
              <li>
                <a
                  href="/?page=about"
                  onClick={(e) => {
                    if (typeof window !== 'undefined' && (window.location.pathname === '/' || window.location.pathname === '')) {
                      e.preventDefault();
                      setActivePage('about');
                    }
                  }}
                  className="hover:text-[#C8A34D] transition-colors cursor-pointer block"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/?page=contact"
                  onClick={(e) => {
                    if (typeof window !== 'undefined' && (window.location.pathname === '/' || window.location.pathname === '')) {
                      e.preventDefault();
                      setActivePage('contact');
                    }
                  }}
                  className="hover:text-[#C8A34D] transition-colors cursor-pointer block"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/?page=privacy"
                  onClick={(e) => {
                    if (typeof window !== 'undefined' && (window.location.pathname === '/' || window.location.pathname === '')) {
                      e.preventDefault();
                      setActivePage('privacy');
                    }
                  }}
                  className="hover:text-[#C8A34D] transition-colors cursor-pointer block"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/?page=terms"
                  onClick={(e) => {
                    if (typeof window !== 'undefined' && (window.location.pathname === '/' || window.location.pathname === '')) {
                      e.preventDefault();
                      setActivePage('terms');
                    }
                  }}
                  className="hover:text-[#C8A34D] transition-colors cursor-pointer block"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/?page=disclaimer"
                  onClick={(e) => {
                    if (typeof window !== 'undefined' && (window.location.pathname === '/' || window.location.pathname === '')) {
                      e.preventDefault();
                      setActivePage('disclaimer');
                    }
                  }}
                  className="hover:text-[#C8A34D] transition-colors cursor-pointer block"
                >
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>

          {/* Channel Partner Trust */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-[#C8A34D] font-heading">Consultancy assurance</h3>
            <div className="space-y-3 text-base">
              <div className="bg-white/5 p-3.5 rounded-xl border border-white/10 space-y-1">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C8A34D]" />
                  <span>Authorized Channel Partner</span>
                </div>
                <p className="text-white/70 leading-relaxed">
                  Working directly with reputed developers for plot & villa allocations.
                </p>
              </div>
              <div className="bg-white/5 p-3.5 rounded-xl border border-white/10 space-y-1">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#C8A34D]" />
                  <span>0% Brokerage to Buyers</span>
                </div>
                <p className="text-white/70 leading-relaxed">
                  Direct developer price quotes with complimentary VIP site visits.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mandatory Channel Partner Disclaimer */}
        <div className="rounded-lg bg-white/5 p-6 text-base text-white/80 space-y-3 leading-relaxed">
          <div className="font-heading text-base font-semibold text-[#C8A34D]">
            Disclaimer and transparency
          </div>
          <p>
            "We are an independent real estate consultancy working with multiple reputed developers as Channel Partners. We help buyers compare projects, arrange site visits and connect directly with developers."
          </p>
          <p className="text-base text-white/70">
            All project images, architectural plans, layout blueprints, specifications, and prices shown on this platform are for representational and indicative purposes. Official booking agreements, allotment terms, and payments are executed directly between the buyer and the respective developer.
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 text-base text-white/70">
          <p>© {new Date().getFullYear()} Lakshie Real Estate. All rights reserved.</p>
          <p>Channel partner registration verified · Bengaluru and Dubai</p>
        </div>

      </div>
    </footer>
  );
}
