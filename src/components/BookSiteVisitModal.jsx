'use client';

import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, Phone, User, Mail, ShieldCheck, CheckCircle2, MessageCircle } from 'lucide-react';
import { usePlots } from '../context/PlotsContext';

export default function BookSiteVisitModal() {
  const { isSiteVisitModalOpen, closeSiteVisitModal, selectedProjectForModal, addLead } = usePlots();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    visitDate: '',
    visitTime: '10:30 AM',
    cabPickup: true,
    pickupLocation: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const whatsappNumber = '918431909508';
  const displayPhone = '+91 84319 09508';

  if (!isSiteVisitModalOpen) return null;

  const projectTitle = selectedProjectForModal ? selectedProjectForModal.title : 'Nisarga Boulevard - Devanahalli';

  const handleSubmit = (e) => {
    e.preventDefault();
    addLead({
      ...formData,
      projectTitle
    });

    const waText = `Hi Premium Properties! I have submitted a VIP Site Visit Request:\n\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Project: ${projectTitle}\n` +
      `Date: ${formData.visitDate} at ${formData.visitTime}\n` +
      `Guided Tour / Cab: ${formData.cabPickup ? `Yes (${formData.pickupLocation || 'Home'})` : 'No (Self Drive)'}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(waText)}`, '_blank');
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      visitDate: '',
      visitTime: '10:30 AM',
      cabPickup: true,
      pickupLocation: ''
    });
    closeSiteVisitModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white border border-[#0B1F3A]/15 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-[#0B1F3A] p-6 text-white flex justify-between items-start shrink-0 border-b border-[#C8A34D]/30">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C8A34D]/20 border border-[#C8A34D]/40 text-[#C8A34D] text-[10px] font-extrabold uppercase tracking-wider mb-1">
              VIP Site Inspection & Advisory
            </div>
            <h3 className="text-xl font-extrabold font-heading">Book Private Site Visit</h3>
            <p className="text-xs text-white/70 mt-0.5">{projectTitle}</p>
          </div>
          <button
            onClick={handleClose}
            className="p-1 rounded-lg bg-white/10 hover:bg-white/20 text-white/80 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-200 shadow-sm">
                <CheckCircle2 className="w-10 h-10 text-emerald-500" />
              </div>
              <h4 className="text-xl font-bold text-[#0B1F3A] font-heading">Site Visit Requested</h4>
              <p className="text-xs text-[#555555] max-w-xs mx-auto leading-relaxed">
                Thank you <span className="font-semibold text-[#0B1F3A]">{formData.name}</span>. We opened a WhatsApp conversation with <span className="font-bold text-[#C8A34D]">{displayPhone}</span> with your site visit details.
              </p>
              <div className="pt-2">
                <button
                  onClick={handleClose}
                  className="btn-gold px-8 py-3 text-xs uppercase font-extrabold shadow-lg cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs text-[#1A1A1A]">
              <div>
                <label className="block font-semibold uppercase text-[10px] text-[#555555] mb-1">Your Full Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#555555] absolute left-3.5 top-3" />
                  <input
                    type="text" required placeholder="e.g. Rajesh Kumar" value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#F8F8F5] border border-[#0B1F3A]/15 rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#C8A34D]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold uppercase text-[10px] text-[#555555] mb-1">Phone / WhatsApp Number *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#555555] absolute left-3.5 top-3" />
                    <input
                      type="tel" required placeholder={displayPhone} value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#F8F8F5] border border-[#0B1F3A]/15 rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#C8A34D]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold uppercase text-[10px] text-[#555555] mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#555555] absolute left-3.5 top-3" />
                    <input
                      type="email" placeholder="name@domain.com" value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#F8F8F5] border border-[#0B1F3A]/15 rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#C8A34D]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold uppercase text-[10px] text-[#555555] mb-1">Preferred Visit Date *</label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#555555] absolute left-3.5 top-3" />
                    <input
                      type="date" required value={formData.visitDate}
                      onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                      className="w-full bg-[#F8F8F5] border border-[#0B1F3A]/15 rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#C8A34D]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold uppercase text-[10px] text-[#555555] mb-1">Preferred Time Slot</label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-[#555555] absolute left-3.5 top-3" />
                    <select
                      value={formData.visitTime}
                      onChange={(e) => setFormData({ ...formData, visitTime: e.target.value })}
                      className="w-full bg-[#F8F8F5] border border-[#0B1F3A]/15 rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#C8A34D] cursor-pointer"
                    >
                      <option value="09:30 AM">09:30 AM (Morning Slot)</option>
                      <option value="11:30 AM">11:30 AM (Mid-Day Slot)</option>
                      <option value="02:30 PM">02:30 PM (Afternoon Slot)</option>
                      <option value="04:30 PM">04:30 PM (Evening Sunset Slot)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#F8F8F5] rounded-xl border border-[#0B1F3A]/10 space-y-2">
                <label className="flex items-center gap-2 text-xs font-bold text-[#0B1F3A] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.cabPickup}
                    onChange={(e) => setFormData({ ...formData, cabPickup: e.target.checked })}
                    className="w-4 h-4 accent-[#C8A34D] rounded"
                  />
                  <span>Complimentary VIP Guided Site Tour Pickup</span>
                </label>
                {formData.cabPickup && (
                  <input
                    type="text"
                    placeholder="Enter pickup address / landmark (e.g. Hebbal, Whitefield, Airport)"
                    value={formData.pickupLocation}
                    onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                    className="w-full bg-white border border-[#0B1F3A]/15 rounded-lg px-3 py-2 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#C8A34D]"
                  />
                )}
              </div>

              <button
                type="submit"
                className="btn-gold w-full py-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-[#0B1F3A]" />
                <span>Confirm VIP Site Visit via WhatsApp</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
