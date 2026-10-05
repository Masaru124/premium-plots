'use client';

import React, { useState } from 'react';
import { Grid, Compass, CheckCircle2, AlertCircle, XCircle, Lock, Calendar, Tag, ShieldCheck, Sparkles, MapPin, Eye, MessageCircle } from 'lucide-react';
import { usePlots } from '../context/PlotsContext';

export default function PlotMasterplanViewer({ project }) {
  const { openSiteVisitModal, isAdminLoggedIn, updatePlotStatus } = usePlots();

  const layoutGrid = project?.layoutGrid || [];
  const [selectedPlot, setSelectedPlot] = useState(layoutGrid[0] || null);
  const whatsappNumber = '918431909508';
  const displayPhone = '+91 84319 09508';

  const availableCount = layoutGrid.filter((pt) => pt.status === 'available').length;
  const reservedCount = layoutGrid.filter((pt) => pt.status === 'reserved').length;
  const soldCount = layoutGrid.filter((pt) => pt.status === 'sold').length;

  const handleStatusChange = (plotNo, newStatus) => {
    if (project?.id) {
      updatePlotStatus(project.id, plotNo, newStatus);
    }
    if (selectedPlot && selectedPlot.plotNo === plotNo) {
      setSelectedPlot({ ...selectedPlot, status: newStatus });
    }
  };

  if (layoutGrid.length === 0) {
    return (
      <div className="bg-white border border-[#0B1F3A]/10 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4 text-center">
        <div className="w-12 h-12 rounded-xl bg-[#0B1F3A] text-[#C8A34D] flex items-center justify-center font-bold mx-auto">
          <Grid className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-[#0B1F3A] font-heading">{project?.title || 'Project'} Masterplan</h3>
        <p className="text-xs text-[#555555]">
          Architectural layout blueprints & unit availability maps for {project?.title} are available upon request.
        </p>
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi! Please send me the layout map for ${project?.title}.`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold text-xs py-3 px-6 inline-flex cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 fill-[#0B1F3A]" />
          Request Layout Blueprint on WhatsApp ({displayPhone})
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#0B1F3A]/10 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#C8A34D]/5 rounded-full blur-3xl -z-0 pointer-events-none" />

      {/* Header Bar */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-b border-[#0B1F3A]/10 pb-5 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1F3A]/8 border border-[#0B1F3A]/15 text-[#0B1F3A] text-xs font-bold uppercase tracking-wider mb-2">
            <Grid className="w-3.5 h-3.5 text-[#C8A34D]" />
            Interactive Masterplan & Layout Blueprint
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight font-heading">
            Select Your Ideal Plot / Unit
          </h3>
          <p className="text-xs text-[#555555] mt-1">
            Click any plot unit below to check real-time availability, Vastu orientation, dimension & total cost breakdown.
          </p>
        </div>

        {/* Legend Counters */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-bold bg-[#F8F8F5] p-3 rounded-xl border border-[#0B1F3A]/10">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-[#0B1F3A]/10 text-[#0B1F3A]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0B1F3A]" />
            <span>Available ({availableCount})</span>
          </div>
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-[#C8A34D]/20 text-[#0B1F3A]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C8A34D]" />
            <span>Reserved ({reservedCount})</span>
          </div>
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-rose-50 text-rose-600">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
            <span>Sold ({soldCount})</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch relative z-10">
        {/* Visual Layout Canvas */}
        <div className="lg:col-span-7 bg-[#F8F8F5] p-4 sm:p-6 rounded-2xl border border-[#0B1F3A]/10 space-y-4 relative flex flex-col justify-between">
          <div className="flex flex-wrap justify-between items-center gap-2 text-[11px] font-semibold text-[#555555] border-b border-[#0B1F3A]/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C8A34D]" />
              <span className="text-[11px] sm:text-xs">60-Foot Blacktopped Boulevard</span>
            </div>
            <span className="text-[#0B1F3A] font-bold bg-[#0B1F3A]/10 px-2.5 py-0.5 rounded border border-[#0B1F3A]/20 text-[10px] sm:text-[11px]">
              100% Vastu Orientations
            </span>
          </div>

          <div className="relative bg-white p-3.5 rounded-xl border border-[#0B1F3A]/10 flex flex-wrap items-center justify-between gap-2 text-xs text-[#555555]">
            <div className="flex items-center gap-2 font-semibold">
              <MapPin className="w-4 h-4 text-[#C8A34D] shrink-0" />
              <span className="text-[11px] sm:text-xs">Gated Boundary</span>
            </div>
            <div className="flex items-center gap-2.5 text-[10px] sm:text-[11px] text-[#C8A34D] font-bold flex-wrap">
              <span>🌳 Park Zone</span>
              <span>🏊 Clubhouse</span>
            </div>
          </div>

          {/* Interactive Plot Grid Matrix */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 max-h-[380px] overflow-y-auto p-1">
            {layoutGrid.map((pt) => {
              const isSelected = selectedPlot && selectedPlot.plotNo === pt.plotNo;

              let styleClasses = 'bg-[#0B1F3A]/10 border-[#0B1F3A]/20 text-[#0B1F3A] hover:bg-[#0B1F3A]/20';
              if (pt.status === 'reserved') {
                styleClasses = 'bg-[#C8A34D]/20 border-[#C8A34D]/40 text-[#0B1F3A] hover:bg-[#C8A34D]/30';
              } else if (pt.status === 'sold') {
                styleClasses = 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed opacity-50';
              }

              return (
                <button
                  key={pt.plotNo}
                  onClick={() => setSelectedPlot(pt)}
                  className={`p-2.5 rounded-xl border flex flex-col items-center justify-center transition-all duration-200 relative group cursor-pointer ${styleClasses} ${
                    isSelected ? 'ring-2 ring-[#C8A34D] bg-[#C8A34D] text-[#0B1F3A] font-extrabold scale-105 shadow-md z-20' : ''
                  }`}
                >
                  <span className="text-xs font-bold tracking-tight">{pt.plotNo}</span>
                  <span className="text-[9px] sm:text-[10px] opacity-80 mt-0.5 font-medium">{pt.dimension.split(' ')[0]}</span>

                  {pt.isCorner && (
                    <span className="mt-1 text-[8px] bg-[#C8A34D] text-[#0B1F3A] font-extrabold px-1 py-0.2 rounded shadow">
                      CORNER
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Plot Specifications Card */}
        <div className="lg:col-span-5 bg-[#0B1F3A] text-white p-5 sm:p-6 rounded-2xl shadow-xl space-y-4 border border-[#C8A34D]/30 flex flex-col justify-between">
          {selectedPlot ? (
            <div className="space-y-4 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="flex justify-between items-start border-b border-white/15 pb-3">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider mb-1 text-[#C8A34D] bg-[#C8A34D]/20 border border-[#C8A34D]/40">
                      Unit #{selectedPlot.plotNo}
                    </div>
                    <h4 className="text-xl sm:text-2xl font-extrabold text-white font-heading">{selectedPlot.dimension}</h4>
                    <p className="text-xs text-white/70 mt-0.5 flex items-center gap-1">
                      <Compass className="w-3.5 h-3.5 text-[#C8A34D]" />
                      {selectedPlot.facing}
                    </p>
                  </div>

                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                      selectedPlot.status === 'available'
                        ? 'bg-white/15 text-white border border-white/25'
                        : selectedPlot.status === 'reserved'
                        ? 'bg-[#C8A34D]/25 text-[#C8A34D] border border-[#C8A34D]/40'
                        : 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                    }`}
                  >
                    {selectedPlot.status}
                  </span>
                </div>

                {/* Specs Breakdown */}
                <div className="grid grid-cols-2 gap-2.5 text-xs">
                  <div className="bg-white/8 p-3 rounded-xl border border-white/10">
                    <div className="text-white/50 text-[10px] uppercase font-semibold">Total Area</div>
                    <div className="text-sm sm:text-base font-extrabold text-white mt-0.5">{selectedPlot.sqft} Sq.Ft</div>
                  </div>
                  <div className="bg-white/8 p-3 rounded-xl border border-white/10">
                    <div className="text-white/50 text-[10px] uppercase font-semibold">Rate per Sq.Ft</div>
                    <div className="text-sm sm:text-base font-extrabold text-[#C8A34D] mt-0.5">₹{selectedPlot.pricePerSqft}</div>
                  </div>
                </div>

                {/* Total Price Quote Box */}
                <div className="bg-[#C8A34D]/15 p-4 rounded-xl border border-[#C8A34D]/35 space-y-1">
                  <div className="text-[10px] text-white/80 font-bold uppercase tracking-wider">Estimated Total Investment</div>
                  <div className="text-2xl sm:text-3xl font-black text-[#C8A34D] font-heading">
                    ₹{(selectedPlot.totalPrice / 100000).toFixed(2)} Lakhs
                  </div>
                  <div className="text-[10px] text-white/70 pt-0.5">
                    ✔ 100% Clear Title • Includes infrastructure charges
                  </div>
                </div>

                {/* Admin Availability Switcher */}
                {isAdminLoggedIn && (
                  <div className="bg-[#C8A34D]/20 p-3 rounded-xl border border-[#C8A34D]/35 space-y-2">
                    <div className="flex items-center gap-1.5 text-[#C8A34D] text-[11px] font-bold uppercase tracking-wider">
                      <Lock className="w-3.5 h-3.5" />
                      Admin Inventory Manager
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => handleStatusChange(selectedPlot.plotNo, 'available')}
                        className={`py-1.5 text-[11px] font-bold rounded-lg border cursor-pointer ${
                          selectedPlot.status === 'available'
                            ? 'bg-white text-[#0B1F3A] border-white'
                            : 'bg-white/10 text-white/70 border-white/20'
                        }`}
                      >Available</button>
                      <button
                        onClick={() => handleStatusChange(selectedPlot.plotNo, 'reserved')}
                        className={`py-1.5 text-[11px] font-bold rounded-lg border cursor-pointer ${
                          selectedPlot.status === 'reserved'
                            ? 'bg-[#C8A34D] text-[#0B1F3A] border-[#C8A34D]'
                            : 'bg-white/10 text-white/70 border-white/20'
                        }`}
                      >Reserved</button>
                      <button
                        onClick={() => handleStatusChange(selectedPlot.plotNo, 'sold')}
                        className={`py-1.5 text-[11px] font-bold rounded-lg border cursor-pointer ${
                          selectedPlot.status === 'sold'
                            ? 'bg-rose-600 text-white border-rose-500'
                            : 'bg-white/10 text-white/70 border-white/20'
                        }`}
                      >Sold</button>
                    </div>
                  </div>
                )}
              </div>

              {/* Site Visit Button */}
              <div className="pt-2">
                {selectedPlot.status === 'available' ? (
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi! I want to book a site visit for Unit #${selectedPlot.plotNo} (${selectedPlot.dimension}) in ${project?.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold w-full py-3.5 px-4 text-xs font-extrabold flex items-center justify-center gap-2 cursor-pointer shadow-lg rounded-xl"
                  >
                    <MessageCircle className="w-4 h-4 fill-[#0B1F3A] shrink-0" />
                    <span className="truncate">Reserve Unit #{selectedPlot.plotNo}</span>
                  </a>
                ) : (
                  <div className="p-3 bg-white/5 text-center text-xs text-white/50 rounded-xl border border-white/10 font-medium">
                    Unit #{selectedPlot.plotNo} is {selectedPlot.status.toUpperCase()}.
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-white/40 text-sm">
              Click any plot unit on the layout matrix to view details.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
