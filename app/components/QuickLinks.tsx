'use client';

import Link from 'next/link';

const TEAL = '#0e9ab5';
const RED = '#e0142a';
const GREEN = '#3aaa35';

const cards = [
  {
    id: 'visitor-information',
    title: 'VISITOR INFORMATION',
    desc: 'View all visitor guidelines, visiting hours, terms & conditions for a smooth and comfortable clinic visit.',
    href: '/visitor-information',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 52, height: 52 }}>
        <circle cx="24" cy="24" r="23" stroke={TEAL} strokeWidth="2" strokeDasharray="4 3" />
        <circle cx="24" cy="18" r="6" fill={TEAL} opacity=".15" stroke={TEAL} strokeWidth="2" />
        <path d="M13 36c0-6.075 4.925-11 11-11s11 4.925 11 11" stroke={TEAL} strokeWidth="2" strokeLinecap="round" />
        <path d="M28 23.5l2 1.5" stroke={GREEN} strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="32" cy="14" r="4" fill={GREEN} opacity=".2" stroke={GREEN} strokeWidth="1.5" />
        <path d="M30 14h4M32 12v4" stroke={GREEN} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    accentColor: TEAL,
  },
  {
    id: 'find-a-doctor',
    title: 'FIND A DOCTOR',
    desc: 'Search and schedule consultations with our experienced, specialist medical professionals.',
    href: '/doctors',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 52, height: 52 }}>
        <rect x="8" y="6" width="32" height="36" rx="4" fill={TEAL} opacity=".08" stroke={TEAL} strokeWidth="2" />
        <circle cx="24" cy="20" r="6" fill={TEAL} opacity=".15" stroke={TEAL} strokeWidth="2" />
        <path d="M14 36c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke={TEAL} strokeWidth="2" strokeLinecap="round" />
        <path d="M20 20h8M24 16v8" stroke={RED} strokeWidth="2" strokeLinecap="round" />
        <circle cx="34" cy="34" r="5" fill="white" stroke={RED} strokeWidth="2" />
        <path d="M37.5 37.5l3 3" stroke={RED} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    accentColor: RED,
  },
  {
    id: 'our-locations',
    title: 'OUR LOCATIONS',
    desc: 'Locate our clinic, pharmacy outlets, and get precise directions to visit us easily.',
    href: '/contact',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 52, height: 52 }}>
        <path d="M24 6C17.373 6 12 11.373 12 18c0 9 12 24 12 24s12-15 12-24c0-6.627-5.373-12-12-12z" fill={TEAL} opacity=".12" stroke={TEAL} strokeWidth="2" />
        <circle cx="24" cy="18" r="5" fill={TEAL} opacity=".25" stroke={TEAL} strokeWidth="2" />
        <path d="M10 42h28" stroke={GREEN} strokeWidth="2" strokeLinecap="round" />
        <path d="M17 42l-3-8M31 42l3-8" stroke={GREEN} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    accentColor: GREEN,
  },
  {
    id: 'connect-with-us',
    title: 'CONNECT WITH US',
    desc: 'Get in touch with our team for appointments, support, and emergency patient care inquiries.',
    href: '/contact',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 52, height: 52 }}>
        <rect x="6" y="10" width="36" height="26" rx="5" fill={TEAL} opacity=".1" stroke={TEAL} strokeWidth="2" />
        <path d="M6 15l18 12 18-12" stroke={TEAL} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="37" cy="11" r="5" fill={RED} />
        <path d="M35 11h4M37 9v4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    accentColor: TEAL,
  },
];

export default function QuickLinks() {
  return (
    <section id="quick-links" style={{ background: '#f7fafd', padding: '0 0 0 0', position: 'relative', overflow: 'hidden' }}>

      {/* Top accent bar */}
      <div style={{ height: 4, background: `linear-gradient(90deg, ${TEAL}, ${GREEN}, ${TEAL})` }} />

      <div style={{ maxWidth: 1520, margin: '0 auto', padding: '72px 44px' }}>

        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: 44 }} data-animate="fade-up">
          <span style={{
            display: 'inline-block', fontSize: 12, fontWeight: 700, letterSpacing: '0.18em',
            color: TEAL, textTransform: 'uppercase', marginBottom: 10,
            padding: '5px 18px', borderRadius: 20,
            background: 'rgba(14,154,181,0.1)', border: `1px solid rgba(14,154,181,0.25)`,
          }}>
            Quick Access
          </span>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, color: '#0d2d3a', margin: '8px 0 6px', letterSpacing: '-0.02em', fontFamily: 'Poppins, sans-serif' }}>
            Everything You Need, At Your Fingertips
          </h2>
          <p style={{ fontSize: 15, color: '#5a7a88', maxWidth: 500, margin: '0 auto', lineHeight: 1.6 }}>
            Navigate through our services with ease and find exactly what you are looking for.
          </p>
        </div>

        {/* Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }} id="quick-links-grid">
          {cards.map((card) => (
            <div
              key={card.id}
              id={`ql-card-${card.id}`}
              className="ql-card"
              data-animate="zoom-in"
              style={{
                background: '#ffffff',
                borderRadius: 16,
                padding: '36px 28px 28px',
                boxShadow: '0 4px 24px rgba(14,154,181,0.07)',
                border: '1.5px solid rgba(14,154,181,0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 16,
                transition: 'all 0.28s cubic-bezier(.25,.46,.45,.94), opacity 0.85s, transform 0.85s',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = 'translateY(-6px)';
                el.style.boxShadow = `0 16px 48px rgba(14,154,181,0.18)`;
                el.style.borderColor = card.accentColor;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = '0 4px 24px rgba(14,154,181,0.07)';
                el.style.borderColor = 'rgba(14,154,181,0.1)';
              }}
            >
              {/* Top color accent strip */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                background: `linear-gradient(90deg, ${card.accentColor}, ${card.accentColor}88)`,
              }} />

              {/* Icon */}
              <div style={{
                width: 72, height: 72, borderRadius: 16,
                background: `rgba(14,154,181,0.07)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                {card.icon}
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: 15, fontWeight: 800, color: '#0d2d3a',
                letterSpacing: '0.04em', lineHeight: 1.3,
                fontFamily: 'Poppins, sans-serif',
              }}>
                {card.title}
              </h3>

              {/* Divider */}
              <div style={{ width: 40, height: 2, background: card.accentColor, borderRadius: 2 }} />

              {/* Description */}
              <p style={{ fontSize: 14, color: '#5a7a88', lineHeight: 1.7, flexGrow: 1, margin: 0 }}>
                {card.desc}
              </p>

              {/* Learn More */}
              <Link
                href={card.href}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  fontSize: 13, fontWeight: 700, color: RED,
                  textDecoration: 'none', letterSpacing: '0.03em', marginTop: 4,
                  transition: 'gap 0.2s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.gap = '10px'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.gap = '6px'; }}
              >
                Learn More
                <svg width="14" height="14" fill="none" stroke={RED} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 1100px) {
          #quick-links-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          #quick-links-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
