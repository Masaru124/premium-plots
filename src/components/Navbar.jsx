'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Compass, Menu, X, Phone, ChevronRight } from 'lucide-react';
import { usePlots } from '../context/PlotsContext';

const NAV_ITEMS = [
  { id: 'plots', label: 'Plots', href: '/plots-in-bangalore' },
  { id: 'villas', label: 'Villas', href: '/luxury-villas-bangalore' },
  { id: 'apartments', label: 'Apartments', href: '/?page=apartments' },
  { id: 'dubai', label: 'Dubai', href: '/?page=dubai' },
  { id: 'about', label: 'The desk', href: '/?page=about' }
];

export default function Navbar({ activePage, setActivePage }) {
  const { openSiteVisitModal } = usePlots();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const triggerRef = useRef(null);

  const displayPhone = '+91 84319 09508';

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        triggerRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  const go = (item) => {
    setMobileMenuOpen(false);
    setActivePage(item.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0B1F3A]">
      <nav aria-label="Main navigation" className="shell flex min-h-[80px] items-center justify-between gap-6 py-3">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setActivePage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex shrink-0 items-center gap-3"
          aria-label="Setty Relators — home"
        >
          <span className="flex h-10 w-10 items-center justify-center bg-[#C8A34D]">
            <Compass className="h-5 w-5 text-[#0B1F3A]" aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block font-heading text-[1.5rem] leading-none tracking-[-0.01em] text-white">
              Setty Relators
            </span>
            <span className="mt-1 block text-[14px] leading-none text-[#DFC06E]">
              Bengaluru · Dubai
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = activePage === item.id;
            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    go(item);
                  }}
                  aria-current={isActive ? 'page' : undefined}
                  className={`inline-flex min-h-11 items-center text-[14px] transition-colors ${
                    isActive
                      ? 'text-white underline decoration-[#C8A34D] decoration-2 underline-offset-[10px]'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href={`tel:+${displayPhone.replace(/\D/g, '')}`}
            className="hidden min-h-11 items-center text-[14px] text-white/65 transition-colors hover:text-white xl:inline-flex"
          >
            {displayPhone}
          </a>
          <button
            type="button"
            onClick={() => openSiteVisitModal()}
            className="btn-gold hidden min-h-11 px-6 lg:inline-flex"
          >
            Book a visit
          </button>
          <button
            ref={triggerRef}
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            className="flex h-11 w-11 items-center justify-center text-white lg:hidden"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 top-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-[#071527]/85"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col justify-between overflow-y-auto bg-[#0B1F3A] px-6 py-6 text-white"
          >
            <div>
              <div className="flex items-center justify-between pb-8">
                <span className="font-heading text-xl">Setty Relators</span>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    triggerRef.current?.focus();
                  }}
                  className="flex h-11 w-11 items-center justify-center text-white/80 hover:text-white"
                  aria-label="Close navigation"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <ul>
                {NAV_ITEMS.concat([{ id: 'contact', label: 'Contact', href: '/?page=contact' }]).map((item) => {
                  const isActive = activePage === item.id;
                  return (
                    <li key={item.id}>
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          go(item);
                        }}
                        aria-current={isActive ? 'page' : undefined}
                        className={`flex min-h-14 items-center justify-between py-3 font-heading text-[1.5rem] transition-colors ${
                          isActive ? 'text-[#DFC06E]' : 'text-white hover:text-[#DFC06E]'
                        }`}
                      >
                        {item.label}
                        <ChevronRight className="h-5 w-5 text-white/30" aria-hidden="true" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mt-8 space-y-4 pt-6">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openSiteVisitModal();
                }}
                className="btn-gold w-full"
              >
                Book a site visit
              </button>

              <a href={`tel:+${displayPhone.replace(/\D/g, '')}`} className="btn-quiet btn-quiet--on-ink w-full">
                <Phone className="h-4 w-4" aria-hidden="true" />
                {displayPhone}
              </a>

              <p className="text-center text-[14px] text-white/50">
                Independent advisory · Zero brokerage to buyers
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
