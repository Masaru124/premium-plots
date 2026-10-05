'use client';

import React, { useState } from 'react';
import { PlotsProvider } from '../../context/PlotsContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingActions from '../../components/WhatsAppButton';
import BookSiteVisitModal from '../../components/BookSiteVisitModal';
import PropertyMatchmakerPage from '../../views/PropertyMatchmakerPage';

function QnAContent() {
  const [activePage, setActivePage] = useState('matchmaker');

  const handleNavClick = (pageId) => {
    if (pageId !== 'matchmaker') {
      window.location.href = `/?page=${pageId}`;
    } else {
      setActivePage('matchmaker');
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F8F5] text-[#1A1A1A] flex flex-col justify-between selection:bg-[#F2B705] selection:text-[#0B1F3A]">
      <div>
        <Navbar activePage={activePage} setActivePage={handleNavClick} />
        <main className="animate-fadeIn">
          <PropertyMatchmakerPage setActivePage={handleNavClick} />
        </main>
      </div>
      <FloatingActions />
      <BookSiteVisitModal />
      <Footer setActivePage={handleNavClick} />
    </div>
  );
}

export default function QnARoute() {
  return (
    <PlotsProvider>
      <QnAContent />
    </PlotsProvider>
  );
}
