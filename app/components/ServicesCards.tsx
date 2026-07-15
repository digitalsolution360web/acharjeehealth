'use client';

import Link from 'next/link';

const TEAL = '#0e9ab5';
const GREEN = '#3aaa35';
const RED = '#e0142a';

const cards = [
  {
    id: 'consultation',
    number: '01',
    color: TEAL,
    darkColor: '#076f84',
    label: 'Instant Clinic',
    title: 'Consultation',
    desc: 'Connect within 60 seconds with our medical experts at Acharjee Health Clinic.',
    href: '/services/consultations',
    badge: '60 sec',
    badgeLabel: 'Connect Time',
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="22" fill={TEAL} fillOpacity="0.12" />
        <path d="M22 13a5 5 0 100 10 5 5 0 000-10z" stroke={TEAL} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M13 31c0-4.418 4.03-8 9-8s9 3.582 9 8" stroke={TEAL} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="30" cy="20" r="3" fill={TEAL} fillOpacity="0.3" stroke={TEAL} strokeWidth="1.5" />
        <path d="M30 18v2.5l1.5 1" stroke={TEAL} strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'medicines',
    number: '02',
    color: GREEN,
    darkColor: '#1e7a1b',
    label: '24/7 Delivery',
    title: 'Medicines',
    desc: 'Essential medicines delivered to your doorstep anytime, especially in emergency situations.',
    href: '/services/pharmacy',
    badge: '24/7',
    badgeLabel: 'Available',
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="22" fill={GREEN} fillOpacity="0.12" />
        <rect x="14" y="11" width="16" height="22" rx="3" stroke={GREEN} strokeWidth="2" fill="none" />
        <path d="M18 11V9a2 2 0 014 0v2" stroke={GREEN} strokeWidth="2" strokeLinecap="round" />
        <line x1="19" y1="18" x2="25" y2="18" stroke={GREEN} strokeWidth="2" strokeLinecap="round" />
        <line x1="22" y1="15" x2="22" y2="21" stroke={GREEN} strokeWidth="2" strokeLinecap="round" />
        <line x1="19" y1="25" x2="25" y2="25" stroke={GREEN} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="19" y1="28" x2="23" y2="28" stroke={GREEN} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'lab-tests',
    number: '03',
    color: RED,
    darkColor: '#a30d1e',
    label: 'Accurate Results',
    title: 'Lab Tests',
    desc: 'Home sample collection with 99.8% accuracy in test results for your convenience.',
    href: '/services/diagnostics',
    badge: '99.8%',
    badgeLabel: 'Accuracy',
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="22" fill={RED} fillOpacity="0.12" />
        <path d="M18 10h8M21 10v12L13 30a4 4 0 004 4h10a4 4 0 004-4L23 22V10" stroke={RED} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="20" cy="30" r="1.5" fill={RED} />
        <circle cx="25" cy="28" r="1" fill={RED} />
        <circle cx="17" cy="32" r="1" fill={RED} />
      </svg>
    ),
  },
];

export default function ServicesCards() {
  return (
    <section
      id="services-cards"
      style={{
        background: 'linear-gradient(160deg, #f0f8fb 0%, #ffffff 50%, #f5fdf5 100%)',
        padding: '72px 0',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Decorative background shapes */}
      <div style={{
        position: 'absolute', top: -60, right: -60,
        width: 320, height: 320, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(14,154,181,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: -40, left: -40,
        width: 280, height: 280, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(58,170,53,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }}>

        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: 52 }} data-animate="fade-up">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <div style={{ width: 28, height: 2, background: `linear-gradient(90deg, transparent, ${TEAL})`, borderRadius: 2 }} />
            <span style={{
              fontSize: 11.5, fontWeight: 800, letterSpacing: '0.22em', color: TEAL,
              textTransform: 'uppercase',
            }}>Our Core Services</span>
            <div style={{ width: 28, height: 2, background: `linear-gradient(90deg, ${TEAL}, transparent)`, borderRadius: 2 }} />
          </div>
          <h2 style={{
            fontSize: 'clamp(26px, 3.2vw, 42px)', fontWeight: 800, color: '#0d2433',
            fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.025em',
            lineHeight: 1.15, marginBottom: 16,
          }}>
            Comprehensive Healthcare,{' '}
            <span style={{
              background: `linear-gradient(135deg, ${TEAL}, #0d8fa8)`,
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>Right at Your Door</span>
          </h2>
          <p style={{ fontSize: 15.5, color: '#6b8a9a', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            Expert healthcare services designed around you — fast, reliable, and delivered with compassion.
          </p>
        </div>

        {/* Cards grid */}
        <div
          id="services-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              id={`service-card-${card.id}`}
              data-animate="zoom-in"
              style={{
                background: '#fff',
                borderRadius: 24,
                padding: '36px 32px',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
                border: '1.5px solid rgba(0,0,0,0.06)',
                transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s, border-color 0.3s, opacity 0.85s, transform 0.85s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(-10px)';
                el.style.boxShadow = `0 24px 56px rgba(0,0,0,0.12)`;
                el.style.borderColor = `${card.color}40`;
                const topBar = el.querySelector('.card-top-bar') as HTMLElement;
                if (topBar) topBar.style.transform = 'scaleX(1)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = '0 4px 24px rgba(0,0,0,0.07)';
                el.style.borderColor = 'rgba(0,0,0,0.06)';
                const topBar = el.querySelector('.card-top-bar') as HTMLElement;
                if (topBar) topBar.style.transform = 'scaleX(0)';
              }}
            >
              {/* Top animated accent bar */}
              <div className="card-top-bar" style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 4,
                background: `linear-gradient(90deg, ${card.color}, ${card.darkColor})`,
                transform: 'scaleX(0)', transformOrigin: 'left',
                transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                borderRadius: '24px 24px 0 0',
              }} />

              {/* Large faint number */}
              <div style={{
                position: 'absolute', right: 24, top: 16,
                fontSize: 72, fontWeight: 900,
                color: `${card.color}0d`,
                fontFamily: 'Poppins, sans-serif',
                lineHeight: 1, userSelect: 'none',
                letterSpacing: '-0.04em',
              }}>{card.number}</div>

              {/* Icon + badge row */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 24 }}>
                {card.icon}
                <div style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  background: `linear-gradient(135deg, ${card.color}15, ${card.color}08)`,
                  border: `1.5px solid ${card.color}30`,
                  borderRadius: 12, padding: '8px 12px', textAlign: 'center',
                }}>
                  <span style={{
                    fontSize: 18, fontWeight: 900, color: card.color,
                    fontFamily: 'Poppins, sans-serif', lineHeight: 1.1,
                  }}>{card.badge}</span>
                  <span style={{ fontSize: 9.5, fontWeight: 700, color: card.color, opacity: 0.7, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{card.badgeLabel}</span>
                </div>
              </div>

              {/* Label */}
              <span style={{
                display: 'inline-block',
                fontSize: 11, fontWeight: 800, letterSpacing: '0.14em',
                color: card.color, textTransform: 'uppercase',
                marginBottom: 6,
              }}>{card.label}</span>

              {/* Title */}
              <h3 style={{
                fontSize: 28, fontWeight: 900, color: '#0d2433',
                fontFamily: 'Poppins, sans-serif',
                lineHeight: 1.1, marginBottom: 6,
                letterSpacing: '-0.025em',
              }}>{card.title}</h3>

              {/* Thin accent divider */}
              <div style={{
                width: 44, height: 3,
                background: `linear-gradient(90deg, ${card.color}, ${card.darkColor})`,
                borderRadius: 3, marginBottom: 16,
              }} />

              {/* Description */}
              <p style={{
                fontSize: 14.5, color: '#5a7280',
                lineHeight: 1.75, marginBottom: 28,
              }}>{card.desc}</p>

              {/* Learn More link */}
              <Link
                href={card.href}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  color: card.color, fontWeight: 800, fontSize: 13.5,
                  textDecoration: 'none',
                  letterSpacing: '0.02em',
                  transition: 'gap 0.22s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.gap = '14px'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.gap = '8px'; }}
              >
                <span style={{
                  width: 30, height: 30, borderRadius: '50%',
                  background: `${card.color}15`,
                  border: `1.5px solid ${card.color}40`,
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 14, transition: 'background 0.22s, border-color 0.22s',
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
        }
      `}</style>
    </section>
  );
}
