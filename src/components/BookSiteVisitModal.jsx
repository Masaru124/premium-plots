'use client';

import React, { useState, useEffect, useRef } from 'react';
import { X, Calendar, Clock, MapPin, Phone, User, Mail, CheckCircle2, MessageCircle } from 'lucide-react';
import { usePlots } from '../context/PlotsContext';

const INPUT =
  'min-h-11 w-full border border-[#0B1F3A]/20 bg-[#F8F8F5] px-3.5 py-3 text-[14px] text-[#1A1A1A] placeholder:text-[#5F5F5F] focus:border-[#0B1F3A] focus:outline-none';
const LABEL = 'mb-1.5 block text-[13px] font-semibold uppercase tracking-[0.13em] text-[#555555]';

const EMPTY_FORM = {
  name: '',
  phone: '',
  email: '',
  visitDate: '',
  visitTime: '10:30 AM',
  cabPickup: true,
  pickupLocation: ''
};

export default function BookSiteVisitModal() {
  const {
    isSiteVisitModalOpen,
    siteVisitModal,
    closeSiteVisitModal,
    selectedProjectForModal,
    addLead,
    bookSiteVisit
  } = usePlots();

  const [formData, setFormData] = useState(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const dialogRef = useRef(null);
  const firstFieldRef = useRef(null);
  const restoreFocusRef = useRef(null);

  const whatsappNumber = '918431909508';
  const displayPhone = '+91 84319 09508';

  const isOpen = Boolean(isSiteVisitModalOpen || siteVisitModal?.isOpen);
  const activeProject = selectedProjectForModal || siteVisitModal?.project;
  const projectTitle = activeProject ? activeProject.title : 'Oriaiyan Signature Plotted Developments & Villa Plots';

  // Dialog behaviour: move focus in, trap tab, close on Escape, keep the page
  // from scrolling underneath, and hand focus back on close.
  useEffect(() => {
    if (!isOpen) return undefined;

    restoreFocusRef.current = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusTimer = window.setTimeout(() => firstFieldRef.current?.focus(), 40);

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        close();
        return;
      }

      if (event.key !== 'Tab' || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      if (restoreFocusRef.current instanceof HTMLElement) {
        restoreFocusRef.current.focus({ preventScroll: true });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  if (!isOpen) return null;

  // Declared as a function so the dialog effect above can call it safely.
  function close() {
    setSubmitted(false);
    setError('');
    setFormData(EMPTY_FORM);
    closeSiteVisitModal();
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');

    const digits = formData.phone.replace(/\D/g, '');
    if (digits.length < 8) {
      setError('Enter a phone number the advisor can reach you on.');
      return;
    }

    const saveLeadFn = addLead || bookSiteVisit;
    if (saveLeadFn) {
      saveLeadFn({
        ...formData,
        projectTitle
      });
    }

    const waText =
      `Hello Setty Relators. I have submitted a site visit request.\n\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Project: ${projectTitle}\n` +
      `Date: ${formData.visitDate} at ${formData.visitTime}\n` +
      `Guided tour / cab: ${formData.cabPickup ? `Yes (${formData.pickupLocation || 'Home'})` : 'No (self drive)'}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(waText)}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#071527]/80 p-4 animate-fadeIn"
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="site-visit-title"
        aria-describedby="site-visit-description"
        className="relative my-8 flex max-h-[90vh] w-full max-w-lg flex-col overflow-hidden border border-[#C8A34D]/40 bg-white"
      >
        <div className="flex shrink-0 items-start justify-between gap-4 border-b border-[#C8A34D]/30 bg-[#0B1F3A] p-6 text-white">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[#DFC06E]">
              Private inspection
            </p>
            <h2 id="site-visit-title" className="mt-2 font-heading text-2xl text-white">
              Book a site visit
            </h2>
            <p id="site-visit-description" className="mt-1 text-[13px] leading-relaxed text-white/65">
              {projectTitle}
            </p>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Close site visit form"
            className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/25 text-white/80 transition-colors hover:border-[#C8A34D] hover:text-[#C8A34D]"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="overflow-y-auto p-6">
          {submitted ? (
            <div className="space-y-4 py-8 text-center">
              <CheckCircle2 className="mx-auto h-10 w-10 text-[#7A5C10]" aria-hidden="true" />
              <h3 className="font-heading text-xl text-[#0B1F3A]">Request received</h3>
              <p className="mx-auto max-w-[38ch] text-[14px] leading-relaxed text-[#555555]">
                Thank you, {formData.name || 'and welcome'}. A WhatsApp conversation with{' '}
                <strong className="text-[#0B1F3A]">{displayPhone}</strong> has opened with your visit
                details; the advisor will confirm the slot there.
              </p>
              <button type="button" onClick={close} className="btn-gold mt-2 px-8">
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label htmlFor="visit-name" className={LABEL}>Full name <span aria-hidden="true">*</span></label>
                <input
                  ref={firstFieldRef}
                  id="visit-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="e.g. Rajesh Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={INPUT}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="visit-phone" className={LABEL}>Phone / WhatsApp <span aria-hidden="true">*</span></label>
                  <input
                    id="visit-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder={displayPhone}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    aria-describedby={error ? 'visit-error' : undefined}
                    className={INPUT}
                  />
                </div>

                <div>
                  <label htmlFor="visit-email" className={LABEL}>Email <span className="normal-case tracking-normal text-[#5F5F5F]">(optional)</span></label>
                  <input
                    id="visit-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={INPUT}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="visit-date" className={LABEL}>Visit date <span aria-hidden="true">*</span></label>
                  <input
                    id="visit-date"
                    name="visitDate"
                    type="date"
                    required
                    value={formData.visitDate}
                    onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                    className={INPUT}
                  />
                </div>

                <div>
                  <label htmlFor="visit-time" className={LABEL}>Time slot</label>
                  <select
                    id="visit-time"
                    name="visitTime"
                    value={formData.visitTime}
                    onChange={(e) => setFormData({ ...formData, visitTime: e.target.value })}
                    className={`${INPUT} cursor-pointer`}
                  >
                    <option value="09:30 AM">09:30 AM</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="02:30 PM">02:30 PM</option>
                    <option value="04:30 PM">04:30 PM</option>
                  </select>
                </div>
              </div>

              <fieldset className="border border-[#0B1F3A]/15 p-4">
                <legend className="px-1 text-[13px] font-semibold uppercase tracking-[0.13em] text-[#555555]">
                  Travel
                </legend>

                <label htmlFor="visit-cab" className="flex cursor-pointer items-center gap-3 text-[14px] font-medium text-[#0B1F3A]">
                  <input
                    id="visit-cab"
                    name="cabPickup"
                    type="checkbox"
                    checked={formData.cabPickup}
                    onChange={(e) => setFormData({ ...formData, cabPickup: e.target.checked })}
                    className="h-4 w-4 accent-[#0B1F3A]"
                  />
                  Complimentary chauffeured pickup
                </label>

                {formData.cabPickup && (
                  <div className="mt-3">
                    <label htmlFor="visit-pickup" className={LABEL}>Pickup address or landmark</label>
                    <div className="relative">
                      <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5F5F5F]" aria-hidden="true" />
                      <input
                        id="visit-pickup"
                        name="pickupLocation"
                        type="text"
                        placeholder="Hebbal, Whitefield, Airport…"
                        value={formData.pickupLocation}
                        onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                        className={`${INPUT} pl-9`}
                      />
                    </div>
                  </div>
                )}
              </fieldset>

              {error && (
                <p id="visit-error" role="alert" className="border-l-2 border-[#A6832A] bg-[#C8A34D]/10 px-3 py-2 text-[13px] text-[#7A5C10]">
                  {error}
                </p>
              )}

              <button type="submit" className="btn-gold w-full py-4">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Confirm on WhatsApp
              </button>

              <p className="flex items-center justify-center gap-2 text-[13px] uppercase tracking-[0.1em] text-[#5F5F5F]">
                <Phone className="h-3 w-3" aria-hidden="true" />
                Or call {displayPhone}
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
