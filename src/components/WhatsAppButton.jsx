'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappNumber = '918431909508';
  const displayPhone = '+91 84319 09508';
  const defaultText = 'Hi Premium Plots Bengaluru! I want to inquire about Nisarga Boulevard & open plot site visits.';

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultText)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Floating CTA Pill */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 border border-emerald-400/50"
        aria-label={`Chat on WhatsApp ${displayPhone}`}
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-300 rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full" />
        </div>
        
        <div className="text-left leading-tight hidden sm:block">
          <div className="text-[10px] uppercase font-bold tracking-wider text-emerald-100">Direct Land Advisor</div>
          <div className="text-xs font-black">WhatsApp: {displayPhone}</div>
        </div>
      </a>
    </div>
  );
}
