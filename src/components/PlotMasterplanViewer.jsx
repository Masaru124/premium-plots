'use client';

import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { usePlots } from '../context/PlotsContext';

const WHATSAPP = '918431909508';

export default function PlotMasterplanViewer({ project }) {
  const { openSiteVisitModal, isAdminLoggedIn, updatePlotStatus } = usePlots();

  const layoutGrid = project?.layoutGrid || [];
  const [selectedPlot, setSelectedPlot] = useState(layoutGrid[0] || null);

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
      <div>
        <h3 className="font-heading text-[1.25rem] text-[#0B1F3A]">
          {project?.title || 'Project'} masterplan
        </h3>
        <p className="mt-2 max-w-[54ch] text-[17px] leading-relaxed text-[var(--text-soft)]">
          The layout blueprint and unit availability map for {project?.title} are sent on request.
        </p>
        <p className="mt-2 text-[14px] text-[var(--text-soft)]">
          Send the request from the desk panel beside this page.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div>
          <h3 className="font-heading text-[1.25rem] text-[#0B1F3A]">Select a unit</h3>
          <p className="mt-1 max-w-[52ch] text-[16px] leading-relaxed text-[var(--text-soft)]">
            Choose a unit to see availability, orientation, dimensions and the total quoted cost.
          </p>
        </div>

        <p className="text-[15px] text-[var(--text-soft)] figures">
          {availableCount} available · {reservedCount} reserved · {soldCount} sold
        </p>
      </div>

      <div className="mt-7 grid gap-6 lg:grid-cols-12">
        {/* grid */}
        <div className="bg-white px-5 py-6 lg:col-span-7">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-2 text-[14px] text-[var(--text-soft)]">
            <span>60-foot blacktopped boulevard</span>
            <span>Vastu orientations</span>
          </div>

          <div className="grid grid-cols-3 gap-2 pt-5 sm:grid-cols-4 md:grid-cols-6">
            {layoutGrid.map((pt) => {
              const isSelected = selectedPlot && selectedPlot.plotNo === pt.plotNo;

              let tone = 'bg-[#0B1F3A]/8 text-[#0B1F3A] hover:bg-[#0B1F3A]/16';
              if (pt.status === 'reserved') tone = 'bg-[#C8A34D]/25 text-[#0B1F3A] hover:bg-[#C8A34D]/40';
              else if (pt.status === 'sold') tone = 'bg-transparent text-[#B4B4B4] line-through cursor-not-allowed';

              return (
                <button
                  key={pt.plotNo}
                  type="button"
                  onClick={() => setSelectedPlot(pt)}
                  aria-pressed={Boolean(isSelected)}
                  className={`flex min-h-14 flex-col items-center justify-center px-1 py-2 transition-colors ${tone} ${
                    isSelected ? 'bg-[#0B1F3A] text-white hover:bg-[#0B1F3A]' : ''
                  }`}
                >
                  <span className="text-[14px] figures">{pt.plotNo}</span>
                  <span className="text-[13px] opacity-75">{pt.dimension.split(' ')[0]}</span>
                  {pt.isCorner && (
                    <span className="mt-0.5 text-[11px] text-[#A6832A]">corner</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* selected */}
        <div className="section-navy on-ink px-6 py-7 lg:col-span-5">
          {selectedPlot ? (
            <div className="flex h-full flex-col justify-between gap-6">
              <div>
                <p className="text-[14px] text-[#DFC06E] figures">Unit {selectedPlot.plotNo}</p>
                <p className="mt-2 font-heading text-[1.5rem] leading-tight text-white">
                  {selectedPlot.dimension}
                </p>
                <p className="mt-1 text-[15px] text-white/60">
                  {selectedPlot.facing} · {selectedPlot.status}
                </p>

                <dl className="mt-6 space-y-2 text-[15px]">
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-white/55">Total area</dt>
                    <dd className="text-white figures">{selectedPlot.sqft} sq ft</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-white/55">Rate</dt>
                    <dd className="text-white figures">₹{selectedPlot.pricePerSqft} / sq ft</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 pt-2">
                    <dt className="text-white/55">Quoted total</dt>
                    <dd className="font-heading text-[1.25rem] text-[#DFC06E] figures">
                      ₹{(selectedPlot.totalPrice / 100000).toFixed(2)} L
                    </dd>
                  </div>
                </dl>

                <p className="mt-3 text-[14px] leading-relaxed text-white/50">
                  Includes infrastructure charges. Confirm title and current pricing with the desk.
                </p>

                {isAdminLoggedIn && (
                  <div className="mt-6">
                    <p className="text-[14px] text-[#DFC06E]">Inventory control</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {['available', 'reserved', 'sold'].map((status) => (
                        <button
                          key={status}
                          type="button"
                          onClick={() => handleStatusChange(selectedPlot.plotNo, status)}
                          className={`min-h-10 px-3 text-[14px] capitalize transition-colors ${
                            selectedPlot.status === status
                              ? 'bg-[#C8A34D] text-[#0B1F3A]'
                              : 'bg-white/10 text-white/75 hover:bg-white/20'
                          }`}
                        >
                          {status}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {selectedPlot.status === 'available' ? (
                <a
                  href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hi! I want to book a site visit for Unit #${selectedPlot.plotNo} (${selectedPlot.dimension}) in ${project?.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Reserve unit {selectedPlot.plotNo}
                </a>
              ) : (
                <button type="button" onClick={() => openSiteVisitModal(project)} className="btn-quiet btn-quiet--on-ink w-full">
                  Ask about this unit
                </button>
              )}
            </div>
          ) : (
            <p className="text-[16px] text-white/60">
              Select any unit in the layout to see its details.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
