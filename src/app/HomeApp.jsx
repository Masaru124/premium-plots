'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { PlotsProvider, usePlots } from '../context/PlotsContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingActions from '../components/WhatsAppButton';
import BookSiteVisitModal from '../components/BookSiteVisitModal';

import HomePage from '../views/HomePage';
import ProjectsPage from '../views/ProjectsPage';

// Secondary surfaces are split out so a buyer landing on the homepage does not
// download the admin console, the matchmaker or the legal copy.
const ProjectDetailsPage = dynamic(() => import('../views/ProjectDetailsPage'), { ssr: false });
const DubaiView = dynamic(() => import('../views/DubaiView'), { ssr: false });
const InteriorDesignView = dynamic(() => import('../views/InteriorDesignView'), { ssr: false });
const AboutPage = dynamic(() => import('../views/AboutPage'), { ssr: false });
const ContactPage = dynamic(() => import('../views/ContactPage'), { ssr: false });
const AdminPage = dynamic(() => import('../views/AdminPage'), { ssr: false });
const PropertyMatchmakerPage = dynamic(() => import('../views/PropertyMatchmakerPage'), { ssr: false });
const BlogPage = dynamic(() => import('../views/BlogPage'), { ssr: false });
const PrivacyPolicyPage = dynamic(
  () => import('../views/LegalPagesView').then((m) => m.PrivacyPolicyPage),
  { ssr: false }
);
const TermsPage = dynamic(
  () => import('../views/LegalPagesView').then((m) => m.TermsPage),
  { ssr: false }
);
const DisclaimerPage = dynamic(
  () => import('../views/LegalPagesView').then((m) => m.DisclaimerPage),
  { ssr: false }
);

function LoadingSurface() {
  return (
    <div className="shell page-section" aria-busy="true" aria-live="polite">
      <p className="label">Loading</p>
      <div className="mt-6 h-px w-full bg-[var(--rule)]" />
    </div>
  );
}

function AppContent() {
  const [activePage, setActivePage] = useState('home');
  const [selectedProjectId, setSelectedProjectId] = useState('project-oriaiyan-signature-plots');
  const [filterType, setFilterType] = useState('all');
  const { toastMessage } = usePlots();

  // The masthead only needs to know whether the page has left the top. Track a
  // boolean so scrolling does not re-render the tree on every event.
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const next = window.scrollY > 24;
      setIsScrolled((current) => (current === next ? current : next));
    };

    const handleUrlCheck = () => {
      if (typeof window === 'undefined') return;
      const hash = window.location.hash.toLowerCase();
      const search = window.location.search.toLowerCase();
      const pathname = window.location.pathname.toLowerCase();

      if (hash === '#admin' || search.includes('page=admin') || pathname === '/admin') {
        setActivePage('admin');
      } else if (
        hash === '#matchmaker' || hash === '#finder' || hash === '#qna' ||
        search.includes('page=matchmaker') || search.includes('page=finder') || search.includes('page=qna') ||
        pathname === '/matchmaker' || pathname === '/qna' || pathname === '/property-finder'
      ) {
        setActivePage('matchmaker');
      } else if (search.includes('page=')) {
        const params = new URLSearchParams(window.location.search);
        const p = params.get('page');
        const id = params.get('id');
        if (p) {
          setActivePage(p);
          if (p === 'plots' || p === 'villa-plots' || p === 'open-plots') {
            setActivePage('plots');
            setFilterType('Open Plots');
          } else if (p === 'villas' || p === 'luxury-villas') {
            setActivePage('villas');
            setFilterType('Villas');
          } else if (p === 'apartments') {
            setFilterType('Apartments');
          } else if (p === 'dubai') {
            setActivePage('dubai');
            setFilterType('Dubai Apartments');
          }
        }
        if (id) {
          setSelectedProjectId(id);
        }
      }
    };

    handleUrlCheck();
    handleScroll();

    window.addEventListener('hashchange', handleUrlCheck);
    window.addEventListener('popstate', handleUrlCheck);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('hashchange', handleUrlCheck);
      window.removeEventListener('popstate', handleUrlCheck);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (pageId, typeFilter = 'all', projId = null) => {
    setActivePage(pageId);
    const targetProjId = projId || selectedProjectId;
    if (projId) {
      setSelectedProjectId(projId);
    }

    if (typeof window !== 'undefined') {
      if (pageId === 'matchmaker') {
        window.history.pushState(null, '', '/matchmaker');
      } else if (pageId === 'home') {
        window.history.pushState(null, '', '/');
      } else if (pageId === 'plots') {
        window.history.pushState(null, '', '/plots-in-bangalore');
      } else if (pageId === 'villas') {
        window.history.pushState(null, '', '/luxury-villas-bangalore');
      } else if (pageId === 'purva-villa') {
        window.history.pushState(null, '', '/purva-sounds-of-water');
      } else if (pageId === 'project-details') {
        window.history.pushState(null, '', `/?page=project-details&id=${targetProjId}`);
      } else {
        window.history.pushState(null, '', `/?page=${pageId}`);
      }

      // Keep focus navigation inside the routable section of the page so
      // keyboard users never land on the old navbar item after a hash push.
      const routeShell = document.querySelector('[data-hash-route]');
      if (routeShell) {
        routeShell.tabIndex = 0;
        routeShell.focus({ preventScroll: true });
      }
    }

    if (pageId === 'plots' || pageId === 'villa-plots') {
      setFilterType('Open Plots');
    } else if (pageId === 'villas') {
      setFilterType('Villas');
    } else if (pageId === 'apartments') {
      setFilterType('Apartments');
    } else if (pageId === 'dubai') {
      setFilterType('Dubai Apartments');
    } else {
      setFilterType(typeFilter);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-between selection:bg-[#D4AF37] selection:text-[#0B192C] antialiased"
      data-hash-route
    >
      <a
        href="#main-content"
        className="sr-only-focusable fixed left-4 top-4 z-[60] bg-[#0B192C] px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-[#E9C349]"
      >
        Skip to content
      </a>

      <div>
        <Navbar activePage={activePage} setActivePage={handleNavClick} scrollY={isScrolled} />

        {/* Toast */} 
        {toastMessage && (
          <div
            role="status"
            aria-live="polite"
            className="fixed right-4 top-24 z-50 max-w-xs border border-[#D4AF37] bg-[#0B192C] px-4 py-3 text-sm text-white animate-fadeIn"
          >
            <span className="mr-2 inline-block h-1.5 w-1.5 translate-y-[-2px] bg-[#D4AF37]" />
            {toastMessage}
          </div>
        )}

        <main id="main-content" tabIndex={-1} className="animate-fadeIn focus:outline-none">
          {activePage === 'home' && (
            <HomePage setActivePage={handleNavClick} setSelectedProjectId={setSelectedProjectId} />
          )}

          {(activePage === 'projects' || activePage === 'plots' || activePage === 'villa-plots' || activePage === 'villas' || activePage === 'apartments') && (
            <ProjectsPage setActivePage={handleNavClick} setSelectedProjectId={setSelectedProjectId} filterType={filterType} />
          )}

          {activePage === 'dubai' && (
            <DubaiView setActivePage={handleNavClick} setSelectedProjectId={setSelectedProjectId} />
          )}

          {activePage === 'interior' && <InteriorDesignView setActivePage={handleNavClick} />}

          {activePage === 'project-details' && (
            <ProjectDetailsPage projectId={selectedProjectId} setActivePage={handleNavClick} />
          )}

          {activePage === 'about' && <AboutPage setActivePage={handleNavClick} />}

          {activePage === 'blog' && <BlogPage />}

          {(activePage === 'matchmaker' || activePage === 'finder') && (
            <PropertyMatchmakerPage setActivePage={handleNavClick} />
          )}

          {activePage === 'contact' && <ContactPage />}

          {activePage === 'privacy' && <PrivacyPolicyPage setActivePage={handleNavClick} />}
          {activePage === 'terms' && <TermsPage setActivePage={handleNavClick} />}
          {activePage === 'disclaimer' && <DisclaimerPage setActivePage={handleNavClick} />}

          {activePage === 'admin' && <AdminPage />}

          {!['home', 'projects', 'plots', 'villa-plots', 'villas', 'apartments', 'dubai', 'interior',
            'project-details', 'about', 'blog', 'matchmaker', 'finder', 'contact', 'privacy',
            'terms', 'disclaimer', 'admin'].includes(activePage) && <LoadingSurface />}
        </main>
      </div>

      <FloatingActions />
      <BookSiteVisitModal />
      <Footer setActivePage={handleNavClick} />
    </div>
  );
}

export default function HomeApp() {
  return (
    <PlotsProvider>
      <AppContent />
    </PlotsProvider>
  );
}
