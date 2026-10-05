'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, MessageCircle, Send, CheckCircle2, Navigation } from 'lucide-react';
import { usePlots } from '../context/PlotsContext';

export default function ContactPage() {
  const { showToast, addLead } = usePlots();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'Nisarga Boulevard - Devanahalli',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const whatsappNumber = '918431909508';
  const displayPhone = '+91 84319 09508';

  const handleSubmit = (e) => {
    e.preventDefault();
    addLead({
      name: form.name,
      phone: form.phone,
      email: form.email,
      projectTitle: form.interest,
      visitDate: 'Immediate Inquiry',
      visitTime: 'Anytime',
      status: 'New Lead'
    });

    const text = `Hi Premium Properties! Inquiry from website:\n\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Interested Project: ${form.interest}\n` +
      `Message: ${form.message || 'I want price quote & site visit'}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
    showToast(`Inquiry sent! Opening WhatsApp chat with ${displayPhone}...`);
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-14">
      {/* Title Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C8A34D]/15 border border-[#C8A34D]/30 text-[#0B1F3A] text-xs font-bold uppercase tracking-wider">
          <MessageCircle className="w-4 h-4 fill-[#C8A34D] text-[#0B1F3A]" />
          Direct Advisory Hotline: {displayPhone}
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0B1F3A] tracking-tight font-heading">
          Get in Touch with Property Advisors
        </h1>
        <div className="divider-gold mx-auto mt-2" />
        <p className="text-[#555555] text-sm sm:text-base">
          Connect directly on WhatsApp <strong>{displayPhone}</strong> with our real estate advisory team for authentic price lists, layout maps & VIP site visit coordination.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Info Sidebar */}
        <div className="lg:col-span-5 bg-[#0B1F3A] text-white p-8 rounded-2xl shadow-xl space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C8A34D]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="border-b border-white/15 pb-6">
            <h3 className="text-2xl font-bold font-heading">Advisory Offices</h3>
            <p className="text-xs text-white/60 mt-1">Visit our experience centers in UB City & Indiranagar.</p>
          </div>

          <div className="space-y-6 text-xs text-white/80">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/15">
                <MapPin className="w-5 h-5 text-[#C8A34D]" />
              </div>
              <div>
                <div className="font-bold text-white text-sm">UB City Experience Center</div>
                <div className="text-white/60 mt-0.5 leading-relaxed">
                  Level 5, Concorde Towers, UB City, Vittal Mallya Road & Indiranagar 100ft Road, Bengaluru, Karnataka 560001
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/15">
                <Phone className="w-5 h-5 text-[#C8A34D]" />
              </div>
              <div>
                <div className="font-bold text-white text-sm">Direct Hotline</div>
                <a href={`tel:+918431909508`} className="font-bold text-[#C8A34D] text-base hover:underline transition-colors block mt-0.5">
                  {displayPhone}
                </a>
                <div className="text-emerald-400 text-[11px] font-semibold mt-1">Available 24/7 on WhatsApp</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/15">
                <Mail className="w-5 h-5 text-[#C8A34D]" />
              </div>
              <div>
                <div className="font-bold text-white text-sm">Email Inquiries</div>
                <div className="text-white/60 mt-0.5">advisory@premiumpropertiesbengaluru.com</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/15">
                <Clock className="w-5 h-5 text-[#C8A34D]" />
              </div>
              <div>
                <div className="font-bold text-white text-sm">Site Visit Hours</div>
                <div className="text-white/60 mt-0.5">Monday - Sunday: 9:00 AM - 6:30 PM (Guided Tours Available)</div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/15">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi! I want to chat with a property advisor regarding Bengaluru & Dubai listings.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full py-3.5 text-xs uppercase font-extrabold tracking-wider flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-[#0B1F3A]" />
              Chat on WhatsApp ({displayPhone})
            </a>
          </div>
        </div>

        {/* Lead Form */}
        <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-[#0B1F3A]/10 shadow-sm space-y-6">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-200 shadow-sm">
                <CheckCircle2 className="w-10 h-10 text-emerald-500" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B1F3A] font-heading">Inquiry Submitted Successfully</h3>
              <p className="text-xs text-[#555555] max-w-sm mx-auto leading-relaxed">
                We have opened a direct WhatsApp conversation with <strong className="text-[#C8A34D]">{displayPhone}</strong>. Our advisory team will assist you promptly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-gold px-8 py-3 text-xs uppercase font-bold cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs text-[#1A1A1A]">
              <div className="border-b border-[#0B1F3A]/10 pb-3">
                <h3 className="text-xl font-bold text-[#0B1F3A] font-heading">Send an Instant Property Inquiry</h3>
                <p className="text-xs text-[#555555] mt-0.5">Fill in your details to receive full project brochure, pricing sheet & schedule a site visit.</p>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#555555] uppercase mb-1">Your Full Name *</label>
                <input
                  type="text" required placeholder="e.g. Anand Kumar" value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-[#F8F8F5] border border-[#0B1F3A]/15 rounded-xl px-4 py-3 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#C8A34D]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#555555] uppercase mb-1">WhatsApp / Phone Number *</label>
                  <input
                    type="tel" required placeholder="e.g. 9876543210" value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-[#F8F8F5] border border-[#0B1F3A]/15 rounded-xl px-4 py-3 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#C8A34D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#555555] uppercase mb-1">Email Address (Optional)</label>
                  <input
                    type="email" placeholder="anand@example.com" value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-[#F8F8F5] border border-[#0B1F3A]/15 rounded-xl px-4 py-3 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#C8A34D]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#555555] uppercase mb-1">Project of Interest</label>
                <select
                  value={form.interest}
                  onChange={(e) => setForm({ ...form, interest: e.target.value })}
                  className="w-full bg-[#F8F8F5] border border-[#0B1F3A]/15 rounded-xl px-4 py-3 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#C8A34D] cursor-pointer"
                >
                  <option value="Nisarga Boulevard - Devanahalli">Nisarga Boulevard - Devanahalli (Open Plots)</option>
                  <option value="Vinra Alora - Whitefield">Vinra Alora - Whitefield Extension (Custom Villas)</option>
                  <option value="Prestige City - Sarjapur">Prestige City - Sarjapur (High-Rise Apartments)</option>
                  <option value="Dubai Marina Waterfront">Dubai Marina Sunset Residences (Dubai Investments)</option>
                  <option value="Vinra Interior Design Package">Vinra Turnkey Interior Design Packages</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#555555] uppercase mb-1">Requirement Notes or Specific Questions</label>
                <textarea
                  rows="3" placeholder="Tell us your budget, preferred configuration or timeline..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-[#F8F8F5] border border-[#0B1F3A]/15 rounded-xl px-4 py-3 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#C8A34D]"
                />
              </div>

              <button
                type="submit"
                className="btn-gold w-full py-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry & Connect via WhatsApp</span>
              </button>

              <div className="text-[11px] text-[#555555] text-center pt-1">
                🔒 100% Privacy Assured • No spam calls • Direct Channel Partner advisory
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
