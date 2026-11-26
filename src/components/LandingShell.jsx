'use client';

import React from 'react';
import { PlotsProvider } from '../context/PlotsContext';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingActions from './WhatsAppButton';
import BookSiteVisitModal from './BookSiteVisitModal';
import useReveal from '../hooks/useReveal';

const ROUTES = {
  home: '/',
  plots: '/plots-in-bangalore',
  villas: '/luxury-villas-bangalore',
  apartments: '/?page=apartments',
  dubai: '/?page=dubai',
  about: '/?page=about',
  contact: '/?page=contact',
  blog: '/?page=blog',
  projects: '/projects',
  matchmaker: '/matchmaker',
  finder: '/matchmaker',
  interior: '/?page=interior',
  privacy: '/?page=privacy',
  terms: '/?page=terms',
  disclaimer: '/?page=disclaimer',
  'purva-villa': '/purva-sounds-of-water'
};

// Server-rendered search pages still need the masthead, the enquiry modal and
// the footer, all of which read the plots context.
export default function LandingShell({ activePage = 'plots', children }) {
  useReveal();

  const go = (page) => {
    if (typeof window === 'undefined') return;
    window.location.href = ROUTES[page] || '/';
  };

  return (
    <PlotsProvider>
      <div className="flex min-h-svh flex-col justify-between bg-[#0B192C] text-[#FBFBFD]">
        <div>
          <Navbar activePage={activePage} setActivePage={go} />
          <main id="main-content">{children}</main>
        </div>
        <FloatingActions />
        <BookSiteVisitModal />
        <Footer setActivePage={go} />
      </div>
    </PlotsProvider>
  );
}
