'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { usePlots } from '../context/PlotsContext';

const WHATSAPP = '918431909508';
const PHONE_DISPLAY = '+91 84319 09508';

const FIELD =
  'min-h-12 w-full bg-[#EFEEE8] px-4 text-[17px] text-[#1A1A1A] placeholder:text-[#5F5F5F] focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]';
const LABEL = 'mb-2 block text-[14px] text-[#4C4C4C]';

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

    const text = `Hi Setty Relators! Inquiry from website:\n\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Interested Project: ${form.interest}\n` +
      `Message: ${form.message || 'I want a price quote and site visit'}`;

    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank');
    showToast(`Inquiry sent. Opening WhatsApp chat with ${PHONE_DISPLAY}.`);
    setSubmitted(true);
  };

  const details = [
    {
      icon: MapPin,
      title: 'Desk',
      body: 'Level 5, Concorde Towers, UB City, Vittal Mallya Road and Indiranagar 100ft Road, Bengaluru 560001'
    },
    { icon: Phone, title: 'Advisory line', href: `tel:+${WHATSAPP}`, body: PHONE_DISPLAY },
    { icon: Mail, title: 'Email', href: 'mailto:advisory@settyrelators.com', body: 'advisory@settyrelators.com' },
    { icon: Clock, title: 'Site visits', body: 'Monday to Sunday, 9:00 am to 6:30 pm. Guided tours by appointment.' }
  ];

  return (
    <div>
      {/* ------------------------------------------------------------- head */}
      <section className="shell pt-10 lg:pt-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <p className="text-[14px] text-[#7A5C10]">Contact</p>
            <h1 className="mt-3 display-xl max-w-[16ch] text-[#0B1F3A]">
              Talk to a property advisor.
            </h1>
            <p className="mt-6 max-w-[52ch] text-[19px] leading-relaxed text-[var(--text-soft)]">
              Price lists, layout maps and site visit coordination, directly with the advisory team.
            </p>
          </div>

          <figure className="lg:col-span-5">
            <img
              src="/images/purva-sounds-of-water/purva-villas-community.jpeg"
              alt="Villa residences and landscaped gardens at a Bengaluru community we represent"
              width={1000}
              height={700}
              className="h-[240px] w-full object-cover sm:h-[320px]"
            />
            <figcaption className="plate-line">
              <span>Site visits are arranged and driven from the Bengaluru desk</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ------------------------------------------------------------ body */}
      <section className="page-section pt-12 lg:pt-16">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* details */}
          <div className="lg:col-span-4">
            <h2 className="display-md text-[#0B1F3A]">The desk</h2>
            <dl className="mt-8 space-y-7">
              {details.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <item.icon className="mt-1 h-4 w-4 shrink-0 text-[#7A5C10]" aria-hidden="true" />
                  <div className="min-w-0">
                    <dt className="text-[14px] text-[var(--text-soft)]">{item.title}</dt>
                    <dd className="mt-1 text-[17px] leading-relaxed text-[#1A1A1A] break-words">
                      {item.href ? (
                        <a
                          href={item.href}
                          className="underline decoration-[#C8A34D] decoration-2 underline-offset-4 hover:text-[#7A5C10]"
                        >
                          {item.body}
                        </a>
                      ) : (
                        item.body
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>

            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hi! I want to chat with a property advisor about Bengaluru and Dubai listings.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-9 w-full sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Chat on WhatsApp
            </a>

            <p className="mt-8 max-w-[38ch] text-[15px] leading-relaxed text-[var(--text-soft)]">
              Zero brokerage to buyers. Booking agreements and payments are executed directly
              between you and the developer.
            </p>
          </div>

          {/* form */}
          <div className="lg:col-span-8">
            <div className="bg-white px-6 py-8 sm:px-10 sm:py-10">
              {submitted ? (
                <div className="py-10">
                  <CheckCircle2 className="h-7 w-7 text-[#7A5C10]" aria-hidden="true" />
                  <h2 className="mt-5 display-md text-[#0B1F3A]">Inquiry sent</h2>
                  <p className="mt-3 max-w-[48ch] text-[17px] leading-relaxed text-[var(--text-soft)]">
                    A WhatsApp conversation with {PHONE_DISPLAY} is open. The advisory team will
                    reply there.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="btn-quiet mt-7"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  <div>
                    <h2 className="display-md text-[#0B1F3A]">Send an inquiry</h2>
                    <p className="mt-3 max-w-[52ch] text-[17px] leading-relaxed text-[var(--text-soft)]">
                      Your details open a direct WhatsApp chat. No account needed.
                    </p>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className={LABEL}>Full name</label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Anand Kumar"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={FIELD}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className={LABEL}>WhatsApp or phone</label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="98765 43210"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className={FIELD}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-email" className={LABEL}>
                      Email <span className="text-[var(--text-soft)]">(optional)</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      autoComplete="email"
                      placeholder="anand@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={FIELD}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-interest" className={LABEL}>Project of interest</label>
                    <select
                      id="contact-interest"
                      value={form.interest}
                      onChange={(e) => setForm({ ...form, interest: e.target.value })}
                      className={`${FIELD} cursor-pointer`}
                    >
                      <option value="Nisarga Boulevard - Devanahalli">Nisarga Boulevard, Devanahalli (open plots)</option>
                      <option value="Vinra Alora - Whitefield">Vinra Alora, Whitefield Extension (custom villas)</option>
                      <option value="Prestige City - Sarjapur">Prestige City, Sarjapur (apartments)</option>
                      <option value="Dubai Marina Waterfront">Dubai Marina Sunset Residences (Dubai)</option>
                      <option value="Vinra Interior Design Package">Vinra turnkey interiors</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className={LABEL}>Anything specific?</label>
                    <textarea
                      id="contact-message"
                      rows="3"
                      placeholder="Budget, preferred configuration or timeline"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={FIELD}
                    />
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <button type="submit" className="btn-gold">
                      <Send className="h-4 w-4" aria-hidden="true" />
                      Send and open WhatsApp
                    </button>
                    <p className="text-[14px] text-[var(--text-soft)]">
                      No spam calls. Channel partner advisory only.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
