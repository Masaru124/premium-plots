'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_PROJECTS, INITIAL_BLOGS, INITIAL_LEADS, CLIENT_REVIEWS, FEATURED_GROUPS, BENGALURU_CORRIDORS } from '../data/plotsData';

const PlotsContext = createContext();

export function PlotsProvider({ children }) {
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const [blogs, setBlogs] = useState(INITIAL_BLOGS);
  const [leads, setLeads] = useState(INITIAL_LEADS);
  const [groups, setGroups] = useState(FEATURED_GROUPS);
  const [corridors] = useState(BENGALURU_CORRIDORS);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [siteVisitModal, setSiteVisitModal] = useState({ isOpen: false, project: null });
  const [toastMessage, setToastMessage] = useState(null);
  const [isDbConnected, setIsDbConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch from Neon DB API on mount
  useEffect(() => {
    async function fetchFromDatabase() {
      try {
        setIsLoading(true);
        // 1. Fetch Projects
        const projRes = await fetch('/api/projects');
        const projData = await projRes.json();
        if (projData.success && Array.isArray(projData.projects) && projData.projects.length > 0) {
          setProjects(projData.projects);
          setIsDbConnected(true);
        }

        // 2. Fetch Leads
        const leadsRes = await fetch('/api/leads');
        const leadsData = await leadsRes.json();
        if (leadsData.success && Array.isArray(leadsData.leads)) {
          setLeads(leadsData.leads);
        }
      } catch (err) {
        console.error('Error syncing with Neon DB API, using local fallback:', err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchFromDatabase();

    // Check saved admin login
    try {
      const savedAdmin = localStorage.getItem('premium_plots_admin');
      if (savedAdmin === 'true') setIsAdminLoggedIn(true);
    } catch (e) {
      console.error('Error reading admin state', e);
    }
  }, []);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Admin Login Handler
  const loginAdmin = (password) => {
    if (password === 'admin123') {
      setIsAdminLoggedIn(true);
      try {
        localStorage.setItem('premium_plots_admin', 'true');
      } catch (_) {}
      showToast('Welcome Admin! Connected to Neon Cloud Database for project & lead management.');
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminLoggedIn(false);
    try {
      localStorage.removeItem('premium_plots_admin');
    } catch (_) {}
    showToast('Logged out of Admin section.');
  };

  // Add new Plot / Project (Admin only) -> Sync with Neon DB
  const addProject = async (newProjectData) => {
    const slug = newProjectData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const newProject = {
      id: `project-${Date.now()}`,
      slug,
      layoutGrid: Array.from({ length: 24 }, (_, i) => ({
        plotNo: `P-${i + 101}`,
        status: 'available',
        dimension: '30x40 (1200 sq.ft)',
        facing: i % 2 === 0 ? 'East Facing' : 'North Facing',
        sqft: 1200,
        pricePerSqft: 4500,
        totalPrice: 5400000,
        isCorner: (i + 1) % 4 === 0
      })),
      ...newProjectData
    };

    // Optimistic UI update
    setProjects((prev) => [newProject, ...prev]);
    showToast(`Project "${newProject.title}" saved!`);

    try {
      await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProject)
      });
      showToast(`Project "${newProject.title}" persisted to Neon Cloud DB!`);
    } catch (err) {
      console.error('Failed to persist project to Neon DB:', err);
    }

    return newProject;
  };

  // Delete Project (Admin only) -> Sync with Neon DB
  const deleteProject = async (projectId) => {
    setProjects((prev) => prev.filter((p) => p.id !== projectId));
    showToast('Project deleted successfully.');

    try {
      await fetch(`/api/projects?id=${encodeURIComponent(projectId)}`, {
        method: 'DELETE'
      });
    } catch (err) {
      console.error('Failed to delete project from Neon DB:', err);
    }
  };

  // Update Plot Status in Masterplan Layout -> Sync with Neon DB
  const updatePlotStatus = async (projectId, plotNo, newStatus) => {
    let updatedGridToSync = [];
    let updatedAvailableCount = 0;

    setProjects((prev) =>
      prev.map((proj) => {
        if (proj.id === projectId) {
          const updatedGrid = (proj.layoutGrid || []).map((pt) => {
            if (pt.plotNo === plotNo) {
              return { ...pt, status: newStatus };
            }
            return pt;
          });
          const availableCount = updatedGrid.filter((pt) => pt.status === 'available').length;
          updatedGridToSync = updatedGrid;
          updatedAvailableCount = availableCount;

          return {
            ...proj,
            layoutGrid: updatedGrid,
            availablePlots: availableCount
          };
        }
        return proj;
      })
    );

    showToast(`Plot ${plotNo} updated to ${newStatus.toUpperCase()}`);

    try {
      await fetch('/api/projects', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectId,
          layoutGrid: updatedGridToSync,
          availablePlots: updatedAvailableCount
        })
      });
    } catch (err) {
      console.error('Failed to update plot status in Neon DB:', err);
    }
  };

  // Submit Site Visit Request -> Sync with Neon DB
  const bookSiteVisit = async (leadData) => {
    const newLead = {
      id: `lead-${Date.now()}`,
      ...leadData,
      status: 'Confirmed',
      createdAt: new Date().toLocaleString()
    };

    setLeads((prev) => [newLead, ...prev]);
    showToast('Site Visit Booked Successfully! Saved to cloud database.');

    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newLead)
      });
    } catch (err) {
      console.error('Failed to save lead in Neon DB:', err);
    }

    return newLead;
  };

  // Update Lead Status (Admin) -> Sync with Neon DB
  const updateLeadStatus = async (leadId, newStatus) => {
    setLeads((prev) => prev.map((l) => (l.id === leadId ? { ...l, status: newStatus } : l)));
    showToast(`Lead status updated to ${newStatus}`);

    try {
      await fetch('/api/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ leadId, status: newStatus })
      });
    } catch (err) {
      console.error('Failed to update lead status in Neon DB:', err);
    }
  };

  const openSiteVisitModal = (project = null) => {
    setSiteVisitModal({ isOpen: true, project });
  };

  const closeSiteVisitModal = () => {
    setSiteVisitModal({ isOpen: false, project: null });
  };

  return (
    <PlotsContext.Provider
      value={{
        projects,
        blogs,
        leads,
        groups,
        corridors,
        reviews: CLIENT_REVIEWS,
        isAdminLoggedIn,
        isDbConnected,
        isLoading,
        loginAdmin,
        logoutAdmin,
        addProject,
        deleteProject,
        updatePlotStatus,
        bookSiteVisit,
        updateLeadStatus,
        siteVisitModal,
        openSiteVisitModal,
        closeSiteVisitModal,
        toastMessage,
        showToast
      }}
    >
      {children}
    </PlotsContext.Provider>
  );
}

export function usePlots() {
  const context = useContext(PlotsContext);
  if (!context) {
    throw new Error('usePlots must be used within a PlotsProvider');
  }
  return context;
}
