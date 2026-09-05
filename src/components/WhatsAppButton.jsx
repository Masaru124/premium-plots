'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const whatsappNumber = '918431909508';
  const displayPhone = '+91 84319 09508';
  const defaultText = 'Hi Premium Properties! I want to inquire about plots, villas, apartments & Dubai investments.';

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultText)}`;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Back To Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="p-3.5 rounded-full bg-[#0B1F3A] text-[#C8A34D] shadow-2xl border border-[#C8A34D]/40 hover:bg-[#142E54] hover:scale-110 transition-all duration-300"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        href={`tel:+918431909508`}
        className="p-3.5 rounded-full bg-[#0B1F3A] text-white shadow-2xl border border-white/20 hover:bg-[#142E54] hover:scale-110 transition-all duration-300 hidden sm:flex items-center justify-center"
        aria-label={`Call ${displayPhone}`}
        title={`Call ${displayPhone}`}
      >
        <Phone className="w-5 h-5 text-[#C8A34D]" />
      </a>

      {/* Floating WhatsApp CTA */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 border border-emerald-400/50"
        aria-label={`Chat on WhatsApp ${displayPhone}`}
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-white text-emerald-500" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#C8A34D] rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#C8A34D] rounded-full" />
        </div>
        
        <div className="text-left leading-tight hidden sm:block">
          <div className="text-[10px] uppercase font-bold tracking-wider text-emerald-100">Direct Land Advisor</div>
          <div className="text-xs font-black">WhatsApp: {displayPhone}</div>
        </div>
      </a>
    </div>
  );
}
