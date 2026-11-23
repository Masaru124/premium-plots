'use client';

import React, { useState } from 'react';
import { Lock, LogOut, PlusCircle, Trash2, Database } from 'lucide-react';
import { usePlots } from '../context/PlotsContext';
import PlotMasterplanViewer from '../components/PlotMasterplanViewer';
import { FEATURED_GROUPS, BENGALURU_CORRIDORS } from '../data/plotsData';

const FIELD =
  'min-h-11 w-full bg-[#EFEEE8] px-3.5 text-[16px] text-[#1A1A1A] placeholder:text-[#5F5F5F] focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]';
const LABEL = 'mb-1.5 block text-[14px] text-[#4C4C4C]';

export default function AdminPage() {
  const {
    projects, leads, isAdminLoggedIn, isDbConnected, loginAdmin, logoutAdmin,
    addProject, deleteProject, updateLeadStatus, showToast
  } = usePlots();

  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
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

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    setIsSigningIn(true);
    const result = await loginAdmin(password);
    setIsSigningIn(false);
    if (!result?.ok) {
      setLoginError(result?.error || 'Sign-in failed.');
      return;
    }
    setPassword('');
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!newProj.title.trim()) {
      showToast('Enter a project title before saving.');
      return;
    }
    addProject(newProj);
    setNewProj((prev) => ({ ...prev, title: '', tagline: '' }));
  };

  if (!isAdminLoggedIn) {
    return (
      <div className="shell page-section max-w-[460px] pt-16">
        <Lock className="h-5 w-5 text-[#7A5C10]" aria-hidden="true" />
        <h1 className="mt-4 display-md text-[#0B1F3A]">Portfolio console</h1>
        <p className="mt-3 text-[17px] leading-relaxed text-[var(--text-soft)]">
          Project inventory and buyer enquiries. Access is limited to the advisory team.
        </p>

        <form onSubmit={handleLogin} className="mt-8">
          <label htmlFor="admin-password" className={LABEL}>
            Team passcode
          </label>
          <input
            id="admin-password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-describedby={loginError ? 'admin-login-error' : undefined}
            className={FIELD}
            required
          />

          {loginError && (
            <p id="admin-login-error" role="alert" className="mt-4 bg-[#C8A34D]/15 px-3 py-2 text-[15px] text-[#7A5C10]">
              {loginError}
            </p>
          )}

          <button type="submit" disabled={isSigningIn} className="btn-gold mt-5 w-full disabled:opacity-60">
            {isSigningIn ? 'Signing in…' : 'Sign in'}
          </button>

          <p className="mt-5 flex items-center gap-2 text-[14px] text-[var(--text-soft)]">
            <Database className="h-3.5 w-3.5" aria-hidden="true" />
            Neon Postgres · session held server-side
          </p>
        </form>
      </div>
    );
  }

  return (
    <div className="shell page-section pt-10">
      {/* ------------------------------------------------------------ head */}
      <div className="flex flex-col gap-5 pb-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[14px] text-[#7A5C10]">
            Advisory console · {isDbConnected ? 'database live' : 'database ready'}
          </p>
          <h1 className="mt-2 display-md text-[#0B1F3A]">Portfolio and enquiries</h1>
        </div>
        <button type="button" onClick={logoutAdmin} className="btn-quiet w-fit">
          <LogOut className="h-4 w-4" aria-hidden="true" />
          Sign out
        </button>
      </div>

      {/* ------------------------------------------------------------ tabs */}
      <div role="tablist" aria-label="Console sections" className="mt-6 flex flex-wrap gap-x-7 gap-y-2">
        {[
          ['add-project', 'Publish a project'],
          ['manage-projects', `Catalogue (${projects.length})`],
          ['leads', `Enquiries (${leads.length})`]
        ].map(([id, label]) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={activeTab === id}
            onClick={() => setActiveTab(id)}
            className={`min-h-11 text-[16px] transition-colors ${
              activeTab === id
                ? 'text-[#0B1F3A] underline decoration-[#C8A34D] decoration-2 underline-offset-8'
                : 'text-[var(--text-soft)] hover:text-[#0B1F3A]'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* ------------------------------------------------------- add project */}
      {activeTab === 'add-project' && (
        <div className="mt-10">
          <h2 className="font-heading text-[1.5rem] text-[#0B1F3A]">Publish to the register</h2>
          <p className="mt-2 max-w-[58ch] text-[16px] leading-relaxed text-[var(--text-soft)]">
            New projects sync to Neon Postgres and appear on the home and register pages.
          </p>

          <form onSubmit={handleAddSubmit} className="mt-8 grid gap-6 md:grid-cols-3">
            <div>
              <label htmlFor="admin-title" className={LABEL}>Project title</label>
              <input
                id="admin-title"
                type="text"
                required
                placeholder="Oriaiyan Signature Villa Plots, Kolar"
                value={newProj.title}
                onChange={(e) => setNewProj({ ...newProj, title: e.target.value })}
                className={FIELD}
              />
            </div>

            <div>
              <label htmlFor="admin-group" className={LABEL}>Developer</label>
              <select
                id="admin-group"
                value={newProj.groupName}
                onChange={(e) => setNewProj({ ...newProj, groupName: e.target.value, developer: e.target.value })}
                className={`${FIELD} cursor-pointer`}
              >
                {FEATURED_GROUPS.map((g) => (
                  <option key={g.id} value={g.name}>{g.name}</option>
                ))}
                <option value="Independent Developer">Independent developer</option>
              </select>
            </div>

            <div>
              <label htmlFor="admin-type" className={LABEL}>Category</label>
              <select
                id="admin-type"
                value={newProj.propertyType}
                onChange={(e) => setNewProj({ ...newProj, propertyType: e.target.value })}
                className={`${FIELD} cursor-pointer`}
              >
                <option value="Open Plots">Open plots</option>
                <option value="Villa Plots">Villa plots</option>
                <option value="Apartments">Apartments</option>
                <option value="Villas">Luxury villas</option>
                <option value="Dubai Apartments">Dubai apartments</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="admin-location" className={LABEL}>Location</label>
              <input
                id="admin-location"
                type="text"
                required
                placeholder="Kolar, Chikkaballapura, APC Circle, Jigani…"
                value={newProj.location}
                onChange={(e) => setNewProj({ ...newProj, location: e.target.value })}
                className={FIELD}
              />
            </div>

            <div>
              <label htmlFor="admin-corridor" className={LABEL}>Corridor</label>
              <select
                id="admin-corridor"
                value={newProj.corridorId}
                onChange={(e) => setNewProj({ ...newProj, corridorId: e.target.value })}
                className={`${FIELD} cursor-pointer`}
              >
                {BENGALURU_CORRIDORS.filter((c) => c.id !== 'all-corridors').map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="admin-price" className={LABEL}>Price range shown</label>
              <input
                id="admin-price"
                type="text"
                required
                placeholder="₹50 Lakhs - ₹2.0 Crore"
                value={newProj.priceRange}
                onChange={(e) => setNewProj({ ...newProj, priceRange: e.target.value })}
                className={FIELD}
              />
            </div>

            <div>
              <label htmlFor="admin-start" className={LABEL}>Start price, rupees</label>
              <input
                id="admin-start"
                type="number"
                required
                placeholder="5000000"
                value={newProj.startPrice}
                onChange={(e) => setNewProj({ ...newProj, startPrice: Number(e.target.value) })}
                className={FIELD}
              />
            </div>

            <div>
              <label htmlFor="admin-image" className={LABEL}>Hero image URL</label>
              <input
                id="admin-image"
                type="text"
                value={newProj.heroImage}
                onChange={(e) => setNewProj({ ...newProj, heroImage: e.target.value })}
                className={FIELD}
              />
            </div>

            <div className="md:col-span-3">
              <label htmlFor="admin-overview" className={LABEL}>Overview</label>
              <textarea
                id="admin-overview"
                rows={3}
                required
                value={newProj.overview}
                onChange={(e) => setNewProj({ ...newProj, overview: e.target.value })}
                className={FIELD}
              />
            </div>

            <div className="md:col-span-3">
              <button type="submit" className="btn-gold">
                <PlusCircle className="h-4 w-4" aria-hidden="true" />
                Publish to the database
              </button>
            </div>
          </form>
        </div>
      )}

      {/* --------------------------------------------------- manage projects */}
      {activeTab === 'manage-projects' && (
        <div className="mt-10 space-y-10">
          <ul className="grid gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((proj) => (
              <li key={proj.id} className="bg-white px-5 py-5">
                <p className="label">
                  {proj.propertyType}
                  {proj.groupName ? ` · ${proj.groupName}` : ''}
                </p>
                <h2 className="mt-1 font-heading text-[1.25rem] leading-snug text-[#0B1F3A]">
                  {proj.title}
                </h2>
                <p className="mt-1 text-[15px] text-[var(--text-soft)]">{proj.location}</p>
                <p className="mt-2 text-[15px] text-[#1A1A1A] figures">{proj.priceRange}</p>

                <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px]">
                  <button
                    type="button"
                    onClick={() => setSelectedManageProject(proj)}
                    className="min-h-11 text-[#0B1F3A] underline decoration-[#C8A34D] decoration-2 underline-offset-4"
                  >
                    Manage the masterplan
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (confirm(`Delete project "${proj.title}" from Neon DB?`)) {
                        deleteProject(proj.id);
                      }
                    }}
                    className="inline-flex min-h-11 items-center gap-1.5 text-[#8A2B2B] underline decoration-[#8A2B2B]/40 underline-offset-4"
                  >
                    <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {selectedManageProject && (
            <div className="pt-2">
              <h2 className="font-heading text-[1.5rem] text-[#0B1F3A]">
                Availability · {selectedManageProject.title}
              </h2>
              <p className="mt-2 max-w-[58ch] text-[16px] leading-relaxed text-[var(--text-soft)]">
                Select a unit to move it between available, reserved and sold. Changes save
                immediately.
              </p>
              <div className="mt-6">
                <PlotMasterplanViewer project={selectedManageProject} isAdminMode={true} />
              </div>
            </div>
          )}
        </div>
      )}

      {/* ------------------------------------------------------------ leads */}
      {activeTab === 'leads' && (
        <div className="mt-10">
          <h2 className="font-heading text-[1.5rem] text-[#0B1F3A]">Site visit bookings</h2>
          <p className="mt-2 text-[16px] text-[var(--text-soft)]">
            {leads.length} records, stored in Neon Postgres.
          </p>

          {leads.length === 0 ? (
            <p className="mt-8 max-w-[46ch] text-[17px] leading-relaxed text-[var(--text-soft)]">
              No client enquiries recorded yet.
            </p>
          ) : (
            <div className="mt-8 overflow-x-auto">
              <table data-ui className="w-full min-w-[860px] border-collapse text-left text-[15px]">
                <thead>
                  <tr data-ui className="border-b border-[#0B1F3A]">
                    {['Client', 'Contact', 'Project', 'Visit', 'Pickup', 'Status'].map((h) => (
                      <th key={h} scope="col" className="py-3 pr-5 font-normal text-[var(--text-soft)]">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {leads.map((l) => (
                    <tr key={l.id} data-ui className="border-b border-[var(--rule)] align-top">
                      <td className="py-3.5 pr-5 text-[#0B1F3A]">{l.name}</td>
                      <td className="py-3.5 pr-5 text-[#1A1A1A]">
                        <span className="block figures">{l.phone}</span>
                        {l.email && <span className="block text-[14px] text-[var(--text-soft)]">{l.email}</span>}
                      </td>
                      <td className="py-3.5 pr-5 text-[#1A1A1A]">{l.projectTitle}</td>
                      <td className="py-3.5 pr-5 text-[#1A1A1A] figures">
                        {l.visitDate} · {l.visitTime}
                      </td>
                      <td className="py-3.5 pr-5 text-[#1A1A1A]">
                        {l.cabPickup ? `Cab: ${l.pickupLocation || 'Airport'}` : 'Self drive'}
                      </td>
                      <td className="py-3.5 pr-5">
                        <label htmlFor={`lead-status-${l.id}`} className="sr-only">
                          Status for {l.name}
                        </label>
                        <select
                          id={`lead-status-${l.id}`}
                          value={l.status}
                          onChange={(e) => updateLeadStatus(l.id, e.target.value)}
                          className="min-h-10 bg-[#EFEEE8] px-2 text-[15px] text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]"
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
