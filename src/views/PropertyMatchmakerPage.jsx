'use client';

import React, { useState } from 'react';
import { MessageCircle, Copy, RotateCcw, ArrowRight, Check } from 'lucide-react';
import { usePlots } from '../context/PlotsContext';

const WHATSAPP = '918431909508';
const PHONE_DISPLAY = '+91 84319 09508';

const FIELD =
  'min-h-12 w-full bg-[#EFEEE8] px-4 text-[17px] text-[#1A1A1A] placeholder:text-[#5F5F5F] focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]';

/* A radio row: the whole line is the target, the marker is a square rule. */
function Choice({ checked, onChange, name, label, sub, tone = 'light' }) {
  const onInk = tone === 'ink';
  return (
    <label
      className={`flex cursor-pointer items-start gap-3 py-3.5 text-[17px] leading-relaxed transition-colors ${
        onInk
          ? checked
            ? 'text-white'
            : 'text-white/70 hover:text-white'
          : checked
          ? 'text-[#0B1F3A]'
          : 'text-[#1A1A1A] hover:text-[#0B1F3A]'
      }`}
    >
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span
        aria-hidden="true"
        className={`mt-[9px] h-2.5 w-2.5 shrink-0 ${
          checked ? 'bg-[#C8A34D]' : onInk ? 'bg-white/25' : 'bg-[#0B1F3A]/20'
        }`}
      />
      <span>
        {label}
        {sub && (
          <span className={`mt-0.5 block text-[14px] ${onInk ? 'text-white/50' : 'text-[var(--text-soft)]'}`}>
            {sub}
          </span>
        )}
      </span>
    </label>
  );
}

export default function PropertyMatchmakerPage({ heading, intro }) {
  const { showToast } = usePlots();

  const [isFormStarted, setIsFormStarted] = useState(false);

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

  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const locationOptions = [
    'South Bengaluru (Bannerghatta Road & NICE Corridor)',
    'North Bengaluru (Airport & STRR Corridor)',
    'East Bengaluru (Budigere Cross & Hoskote)',
    'Sarjapur Road / Outer Ring Road',
    'Whitefield',
    'Kanakapura Road / NICE Corridor',
    'Mysore Road / West Bengaluru',
    'Other / Custom Locality'
  ];

  const propertyTypeOptions = [
    { label: 'Luxury Villa (5 BHK)', sub: 'Generous living, private garden & pool' },
    { label: 'Residential Plot', sub: 'Land only · design your own home' },
    { label: 'Luxury Villa Plot', sub: 'Gated community with clubhouse' },
    { label: 'Ready to Move Plot', sub: 'Immediate A-Khata registration' },
    { label: 'Apartments', sub: '2, 3 & 4 BHK high-rise units' }
  ];

  const plotSizeOptions = [
    { id: '20*30', label: '20 × 30 (600 sq ft)', desc: 'Compact duplex or rental' },
    { id: '30*40', label: '30 × 40 (1,200 sq ft)', desc: 'The Bengaluru standard' },
    { id: '30*50', label: '30 × 50 (1,500 sq ft)', desc: 'Spacious four-bedroom with garden' },
    { id: '40*60', label: '40 × 60 (2,400 sq ft)', desc: 'Luxury mansion footprint' },
    { id: '50*60', label: '50 × 60 (3,000 sq ft)', desc: 'Grand estate footprint' },
    { id: 'custom', label: 'Custom dimensions', desc: 'Specify your own plot size' }
  ];

  const budgetOptions = [
    'Under ₹35 Lakhs',
    '₹35 Lakhs - ₹50 Lakhs',
    '₹50 Lakhs - ₹75 Lakhs',
    '₹75 Lakhs - ₹1.5 Crore',
    '₹1.5 Crore - ₹4.0 Crore',
    '₹4.0 Crore - ₹10.0 Crore (Ultra Luxury)'
  ];

  const timelineOptions = [
    'Within 30 Days (Ready)',
    'Next 1 - 3 Months',
    '6+ Months / Long-term Research'
  ];

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

  const buildWhatsAppMessage = () => {
    return `*NEW PROPERTY INQUIRY VIA THE DESK*\n\n` +
      `• Full Name: ${fullName.trim()}\n` +
      `• Contact / WhatsApp: ${countryCode} ${phone.trim()}\n` +
      `• Preferred Location: ${resolvedLocationStr}\n` +
      `• Property Category: ${propertyType}\n` +
      `• Plot Dimensions / Size: ${resolvedPlotSizeStr}\n` +
      `• Estimated Budget: ${budget}\n` +
      `• Purchase Readiness: ${timeline}\n` +
      `${notes.trim() ? `• Notes: ${notes.trim()}\n` : ''}\n` +
      `• Request: Hello Setty Relators! I have completed the requirement form. Please send verified RERA masterplans, available corner and standard layouts, and direct developer pricing for these specifications.`;
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    setErrorMsg('');

    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name.');
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
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP}&text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
    showToast('Launching WhatsApp with your inquiry.');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(buildWhatsAppMessage());
    setCopied(true);
    showToast('Inquiry text copied to clipboard.');
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
    <div className="shell page-section max-w-[860px] pt-12 lg:pt-16">
      <p className="text-[14px] text-[#7A5C10]">The desk&apos;s form</p>
      <h1 className="mt-3 display-lg max-w-[22ch] text-[#0B1F3A]">
        {heading || 'Tell us what you are looking for.'}
      </h1>
      {intro && (
        <p className="mt-4 max-w-[54ch] text-[19px] leading-relaxed text-[var(--text-soft)]">{intro}</p>
      )}

      <p className="mt-6 max-w-[58ch] text-[17px] leading-relaxed text-[var(--text-soft)]">
        Eight questions, then the desk sends masterplans and direct developer pricing on WhatsApp.
        Zero brokerage to buyers.
      </p>

      {!isFormStarted && !isSubmitted && (
        <div className="mt-9">
          <button
            type="button"
            onClick={() => {
              setIsFormStarted(true);
              setTimeout(() => {
                const firstInput = document.getElementById('fullNameInput');
                if (firstInput) firstInput.focus();
              }, 100);
            }}
            className="btn-gold"
          >
            Start the form
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      )}

      {/* ------------------------------------------------------------ sent */}
      {isSubmitted && (
        <div className="mt-10">
          <span className="inline-flex h-11 w-11 items-center justify-center bg-[#0B1F3A]">
            <Check className="h-5 w-5 text-[#DFC06E]" aria-hidden="true" />
          </span>
          <h2 className="mt-5 display-md text-[#0B1F3A]">Query prepared and sent.</h2>
          <p className="mt-3 max-w-[52ch] text-[17px] leading-relaxed text-[var(--text-soft)]">
            WhatsApp has opened with your inquiry for {fullName}. If it did not open, send it again
            or copy the message.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={`https://api.whatsapp.com/send?phone=${WHATSAPP}&text=${encodeURIComponent(buildWhatsAppMessage())}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Open WhatsApp
            </a>
            <button type="button" onClick={handleCopy} className="btn-quiet">
              <Copy className="h-4 w-4" aria-hidden="true" />
              {copied ? 'Copied' : 'Copy the message'}
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex min-h-11 items-center gap-2 text-[16px] text-[#0B1F3A] underline decoration-[#C8A34D] decoration-2 underline-offset-4"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              Start again
            </button>
          </div>

          <pre className="mt-8 max-h-52 overflow-y-auto whitespace-pre-wrap bg-[var(--stone)] p-5 text-[14px] leading-relaxed text-[var(--text-soft)]">
            {buildWhatsAppMessage()}
          </pre>
        </div>
      )}

      {/* ------------------------------------------------------------ form */}
      {isFormStarted && !isSubmitted && (
        <form onSubmit={handleSubmit} className="mt-10 space-y-4">
          {errorMsg && (
            <p role="alert" className="bg-[#C8A34D]/15 px-4 py-3 text-[16px] text-[#7A5C10]">
              {errorMsg}
            </p>
          )}

          <fieldset className="bg-white px-5 py-7 sm:px-7">
            <legend className="float-left mb-4 w-full font-heading text-[1.25rem] text-[#0B1F3A]">
              1. Your name
            </legend>
            <label htmlFor="fullNameInput" className="sr-only">Full name</label>
            <input
              id="fullNameInput"
              type="text"
              required
              autoComplete="name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Anand Kumar"
              className={FIELD}
            />
          </fieldset>

          <fieldset className="bg-white px-5 py-7 sm:px-7">
            <legend className="float-left mb-4 w-full font-heading text-[1.25rem] text-[#0B1F3A]">
              2. Contact number
            </legend>
            <div className="flex gap-3">
              <label htmlFor="countryCode" className="sr-only">Country code</label>
              <select
                id="countryCode"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="min-h-12 bg-[#EFEEE8] px-3 text-[16px] text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]"
              >
                <option value="+91">+91 India</option>
                <option value="+971">+971 UAE</option>
                <option value="+1">+1 USA</option>
                <option value="+44">+44 UK</option>
                <option value="+65">+65 Singapore</option>
                <option value="+61">+61 Australia</option>
              </select>
              <label htmlFor="phoneInput" className="sr-only">Phone or WhatsApp number</label>
              <input
                id="phoneInput"
                type="tel"
                required
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="84319 09508"
                className={`${FIELD} flex-1`}
              />
            </div>
          </fieldset>

          <fieldset className="bg-white px-5 py-7 sm:px-7">
            <legend className="float-left mb-2 w-full font-heading text-[1.25rem] text-[#0B1F3A]">
              3. Where in Bengaluru
            </legend>
            <p className="mb-3 clear-both text-[15px] text-[var(--text-soft)]">
              A corridor, or a locality of your own.
            </p>
            <div className="clear-both grid gap-x-10 sm:grid-cols-2">
              {locationOptions.map((loc) => (
                <Choice
                  key={loc}
                  name="location"
                  checked={location === loc}
                  onChange={() => setLocation(loc)}
                  label={loc}
                />
              ))}
            </div>

            {location === 'Other / Custom Locality' && (
              <div className="mt-4">
                <label htmlFor="customLocality" className="mb-2 block text-[14px] text-[#4C4C4C]">
                  Locality
                </label>
                <input
                  id="customLocality"
                  type="text"
                  value={customLocation}
                  onChange={(e) => setCustomLocation(e.target.value)}
                  placeholder="Hebbal, JP Nagar, HSR, Budigere Cross…"
                  className={FIELD}
                />
              </div>
            )}
          </fieldset>

          <fieldset className="bg-white px-5 py-7 sm:px-7">
            <legend className="float-left mb-2 w-full font-heading text-[1.25rem] text-[#0B1F3A]">
              4. What you are buying
            </legend>
            <div className="clear-both grid gap-x-10 sm:grid-cols-2">
              {propertyTypeOptions.map((type) => (
                <Choice
                  key={type.label}
                  name="propertyType"
                  checked={propertyType === type.label}
                  onChange={() => setPropertyType(type.label)}
                  label={type.label}
                  sub={type.sub}
                />
              ))}
            </div>
          </fieldset>

          <fieldset className="bg-white px-5 py-7 sm:px-7">
            <legend className="float-left mb-2 w-full font-heading text-[1.25rem] text-[#0B1F3A]">
              5. Plot size
            </legend>
            <div className="clear-both grid gap-x-10 sm:grid-cols-2">
              {plotSizeOptions.map((item) => (
                <Choice
                  key={item.id}
                  name="plotSize"
                  checked={plotSize === item.id}
                  onChange={() => setPlotSize(item.id)}
                  label={item.label}
                  sub={item.desc}
                />
              ))}
            </div>

            {plotSize === 'custom' && (
              <div className="mt-5 grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="customWidth" className="mb-2 block text-[14px] text-[#4C4C4C]">
                    Frontage, feet
                  </label>
                  <input
                    id="customWidth"
                    type="number"
                    value={customWidth}
                    onChange={(e) => setCustomWidth(e.target.value)}
                    placeholder="30"
                    className={FIELD}
                  />
                </div>
                <div>
                  <label htmlFor="customLength" className="mb-2 block text-[14px] text-[#4C4C4C]">
                    Depth, feet
                  </label>
                  <input
                    id="customLength"
                    type="number"
                    value={customLength}
                    onChange={(e) => setCustomLength(e.target.value)}
                    placeholder="40"
                    className={FIELD}
                  />
                </div>
              </div>
            )}
          </fieldset>

          <fieldset className="bg-white px-5 py-7 sm:px-7">
            <legend className="float-left mb-2 w-full font-heading text-[1.25rem] text-[#0B1F3A]">
              6. Budget
            </legend>
            <div className="clear-both grid gap-x-10 sm:grid-cols-2">
              {budgetOptions.map((b) => (
                <Choice
                  key={b}
                  name="budget"
                  checked={budget === b}
                  onChange={() => setBudget(b)}
                  label={b}
                />
              ))}
            </div>
          </fieldset>

          <fieldset className="bg-white px-5 py-7 sm:px-7">
            <legend className="float-left mb-2 w-full font-heading text-[1.25rem] text-[#0B1F3A]">
              7. When you are ready
            </legend>
            <div className="clear-both flex flex-wrap gap-x-8">
              {timelineOptions.map((t) => (
                <label
                  key={t}
                  className={`flex min-h-11 cursor-pointer items-center gap-3 text-[17px] ${
                    timeline === t ? 'text-[#0B1F3A]' : 'text-[#1A1A1A] hover:text-[#0B1F3A]'
                  }`}
                >
                  <input
                    type="radio"
                    name="timeline"
                    checked={timeline === t}
                    onChange={() => setTimeline(t)}
                    className="sr-only"
                  />
                  <span
                    aria-hidden="true"
                    className={`h-2.5 w-2.5 shrink-0 ${timeline === t ? 'bg-[#C8A34D]' : 'bg-[#0B1F3A]/20'}`}
                  />
                  {t}
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="bg-white px-5 py-7 sm:px-7">
            <legend className="float-left mb-4 w-full font-heading text-[1.25rem] text-[#0B1F3A]">
              8. Anything else
            </legend>
            <label htmlFor="notesInput" className="sr-only">Notes</label>
            <textarea
              id="notesInput"
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Direct highway access, an SBI-approved layout, a corner plot…"
              className={FIELD}
            />
          </fieldset>

          <div className="bg-white px-5 py-7 sm:px-7">
            <button type="submit" className="btn-gold">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Send on WhatsApp
            </button>
            <p className="mt-4 text-[14px] text-[var(--text-soft)]">
              No spam. The desk sends verified masterplans and developer pricing only. Advisory line{' '}
              {PHONE_DISPLAY}.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
