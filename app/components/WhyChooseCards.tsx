'use client';

import Link from 'next/link';

const TEAL = '#0e9ab5';
const NAVY = '#1a2b4a';
const INDIGO = '#4f46e5';

const cards = [
  {
    id: 'better-care',
    title: 'Not Just Better Care, But a Better Experience',
    desc: 'At Acharjee Health Clinic, we prioritize not only your health but also your experience. Our team is dedicated to providing exceptional medical care in a comfortable and supportive environment, making your journey to wellness smoother.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M18 6a8 8 0 100 16A8 8 0 0018 6z" stroke={INDIGO} strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M7 32c0-6.075 4.925-11 11-11s11 4.925 11 11" stroke={INDIGO} strokeWidth="2" strokeLinecap="round" />
        <path d="M14 14l3 3 5-5" stroke={TEAL} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'community-care',
    title: 'Serving Our Community with Exemplary Care',
    desc: 'At Acharjee Health Clinic, we are committed to offering high-quality healthcare services to all. Our compassionate team ensures that every patient receives personalized care, focusing on both treatment and experience.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="12" cy="13" r="5" stroke={INDIGO} strokeWidth="2" fill="none" />
        <circle cx="24" cy="13" r="5" stroke={TEAL} strokeWidth="2" fill="none" />
        <path d="M4 30c0-4.418 3.582-8 8-8" stroke={INDIGO} strokeWidth="2" strokeLinecap="round" />
        <path d="M24 22c4.418 0 8 3.582 8 8" stroke={TEAL} strokeWidth="2" strokeLinecap="round" />
        <path d="M12 22c3.314 0 6 2.686 6 6H18c0-3.314 2.686-6 6-6" stroke={INDIGO} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'specialty-medicine',
    title: 'Specialty Medicine Delivered with Compassion',
    desc: 'At Acharjee Health Clinic, we offer specialized medical services provided by a team of expert doctors who are dedicated to delivering care with compassion and understanding. Your health and comfort are our top priorities.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="10" y="6" width="16" height="24" rx="3" stroke={INDIGO} strokeWidth="2" fill="none" />
        <path d="M14 6V4a2 2 0 014 0v2" stroke={INDIGO} strokeWidth="2" strokeLinecap="round" />
        <line x1="15" y1="15" x2="21" y2="15" stroke={TEAL} strokeWidth="2" strokeLinecap="round" />
        <line x1="18" y1="12" x2="18" y2="18" stroke={TEAL} strokeWidth="2" strokeLinecap="round" />
        <line x1="15" y1="22" x2="21" y2="22" stroke={INDIGO} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="15" y1="26" x2="19" y2="26" stroke={INDIGO} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function WhyChooseCards() {
  return (
    <section
      id="why-choose-cards"
      style={{ background: '#ffffff', padding: '48px 0', overflow: 'hidden' }}
    >
      <div style={{ maxWidth: 1520, margin: '0 auto', padding: '0 clamp(16px, 4vw, 44px)' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <h2 style={{
            fontSize: 'clamp(20px, 2.4vw, 30px)',
            fontWeight: 600,
            color: '#000000',
            fontFamily: 'Poppins, sans-serif',
            letterSpacing: '-0.01em',
            marginBottom: 12,
          }}>
            Why Choose Us
          </h2>
          <p style={{ fontSize: 16, color: '#374151', maxWidth: 480, margin: '0 auto', lineHeight: 1.6 }}>
            We Are Committed to Protecting Your Health — Acharjee Health Clinic
          </p>
        </div>

        {/* Grid — 3 cols top row, 2 cards + 1 CTA bottom row */}
        <div
          id="why-cards-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
          }}
        >
          {cards.map((card, i) => (
            <div
              key={card.id}
              id={`wc-card-${card.id}`}
              style={{
                background: '#e8f4f9',
                borderRadius: 14,
                padding: '30px 28px',
                border: '1.5px solid #cce5ef',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                gap: 20,
                transition: 'all 0.25s ease',
                cursor: 'default',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${INDIGO}40`;
                e.currentTarget.style.boxShadow = `0 8px 32px rgba(79,70,229,0.12)`;
                e.currentTarget.style.background = '#fff';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e8ecf8';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.background = '#e8f4f9';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Icon Box */}
              <div style={{
                width: 60,
                height: 60,
                borderRadius: 12,
                background: '#d0eaf3',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                {card.icon}
              </div>

              {/* Text */}
              <div>
                <h3 style={{
                  fontSize: 14.5,
                  fontWeight: 600,
                  color: '#000000',
                  marginBottom: 6,
                  lineHeight: 1.3,
                  fontFamily: 'Poppins, sans-serif',
                }}>
                  {card.title}
                </h3>
                <p style={{
                  fontSize: 13.5,
                  color: '#475569',
                  lineHeight: 1.65,
                  margin: 0,
                }}>
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Centered CTA Button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 44 }}>
          <Link
            href="/appointment"
            id="wc-cta-card"
            style={{
              background: NAVY,
              borderRadius: 10,
              padding: '16px 40px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 12,
              textDecoration: 'none',
              transition: 'all 0.25s ease',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(26,43,74,0.15)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = '#263a5e';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 30px rgba(26,43,74,0.25)`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = NAVY;
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(26,43,74,0.15)';
            }}
          >
            <span style={{
              fontSize: 16,
              fontWeight: 800,
              color: '#ffffff',
              fontFamily: 'Poppins, sans-serif',
              letterSpacing: '0.02em',
            }}>
              Book Your Consultation
            </span>
            <svg width="18" height="18" fill="none" stroke="#ffffff" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 1024px) {
          #why-cards-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          #why-cards-grid { grid-template-columns: 1fr !important; }
          #why-choose-cards { padding: 48px 0 !important; }
        }
      `}</style>
    </section>
  );
}
