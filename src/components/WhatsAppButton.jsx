'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingActions() {
  const whatsappNumber = '918431909508';
  const displayPhone = '+91 84319 09508';
  const defaultText = 'Hi Setty Relators! I want to inquire about plots, villas, apartments & Dubai investments.';

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultText)}`;

  return (
    <div className="fixed bottom-4 right-4 z-40 sm:bottom-6 sm:right-6">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex min-h-12 min-w-12 items-center justify-center rounded-full border border-[#D4AF37] bg-[#0B192C] text-[#D4AF37] transition-transform duration-300 hover:-translate-y-1 hover:bg-[#11233D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37] active:translate-y-0 sm:min-h-0 sm:min-w-0 sm:gap-3 sm:px-4 sm:py-3"
        aria-label={`Chat on WhatsApp ${displayPhone}`}
      >
        <MessageCircle className="h-6 w-6 text-[#D4AF37]" aria-hidden="true" />
        <span className="hidden text-left leading-tight 2xl:block">
          <span className="block text-sm font-bold text-[#D4AF37]">WhatsApp us</span>
          <span className="block text-[14px] font-medium text-white/70">{displayPhone}</span>
        </span>
      </a>
    </div>
  );
}

