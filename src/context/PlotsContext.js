'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_PROJECTS, INITIAL_BLOGS, INITIAL_LEADS, CLIENT_REVIEWS, FEATURED_GROUPS, BENGALURU_CORRIDORS } from '../data/plotsData';

const PlotsContext = createContext();

// The catalogue table can still hold a superseded row from an earlier brand
// name. Keep the newest row per project so the register never prints a
// duplicate entry under two names.
function dedupeProjects(list) {
  const byKey = new Map();
  list.forEach((project) => {
    const base = project.slug || project.title || project.id || '';
    const key = base
      .replace(/tripon/gi, '')
      .replace(/triton/gi, '')
      .replace(/[^a-z0-9]/gi, '')
      .toLowerCase();
    byKey.set(key, project);
  });
  return [...byKey.values()];
}

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

  // Load the published catalogue. Enquiries are personal data and are only
  // requested once this browser holds a valid admin session.
  useEffect(() => {
    async function loadCatalogue() {
      try {
        setIsLoading(true);
        const projRes = await fetch('/api/projects');
        const projData = await projRes.json();
        if (projData.success && Array.isArray(projData.projects) && projData.projects.length > 0) {
          setProjects(dedupeProjects(projData.projects));
          setIsDbConnected(true);
        }
      } catch (err) {
        console.error('Error syncing with the properties API, using local fallback:', err);
      } finally {
        setIsLoading(false);
      }
    }

    async function restoreAdminSession() {
      try {
        const res = await fetch('/api/admin/session');
        const data = await res.json();
        setIsAdminLoggedIn(Boolean(data?.authenticated));
        if (data?.authenticated) await loadLeads();
      } catch (err) {
        // No session endpoint reached: stay signed out rather than assuming access.
        setIsAdminLoggedIn(false);
      }
    }

    loadCatalogue();
    restoreAdminSession();
  }, []);

  async function loadLeads() {
    try {
      const res = await fetch('/api/leads');
      const data = await res.json();
      if (data.success && Array.isArray(data.leads)) setLeads(data.leads);
    } catch (err) {
      console.error('Could not load enquiries:', err);
    }
  }

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Admin authentication is decided by the server session, never by client state.
  const loginAdmin = async (password) => {
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) {
        return { ok: false, error: data.error || 'That passcode is not valid.' };
      }
      setIsAdminLoggedIn(true);
      await loadLeads();
      showToast('Signed in to the portfolio console.');
      return { ok: true };
    } catch (err) {
      return { ok: false, error: 'Could not reach the server. Try again.' };
    }
  };

  const logoutAdmin = async () => {
    try {
      await fetch('/api/admin/session', { method: 'DELETE' });
    } catch (_) {}
    setIsAdminLoggedIn(false);
    setLeads([]);
    showToast('Signed out of the portfolio console.');
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

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newLead)
      });
      showToast(
        res.ok
          ? 'Request saved. Send the WhatsApp message to confirm your slot.'
          : 'Request ready — send the WhatsApp message to confirm your slot.'
      );
    } catch (err) {
      console.error('Failed to save lead:', err);
      showToast('Request ready — send the WhatsApp message to confirm your slot.');
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
        addLead: bookSiteVisit,
        updateLeadStatus,
        siteVisitModal,
        isSiteVisitModalOpen: siteVisitModal.isOpen,
        selectedProjectForModal: siteVisitModal.project,
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
