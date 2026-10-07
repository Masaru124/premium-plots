'use client';

import React, { useState, useEffect } from 'react';
import {
  Compass, MapPin, Phone, Menu, X, MessageCircle,
  ShieldCheck, Sparkles, ChevronRight, Award, Globe, Building2, Layers, Home, Paintbrush
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
    { id: 'plots', label: 'Plots', icon: Layers },
    { id: 'villas', label: 'Villas', icon: Home },
    { id: 'apartments', label: 'Apartments', icon: Building2 },
    { id: 'dubai', label: 'Dubai Properties', icon: Globe },
    { id: 'interior', label: 'Interior Design', icon: Paintbrush },
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
      {/* 1. LUXURY PRESTIGE TOP BAR */}
      <div className="bg-[#071527] text-white/80 text-[11px] py-2 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Trust signals */}
          <div className="flex items-center gap-3 text-[11px]">
            <span className="inline-flex items-center gap-1.5 text-[#C8A34D] font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C8A34D]" />
              <span>Verified Developer Channel Partner</span>
            </span>
            <span className="hidden md:inline text-white/30">•</span>
            <span className="hidden md:inline text-white/65">
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
              className="inline-flex items-center gap-1.5 text-[#C8A34D] hover:text-white font-bold transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-[#C8A34D] animate-pulse" />
              <span>{displayPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. ARCHITECTURAL NAVIGATION BAR */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group text-left shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A34D] rounded-xl"
          aria-label="Premium Properties Home"
        >
          {/* Architectural Crest Symbol */}
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#DFC06E] via-[#C8A34D] to-[#A6832A] p-0.5 shadow-md group-hover:scale-105 transition-transform flex items-center justify-center">
            <div className="w-full h-full bg-[#0B1F3A] rounded-[9px] flex items-center justify-center">
              <Compass className="w-5 h-5 text-[#C8A34D] group-hover:rotate-45 transition-transform duration-500" />
            </div>
          </div>

          <div className="space-y-0.5">
            <div className="flex items-center gap-1.5">
              <span className="text-lg sm:text-xl font-black tracking-tight text-white font-heading">
                PREMIUM
              </span>
              <span className="text-lg sm:text-xl font-black tracking-tight text-[#C8A34D] font-heading">
                PROPERTIES
              </span>
            </div>
            <p className="text-[9px] uppercase tracking-[0.22em] text-[#C8A34D] font-bold font-mono">
              BENGALURU • DUBAI
            </p>
          </div>
        </button>

        {/* 3. DESKTOP NAVIGATION LINKS */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-1.5">
          {navItems.map((item) => {
            const isActive = activePage === item.id || 
              (item.id === 'plots' && activePage === 'plots') ||
              (item.id === 'villas' && activePage === 'villas') ||
              (item.id === 'apartments' && activePage === 'apartments');

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3 py-2 text-xs transition-all cursor-pointer rounded-lg font-medium flex flex-col items-center ${
                  isActive
                    ? 'text-[#C8A34D] font-bold bg-white/5'
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

        {/* 4. DESKTOP CONTACT BUTTON */}
        <div className="hidden lg:flex items-center shrink-0">
          <button
            onClick={() => openSiteVisitModal()}
            className="btn-gold text-xs py-2.5 px-5 shadow-md cursor-pointer"
          >
            <span>Book Site Visit</span>
          </button>
        </div>

        {/* 5. MOBILE ACTIONS & HAMBURGER */}
        <div className="flex lg:hidden items-center gap-2 shrink-0">
          <button
            onClick={() => openSiteVisitModal()}
            className="py-2 px-3 rounded-lg bg-[#C8A34D] text-[#0B1F3A] text-xs font-bold cursor-pointer"
          >
            Book Visit
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl text-white hover:text-[#C8A34D] bg-white/10 border border-white/15 cursor-pointer transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#C8A34D]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* 6. FULL-SCREEN OFF-CANVAS MOBILE DRAWER */}
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
                    <span className="text-[10px] text-[#C8A34D] font-mono">BENGALURU • DUBAI</span>
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

              {/* Navigation Items List */}
              <div className="space-y-1">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-white/40 block mb-2">
                  NAVIGATION
                </span>
                
                {navItems.map((item) => {
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
                        {Icon && <Icon className={`w-4 h-4 ${isActive ? 'text-[#0B1F3A]' : 'text-[#C8A34D]'}`} />}
                        <span>{item.label}</span>
                      </div>
                      <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#0B1F3A]' : 'text-white/40'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-6 border-t border-white/15 space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openSiteVisitModal();
                }}
                className="w-full py-3.5 px-4 rounded-xl btn-gold text-xs uppercase font-extrabold flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <span>Book Site Visit</span>
              </button>

              <a
                href={`tel:+${whatsappNumber}`}
                className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs flex items-center justify-center gap-2 border border-white/15"
              >
                <Phone className="w-3.5 h-3.5 text-[#C8A34D]" />
                <span>Call Hotline: {displayPhone}</span>
              </a>

              <div className="text-center pt-1 text-[10px] text-white/50 font-mono">
                Bengaluru & Dubai • 0% Brokerage
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
