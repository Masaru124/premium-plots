'use client';

import React, { useState } from 'react';
import { Lock, LogOut, PlusCircle, Trash2, Edit3, Grid, Users, ShieldCheck, CheckCircle2, AlertCircle, Eye, Sparkles, Database, Building2 } from 'lucide-react';
import { usePlots } from '../context/PlotsContext';
import PlotMasterplanViewer from '../components/PlotMasterplanViewer';
import { FEATURED_GROUPS, BENGALURU_CORRIDORS } from '../data/plotsData';

export default function AdminPage() {
  const {
    projects, leads, isAdminLoggedIn, isDbConnected, loginAdmin, logoutAdmin,
    addProject, deleteProject, updateLeadStatus
  } = usePlots();

  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('add-project');
  const [selectedManageProject, setSelectedManageProject] = useState(projects[0] || null);

  const [newProj, setNewProj] = useState({
    title: '',
    groupName: 'Orian Group',
    propertyType: 'Open Plots',
    tagline: '',
    developer: 'Orian Group',
    location: 'Chikkaballapura & STRR Corridor',
    corridorId: 'chikkaballapura-nandi',
    priceRange: '₹50 Lakhs - ₹95 Lakhs',
    startPrice: 5000000,
    formattedStartPrice: '₹50.0 Lakhs',
    dimensions: ['1200 sq.ft (30x40)', '1500 sq.ft (30x50)', '2400 sq.ft (40x60)'],
    totalPlots: 80,
    availablePlots: 65,
    reraId: 'PRM/KA/RERA/1250/303/PR/250112/008890',
    approvalType: 'RERA & Local Town Planning Approved',
    bankApprovals: ['HDFC Bank', 'SBI Home Loans', 'ICICI Bank'],
    heroImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Exclusive verified plotted layout with underground wiring, blacktopped roads, and immediate registration.',
    highlights: ['100% Clear Title', '60-Foot Main Blacktopped Roads', 'A-Khata Property'],
    landmarks: [{ name: 'Chikkaballapura Town & STRR Interchange', distance: '8 mins' }]
  });

  const handleLogin = (e) => {
    e.preventDefault();
    if (!loginAdmin(password)) { alert('Invalid passcode. Hint: Use admin123'); }
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!newProj.title.trim()) {
      alert('Please enter a project title.');
      return;
    }
    addProject(newProj);
    setNewProj((prev) => ({ ...prev, title: '', tagline: '' }));
  };

  if (!isAdminLoggedIn) {
    return (
      <div className="max-w-md mx-auto my-20 p-8 bg-white border border-[#0B1F3A]/15 rounded-2xl shadow-lg space-y-6 text-center">
        <div className="w-14 h-14 bg-[#0B1F3A]/10 text-[#C8A34D] rounded-2xl flex items-center justify-center mx-auto border border-[#C8A34D]/30">
          <Lock className="w-7 h-7" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-[#0B1F3A] font-heading">Admin Authentication</h2>
          <p className="text-slate-500 text-xs mt-1">
            Access real-time project inventory and lead management powered by Neon Postgres.
          </p>
        </div>
        <form onSubmit={handleLogin} className="space-y-4 text-left">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Enter Admin Passcode</label>
            <input
              type="password"
              placeholder="Enter passcode (admin123)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#F8F8F5] border border-slate-300 rounded-xl px-4 py-3 text-sm text-[#0B1F3A] focus:outline-none focus:border-[#0B1F3A] focus:ring-2 focus:ring-[#0B1F3A]/10"
              required
            />
          </div>
          <button type="submit" className="btn-gold w-full py-3 text-xs uppercase font-bold tracking-wider cursor-pointer">
            Unlock Admin Controls
          </button>
        </form>
        <div className="pt-2 text-[11px] text-slate-400 space-y-1">
          <p>🔑 Default Passcode: <code className="text-[#C8A34D] font-mono bg-[#0B1F3A]/5 px-1.5 py-0.5 rounded font-bold">admin123</code></p>
          <p className="text-[10px] text-emerald-700 font-semibold flex items-center justify-center gap-1">
            <Database className="w-3 h-3 text-emerald-600" /> Neon Cloud Database Ready
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#0B1F3A] text-white p-6 rounded-2xl border border-[#C8A34D]/30 shadow-lg">
        <div>
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C8A34D]/20 border border-[#C8A34D]/40 text-[#C8A34D] text-xs font-semibold">
              <Lock className="w-3.5 h-3.5" />
              Admin Portal Active
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold">
              <Database className="w-3.5 h-3.5 text-emerald-400" />
              {isDbConnected ? 'Neon Cloud DB: Live' : 'Database Ready'}
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white font-heading mt-2">
            Lakshie Real Estate • Portfolio & Leads Console
          </h1>
        </div>
        <button
          onClick={logoutAdmin}
          className="px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-rose-300 text-xs font-semibold hover:bg-white/15 transition-colors flex items-center gap-2 cursor-pointer"
        >
          <LogOut className="w-4 h-4" />
          Logout Admin
        </button>
      </div>

      {/* Tabs Switcher */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveTab('add-project')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'add-project'
              ? 'bg-[#0B1F3A] text-[#C8A34D] shadow-md border border-[#C8A34D]/40'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <PlusCircle className="w-4 h-4" />
          Publish New Project
        </button>

        <button
          onClick={() => setActiveTab('manage-projects')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'manage-projects'
              ? 'bg-[#0B1F3A] text-[#C8A34D] shadow-md border border-[#C8A34D]/40'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <Grid className="w-4 h-4" />
          Manage Catalog & Plots ({projects.length})
        </button>

        <button
          onClick={() => setActiveTab('leads')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'leads'
              ? 'bg-[#0B1F3A] text-[#C8A34D] shadow-md border border-[#C8A34D]/40'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <Users className="w-4 h-4" />
          Client Site Visit Leads ({leads.length})
        </button>
      </div>

      {/* TAB 1: ADD NEW PROJECT */}
      {activeTab === 'add-project' && (
        <div className="glass-card p-8 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-[#0B1F3A] font-heading">Publish Verified Development to Cloud DB</h2>
            <p className="text-xs text-slate-500">
              New projects will automatically sync to Neon Postgres and appear on the Home and Projects pages.
            </p>
          </div>

          <form onSubmit={handleAddSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Project Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Oriaiyan Signature Villa Plots - Kolar"
                  value={newProj.title}
                  onChange={(e) => setNewProj({ ...newProj, title: e.target.value })}
                  className="w-full bg-[#F8F8F5] border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-[#0B1F3A] focus:border-[#0B1F3A] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Developer Group / Company *</label>
                <select
                  value={newProj.groupName}
                  onChange={(e) => setNewProj({ ...newProj, groupName: e.target.value, developer: e.target.value })}
                  className="w-full bg-[#F8F8F5] border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-[#0B1F3A] focus:border-[#0B1F3A] focus:outline-none cursor-pointer"
                >
                  {FEATURED_GROUPS.map((g) => (
                    <option key={g.id} value={g.name}>{g.name}</option>
                  ))}
                  <option value="Independent Developer">Independent Developer</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Property Category *</label>
                <select
                  value={newProj.propertyType}
                  onChange={(e) => setNewProj({ ...newProj, propertyType: e.target.value })}
                  className="w-full bg-[#F8F8F5] border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-[#0B1F3A] focus:border-[#0B1F3A] focus:outline-none cursor-pointer"
                >
                  <option value="Open Plots">Open Plots</option>
                  <option value="Villa Plots">Villa Plots</option>
                  <option value="Apartments">Apartments</option>
                  <option value="Villas">Luxury Villas</option>
                  <option value="Dubai Apartments">Dubai Apartments</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Location Details *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Kolar, Chikkaballapura, APC Circle, Jigani..."
                  value={newProj.location}
                  onChange={(e) => setNewProj({ ...newProj, location: e.target.value })}
                  className="w-full bg-[#F8F8F5] border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-[#0B1F3A] focus:border-[#0B1F3A] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Corridor Mapping *</label>
                <select
                  value={newProj.corridorId}
                  onChange={(e) => setNewProj({ ...newProj, corridorId: e.target.value })}
                  className="w-full bg-[#F8F8F5] border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-[#0B1F3A] focus:border-[#0B1F3A] focus:outline-none cursor-pointer"
                >
                  {BENGALURU_CORRIDORS.filter(c => c.id !== 'all-corridors').map((c) => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Price Range Display *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. ₹50 Lakhs - ₹2.0 Crore"
                  value={newProj.priceRange}
                  onChange={(e) => setNewProj({ ...newProj, priceRange: e.target.value })}
                  className="w-full bg-[#F8F8F5] border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-[#0B1F3A] focus:border-[#0B1F3A] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Start Price (Numbers for Filter) *</label>
                <input
                  type="number"
                  required
                  placeholder="5000000"
                  value={newProj.startPrice}
                  onChange={(e) => setNewProj({ ...newProj, startPrice: Number(e.target.value) })}
                  className="w-full bg-[#F8F8F5] border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-[#0B1F3A] focus:border-[#0B1F3A] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Hero Image URL</label>
                <input
                  type="text"
                  value={newProj.heroImage}
                  onChange={(e) => setNewProj({ ...newProj, heroImage: e.target.value })}
                  className="w-full bg-[#F8F8F5] border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-[#0B1F3A] focus:border-[#0B1F3A] focus:outline-none"
                />
              </div>

            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Project Overview & Description *</label>
              <textarea
                rows={3}
                required
                value={newProj.overview}
                onChange={(e) => setNewProj({ ...newProj, overview: e.target.value })}
                className="w-full bg-[#F8F8F5] border border-slate-300 rounded-xl p-4 text-xs text-[#0B1F3A] focus:border-[#0B1F3A] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="btn-gold py-3.5 px-8 text-xs uppercase font-extrabold flex items-center gap-2 cursor-pointer shadow-md"
            >
              <PlusCircle className="w-4 h-4 text-[#0B1F3A]" />
              <span>Publish & Save to Neon Database</span>
            </button>
          </form>
        </div>
      )}

      {/* TAB 2: MANAGE PROJECTS */}
      {activeTab === 'manage-projects' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj) => (
              <div key={proj.id} className="glass-card p-6 bg-white border border-slate-200 rounded-2xl space-y-4 shadow-sm flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-[#0B1F3A]/5 text-[#0B1F3A] border border-[#0B1F3A]/10">
                      {proj.propertyType}
                    </span>
                    {proj.groupName && (
                      <span className="text-[10px] font-bold text-[#C8A34D] bg-[#0B1F3A] px-2 py-0.5 rounded">
                        {proj.groupName}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-[#0B1F3A] font-heading">{proj.title}</h3>
                  <p className="text-xs text-slate-500 line-clamp-1">📍 {proj.location}</p>
                  <p className="text-xs font-bold text-[#0B1F3A]">{proj.priceRange}</p>
                </div>

                <div className="flex items-center justify-between gap-2 pt-3 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedManageProject(proj)}
                    className="text-xs font-bold text-[#0B1F3A] hover:text-[#C8A34D] flex items-center gap-1 cursor-pointer"
                  >
                    <Grid className="w-3.5 h-3.5" />
                    <span>Manage Masterplan</span>
                  </button>

                  <button
                    onClick={() => {
                      if (confirm(`Delete project "${proj.title}" from Neon DB?`)) {
                        deleteProject(proj.id);
                      }
                    }}
                    className="text-xs text-rose-600 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Masterplan Layout Grid Tool */}
          {selectedManageProject && (
            <div className="mt-8 p-8 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#0B1F3A] font-heading">
                    Live Plot Availability Manager: {selectedManageProject.title}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Click on any plot unit to toggle between Available, Reserved, and Booked. Changes save instantly.
                  </p>
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full">
                  {selectedManageProject.availablePlots} Plots Available
                </span>
              </div>

              <PlotMasterplanViewer project={selectedManageProject} isAdminMode={true} />
            </div>
          )}
        </div>
      )}

      {/* TAB 3: LEADS CONSOLE */}
      {activeTab === 'leads' && (
        <div className="glass-card p-8 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-[#0B1F3A] font-heading">Site Visit Bookings & Client Inquiries</h2>
              <p className="text-xs text-slate-500">
                All client site tour reservations stored securely in Neon PostgreSQL.
              </p>
            </div>
            <span className="text-xs font-bold px-3 py-1 bg-[#0B1F3A] text-[#C8A34D] rounded-full">
              {leads.length} Active Records
            </span>
          </div>

          {leads.length === 0 ? (
            <div className="p-8 text-center text-slate-400 text-xs">No client inquiries recorded yet.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-slate-600 font-bold uppercase">
                    <th className="p-3">Client Name</th>
                    <th className="p-3">Contact</th>
                    <th className="p-3">Interested Project</th>
                    <th className="p-3">Visit Date & Time</th>
                    <th className="p-3">VIP Pickup</th>
                    <th className="p-3">Status</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {leads.map((l) => (
                    <tr key={l.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-3 font-bold text-[#0B1F3A]">{l.name}</td>
                      <td className="p-3">
                        <div>{l.phone}</div>
                        {l.email && <div className="text-[11px] text-slate-400">{l.email}</div>}
                      </td>
                      <td className="p-3 font-medium text-slate-700">{l.projectTitle}</td>
                      <td className="p-3 text-slate-600">{l.visitDate} • {l.visitTime}</td>
                      <td className="p-3">
                        {l.cabPickup ? (
                          <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded text-[10px] font-bold">
                            🚗 VIP Cab: {l.pickupLocation || 'Airport'}
                          </span>
                        ) : (
                          <span className="text-slate-400 text-[10px]">Self Drive</span>
                        )}
                      </td>
                      <td className="p-3">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          l.status === 'Confirmed'
                            ? 'bg-emerald-100 text-emerald-800'
                            : l.status === 'Completed'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {l.status}
                        </span>
                      </td>
                      <td className="p-3 text-right space-x-2">
                        <select
                          value={l.status}
                          onChange={(e) => updateLeadStatus(l.id, e.target.value)}
                          className="px-2 py-1 bg-white border border-slate-300 rounded text-[11px] cursor-pointer"
                        >
                          <option value="Confirmed">Confirmed</option>
                          <option value="Completed">Completed</option>
                          <option value="Follow-up">Follow-up</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
