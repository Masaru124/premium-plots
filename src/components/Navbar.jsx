'use client';

import React, { useState } from 'react';
import { ShieldCheck, MapPin, Phone, Menu, X, Flame, MessageCircle, Share2 } from 'lucide-react';
import { usePlots } from '../context/PlotsContext';

export default function Navbar({ activePage, setActivePage }) {
  const { openSiteVisitModal } = usePlots();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappNumber = '918431909508';
  const displayPhone = '+91 84319 09508';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Hi! I am browsing your personal PropSite portal for open plot projects in Bengaluru.'
  )}`;

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'All Listings' },
    { id: 'why-invest', label: 'Why Invest' },
    { id: 'about', label: 'About Developer' },
    { id: 'blog', label: 'Legal Guides' },
    { id: 'contact', label: 'Contact Owner' }
  ];

  return (
    <header className="sticky top-0 z-50 glass-panel shadow-md">
      {/* Top Ticker Bar */}
      <div className="bg-[#0b1f17] text-white/90 text-xs py-2 px-4 border-b border-emerald-500/20">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2 font-medium">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 py-0.5 px-2.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[11px] font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Direct Personal Property Portal • 0% Commission
            </span>
            <div className="hidden md:flex items-center gap-2 text-white/70 text-[11px]">
              <Flame className="w-3.5 h-3.5 text-[#d4af37] animate-pulse" />
              <span>Nisarga Boulevard & Verified Open Plot Listings</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-white/90 font-medium">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#25D366] hover:text-[#5ced84] transition-colors font-extrabold text-[11px]"
            >
              <MessageCircle className="w-4 h-4 fill-[#25D366] text-black" />
              <span>WhatsApp: {displayPhone}</span>
            </a>
            <span className="text-white/20">|</span>
            <a href={`tel:+918431909508`} className="flex items-center gap-1 hover:text-[#d4af37] transition-colors font-bold text-[11px]">
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{displayPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between bg-white/98 backdrop-blur-xl">
        {/* Brand Logo - PropSite Personal Style */}
        <button
          onClick={() => { setActivePage('home'); setMobileMenuOpen(false); }}
          className="flex items-center gap-3 group text-left"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0b1f17] to-[#164e39] p-0.5 shadow-md group-hover:scale-105 transition-transform flex items-center justify-center">
            <div className="w-full h-full bg-[#0b1f17] rounded-[10px] flex items-center justify-center">
              <MapPin className="w-5 h-5 text-emerald-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="text-xl font-black tracking-tight text-[#0b1f17] font-heading">PROPSITE</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 uppercase tracking-wider">
                PERSONAL
              </span>
            </div>
            <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
              Direct Developer Listings
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 bg-[#f4f6f4] p-1.5 rounded-xl border border-[#e0e6e2]">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activePage === item.id
                  ? 'bg-[#0b1f17] text-white shadow-sm font-extrabold'
                  : 'text-slate-600 hover:text-[#0b1f17] hover:bg-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-xs uppercase tracking-wider font-extrabold flex items-center gap-2 shadow-md"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            Connect via WhatsApp ({displayPhone})
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl text-[#0b1f17] bg-[#f4f6f4] border border-[#e0e6e2]"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#e0e6e2] px-5 pt-4 pb-6 space-y-3 animate-fadeInUp">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActivePage(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                activePage === item.id
                  ? 'bg-[#0b1f17] text-white'
                  : 'text-slate-600 hover:bg-[#f4f6f4]'
              }`}
            >
              {item.label}
            </button>
          ))}

          <div className="pt-3 border-t border-[#e0e6e2]">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-gold py-3 text-xs uppercase font-extrabold flex items-center justify-center gap-2 text-center"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              WhatsApp: {displayPhone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
