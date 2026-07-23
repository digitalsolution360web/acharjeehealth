'use client';

import { useState } from 'react';
import EnquiryModal from './EnquiryModal';

const TEAL = '#0e9ab5';
const DARK_TEAL = '#0b7d94';

const quickIcons = [
  {
    id: 'video-consultation',
    label: 'Instant Video\nConsultation',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
        <rect x="2" y="6" width="14" height="12" rx="2.5" stroke={TEAL} strokeWidth="1.8" />
        <path d="M16 10.5l6-3.5v10l-6-3.5" stroke={TEAL} strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'find-doctor',
    label: 'Find a\nDoctor',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
        <circle cx="10" cy="8" r="4" stroke={TEAL} strokeWidth="1.8" />
        <path d="M3 20v-1a7 7 0 0114 0v1" stroke={TEAL} strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="19.5" cy="18.5" r="3" stroke={TEAL} strokeWidth="1.8" />
        <path d="M22 21l1.5 1.5" stroke={TEAL} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'surgeries',
    label: 'Surgeries',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
        <path d="M12 3v2M8 5h8M9 7v7l-3 5h12l-3-5V7" stroke={TEAL} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 15h6" stroke={TEAL} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'walk-in',
    label: 'Walk In',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="4" r="2" stroke={TEAL} strokeWidth="1.8" />
        <path d="M8 8.5c1.2-.5 2.8-.5 4 0l1.5 4-3 2 1 5" stroke={TEAL} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.5 12.5l2 2-1 5" stroke={TEAL} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 14l-1.5 4" stroke={TEAL} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function AppointmentBar() {
  const [specialty, setSpecialty] = useState('');
  const [location, setLocation] = useState('');
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <section
      id="appointment-bar"
      style={{
        background: 'url(/banner.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        boxShadow: '0 4px 24px rgba(14,154,181,0.10)',
        position: 'relative',
        zIndex: 10,
        paddingBottom: '44px',
        paddingTop: '20px',
        minHeight: 'clamp(400px, 55vw, 613px)',
      }}
    >
      {/* Heading — plain text (background removed per request) */}
      <div style={{ padding: '10px clamp(16px, 4vw, 44px)', textAlign: 'center' }}>
        <h2 style={{
          color: '#0b5162',
          fontSize: 'clamp(16px, 1.4vw, 22px)',
          fontWeight: 700,
          margin: '14px 0 0',
          fontFamily: 'Poppins, sans-serif',
          letterSpacing: '0.01em',
        }}>
          Schedule Your Appointment Online
        </h2>
      </div>

      {/* Content aligned to navbar width */}
      <div id="appt-container" style={{ maxWidth: 1220, margin: '0 auto', padding: '0 clamp(16px, 4vw, 44px)' }}>

        {/* Search Bar - full width inside container */}
        <div id="appt-search-box" style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'white', padding: 'clamp(20px, 4vw, 50px)', borderRadius: '10px', marginTop: '30px' }}>
          <div
            id="appt-search-row"
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              maxWidth: 1120,
              gap: 14,
              borderRadius: 12,
              padding: 18,
              background: '#ffffff',
              boxShadow: '0 2px 12px rgba(14,154,181,0.06)',
              margin: '0 auto'
            }}
          >
            {/* Specialty Input */}
            <div style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '10px 14px',
              height: 56,
              borderRadius: 8,
              background: '#ffffff',
              border: '1.4px solid #2b6b8a',
            }}>
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                <circle cx="11" cy="11" r="7" stroke="#2b6b8a" strokeWidth="2" />
                <path d="M20 20l-2.5-2.5" stroke="#2b6b8a" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                placeholder="Enter Specialty / Symptom / Doctor Name"
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                style={{
                  border: 'none', background: 'transparent', outline: 'none',
                  fontSize: 14, color: '#1a2b4a', width: '100%',
                  fontFamily: 'Inter, Poppins, sans-serif',
                }}
              />
            </div>

            {/* Location Input */}
            <div style={{
              flex: '0 0 300px',
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '10px 14px',
              height: 56,
              borderRadius: 8,
              background: '#ffffff',
              border: '1.4px solid #2b6b8a',
            }}>
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#2b6b8a" strokeWidth="2" />
                <circle cx="12" cy="9" r="2.5" stroke="#2b6b8a" strokeWidth="2" />
              </svg>
              <input
                type="text"
                placeholder="Select Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                style={{
                  border: 'none', background: 'transparent', outline: 'none',
                  fontSize: 14, color: '#1a2b4a', width: '100%',
                  fontFamily: 'Inter, Poppins, sans-serif',
                }}
              />
            </div>

            {/* Book Button */}
            <button
              id="book-appt-btn"
              onClick={() => setEnquiryOpen(true)}
              style={{
                background: `linear-gradient(135deg, #0b4a6b, #07344b)`,
                color: '#fff', border: 'none',
                padding: '0 28px', fontSize: 15,
                fontWeight: 700, cursor: 'pointer',
                fontFamily: 'Poppins, sans-serif',
                letterSpacing: '0.02em', whiteSpace: 'nowrap',
                height: 56,
                borderRadius: 8,
                transition: 'background 0.2s ease', flexShrink: 0,
                boxShadow: '0 2px 6px rgba(7,52,75,0.18)'
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = `linear-gradient(135deg, ${DARK_TEAL}, #0a6f82)`; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = `linear-gradient(135deg, #0b4a6b, #07344b)`; }}
            >
              Book an Appointment
            </button>
          </div>
        </div>

        {/* Four category boxes under the search (icon + title) */}
        <div style={{ margin: '20px auto 32px' }}>
          <div id="appt-category-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {[
              {
                title: 'Specialities', color: '#cdeff7', stroke: '#0e9ab5', icon: (
                  <svg width="44" height="44" fill="none" viewBox="0 0 48 48">
                    <circle cx="24" cy="24" r="24" fill="#e0f4f9" />
                    <path d="M16 14a4 4 0 004 4" stroke="#0e9ab5" strokeWidth="2" strokeLinecap="round" />
                    <path d="M20 14v-2.5A1.5 1.5 0 0121.5 10h5A1.5 1.5 0 0128 11.5V14" stroke="#0e9ab5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M28 14a4 4 0 004 4" stroke="#0e9ab5" strokeWidth="2" strokeLinecap="round" />
                    <path d="M32 18v6a8 8 0 01-16 0v-6" stroke="#0e9ab5" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="24" cy="36" r="3" stroke="#0e9ab5" strokeWidth="2" />
                    <path d="M24 32v1" stroke="#0e9ab5" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                )
              },
              {
                title: 'Doctors', color: '#fde8ea', stroke: '#e0142a', icon: (
                  <svg width="44" height="44" fill="none" viewBox="0 0 48 48">
                    <circle cx="24" cy="24" r="24" fill="#fce8ea" />
                    <circle cx="24" cy="17" r="6" stroke="#e0142a" strokeWidth="2" />
                    <path d="M12 38v-1a12 12 0 0124 0v1" stroke="#e0142a" strokeWidth="2" strokeLinecap="round" />
                    <path d="M22 26v6M19 29h6" stroke="#e0142a" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                )
              },
              {
                title: 'Health Checkup', color: '#e8f9ea', stroke: '#3aaa35', icon: (
                  <svg width="44" height="44" fill="none" viewBox="0 0 48 48">
                    <circle cx="24" cy="24" r="24" fill="#e5f6e4" />
                    <rect x="10" y="14" width="28" height="20" rx="3" stroke="#3aaa35" strokeWidth="2" />
                    <path d="M12 24h5l3-7 4 14 3-7h9" stroke="#3aaa35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )
              },
              {
                title: 'Tests & Services', color: '#fff6e6', stroke: '#f59e0b', icon: (
                  <svg width="44" height="44" fill="none" viewBox="0 0 48 48">
                    <circle cx="24" cy="24" r="24" fill="#fef3d9" />
                    <path d="M18 12h12M21 12v10l-7 12a2 2 0 001.76 2.93h16.48A2 2 0 0034 34L27 22V12" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 30h18" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="21" cy="34" r="1.2" fill="#f59e0b" />
                    <circle cx="26" cy="32" r="1" fill="#f59e0b" />
                  </svg>
                )
              },
            ].map((c) => (
              <div key={c.title} style={{ background: '#ffffff', border: '1px solid #e6f1f4', borderRadius: 10, padding: '14px 12px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 56, height: 56, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', background: c.color, border: `1px solid ${c.color}` }}>
                  {c.icon}
                </div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#123b4a' }}>{c.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* ── Input styles ── */
        #appt-search-row input {
          color: #1a2b4a;
          background: transparent;
          border: none;
          outline: none;
          font-size: 14px;
          padding: 0;
          font-family: Inter, Poppins, sans-serif;
          width: 100%;
        }
        #appt-search-row input::placeholder {
          color: #123b4a;
          opacity: 1;
          font-weight: 600;
        }

        /* ── Responsive: Mobile ── */
        @media (max-width: 900px) {
          #appointment-bar {
            background-size: cover !important;
            min-height: unset !important;
            padding-top: 20px !important;
            padding-bottom: 32px !important;
          }
          #appt-container {
            padding: 0 16px !important;
          }
          #appt-search-box {
            padding: 20px 16px !important;
          }
          #appt-search-row {
            flex-direction: column !important;
            gap: 12px !important;
            padding: 0 !important;
            box-shadow: none !important;
          }
          #appt-search-row > div {
            width: 100% !important;
            flex: none !important;
          }
          #book-appt-btn {
            width: 100% !important;
            padding: 14px 20px !important;
          }
          #appt-category-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
          }
        }
        @media (max-width: 480px) {
          #appt-category-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
      {enquiryOpen && <EnquiryModal onClose={() => setEnquiryOpen(false)} />}
    </section>
  );
}
