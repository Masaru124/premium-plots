'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_PROJECTS, INITIAL_BLOGS, INITIAL_LEADS, CLIENT_REVIEWS } from '../data/plotsData';

const PlotsContext = createContext();

export function PlotsProvider({ children }) {
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const [blogs, setBlogs] = useState(INITIAL_BLOGS);
  const [leads, setLeads] = useState(INITIAL_LEADS);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [siteVisitModal, setSiteVisitModal] = useState({ isOpen: false, project: null });
  const [toastMessage, setToastMessage] = useState(null);

  // Load from localStorage on client mount
  useEffect(() => {
    try {
      const savedProjects = localStorage.getItem('premium_plots_projects');
      if (savedProjects) setProjects(JSON.parse(savedProjects));

      const savedLeads = localStorage.getItem('premium_plots_leads');
      if (savedLeads) setLeads(JSON.parse(savedLeads));

      const savedBlogs = localStorage.getItem('premium_plots_blogs');
      if (savedBlogs) setBlogs(JSON.parse(savedBlogs));

      const savedAdmin = localStorage.getItem('premium_plots_admin');
      if (savedAdmin === 'true') setIsAdminLoggedIn(true);
    } catch (e) {
      console.error('Error loading local state', e);
    }
  }, []);

  // Save to localStorage when state updates
  const saveProjectsToStorage = (updatedProjects) => {
    setProjects(updatedProjects);
    localStorage.setItem('premium_plots_projects', JSON.stringify(updatedProjects));
  };

  const saveLeadsToStorage = (updatedLeads) => {
    setLeads(updatedLeads);
    localStorage.setItem('premium_plots_leads', JSON.stringify(updatedLeads));
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Admin Login Handler
  const loginAdmin = (password) => {
    if (password === 'admin123') {
      setIsAdminLoggedIn(true);
      localStorage.setItem('premium_plots_admin', 'true');
      showToast('Welcome Admin! You now have full listing & lead management controls.');
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminLoggedIn(false);
    localStorage.removeItem('premium_plots_admin');
    showToast('Logged out of Admin section.');
  };

  // Add new Plot Project (Admin only)
  const addProject = (newProjectData) => {
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
        pricePerSqft: 4800,
        totalPrice: 5760000,
        isCorner: (i + 1) % 4 === 0
      })),
      ...newProjectData
    };

    const updated = [newProject, ...projects];
    saveProjectsToStorage(updated);
    showToast(`Project "${newProject.title}" successfully published!`);
    return newProject;
  };

  // Delete Project (Admin only)
  const deleteProject = (projectId) => {
    const updated = projects.filter((p) => p.id !== projectId);
    saveProjectsToStorage(updated);
    showToast('Project deleted successfully.');
  };

  // Update Plot Status in Masterplan Layout (Admin only)
  const updatePlotStatus = (projectId, plotNo, newStatus) => {
    const updatedProjects = projects.map((proj) => {
      if (proj.id === projectId) {
        const updatedGrid = proj.layoutGrid.map((pt) => {
          if (pt.plotNo === plotNo) {
            return { ...pt, status: newStatus };
          }
          return pt;
        });
        const availableCount = updatedGrid.filter((pt) => pt.status === 'available').length;
        return {
          ...proj,
          layoutGrid: updatedGrid,
          availablePlots: availableCount
        };
      }
      return proj;
    });

    saveProjectsToStorage(updatedProjects);
    showToast(`Plot ${plotNo} status updated to ${newStatus.toUpperCase()}`);
  };

  // Submit Site Visit Request
  const bookSiteVisit = (leadData) => {
    const newLead = {
      id: `lead-${Date.now()}`,
      ...leadData,
      status: 'Confirmed',
      createdAt: new Date().toLocaleString()
    };
    const updated = [newLead, ...leads];
    saveLeadsToStorage(updated);
    showToast('Site Visit Booked Successfully! VIP pickup details sent via WhatsApp.');
    return newLead;
  };

  // Update Lead Status (Admin)
  const updateLeadStatus = (leadId, newStatus) => {
    const updated = leads.map((l) => (l.id === leadId ? { ...l, status: newStatus } : l));
    saveLeadsToStorage(updated);
    showToast(`Lead status updated to ${newStatus}`);
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
        reviews: CLIENT_REVIEWS,
        isAdminLoggedIn,
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
