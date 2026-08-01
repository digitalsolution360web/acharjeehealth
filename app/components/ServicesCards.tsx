'use client';

import Link from 'next/link';

const TEAL = '#0e9ab5';
const GREEN = '#3aaa35';
const RED = '#e0142a';
const NAVY = '#1a2b4a';

const cards = [
  {
    id: 'consultation',
    number: '01',
    accentColor: TEAL,
    label: 'Instant Clinic',
    title: 'Consultation',
    desc: 'Connect within 60 seconds with our medical experts. Real-time consultations that prioritise your time and well-being.',
    href: '/services/consultations',
    badge: '60 sec',
    badgeLabel: 'Connect Time',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="20" fill={`${TEAL}14`} />
        <path d="M20 10a6 6 0 100 12 6 6 0 000-12z" stroke={TEAL} strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M10 30c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke={TEAL} strokeWidth="2" strokeLinecap="round" />
        <path d="M28 14h4M30 12v4" stroke={TEAL} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'medicines',
    number: '02',
    accentColor: GREEN,
    label: '24/7 Delivery',
    title: 'Medicines',
    desc: 'Essential medicines delivered to your doorstep anytime — especially during emergencies — fast and reliable.',
    href: '/services/pharmacy',
    badge: '24/7',
    badgeLabel: 'Available',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="20" fill={`${GREEN}14`} />
        <rect x="13" y="9" width="14" height="22" rx="3" stroke={GREEN} strokeWidth="2" fill="none" />
        <path d="M17 9V7a2 2 0 014 0v2" stroke={GREEN} strokeWidth="2" strokeLinecap="round" />
        <line x1="17" y1="18" x2="23" y2="18" stroke={GREEN} strokeWidth="2" strokeLinecap="round" />
        <line x1="20" y1="15" x2="20" y2="21" stroke={GREEN} strokeWidth="2" strokeLinecap="round" />
        <line x1="17" y1="25" x2="23" y2="25" stroke={GREEN} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'lab-tests',
    number: '03',
    accentColor: RED,
    label: 'Accurate Results',
    title: 'Lab Tests',
    desc: 'Home sample collection with 99.8% accuracy. Get precise diagnostic results from the comfort of your home.',
    href: '/services/diagnostics',
    badge: '99.8%',
    badgeLabel: 'Accuracy',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="20" fill={`${RED}14`} />
        <path d="M16 9h8M19 9v13l-8 8a4 4 0 004 4h10a4 4 0 004-4l-8-8V9" stroke={RED} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="18" cy="29" r="1.5" fill={RED} />
        <circle cx="23" cy="27" r="1" fill={RED} />
        <circle cx="15" cy="31" r="1" fill={RED} />
      </svg>
    ),
  },
];

export default function ServicesCards() {
  return (
    <section
      id="services-cards"
      style={{
        background: '#ffffff',
        padding: '48px 0',
        overflow: 'hidden',
        position: 'relative',
        borderTop: '1px solid #f0f2f8',
      }}
    >
      <div style={{ maxWidth: 1520, margin: '0 auto', padding: '0 clamp(16px, 4vw, 44px)', position: 'relative', zIndex: 1 }}>

        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            marginBottom: 14,
          }}>
            <div style={{ width: 32, height: 2, background: TEAL, borderRadius: 2 }} />
            <span style={{
              fontSize: 12, fontWeight: 800, letterSpacing: '0.2em', color: TEAL,
              textTransform: 'uppercase',
            }}>Our Core Services</span>
            <div style={{ width: 32, height: 2, background: TEAL, borderRadius: 2 }} />
          </div>
          <h2 style={{
            fontSize: 'clamp(20px, 2.4vw, 30px)',
            fontWeight: 600,
            color: '#000000',
            fontFamily: 'Poppins, sans-serif',
            letterSpacing: '-0.01em',
            lineHeight: 1.2,
            marginBottom: 14,
          }}>
            Comprehensive Healthcare,{' '}
            <span style={{ color: TEAL }}>Right at Your Door</span>
          </h2>
          <p style={{ fontSize: 15.5, color: '#374151', maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
            Expert healthcare services designed around you — fast, reliable, and delivered with compassion.
          </p>
        </div>

        {/* Cards grid */}
        <div
          id="services-grid"
          style={{

            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
          }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              id={`service-card-${card.id}`}
              style={{

                background: card.id === 'medicines'
                  ? '#b8edba'
                  : card.id === 'lab-tests'
                    ? '#fbbfc4'
                    : '#c2e8f5',
                borderRadius: 18,
                padding: '36px 30px',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: card.id === 'medicines'
                  ? '0 4px 24px rgba(58,170,53,0.22)'
                  : card.id === 'lab-tests'
                    ? '0 4px 24px rgba(224,20,42,0.22)'
                    : '0 4px 24px rgba(14,154,181,0.18)',
                border: card.id === 'medicines'
                  ? `2px solid ${GREEN}80`
                  : card.id === 'lab-tests'
                    ? `2px solid ${RED}80`
                    : `2px solid ${TEAL}60`,
                transition: 'transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(-8px)';
                el.style.boxShadow = `0 20px 50px rgba(0,0,0,0.10)`;
                el.style.borderColor = `${card.accentColor}50`;
                const topBar = el.querySelector('.srv-top-bar') as HTMLElement;
                if (topBar) topBar.style.transform = 'scaleX(1)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = '0 2px 20px rgba(0,0,0,0.06)';
                el.style.borderColor = '#eef0f8';
                const topBar = el.querySelector('.srv-top-bar') as HTMLElement;
                if (topBar) topBar.style.transform = 'scaleX(0)';
              }}
            >
              {/* Top accent bar */}
              <div className="srv-top-bar" style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 4,
                background: `linear-gradient(90deg, ${card.accentColor}, ${card.accentColor}88)`,
                transform: 'scaleX(0)', transformOrigin: 'left',
                transition: 'transform 0.3s ease',
                borderRadius: '18px 18px 0 0',
              }} />

              {/* Ghost number */}
              <div style={{
                position: 'absolute', right: 20, top: 14,
                fontSize: 68, fontWeight: 900,
                color: `${card.accentColor}0d`,
                fontFamily: 'Poppins, sans-serif',
                lineHeight: 1, userSelect: 'none',
                letterSpacing: '-0.04em',
              }}>{card.number}</div>

              {/* Icon + badge */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 22 }}>
                {card.icon}
                <div style={{
                  background: card.id === 'medicines'
                    ? `${GREEN}50`
                    : card.id === 'lab-tests'
                      ? `${RED}50`
                      : `${card.accentColor}35`,
                  border: card.id === 'medicines'
                    ? `2px solid ${GREEN}99`
                    : card.id === 'lab-tests'
                      ? `2px solid ${RED}99`
                      : `2px solid ${card.accentColor}70`,
                  borderRadius: 10, padding: '7px 12px',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: 17, fontWeight: 900, color: card.accentColor, fontFamily: 'Poppins, sans-serif', lineHeight: 1.1 }}>{card.badge}</div>
                  <div style={{ fontSize: 9, fontWeight: 700, color: card.accentColor, opacity: 0.75, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{card.badgeLabel}</div>
                </div>
              </div>

              {/* Label */}
              <span style={{
                display: 'inline-block', fontSize: 10.5, fontWeight: 800,
                letterSpacing: '0.16em', color: card.accentColor,
                textTransform: 'uppercase', marginBottom: 5,
              }}>{card.label}</span>

              {/* Title */}
              <h3 style={{
                fontSize: 22, fontWeight: 600, color: '#000000',
                fontFamily: 'Poppins, sans-serif',
                lineHeight: 1.1, marginBottom: 6,
                letterSpacing: '-0.01em',
              }}>{card.title}</h3>

              {/* Accent divider */}
              <div style={{
                width: 40, height: 3,
                background: card.accentColor,
                borderRadius: 3, marginBottom: 16,
              }} />

              {/* Description */}
              <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.75, marginBottom: 26, flexGrow: 1, minHeight: 75 }}>{card.desc}</p>

              {/* Learn More */}
              <Link
                href={card.href}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  color: card.accentColor, fontWeight: 800, fontSize: 13,
                  textDecoration: 'none', letterSpacing: '0.02em',
                  transition: 'gap 0.22s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.gap = '13px'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.gap = '8px'; }}
              >
                <span style={{
                  width: 28, height: 28, borderRadius: '50%',
                  background: `${card.accentColor}14`,
                  border: `1.5px solid ${card.accentColor}35`,
                  display: 'inline-flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: 13,
                }}>→</span>
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #services-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          #services-grid { grid-template-columns: 1fr !important; }
          #services-cards { padding: 48px 0 !important; }
        }
      `}</style>
    </section>
  );
}
