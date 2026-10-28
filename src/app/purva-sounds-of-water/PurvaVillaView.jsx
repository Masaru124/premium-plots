'use client';

import React, { useState } from 'react';
import { PlotsProvider, usePlots } from '../../context/PlotsContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingActions from '../../components/WhatsAppButton';
import BookSiteVisitModal from '../../components/BookSiteVisitModal';
import ProjectDetailsPage from '../../views/ProjectDetailsPage';
import {
  ShieldCheck, MapPin, Download, CheckCircle2, Phone, MessageCircle,
  HelpCircle, ChevronDown, Award, Sparkles, Building2, Trees, Bath, Bed,
  Maximize2, ArrowRight
} from 'lucide-react';

const PURVA_FAQS = [
  {
    q: 'Are Purva Sounds of Water and Purva Symphony at The Sound of Water the same project?',
    a: 'They refer to the same Bannerghatta Road location. Puravankara’s official project name is Purva Symphony at The Sound of Water, while resale listings commonly advertise it as Purva Sounds of Water. Puravankara describes the community as 3- and 4-BHK villas, so confirm the exact unit configuration against original documents.'
  },
  {
    q: 'What does Puravankara officially list for this project?',
    a: 'Puravankara publishes Purva Symphony at The Sound of Water as a 20-acre enclave of luxury 3- and 4-BHK villas off Bannerghatta Road in South Bengaluru, priced from ₹4.80 Cr onwards, with project RERA PRM/KA/RERA/1251/310/PR/210907/004300, status ongoing and possession listed as 30-06-2026. These are developer-published figures that can change; confirm them directly with Puravankara.'
  },
  {
    q: 'What is the asking price for this Purva Symphony resale villa?',
    a: 'The seller currently quotes ₹9.0 Crore for this resale listing. Price and availability may change; confirm both with the listing advisor before arranging a visit.'
  },
  {
    q: 'What configuration and areas does the seller advertise?',
    a: 'The seller advertises this individual villa as having five bedrooms, around 5,000 sq.ft of land and 7,000 sq.ft built-up area. Puravankara describes the wider Purva Symphony community as offering 3- and 4-BHK residences, so verify the unit’s sanctioned plan and area documents.'
  },
  {
    q: 'Does the seller-listed unit include a private swimming pool and garden?',
    a: 'The seller advertises a private pool and garden for this individual unit. Confirm these unit-specific features during the site visit and against the property documents.'
  },
  {
    q: 'Where is Purva Symphony at The Sound of Water located?',
    a: 'Puravankara describes Purva Symphony as being off Bannerghatta Road in Bengaluru. Check the exact unit pin and current route before relying on travel times or nearby-station distances.'
  },
  {
    q: 'What should I verify before purchasing this resale villa?',
    a: 'Check the applicable RERA phase, sanctioned plan, title, khata, occupancy documents, unit configuration and lender eligibility against original records. Puravankara lists Purva Symphony under RERA registration PRM/KA/RERA/1251/310/PR/210907/004300; confirm which phase and approvals apply to the specific unit.'
  },
  {
    q: 'What is the orientation of this villa?',
    a: 'The seller describes the villa as west-facing. Confirm the orientation from the unit plan and during an in-person inspection.'
  },
  {
    q: 'How can I enquire about this resale listing?',
    a: 'Contact the listing advisor to confirm whether the unit is still available, request current seller-provided details and documents, and arrange a viewing.'
  }
];

function PurvaVillaContent() {
  const [activePage, setActivePage] = useState('project-details');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const { openSiteVisitModal } = usePlots();

  const whatsappNumber = '918431909508';
  const displayPhone = '+91 84319 09508';

  const handleNavClick = (pageId) => {
    if (pageId === 'home') {
      window.location.href = '/';
    } else if (pageId === 'plots') {
      window.location.href = '/plots-in-bangalore';
    } else if (pageId === 'villas') {
      window.location.href = '/luxury-villas-bangalore';
    } else if (pageId === 'purva-villa') {
      window.location.href = '/purva-sounds-of-water';
    } else {
      window.location.href = `/?page=${pageId}`;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F8F5] text-[#1A1A1A] flex flex-col justify-between selection:bg-[#F2B705] selection:text-[#0B1F3A]">
      <div>
        <Navbar activePage="villas" setActivePage={handleNavClick} />

        <main className="animate-fadeIn">
          {/* Breadcrumb Bar */}
          <div className="bg-[#0B1F3A] text-white/80 py-3 border-b border-white/10 text-xs">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
              <nav aria-label="Breadcrumb" className="flex items-center gap-2">
                <a href="/" className="hover:text-[#C8A34D] transition-colors">Home</a>
                <span>/</span>
                <a href="/luxury-villas-bangalore" className="hover:text-[#C8A34D] transition-colors">Luxury Villas</a>
                <span>/</span>
                <span className="text-[#C8A34D] font-bold">Purva Symphony Resale Listing</span>
              </nav>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-emerald-400 font-bold">
                <ShieldCheck className="w-4 h-4" /> Resale listing • verify unit details
              </span>
            </div>
          </div>

          {/* Interactive Project Details View */}
          <ProjectDetailsPage projectId="project-purva-sounds-of-water-villa" setActivePage={handleNavClick} />

          {/* Architectural Deep-Dive & Entity-Rich SEO Section */}
          <section className="bg-white py-16 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              
              <div className="text-center space-y-3 max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1F3A]/5 border border-[#0B1F3A]/15 text-[#0B1F3A] text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-[#C8A34D]" />
                  Seller-Listed Resale • Unit Details Require Verification
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] font-heading">
                  Purva Symphony at The Sound of Water: Seller-Listed Villa in South Bengaluru
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Purva Symphony is Puravankara’s independent-mansion enclave at The Sound of Water, off Bannerghatta Road, Bengaluru. This page describes one seller-advertised resale unit; confirm its configuration, measurements, price, availability and unit-specific features against original documents.
                </p>
                <div className="divider-gold mx-auto" />
              </div>

              {/* Specification Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-[#F8F8F5] p-6 rounded-2xl border border-[#0B1F3A]/10 space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-[#0B1F3A]/10 flex items-center justify-center text-[#C8A34D]">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#0B1F3A] text-sm">Seller-Reported Areas</h3>
                  <p className="text-xs text-slate-600">
                    5,000 sq.ft land and 7,000 sq.ft built-up area, as reported by the seller; verify measurements and area basis in the unit documents.
                  </p>
                </div>

                <div className="bg-[#F8F8F5] p-6 rounded-2xl border border-[#0B1F3A]/10 space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-[#0B1F3A]/10 flex items-center justify-center text-[#C8A34D]">
                    <Trees className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#0B1F3A] text-sm">Seller-Advertised Unit Features</h3>
                  <p className="text-xs text-slate-600">
                    The seller reports a private garden and swimming pool; confirm these features during inspection.
                  </p>
                </div>

                <div className="bg-[#F8F8F5] p-6 rounded-2xl border border-[#0B1F3A]/10 space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-[#0B1F3A]/10 flex items-center justify-center text-[#C8A34D]">
                    <Bed className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#0B1F3A] text-sm">Seller-Advertised Five Bedrooms</h3>
                  <p className="text-xs text-slate-600">
                    The seller describes this resale as five-bedroom. Puravankara lists 3- and 4-BHK residences for the wider community; verify this unit’s sanctioned plan.
                  </p>
                </div>

                <div className="bg-[#F8F8F5] p-6 rounded-2xl border border-[#0B1F3A]/10 space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-[#0B1F3A]/10 flex items-center justify-center text-[#C8A34D]">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#0B1F3A] text-sm">Official Project Information</h3>
                  <p className="text-xs text-slate-600">
                    Puravankara describes Purva Symphony at The Sound of Water as offering 3- and 4-BHK residences. <a className="underline font-semibold" href="https://www.puravankara.com/residential/bengaluru/purva-symphony" target="_blank" rel="noopener noreferrer">View the developer’s project page.</a>
                  </p>
                </div>
              </div>

              {/* Comprehensive Comparison Table */}
              <div className="bg-[#F8F8F5] p-6 sm:p-8 rounded-2xl border border-[#0B1F3A]/10 space-y-6">
                <h3 className="text-xl font-bold text-[#0B1F3A] font-heading">
                  Seller-Advertised Unit Details — Verify Before Purchase
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-[#0B1F3A]/15 text-[#0B1F3A] uppercase font-bold tracking-wider">
                        <th className="py-3 px-4">Parameter</th>
                        <th className="py-3 px-4">Specification Details</th>
                        <th className="py-3 px-4">Buyer Benefit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr>
                        <td className="py-3 px-4 font-bold text-[#0B1F3A]">Project Name</td>
                        <td className="py-3 px-4">Purva Symphony at The Sound of Water</td>
                        <td className="py-3 px-4">Puravankara’s official project name and community description</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-[#0B1F3A]">Villa Type & Model</td>
                        <td className="py-3 px-4">Seller-advertised five-bedroom resale</td>
                        <td className="py-3 px-4">Configuration and unit type are not confirmed by the developer; verify the sanctioned plan</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-[#0B1F3A]">Land Parcel Area</td>
                        <td className="py-3 px-4">Seller-reported 5,000 sq.ft</td>
                        <td className="py-3 px-4">Confirm the land measurement in the unit documents</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-[#0B1F3A]">Seller-Reported Built-Up Area</td>
                        <td className="py-3 px-4">Seller-reported 7,000 sq.ft</td>
                        <td className="py-3 px-4">Confirm the area basis and approved plan</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-[#0B1F3A]">Configuration</td>
                        <td className="py-3 px-4">Seller advertises five bedrooms</td>
                        <td className="py-3 px-4">Verify bedroom count and any additional rooms against the sanctioned plan</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-[#0B1F3A]">Private Garden</td>
                        <td className="py-3 px-4">Seller-advertised garden</td>
                        <td className="py-3 px-4">Confirm size, boundaries and ownership during inspection</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-[#0B1F3A]">Private Swimming Pool</td>
                        <td className="py-3 px-4">Seller advertises a private pool</td>
                        <td className="py-3 px-4">Confirm this unit-specific feature during inspection</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-[#0B1F3A]">Outhouse Cottage</td>
                        <td className="py-3 px-4">Seller advertises an outhouse</td>
                        <td className="py-3 px-4">Confirm approvals and details in the unit documents</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-[#0B1F3A]">Facing & Vaastu</td>
                        <td className="py-3 px-4">Seller describes the unit as west-facing</td>
                        <td className="py-3 px-4">Confirm orientation from the site plan</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-[#0B1F3A]">Price & Brokerage</td>
                        <td className="py-3 px-4">Seller-quoted ₹9.0 Cr asking price</td>
                        <td className="py-3 px-4">Reconfirm price, availability and any buyer charges with the advisor</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-[#0B1F3A]">Approvals & Approving Authority</td>
                        <td className="py-3 px-4">Puravankara lists project RERA PRM/KA/RERA/1251/310/PR/210907/004300</td>
                        <td className="py-3 px-4">Confirm the applicable phase, unit approvals, title, khata and occupancy documents independently</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </section>

          {/* Location & Micro-Market Advantage */}
          <section className="bg-[#F8F8F5] py-16 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="text-center space-y-3 max-w-2xl mx-auto">
                <span className="text-xs font-bold text-[#7A5C10] uppercase tracking-wider">
                  South Bengaluru • Off Bannerghatta Road
                </span>
                <h2 className="text-3xl font-extrabold text-[#0B1F3A] font-heading">
                  Purva Symphony at The Sound of Water, Bengaluru
                </h2>
                <p className="text-sm text-slate-600">
                  The distances below are published by Puravankara for the wider Purva Symphony project. Actual travel time from this specific resale unit varies with route and traffic, so confirm the exact pin before planning a commute.
                </p>
              </div>

              {/* Verified Developer-Published Project Facts */}
              <div className="rounded-2xl border border-[#C8A34D]/30 bg-white p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2 text-xs font-black text-[#7A5C10] uppercase tracking-wider">
                  <Award className="w-4 h-4 text-[#C8A34D]" />
                  Official Project Facts — Puravankara’s Published Information
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3 text-xs text-slate-700">
                  <div className="flex justify-between gap-3 border-b border-slate-100 pb-2"><span className="text-slate-500">Official project name</span><span className="font-bold text-[#0B1F3A] text-right">Purva Symphony at The Sound of Water</span></div>
                  <div className="flex justify-between gap-3 border-b border-slate-100 pb-2"><span className="text-slate-500">Developer</span><span className="font-bold text-[#0B1F3A] text-right">Puravankara Limited</span></div>
                  <div className="flex justify-between gap-3 border-b border-slate-100 pb-2"><span className="text-slate-500">Location</span><span className="font-bold text-[#0B1F3A] text-right">Off Bannerghatta Road, South Bengaluru</span></div>
                  <div className="flex justify-between gap-3 border-b border-slate-100 pb-2"><span className="text-slate-500">Development size</span><span className="font-bold text-[#0B1F3A] text-right">20 acres approx.</span></div>
                  <div className="flex justify-between gap-3 border-b border-slate-100 pb-2"><span className="text-slate-500">Official configurations</span><span className="font-bold text-[#0B1F3A] text-right">3 & 4 BHK villas</span></div>
                  <div className="flex justify-between gap-3 border-b border-slate-100 pb-2"><span className="text-slate-500">Developer price</span><span className="font-bold text-[#0B1F3A] text-right">₹4.80 Cr onwards*</span></div>
                  <div className="flex justify-between gap-3 border-b border-slate-100 pb-2"><span className="text-slate-500">Project RERA</span><span className="font-bold text-[#0B1F3A] text-right">PRM/KA/RERA/1251/310/PR/210907/004300</span></div>
                  <div className="flex justify-between gap-3 border-b border-slate-100 pb-2"><span className="text-slate-500">Project status</span><span className="font-bold text-[#0B1F3A] text-right">Ongoing • possession 30-06-2026</span></div>
                  <div className="flex justify-between gap-3 border-b border-slate-100 pb-2"><span className="text-slate-500">Project financing</span><span className="font-bold text-[#0B1F3A] text-right">ICICI HFC & SBM Bank</span></div>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  *Developer-published project information for Purva Symphony, current as of our last review; prices, inventory, configuration and possession dates change. Confirm all details directly with Puravankara. The five-bedroom villa described on this page is a separate seller-advertised resale unit and is not a developer-confirmed configuration.
                </p>
                <a
                  href="https://www.puravankara.com/residential/bengaluru/purva-symphony"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0B1F3A] underline"
                >
                  See Puravankara’s official project page <ArrowRight className="w-4 h-4 text-[#C8A34D]" />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                  <div className="text-[#C8A34D] font-bold text-sm">Schools, Healthcare & Retail</div>
                  <ul className="text-xs text-slate-600 space-y-1.5 pt-1">
                    <li>• IIM Bangalore: 5 minutes</li>
                    <li>• Royal Meenakshi Mall & Decathlon Bannerghatta: 5 minutes</li>
                    <li>• Ryan International & BGS National Public School: 10 minutes</li>
                    <li>• Fortis Hospital & Apollo Hospitals Bannerghatta: 10 minutes</li>
                    <li>• Vega City Mall: 10 minutes</li>
                    <li>• Narayana Health City: 20 minutes</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                  <div className="text-[#C8A34D] font-bold text-sm">Metro, IT & Airport Connectivity</div>
                  <ul className="text-xs text-slate-600 space-y-1.5 pt-1">
                    <li>• Kalyani Magnum IT Tech Park: 10 minutes</li>
                    <li>• Jayadeva Hospital Metro Station: 15 minutes</li>
                    <li>• HSBC Software Development India: 15 minutes</li>
                    <li>• Electronic City: 25 minutes</li>
                    <li>• MG Road Metro & Bangalore City Railway Station: 30 minutes</li>
                    <li>• Kempegowda International Airport: 60 minutes</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                  <div className="text-[#C8A34D] font-bold text-sm">Developer-Listed Project Amenities</div>
                  <ul className="text-xs text-slate-600 space-y-1.5 pt-1">
                    <li>• Man-made waterfall and Aqua Clubhouse</li>
                    <li>• Infinity pool, yoga space and jogging track</li>
                    <li>• Temple of Body & Mind with gym, steam and sauna</li>
                    <li>• Tennis and multipurpose courts, cricket practice pitch</li>
                    <li>• Garden of Five Senses and children’s play area</li>
                    <li>• Confirm current availability with the developer</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Purva Sounds of Water FAQ Section */}
          <section className="bg-white py-16 border-t border-slate-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
              
              <div className="text-center space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1F3A]/5 text-[#0B1F3A] text-xs font-bold uppercase">
                  <HelpCircle className="w-4 h-4 text-[#C8A34D]" />
                  Resale Listing Information
                </div>
                <h2 className="text-3xl font-extrabold text-[#0B1F3A] font-heading">
                  Questions About This Purva Symphony Resale Listing
                </h2>
                <p className="text-sm text-slate-600">
                  Seller-provided unit details are not developer-verified. Puravankara’s official project information is linked above; reconfirm price, availability and original unit documents before making a decision.
                </p>
                <div className="divider-gold mx-auto" />
              </div>

              <div className="space-y-4">
                {PURVA_FAQS.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-200 overflow-hidden bg-[#F8F8F5] transition-all"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                        className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-100/60 transition-colors"
                        aria-expanded={isOpen}
                      >
                        <h3 className="text-base font-bold text-[#0B1F3A] font-heading pr-2">
                          {faq.q}
                        </h3>
                        <div className={`w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 transition-transform ${isOpen ? 'rotate-180 text-[#C8A34D]' : 'text-slate-500'}`}>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6 pt-1 text-sm text-slate-700 leading-relaxed border-t border-slate-200 bg-white">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Sticky Action Banner */}
              <div className="p-8 rounded-2xl bg-[#0B1F3A] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
                <div>
                  <h3 className="text-xl font-bold font-heading text-white">
                    Interested in This Seller-Listed Villa Resale?
                  </h3>
                  <p className="text-xs text-white/70 mt-1">
                    Contact the advisor to confirm availability, viewing arrangements and any buyer charges.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Lakshie Real Estate! I would like to enquire about the seller-listed resale villa at Purva Symphony, The Sound of Water.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold py-3 px-6 text-xs font-black uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 fill-[#0B1F3A]" />
                    Book VIP Site Visit
                  </a>

                  <a
                    href={`tel:${displayPhone}`}
                    className="py-3 px-5 rounded-xl border border-white/20 hover:border-white text-white text-xs font-bold flex items-center gap-2 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#C8A34D]" />
                    {displayPhone}
                  </a>
                </div>
              </div>

            </div>
          </section>

        </main>
      </div>

      <FloatingActions />
      <BookSiteVisitModal />
      <Footer setActivePage={handleNavClick} />
    </div>
  );
}

export default function PurvaVillaView() {
  return (
    <PlotsProvider>
      <PurvaVillaContent />
    </PlotsProvider>
  );
}
