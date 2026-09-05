'use client';

import React, { useState, useMemo, useEffect } from 'react';
import {
  Compass, MapPin, Sparkles, Building2, Home, Layers, Ruler,
  CheckCircle2, ArrowRight, ArrowLeft, Copy, RotateCcw,
  Check, Search, Phone, User, ShieldCheck, TrendingUp, Clock,
  MessageCircle, Flame, SlidersHorizontal, Info, Calculator,
  Car, Award, ChevronRight, Share2, Sparkle, Printer,
  Sun, Navigation, Eye, CheckCheck, FileText, BadgePercent
} from 'lucide-react';
import { usePlots } from '../context/PlotsContext';

export default function PropertyMatchmakerPage({ setActivePage }) {
  const { bookSiteVisit, showToast } = usePlots();

  // Step Tracker
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  // Form State
  const [propertyType, setPropertyType] = useState('Plot');
  const [locationCorridor, setLocationCorridor] = useState('North Bengaluru (Airport & STRR Corridor)');
  const [activeZoneFilter, setActiveZoneFilter] = useState('all'); // all, north, east, south, west
  const [customLocation, setCustomLocation] = useState('');
  const [locationSearchQuery, setLocationSearchQuery] = useState('');
  const [plotSize, setPlotSize] = useState('30*40');
  const [customWidth, setCustomWidth] = useState(30);
  const [customLength, setCustomLength] = useState(40);
  const [facingPreference, setFacingPreference] = useState('East Facing');
  const [blueprintActiveLayer, setBlueprintActiveLayer] = useState('floorplan'); // floorplan, vastu, setbacks
  
  // Budget & Financial State
  const [budgetLakhs, setBudgetLakhs] = useState(55);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [purchaseTimeline, setPurchaseTimeline] = useState('Within 30 Days (Ready)');
  const [preferredVisitDay, setPreferredVisitDay] = useState('This Weekend (Saturday/Sunday)');
  
  // Contact State
  const [countryCode, setCountryCode] = useState('+91');
  const [userName, setUserName] = useState('');
  const [userContact, setUserContact] = useState('');
  const [userNotes, setUserNotes] = useState('');

  // Processing & UI State
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [analysisPhaseText, setAnalysisPhaseText] = useState('Scanning BDA & BIAAPA Layouts...');
  const [copied, setCopied] = useState(false);
  const [validationError, setValidationError] = useState('');
  const [dossierId, setDossierId] = useState('BLR-7482');

  const whatsappConsultantNumber = '918431909508';
  const displayPhone = '+91 84319 09508';

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter' && currentStep <= 5 && !isAnalyzing) {
        // Prevent accidental form submission on textarea
        if (e.target.tagName !== 'TEXTAREA') {
          handleNext();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  // Plot Dimensions Metadata
  const plotDimensionOptions = [
    {
      id: '20*30',
      label: '20 x 30',
      width: 20,
      length: 30,
      sqft: 600,
      badge: 'Budget Compact',
      desc: 'Smart 2-3 BHK compact duplex or high-yield rental layout',
      builtUp: '1,050 - 1,200 sq.ft (G+1)',
      recommendedLayout: '2-3 BHK Duplex with Stilt Parking',
      vastuZone: 'Compact East/North Entrance'
    },
    {
      id: '30*40',
      label: '30 x 40',
      width: 30,
      length: 40,
      sqft: 1200,
      badge: '⭐ Most Popular',
      desc: 'Standard Bengaluru plot. Ideal 3-4 BHK villa with surrounding setbacks',
      builtUp: '2,100 - 2,400 sq.ft (G+2)',
      recommendedLayout: '3-4 BHK Luxury Villa + Terrace Garden + 2 Car Park',
      vastuZone: 'Prime North-East Puja & South-East Kitchen'
    },
    {
      id: '30*50',
      label: '30 x 50',
      width: 30,
      length: 50,
      sqft: 1500,
      badge: 'Executive Villa',
      desc: 'Expansive 4 BHK with private side lawn, patio, and 2-car covered parking',
      builtUp: '2,600 - 3,000 sq.ft (G+2)',
      recommendedLayout: '4 BHK Grand Villa + Home Office + Deck + Lawn',
      vastuZone: 'Master Suite in South-West Corner'
    },
    {
      id: '40*60',
      label: '40 x 60',
      width: 40,
      length: 60,
      sqft: 2400,
      badge: 'Luxury Villa Plot',
      desc: 'Generous 4-5 BHK luxury mansion with home theatre and large setbacks',
      builtUp: '4,200 - 4,800 sq.ft (G+2)',
      recommendedLayout: '4-5 BHK Mansions + Private Courtyard + 3 Cars',
      vastuZone: 'Grand Central Brahmasthan Courtyard'
    },
    {
      id: '50*60',
      label: '50 x 60',
      width: 50,
      length: 60,
      sqft: 3000,
      badge: 'Grand Estate',
      desc: 'Palatial villa estate with private swimming pool & landscaped courtyard',
      builtUp: '5,200 - 6,000 sq.ft (G+2)',
      recommendedLayout: 'Bespoke Luxury Estate + Swimming Pool + Lawn',
      vastuZone: 'Multi-Generation Villa Architecture'
    },
    {
      id: 'custom',
      label: 'Custom Size',
      width: Number(customWidth) || 30,
      length: Number(customLength) || 40,
      sqft: (Number(customWidth) || 30) * (Number(customLength) || 40),
      badge: 'Tailored Footprint',
      desc: 'Specify your bespoke dimensions or odd-sized corner plot requirements',
      builtUp: `Approx ${Math.round(((Number(customWidth) || 30) * (Number(customLength) || 40)) * 1.8)} sq.ft`,
      recommendedLayout: 'Custom Architectural Design & Setbacks',
      vastuZone: 'Customized Vastu Alignment'
    }
  ];

  // Property types
  const propertyTypes = [
    {
      id: 'Plot',
      title: 'Residential Plot',
      tagline: 'Land Only • Complete Design Freedom',
      desc: 'BIAAPA / BDA / BMRDA / RERA approved plotted developments with asphalt roads, underground cabling & piped water.',
      icon: Layers,
      highlight: 'Highest Capital ROI',
      avgPrice: 'From ₹3,400 / sq.ft',
      perk: 'Build up to G+3 Floors'
    },
    {
      id: 'Villa Plot',
      title: 'Luxury Villa Plot',
      tagline: 'Gated Villa Community with Clubhouse',
      desc: 'Pre-planned master enclave with pre-approved architectural elevations, 50,000 sq.ft clubhouse & landscaped parks.',
      icon: Home,
      highlight: 'Elite Community Living',
      avgPrice: 'From ₹4,500 / sq.ft',
      perk: 'Turnkey Construction Available'
    },
    {
      id: 'Ready to Move Plot',
      title: 'Ready to Move Plot',
      tagline: 'Immediate Registration & Construction',
      desc: 'Plots with ready A-Khatas, functional transformer power, completed security perimeter, and immediate construction clearance.',
      icon: CheckCircle2,
      highlight: 'Zero Construction Delay',
      avgPrice: 'From ₹3,800 / sq.ft',
      perk: 'Ready A-Khata & Bank Loans'
    },
    {
      id: 'Apartments',
      title: 'High-Rise Luxury Apartment',
      tagline: '2, 3 & 4 BHK Integrated Townships',
      desc: 'Prestige / Sobha master townships with infinity pools, sports arenas, 24/7 security, and seamless tech park commute.',
      icon: Building2,
      highlight: 'Zero Maintenance Effort',
      avgPrice: 'From ₹7,200 / sq.ft',
      perk: 'Ready Amenities & Security'
    }
  ];

  // Corridors
  const bengaluruCorridors = [
    {
      id: 'devanahalli',
      zone: 'north',
      name: 'North Bengaluru (Airport & STRR Corridor)',
      sub: 'Devanahalli, STRR Ring Road, KIADB Aerospace Hub, Bagalur',
      roi: '+18.4% YoY',
      distanceAirport: '10-15 mins to Kempegowda Airport',
      tag: '⭐ #1 Investment Belt',
      icon: '✈️',
      infrastructure: 'STRR Highway 6-Lane Expressway + Metro Blue Line'
    },
    {
      id: 'whitefield',
      zone: 'east',
      name: 'East Bengaluru (Whitefield - Hoskote Corridor)',
      sub: 'Whitefield Extension, Chikka Tirupati, Hope Farm, STRR Junction',
      roi: '+15.9% YoY',
      distanceAirport: '35 mins via STRR Express',
      tag: 'Tech Hub Belt',
      icon: '💼',
      infrastructure: 'Purple Line Metro + STRR Intersection'
    },
    {
      id: 'sarjapur',
      zone: 'east',
      name: 'East Bengaluru (Sarjapur - Attibele Corridor)',
      sub: 'Sarjapur Main Road, Wipro SEZ, Attibele Smart City & Tech Belt',
      roi: '+16.2% YoY',
      distanceAirport: 'Connected via STRR Phase 2',
      tag: 'High Rental Yield',
      icon: '🌳',
      infrastructure: 'Wipro SEZ + Outer Ring Road Connectivity'
    },
    {
      id: 'ecity',
      zone: 'south',
      name: 'South Bengaluru (Electronic City - Chandapura)',
      sub: 'Electronic City Phase 1 & 2, Jigani Industrial Hub, Hosur Highway',
      roi: '+14.5% YoY',
      distanceAirport: 'Direct Yellow Line Metro',
      tag: 'Metro Connected',
      icon: '⚡',
      infrastructure: 'Yellow Line Metro + Elevated Expressway'
    },
    {
      id: 'kanakapura',
      zone: 'south',
      name: 'South Bengaluru (Kanakapura Road & NICE Corridor)',
      sub: 'Kanakapura Expressway, Art of Living, Thalaghattapura Metro',
      roi: '+13.8% YoY',
      distanceAirport: 'NICE Road Expressway Direct',
      tag: 'Serene Green Belt',
      icon: '🌄',
      infrastructure: 'Green Line Metro + NICE Road Junction'
    },
    {
      id: 'mysore_rd',
      zone: 'west',
      name: 'West Bengaluru (Mysore Road Expressway & Kengeri)',
      sub: 'Kengeri Satellite Town, Bidadi Smart City, Bengaluru-Mysuru Corridor',
      roi: '+14.1% YoY',
      distanceAirport: 'Purple Line Metro Access',
      tag: 'Expressway Growth',
      icon: '🛣️',
      infrastructure: 'Bengaluru-Mysuru 10-Lane Expressway'
    }
  ];

  // Quick localities list for fuzzy filtering
  const allBengaluruLocalities = [
    'Devanahalli', 'STRR Ring Road', 'Whitefield', 'Sarjapur Road',
    'Hoskote', 'Hebbal', 'Yelahanka', 'Budigere Cross', 'Electronic City',
    'Chikka Tirupati', 'Varthur', 'Kanakapura Road', 'HSR Layout',
    'JP Nagar', 'Bannerghatta Road', 'Kengeri', 'Bidadi', 'Bagalur KIADB',
    'Doddaballapur Road', 'Bellary Road Highway', 'Thanisandra'
  ];

  const filteredCorridors = useMemo(() => {
    if (activeZoneFilter === 'all') return bengaluruCorridors;
    return bengaluruCorridors.filter(c => c.zone === activeZoneFilter);
  }, [activeZoneFilter]);

  const filteredQuickLocalities = useMemo(() => {
    if (!locationSearchQuery.trim()) return allBengaluruLocalities;
    return allBengaluruLocalities.filter(loc =>
      loc.toLowerCase().includes(locationSearchQuery.toLowerCase())
    );
  }, [locationSearchQuery]);

  // Active Plot Details
  const activePlot = useMemo(() => {
    if (plotSize === 'custom') {
      const w = Number(customWidth) || 30;
      const l = Number(customLength) || 40;
      return {
        label: `${w} x ${l}`,
        width: w,
        length: l,
        sqft: w * l,
        builtUp: `Approx ${Math.round(w * l * 1.8)} sq.ft (G+2)`,
        recommendedLayout: 'Custom Architectural Design & Setbacks',
        vastuZone: 'Customized Vastu Alignment'
      };
    }
    return plotDimensionOptions.find(p => p.id === plotSize) || plotDimensionOptions[1];
  }, [plotSize, customWidth, customLength]);

  // Resolved Location String
  const resolvedLocation = customLocation.trim()
    ? `${customLocation.trim()} (Bengaluru)`
    : locationCorridor;

  const resolvedPlotSizeStr = `${activePlot.label} (${activePlot.sqft} sq.ft)`;

  // Financial Calculations
  const calculatedSqftRate = Math.round((budgetLakhs * 100000) / (activePlot.sqft || 1200));
  const loanPercent = 100 - downPaymentPercent;
  const estimatedLoanAmount = Math.round(budgetLakhs * (loanPercent / 100));
  const estimatedDownPaymentAmount = budgetLakhs - estimatedLoanAmount;
  
  // EMI calculation: P * r * (1+r)^n / ((1+r)^n - 1) for 15 yrs @ 8.5% p.a.
  const monthlyInterestRate = 0.085 / 12;
  const numberOfMonths = 180;
  const loanPrincipal = estimatedLoanAmount * 100000;
  const estimatedMonthlyEMI = loanPrincipal > 0 ? Math.round(
    (loanPrincipal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths)) /
    (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1)
  ) : 0;
  const estimated3YrGrowth = Math.round(budgetLakhs * 1.55); // ~55% 3-year growth at ~16% CAGR

  // Compass rotation based on facing
  const compassRotation = useMemo(() => {
    switch (facingPreference) {
      case 'East Facing': return 90;
      case 'North Facing': return 0;
      case 'Corner Plot Only': return 45;
      case 'North-East Corner': return 45;
      case 'West / South Facing (Budget Friendly)': return 180;
      default: return 90;
    }
  }, [facingPreference]);

  // Step Progression Handler
  const handleNext = () => {
    setValidationError('');

    if (currentStep === 2) {
      if (!locationCorridor && !customLocation.trim()) {
        setValidationError('Please select an investment corridor or type your preferred Bengaluru locality.');
        return;
      }
    }

    if (currentStep === 3 && plotSize === 'custom') {
      if (!customWidth || !customLength || customWidth < 15 || customLength < 20) {
        setValidationError('Please enter valid plot dimensions (minimum 15ft width and 20ft length).');
        return;
      }
    }

    if (currentStep === 5) {
      if (!userName.trim()) {
        setValidationError('Please enter your full name so our advisor knows who to address.');
        return;
      }
      const rawDigits = userContact.replace(/\D/g, '');
      if (rawDigits.length < 8) {
        setValidationError('Please enter a valid 10-digit mobile or WhatsApp number.');
        return;
      }

      // Generate unique Dossier ID
      const newDossierId = `BLR-${Math.floor(1000 + Math.random() * 9000)}`;
      setDossierId(newDossierId);

      // Start VIP Matchmaking Engine Simulation
      setIsAnalyzing(true);
      setAnalysisProgress(15);
      setAnalysisPhaseText('Querying Karnataka RERA & BIAAPA Master Records...');

      const t1 = setTimeout(() => {
        setAnalysisProgress(45);
        setAnalysisPhaseText('Verifying Satellite Town Ring Road (STRR) Proximity...');
      }, 300);

      const t2 = setTimeout(() => {
        setAnalysisProgress(80);
        setAnalysisPhaseText('Locking Direct Developer Allotment Pricing (0% Brokerage)...');
      }, 700);

      const t3 = setTimeout(() => {
        setAnalysisProgress(100);
        setIsAnalyzing(false);
        setCurrentStep(6);

        // Automatically log lead into PlotsContext
        try {
          bookSiteVisit({
            name: userName.trim(),
            phone: `${countryCode} ${userContact.trim()}`,
            email: 'via-smart-finder@inquiry.com',
            projectTitle: `[Matchmaker #${newDossierId}] ${propertyType} in ${resolvedLocation} (${resolvedPlotSizeStr})`,
            visitDate: new Date().toISOString().split('T')[0],
            visitTime: '11:00 AM',
            cabPickup: true,
            pickupLocation: resolvedLocation,
            notes: `Budget: ₹${budgetLakhs}L (Down: ₹${estimatedDownPaymentAmount}L) | Timeline: ${purchaseTimeline} | Facing: ${facingPreference} | Visit: ${preferredVisitDay} | Note: ${userNotes || 'None'}`
          });
        } catch (err) {
          console.error('Lead record error:', err);
        }
      }, 1200);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }

    setCurrentStep(prev => Math.min(prev + 1, totalSteps));
  };

  const handlePrev = () => {
    setValidationError('');
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  // Build 100% Reliable WhatsApp Message
  const buildWhatsAppMessage = () => {
    return `*NEW PROPERTY INQUIRY VIA SMART FINDER*
[Dossier Ref: #${dossierId}]
----------------------------------------
• *Full Name:* ${userName.trim()}
• *Contact / WhatsApp:* ${countryCode} ${userContact.trim()}
• *Preferred Location:* ${resolvedLocation}
• *Property Category:* ${propertyType}
• *Plot Dimensions / Size:* ${resolvedPlotSizeStr}
• *Orientation Preference:* ${facingPreference}
• *Investment Budget:* ₹${budgetLakhs} Lakhs (Approx ₹${calculatedSqftRate.toLocaleString()}/sq.ft)
• *Estimated EMI:* ~₹${estimatedMonthlyEMI.toLocaleString()}/month (80% Loan)
• *Purchase Readiness:* ${purchaseTimeline}
• *Preferred Site Visit:* ${preferredVisitDay}
${userNotes.trim() ? `• *Specific Notes:* ${userNotes.trim()}\n` : ''}----------------------------------------
*Request:* Hello Premium Properties Advisory! I have completed the Smart Finder inquiry. Please send me verified RERA masterplans, available corner/standard plot layouts, and direct developer pricing for these specifications.`;
  };

  const encodedWhatsAppUrl = `https://api.whatsapp.com/send?phone=${whatsappConsultantNumber}&text=${encodeURIComponent(buildWhatsAppMessage())}`;

  const handleOpenWhatsApp = () => {
    window.open(encodedWhatsAppUrl, '_blank', 'noopener,noreferrer');
    showToast('Opening WhatsApp with your property query!');
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(buildWhatsAppMessage());
    setCopied(true);
    showToast('Property query copied to clipboard!');
    setTimeout(() => setCopied(false), 3000);
  };

  const handlePrintSummary = () => {
    window.print();
  };

  const resetAll = () => {
    setCurrentStep(1);
    setUserName('');
    setUserContact('');
    setUserNotes('');
    setCustomLocation('');
  };

  return (
    <div className="min-h-screen bg-[#F8F8F5] text-[#1A1A1A] py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">

        {/* ======================================================== */}
        {/* LUXURY HERO HEADER WITH DRAFTING GRID AESTHETIC */}
        {/* ======================================================== */}
        <div className="relative rounded-3xl bg-[#0B1F3A] text-white p-6 sm:p-10 border-2 border-[#C8A34D]/35 shadow-2xl overflow-hidden cad-grid text-center space-y-4">
          <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-[#C8A34D]/20 border border-[#C8A34D]/50 text-[#E6C875] text-xs font-extrabold uppercase tracking-wider shadow-sm">
            <Sparkle className="w-3.5 h-3.5 text-[#E6C875] animate-spin" />
            AI-Assisted Architectural Plot & Land Concierge
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight font-heading leading-tight">
            Find Your Dream Plot in <span className="gold-gradient-text">Bengaluru</span>
          </h1>

          <p className="text-xs sm:text-sm text-white/75 max-w-xl mx-auto font-light leading-relaxed">
            Experience our 5-step architectural discovery journey. Test plot dimensions on a live CAD simulator, compare Bengaluru growth corridors, and receive verified RERA layouts on WhatsApp.
          </p>

          {/* Value Assurance Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-[11px] font-bold text-[#E6C875]">
            <span className="flex items-center gap-1.5 bg-white/5 py-1 px-3.5 rounded-full border border-white/10">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C8A34D]" />
              100% RERA & BIAAPA Cleared
            </span>
            <span className="flex items-center gap-1.5 bg-white/5 py-1 px-3.5 rounded-full border border-white/10">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              0% Brokerage (Direct Channel Partner)
            </span>
            <span className="flex items-center gap-1.5 bg-white/5 py-1 px-3.5 rounded-full border border-white/10">
              <Car className="w-3.5 h-3.5 text-[#C8A34D]" />
              Complimentary AC Chauffeur Cab Pickup
            </span>
          </div>
        </div>

        {/* ======================================================== */}
        {/* STEPPER PROGRESS TRACKER */}
        {/* ======================================================== */}
        {currentStep <= 5 && (
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#0B1F3A]/10 shadow-md space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-[#0B1F3A]">
              <span className="flex items-center gap-1.5 text-[#C8A34D] uppercase tracking-wider">
                <Compass className="w-4 h-4 text-[#C8A34D]" />
                Step {currentStep} of {totalSteps}: {
                  currentStep === 1 ? 'Property Type & Vastu' :
                  currentStep === 2 ? 'Corridor Radar & Location' :
                  currentStep === 3 ? 'Interactive Blueprint Simulator' :
                  currentStep === 4 ? 'Budget & Financial Feasibility' : 'Your Contact Details'
                }
              </span>
              <span className="bg-[#0B1F3A] text-[#C8A34D] px-3 py-1 rounded-full text-[11px] font-black">
                {Math.round((currentStep / totalSteps) * 100)}% Complete
              </span>
            </div>

            {/* Glowing progress line */}
            <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
              <div
                className="h-full bg-gradient-to-r from-[#C8A34D] via-[#E6C875] to-[#C8A34D] rounded-full transition-all duration-500 ease-out shadow-sm"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>

            {/* Interactive Step Milestone Buttons */}
            <div className="grid grid-cols-5 gap-1 pt-1 text-center text-[10px] sm:text-xs font-semibold">
              {[
                { step: 1, label: '01 Property' },
                { step: 2, label: '02 Location' },
                { step: 3, label: '03 Blueprint' },
                { step: 4, label: '04 Budget' },
                { step: 5, label: '05 Contact' }
              ].map((s) => (
                <button
                  key={s.step}
                  type="button"
                  onClick={() => {
                    if (s.step < currentStep) setCurrentStep(s.step);
                  }}
                  disabled={s.step > currentStep}
                  className={`py-1 rounded-md transition-all ${
                    currentStep === s.step
                      ? 'bg-[#0B1F3A] text-[#C8A34D] font-extrabold shadow-sm'
                      : s.step < currentStep
                      ? 'text-emerald-700 bg-emerald-50 hover:bg-emerald-100 cursor-pointer'
                      : 'text-slate-400 cursor-not-allowed'
                  }`}
                >
                  {s.step < currentStep ? '✓ ' : ''}{s.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Validation Error Alert */}
        {validationError && (
          <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold flex items-center gap-2 animate-fadeIn">
            <Info className="w-4 h-4 text-rose-600 shrink-0" />
            <span>{validationError}</span>
          </div>
        )}

        {/* ======================================================== */}
        {/* STEP 1: PROPERTY TYPE & INTERACTIVE VASTU COMPASS */}
        {/* ======================================================== */}
        {currentStep === 1 && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#0B1F3A]/10 shadow-xl space-y-6 animate-fadeIn">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#C8A34D]">Question 1 of 5</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] font-heading mt-0.5">
                What type of property are you planning to acquire?
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Select your preferred category. Each tier offers verified legal clearances and infrastructure.
              </p>
            </div>

            {/* Property Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {propertyTypes.map((type) => {
                const Icon = type.icon;
                const isSelected = propertyType === type.id;
                return (
                  <div
                    key={type.id}
                    onClick={() => setPropertyType(type.id)}
                    className={`relative p-5 rounded-2xl cursor-pointer transition-all duration-300 border-2 text-left flex flex-col justify-between group ${
                      isSelected
                        ? 'border-[#C8A34D] bg-[#0B1F3A] text-white shadow-xl scale-[1.01]'
                        : 'border-slate-200 bg-white hover:border-[#C8A34D]/60 hover:bg-slate-50/70 text-[#1A1A1A]'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                        isSelected ? 'bg-[#C8A34D] text-[#0B1F3A]' : 'bg-[#0B1F3A]/5 text-[#0B1F3A]'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full ${
                        isSelected ? 'bg-white/20 text-[#E6C875]' : 'bg-[#C8A34D]/15 text-[#b5903b]'
                      }`}>
                        {type.highlight}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className={`text-base font-extrabold font-heading ${isSelected ? 'text-white' : 'text-[#0B1F3A]'}`}>
                          {type.title}
                        </h3>
                        {isSelected && <CheckCircle2 className="w-5 h-5 text-[#C8A34D]" />}
                      </div>
                      <p className={`text-xs font-semibold ${isSelected ? 'text-[#E6C875]' : 'text-[#C8A34D]'}`}>
                        {type.tagline}
                      </p>
                      <p className={`text-xs leading-relaxed pt-1 ${isSelected ? 'text-white/70' : 'text-slate-500'}`}>
                        {type.desc}
                      </p>
                      <div className="flex items-center justify-between pt-2 text-[11px] font-bold border-t border-dashed border-current/20">
                        <span className={isSelected ? 'text-emerald-300' : 'text-emerald-700'}>{type.avgPrice}</span>
                        <span className={isSelected ? 'text-white/60' : 'text-slate-400'}>{type.perk}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* VASTU ARCHITECTURAL COMPASS INSTRUMENT */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-[#0B1F3A] to-slate-900 text-white border-2 border-[#C8A34D]/40 space-y-5 shadow-xl relative overflow-hidden cad-grid">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C8A34D]/20 border border-[#C8A34D]/40 text-[#E6C875] text-[10px] font-extrabold uppercase tracking-wider">
                    <Compass className="w-3.5 h-3.5 text-[#E6C875]" />
                    Vastu-Shastra Directional Instrument
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-white font-heading">
                    Plot Road Facing & Solar Alignment
                  </h3>
                  <p className="text-xs text-white/70 max-w-md">
                    Traditional Vastu-Shastra alignment maximizes morning solar prana & natural Bengaluru cross-ventilation.
                  </p>
                </div>

                {/* 360-Degree Animated Compass Dial */}
                <div className="flex items-center gap-4 bg-black/40 p-3 rounded-2xl border border-white/15 shrink-0 self-start sm:self-auto">
                  <div className="relative w-16 h-16 rounded-full compass-dial-ring flex items-center justify-center">
                    {/* Cardinal markings */}
                    <span className="absolute top-1 text-[8px] font-mono font-black text-rose-400">N (0°)</span>
                    <span className="absolute right-1 text-[8px] font-mono font-black text-amber-300">E (90°)</span>
                    <span className="absolute bottom-1 text-[8px] font-mono font-black text-white/50">S (180°)</span>
                    <span className="absolute left-1 text-[8px] font-mono font-black text-white/50">W (270°)</span>

                    {/* Magnetized Dual Needle */}
                    <div
                      className="w-10 h-10 flex items-center justify-center transition-transform duration-700 ease-out"
                      style={{ transform: `rotate(${compassRotation}deg)` }}
                    >
                      <Navigation className="w-6 h-6 text-[#E6C875] fill-[#C8A34D] filter drop-shadow-[0_0_8px_rgba(200,163,77,0.8)]" />
                    </div>
                  </div>

                  <div className="space-y-0.5">
                    <span className="text-[10px] uppercase tracking-wider text-white/50 block font-mono">
                      Selected Orientation
                    </span>
                    <div className="text-sm font-black text-[#E6C875] font-mono">
                      {facingPreference}
                    </div>
                    <span className="text-[10px] text-emerald-400 font-bold block">
                      {compassRotation === 90 ? '⚡ Surya / Vitality & Success' :
                       compassRotation === 0 ? '💰 Kubera / Wealth & Abundance' :
                       compassRotation === 45 ? '✨ Ishanya / Supreme Vastu Harmony' :
                       compassRotation === 180 ? '🏡 Cost-Effective / Sunset Patio' : '✓ Verified Cross-Ventilation'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Orientation Buttons with Auspicious Vastu Descriptions */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  {
                    name: 'East Facing',
                    deg: 90,
                    zone: 'Surya Bhagwan',
                    desc: 'Morning sunrise, high positive energy & vitality'
                  },
                  {
                    name: 'North Facing',
                    deg: 0,
                    zone: 'Kubera Sthana',
                    desc: 'Prosperity, wealth accumulation & prime airflow'
                  },
                  {
                    name: 'Corner Plot Only',
                    deg: 45,
                    zone: 'Dual-Road Access',
                    desc: 'Maximum natural light, cross-ventilation & top resale'
                  },
                  {
                    name: 'North-East Corner',
                    deg: 45,
                    zone: 'Ishanya Sacred',
                    desc: 'Auspicious corner for puja room & water elements'
                  },
                  {
                    name: 'West / South Facing (Budget Friendly)',
                    deg: 180,
                    zone: 'Cost Advantage',
                    desc: 'High developer discounts with evening backyard sun'
                  },
                  {
                    name: 'Any Good Facing',
                    deg: 90,
                    zone: 'Clear Title Priority',
                    desc: 'Prioritize best plot dimensions & wide avenue roads'
                  }
                ].map((facing) => {
                  const isSelected = facingPreference === facing.name;
                  return (
                    <button
                      key={facing.name}
                      type="button"
                      onClick={() => setFacingPreference(facing.name)}
                      className={`p-3 rounded-xl text-left transition-all cursor-pointer border ${
                        isSelected
                          ? 'bg-[#C8A34D] text-[#0B1F3A] border-[#E6C875] shadow-lg font-black scale-[1.02]'
                          : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-bold mb-1">
                        <span>{facing.name}</span>
                        {isSelected ? <Check className="w-3.5 h-3.5" /> : <span className="text-[10px] opacity-60 font-mono">{facing.deg}°</span>}
                      </div>
                      <span className={`text-[10px] block font-semibold ${isSelected ? 'text-[#0B1F3A]/80' : 'text-[#E6C875]'}`}>
                        {facing.zone}
                      </span>
                      <p className={`text-[10px] line-clamp-1 mt-0.5 leading-tight ${isSelected ? 'text-[#0B1F3A]/70' : 'text-white/50'}`}>
                        {facing.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* STEP 2: BENGALURU SPATIAL LOCATION RADAR */}
        {/* ======================================================== */}
        {currentStep === 2 && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#0B1F3A]/10 shadow-xl space-y-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#C8A34D]">Question 2 of 5</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] font-heading mt-0.5">
                  Select your target Bengaluru corridor
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Filter by zone or search any specific neighborhood across Greater Bengaluru.
                </p>
              </div>

              {/* Zone Filter Tabs */}
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl shrink-0 self-start sm:self-auto">
                {[
                  { id: 'all', label: 'All Zones' },
                  { id: 'north', label: 'North' },
                  { id: 'east', label: 'East' },
                  { id: 'south', label: 'South' },
                  { id: 'west', label: 'West' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveZoneFilter(tab.id)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      activeZoneFilter === tab.id
                        ? 'bg-[#0B1F3A] text-[#C8A34D] shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Corridor Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {filteredCorridors.map((c) => {
                const isSelected = locationCorridor === c.name && !customLocation.trim();
                return (
                  <div
                    key={c.id}
                    onClick={() => {
                      setLocationCorridor(c.name);
                      setCustomLocation('');
                    }}
                    className={`p-4 rounded-2xl cursor-pointer border-2 transition-all text-left flex flex-col justify-between gap-2 group ${
                      isSelected
                        ? 'border-[#C8A34D] bg-[#0B1F3A] text-white shadow-xl scale-[1.01]'
                        : 'border-slate-200 bg-white hover:border-[#C8A34D]/50 hover:bg-slate-50 text-[#1A1A1A]'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xl group-hover:scale-125 transition-transform">{c.icon}</span>
                        <div>
                          <span className={`text-xs font-bold block ${isSelected ? 'text-white' : 'text-[#0B1F3A]'}`}>
                            {c.name}
                          </span>
                          <span className={`text-[10px] font-bold ${isSelected ? 'text-[#E6C875]' : 'text-[#C8A34D]'}`}>
                            {c.tag}
                          </span>
                        </div>
                      </div>

                      <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                        isSelected ? 'bg-[#C8A34D] text-[#0B1F3A]' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      }`}>
                        {c.roi}
                      </span>
                    </div>

                    <p className={`text-[11px] leading-snug ${isSelected ? 'text-white/70' : 'text-slate-500'}`}>
                      {c.sub}
                    </p>

                    <div className={`space-y-0.5 text-[10px] pt-2 border-t ${
                      isSelected ? 'border-white/10 text-white/60' : 'border-slate-100 text-slate-400'
                    }`}>
                      <div>🚗 {c.distanceAirport}</div>
                      <div>🚆 {c.infrastructure}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Custom Locality Search Bar with Autocomplete Chips */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-[#0B1F3A] uppercase tracking-wider flex items-center gap-1.5">
                  <Search className="w-3.5 h-3.5 text-[#C8A34D]" />
                  Or search any custom neighborhood in Bengaluru
                </label>
                {customLocation && (
                  <button
                    type="button"
                    onClick={() => { setCustomLocation(''); setLocationSearchQuery(''); }}
                    className="text-[11px] text-rose-500 font-bold hover:underline cursor-pointer"
                  >
                    Clear Custom Locality
                  </button>
                )}
              </div>

              <div className="relative">
                <MapPin className="w-5 h-5 text-[#C8A34D] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={customLocation || locationSearchQuery}
                  onChange={(e) => {
                    setCustomLocation(e.target.value);
                    setLocationSearchQuery(e.target.value);
                  }}
                  placeholder="Type any locality: HSR Layout, Hebbal, Budigere Cross, JP Nagar, Hoskote..."
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#C8A34D] focus:ring-2 focus:ring-[#C8A34D]/20 text-sm font-medium bg-slate-50/50"
                />
              </div>

              {/* Quick Select Locality Badges */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-slate-400">Popular Corridors (Click to select):</span>
                <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto pr-1">
                  {filteredQuickLocalities.map((chip) => (
                    <button
                      key={chip}
                      type="button"
                      onClick={() => {
                        setCustomLocation(chip);
                        setLocationSearchQuery(chip);
                      }}
                      className={`text-[11px] px-2.5 py-1 rounded-lg font-bold border transition-all cursor-pointer ${
                        customLocation.toLowerCase() === chip.toLowerCase()
                          ? 'bg-[#0B1F3A] text-[#C8A34D] border-[#C8A34D] shadow-sm'
                          : 'bg-white text-slate-600 border-slate-200 hover:border-[#C8A34D]'
                      }`}
                    >
                      +{chip}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* STEP 3: ARCHITECTURAL CAD BLUEPRINT SIMULATOR */}
        {/* ======================================================== */}
        {currentStep === 3 && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#0B1F3A]/10 shadow-xl space-y-6 animate-fadeIn">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#C8A34D]">Question 3 of 5</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] font-heading mt-0.5">
                Select your plot size & test the interactive CAD simulator
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Choose a standard dimension or customize your odd site. Toggle architectural layers to visualize setbacks & Vastu zoning!
              </p>
            </div>

            {/* Dimension Selection Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {plotDimensionOptions.map((item) => {
                const isSelected = plotSize === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setPlotSize(item.id)}
                    className={`p-4 rounded-2xl cursor-pointer border-2 transition-all flex flex-col justify-between text-left ${
                      isSelected
                        ? 'border-[#C8A34D] bg-[#0B1F3A] text-white shadow-xl scale-[1.02]'
                        : 'border-slate-200 bg-white hover:border-[#C8A34D]/50 hover:bg-slate-50 text-[#1A1A1A]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                        isSelected ? 'bg-[#C8A34D] text-[#0B1F3A]' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {item.badge}
                      </span>
                      {isSelected && <Check className="w-4 h-4 text-[#C8A34D]" />}
                    </div>

                    <div className="space-y-0.5 my-1">
                      <div className="text-lg sm:text-xl font-extrabold font-heading">
                        {item.label}
                      </div>
                      <div className={`text-xs font-black ${isSelected ? 'text-[#E6C875]' : 'text-[#C8A34D]'}`}>
                        {item.id === 'custom'
                          ? `${(Number(customWidth) || 30) * (Number(customLength) || 40)} sq.ft`
                          : `${item.sqft} sq.ft`}
                      </div>
                    </div>

                    <p className={`text-[11px] line-clamp-2 leading-tight ${isSelected ? 'text-white/70' : 'text-slate-500'}`}>
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Custom Inputs */}
            {plotSize === 'custom' && (
              <div className="p-5 rounded-2xl bg-amber-50/80 border border-[#C8A34D]/40 space-y-3 animate-fadeIn">
                <div className="text-xs font-bold text-[#0B1F3A] uppercase tracking-wider flex items-center gap-1.5">
                  <Ruler className="w-4 h-4 text-[#C8A34D]" />
                  Enter Custom Width & Length (in Feet)
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-slate-600 block mb-1">Road Frontage Width</label>
                    <div className="relative">
                      <input
                        type="number"
                        value={customWidth}
                        onChange={(e) => setCustomWidth(e.target.value)}
                        placeholder="30"
                        min="15"
                        max="150"
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 font-bold text-sm bg-white"
                      />
                      <span className="absolute right-3 top-2.5 text-xs text-slate-400 font-bold">ft</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-slate-600 block mb-1">Plot Depth</label>
                    <div className="relative">
                      <input
                        type="number"
                        value={customLength}
                        onChange={(e) => setCustomLength(e.target.value)}
                        placeholder="50"
                        min="20"
                        max="200"
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 font-bold text-sm bg-white"
                      />
                      <span className="absolute right-3 top-2.5 text-xs text-slate-400 font-bold">ft</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* INTERACTIVE CAD BLUEPRINT STUDIO */}
            <div className="p-6 rounded-3xl bg-[#040D1A] text-white border-2 border-[#C8A34D]/40 shadow-2xl relative overflow-hidden cad-grid-blue">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                    Interactive CAD Drafting Studio
                  </span>
                </div>

                {/* Layer Toggle Pills */}
                <div className="flex items-center gap-1 bg-white/10 p-1 rounded-xl">
                  {[
                    { id: 'floorplan', label: 'Villa Layout' },
                    { id: 'setbacks', label: 'Setbacks & Roads' },
                    { id: 'vastu', label: 'Vastu Zones' }
                  ].map(layer => (
                    <button
                      key={layer.id}
                      type="button"
                      onClick={() => setBlueprintActiveLayer(layer.id)}
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                        blueprintActiveLayer === layer.id
                          ? 'bg-[#C8A34D] text-[#0B1F3A]'
                          : 'text-white/70 hover:text-white'
                      }`}
                    >
                      {layer.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                
                {/* Dynamically Scaled CAD Drawing Canvas */}
                <div className="flex flex-col items-center justify-center p-6 bg-[#02070F]/95 rounded-2xl border border-dashed border-cyan-500/30 relative">
                  
                  {/* Top Measurement Width */}
                  <div className="text-[10px] font-mono text-cyan-300 mb-1 flex items-center gap-1">
                    <span>←</span>
                    <span className="font-bold">{activePlot.width} FT ({(activePlot.width * 0.3048).toFixed(1)}m)</span>
                    <span>→</span>
                  </div>

                  <div
                    className="border-2 border-cyan-400 bg-cyan-950/40 rounded-xl p-3 flex flex-col justify-between items-center relative transition-all duration-500 shadow-2xl"
                    style={{
                      width: `${Math.min(240, Math.max(130, (activePlot.width / 60) * 200))}px`,
                      height: `${Math.min(220, Math.max(130, (activePlot.length / 60) * 180))}px`
                    }}
                  >
                    {/* Front Setback Marker */}
                    <div className="w-full flex justify-between items-center text-[8px] font-mono text-cyan-200 tracking-widest uppercase bg-cyan-900/60 px-2 py-0.5 rounded">
                      <span>Front Road Setback</span>
                      <span className="text-[#E6C875]">5 FT</span>
                    </div>

                    {/* Middle Layer Content based on active layer */}
                    {blueprintActiveLayer === 'floorplan' && (
                      <div className="w-5/6 h-3/5 border border-dashed border-cyan-300/50 rounded-lg bg-cyan-500/10 flex flex-col items-center justify-center p-1 text-center animate-fadeIn">
                        <span className="text-[10px] font-black text-white">G+2 Villa Footprint</span>
                        <span className="text-[9px] text-[#E6C875] font-semibold">{activePlot.builtUp}</span>
                        <span className="text-[8px] text-cyan-300">2-Car Covered Porch</span>
                      </div>
                    )}

                    {blueprintActiveLayer === 'setbacks' && (
                      <div className="w-full h-3/5 border border-dotted border-amber-400/60 rounded-lg bg-amber-500/10 flex flex-col items-center justify-center p-1 text-center animate-fadeIn text-[9px] text-amber-200">
                        <div className="flex justify-between w-full px-2 text-[8px]">
                          <span>Left: 3ft</span>
                          <span>Right: 3ft</span>
                        </div>
                        <span className="font-bold mt-1">BBMP/BDA Bylaws Compliant</span>
                        <span className="text-[8px]">Open Space Setback Ratio: 35%</span>
                      </div>
                    )}

                    {blueprintActiveLayer === 'vastu' && (
                      <div className="w-full h-3/5 border border-emerald-400/60 rounded-lg bg-emerald-500/10 grid grid-cols-2 gap-1 p-1 text-[8px] text-emerald-200 font-mono text-center animate-fadeIn">
                        <div className="bg-emerald-950/60 rounded p-0.5">NW: Air Zone</div>
                        <div className="bg-emerald-950/60 rounded p-0.5 text-[#E6C875] font-bold">NE: Puja/Water</div>
                        <div className="bg-emerald-950/60 rounded p-0.5">SW: Master Bed</div>
                        <div className="bg-emerald-950/60 rounded p-0.5 text-amber-300">SE: Kitchen/Agni</div>
                      </div>
                    )}

                    {/* Rear Setback Marker */}
                    <div className="w-full flex justify-between items-center text-[8px] font-mono text-cyan-300/70 px-1">
                      <span>Rear Garden</span>
                      <span>3 FT</span>
                    </div>
                  </div>

                  {/* Bottom Measurement Length */}
                  <div className="text-[10px] font-mono text-cyan-300 mt-2 flex items-center gap-1">
                    <span>↑</span>
                    <span className="font-bold">{activePlot.length} FT Depth ({(activePlot.length * 0.3048).toFixed(1)}m)</span>
                    <span>↓</span>
                  </div>
                </div>

                {/* Architectural Specifications Table */}
                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between py-1.5 border-b border-white/10">
                    <span className="text-white/60">Plot Area:</span>
                    <span className="font-extrabold text-[#E6C875] text-sm">
                      {activePlot.sqft} SQ.FT ({Math.round(activePlot.sqft / 9)} Sq.Yds)
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-white/10">
                    <span className="text-white/60">Permissible Built-Up (FAR 1.75):</span>
                    <span className="font-bold text-white">{activePlot.builtUp}</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-white/10">
                    <span className="text-white/60">Suggested Architecture:</span>
                    <span className="font-bold text-white">{activePlot.recommendedLayout}</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-white/10">
                    <span className="text-white/60">Approved Bank Financing:</span>
                    <span className="font-bold text-emerald-400">Up to 80% (SBI, HDFC, ICICI)</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <span className="text-white/60">Vastu Rating:</span>
                    <span className="font-bold text-[#E6C875]">10/10 Verified Alignment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* STEP 4: BUDGET & FINANCIAL FEASIBILITY CALCULATOR */}
        {/* ======================================================== */}
        {currentStep === 4 && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#0B1F3A]/10 shadow-xl space-y-6 animate-fadeIn">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#C8A34D]">Question 4 of 5</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] font-heading mt-0.5">
                Financial Feasibility & Budget Planner
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Slide your budget to test instant loan down-payments, monthly EMIs, and 3-year capital appreciation projections!
              </p>
            </div>

            {/* Interactive Budget Outlay Slider */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0B1F3A] uppercase tracking-wider flex items-center gap-1.5">
                  <Calculator className="w-4 h-4 text-[#C8A34D]" />
                  Target Budget Outlay
                </span>
                <span className="text-2xl sm:text-3xl font-black text-[#0B1F3A] font-heading">
                  ₹{budgetLakhs} Lakhs
                </span>
              </div>

              <input
                type="range"
                min="25"
                max="250"
                step="5"
                value={budgetLakhs}
                onChange={(e) => setBudgetLakhs(Number(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#C8A34D]"
              />

              <div className="flex justify-between text-[11px] text-slate-400 font-bold">
                <span>₹25 Lakhs</span>
                <span>₹75 Lakhs</span>
                <span>₹1.5 Crore</span>
                <span>₹2.5 Crore+</span>
              </div>

              {/* Quick Presets */}
              <div className="flex flex-wrap gap-2 pt-1">
                {[35, 50, 75, 100, 150, 200].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => setBudgetLakhs(amt)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      budgetLakhs === amt
                        ? 'bg-[#0B1F3A] text-[#C8A34D] shadow-sm'
                        : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {amt >= 100 ? `₹${amt / 100} Cr` : `₹${amt}L`}
                  </button>
                ))}
              </div>
            </div>

            {/* Down Payment Splitter */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <span className="font-bold text-[#0B1F3A] uppercase tracking-wider flex items-center gap-1.5">
                <BadgePercent className="w-4 h-4 text-[#C8A34D]" />
                Select Down-Payment Split:
              </span>
              <div className="flex items-center gap-2">
                {[
                  { pct: 20, label: '20% Down (80% Loan)' },
                  { pct: 30, label: '30% Down (70% Loan)' },
                  { pct: 50, label: '50% Down (50% Loan)' },
                  { pct: 100, label: '100% Cash / Self-Funded' }
                ].map(split => (
                  <button
                    key={split.pct}
                    type="button"
                    onClick={() => setDownPaymentPercent(split.pct)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      downPaymentPercent === split.pct
                        ? 'bg-[#0B1F3A] text-[#C8A34D] shadow-sm'
                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {split.label.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Live Financial Intelligence HUD */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-[#0B1F3A] text-white border border-[#C8A34D]/30 space-y-1">
                <span className="text-[10px] text-white/60 uppercase tracking-wider font-bold">Estimated Rate / Sq.Ft</span>
                <div className="text-xl font-black text-[#E6C875]">₹{calculatedSqftRate.toLocaleString()}</div>
                <p className="text-[10px] text-white/50">Calculated for {activePlot.sqft} sq.ft</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#0B1F3A] text-white border border-[#C8A34D]/30 space-y-1">
                <span className="text-[10px] text-white/60 uppercase tracking-wider font-bold">Estimated Monthly EMI</span>
                <div className="text-xl font-black text-emerald-400">
                  {estimatedMonthlyEMI > 0 ? `~₹${estimatedMonthlyEMI.toLocaleString()}/mo` : '₹0 (Self-Funded)'}
                </div>
                <p className="text-[10px] text-white/50">₹{estimatedLoanAmount}L loan @ 8.5% for 15 yrs</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#0B1F3A] text-white border border-[#C8A34D]/30 space-y-1">
                <span className="text-[10px] text-white/60 uppercase tracking-wider font-bold">Projected 3-Yr Capital Value</span>
                <div className="text-xl font-black text-amber-300">~₹{estimated3YrGrowth} Lakhs</div>
                <p className="text-[10px] text-white/50">Based on STRR 16% historical CAGR</p>
              </div>
            </div>

            {/* Purchase Timeline */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <label className="text-xs font-bold text-[#0B1F3A] uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C8A34D]" />
                When are you looking to finalize your site visit & booking?
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { label: 'Within 30 Days (Ready)', desc: 'Immediate site visit & plot token reservation' },
                  { label: 'Next 1 - 3 Months', desc: 'Evaluating corridors & organizing down-payment' },
                  { label: 'Long-term / Investment (6+ Mo)', desc: 'Researching upcoming infrastructure nodes' }
                ].map((t) => {
                  const isSelected = purchaseTimeline === t.label;
                  return (
                    <div
                      key={t.label}
                      onClick={() => setPurchaseTimeline(t.label)}
                      className={`p-3.5 rounded-xl cursor-pointer border-2 transition-all text-left ${
                        isSelected
                          ? 'border-[#C8A34D] bg-[#0B1F3A] text-white shadow-md'
                          : 'border-slate-200 bg-white hover:border-slate-300 text-[#1A1A1A]'
                      }`}
                    >
                      <div className="text-xs font-bold mb-1 flex items-center justify-between">
                        <span>{t.label}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#C8A34D]" />}
                      </div>
                      <p className={`text-[11px] leading-snug ${isSelected ? 'text-white/60' : 'text-slate-500'}`}>
                        {t.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* STEP 5: BUYER IDENTITY & COMPLIMENTARY SITE VISIT CAB */}
        {/* ======================================================== */}
        {currentStep === 5 && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#0B1F3A]/10 shadow-xl space-y-6 animate-fadeIn">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#C8A34D]">Final Step 5 of 5</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] font-heading mt-0.5">
                Where should we dispatch your matched project layouts?
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Enter your contact info to generate your VIP Property Allotment Dossier and launch the inquiry on WhatsApp.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-[#0B1F3A] uppercase tracking-wider block mb-1.5">
                  Your Full Name *
                </label>
                <div className="relative">
                  <User className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="e.g. Anand Kumar"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#C8A34D] focus:ring-2 focus:ring-[#C8A34D]/20 text-sm font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#0B1F3A] uppercase tracking-wider block mb-1.5">
                  WhatsApp / Mobile Contact Number *
                </label>
                <div className="flex gap-2">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="px-3 py-3.5 rounded-xl border border-slate-300 bg-slate-50 text-xs font-bold text-[#0B1F3A]"
                  >
                    <option value="+91">🇮🇳 +91 (India)</option>
                    <option value="+971">🇦🇪 +971 (UAE / Dubai)</option>
                    <option value="+1">🇺🇸 +1 (USA / Canada)</option>
                    <option value="+44">🇬🇧 +44 (UK)</option>
                    <option value="+65">🇸🇬 +65 (Singapore)</option>
                    <option value="+61">🇦🇺 +61 (Australia)</option>
                  </select>

                  <div className="relative flex-1">
                    <Phone className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      value={userContact}
                      onChange={(e) => setUserContact(e.target.value)}
                      placeholder="e.g. 84319 09508"
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#C8A34D] focus:ring-2 focus:ring-[#C8A34D]/20 text-sm font-medium"
                    />
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  🔒 Zero spam policy. Used exclusively to dispatch verified PDF masterplans, legal certificates & GPS site coordinates.
                </p>
              </div>

              {/* Preferred Site Visit Schedule */}
              <div>
                <label className="text-xs font-bold text-[#0B1F3A] uppercase tracking-wider block mb-1.5">
                  Preferred Day for Free Chauffeur AC Cab Site Visit
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  {[
                    'This Weekend (Saturday/Sunday)',
                    'Upcoming Weekday',
                    'Direct Video Call Walkthrough'
                  ].map(day => (
                    <button
                      key={day}
                      type="button"
                      onClick={() => setPreferredVisitDay(day)}
                      className={`p-2.5 rounded-xl font-bold border transition-all text-center cursor-pointer ${
                        preferredVisitDay === day
                          ? 'bg-[#0B1F3A] text-[#C8A34D] border-[#C8A34D]'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#0B1F3A] uppercase tracking-wider block mb-1.5">
                  Specific Requirements or Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  value={userNotes}
                  onChange={(e) => setUserNotes(e.target.value)}
                  placeholder="E.g. Prefer STRR direct highway entrance, looking for 80% SBI bank loan, or need cab pickup from Hebbal..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#C8A34D] focus:ring-2 focus:ring-[#C8A34D]/20 text-sm font-medium"
                />
              </div>
            </div>

            {/* Quick Summary Review Preview */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <span className="text-[11px] font-bold text-[#0B1F3A] uppercase tracking-wider">
                Inquiry Specification Summary:
              </span>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2.5 py-1 rounded-lg bg-[#0B1F3A] text-[#C8A34D] font-bold">
                  🏡 {propertyType}
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-[#0B1F3A] text-white font-bold">
                  📍 {resolvedLocation}
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-[#0B1F3A] text-white font-bold">
                  📐 {resolvedPlotSizeStr}
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-[#0B1F3A] text-emerald-400 font-bold">
                  💰 ₹{budgetLakhs} Lakhs
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-[#0B1F3A] text-white font-bold">
                  🧭 {facingPreference}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* STEP 6: HIGH-TECH AI MATCHMAKING HUD SCANNER */}
        {/* ======================================================== */}
        {isAnalyzing && (
          <div className="bg-[#0B1F3A] text-white p-8 sm:p-12 rounded-3xl border-2 border-[#C8A34D]/50 shadow-2xl text-center space-y-6 animate-fadeIn cad-grid relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#C8A34D]/15 to-transparent animate-radar-sweep pointer-events-none" />

            <div className="w-16 h-16 mx-auto rounded-2xl bg-[#C8A34D] flex items-center justify-center text-[#0B1F3A] shadow-2xl animate-bounce">
              <Sparkles className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black font-heading text-white">
                Compiling Verified Bengaluru Property Matches...
              </h2>
              <p className="text-xs sm:text-sm text-[#E6C875] font-mono font-bold max-w-md mx-auto">
                {analysisPhaseText}
              </p>
            </div>

            <div className="max-w-md mx-auto space-y-2">
              <div className="w-full h-3.5 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/20">
                <div
                  className="h-full bg-gradient-to-r from-[#C8A34D] via-[#E6C875] to-emerald-400 rounded-full transition-all duration-300"
                  style={{ width: `${analysisProgress}%` }}
                />
              </div>
              <div className="flex justify-between text-[11px] text-white/60 font-mono">
                <span>Verifying Title Records & Inventory</span>
                <span className="font-bold text-[#E6C875]">{analysisProgress}%</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-lg mx-auto pt-2 text-xs text-white/90">
              <div className="flex items-center justify-center gap-1.5 bg-white/5 py-2 px-3 rounded-xl border border-white/10">
                <ShieldCheck className="w-4 h-4 text-[#C8A34D]" />
                <span>RERA Cleared</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 bg-white/5 py-2 px-3 rounded-xl border border-white/10">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span>Direct Pricing</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 bg-white/5 py-2 px-3 rounded-xl border border-white/10">
                <Award className="w-4 h-4 text-[#C8A34D]" />
                <span>0% Brokerage</span>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* STEP 7: VIP ALLOTMENT CERTIFICATE DOSSIER & WHATSAPP */}
        {/* ======================================================== */}
        {currentStep === 6 && !isAnalyzing && (
          <div className="space-y-6 animate-fadeIn">
            
            {/* VIP Allotment Certificate Boarding Pass */}
            <div className="bg-[#0B1F3A] text-white rounded-3xl border-2 border-[#C8A34D] shadow-2xl overflow-hidden cad-grid">
              
              {/* Header Ribbon */}
              <div className="bg-gradient-to-r from-[#071527] via-[#0B1F3A] to-[#071527] p-6 sm:p-8 border-b border-white/10 text-center relative">
                <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-[#C8A34D]/20 border border-[#C8A34D]/50 text-[#E6C875] text-xs font-extrabold uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-4 h-4 text-[#C8A34D]" />
                  Verified Property Allotment Dossier #{dossierId}
                </div>
                <h2 className="text-2xl sm:text-4xl font-black font-heading text-white">
                  Matched Successfully for {userName}!
                </h2>
                <p className="text-xs sm:text-sm text-white/75 max-w-lg mx-auto mt-1">
                  We have verified available inventory for {propertyType} in {resolvedLocation}. Click below to dispatch your inquiry directly to our senior land advisor on WhatsApp.
                </p>
              </div>

              {/* Dossier Specs */}
              <div className="p-6 sm:p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Left Column: Property Specs */}
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#C8A34D] flex items-center gap-2">
                      <Compass className="w-4 h-4" />
                      Property Specifications
                    </h3>

                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between border-b border-white/10 pb-1.5">
                        <span className="text-white/60">Category:</span>
                        <span className="font-bold text-white">{propertyType}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/10 pb-1.5">
                        <span className="text-white/60">Location:</span>
                        <span className="font-bold text-[#E6C875] text-right">{resolvedLocation}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/10 pb-1.5">
                        <span className="text-white/60">Plot Dimensions:</span>
                        <span className="font-bold text-white">{resolvedPlotSizeStr}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/10 pb-1.5">
                        <span className="text-white/60">Orientation / Vastu:</span>
                        <span className="font-bold text-white">{facingPreference}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/60">Target Budget:</span>
                        <span className="font-bold text-emerald-400">₹{budgetLakhs} Lakhs (~₹{calculatedSqftRate.toLocaleString()}/sq.ft)</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Buyer Info & Perks */}
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#C8A34D] flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Inquirer & Advisory Benefits
                    </h3>

                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between border-b border-white/10 pb-1.5">
                        <span className="text-white/60">Inquirer Name:</span>
                        <span className="font-bold text-white">{userName}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/10 pb-1.5">
                        <span className="text-white/60">Contact:</span>
                        <span className="font-bold text-white">{countryCode} {userContact}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/10 pb-1.5">
                        <span className="text-white/60">Estimated EMI:</span>
                        <span className="font-bold text-emerald-400">~₹{estimatedMonthlyEMI.toLocaleString()}/mo</span>
                      </div>
                      <div className="flex justify-between border-b border-white/10 pb-1.5">
                        <span className="text-white/60">Consultancy Fee:</span>
                        <span className="font-bold text-emerald-400">0% Brokerage (Direct Allotment)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/60">Free AC Cab Site Visit:</span>
                        <span className="font-bold text-[#E6C875]">{preferredVisitDay}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Primary Pulsing WhatsApp CTA Button */}
                <div className="space-y-3 pt-2">
                  <button
                    type="button"
                    onClick={handleOpenWhatsApp}
                    className="w-full py-4 sm:py-5 px-6 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-3 shadow-2xl transition-all duration-300 hover:scale-[1.02] border-2 border-emerald-400 cursor-pointer animate-pulse-gold"
                  >
                    <MessageCircle className="w-6 h-6 fill-white" />
                    <span>Send Query on WhatsApp ({displayPhone})</span>
                  </button>

                  <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
                    <button
                      type="button"
                      onClick={handleCopyMessage}
                      className="inline-flex items-center gap-1.5 text-white/70 hover:text-white transition-colors cursor-pointer"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      <span>{copied ? 'Copied to Clipboard!' : 'Copy Query Text'}</span>
                    </button>

                    <span className="text-white/20">•</span>

                    <button
                      type="button"
                      onClick={handlePrintSummary}
                      className="inline-flex items-center gap-1.5 text-white/70 hover:text-white transition-colors cursor-pointer"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>Print / Save PDF</span>
                    </button>

                    <span className="text-white/20">•</span>

                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="inline-flex items-center gap-1.5 text-[#C8A34D] hover:underline cursor-pointer font-bold"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Edit Answers</span>
                    </button>
                  </div>
                </div>

                {/* WhatsApp Message Preview Box */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-left space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-white/50 font-mono">
                    <span>Message to be dispatched to {displayPhone}:</span>
                    <span className="text-emerald-400 font-bold">100% Ready (Clean Formatting)</span>
                  </div>
                  <pre className="text-[11px] text-white/85 font-mono whitespace-pre-wrap leading-relaxed max-h-40 overflow-y-auto pr-2">
                    {buildWhatsAppMessage()}
                  </pre>
                </div>
              </div>
            </div>

            {/* Quick Actions after completion */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-white border border-slate-200">
              <div className="space-y-0.5">
                <h4 className="text-sm font-bold text-[#0B1F3A]">Want to browse existing listed projects directly?</h4>
                <p className="text-xs text-slate-500">Explore live masterplans for Nisarga Boulevard & Vinra Alora.</p>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setActivePage('projects')}
                  className="btn-primary py-2.5 px-5 text-xs cursor-pointer"
                >
                  View All Projects
                </button>
                <button
                  type="button"
                  onClick={resetAll}
                  className="px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 cursor-pointer"
                >
                  Start New Query
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step Navigation Controls (Desktop: Steps 1 to 5) */}
        {currentStep <= 5 && !isAnalyzing && (
          <div className="hidden sm:flex items-center justify-between mt-6">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentStep === 1}
              className={`px-5 py-3 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                currentStep === 1
                  ? 'opacity-0 pointer-events-none'
                  : 'bg-white text-[#0B1F3A] border border-slate-300 hover:bg-slate-50 shadow-sm cursor-pointer'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous Step</span>
            </button>

            <div className="text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
              <span>Press</span>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-300 text-slate-700 font-bold text-[10px]">Enter ↵</kbd>
              <span>to advance</span>
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="btn-gold py-3.5 px-8 text-xs flex items-center gap-2 shadow-lg hover:scale-105 cursor-pointer font-extrabold"
            >
              <span>{currentStep === 5 ? 'Generate Property Allotment Dossier' : 'Next Step'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Sticky Ergonomic Mobile Thumb Navigation Bar (Mobile only) */}
        {currentStep <= 5 && !isAnalyzing && (
          <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0B1F3A]/95 backdrop-blur-md p-3 border-t border-[#C8A34D]/30 shadow-2xl flex items-center justify-between gap-2">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handlePrev}
                className="py-3 px-4 rounded-xl bg-white/10 text-white font-bold text-xs flex items-center gap-1 border border-white/15"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : (
              <div className="text-[11px] text-white/60 font-mono px-2">
                Step 1/5
              </div>
            )}

            <button
              type="button"
              onClick={handleNext}
              className="flex-1 btn-gold py-3.5 px-4 text-xs font-black flex items-center justify-center gap-1.5 shadow-lg"
            >
              <span>{currentStep === 5 ? 'Get WhatsApp Dossier' : 'Next Step'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Trust Badges Footer */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-xs text-slate-500">
          <div className="space-y-1">
            <ShieldCheck className="w-5 h-5 text-[#C8A34D] mx-auto" />
            <span className="font-bold text-[#0B1F3A] block">Verified Titles</span>
            <span className="text-[11px]">RERA & BDA/BIAAPA approved</span>
          </div>
          <div className="space-y-1">
            <Flame className="w-5 h-5 text-[#C8A34D] mx-auto" />
            <span className="font-bold text-[#0B1F3A] block">High ROI Belts</span>
            <span className="text-[11px]">STRR & Airport growth nodes</span>
          </div>
          <div className="space-y-1">
            <Car className="w-5 h-5 text-[#C8A34D] mx-auto" />
            <span className="font-bold text-[#0B1F3A] block">Free VIP Site Visits</span>
            <span className="text-[11px]">Chauffeur cab pickup available</span>
          </div>
          <div className="space-y-1">
            <MessageCircle className="w-5 h-5 text-emerald-500 mx-auto" />
            <span className="font-bold text-[#0B1F3A] block">Instant WhatsApp</span>
            <span className="text-[11px]">Direct developer pricing</span>
          </div>
        </div>

      </div>
    </div>
  );
}
