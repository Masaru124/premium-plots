'use client';

import React, { useState, useEffect } from 'react';
import { PlotsProvider, usePlots } from '../context/PlotsContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import BookSiteVisitModal from '../components/BookSiteVisitModal';

import HomePage from '../views/HomePage';
import ProjectsPage from '../views/ProjectsPage';
import ProjectDetailsPage from '../views/ProjectDetailsPage';
import WhyInvestPage from '../views/WhyInvestPage';
import AboutPage from '../views/AboutPage';
import BlogPage from '../views/BlogPage';
import ContactPage from '../views/ContactPage';
import AdminPage from '../views/AdminPage';

function AppContent() {
  const [activePage, setActivePage] = useState('home');
  const [selectedProjectId, setSelectedProjectId] = useState('project-1');
  const { toastMessage } = usePlots();

  // Listen for direct URL access via #admin or ?page=admin or /admin
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

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#121824] flex flex-col justify-between selection:bg-[#d4af37] selection:text-white">
      <div>
        {/* Navigation Bar */}
        <Navbar activePage={activePage} setActivePage={setActivePage} />

        {/* Global Toast Notification */}
        {toastMessage && (
          <div className="fixed top-24 right-6 z-50 bg-[#0f1d3d] border border-[#d4af37] text-white text-xs font-bold px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 animate-bounce">
            <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37] animate-ping" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Main View Router */}
        <main className="animate-fadeIn">
          {activePage === 'home' && (
            <HomePage setActivePage={setActivePage} setSelectedProjectId={setSelectedProjectId} />
          )}

          {activePage === 'projects' && (
            <ProjectsPage setActivePage={setActivePage} setSelectedProjectId={setSelectedProjectId} />
          )}

          {activePage === 'project-details' && (
            <ProjectDetailsPage projectId={selectedProjectId} setActivePage={setActivePage} />
          )}

          {activePage === 'why-invest' && <WhyInvestPage />}

          {activePage === 'about' && <AboutPage setActivePage={setActivePage} />}

          {activePage === 'blog' && <BlogPage />}

          {activePage === 'contact' && <ContactPage />}

          {activePage === 'admin' && <AdminPage />}
        </main>
      </div>

      {/* Floating Elements & Modal */}
      <WhatsAppButton />
      <BookSiteVisitModal />

      {/* Footer */}
      <Footer setActivePage={setActivePage} />
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
