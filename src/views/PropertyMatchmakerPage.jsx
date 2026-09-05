'use client';

import React, { useState } from 'react';
import {
  Check, MessageCircle, Copy, RotateCcw, MapPin, Phone,
  User, ShieldCheck, Sparkles, ArrowRight, CheckCircle2, ChevronDown
} from 'lucide-react';
import { usePlots } from '../context/PlotsContext';

export default function PropertyMatchmakerPage({ setActivePage }) {
  const { showToast } = usePlots();

  // State: whether form is opened or showing the welcome card
  const [isFormStarted, setIsFormStarted] = useState(false);

  // Form Fields
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [location, setLocation] = useState('North Bengaluru (Airport & STRR Corridor)');
  const [customLocation, setCustomLocation] = useState('');
  const [propertyType, setPropertyType] = useState('Residential Plot');
  const [plotSize, setPlotSize] = useState('30*40');
  const [customWidth, setCustomWidth] = useState('30');
  const [customLength, setCustomLength] = useState('40');
  const [budget, setBudget] = useState('Under ₹35 Lakhs');
  const [timeline, setTimeline] = useState('Within 30 Days (Ready)');
  const [notes, setNotes] = useState('');

  // UI state
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const whatsappNumber = '918431909508';
  const displayPhone = '+91 84319 09508';

  // Available options
  const locationOptions = [
    'North Bengaluru (Airport & STRR Corridor)',
    'East Bengaluru (Budigere Cross & Hoskote)',
    'Sarjapur Road / Outer Ring Road',
    'Whitefield',
    'Kanakapura Road / NICE Corridor',
    'Mysore Road / West Bengaluru',
    'Other / Custom Locality'
  ];

  const propertyTypeOptions = [
    { label: 'Residential Plot', sub: 'Land only • Design your own home' },
    { label: 'Luxury Villa Plot', sub: 'Gated community with clubhouse' },
    { label: 'Ready to Move Plot', sub: 'Immediate A-Khata registration' },
    { label: 'Apartments', sub: '2, 3 & 4 BHK High-rise units' }
  ];

  const plotSizeOptions = [
    { id: '20*30', label: '20 x 30 (600 sq.ft)', desc: 'Compact duplex or rental' },
    { id: '30*40', label: '30 x 40 (1200 sq.ft)', desc: '⭐ Most Popular Bengaluru standard' },
    { id: '30*50', label: '30 x 50 (1500 sq.ft)', desc: 'Spacious 4 BHK with garden' },
    { id: '40*60', label: '40 x 60 (2400 sq.ft)', desc: 'Luxury mansion layout' },
    { id: '50*60', label: '50 x 60 (3000 sq.ft)', desc: 'Grand estate footprint' },
    { id: 'custom', label: 'Custom Dimensions', desc: 'Specify your bespoke plot size' }
  ];

  const budgetOptions = [
    'Under ₹35 Lakhs',
    '₹35 Lakhs - ₹50 Lakhs',
    '₹50 Lakhs - ₹75 Lakhs',
    '₹75 Lakhs - ₹1.2 Crore',
    'Above ₹1.2 Crore'
  ];

  const timelineOptions = [
    'Within 30 Days (Ready)',
    'Next 1 - 3 Months',
    '6+ Months / Long-term Research'
  ];

  // Resolved plot size string
  const resolvedPlotSizeStr = plotSize === 'custom'
    ? `${customWidth || 30} x ${customLength || 40} (${(Number(customWidth) || 30) * (Number(customLength) || 40)} sq.ft)`
    : plotSize === '20*30' ? '20*30 (600 sq.ft)'
    : plotSize === '30*40' ? '30*40 (1200 sq.ft)'
    : plotSize === '30*50' ? '30*50 (1500 sq.ft)'
    : plotSize === '40*60' ? '40*60 (2400 sq.ft)'
    : '50*60 (3000 sq.ft)';

  const resolvedLocationStr = location === 'Other / Custom Locality' && customLocation.trim()
    ? `${customLocation.trim()} (Bengaluru)`
    : location;

  // Build clean WhatsApp message matching user's requested format
  const buildWhatsAppMessage = () => {
    return `*NEW PROPERTY INQUIRY VIA SMART FINDER*
━━━━━━━━━━━━━━━━━━━━
• Full Name: ${fullName.trim()}
• Contact / WhatsApp: ${countryCode} ${phone.trim()}
• Preferred Location: ${resolvedLocationStr}
• Property Category: ${propertyType}
• Plot Dimensions / Size: ${resolvedPlotSizeStr}
• Estimated Budget: ${budget}
• Purchase Readiness: ${timeline}
${notes.trim() ? `• Notes: ${notes.trim()}\n` : ''}━━━━━━━━━━━━━━━━━━━━
• Request: Hello Premium Properties Advisory! I have completed the Smart Finder inquiry. Please send me verified RERA masterplans, available corner/standard plot layouts, and direct developer pricing for these specifications.`;
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    setErrorMsg('');

    if (!fullName.trim()) {
      setErrorMsg('Please enter your Full Name.');
      window.scrollTo({ top: 100, behavior: 'smooth' });
      return;
    }

    const cleanDigits = phone.replace(/\D/g, '');
    if (cleanDigits.length < 8) {
      setErrorMsg('Please enter a valid 10-digit mobile or WhatsApp number.');
      window.scrollTo({ top: 200, behavior: 'smooth' });
      return;
    }

    if (location === 'Other / Custom Locality' && !customLocation.trim()) {
      setErrorMsg('Please specify your preferred locality.');
      return;
    }

    const message = buildWhatsAppMessage();
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
    showToast('Launching WhatsApp with your inquiry!');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(buildWhatsAppMessage());
    setCopied(true);
    showToast('Inquiry text copied to clipboard!');
    setTimeout(() => setCopied(false), 3000);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setIsFormStarted(false);
    setFullName('');
    setPhone('');
    setCustomLocation('');
    setNotes('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F0F2F5] py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto space-y-4">

        {/* 1. GOOGLE FORM TOP BANNER & HEADER CARD */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          {/* Top colored accent stripe (Signature Google Form bar in Luxury Architectural Gold) */}
          <div className="h-3 bg-gradient-to-r from-[#B8933D] via-[#C8A34D] to-[#A37B2C]" />

          <div className="p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#C8A34D] uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#C8A34D]" />
              <span>Smart Property Finder & Consultation</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-[#0B1F3A] font-heading tracking-tight leading-snug">
              Find Your Ideal Plot or Property in Bengaluru
            </h1>

            {/* Value Trust Signals */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-[11px] font-semibold text-slate-600 border-t border-slate-100">
              <span className="flex items-center gap-1 text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                100% RERA & BIAAPA Verified
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                0% Brokerage
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Direct Developer Allocation
              </span>
            </div>

            {/* BOOK NOW / START BUTTON (If not yet started) */}
            {!isFormStarted && !isSubmitted && (
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsFormStarted(true);
                    setTimeout(() => {
                      const firstInput = document.getElementById('fullNameInput');
                      if (firstInput) firstInput.focus();
                    }, 100);
                  }}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#B8933D] via-[#C8A34D] to-[#A37B2C] hover:from-[#C8A34D] hover:to-[#B8933D] text-[#0B1F3A] font-black text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-[0_6px_25px_rgba(184,147,61,0.35)] hover:shadow-[0_8px_30px_rgba(184,147,61,0.5)] hover:scale-[1.01] transition-all cursor-pointer border border-[#C8A34D] group"
                >
                  <Sparkles className="w-4 h-4 text-[#0B1F3A] group-hover:rotate-12 transition-transform" />
                  <span>Book Consultation & Start Form</span>
                  <ArrowRight className="w-4 h-4 text-[#0B1F3A] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* 2. SUBMITTED SUCCESS STATE */}
        {isSubmitted && (
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm text-center space-y-5 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>

            <div className="space-y-1">
              <h2 className="text-2xl font-black text-[#0B1F3A] font-heading">
                Query Prepared & Sent!
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                WhatsApp has been launched with your inquiry for <strong>{fullName}</strong>. If WhatsApp did not open automatically, click below to send or copy.
              </p>
            </div>

            {/* Direct Send Again on WhatsApp */}
            <div className="pt-2 space-y-3 max-w-md mx-auto">
              <a
                href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(buildWhatsAppMessage())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Open WhatsApp ({displayPhone})</span>
              </a>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex-1 py-2.5 px-4 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Copy className="w-4 h-4" />
                  <span>{copied ? 'Copied!' : 'Copy Query'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="flex-1 py-2.5 px-4 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Start New Search</span>
                </button>
              </div>
            </div>

            {/* Preview Box */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs text-slate-700 font-mono whitespace-pre-wrap leading-relaxed max-h-48 overflow-y-auto">
              {buildWhatsAppMessage()}
            </div>
          </div>
        )}

        {/* 3. GOOGLE FORM QUESTIONS CONTAINER (Shown after clicking Book Now) */}
        {isFormStarted && !isSubmitted && (
          <form onSubmit={handleSubmit} className="space-y-4 animate-fadeIn">
            
            {/* Error Message Alert */}
            {errorMsg && (
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold flex items-center gap-2 animate-fadeIn">
                <span>⚠️ {errorMsg}</span>
              </div>
            )}

            {/* QUESTION 1: FULL NAME */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2 focus-within:border-[#0B1F3A] transition-colors">
              <label htmlFor="fullNameInput" className="block text-sm font-bold text-[#0B1F3A]">
                1. Your Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                id="fullNameInput"
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Anand Kumar"
                className="w-full px-3 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[#0B1F3A] focus:ring-1 focus:ring-[#0B1F3A] text-sm text-slate-800 font-medium"
              />
            </div>

            {/* QUESTION 2: PHONE / WHATSAPP NUMBER */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2 focus-within:border-[#0B1F3A] transition-colors">
              <label htmlFor="phoneInput" className="block text-sm font-bold text-[#0B1F3A]">
                2. Contact / WhatsApp Number <span className="text-rose-500">*</span>
              </label>
              <div className="flex gap-2">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="px-3 py-3 rounded-lg border border-slate-300 bg-slate-50 text-xs font-bold text-slate-700 cursor-pointer"
                >
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+971">🇦🇪 +971</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+65">🇸🇬 +65</option>
                  <option value="+61">🇦🇺 +61</option>
                </select>
                <input
                  id="phoneInput"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="84313 89153"
                  className="flex-1 px-3 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[#0B1F3A] focus:ring-1 focus:ring-[#0B1F3A] text-sm text-slate-800 font-medium"
                />
              </div>
            </div>

            {/* QUESTION 3: LOCATION IN BENGALURU */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <label className="block text-sm font-bold text-[#0B1F3A]">
                3. Preferred Location in Bengaluru <span className="text-rose-500">*</span>
              </label>
              <p className="text-xs text-slate-500">
                Choose a prime investment corridor or specify a custom locality.
              </p>

              <div className="space-y-2">
                {locationOptions.map((loc) => (
                  <label
                    key={loc}
                    className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                      location === loc
                        ? 'border-[#0B1F3A] bg-[#0B1F3A]/5 text-[#0B1F3A] font-bold'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <input
                      type="radio"
                      name="location"
                      checked={location === loc}
                      onChange={() => setLocation(loc)}
                      className="w-4 h-4 text-[#0B1F3A] accent-[#0B1F3A]"
                    />
                    <span className="text-xs sm:text-sm">{loc}</span>
                  </label>
                ))}
              </div>

              {location === 'Other / Custom Locality' && (
                <div className="pt-2 animate-fadeIn">
                  <input
                    type="text"
                    value={customLocation}
                    onChange={(e) => setCustomLocation(e.target.value)}
                    placeholder="Type your locality: e.g. Hebbal, JP Nagar, HSR, Budigere Cross..."
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#0B1F3A] text-xs font-medium"
                  />
                </div>
              )}
            </div>

            {/* QUESTION 4: PROPERTY TYPE */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <label className="block text-sm font-bold text-[#0B1F3A]">
                4. Type of Property <span className="text-rose-500">*</span>
              </label>
              <p className="text-xs text-slate-500">
                Select your preferred development category.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {propertyTypeOptions.map((type) => (
                  <label
                    key={type.label}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                      propertyType === type.label
                        ? 'border-[#0B1F3A] bg-[#0B1F3A] text-white shadow-sm'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-bold">{type.label}</span>
                      <input
                        type="radio"
                        name="propertyType"
                        checked={propertyType === type.label}
                        onChange={() => setPropertyType(type.label)}
                        className="w-4 h-4 accent-[#C8A34D]"
                      />
                    </div>
                    <span className={`text-[11px] mt-1 ${propertyType === type.label ? 'text-white/70' : 'text-slate-500'}`}>
                      {type.sub}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* QUESTION 5: PLOT SIZE */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <label className="block text-sm font-bold text-[#0B1F3A]">
                5. Plot Dimensions / Size <span className="text-rose-500">*</span>
              </label>
              <p className="text-xs text-slate-500">
                Choose standard dimensions or provide custom measurements.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {plotSizeOptions.map((item) => (
                  <label
                    key={item.id}
                    className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                      plotSize === item.id
                        ? 'border-[#0B1F3A] bg-[#0B1F3A]/5 text-[#0B1F3A] font-bold'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div>
                      <div className="text-xs sm:text-sm font-bold">{item.label}</div>
                      <div className="text-[10px] text-slate-500">{item.desc}</div>
                    </div>
                    <input
                      type="radio"
                      name="plotSize"
                      checked={plotSize === item.id}
                      onChange={() => setPlotSize(item.id)}
                      className="w-4 h-4 text-[#0B1F3A] accent-[#0B1F3A]"
                    />
                  </label>
                ))}
              </div>

              {plotSize === 'custom' && (
                <div className="grid grid-cols-2 gap-3 pt-2 p-3 bg-slate-50 rounded-xl border border-slate-200 animate-fadeIn">
                  <div>
                    <label className="text-[11px] font-bold text-slate-600 block mb-1">Frontage Width (ft)</label>
                    <input
                      type="number"
                      value={customWidth}
                      onChange={(e) => setCustomWidth(e.target.value)}
                      placeholder="30"
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs font-bold"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-slate-600 block mb-1">Depth (ft)</label>
                    <input
                      type="number"
                      value={customLength}
                      onChange={(e) => setCustomLength(e.target.value)}
                      placeholder="40"
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs font-bold"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* QUESTION 6: ESTIMATED BUDGET */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <label className="block text-sm font-bold text-[#0B1F3A]">
                6. Estimated Budget <span className="text-rose-500">*</span>
              </label>
              <p className="text-xs text-slate-500">
                Select your target investment allocation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {budgetOptions.map((b) => (
                  <label
                    key={b}
                    className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                      budget === b
                        ? 'border-[#0B1F3A] bg-[#0B1F3A] text-white font-bold shadow-sm'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <span className="text-xs sm:text-sm">{b}</span>
                    <input
                      type="radio"
                      name="budget"
                      checked={budget === b}
                      onChange={() => setBudget(b)}
                      className="w-4 h-4 accent-[#C8A34D]"
                    />
                  </label>
                ))}
              </div>
            </div>

            {/* QUESTION 7: PURCHASE READINESS */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <label className="block text-sm font-bold text-[#0B1F3A]">
                7. Purchase Readiness / Timeline
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {timelineOptions.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTimeline(t)}
                    className={`p-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer border text-center ${
                      timeline === t
                        ? 'bg-[#0B1F3A] text-white border-[#0B1F3A] shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* QUESTION 8: SPECIFIC NOTES */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <label htmlFor="notesInput" className="block text-sm font-bold text-[#0B1F3A]">
                8. Specific Requirements or Notes (Optional)
              </label>
              <textarea
                id="notesInput"
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="E.g. Prefer direct highway access, seeking SBI approved layout, or interested in corner villa plot..."
                className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#0B1F3A] text-xs font-medium"
              />
            </div>

            {/* SUBMIT BUTTON */}
            <div className="pt-2 space-y-3">
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all cursor-pointer border-2 border-emerald-400"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Submit & Send on WhatsApp ({displayPhone})</span>
              </button>

              <div className="text-center text-[11px] text-slate-500">
                🔒 Zero spam. We only dispatch verified PDF masterplans & direct developer pricing.
              </div>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
