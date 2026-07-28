'use client';

import React, { useState, useEffect } from 'react';
import { PlotsProvider, usePlots } from '../context/PlotsContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingActions from '../components/WhatsAppButton';
import BookSiteVisitModal from '../components/BookSiteVisitModal';

import HomePage from '../views/HomePage';
import ProjectsPage from '../views/ProjectsPage';
import ProjectDetailsPage from '../views/ProjectDetailsPage';
import DubaiView from '../views/DubaiView';
import InteriorDesignView from '../views/InteriorDesignView';
import AboutPage from '../views/AboutPage';
import ContactPage from '../views/ContactPage';
import { PrivacyPolicyPage, TermsPage, DisclaimerPage } from '../views/LegalPagesView';
import AdminPage from '../views/AdminPage';

function AppContent() {
  const [activePage, setActivePage] = useState('home');
  const [selectedProjectId, setSelectedProjectId] = useState('project-nisarga-boulevard');
  const [filterType, setFilterType] = useState('all');
  const { toastMessage } = usePlots();

  // Handle URL hash routing
  useEffect(() => {
    const handleUrlCheck = () => {
      if (typeof window !== 'undefined') {
        const hash = window.location.hash.toLowerCase();
        const search = window.location.search.toLowerCase();
        const pathname = window.location.pathname.toLowerCase();

        if (hash === '#admin' || search.includes('page=admin') || pathname === '/admin') {
          setActivePage('admin');
        }
      }
    };

    handleUrlCheck();
    window.addEventListener('hashchange', handleUrlCheck);
    return () => window.removeEventListener('hashchange', handleUrlCheck);
  }, []);

  const handleNavClick = (pageId, typeFilter = 'all') => {
    setActivePage(pageId);
    if (pageId === 'plots') {
      setFilterType('Open Plots');
    } else if (pageId === 'villas') {
      setFilterType('Villas');
    } else if (pageId === 'apartments') {
      setFilterType('Apartments');
    } else {
      setFilterType(typeFilter);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F8F5] text-[#1A1A1A] flex flex-col justify-between selection:bg-[#C8A34D] selection:text-[#0B1F3A]">
      <div>
        {/* Sticky Navbar */}
        <Navbar activePage={activePage} setActivePage={handleNavClick} />

        {/* Global Toast Notification */}
        {toastMessage && (
          <div className="fixed top-24 right-6 z-50 bg-[#0B1F3A] border border-[#C8A34D] text-white text-xs font-bold px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 animate-bounce">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C8A34D] animate-ping" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Main View Router */}
        <main className="animate-fadeIn">
          {activePage === 'home' && (
            <HomePage setActivePage={handleNavClick} setSelectedProjectId={setSelectedProjectId} />
          )}

          {(activePage === 'projects' || activePage === 'plots' || activePage === 'villas' || activePage === 'apartments') && (
            <ProjectsPage setActivePage={handleNavClick} setSelectedProjectId={setSelectedProjectId} filterType={filterType} />
          )}

          {activePage === 'dubai' && (
            <DubaiView setActivePage={handleNavClick} setSelectedProjectId={setSelectedProjectId} />
          )}

          {activePage === 'interior' && (
            <InteriorDesignView setActivePage={handleNavClick} />
          )}

          {activePage === 'project-details' && (
            <ProjectDetailsPage projectId={selectedProjectId} setActivePage={handleNavClick} />
          )}

          {activePage === 'about' && <AboutPage setActivePage={handleNavClick} />}

          {activePage === 'contact' && <ContactPage />}

          {activePage === 'privacy' && <PrivacyPolicyPage setActivePage={handleNavClick} />}

          {activePage === 'terms' && <TermsPage setActivePage={handleNavClick} />}

          {activePage === 'disclaimer' && <DisclaimerPage setActivePage={handleNavClick} />}

          {activePage === 'admin' && <AdminPage />}
        </main>
      </div>

      {/* Floating Buttons */}
      <FloatingActions />
      <BookSiteVisitModal />

      {/* Footer */}
      <Footer setActivePage={handleNavClick} />
    </div>
  );
}

export default function Home() {
  return (
    <PlotsProvider>
      <AppContent />
    </PlotsProvider>
  );
}
