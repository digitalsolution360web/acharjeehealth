'use client';

import { useState } from 'react';

const TEAL = '#0e9ab5';
const GREEN = '#3aaa35';
const DARK_NAVY = '#0b3b4a';

const faqs = [
  {
    q: 'What types of specialist doctors are available at Acharjee Health Clinic?',
    a: 'Acharjee Health Clinic hosts a wide range of specialist doctors including Gastroenterologists, ENT & Head-Neck Surgeons, Neurologists, Dermatologists, Cardiologists, Urologists, Gynaecologists, Paediatricians, Orthopaedic Surgeons, and more. Our doctors are associated with top hospitals across Kolkata and Hyderabad and visit the clinic regularly.',
  },
  {
    q: 'How can I book an appointment at Acharjee Health Clinic, Asansol?',
    a: 'Booking an appointment is simple! You can call us at 07364921002, fill in the quick enquiry form on our website, or walk in directly to our clinic at 256/2, SB Gorai Road, Ismile More, Asansol, West Bengal 713301. Our staff will assist you in scheduling a consultation with your preferred specialist.',
  },
  {
    q: 'What are the clinic timings and visiting hours?',
    a: 'Acharjee Health Clinic is open from 9:00 AM to 10:00 PM, Monday to Saturday. Individual specialist visiting schedules may vary. Please call us in advance to confirm the availability of your preferred doctor before visiting.',
  },
  {
    q: 'Do you offer lab tests and pharmacy services?',
    a: 'Yes! Acharjee Health Clinic is co-located with Acharjee Pharmacy, offering a comprehensive range of medicines and health products. We also facilitate lab test bookings for diagnostics. Our goal is to be your one-stop healthcare destination in Asansol.',
  },
  {
    q: 'Are the specialists visiting from Kolkata and Hyderabad experienced?',
    a: 'Absolutely. All visiting specialists at Acharjee Health Clinic are highly qualified and affiliated with premier institutions such as Fortis Hospital, Manipal Hospital, NRS Medical College, Malla Reddy Narayana Hospital, and more. They bring city-level expertise to the patients of Asansol, Durgapur, Dhanbad, and Jharkhand.',
  },
  {
    q: 'Is it safe to consult a specialist at a clinic rather than a hospital?',
    a: 'Yes, for OPD consultations, a well-equipped specialist clinic is perfectly appropriate and often more convenient and affordable than a hospital. Acharjee Health Clinic ensures a clean, hygienic, and patient-friendly environment. For surgical procedures or emergencies, we refer patients to the appropriate hospital facilities.',
  },
  {
    q: 'What is the fee for consultation at Acharjee Health Clinic?',
    a: 'Consultation fees vary by specialist. We aim to keep our fees affordable and transparent. Please contact us at 07364921002 for fee information regarding a specific doctor. We believe quality healthcare should be accessible to all.',
  },
  {
    q: 'Do you provide services for patients from Dhanbad, Durgapur, and Jharkhand?',
    a: 'Yes! We regularly serve patients from Asansol, Durgapur, Raniganj, Dhanbad, Jharkhand, Chittaranjan, Purulia, and surrounding areas. Our specialists are particularly popular among patients who want access to city-level expertise without traveling to Kolkata or Hyderabad.',
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section style={{ background: 'linear-gradient(180deg, #f0fafd 0%, #ffffff 100%)', padding: '80px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(16px, 4vw, 44px)' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <span style={{
            display: 'inline-block', fontSize: 11.5, fontWeight: 700,
            letterSpacing: '0.2em', color: TEAL, textTransform: 'uppercase', marginBottom: 14,
          }}>
            Got Questions?
          </span>
          <h2 style={{
            fontSize: 'clamp(22px, 2.5vw, 34px)', fontWeight: 800, color: DARK_NAVY,
            fontFamily: 'Poppins, sans-serif', margin: '0 0 14px', lineHeight: 1.25,
          }}>
            Frequently Asked <span style={{ color: TEAL }}>Questions</span>
          </h2>
          <p style={{ fontSize: 15, color: '#64748b', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
            Everything you need to know about Acharjee Health Clinic, our specialists, and how to book your appointment.
          </p>
          {/* Decorative underline */}
          <div style={{ width: 64, height: 4, background: `linear-gradient(90deg, ${TEAL}, ${GREEN})`, borderRadius: 4, margin: '20px auto 0' }} />
        </div>

        {/* FAQ Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                background: '#fff',
                borderRadius: 16,
                border: open === i ? `1.5px solid ${TEAL}44` : '1.5px solid #e8edf5',
                boxShadow: open === i ? `0 8px 32px rgba(14,154,181,0.12)` : '0 2px 10px rgba(0,0,0,0.05)',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}
            >
              {/* Question */}
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%', textAlign: 'left', padding: '20px 24px',
                  background: 'transparent', border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, flex: 1 }}>
                  {/* Number badge */}
                  <span style={{
                    width: 34, height: 34, borderRadius: '50%', flexShrink: 0,
                    background: open === i ? `linear-gradient(135deg, ${TEAL}, ${GREEN})` : '#f1f5f9',
                    color: open === i ? '#fff' : '#94a3b8',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 12, fontWeight: 800, transition: 'all 0.3s',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span style={{
                    fontSize: 15, fontWeight: 700,
                    color: open === i ? DARK_NAVY : '#374151',
                    lineHeight: 1.5, transition: 'color 0.2s',
                  }}>
                    {faq.q}
                  </span>
                </div>

                {/* Chevron */}
                <span style={{
                  width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
                  background: open === i ? `linear-gradient(135deg, ${TEAL}, ${GREEN})` : '#f1f5f9',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.3s',
                }}>
                  <svg
                    width="14" height="14" fill="none" stroke={open === i ? '#fff' : '#94a3b8'}
                    strokeWidth="2.5" viewBox="0 0 24 24"
                    style={{ transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              {/* Answer */}
              {open === i && (
                <div style={{
                  padding: '0 24px 22px 72px',
                  borderTop: `1px solid ${TEAL}22`,
                }}>
                  <p style={{
                    fontSize: 14.5, color: '#4b5563', lineHeight: 1.8,
                    margin: '14px 0 0', fontFamily: 'inherit',
                  }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: 52 }}>
          <p style={{ fontSize: 15, color: '#64748b', marginBottom: 20 }}>
            Still have questions? We're here to help!
          </p>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-enquiry-modal'))}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: `linear-gradient(135deg, ${TEAL}, ${GREEN})`,
              color: '#fff', border: 'none', borderRadius: 50,
              padding: '14px 36px', fontSize: 15, fontWeight: 700,
              cursor: 'pointer', fontFamily: 'Poppins, sans-serif',
              boxShadow: '0 8px 28px rgba(14,154,181,0.3)',
              letterSpacing: '0.02em', transition: 'all 0.3s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 14px 40px rgba(14,154,181,0.4)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(14,154,181,0.3)'; }}
          >
            📞 Ask Us Anything
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
