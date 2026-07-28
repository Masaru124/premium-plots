'use client';

import React, { useState } from 'react';
import { Grid, Compass, CheckCircle2, AlertCircle, XCircle, Lock, Calendar, Tag, ShieldCheck, Sparkles, MapPin, Eye, MessageCircle } from 'lucide-react';
import { usePlots } from '../context/PlotsContext';

export default function PlotMasterplanViewer({ project }) {
  const { openSiteVisitModal, isAdminLoggedIn, updatePlotStatus } = usePlots();
  const [selectedPlot, setSelectedPlot] = useState(project.layoutGrid[0] || null);
  const whatsappNumber = '917676077879';

  const availableCount = project.layoutGrid.filter((pt) => pt.status === 'available').length;
  const reservedCount = project.layoutGrid.filter((pt) => pt.status === 'reserved').length;
  const soldCount = project.layoutGrid.filter((pt) => pt.status === 'sold').length;

  const handleStatusChange = (plotNo, newStatus) => {
    updatePlotStatus(project.id, plotNo, newStatus);
    if (selectedPlot && selectedPlot.plotNo === plotNo) {
      setSelectedPlot({ ...selectedPlot, status: newStatus });
    }
  };

  return (
    <div className="bg-white border border-[#e2e8f0] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-3xl -z-0 pointer-events-none" />

      {/* Header Bar */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-b border-[#e2e8f0] pb-5 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0f1d3d]/8 border border-[#0f1d3d]/15 text-[#0f1d3d] text-xs font-bold uppercase tracking-wider mb-2">
            <Grid className="w-3.5 h-3.5 text-[#d4af37]" />
            Interactive Masterplan & Architectural Layout Blueprint
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f1d3d] tracking-tight font-heading">
            Select Your Ideal Plot Unit
          </h3>
          <p className="text-xs text-[#718096] mt-1">
            Click any plot unit below to check real-time availability, Vastu orientation, dimension & total cost breakdown.
          </p>
        </div>

        {/* Legend Counters */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-bold bg-[#f8f9fc] p-3 rounded-xl border border-[#e2e8f0]">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-[#1e3a6e]/10 border border-[#1e3a6e]/20 text-[#1e3a6e]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1e3a6e] animate-pulse" />
            <span>Available ({availableCount})</span>
          </div>
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/25 text-[#b8922f]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37]" />
            <span>Reserved ({reservedCount})</span>
          </div>
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-rose-50 border border-rose-200 text-rose-500">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
            <span>Sold ({soldCount})</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        {/* Visual Architectural Layout Blueprint Canvas */}
        <div className="lg:col-span-7 bg-[#f8f9fc] p-6 rounded-2xl border border-[#e2e8f0] space-y-4 relative">
          <div className="flex justify-between items-center text-[11px] font-semibold text-[#718096] border-b border-[#e2e8f0] pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
              <span>Layout Main Avenue: 60-Foot Blacktopped Boulevard</span>
            </div>
            <span className="text-[#1e3a6e] font-bold bg-[#1e3a6e]/10 px-2 py-0.5 rounded border border-[#1e3a6e]/20">
              100% Vastu Orientations
            </span>
          </div>

          <div className="relative bg-white p-4 rounded-xl border border-[#e2e8f0] flex items-center justify-between text-xs text-[#4a5568]">
            <div className="flex items-center gap-2 font-semibold">
              <MapPin className="w-4 h-4 text-[#d4af37]" />
              <span>Gated Layout Boundary (25 Acres Township)</span>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-[#b8922f]">
              <span>🌳 Landscaped Park Zone</span>
              <span>🏊 12,000 Sq.Ft Clubhouse</span>
            </div>
          </div>

          {/* Interactive Plot Grid Matrix */}
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2.5 max-h-[400px] overflow-y-auto p-1">
            {project.layoutGrid.map((pt) => {
              const isSelected = selectedPlot && selectedPlot.plotNo === pt.plotNo;

              let styleClasses = 'bg-[#1e3a6e]/10 border-[#1e3a6e]/25 text-[#1e3a6e] hover:bg-[#1e3a6e]/20 hover:border-[#1e3a6e]/40';
              if (pt.status === 'reserved') {
                styleClasses = 'bg-[#d4af37]/10 border-[#d4af37]/25 text-[#b8922f] hover:bg-[#d4af37]/15';
              } else if (pt.status === 'sold') {
                styleClasses = 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed opacity-50';
              }

              return (
                <button
                  key={pt.plotNo}
                  onClick={() => setSelectedPlot(pt)}
                  className={`p-3 rounded-xl border flex flex-col items-center justify-center transition-all duration-200 relative group ${styleClasses} ${
                    isSelected ? 'ring-2 ring-[#d4af37] bg-[#d4af37]/15 text-[#b8922f] scale-105 shadow-lg z-20' : ''
                  }`}
                >
                  <span className="text-xs font-bold tracking-tight">{pt.plotNo}</span>
                  <span className="text-[10px] opacity-80 mt-0.5 font-medium">{pt.dimension.split(' ')[0]}</span>

                  {pt.isCorner && (
                    <span className="mt-1 text-[9px] bg-gradient-to-r from-[#d4af37] to-[#b8922f] text-white font-extrabold px-1.5 py-0.5 rounded shadow">
                      CORNER
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Plot Specifications Card */}
        <div className="lg:col-span-5 bg-gradient-to-b from-[#0f1d3d] to-[#162550] p-6 rounded-2xl shadow-2xl space-y-5">
          {selectedPlot ? (
            <>
              <div className="flex justify-between items-start border-b border-white/15 pb-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-extrabold uppercase tracking-wider mb-1 text-[#d4af37] bg-[#d4af37]/15 border border-[#d4af37]/30">
                    Plot Unit #{selectedPlot.plotNo}
                  </div>
                  <h4 className="text-2xl font-extrabold text-white">{selectedPlot.dimension}</h4>
                  <p className="text-xs text-white/50 mt-0.5 flex items-center gap-1">
                    <Compass className="w-3.5 h-3.5 text-[#d4af37]" />
                    {selectedPlot.facing}
                  </p>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider ${
                    selectedPlot.status === 'available'
                      ? 'bg-white/15 text-white border border-white/25'
                      : selectedPlot.status === 'reserved'
                      ? 'bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/30'
                      : 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                  }`}
                >
                  {selectedPlot.status}
                </span>
              </div>

              {/* Specs Breakdown */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-white/8 p-3.5 rounded-xl border border-white/10">
                  <div className="text-white/40 text-[11px]">Total Plot Area</div>
                  <div className="text-base font-extrabold text-white mt-0.5">{selectedPlot.sqft} Sq.Ft</div>
                </div>
                <div className="bg-white/8 p-3.5 rounded-xl border border-white/10">
                  <div className="text-white/40 text-[11px]">Rate per Sq.Ft</div>
                  <div className="text-base font-extrabold text-[#d4af37] mt-0.5">₹{selectedPlot.pricePerSqft}</div>
                </div>
              </div>

              {/* Total Price Quote Box */}
              <div className="bg-[#d4af37]/10 p-5 rounded-2xl border border-[#d4af37]/25 shadow-xl space-y-1">
                <div className="text-xs text-white/80 font-bold uppercase tracking-wider">Estimated Total Investment</div>
                <div className="text-3xl font-black text-[#d4af37]">
                  ₹{(selectedPlot.totalPrice / 100000).toFixed(2)} Lakhs
                </div>
                <div className="text-[11px] text-white/40 pt-1">
                  ✔ 100% Clear Title • Includes infrastructure & demarcation charges
                </div>
              </div>

              {/* Admin Availability Switcher */}
              {isAdminLoggedIn && (
                <div className="bg-[#d4af37]/15 p-4 rounded-xl border border-[#d4af37]/30 space-y-2">
                  <div className="flex items-center gap-1.5 text-[#d4af37] text-xs font-bold uppercase tracking-wider">
                    <Lock className="w-3.5 h-3.5" />
                    Admin Plot Inventory Manager
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-1">
                    <button
                      onClick={() => handleStatusChange(selectedPlot.plotNo, 'available')}
                      className={`py-2 text-xs font-bold rounded-lg border ${
                        selectedPlot.status === 'available'
                          ? 'bg-white text-[#0f1d3d] border-white'
                          : 'bg-white/10 text-white/70 border-white/20'
                      }`}
                    >Available</button>
                    <button
                      onClick={() => handleStatusChange(selectedPlot.plotNo, 'reserved')}
                      className={`py-2 text-xs font-bold rounded-lg border ${
                        selectedPlot.status === 'reserved'
                          ? 'bg-[#d4af37] text-[#0f1d3d] border-[#d4af37]'
                          : 'bg-white/10 text-white/70 border-white/20'
                      }`}
                    >Reserved</button>
                    <button
                      onClick={() => handleStatusChange(selectedPlot.plotNo, 'sold')}
                      className={`py-2 text-xs font-bold rounded-lg border ${
                        selectedPlot.status === 'sold'
                          ? 'bg-rose-600 text-white border-rose-500'
                          : 'bg-white/10 text-white/70 border-white/20'
                      }`}
                    >Sold</button>
                  </div>
                </div>
              )}

              {/* Site Visit Button */}
              {selectedPlot.status === 'available' ? (
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi! I want to book a site visit for Plot #${selectedPlot.plotNo} (${selectedPlot.dimension}) in ${project.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full py-4 text-xs uppercase font-extrabold tracking-wider flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  Reserve Site Visit for Plot #{selectedPlot.plotNo}
                </a>
              ) : (
                <div className="p-3 bg-white/5 text-center text-xs text-white/40 rounded-xl border border-white/10 font-medium">
                  This plot is currently marked as {selectedPlot.status.toUpperCase()}. Select an available plot unit or contact admin for updates.
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12 text-white/40 text-sm">
              Click any plot on the layout matrix to view details.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
