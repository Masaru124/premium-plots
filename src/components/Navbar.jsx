'use client';

import React, { useState } from 'react';
import { ShieldCheck, MapPin, Phone, Menu, X, Flame, MessageCircle } from 'lucide-react';
import { usePlots } from '../context/PlotsContext';

export default function Navbar({ activePage, setActivePage }) {
  const { openSiteVisitModal } = usePlots();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappNumber = '918431909508';
  const displayPhone = '+91 84319 09508';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Hi Premium Plots Bengaluru! I want details on open plot projects & site visits.'
  )}`;

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'All Projects' },
    { id: 'why-invest', label: 'Why Invest in Bengaluru' },
    { id: 'about', label: 'About Us' },
    { id: 'blog', label: 'Blog & Legal' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="sticky top-0 z-50 glass-panel shadow-lg">
      {/* Top Ticker Bar */}
      <div className="bg-gradient-to-r from-[#0f1d3d] via-[#162550] to-[#1e3a6e] text-white/90 text-xs py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 py-0.5 px-2.5 rounded-full bg-white/10 border border-white/20 text-white text-[11px] font-bold backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
              100% RERA & BDA/BIAPPA Verified Plots
            </span>
            <div className="hidden md:flex items-center gap-2 text-white/80 font-medium text-[11px]">
              <Flame className="w-3.5 h-3.5 text-[#d4af37] animate-pulse" />
              <span>Direct Developer Allocation • Zero Brokerage</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-white/90 font-medium">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi! I want plot inquiry & site visit.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#25D366] hover:text-[#5ced84] transition-colors font-extrabold text-[11px]"
            >
              <MessageCircle className="w-4 h-4 fill-[#25D366] text-white" />
              <span>WhatsApp: {displayPhone}</span>
            </a>
            <span className="text-white/30">|</span>
            <a href={`tel:+918431909508`} className="flex items-center gap-1 hover:text-[#d4af37] transition-colors font-bold text-[11px]">
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{displayPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between bg-white/95 backdrop-blur-xl">
        {/* Brand Logo */}
        <button
          onClick={() => { setActivePage('home'); setMobileMenuOpen(false); }}
          className="flex items-center gap-3.5 group text-left"
        >
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#0f1d3d] to-[#1e3a6e] p-0.5 shadow-lg shadow-[#0f1d3d]/30 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0f1d3d] rounded-[14px] flex items-center justify-center">
              <MapPin className="w-6 h-6 text-[#d4af37]" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-2xl font-black tracking-tight text-[#0f1d3d] font-heading">PREMIUM</span>
              <span className="text-2xl font-black tracking-tight gold-gradient-text font-heading">PLOTS</span>
            </div>
            <p className="text-[10px] uppercase tracking-widest text-[#1e3a6e] font-extrabold">
              Bengaluru Open Plot Projects
            </p>
          </div>
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-0.5 bg-[#f0f2f7] p-1.5 rounded-2xl border border-[#e2e8f0]">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activePage === item.id
                  ? 'bg-[#0f1d3d] text-white shadow-md font-extrabold'
                  : 'text-[#4a5568] hover:text-[#0f1d3d] hover:bg-white'
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
            className="btn-gold text-xs uppercase tracking-wider font-extrabold flex items-center gap-2 shadow-xl"
          >
            <MessageCircle className="w-4 h-4 fill-white text-[#d4af37]" />
            Book Now / Contact Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl text-[#0f1d3d] hover:text-[#d4af37] bg-[#f0f2f7] border border-[#e2e8f0]"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-2xl border-b border-[#e2e8f0] px-5 pt-4 pb-6 space-y-3 animate-fadeInUp">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActivePage(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                activePage === item.id
                  ? 'bg-[#0f1d3d] text-white'
                  : 'text-[#4a5568] hover:bg-[#f0f2f7]'
              }`}
            >
              {item.label}
            </button>
          ))}

          <div className="pt-3 border-t border-[#e2e8f0]">
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
