'use client';

import React, { useState } from 'react';
import { ShieldCheck, MapPin, Download, Calendar, CheckCircle2, Building, Phone, ArrowLeft, Share2, Sparkles, Navigation, MessageCircle, ExternalLink, Home, Layers, Sparkle, ArrowRight } from 'lucide-react';
import { usePlots, INTERIOR_PACKAGES } from '../context/PlotsContext';
import PlotMasterplanViewer from '../components/PlotMasterplanViewer';

export default function ProjectDetailsPage({ projectId, setActivePage }) {
  const { projects, openSiteVisitModal, showToast } = usePlots();
  const project = projects.find((p) => p.id === projectId) || projects[0] || {};

  const [activeImage, setActiveImage] = useState(project.heroImage || '/images/nisarga-boulevard.jpg');
  const whatsappNumber = '918431909508';
  const displayPhone = '+91 84319 09508';
  const googleMapsUrl = project.googleMapsUrl || 'https://maps.app.goo.gl/nd1REcJDzUBVkFAg9';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Back Button & Top Navigation */}
      <div className="flex justify-between items-center text-xs">
        <button
          onClick={() => setActivePage('projects')}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#0B1F3A]/15 text-[#1A1A1A] hover:bg-[#F8F8F5] transition-colors font-semibold cursor-pointer shadow-sm"
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
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#C8A34D]/15 border border-[#C8A34D]/30 text-[#0B1F3A] hover:bg-[#C8A34D]/25 font-bold cursor-pointer transition-colors"
          >
            <Download className="w-4 h-4 text-[#C8A34D]" />
            {project.id === 'project-purva-sounds-of-water-villa' ? 'Request Unit Details' : 'Request Digital Brochure Packet'}
          </a>
        </div>
      </div>

      {/* Main Header Banner */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 bg-[#0B1F3A]/8 border border-[#0B1F3A]/15 text-[#0B1F3A] text-xs font-bold px-3 py-1 rounded-full">
            <ShieldCheck className="w-4 h-4 text-[#C8A34D]" />
            {project.approvalType}
          </span>
          <span className="bg-[#C8A34D]/15 border border-[#C8A34D]/30 text-[#0B1F3A] text-xs px-3 py-1 rounded-full font-bold">
            {project.id === 'project-purva-sounds-of-water-villa'
              ? `Project RERA listed by developer: ${project.reraId} • verify applicable unit phase`
              : `RERA ID: ${project.reraId}`}
          </span>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4">
          <div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0B1F3A] tracking-tight font-heading">{project.title}</h1>
            {project.id === 'project-purva-sounds-of-water-villa' && (
              <div className="mt-3 p-3.5 rounded-xl bg-gradient-to-r from-[#0B1F3A] to-[#142E54] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border border-[#C8A34D]/40 shadow-sm">
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#C8A34D] shrink-0" />
                  <span className="text-xs text-white/90">
                    Seller advertises a five-bedroom resale unit; verify its sanctioned plan and details before purchase.
                  </span>
                </div>
                <a
                  href="/purva-sounds-of-water"
                  className="btn-gold py-1.5 px-3 text-[11px] font-black uppercase whitespace-nowrap shrink-0"
                >
                  Visit Dedicated Villa Page →
                </a>
              </div>
            )}
            <div className="flex flex-wrap items-center gap-3 text-[#555555] text-sm mt-2">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[#0B1F3A] hover:text-[#C8A34D] font-bold underline"
              >
                <MapPin className="w-4 h-4 text-[#C8A34D] shrink-0" />
                <span>{project.location} (Google Maps Pin)</span>
              </a>
              <span>•</span>
              <span>Developer: <strong className="text-[#0B1F3A]">{project.developer}</strong> (Advisory: {displayPhone})</span>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-[#0B1F3A]/10 shadow-md shrink-0">
            <div>
              <div className="text-xs text-[#555555]">
                {project.id === 'project-purva-sounds-of-water-villa' ? 'Seller-Quoted Asking Price' : 'Starting Price Quote'}
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#C8A34D] font-heading">{project.formattedStartPrice}</div>
              <div className="text-[11px] text-[#555555]">({project.priceRange})</div>
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                `Hi! I want to book a site visit for ${project.title} (${project.location}).`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold py-3.5 px-6 text-xs uppercase font-extrabold tracking-wider flex items-center gap-2 cursor-pointer shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-[#0B1F3A]" />
              Book Site Visit
            </a>
          </div>
        </div>
      </div>

      {/* Gallery Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-8 h-[420px] rounded-2xl overflow-hidden border border-[#0B1F3A]/10 shadow-lg relative bg-black">
          <img src={activeImage} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-[#0B1F3A]/10 text-xs text-[#0B1F3A] font-bold shadow-md">
            {project.title} Masterplan & Elevation View
          </div>
        </div>

        <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4 max-h-[420px]">
          {(project.galleryImages || []).map((img, i) => (
            <div
              key={i}
              onClick={() => setActiveImage(img)}
              className={`h-24 lg:h-[95px] rounded-xl overflow-hidden border cursor-pointer transition-all ${
                activeImage === img ? 'border-[#C8A34D] ring-2 ring-[#C8A34D]/50 scale-[1.02]' : 'border-[#0B1F3A]/10 opacity-70 hover:opacity-100'
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
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#0B1F3A]/10 shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-[#0B1F3A] font-heading">Project Overview & Configurations</h3>
            <p className="text-[#555555] text-sm leading-relaxed">{project.overview}</p>

            <div className="pt-4 border-t border-[#0B1F3A]/10">
              <h4 className="text-xs font-semibold text-[#0B1F3A] uppercase tracking-wider mb-3 font-heading">Key Infrastructure & Location Advantages</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#1A1A1A]">
                {(project.highlights || []).map((h, i) => (
                  <div key={i} className="flex items-start gap-2 bg-[#F8F8F5] p-3 rounded-xl border border-[#0B1F3A]/10">
                    <CheckCircle2 className="w-4 h-4 text-[#C8A34D] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* INTERACTIVE MASTERPLAN LAYOUT GRID */}
          <PlotMasterplanViewer project={project} />

          {/* TURNKEY INTERIOR DESIGN PACKAGES (If Vinra Alora or custom villa plots) */}
          {project.id === 'project-vinra-alora' && (
            <div className="bg-[#0B1F3A] p-6 sm:p-8 rounded-3xl text-white shadow-xl space-y-6 border border-[#C8A34D]/30 cad-grid">
              <div className="flex items-center gap-2 text-[#C8A34D] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#C8A34D]" />
                Vinra Interiors & Renovations Pvt Ltd • Package Add-ons
              </div>

              <div>
                <h3 className="text-2xl font-black text-white font-heading">Turnkey Villa Construction & Interior Packages</h3>
                <p className="text-xs text-white/70 mt-1">
                  Choose from Silver, Gold, and Platinum interior design packages tailored for Vinra Alora plot owners.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/10 p-5 rounded-2xl border border-white/15 backdrop-blur-md space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-sm font-bold text-[#C8A34D] font-heading">SILVER PACKAGE</span>
                    <span className="text-[11px] text-white/70">₹1,000 / sq.ft</span>
                  </div>
                  <ul className="text-xs text-white/80 space-y-2">
                    <li>• Dry Area: ₹1,000 / Sq.Ft</li>
                    <li>• Wet Area: ₹1,350 / Sq.Ft</li>
                    <li>• Core Material: MDF Pre-Laminated & BWR Ply</li>
                    <li>• Hardware: EBCO Regular or Equivalent</li>
                  </ul>
                </div>

                <div className="bg-white/15 p-5 rounded-2xl border border-[#C8A34D]/60 backdrop-blur-md space-y-3 relative shadow-lg">
                  <span className="absolute -top-2.5 right-4 bg-[#C8A34D] text-[#0B1F3A] text-[9px] font-black px-2 py-0.5 rounded-full uppercase">MOST POPULAR</span>
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-sm font-bold text-[#C8A34D] font-heading">GOLD PACKAGE</span>
                    <span className="text-[11px] text-white/70">₹1,300 / sq.ft</span>
                  </div>
                  <ul className="text-xs text-white/90 space-y-2">
                    <li>• Dry Area: ₹1,300 / Sq.Ft</li>
                    <li>• Wet Area: ₹1,500 / Sq.Ft</li>
                    <li>• Core Material: MR Ply (Century/Green) & BWP Ply</li>
                    <li>• Hardware: HETTICH / HAFELE Regular</li>
                  </ul>
                </div>

                <div className="bg-white/10 p-5 rounded-2xl border border-white/15 backdrop-blur-md space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-sm font-bold text-[#C8A34D] font-heading">PLATINUM PACKAGE</span>
                    <span className="text-[11px] text-white/70">₹1,550 / sq.ft</span>
                  </div>
                  <ul className="text-xs text-white/80 space-y-2">
                    <li>• Dry Area: ₹1,550 / Sq.Ft</li>
                    <li>• Wet Area: ₹1,850 / Sq.Ft</li>
                    <li>• Core Material: MR Ply / MDF Century & BWP Ply</li>
                    <li>• Hardware: HETTICH / HAFELE Soft Close</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Proximity & Distance Key */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#0B1F3A]/10 shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-[#0B1F3A] flex items-center gap-2 font-heading">
              <Navigation className="w-5 h-5 text-[#C8A34D]" />
              Proximity & Connectivity Catalysts
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {(project.landmarks || []).map((lm, i) => (
                <div key={i} className="flex justify-between items-center bg-[#F8F8F5] p-3.5 rounded-xl border border-[#0B1F3A]/10">
                  <span className="text-[#1A1A1A] font-medium">{lm.name}</span>
                  <span className="text-[#0B1F3A] font-bold px-2 py-0.5 rounded bg-[#C8A34D]/20 border border-[#C8A34D]/30">
                    {lm.distance}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Seller-listed Purva Symphony resale details */}
          {project.id === 'project-purva-sounds-of-water-villa' && (
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#C8A34D]/30 shadow-md space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <span className="text-xs font-black text-[#C8A34D] uppercase tracking-wider">
                  Seller-Advertised Resale Unit Details
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] font-heading mt-1">
                  Purva Symphony Resale Villa off Bannerghatta Road
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  The seller advertises a five-bedroom unit. Its configuration, measurements, amenities and legal status require verification against original documents.
                </p>
              </div>

              <div className="rounded-xl bg-[#F8F8F5] border border-slate-200 p-5 text-sm text-slate-700 space-y-3">
                <p>Puravankara describes Purva Symphony at The Sound of Water as a community with 3- and 4-BHK residences, off Bannerghatta Road. This is separate from the seller’s advertised five-bedroom resale-unit claim.</p>
                <a className="inline-flex items-center gap-2 font-semibold text-[#0B1F3A] underline" href="https://www.puravankara.com/residential/bengaluru/purva-symphony" target="_blank" rel="noopener noreferrer">
                  View Puravankara’s official project information <ArrowRight className="w-4 h-4" />
                </a>
                <p>Before proceeding, request the unit’s sanctioned plan, sale/title documents, khata and occupancy records, and confirm the applicable RERA registration with the relevant authorities.</p>
              </div>

              {/* Verified Legal & Investment Highlights */}
              <div className="p-5 rounded-xl bg-[#0B1F3A] text-white space-y-3">
                <div className="text-xs font-black text-[#C8A34D] uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C8A34D]" />
                  Details to Verify Before Purchase
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-white/90">
                  <div>• <strong>Unit documents:</strong> Verify title, khata and occupancy records</div>
                  <div>• <strong>Project RERA:</strong> PRM/KA/RERA/1251/310/PR/210907/004300 (confirm unit phase)</div>
                  <div>• <strong>Configuration:</strong> Seller-advertised five-bedroom unit; check sanctioned plan</div>
                  <div>• <strong>Buyer charges:</strong> Confirm with the listing advisor</div>
                  <div>• <strong>Asking price:</strong> Seller-quoted ₹9.0 Cr; reconfirm before visit</div>
                  <div>• <strong>Site visit:</strong> Contact advisor to confirm availability</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar Summary & Links */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-[#0B1F3A]/10 shadow-sm space-y-6 sticky top-24">
            <div className="border-b border-[#0B1F3A]/10 pb-4">
              <span className="text-xs text-[#C8A34D] font-bold uppercase tracking-wider font-heading">Quick Specs Summary</span>
              <h3 className="text-lg font-bold text-[#0B1F3A] mt-1 font-heading">{project.title}</h3>
              <p className="text-xs text-[#555555] mt-0.5">By {project.developer}</p>
            </div>

            <div className="space-y-3 text-xs text-[#1A1A1A]">
              <div className="flex justify-between py-2 border-b border-[#0B1F3A]/10">
                <span className="text-[#555555]">
                  {project.id === 'project-purva-sounds-of-water-villa' ? 'Listed Units:' : 'Total Plots / Parcels:'}
                </span>
                <span className="font-bold text-[#0B1F3A]">{project.id === 'project-purva-sounds-of-water-villa' ? '1 resale listing' : `${project.totalPlots} Units`}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#0B1F3A]/10">
                <span className="text-[#555555]">{project.id === 'project-purva-sounds-of-water-villa' ? 'Availability:' : 'Available Units:'}</span>
                <span className="font-bold text-[#0B1F3A]">
                  {project.id === 'project-purva-sounds-of-water-villa' ? 'Confirm with listing advisor' : `${project.availablePlots} Open`}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#0B1F3A]/10">
                <span className="text-[#555555]">Approval Body:</span>
                <span className="font-bold text-[#0B1F3A]">{project.approvalType}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#0B1F3A]/10">
                <span className="text-[#555555]">Advisory Hotline:</span>
                <a href={`tel:+918431909508`} className="font-bold text-[#C8A34D] hover:underline">
                  {displayPhone}
                </a>
              </div>
            </div>

            {/* Approved Banks */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-semibold text-[#555555] uppercase">Pre-Approved Bank Loans</div>
              <div className="flex flex-wrap gap-1.5">
                {(project.bankApprovals || []).map((b, i) => (
                  <span key={i} className="px-2.5 py-1 rounded bg-[#F8F8F5] border border-[#0B1F3A]/10 text-[11px] text-[#1A1A1A]">
                    🏦 {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Links & CTAs */}
            <div className="space-y-3 pt-2">
              <button
                onClick={() => openSiteVisitModal(project)}
                className="btn-gold w-full py-3.5 text-xs uppercase font-extrabold tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Calendar className="w-4 h-4 text-[#0B1F3A]" />
                Book VIP Site Visit
              </button>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  `Hi! I want to book a site visit for ${project.title}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#0B1F3A] hover:bg-[#142E54] text-[#C8A34D] border border-[#C8A34D]/40 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#C8A34D]" />
                WhatsApp Direct Inquiry
              </a>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#F8F8F5] border border-[#0B1F3A]/15 text-[#0B1F3A] text-xs font-semibold hover:bg-[#0B1F3A] hover:text-white transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <ExternalLink className="w-4 h-4 text-[#C8A34D]" />
                Google Maps Location Pin
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
