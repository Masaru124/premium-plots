'use client';

import React, { useState, useEffect } from 'react';
import {
  Compass, MapPin, Phone, Menu, X, Flame, MessageCircle,
  Car, ShieldCheck, Sparkles, ChevronRight, Award, Globe, Building2, Layers, Home, Paintbrush
} from 'lucide-react';
import { usePlots } from '../context/PlotsContext';

export default function Navbar({ activePage, setActivePage }) {
  const { openSiteVisitModal } = usePlots();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const whatsappNumber = '918431909508';
  const displayPhone = '+91 84319 09508';
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
    'Hello Premium Properties Advisory! I am browsing your Bengaluru & Dubai properties. Please share verified masterplans and pricing details.'
  )}`;

  // Scroll shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on Escape
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
      label: '✨ Smart Matchmaker',
      isSpecial: true,
      badge: 'AI Concierge'
    },
    { id: 'plots', label: 'Plots', icon: Layers },
    { id: 'villas', label: 'Villas', icon: Home },
    { id: 'apartments', label: 'Apartments', icon: Building2 },
    { id: 'dubai', label: 'Dubai 🌍' },
    { id: 'interior', label: 'Interiors' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    // Smooth scroll to top when changing views
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'nav-glass shadow-2xl' : 'bg-[#0B1F3A]'
    }`}>
      {/* 1. TOP LIVE REAL ESTATE TICKER / ANNOUNCEMENT BAR */}
      <div className="bg-[#071527] text-white/85 text-[11px] py-1.5 px-4 border-b border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Trust badges and live corridor signals */}
          <div className="flex items-center gap-4 text-xs">
            <span className="inline-flex items-center gap-1.5 py-0.5 px-2.5 rounded-full bg-[#C8A34D]/20 border border-[#C8A34D]/40 text-[#E6C875] font-extrabold text-[10px] tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C8A34D]" />
              Authorized Developer Channel Partner
            </span>

            <div className="hidden lg:flex items-center gap-3 text-white/70 text-[11px]">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-emerald-400 font-bold">Live:</span> STRR Expressway & Airport Corridor Plots
              </span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-1 text-white/70">
                <Award className="w-3 h-3 text-[#C8A34D]" />
                0% Brokerage to Buyers
              </span>
            </div>
          </div>

          {/* Quick Contact & Chauffeur Cab Note */}
          <div className="flex items-center gap-3 text-[11px]">
            <button
              onClick={() => openSiteVisitModal()}
              className="hidden sm:inline-flex items-center gap-1.5 text-[#E6C875] hover:text-white transition-colors cursor-pointer font-semibold"
            >
              <Car className="w-3.5 h-3.5 text-[#C8A34D]" />
              <span>Free AC Cab Site Visits</span>
            </button>

            <span className="hidden sm:inline text-white/20">|</span>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Hotline: {displayPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATIONAL MASTHEAD */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Brand Logo with Architectural Crest */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group text-left shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A34D] rounded-xl p-1"
          aria-label="Premium Properties Home"
        >
          {/* Architectural Crest Symbol */}
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#E6C875] via-[#C8A34D] to-[#997328] p-0.5 shadow-xl group-hover:scale-105 transition-transform flex items-center justify-center relative">
            <div className="w-full h-full bg-[#0B1F3A] rounded-[10px] flex items-center justify-center">
              <Compass className="w-6 h-6 text-[#E6C875] group-hover:rotate-45 transition-transform duration-500" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#0B1F3A] flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white font-heading">
                PREMIUM
              </span>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-[#E6C875] font-heading">
                PROPERTIES
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <p className="text-[9px] uppercase tracking-widest text-white/65 font-bold font-mono">
                BENGALURU
              </p>
              <span className="text-[#C8A34D] text-[9px]">•</span>
              <p className="text-[9px] uppercase tracking-widest text-[#E6C875] font-bold font-mono">
                DUBAI
              </p>
            </div>
          </div>
        </button>

        {/* 3. DESKTOP NAVIGATION LINKS (Visible from lg: 1024px+) */}
        <div className="hidden lg:flex items-center gap-1 bg-white/5 p-1 rounded-2xl border border-white/10 shadow-inner">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            const isSpecial = item.isSpecial;

            if (isSpecial) {
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3.5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer shadow-md ${
                    isActive
                      ? 'bg-[#C8A34D] text-[#0B1F3A] shadow-lg scale-105'
                      : 'text-[#E6C875] bg-gradient-to-r from-[#C8A34D]/25 to-[#E6C875]/20 border border-[#C8A34D]/60 hover:bg-[#C8A34D]/35 hover:scale-105'
                  }`}
                >
                  <Sparkles className={`w-3.5 h-3.5 ${isActive ? 'text-[#0B1F3A]' : 'text-[#E6C875] animate-spin'}`} />
                  <span>{item.label.replace('✨ ', '')}</span>
                  <span className={`text-[9px] font-extrabold px-1.5 py-0.2 rounded-full uppercase tracking-tighter ${
                    isActive ? 'bg-[#0B1F3A] text-[#E6C875]' : 'bg-[#C8A34D] text-[#0B1F3A]'
                  }`}>
                    {item.badge}
                  </span>
                </button>
              );
            }

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#C8A34D] text-[#0B1F3A] font-extrabold shadow-sm'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* 4. DESKTOP ACTION HUB (CTAs) */}
        <div className="hidden lg:flex items-center gap-2.5 shrink-0">
          
          {/* Free Site Visit Chauffeur Cab Modal Trigger */}
          <button
            onClick={() => openSiteVisitModal()}
            className="px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer hover:border-[#C8A34D]/50"
            title="Book Free AC Cab Site Visit with Pick & Drop"
          >
            <Car className="w-4 h-4 text-[#E6C875]" />
            <span>Free Cab Visit</span>
          </button>

          {/* Primary WhatsApp Direct Advisor Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold py-2.5 px-4 text-xs uppercase font-extrabold flex items-center gap-2 shadow-xl hover:scale-105 transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-[#0B1F3A]" />
            <span className="hidden xl:inline">Advisor:</span>
            <span>+91 84319</span>
          </a>
        </div>

        {/* 5. MOBILE MENU HAMBURGER BUTTON */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Quick WhatsApp Pill on Mobile */}
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
          {/* Dark Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Slide-in Content Panel */}
          <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-[#0B1F3A] border-l border-[#C8A34D]/30 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto cad-grid text-white">
            
            <div className="space-y-6">
              {/* Drawer Top Header */}
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

              {/* Highlighted Matchmaker Spotlight Tile in Mobile Menu */}
              <button
                onClick={() => handleNavClick('matchmaker')}
                className="w-full p-4 rounded-2xl bg-gradient-to-r from-[#C8A34D] to-[#E6C875] text-[#0B1F3A] text-left space-y-1 shadow-xl hover:scale-[1.02] transition-transform cursor-pointer border border-white/30"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider bg-[#0B1F3A] text-[#E6C875] px-2 py-0.5 rounded-full">
                    AI Concierge (60s)
                  </span>
                  <Sparkles className="w-4 h-4 text-[#0B1F3A] animate-spin" />
                </div>
                <h4 className="text-base font-black font-heading">
                  ✨ Smart Plot Matchmaker
                </h4>
                <p className="text-xs font-semibold text-[#0B1F3A]/80 leading-tight">
                  Interactive CAD blueprint simulator, Vastu compass & instant RERA masterplans.
                </p>
              </button>

              {/* Primary Navigation Links */}
              <div className="space-y-1">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-white/40 block mb-2">
                  EXPLORE PORTFOLIO
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

              {/* Free AC Cab Visit Trigger */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
                <div className="flex items-center gap-2 text-[#E6C875] text-xs font-bold">
                  <Car className="w-4 h-4" />
                  <span>VIP Site Visit Assistance</span>
                </div>
                <p className="text-[11px] text-white/70">
                  Complimentary AC chauffeur cab pickup from any Bengaluru address to project sites.
                </p>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openSiteVisitModal();
                  }}
                  className="w-full py-2.5 px-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs flex items-center justify-center gap-2 border border-white/20 cursor-pointer"
                >
                  <Car className="w-3.5 h-3.5 text-[#E6C875]" />
                  <span>Schedule Free Cab Pickup</span>
                </button>
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
                <span>Chat on WhatsApp ({displayPhone})</span>
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
