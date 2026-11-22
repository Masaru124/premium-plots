'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { usePlots } from '../context/PlotsContext';

const FIELD_CLASS =
  'w-full rounded-lg border border-[#0B1F3A]/15 bg-[#F8F8F5] px-4 py-3 text-base text-[#1A1A1A] placeholder:text-[#7A7A7A] focus:border-[#C8A34D] focus:outline-none';

const LABEL_CLASS = 'mb-2 block text-sm font-semibold text-[#1A1A1A]';

export default function ContactPage() {
  const { showToast, addLead, bookSiteVisit } = usePlots();
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
    const saveLead = addLead || bookSiteVisit;
    if (saveLead) {
      saveLead({
        name: form.name,
        phone: form.phone,
        email: form.email,
        projectTitle: form.interest,
        visitDate: 'Immediate Inquiry',
        visitTime: 'Anytime',
        status: 'New Lead'
      });
    }

    const text = `Hi Lakshie Real Estate! Inquiry from website:\n\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Interested Project: ${form.interest}\n` +
      `Message: ${form.message || 'I want a price quote and site visit'}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
    showToast(`Inquiry sent. Opening WhatsApp chat with ${displayPhone}.`);
    setSubmitted(true);
  };

  const details = [
    {
      icon: MapPin,
      title: 'UB City experience centre',
      body: 'Level 5, Concorde Towers, UB City, Vittal Mallya Road and Indiranagar 100ft Road, Bengaluru 560001'
    },
    { icon: Phone, title: 'Advisory hotline', href: `tel:+${whatsappNumber}`, body: displayPhone },
    { icon: Mail, title: 'Email', body: 'advisory@premiumpropertiesbengaluru.com' },
    { icon: Clock, title: 'Site visit hours', body: 'Monday to Sunday, 9:00 am to 6:30 pm. Guided tours by appointment.' }
  ];

  return (
    <div className="bg-[#F8F8F5]">
      {/* Header */}
      <section className="bg-[#0B1F3A] text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <h1 className="max-w-3xl font-heading text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl">
            Talk to a property advisor
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            Price lists, layout maps and site visit coordination, directly on WhatsApp with the advisory team.
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        {/* Details */}
        <div className="min-w-0 space-y-8 lg:col-span-5">
          <div className="rounded-lg bg-[#0B1F3A] p-8 text-white">
            <h2 className="font-heading text-2xl font-bold">Advisory offices</h2>
            <dl className="mt-6 space-y-6">
              {details.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <dt className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <item.icon className="h-4 w-4 text-[#C8A34D]" aria-hidden="true" />
                    <span className="sr-only">{item.title}</span>
                  </dt>
                  <dd className="min-w-0">
                    <span className="block text-sm text-white/60">{item.title}</span>
                    {item.href ? (
                      <a href={item.href} className="mt-0.5 block text-base font-semibold text-[#C8A34D] hover:underline">
                        {item.body}
                      </a>
                    ) : (
                      <span className="mt-0.5 block text-base leading-relaxed text-white/90 break-words">{item.body}</span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi! I want to chat with a property advisor about Bengaluru and Dubai listings.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-8 flex w-full cursor-pointer items-center justify-center gap-2 py-3.5 text-sm"
            >
              <MessageCircle className="h-4 w-4 text-[#0B1F3A]" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>

          <figure className="overflow-hidden rounded-lg">
            <img
              src="/images/purva-sounds-of-water/purva-villas-community.jpeg"
              alt="Villa residences and landscaped gardens at a Bengaluru community we represent"
              loading="lazy"
              className="h-56 w-full object-cover"
            />
            <figcaption className="mt-2 text-sm text-[#555555]">
              Site visits are arranged and driven from our Bengaluru desk.
            </figcaption>
          </figure>
        </div>

        {/* Form */}
        <div className="min-w-0 lg:col-span-7">
          <div className="rounded-lg border min-w-0 overflow-hidden border-[#0B1F3A]/10 bg-white p-6 sm:p-8">
            {submitted ? (
              <div className="space-y-5 py-10 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#0B1F3A]">
                  <CheckCircle2 className="h-7 w-7 text-[#C8A34D]" aria-hidden="true" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-[#0B1F3A]">Inquiry sent</h2>
                <p className="mx-auto max-w-sm text-base leading-relaxed text-[#555555]">
                  A WhatsApp conversation with <strong className="text-[#0B1F3A]">{displayPhone}</strong> is open. The advisory team will reply there.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-gold cursor-pointer px-7 py-3 text-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h2 className="font-heading text-2xl font-bold text-[#0B1F3A]">Send an inquiry</h2>
                  <p className="mt-2 text-base leading-relaxed text-[#555555]">
                    Your details open a direct WhatsApp chat. No account needed.
                  </p>
                </div>

                <div>
                  <label htmlFor="contact-name" className={LABEL_CLASS}>Full name</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Anand Kumar"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={FIELD_CLASS}
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-phone" className={LABEL_CLASS}>WhatsApp or phone</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={FIELD_CLASS}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className={LABEL_CLASS}>
                      Email <span className="font-normal text-[#555555]">(optional)</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="anand@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={FIELD_CLASS}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-interest" className={LABEL_CLASS}>Project of interest</label>
                  <select
                    id="contact-interest"
                    value={form.interest}
                    onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    className={`${FIELD_CLASS} cursor-pointer`}
                  >
                    <option value="Nisarga Boulevard - Devanahalli">Nisarga Boulevard, Devanahalli (open plots)</option>
                    <option value="Vinra Alora - Whitefield">Vinra Alora, Whitefield Extension (custom villas)</option>
                    <option value="Prestige City - Sarjapur">Prestige City, Sarjapur (apartments)</option>
                    <option value="Dubai Marina Waterfront">Dubai Marina Sunset Residences (Dubai)</option>
                    <option value="Vinra Interior Design Package">Vinra turnkey interiors</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className={LABEL_CLASS}>Anything specific?</label>
                  <textarea
                    id="contact-message"
                    rows="3"
                    placeholder="Budget, preferred configuration or timeline"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={FIELD_CLASS}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold flex w-full cursor-pointer items-center justify-center gap-2 py-4 text-sm"
                >
                  <Send className="h-4 w-4 text-[#0B1F3A]" aria-hidden="true" />
                  Send and open WhatsApp
                </button>

                <p className="flex items-center justify-center gap-2 text-sm text-[#555555]">
                  <ShieldCheck className="h-4 w-4 text-[#7A5C10]" aria-hidden="true" />
                  No spam calls. Channel partner advisory only.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
