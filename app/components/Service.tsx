'use client';

import React from 'react';

const TEAL = '#0e9ab5';
const DARK_NAVY = '#0b3b4a';

const services = [
  {
    title: 'Gastroenterologist',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <path d="M8 4c0 0-2 3-2 6s2 4 2 7" stroke={TEAL} strokeWidth="1.7" strokeLinecap="round" />
        <path d="M12 4c0 0 2 2 2 5s-3 4-3 7s2 3 4 4" stroke={TEAL} strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="16" cy="8" r="2.5" stroke={TEAL} strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'ENT & Head Neck Surgeon',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <path d="M12 3c-3 0-5 2-5 5 0 2 1 4 3 5v2h4v-2c2-1 3-3 3-5 0-3-2-5-5-5z" stroke={TEAL} strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10.5 18.5L10 21M13.5 18.5L14 21" stroke={TEAL} strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Neurologist',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="9" rx="5" ry="5.5" stroke={TEAL} strokeWidth="1.5" />
        <path d="M9 9c0-1.5 1-3 3-3" stroke={TEAL} strokeWidth="1.4" strokeLinecap="round" />
        <path d="M12 14.5v5" stroke={TEAL} strokeWidth="1.7" strokeLinecap="round" />
        <path d="M9 19.5h6" stroke={TEAL} strokeWidth="1.7" strokeLinecap="round" />
        <path d="M7 9c-2 0.5-3 2-3 4" stroke={TEAL} strokeWidth="1.4" strokeLinecap="round" />
        <path d="M17 9c2 0.5 3 2 3 4" stroke={TEAL} strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Consultant Dermatologist',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="6" width="16" height="13" rx="3" stroke={TEAL} strokeWidth="1.5" />
        <circle cx="8.5" cy="11" r="1.3" fill={TEAL} />
        <circle cx="12" cy="9.5" r="1" fill={TEAL} />
        <circle cx="15.5" cy="12" r="1.3" fill={TEAL} />
        <circle cx="10" cy="14" r="1" fill={TEAL} />
        <circle cx="14" cy="14.5" r="1" fill={TEAL} />
        <path d="M12 4v2" stroke={TEAL} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Urologist',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <path d="M9 4c-3 2-4 5-3 8 0.5 2 2 3 2 5v2h6v-2c0-2 1.5-3 2-5 1-3 0-6-3-8" stroke={TEAL} strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 19h6" stroke={TEAL} strokeWidth="1.5" strokeLinecap="round" />
        <ellipse cx="12" cy="9" rx="2" ry="3" stroke={TEAL} strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    title: 'Cardiologist',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <path d="M12 20s-8-5.5-8-11a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 5.5-8 11-8 11z" stroke={TEAL} strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M5 12h3l2-3 2 6 2-3h5" stroke={TEAL} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Gynaecologist & Obstetrician',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="7" r="3.5" stroke={TEAL} strokeWidth="1.5" />
        <path d="M12 10.5v5" stroke={TEAL} strokeWidth="1.7" strokeLinecap="round" />
        <path d="M9 13.5h6" stroke={TEAL} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 15.5l-2 4M14 15.5l2 4" stroke={TEAL} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Child Specialist (Pediatrician)',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="6.5" r="3" stroke={TEAL} strokeWidth="1.5" />
        <path d="M7 14c0-2.8 2-5 5-5s5 2.2 5 5" stroke={TEAL} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 20v-4M15 20v-4" stroke={TEAL} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 18h6" stroke={TEAL} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Service() {
  return (
    <section
      id="services-section"
      style={{
        background: '#ffffff',
        padding: 'clamp(32px, 5vw, 56px) 0',
        borderTop: '1px solid #e2eff4',
      }}
    >
      {/* Container aligned with Navbar width (maxWidth: 1520, padding: 0 44px) */}
      <div style={{ maxWidth: 1520, margin: '0 auto', padding: '0 clamp(16px, 4vw, 44px)' }}>
        <div
          id="services-layout"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 480px',
            gap: 48,
            alignItems: 'center',
          }}
        >
          {/* LEFT: heading + service tiles */}
          <div>
            {/* Heading with teal underline */}
            <div style={{ marginBottom: 28 }}>
              <h2
                style={{
                  margin: 0,
                  fontSize: 'clamp(22px, 2.4vw, 28px)',
                  color: DARK_NAVY,
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  display: 'inline-block',
                  paddingBottom: 8,
                  borderBottom: `3px solid ${TEAL}`,
                  letterSpacing: '-0.3px',
                }}
              >
                Explore our &amp; Department
              </h2>
            </div>

            {/* 2-column grid of service tiles */}
            <div
              id="services-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 14,
              }}
            >
              {services.map((s) => (
                <div
                  key={s.title}
                  className="service-tile"
                  style={{
                    borderRadius: 12,
                    padding: '16px 20px',
                    minHeight: 76,
                    display: 'flex',
                    gap: 14,
                    alignItems: 'center',
                    cursor: 'pointer',
                    background: '#f0f9fc',
                    border: '1.5px solid #d6eef4',
                  }}
                >
                  {/* Icon box */}
                  <div
                    className="service-tile-icon"
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 10,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: '#ffffff',
                      border: '1px solid #cde8f0',
                      flexShrink: 0,
                    }}
                  >
                    {s.icon}
                  </div>
                  {/* Label */}
                  <div
                    className="service-tile-label"
                    style={{
                      fontSize: 'clamp(14px, 1.2vw, 16px)',
                      fontWeight: 600,
                      color: DARK_NAVY,
                      fontFamily: 'Poppins, sans-serif',
                      lineHeight: 1.3,
                    }}
                  >
                    {s.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: 1.png image */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="/1.png"
              alt="Acharjee Health Clinic & Pharmacy"
              style={{
                width: '100%',
                maxWidth: 480,
                display: 'block',
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        .service-tile {
          transition: background 200ms ease, transform 180ms ease, border-color 200ms ease;
        }
        .service-tile:hover {
          background: ${DARK_NAVY} !important;
          border-color: ${DARK_NAVY} !important;
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(11,59,74,0.18);
        }
        .service-tile:hover .service-tile-label {
          color: #ffffff !important;
        }
        .service-tile:hover .service-tile-icon {
          background: rgba(255,255,255,0.12) !important;
          border-color: rgba(255,255,255,0.15) !important;
        }
        .service-tile:hover .service-tile-icon svg path,
        .service-tile:hover .service-tile-icon svg circle,
        .service-tile:hover .service-tile-icon svg ellipse,
        .service-tile:hover .service-tile-icon svg rect {
          stroke: #ffffff !important;
          fill: transparent !important;
        }
        @media (max-width: 1024px) {
          #services-layout {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          #services-layout > div:last-child {
            max-width: 480px;
            margin: 0 auto;
          }
        }
        @media (max-width: 640px) {
          #services-grid {
            grid-template-columns: 1fr !important;
          }
          #services-section {
            padding: 32px 0 !important;
          }
        }
        @media (max-width: 400px) {
          .service-tile {
            padding: 12px 14px !important;
          }
        }
      `}</style>
    </section>
  );
}
