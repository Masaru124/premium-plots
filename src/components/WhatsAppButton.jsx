'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingActions() {
  const whatsappNumber = '918431909508';
  const displayPhone = '+91 84319 09508';
  const defaultText = 'Hi Premium Properties! I want to inquire about plots, villas, apartments & Dubai investments.';

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultText)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating WhatsApp CTA Only */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20 cursor-pointer"
        aria-label={`Chat on WhatsApp ${displayPhone}`}
      >
        <div className="relative flex items-center justify-center">
          <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
        </div>
        
        <div className="text-left leading-tight hidden sm:block">
          <div className="text-[10px] uppercase font-bold tracking-wider text-emerald-100">Property Advisory</div>
          <div className="text-xs font-black tracking-wide">WhatsApp: {displayPhone}</div>
        </div>
      </a>
    </div>
  );
}

