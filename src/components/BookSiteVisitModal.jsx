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

    const waText = `Hi Premium Plots Bengaluru! I have submitted a VIP Site Visit Request:\n\n` +
      `👤 Name: ${formData.name}\n` +
      `📱 Phone: ${formData.phone}\n` +
      `📍 Project: ${projectTitle}\n` +
      `📅 Date: ${formData.visitDate} at ${formData.visitTime}\n` +
      `🚕 Cab Pickup: ${formData.cabPickup ? `Yes (${formData.pickupLocation || 'Home'})` : 'No (Self Drive)'}`;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white border border-[#e2e8f0] rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#0f1d3d] to-[#162550] p-6 text-white flex justify-between items-start shrink-0">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#d4af37] text-[10px] font-extrabold uppercase tracking-wider mb-1">
              VIP Site Inspection & Cab Dispatch
            </div>
            <h3 className="text-xl font-extrabold font-heading">Book Private Site Visit</h3>
            <p className="text-xs text-white/70 mt-0.5">{projectTitle}</p>
          </div>
          <button
            onClick={handleClose}
            className="p-1 rounded-lg bg-white/10 hover:bg-white/20 text-white/80 transition-colors"
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
              <h4 className="text-xl font-bold text-[#0f1d3d] font-heading">Site Visit Requested!</h4>
              <p className="text-xs text-[#4a5568] max-w-xs mx-auto leading-relaxed">
                Thank you <span className="font-semibold text-[#1e3a6e]">{formData.name}</span>. We opened a WhatsApp conversation with <span className="font-bold text-[#d4af37]">{displayPhone}</span> with your site visit request.
              </p>
              <div className="pt-2">
                <button
                  onClick={handleClose}
                  className="btn-gold px-8 py-3 text-xs uppercase font-extrabold shadow-lg"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs text-[#4a5568]">
              <div>
                <label className="block font-semibold uppercase text-[10px] text-[#718096] mb-1">Your Full Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#a0aec0] absolute left-3.5 top-3" />
                  <input
                    type="text" required placeholder="e.g. Rajesh Kumar" value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#f8f9fc] border border-[#e2e8f0] rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#1a202c] focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold uppercase text-[10px] text-[#718096] mb-1">Phone / WhatsApp Number *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#a0aec0] absolute left-3.5 top-3" />
                    <input
                      type="tel" required placeholder={displayPhone} value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#f8f9fc] border border-[#e2e8f0] rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#1a202c] focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold uppercase text-[10px] text-[#718096] mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#a0aec0] absolute left-3.5 top-3" />
                    <input
                      type="email" placeholder="name@domain.com" value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#f8f9fc] border border-[#e2e8f0] rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#1a202c] focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold uppercase text-[10px] text-[#718096] mb-1">Preferred Visit Date *</label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#a0aec0] absolute left-3.5 top-3" />
                    <input
                      type="date" required value={formData.visitDate}
                      onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                      className="w-full bg-[#f8f9fc] border border-[#e2e8f0] rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#1a202c] focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold uppercase text-[10px] text-[#718096] mb-1">Preferred Time Slot *</label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-[#a0aec0] absolute left-3.5 top-3" />
                    <select
                      value={formData.visitTime}
                      onChange={(e) => setFormData({ ...formData, visitTime: e.target.value })}
                      className="w-full bg-[#f8f9fc] border border-[#e2e8f0] rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#4a5568] focus:outline-none focus:border-[#d4af37]"
                    >
                      <option>10:00 AM - Morning Slot</option>
                      <option>11:30 AM - Morning Slot</option>
                      <option>02:00 PM - Afternoon Slot</option>
                      <option>04:00 PM - Evening Slot</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-[#f8f9fc] p-3.5 rounded-xl border border-[#e2e8f0] space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox" checked={formData.cabPickup}
                    onChange={(e) => setFormData({ ...formData, cabPickup: e.target.checked })}
                    className="w-4 h-4 rounded text-[#d4af37] focus:ring-[#d4af37]"
                  />
                  <span className="font-bold text-[#0f1d3d]">Include Free Doorstep AC Cab Pickup & Drop</span>
                </label>

                {formData.cabPickup && (
                  <input
                    type="text" placeholder="Enter Pickup Address / Landmark in Bengaluru" value={formData.pickupLocation}
                    onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                    className="w-full bg-white border border-[#e2e8f0] rounded-lg px-3 py-2 text-xs text-[#1a202c] focus:outline-none focus:border-[#d4af37]"
                  />
                )}
              </div>

              <button type="submit" className="btn-gold w-full py-3.5 text-xs uppercase font-extrabold tracking-wider shadow-lg flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4 fill-white" />
                Book Now via WhatsApp ({displayPhone})
              </button>

              <p className="text-[10px] text-[#a0aec0] text-center">
                🔒 Direct WhatsApp dispatch to senior site manager at {displayPhone}.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
