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
    q: 'What is the exact price and brokerage for this 5 BHK villa in Purva Sounds of Water?',
    a: 'The villa is offered at ₹9.0 Crore (negotiable for genuine buyers). As an authorized developer channel partner, Lakshie Real Estate charges 0% brokerage to buyers. You deal directly with the developer with 100% price transparency and complimentary documentation assistance.'
  },
  {
    q: 'What are the land plot and built-up dimensions of this villa?',
    a: 'This exclusive A+ Type villa features a 5,000 sq.ft land parcel with an expansive 7,000 sq.ft of built-up area across multiple levels. It includes 5 spacious ensuite bedrooms, 6 luxury bathrooms, 2 expansive family living halls, a home theatre/gym area, and an independent outhouse cottage.'
  },
  {
    q: 'Does this specific villa include a private swimming pool and garden?',
    a: 'Yes. In addition to the grand community clubhouse amenities at Purva Sounds of Water, this villa features an approx. 2,200 sq.ft private lush landscaped garden and its own private swimming pool surrounded by teak wood deck accents and foliage.'
  },
  {
    q: 'Where is Purva Sounds of Water situated and what is the transit connectivity?',
    a: 'Purva Sounds of Water is situated off Bannerghatta Main Road in South Bengaluru, approx. 5 minutes from Royal Meenakshi Mall. It is 5 minutes from the proposed Pink Line Metro (Kalena Agrahara / Gottigere station) and 8 minutes from the NICE Ring Road junction, enabling an easy 20-minute commute to Electronic City.'
  },
  {
    q: 'Are the titles, BBMP approvals, and RERA registration verified?',
    a: 'Yes. Purva Sounds of Water is fully RERA registered (PRM/KA/RERA/1251/310/PR/170915/000219), BBMP approved, with clear A-Khata ownership title and pre-approved home loan clearances from SBI, HDFC, ICICI, Axis, and Kotak Mahindra Bank.'
  },
  {
    q: 'What is the Vaastu orientation of this villa?',
    a: 'The villa has a prime west-facing main entry orientation, designed according to Vaastu Shastra principles to maximize natural morning sunlight, cross-ventilation, and harmonious living.'
  },
  {
    q: 'How does the complimentary VIP site visit work?',
    a: 'We arrange a private, chauffeured doorstep cab pickup for you and your family. On-site, an experienced advisory specialist guides you through the villa, grounds, and masterplan blueprints, followed by direct developer negotiation assistance.'
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
                <span className="text-[#C8A34D] font-bold">Purva Sounds of Water (5 BHK)</span>
              </nav>

              <span className="hidden sm:inline-flex items-center gap-1.5 text-emerald-400 font-bold">
                <ShieldCheck className="w-4 h-4" /> 0% Brokerage Direct Developer Channel Partner
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
                  A+ Type Luxury Villa Architectural Profile
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] font-heading">
                  Purva Sounds of Water – 5 BHK Luxury Living in South Bengaluru
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Located off Bannerghatta Main Road, Purva Sounds of Water is one of Bengaluru's most iconic water-themed luxury villa communities. This A+ Type residence is crafted for families seeking unmatched space, exclusivity, and nature.
                </p>
                <div className="divider-gold mx-auto" />
              </div>

              {/* Specification Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-[#F8F8F5] p-6 rounded-2xl border border-[#0B1F3A]/10 space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-[#0B1F3A]/10 flex items-center justify-center text-[#C8A34D]">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#0B1F3A] text-sm">Land & Built-up Area</h3>
                  <p className="text-xs text-slate-600">
                    5,000 sq.ft Land Plot with 7,000 sq.ft Built-up Area spanning 3 levels.
                  </p>
                </div>

                <div className="bg-[#F8F8F5] p-6 rounded-2xl border border-[#0B1F3A]/10 space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-[#0B1F3A]/10 flex items-center justify-center text-[#C8A34D]">
                    <Trees className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#0B1F3A] text-sm">Private Garden & Pool</h3>
                  <p className="text-xs text-slate-600">
                    Approx. 2,200 sq.ft private lawn garden plus an exclusive private swimming pool.
                  </p>
                </div>

                <div className="bg-[#F8F8F5] p-6 rounded-2xl border border-[#0B1F3A]/10 space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-[#0B1F3A]/10 flex items-center justify-center text-[#C8A34D]">
                    <Bed className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#0B1F3A] text-sm">5 BHK + Outhouse</h3>
                  <p className="text-xs text-slate-600">
                    5 Ensuite Bedrooms, 6 Bathrooms, Home Theatre / Gym, plus independent outhouse.
                  </p>
                </div>

                <div className="bg-[#F8F8F5] p-6 rounded-2xl border border-[#0B1F3A]/10 space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-[#0B1F3A]/10 flex items-center justify-center text-[#C8A34D]">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#0B1F3A] text-sm">Tier-1 Developer & 0% Brokerage</h3>
                  <p className="text-xs text-slate-600">
                    Developed by Puravankara Limited. Direct channel partner allocation with zero buyer brokerage.
                  </p>
                </div>
              </div>

              {/* Comprehensive Comparison Table */}
              <div className="bg-[#F8F8F5] p-6 sm:p-8 rounded-2xl border border-[#0B1F3A]/10 space-y-6">
                <h3 className="text-xl font-bold text-[#0B1F3A] font-heading">
                  Purva Sounds of Water 5 BHK Luxury Villa – Full Technical Factsheet
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
                        <td className="py-3 px-4">Purva Sounds of Water</td>
                        <td className="py-3 px-4">Iconic water-inspired gated community in South Bangalore</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-[#0B1F3A]">Villa Type & Model</td>
                        <td className="py-3 px-4">A+ Type Luxury Villa (Flagship Elevation)</td>
                        <td className="py-3 px-4">Highest tier elevation with maximum floor space & frontage</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-[#0B1F3A]">Land Parcel Area</td>
                        <td className="py-3 px-4">5,000 Sq.Ft</td>
                        <td className="py-3 px-4">Generous setbacks, large driveway & private open green space</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-[#0B1F3A]">Super Built-Up Area</td>
                        <td className="py-3 px-4">7,000 Sq.Ft</td>
                        <td className="py-3 px-4">Grand multi-level living with double-height ceiling foyers</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-[#0B1F3A]">Configuration</td>
                        <td className="py-3 px-4">5 Bedrooms | 6 Bathrooms | 2 Living Halls</td>
                        <td className="py-3 px-4">Ample privacy for multi-generational families and guests</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-[#0B1F3A]">Private Garden</td>
                        <td className="py-3 px-4">Approx. 2,200 Sq.Ft Landscaped Lawn</td>
                        <td className="py-3 px-4">Private outdoor oasis for entertainment, pets, and relaxation</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-[#0B1F3A]">Private Swimming Pool</td>
                        <td className="py-3 px-4">Yes (Private on premises with wooden deck)</td>
                        <td className="py-3 px-4">Exclusive personal swimming without leaving your villa</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-[#0B1F3A]">Outhouse Cottage</td>
                        <td className="py-3 px-4">Included on premises with bathroom</td>
                        <td className="py-3 px-4">Separate staff quarters, private study, or artist studio</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-[#0B1F3A]">Facing & Vaastu</td>
                        <td className="py-3 px-4">West Facing</td>
                        <td className="py-3 px-4">Aligned with Vaastu guidelines for prosperity and airflow</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-[#0B1F3A]">Price & Brokerage</td>
                        <td className="py-3 px-4">₹9.0 Cr (Negotiable) • Zero Brokerage</td>
                        <td className="py-3 px-4">Save ₹18 to ₹25 Lakhs in conventional broker commission</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-[#0B1F3A]">Approvals & Approving Authority</td>
                        <td className="py-3 px-4">BBMP & RERA Karnataka Registered (PRM/KA/RERA/1251/310/PR/170915/000219)</td>
                        <td className="py-3 px-4">100% legal title clearance with A-Khata documentation</td>
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
                  South Bengaluru Prime Corridor
                </span>
                <h2 className="text-3xl font-extrabold text-[#0B1F3A] font-heading">
                  Strategic Location on Bannerghatta Main Road
                </h2>
                <p className="text-sm text-slate-600">
                  Enjoy rapid transit connectivity to JP Nagar, Jayanagar, Electronic City, and the NICE Ring Road corridor.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                  <div className="text-[#C8A34D] font-bold text-sm">Retail & Social Hubs</div>
                  <ul className="text-xs text-slate-600 space-y-1.5 pt-1">
                    <li>• Royal Meenakshi Mall: 5 Mins</li>
                    <li>• Vega City Mall & Shoppers Stop: 12 Mins</li>
                    <li>• Fortis & Apollo Hospitals: 10-12 Mins</li>
                    <li>• BGS National Public School & Ryan Intl: 8 Mins</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                  <div className="text-[#C8A34D] font-bold text-sm">Metro & Expressway Connectivity</div>
                  <ul className="text-xs text-slate-600 space-y-1.5 pt-1">
                    <li>• Proposed Pink Line Metro Station: 5 Mins</li>
                    <li>• NICE Ring Road Interchange: 8 Mins</li>
                    <li>• Electronic City IT Hub via NICE: 20 Mins</li>
                    <li>• Kanakapura Road Metro Line: 12 Mins</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                  <div className="text-[#C8A34D] font-bold text-sm">Community Lifestyle</div>
                  <ul className="text-xs text-slate-600 space-y-1.5 pt-1">
                    <li>• Water-Themed Landscapes & Nature Trails</li>
                    <li>• Grand Clubhouse with Olympic-length Pool</li>
                    <li>• Tennis, Squash, Badminton & Basketball Courts</li>
                    <li>• 24/7 Gated Security with Multi-tier CCTV</li>
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
                  Verified Buyer Answers
                </div>
                <h2 className="text-3xl font-extrabold text-[#0B1F3A] font-heading">
                  Frequently Asked Questions – Purva Sounds of Water 5 BHK Villa
                </h2>
                <p className="text-sm text-slate-600">
                  Direct facts for high-intent buyers evaluating this ₹9.0 Cr luxury villa on Bannerghatta Road.
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
                    Ready to Tour This Exclusive 5 BHK Luxury Villa?
                  </h3>
                  <p className="text-xs text-white/70 mt-1">
                    Complimentary VIP chauffeured doorstep pickup & direct developer price negotiation. Zero brokerage.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Lakshie Real Estate! I would like to book a private VIP site visit for the Purva Sounds of Water 5 BHK luxury villa.')}`}
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
