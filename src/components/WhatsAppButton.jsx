'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingActions() {
  const whatsappNumber = '918431909508';
  const displayPhone = '+91 84319 09508';
  const defaultText = 'Hi Premium Properties! I want to inquire about plots, villas, apartments & Dubai investments.';

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultText)}`;

  return (
    <div className="fixed bottom-4 right-4 z-40 sm:bottom-6 sm:right-6">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex min-h-12 min-w-12 items-center justify-center rounded-full border border-[#C8A34D] bg-[#0B1F3A] text-[#C8A34D] transition-transform duration-300 hover:-translate-y-1 hover:bg-[#17365E] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C8A34D] active:translate-y-0 sm:min-h-0 sm:min-w-0 sm:gap-3 sm:px-4 sm:py-3"
        aria-label={`Chat on WhatsApp ${displayPhone}`}
      >
        <MessageCircle className="h-6 w-6 text-[#C8A34D]" aria-hidden="true" />
        <span className="hidden text-left leading-tight lg:block">
          <span className="block text-sm font-bold text-[#C8A34D]">WhatsApp us</span>
          <span className="block text-xs font-medium text-white/70">{displayPhone}</span>
        </span>
      </a>
    </div>
  );
}

