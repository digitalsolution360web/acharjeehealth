'use client';

import React from 'react';

const GREEN_THEME = '#15945D';
const DARK_NAVY = '#0b3b4a';

const departments = [
  { title: 'Gastroenterologist' },
  { title: 'ENT & Head Neck Surgeon' },
  { title: 'Neurologist' },
  { title: 'Consultant Dermatologist' },
  { title: 'Urologist' },
  { title: 'Cardiologist' },
  { title: 'Gynaecologist & Obstetrician' },
  { title: 'Child Specialist (Pediatrician)' },
  { title: 'Paediatrics' },
];

export default function Service() {
  return (
    <section
      id="services-section"
      style={{
        background: '#f8fafb',
        padding: 'clamp(32px, 5vw, 56px) 0',
        borderTop: '1px solid #e2eff4',
      }}
    >
      <div style={{ maxWidth: 1520, margin: '0 auto', padding: '0 clamp(16px, 4vw, 44px)' }}>
        <div
          id="services-layout"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 440px',
            gap: 40,
            alignItems: 'center',
          }}
        >
          {/* LEFT: heading + department cards (exact screenshot design) */}
          <div>
            <div style={{ marginBottom: 24 }}>
              <h2
                style={{
                  margin: 0,
                  fontSize: 'clamp(22px, 2.4vw, 28px)',
                  color: DARK_NAVY,
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  display: 'inline-block',
                  paddingBottom: 8,
                  borderBottom: `3px solid ${GREEN_THEME}`,
                  letterSpacing: '-0.3px',
                }}
              >
                Explore Our Department
              </h2>
            </div>

            {/* 3-column grid of department cards with green left border */}
            <div
              id="services-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 16,
              }}
            >
              {departments.map((d) => (
                <div
                  key={d.title}
                  className="dept-tile"
                  style={{
                    borderRadius: 12,
                    padding: '26px 25px',
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderLeft: `4px solid ${GREEN_THEME}`,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: '#0f172a',
                      fontFamily: "'Poppins', sans-serif",
                      lineHeight: 1.3,
                      marginBottom: 4,
                    }}
                  >
                    {d.title}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: '#64748b',
                      fontWeight: 500,
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >

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
                maxWidth: 440,
                display: 'block',
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        .dept-tile:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(21,148,93,0.15) !important;
          border-color: ${GREEN_THEME} !important;
          border-left: 4px solid ${GREEN_THEME} !important;
        }
        @media (max-width: 1100px) {
          #services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 900px) {
          #services-layout {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          #services-layout > div:last-child {
            max-width: 440px;
            margin: 0 auto;
          }
        }
        @media (max-width: 550px) {
          #services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
