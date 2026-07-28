'use client';

import React, { useState } from 'react';
import { ShieldCheck, MapPin, Phone, Menu, X, Flame, MessageCircle, Globe } from 'lucide-react';
import { usePlots } from '../context/PlotsContext';

export default function Navbar({ activePage, setActivePage }) {
  const { openSiteVisitModal } = usePlots();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappNumber = '918431909508';
  const displayPhone = '+91 84319 09508';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Hi Premium Plots & Properties! I want details on plots, villas, apartments & Dubai investments.'
  )}`;

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'plots', label: 'Plots' },
    { id: 'villas', label: 'Villas' },
    { id: 'apartments', label: 'Apartments' },
    { id: 'dubai', label: 'Dubai Properties' },
    { id: 'interior', label: 'Interior Design' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0B1F3A] text-white shadow-xl">
      {/* Top Ticker Bar */}
      <div className="bg-[#071527] text-white/80 text-[11px] py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 py-0.5 px-2.5 rounded-full bg-[#C8A34D]/20 border border-[#C8A34D]/40 text-[#C8A34D] font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verified Developer Channel Partner
            </span>
            <div className="hidden md:flex items-center gap-2 text-white/70 font-medium">
              <Flame className="w-3.5 h-3.5 text-[#C8A34D] animate-pulse" />
              <span>Bengaluru & Dubai Luxury Real Estate Portfolio</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-white/90 font-medium">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-extrabold"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-emerald-400 text-[#071527]" />
              <span>Contact Hotline: {displayPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => { setActivePage('home'); setMobileMenuOpen(false); }}
          className="flex items-center gap-3 group text-left"
        >
          <div className="w-11 h-11 rounded-xl bg-[#C8A34D] p-0.5 shadow-lg group-hover:scale-105 transition-transform flex items-center justify-center">
            <MapPin className="w-6 h-6 text-[#0B1F3A]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-2xl font-bold tracking-tight text-white font-heading">PREMIUM</span>
              <span className="text-2xl font-bold tracking-tight text-[#C8A34D] font-heading">PROPERTIES</span>
            </div>
            <p className="text-[9px] uppercase tracking-widest text-white/60 font-semibold">
              Bengaluru & Dubai Investments
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all ${
                activePage === item.id
                  ? 'bg-[#C8A34D] text-[#0B1F3A] font-bold shadow-md'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden xl:flex items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            <MessageCircle className="w-4 h-4 fill-[#0B1F3A]" />
            Contact: {displayPhone}
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2.5 rounded-xl text-white hover:text-[#C8A34D] bg-white/10 border border-white/15"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0B1F3A] border-b border-white/15 px-5 pt-4 pb-6 space-y-2 animate-fadeInUp">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActivePage(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-lg text-xs font-semibold transition-colors ${
                activePage === item.id
                  ? 'bg-[#C8A34D] text-[#0B1F3A] font-bold'
                  : 'text-white/80 hover:bg-white/10'
              }`}
            >
              {item.label}
            </button>
          ))}

          <div className="pt-3 border-t border-white/15">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-gold py-3 text-xs uppercase font-extrabold flex items-center justify-center gap-2 text-center"
            >
              <MessageCircle className="w-4 h-4 fill-[#0B1F3A]" />
              Contact: {displayPhone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
