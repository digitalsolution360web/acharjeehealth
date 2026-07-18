'use client';

import React from 'react';
import Link from 'next/link';

const TEAL = '#0e9ab5';
const DARK_NAVY = '#0b3b4a';

export default function BookingHelper() {
  return (
    <section
      id="booking-helper"
      style={{
        background: '#ffffff',
        padding: '56px 0',
        borderBottom: '1px solid #f0f4f7',
      }}
    >
      {/* Centered container matching Navbar width (maxWidth: 1520, padding: 0 44px) */}
      <div style={{ maxWidth: 1520, margin: '0 auto', padding: '0 44px' }}>
        <div
          id="booking-helper-layout"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: 48,
            alignItems: 'center',
          }}
        >
          {/* LEFT: 2x2 Grid of Quick Links */}
          <div
            id="helper-left-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 20,
            }}
          >
            {/* Card 1: Book an Appointment */}
            <Link
              href="/appointment"
              className="booking-card"
              style={{
                background: '#f8faf0',
                border: '1.5px solid #e1e9c7',
                borderRadius: 14,
                padding: '24px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 16,
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              <div>
                <h3
                  className="booking-card-title"
                  style={{
                    margin: '0 0 6px 0',
                    fontSize: 18,
                    fontWeight: 700,
                    color: '#2d3e1d',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  Book an<br />Appointment
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: 13.5,
                    color: '#657a53',
                    lineHeight: 1.4,
                  }}
                >
                  With country's leading experts
                </p>
              </div>
              <div
                style={{
                  width: 58,
                  height: 58,
                  borderRadius: '50%',
                  background: '#eef4d4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="16" rx="3" stroke="#718d36" strokeWidth="2" />
                  <path d="M16 2v4M8 2v4M3 9h18" stroke="#718d36" strokeWidth="2" />
                  <circle cx="15" cy="15" r="2.5" stroke="#718d36" strokeWidth="1.5" />
                  <path d="M15 13.5v1.5h1" stroke="#718d36" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            </Link>

            {/* Card 2: Hospitals */}
            <div
              className="booking-card"
              style={{
                background: '#f0f9ff',
                border: '1.5px solid #d0e7f9',
                borderRadius: 14,
                padding: '24px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 16,
                cursor: 'default',
              }}
            >
              <div>
                <h3
                  style={{
                    margin: '0 0 6px 0',
                    fontSize: 18,
                    fontWeight: 700,
                    color: '#1a3a54',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  Hospitals
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: 13.5,
                    color: '#537a9a',
                    lineHeight: 1.4,
                  }}
                >
                  Health needs under one roof
                </p>
              </div>
              <div
                style={{
                  width: 58,
                  height: 58,
                  borderRadius: '50%',
                  background: '#dbeafe',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M3 21h18M5 21V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v13M9 12h6M12 9v6" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Card 3: Specialities */}
            <Link
              href="/services"
              className="booking-card"
              style={{
                background: '#faf5ff',
                border: '1.5px solid #edd9fc',
                borderRadius: 14,
                padding: '24px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 16,
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              <div>
                <h3
                  className="booking-card-title"
                  style={{
                    margin: '0 0 6px 0',
                    fontSize: 18,
                    fontWeight: 700,
                    color: '#491069',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  Specialities
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: 13.5,
                    color: '#8c58b3',
                    lineHeight: 1.4,
                  }}
                >
                  Our expertise in Healthcare
                </p>
              </div>
              <div
                style={{
                  width: 58,
                  height: 58,
                  borderRadius: '50%',
                  background: '#f3e8ff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M12 21a9 9 0 0 1-9-9 9 9 0 0 1 9-9 9 9 0 0 1 9 9 9 9 0 0 1-9 9z" stroke="#9333ea" strokeWidth="2" />
                  <path d="M12 7c-1.5 1.5-2 3.5-2 5s.5 3.5 2 5 2-3.5 2-5-.5-3.5-2-5z" stroke="#9333ea" strokeWidth="1.5" />
                  <path d="M7 12h10" stroke="#9333ea" strokeWidth="1.5" />
                </svg>
              </div>
            </Link>

            {/* Card 4: Doctors */}
            <Link
              href="/doctors"
              className="booking-card"
              style={{
                background: '#fff7ed',
                border: '1.5px solid #fce3c5',
                borderRadius: 14,
                padding: '24px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 16,
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              <div>
                <h3
                  className="booking-card-title"
                  style={{
                    margin: '0 0 6px 0',
                    fontSize: 18,
                    fontWeight: 700,
                    color: '#5c2d0c',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  Doctors
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: 13.5,
                    color: '#9e6231',
                    lineHeight: 1.4,
                  }}
                >
                  Top experts for your health
                </p>
              </div>
              <div
                style={{
                  width: 58,
                  height: 58,
                  borderRadius: '50%',
                  background: '#ffedd5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="4" stroke="#ea580c" strokeWidth="2" />
                  <path d="M5 20a7 7 0 0 1 14 0" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" />
                  <path d="M19 9v4M17 11h4" stroke="#ea580c" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            </Link>
          </div>

          {/* RIGHT: Heading + 2 Vertical Action Cards */}
          <div>
            <h2
              style={{
                fontSize: 'clamp(20px, 2.2vw, 26px)',
                fontWeight: 700,
                color: DARK_NAVY,
                fontFamily: 'Poppins, sans-serif',
                marginBottom: 20,
              }}
            >
              We can help you book
            </h2>

            <div
              id="helper-right-layout"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 20,
              }}
            >
              {/* Box 1: Health Checkups */}
              <Link
                href="/health-checkup"
                className="right-helper-box"
                style={{
                  border: '1.5px solid #d4f2f7',
                  borderRadius: 16,
                  padding: '24px 16px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#ffffff',
                  textDecoration: 'none',
                  textAlign: 'center',
                  cursor: 'pointer',
                  minHeight: 180,
                }}
              >
                {/* Colored SVG Doctor graphic container */}
                <div style={{ marginBottom: 16 }}>
                  <svg width="68" height="68" viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="24" r="10" stroke="#0e9ab5" strokeWidth="2.5" fill="#e0f4f9" />
                    <path d="M16 48c0-8.837 7.163-16 16-16s16 7.163 16 16v2H16v-2z" stroke="#0e9ab5" strokeWidth="2.5" fill="#e0f4f9" />
                    {/* Stethoscope around neck */}
                    <path d="M26 34c0 3.314 2.686 6 6 6s6-2.686 6-6" stroke="#3aaa35" strokeWidth="2" strokeLinecap="round" />
                    <path d="M32 40v6" stroke="#3aaa35" strokeWidth="2" />
                    <circle cx="32" cy="48" r="3" fill="#3aaa35" />
                    {/* Med cross badge */}
                    <circle cx="48" cy="18" r="8" fill="#e0142a" />
                    <path d="M48 14v8M44 18h8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: DARK_NAVY,
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  Health Checkups
                </span>
              </Link>

              {/* Box 2: Tests & Services */}
              <Link
                href="/tests-services"
                className="right-helper-box"
                style={{
                  border: '1.5px solid #d4f2f7',
                  borderRadius: 16,
                  padding: '24px 16px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#ffffff',
                  textDecoration: 'none',
                  textAlign: 'center',
                  cursor: 'pointer',
                  minHeight: 180,
                }}
              >
                {/* Colored SVG Lab/Checkup clipboard graphic container */}
                <div style={{ marginBottom: 16 }}>
                  <svg width="68" height="68" viewBox="0 0 64 64" fill="none">
                    {/* Clipboard */}
                    <rect x="20" y="12" width="28" height="38" rx="3" stroke="#0e9ab5" strokeWidth="2.5" fill="#f0fafc" />
                    <rect x="28" y="8" width="12" height="6" rx="1.5" stroke="#0b3b4a" strokeWidth="2" fill="#ffffff" />
                    {/* Lines on report */}
                    <path d="M26 22H38M26 28H42M26 34H36M26 40H40" stroke="#b2dce2" strokeWidth="2.2" strokeLinecap="round" />
                    {/* Magnifying Glass */}
                    <circle cx="46" cy="44" r="6" stroke="#3aaa35" strokeWidth="2" fill="#ffffff" />
                    <path d="M50.5 48.5l6.5 6.5" stroke="#3aaa35" strokeWidth="2" strokeLinecap="round" />
                    {/* Lab Flask */}
                    <path d="M12 36l8 12a1 1 0 0 1-.83 1.5H4.83A1 1 0 0 1 4 48l8-12z" stroke="#e0142a" strokeWidth="2" fill="#fce8ea" />
                    <path d="M12 36v-6" stroke="#e0142a" strokeWidth="2" />
                    <circle cx="8" cy="45" r="1.5" fill="#e0142a" />
                  </svg>
                </div>
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: DARK_NAVY,
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  Tests &amp; Services
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .booking-card {
          transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
        }
        .booking-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 18px rgba(0,0,0,0.06);
        }
        .right-helper-box {
          transition: all 200ms ease;
        }
        .right-helper-box:hover {
          transform: translateY(-4px);
          border-color: ${TEAL} !important;
          box-shadow: 0 8px 24px rgba(14,154,181,0.12);
        }
        @media (max-width: 991px) {
          #booking-helper-layout {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
        @media (max-width: 580px) {
          #helper-left-grid {
            grid-template-columns: 1fr !important;
          }
          #helper-right-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
