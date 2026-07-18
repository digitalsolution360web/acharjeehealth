'use client';

import Link from 'next/link';

const TEAL = '#0e9ab5';
const RED = '#e0142a';
const GREEN = '#3aaa35';
const NAVY = '#1a2b4a';

const cards = [
  {
    id: 'visitor-information',
    title: 'Visitor Information',
    desc: 'View all visitor guidelines, visiting hours, terms & conditions for a smooth and comfortable clinic visit.',
    href: '/visitor-information',
    accentColor: TEAL,
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="12" r="5" stroke={TEAL} strokeWidth="2" />
        <path d="M6 28c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke={TEAL} strokeWidth="2" strokeLinecap="round" />
        <path d="M22 8h4M24 6v4" stroke={TEAL} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'find-a-doctor',
    title: 'Find a Doctor',
    desc: 'Search and schedule consultations with our experienced, specialist medical professionals.',
    href: '/doctors',
    accentColor: RED,
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="2" width="24" height="28" rx="4" stroke={RED} strokeWidth="2" fill="none" />
        <circle cx="16" cy="14" r="5" stroke={RED} strokeWidth="2" fill="none" />
        <path d="M8 26c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke={RED} strokeWidth="2" strokeLinecap="round" />
        <circle cx="26" cy="26" r="4" fill="white" stroke={RED} strokeWidth="2" />
        <path d="M28.5 28.5l2.5 2.5" stroke={RED} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'our-locations',
    title: 'Our Locations',
    desc: 'Locate our clinic, pharmacy outlets, and get precise directions to visit us easily.',
    href: '/contact',
    accentColor: GREEN,
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 3C10.477 3 6 7.477 6 13c0 7 10 18 10 18S26 20 26 13C26 7.477 21.523 3 16 3z" stroke={GREEN} strokeWidth="2" fill={`${GREEN}14`} />
        <circle cx="16" cy="13" r="4" stroke={GREEN} strokeWidth="2" fill={`${GREEN}20`} />
        <path d="M6 30h20" stroke={GREEN} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'connect-with-us',
    title: 'Connect With Us',
    desc: 'Get in touch with our team for appointments, support, and emergency patient care inquiries.',
    href: '/contact',
    accentColor: TEAL,
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="2" y="6" width="28" height="20" rx="4" stroke={TEAL} strokeWidth="2" fill={`${TEAL}10`} />
        <path d="M2 10l14 9 14-9" stroke={TEAL} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="26" cy="8" r="4" fill={RED} />
        <path d="M24.5 8h3M26 6.5v3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function QuickLinks() {
  return (
    <section
      id="quick-links"
      style={{ background: '#ffffff', padding: '80px 0', position: 'relative', overflow: 'hidden', borderTop: '1px solid #f0f2f8' }}
    >
      <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 clamp(16px, 4vw, 40px)' }}>

        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <span style={{
            display: 'inline-block', fontSize: 11.5, fontWeight: 700,
            letterSpacing: '0.2em', color: TEAL, textTransform: 'uppercase',
            marginBottom: 12, padding: '5px 18px', borderRadius: 20,
            background: `${TEAL}12`, border: `1px solid ${TEAL}30`,
          }}>
            Quick Access
          </span>
          <h2 style={{
            fontSize: 'clamp(20px, 2.4vw, 30px)',
            fontWeight: 600, color: '#000000',
            margin: '10px 0 10px',
            letterSpacing: '-0.01em',
            fontFamily: 'Poppins, sans-serif',
          }}>
            Everything You Need, At Your Fingertips
          </h2>
          <p style={{ fontSize: 15, color: '#374151', maxWidth: 480, margin: '0 auto', lineHeight: 1.65 }}>
            Navigate through our services with ease and find exactly what you are looking for.
          </p>
        </div>

        {/* Cards */}
        <div
          id="quick-links-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 22 }}
        >
          {cards.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              id={`ql-card-${card.id}`}
              style={{
                background: '#ffffff',
                borderRadius: 14,
                padding: '32px 26px',
                boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                border: '1.5px solid #eef0f8',
                borderLeft: `4px solid ${card.accentColor}`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 14,
                textDecoration: 'none',
                transition: 'all 0.24s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(-5px)';
                el.style.boxShadow = `0 14px 42px rgba(0,0,0,0.10)`;
                el.style.background = `${card.accentColor}06`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = '0 2px 16px rgba(0,0,0,0.05)';
                el.style.background = '#ffffff';
              }}
            >
              {/* Icon circle */}
              <div style={{
                width: 60, height: 60, borderRadius: 14,
                background: `${card.accentColor}10`,
                border: `1.5px solid ${card.accentColor}25`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                {card.icon}
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: 14.5, fontWeight: 600, color: '#000000',
                letterSpacing: '-0.005em', lineHeight: 1.3,
                fontFamily: 'Poppins, sans-serif',
                margin: 0,
              }}>
                {card.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: 13.5, color: '#475569', lineHeight: 1.7,
                flexGrow: 1, margin: 0,
              }}>
                {card.desc}
              </p>

              {/* Arrow link */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                fontSize: 12.5, fontWeight: 700, color: card.accentColor,
                letterSpacing: '0.04em',
                marginTop: 4,
              }}>
                Learn More
                <svg width="14" height="14" fill="none" stroke={card.accentColor} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>

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
