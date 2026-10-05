'use client';

import React, { useState } from 'react';
import { Lock, LogOut, PlusCircle, Trash2, Edit3, Grid, Users, ShieldCheck, CheckCircle2, AlertCircle, Eye, Sparkles } from 'lucide-react';
import { usePlots } from '../context/PlotsContext';
import PlotMasterplanViewer from '../components/PlotMasterplanViewer';

export default function AdminPage() {
  const {
    projects, leads, isAdminLoggedIn, loginAdmin, logoutAdmin,
    addProject, deleteProject, updateLeadStatus
  } = usePlots();

  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('add-project');
  const [selectedManageProject, setSelectedManageProject] = useState(projects[0] || null);

  const [newProj, setNewProj] = useState({
    title: '', tagline: '', developer: '',
    location: 'Devanahalli, North Bengaluru', corridorId: 'devanahalli',
    priceRange: '₹4,500 - ₹5,000 per sq.ft', startPrice: 5400000,
    formattedStartPrice: '₹54 Lakhs',
    dimensions: ['30x40 (1200 sq.ft)', '30x50 (1500 sq.ft)'],
    totalPlots: 50, availablePlots: 50,
    reraId: 'PRM/KA/RERA/1250/303/PR/240726/009988',
    approvalType: 'BIAPPA & RERA Approved',
    bankApprovals: ['HDFC Bank', 'SBI Home Loans'],
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Exclusive gated layout offering premium villa plots with underground wiring, 60ft wide roads, and immediate registration.',
    highlights: ['100% Clear Title', '60-Foot Main Blacktopped Roads', 'A-Katha Property'],
    landmarks: [{ name: 'Kempegowda International Airport', distance: '15 mins' }]
  });

  const handleLogin = (e) => {
    e.preventDefault();
    if (!loginAdmin(password)) { alert('Invalid passcode. Hint: Use admin123'); }
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    addProject(newProj);
    setNewProj((prev) => ({ ...prev, title: '', tagline: '' }));
  };

  if (!isAdminLoggedIn) {
    return (
      <div className="max-w-md mx-auto my-20 p-8 bg-white border border-[#e2e8f0] rounded-2xl shadow-lg space-y-6 text-center">
        <div className="w-14 h-14 bg-[#FFC727]/15 text-[#FFC727] rounded-2xl flex items-center justify-center mx-auto border border-[#FFC727]/25">
          <Lock className="w-7 h-7" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-[#0f1d3d] font-heading">Admin Authentication</h2>
          <p className="text-[#718096] text-xs mt-1">
            Only authorized plot admins can list new projects and manage layout availability.
          </p>
        </div>
        <form onSubmit={handleLogin} className="space-y-4 text-left">
          <div>
            <label className="block text-xs font-semibold text-[#4a5568] uppercase mb-1">Enter Admin Passcode</label>
            <input
              type="password" placeholder="Enter passcode (admin123)" value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#f8f9fc] border border-[#e2e8f0] rounded-xl px-4 py-3 text-sm text-[#1a202c] focus:outline-none focus:border-[#FFC727]/50 focus:ring-2 focus:ring-[#FFC727]/10"
              required
            />
          </div>
          <button type="submit" className="btn-gold w-full py-3 text-xs uppercase font-bold tracking-wider">
            Unlock Admin Controls
          </button>
        </form>
        <p className="text-[11px] text-[#a0aec0]">
          🔑 Default Passcode for testing: <code className="text-[#FFC727] font-mono bg-[#FFC727]/10 px-1.5 py-0.5 rounded">admin123</code>
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-gradient-to-r from-[#0f1d3d] to-[#162550] p-6 rounded-2xl">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFC727]/15 border border-[#FFC727]/30 text-[#FFC727] text-xs font-semibold mb-1">
            <Lock className="w-3.5 h-3.5" />
            Admin Portal Active
          </div>
          <h1 className="text-2xl font-bold text-white font-heading">Plot Projects & Inventory Manager</h1>
        </div>
        <button
          onClick={logoutAdmin}
          className="px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-rose-300 text-xs font-semibold hover:bg-white/15 transition-colors flex items-center gap-2"
        >
          <LogOut className="w-4 h-4" />
          Logout Admin
        </button>
      </div>

      {/* Admin Tabs */}
      <div className="flex flex-wrap gap-3 border-b border-[#e2e8f0] pb-3">
        <button
          onClick={() => setActiveTab('add-project')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeTab === 'add-project'
              ? 'bg-[#0f1d3d] text-white shadow-lg'
              : 'bg-[#f0f2f7] text-[#4a5568] border border-[#e2e8f0] hover:text-[#0f1d3d]'
          }`}
        >
          <PlusCircle className="w-4 h-4" />
          List New Plot Project
        </button>

        <button
          onClick={() => setActiveTab('manage-plots')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeTab === 'manage-plots'
              ? 'bg-[#0f1d3d] text-white shadow-lg'
              : 'bg-[#f0f2f7] text-[#4a5568] border border-[#e2e8f0] hover:text-[#0f1d3d]'
          }`}
        >
          <Grid className="w-4 h-4" />
          Manage Masterplans & Status ({projects.length})
        </button>

        <button
          onClick={() => setActiveTab('leads')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeTab === 'leads'
              ? 'bg-[#FFC727] text-white shadow-lg'
              : 'bg-[#f0f2f7] text-[#4a5568] border border-[#e2e8f0] hover:text-[#0f1d3d]'
          }`}
        >
          <Users className="w-4 h-4" />
          Site Visit Bookings / Leads ({leads.length})
        </button>
      </div>

      {/* TAB 1: LIST NEW PLOT PROJECT */}
      {activeTab === 'add-project' && (
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#e2e8f0] shadow-sm space-y-6">
          <div className="border-b border-[#e2e8f0] pb-4">
            <h2 className="text-xl font-bold text-[#0f1d3d] font-heading">Publish New Plot Project Listing</h2>
            <p className="text-xs text-[#718096] mt-1">
              Add verified open plot developments directly into the live website catalog.
            </p>
          </div>

          <form onSubmit={handleAddSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#4a5568] uppercase mb-1">Project Name / Title *</label>
                <input type="text" required placeholder="e.g. Imperial Gardens Villa Plots" value={newProj.title}
                  onChange={(e) => setNewProj({ ...newProj, title: e.target.value })}
                  className="w-full bg-[#f8f9fc] border border-[#e2e8f0] rounded-xl px-4 py-2.5 text-xs text-[#1a202c] focus:outline-none focus:border-[#0f1d3d]/40"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#4a5568] uppercase mb-1">Developer Name *</label>
                <input type="text" required placeholder="e.g. Provident & Sattva Group" value={newProj.developer}
                  onChange={(e) => setNewProj({ ...newProj, developer: e.target.value })}
                  className="w-full bg-[#f8f9fc] border border-[#e2e8f0] rounded-xl px-4 py-2.5 text-xs text-[#1a202c] focus:outline-none focus:border-[#0f1d3d]/40"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#4a5568] uppercase mb-1">Tagline / Highlight Subtitle</label>
              <input type="text" placeholder="e.g. Luxury BIAPPA Approved Plots 10 mins from Airport" value={newProj.tagline}
                onChange={(e) => setNewProj({ ...newProj, tagline: e.target.value })}
                className="w-full bg-[#f8f9fc] border border-[#e2e8f0] rounded-xl px-4 py-2.5 text-xs text-[#1a202c] focus:outline-none focus:border-[#0f1d3d]/40"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#4a5568] uppercase mb-1">Growth Corridor</label>
                <select value={newProj.corridorId} onChange={(e) => setNewProj({ ...newProj, corridorId: e.target.value })}
                  className="w-full bg-[#f8f9fc] border border-[#e2e8f0] rounded-xl px-3 py-2.5 text-xs text-[#4a5568] focus:outline-none focus:border-[#0f1d3d]/40">
                  <option value="devanahalli">North (Airport Corridor)</option>
                  <option value="sarjapur">East (Sarjapur Tech Belt)</option>
                  <option value="yelahanka">North (Yelahanka Bagalur)</option>
                  <option value="whitefield">East (Whitefield Hoskote)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#4a5568] uppercase mb-1">Starting Price Display</label>
                <input type="text" placeholder="e.g. ₹54 Lakhs" value={newProj.formattedStartPrice}
                  onChange={(e) => setNewProj({ ...newProj, formattedStartPrice: e.target.value })}
                  className="w-full bg-[#f8f9fc] border border-[#e2e8f0] rounded-xl px-4 py-2.5 text-xs text-[#1a202c] focus:outline-none focus:border-[#0f1d3d]/40"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#4a5568] uppercase mb-1">RERA Number</label>
                <input type="text" placeholder="PRM/KA/RERA/1250/..." value={newProj.reraId}
                  onChange={(e) => setNewProj({ ...newProj, reraId: e.target.value })}
                  className="w-full bg-[#f8f9fc] border border-[#e2e8f0] rounded-xl px-4 py-2.5 text-xs text-[#1a202c] focus:outline-none focus:border-[#0f1d3d]/40"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#4a5568] uppercase mb-1">Hero Image URL</label>
              <input type="url" placeholder="https://images.unsplash.com/..." value={newProj.heroImage}
                onChange={(e) => setNewProj({ ...newProj, heroImage: e.target.value })}
                className="w-full bg-[#f8f9fc] border border-[#e2e8f0] rounded-xl px-4 py-2.5 text-xs text-[#1a202c] focus:outline-none focus:border-[#0f1d3d]/40"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#4a5568] uppercase mb-1">Detailed Description</label>
              <textarea rows="3" value={newProj.overview}
                onChange={(e) => setNewProj({ ...newProj, overview: e.target.value })}
                className="w-full bg-[#f8f9fc] border border-[#e2e8f0] rounded-xl p-4 text-xs text-[#1a202c] focus:outline-none focus:border-[#0f1d3d]/40"
              />
            </div>

            <button type="submit" className="btn-primary w-full py-3.5 text-xs uppercase font-bold tracking-wider">
              Publish Plot Project Listing
            </button>
          </form>
        </div>
      )}

      {/* TAB 2: MANAGE PLOTS & MASTERPLAN */}
      {activeTab === 'manage-plots' && (
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2 bg-white p-4 rounded-xl border border-[#e2e8f0] items-center shadow-sm">
            <span className="text-xs font-semibold text-[#718096] mr-2">Select Project to View/Manage:</span>
            {projects.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedManageProject(p)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                  selectedManageProject && selectedManageProject.id === p.id
                    ? 'bg-[#0f1d3d] text-white border-[#0f1d3d] font-bold'
                    : 'bg-[#f8f9fc] text-[#4a5568] border-[#e2e8f0]'
                }`}
              >
                {p.title}
              </button>
            ))}
          </div>

          {selectedManageProject && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-[#e2e8f0] flex justify-between items-center shadow-sm">
                <div>
                  <h3 className="text-xl font-bold text-[#0f1d3d] font-heading">{selectedManageProject.title}</h3>
                  <p className="text-xs text-[#718096]">{selectedManageProject.location} • {selectedManageProject.availablePlots} plots available</p>
                </div>
                <button
                  onClick={() => deleteProject(selectedManageProject.id)}
                  className="px-3.5 py-2 rounded-lg bg-rose-50 border border-rose-200 text-rose-500 text-xs font-semibold hover:bg-rose-100 flex items-center gap-1.5"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete Project
                </button>
              </div>

              <PlotMasterplanViewer project={selectedManageProject} />
            </div>
          )}
        </div>
      )}

      {/* TAB 3: LEADS & SITE VISIT SUBMISSIONS */}
      {activeTab === 'leads' && (
        <div className="bg-white p-6 rounded-2xl border border-[#e2e8f0] shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-[#0f1d3d] font-heading">Booked Site Visits & Customer Leads</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-[#4a5568]">
              <thead className="bg-[#f8f9fc] text-[#718096] uppercase text-[10px] border-b border-[#e2e8f0]">
                <tr>
                  <th className="py-3 px-4">Customer Name</th>
                  <th className="py-3 px-4">Contact</th>
                  <th className="py-3 px-4">Project</th>
                  <th className="py-3 px-4">Visit Date & Time</th>
                  <th className="py-3 px-4">Cab Pickup</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2e8f0]">
                {leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-[#f8f9fc]">
                    <td className="py-3.5 px-4 font-bold text-[#0f1d3d]">{lead.name}</td>
                    <td className="py-3.5 px-4">
                      <div>{lead.phone}</div>
                      <div className="text-[#a0aec0] text-[10px]">{lead.email}</div>
                    </td>
                    <td className="py-3.5 px-4 text-[#1e3a6e] font-semibold">{lead.projectTitle}</td>
                    <td className="py-3.5 px-4">
                      <div>{lead.visitDate}</div>
                      <div className="text-[#FFC727] text-[10px]">{lead.visitTime}</div>
                    </td>
                    <td className="py-3.5 px-4">
                      {lead.cabPickup ? (
                        <span className="text-[#FFC727] font-semibold">🚕 Yes ({lead.pickupLocation || 'Home'})</span>
                      ) : (
                        <span className="text-[#a0aec0]">Self Drive</span>
                      )}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#0f1d3d]/8 text-[#1e3a6e] border border-[#0f1d3d]/15">
                        {lead.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <select value={lead.status} onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                        className="bg-[#f8f9fc] border border-[#e2e8f0] rounded px-2 py-1 text-[11px] text-[#4a5568]">
                        <option value="Confirmed">Confirmed</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
