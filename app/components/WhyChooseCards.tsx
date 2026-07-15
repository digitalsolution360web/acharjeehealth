'use client';

import Image from 'next/image';
import Link from 'next/link';

const TEAL = '#0e9ab5';
const RED = '#e0142a';
const GREEN = '#3aaa35';

const cards = [
  {
    id: 'better-care',
    image: '/1.jpeg',
    alt: 'Better Care Environment',
    title: 'Not Just Better Care, But a Better Experience',
    desc: 'At Acharjee Health Clinic, we prioritize not only your health but also your experience. Our team is dedicated to providing exceptional medical care in a comfortable and supportive environment, making your journey to wellness smoother.',
    href: '/about',
    accent: TEAL,
  },
  {
    id: 'community-care',
    image: '/4.jpg',
    alt: 'Community Healthcare',
    title: 'Serving Our Community with Exemplary Care',
    desc: 'At Acharjee Health Clinic, we are committed to offering high-quality healthcare services to all. Our compassionate team ensures that every patient receives personalized care, focusing on both treatment and experience.',
    href: '/about',
    accent: GREEN,
  },
  {
    id: 'specialty-medicine',
    image: '/2.jpg',
    alt: 'Specialty Medicine',
    title: 'Specialty Medicine Delivered with Compassion',
    desc: 'At Acharjee Health Clinic, we offer specialized medical services provided by a team of expert doctors who are dedicated to delivering care with compassion and understanding. Your health and comfort are our top priorities.',
    href: '/services',
    accent: RED,
  },
];

export default function WhyChooseCards() {
  return (
    <section
      id="why-choose-cards"
      style={{ background: '#fff', padding: '72px 0', overflow: 'hidden', position: 'relative' }}
    >
      {/* Subtle bg pattern */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.025,
        backgroundImage: 'radial-gradient(circle, #0e9ab5 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1520, margin: '0 auto', padding: '0 44px', position: 'relative', zIndex: 1 }}>

        {/* ── Header ── */}
        <div style={{ textAlign: 'center', marginBottom: 44 }} data-animate="fade-up">
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 12,
            fontWeight: 700, letterSpacing: '0.2em', color: TEAL,
            textTransform: 'uppercase', marginBottom: 12,
          }}>
            <span style={{ width: 32, height: 2, background: TEAL, display: 'inline-block', borderRadius: 2 }} />
            WHY CHOOSE
            <span style={{ width: 32, height: 2, background: TEAL, display: 'inline-block', borderRadius: 2 }} />
          </span>

          <h2 style={{
            fontSize: 'clamp(24px, 3vw, 38px)',
            fontWeight: 800, color: '#0d2433',
            fontFamily: 'Poppins, sans-serif',
            letterSpacing: '-0.02em', lineHeight: 1.2,
            marginBottom: 12,
          }}>
            Acharjee Health Clinic
          </h2>
          <p style={{
            fontSize: 17, color: '#4a7280', fontWeight: 500,
            letterSpacing: '0.01em',
          }}>
            We Are Committed to Protecting Your Health
          </p>

          {/* Underline accent */}
          <div style={{
            display: 'flex', justifyContent: 'center', marginTop: 18, gap: 6,
          }}>
            <div style={{ width: 48, height: 3, background: TEAL, borderRadius: 2 }} />
            <div style={{ width: 12, height: 3, background: GREEN, borderRadius: 2 }} />
            <div style={{ width: 6, height: 3, background: RED, borderRadius: 2 }} />
          </div>
        </div>

        {/* ── Cards Grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 28,
        }} id="why-cards-grid">
          {cards.map((card) => (
            <div
              key={card.id}
              id={`wc-card-${card.id}`}
              className="wc-card"
              data-animate="zoom-in"
              style={{
                background: '#fff',
                borderRadius: 18,
                overflow: 'hidden',
                boxShadow: '0 4px 28px rgba(0,0,0,0.07)',
                border: '1.5px solid #eef2f6',
                display: 'flex', flexDirection: 'column',
                transition: 'all 0.3s cubic-bezier(.25,.46,.45,.94), opacity 0.85s, transform 0.85s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = 'translateY(-8px)';
                el.style.boxShadow = `0 20px 56px rgba(14,154,181,0.16)`;
                el.style.borderColor = card.accent;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = '0 4px 28px rgba(0,0,0,0.07)';
                el.style.borderColor = '#eef2f6';
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', height: 220, overflow: 'hidden', flexShrink: 0 }}>
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ transition: 'transform 0.4s ease' }}
                />
                {/* Gradient overlay bottom */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.45), transparent)',
                }} />
                {/* Number badge */}
                <div style={{
                  position: 'absolute', top: 16, left: 16,
                  width: 36, height: 36, borderRadius: '50%',
                  background: card.accent,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontWeight: 800, fontSize: 14, fontFamily: 'Poppins, sans-serif',
                  boxShadow: `0 4px 12px ${card.accent}66`,
                }}>
                  0{cards.indexOf(card) + 1}
                </div>
              </div>

              {/* Content */}
              <div style={{
                padding: '28px 28px 24px',
                display: 'flex', flexDirection: 'column', flexGrow: 1,
              }}>
                {/* Accent bar */}
                <div style={{ width: 36, height: 3, background: card.accent, borderRadius: 2, marginBottom: 16 }} />

                <h3 style={{
                  fontSize: 17, fontWeight: 800, color: '#0d2433',
                  fontFamily: 'Poppins, sans-serif', lineHeight: 1.35,
                  marginBottom: 14, letterSpacing: '-0.01em',
                }}>
                  {card.title}
                </h3>

                <p style={{
                  fontSize: 13.5, color: '#5a7280', lineHeight: 1.75,
                  flexGrow: 1, marginBottom: 22,
                }}>
                  {card.desc}
                </p>

                <Link
                  href={card.href}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    fontSize: 13, fontWeight: 700, color: card.accent,
                    textDecoration: 'none', letterSpacing: '0.03em',
                    paddingBottom: 2,
                    borderBottom: `2px solid ${card.accent}33`,
                    transition: 'all 0.2s', alignSelf: 'flex-start',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.gap = '12px';
                    (e.currentTarget as HTMLElement).style.borderBottomColor = card.accent;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.gap = '8px';
                    (e.currentTarget as HTMLElement).style.borderBottomColor = `${card.accent}33`;
                  }}
                >
                  Learn More
                  <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 1024px) {
          #why-cards-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          #why-cards-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
