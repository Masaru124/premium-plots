'use client';

import React, { useState, useEffect } from 'react';
import {
  Compass, MapPin, Phone, Menu, X, MessageCircle,
  ShieldCheck, Sparkles, ChevronRight, Award, Globe, Building2, Layers, Home
} from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const whatsappNumber = '918431909508';
  const displayPhone = '+91 84319 09508';
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
    'Hello Premium Properties Advisory! I am browsing your Bengaluru & Dubai properties. Please share verified masterplans and pricing details.'
  )}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navItems = [
    { id: 'home', label: 'Home' },
    {
      id: 'matchmaker',
      label: 'Plot Matchmaker',
      isSpecial: true
    },
    { id: 'plots', label: 'Plots', icon: Layers },
    { id: 'villas', label: 'Villas', icon: Home },
    { id: 'apartments', label: 'Apartments', icon: Building2 },
    { id: 'dubai', label: 'Dubai' },
    { id: 'interior', label: 'Interiors' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'nav-glass shadow-2xl' : 'bg-[#0B1F3A]'
    }`}>
      {/* 1. ULTRA-CLEAN LUXURY PRESTIGE TOP BAR */}
      <div className="bg-[#071527] text-white/80 text-[11px] py-2 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Trust signals */}
          <div className="flex items-center gap-3 text-[11px]">
            <span className="inline-flex items-center gap-1.5 text-[#E6C875] font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C8A34D]" />
              <span>Verified Developer Channel Partner</span>
            </span>
            <span className="hidden md:inline text-white/30">•</span>
            <span className="hidden md:inline text-white/60">
              Bengaluru & Dubai Luxury Real Estate Portfolio
            </span>
            <span className="hidden lg:inline text-white/30">•</span>
            <span className="hidden lg:inline text-emerald-400 font-semibold">
              0% Brokerage to Buyers
            </span>
          </div>

          {/* Direct WhatsApp Advisory Hotline */}
          <div className="flex items-center gap-2 text-[11px] shrink-0">
            <span className="text-white/50 hidden sm:inline">Advisory Hotline:</span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{displayPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. REFINED ARCHITECTURAL NAVIGATION BAR */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group text-left shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A34D] rounded-xl"
          aria-label="Premium Properties Home"
        >
          {/* Architectural Crest Symbol */}
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E6C875] via-[#C8A34D] to-[#997328] p-0.5 shadow-md group-hover:scale-105 transition-transform flex items-center justify-center">
            <div className="w-full h-full bg-[#0B1F3A] rounded-[9px] flex items-center justify-center">
              <Compass className="w-5 h-5 text-[#E6C875] group-hover:rotate-45 transition-transform duration-500" />
            </div>
          </div>

          <div className="space-y-0.5">
            <div className="flex items-center gap-1.5">
              <span className="text-lg sm:text-xl font-black tracking-tight text-white font-heading">
                PREMIUM
              </span>
              <span className="text-lg sm:text-xl font-black tracking-tight text-[#E6C875] font-heading">
                PROPERTIES
              </span>
            </div>
            <p className="text-[9px] uppercase tracking-[0.22em] text-[#C8A34D] font-bold font-mono">
              BENGALURU • DUBAI
            </p>
          </div>
        </button>

        {/* 3. DESKTOP NAVIGATION LINKS (Visible from lg: 1024px+) */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            const isSpecial = item.isSpecial;

            if (isSpecial) {
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-[#C8A34D] text-[#0B1F3A] shadow-md font-extrabold'
                      : 'text-[#E6C875] bg-[#C8A34D]/15 border border-[#C8A34D]/40 hover:bg-[#C8A34D]/25 hover:border-[#C8A34D]'
                  }`}
                >
                  <Sparkles className={`w-3.5 h-3.5 ${isActive ? 'text-[#0B1F3A]' : 'text-[#E6C875]'}`} />
                  <span>{item.label}</span>
                </button>
              );
            }

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3 py-2 text-xs transition-all cursor-pointer rounded-lg font-medium flex flex-col items-center ${
                  isActive
                    ? 'text-[#E6C875] font-bold'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8A34D] mt-0.5" />
                )}
              </button>
            );
          })}
        </div>

        {/* 4. DESKTOP CONTACT BUTTON (Single, sleek, never overflows) */}
        <div className="hidden lg:flex items-center shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#C8A34D] via-[#D4B25B] to-[#C8A34D] hover:from-[#D4B25B] hover:to-[#E6C875] text-[#0B1F3A] font-extrabold text-xs tracking-wide shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-[#0B1F3A]" />
            <span>WhatsApp Advisory</span>
          </a>
        </div>

        {/* 5. MOBILE ACTIONS & HAMBURGER */}
        <div className="flex lg:hidden items-center gap-2 shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-emerald-500 text-white shadow-md flex items-center justify-center cursor-pointer"
            aria-label="WhatsApp Contact"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl text-white hover:text-[#C8A34D] bg-white/10 border border-white/15 cursor-pointer transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#E6C875]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* 6. LUXURY FULL-SCREEN OFF-CANVAS MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden animate-fadeIn">
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Slide-in Drawer */}
          <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-[#0B1F3A] border-l border-[#C8A34D]/30 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto text-white cad-grid">
            
            <div className="space-y-6">
              {/* Top Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#C8A34D] flex items-center justify-center text-[#0B1F3A]">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-extrabold text-sm text-white font-heading block">PREMIUM PROPERTIES</span>
                    <span className="text-[10px] text-[#E6C875] font-mono">BENGALURU • DUBAI</span>
                  </div>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                  aria-label="Close navigation"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Matchmaker Spotlight Tile */}
              <button
                onClick={() => handleNavClick('matchmaker')}
                className="w-full p-4 rounded-2xl bg-gradient-to-r from-[#C8A34D] to-[#E6C875] text-[#0B1F3A] text-left space-y-1 shadow-lg hover:scale-[1.02] transition-transform cursor-pointer border border-white/30"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider bg-[#0B1F3A] text-[#E6C875] px-2 py-0.5 rounded-full">
                    60-Second Quiz
                  </span>
                  <Sparkles className="w-4 h-4 text-[#0B1F3A]" />
                </div>
                <h4 className="text-base font-black font-heading">
                  ✨ Smart Plot Matchmaker
                </h4>
                <p className="text-xs font-semibold text-[#0B1F3A]/80 leading-tight">
                  CAD blueprint simulator, Vastu compass & verified WhatsApp layouts.
                </p>
              </button>

              {/* Navigation Items List */}
              <div className="space-y-1">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-white/40 block mb-2">
                  NAVIGATION
                </span>
                
                {navItems.filter(i => i.id !== 'matchmaker').map((item) => {
                  const isActive = activePage === item.id;
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#C8A34D] text-[#0B1F3A] shadow-md'
                          : 'text-white/85 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {Icon && <Icon className={`w-4 h-4 ${isActive ? 'text-[#0B1F3A]' : 'text-[#E6C875]'}`} />}
                        <span>{item.label}</span>
                      </div>
                      <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#0B1F3A]' : 'text-white/40'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Drawer Bottom Actions: Direct Phone & WhatsApp */}
            <div className="pt-6 border-t border-white/15 space-y-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs uppercase flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Senior Advisor</span>
              </a>

              <a
                href={`tel:+${whatsappNumber}`}
                className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs flex items-center justify-center gap-2 border border-white/15"
              >
                <Phone className="w-3.5 h-3.5 text-[#E6C875]" />
                <span>Call Hotline: {displayPhone}</span>
              </a>

              <div className="text-center pt-1 text-[10px] text-white/50 font-mono">
                UB City & Indiranagar, Bengaluru • 0% Brokerage
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
