'use client';

import React, { useState } from 'react';
import { ShieldCheck, MapPin, Download, Calendar, CheckCircle2, Building, Phone, ArrowLeft, Share2, Sparkles, Navigation, MessageCircle, ExternalLink } from 'lucide-react';
import { usePlots } from '../context/PlotsContext';
import PlotMasterplanViewer from '../components/PlotMasterplanViewer';

export default function ProjectDetailsPage({ projectId, setActivePage }) {
  const { projects, openSiteVisitModal, showToast } = usePlots();
  const project = projects.find((p) => p.id === projectId) || projects[0] || {};

  const [activeImage, setActiveImage] = useState(project.heroImage || '/images/nisarga-boulevard.jpg');
  const whatsappNumber = '917676077879';
  const pgrPhone = project.developerPhone || '+91 9886161155';
  const googleMapsUrl = project.googleMapsUrl || 'https://maps.app.goo.gl/nd1REcJDzUBVkFAg9';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Back Button & Top Navigation */}
      <div className="flex justify-between items-center text-xs">
        <button
          onClick={() => setActivePage('projects')}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#f0f2f7] border border-[#e2e8f0] text-[#4a5568] hover:text-[#0f1d3d] hover:bg-[#e2e8f0] transition-colors font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to All Projects
        </button>

        <div className="flex items-center gap-3">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              `Hi! Please send me the brochure packet and price list for ${project.title}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#b89028] hover:bg-[#d4af37]/25 font-bold"
          >
            <Download className="w-4 h-4" />
            Request Digital Brochure Packet
          </a>
        </div>
      </div>

      {/* Main Header Banner */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 bg-[#0f1d3d]/8 border border-[#0f1d3d]/15 text-[#0f1d3d] text-xs font-bold px-3 py-1 rounded-full">
            <ShieldCheck className="w-4 h-4 text-[#1e3a6e]" />
            {project.approvalType}
          </span>
          <span className="bg-[#d4af37]/10 border border-[#d4af37]/25 text-[#b89028] text-xs px-3 py-1 rounded-full font-semibold">
            RERA ID: {project.reraId}
          </span>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4">
          <div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0f1d3d] tracking-tight font-heading">{project.title}</h1>
            <div className="flex flex-wrap items-center gap-3 text-[#718096] text-sm mt-2">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[#0f1d3d] hover:text-[#d4af37] font-bold underline"
              >
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>{project.location} (Google Maps Pin)</span>
              </a>
              <span>•</span>
              <span>Developed by <strong className="text-[#0f1d3d]">{project.developer}</strong> (Tel: {pgrPhone})</span>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-[#e2e8f0] shadow-md shrink-0">
            <div>
              <div className="text-xs text-[#a0aec0]">Starting Price Quote</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#d4af37]">{project.formattedStartPrice}</div>
              <div className="text-[11px] text-[#a0aec0]">({project.priceRange})</div>
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                `Hi! I want to book a site visit for ${project.title} (${project.location}).`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold py-3.5 px-6 text-xs uppercase font-extrabold tracking-wider flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#d4af37]" />
              Book Now via WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Gallery Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-8 h-[420px] rounded-2xl overflow-hidden border border-[#e2e8f0] shadow-lg relative bg-black">
          <img src={activeImage} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#e2e8f0] text-xs text-[#4a5568] font-medium">
            {project.title} Masterplan & Layout View
          </div>
        </div>

        <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4 max-h-[420px]">
          {(project.galleryImages || []).map((img, i) => (
            <div
              key={i}
              onClick={() => setActiveImage(img)}
              className={`h-24 lg:h-[95px] rounded-xl overflow-hidden border cursor-pointer transition-all ${
                activeImage === img ? 'border-[#d4af37] ring-2 ring-[#d4af37]/40' : 'border-[#e2e8f0] opacity-70 hover:opacity-100'
              }`}
            >
              <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Project Specifications & Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-8">
          {/* Overview */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#e2e8f0] shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-[#0f1d3d] font-heading">Project Overview & Configurations</h3>
            <p className="text-[#4a5568] text-sm leading-relaxed">{project.overview}</p>

            <div className="pt-4 border-t border-[#e2e8f0]">
              <h4 className="text-xs font-semibold text-[#718096] uppercase tracking-wider mb-3">Key Infrastructure & Location Advantages</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#4a5568]">
                {(project.highlights || []).map((h, i) => (
                  <div key={i} className="flex items-start gap-2 bg-[#f8f9fc] p-3 rounded-xl border border-[#e2e8f0]">
                    <CheckCircle2 className="w-4 h-4 text-[#1e3a6e] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* INTERACTIVE MASTERPLAN LAYOUT GRID */}
          <PlotMasterplanViewer project={project} />

          {/* Proximity & Distance Key */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#e2e8f0] shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-[#0f1d3d] flex items-center gap-2 font-heading">
              <Navigation className="w-5 h-5 text-[#d4af37]" />
              Proximity & Connectivity Catalysts
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {(project.landmarks || []).map((lm, i) => (
                <div key={i} className="flex justify-between items-center bg-[#f8f9fc] p-3.5 rounded-xl border border-[#e2e8f0]">
                  <span className="text-[#4a5568] font-medium">{lm.name}</span>
                  <span className="text-[#d4af37] font-bold px-2 py-0.5 rounded bg-[#d4af37]/10 border border-[#d4af37]/20">
                    {lm.distance}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Summary & Links */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-[#e2e8f0] shadow-sm space-y-6 sticky top-24">
            <div className="border-b border-[#e2e8f0] pb-4">
              <span className="text-xs text-[#d4af37] font-semibold uppercase tracking-wider">Quick Specs Summary</span>
              <h3 className="text-lg font-bold text-[#0f1d3d] mt-1 font-heading">{project.title}</h3>
              <p className="text-xs text-[#718096] mt-0.5">By {project.developer}</p>
            </div>

            <div className="space-y-3 text-xs text-[#4a5568]">
              <div className="flex justify-between py-2 border-b border-[#e2e8f0]">
                <span className="text-[#718096]">Total Plots:</span>
                <span className="font-bold text-[#0f1d3d]">{project.totalPlots} Units</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#e2e8f0]">
                <span className="text-[#718096]">Available Plots:</span>
                <span className="font-bold text-[#1e3a6e]">{project.availablePlots} Plots Open</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#e2e8f0]">
                <span className="text-[#718096]">Approval Body:</span>
                <span className="font-bold text-[#d4af37]">{project.approvalType}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#e2e8f0]">
                <span className="text-[#718096]">Developer Phone:</span>
                <a href={`tel:${pgrPhone.replace(/\s+/g, '')}`} className="font-bold text-[#0f1d3d] hover:text-[#d4af37]">
                  {pgrPhone}
                </a>
              </div>
            </div>

            {/* Approved Banks */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-semibold text-[#718096] uppercase">Pre-Approved Bank Loans</div>
              <div className="flex flex-wrap gap-1.5">
                {(project.bankApprovals || []).map((b, i) => (
                  <span key={i} className="px-2.5 py-1 rounded bg-[#f8f9fc] border border-[#e2e8f0] text-[11px] text-[#4a5568]">
                    🏦 {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Links & CTAs */}
            <div className="space-y-3 pt-2">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  `Hi! I want to book a site visit for ${project.title}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full py-3.5 text-xs uppercase font-extrabold tracking-wider flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                Book Site Visit via WhatsApp
              </a>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#f0f2f7] border border-[#e2e8f0] text-[#4a5568] text-xs font-semibold hover:bg-[#e2e8f0] transition-colors flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4 text-[#d4af37]" />
                Google Maps Location Pin
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
