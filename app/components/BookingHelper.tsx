'use client';

import React, { useState } from 'react';
import EnquiryModal from './EnquiryModal';
import Link from "next/link";

const TEAL = '#0e9ab5';
const DARK_NAVY = '#0b3b4a';

export default function BookingHelper() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

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
      <div style={{ maxWidth: 1520, margin: '0 auto', padding: '0 clamp(16px, 4vw, 44px)' }}>
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
            <button
              onClick={() => setEnquiryOpen(true)}
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
                cursor: 'pointer',
                width: '100%',
                textAlign: 'left',
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
                  With country&apos;s leading experts
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
            </button>

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
                gap: 16,
              }}
            >
              {/* Box 1: Consultations */}
              <Link
                href="/doctors"
                className="right-helper-box"
                style={{
                  border: '1.5px solid #d4f2f7',
                  borderRadius: 16,
                  padding: '22px 14px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#ffffff',
                  textDecoration: 'none',
                  textAlign: 'center',
                  cursor: 'pointer',
                  minHeight: 160,
                  gap: 10,
                }}
              >
                <div style={{ marginBottom: 4 }}>
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    {/* Monitor */}
                    <rect x="8" y="10" width="44" height="30" rx="4" stroke="#0e9ab5" strokeWidth="2" />
                    <path d="M22 40h16M30 40v6" stroke="#0e9ab5" strokeWidth="2" strokeLinecap="round" />
                    {/* Doctor figure on screen */}
                    <circle cx="30" cy="22" r="5" stroke="#0e9ab5" strokeWidth="1.5" />
                    <path d="M21 35c0-5 4-8 9-8s9 3 9 8" stroke="#0e9ab5" strokeWidth="1.5" strokeLinecap="round" />
                    {/* Speech bubble */}
                    <rect x="36" y="10" width="12" height="9" rx="2" stroke="#0e9ab5" strokeWidth="1.5" fill="#e0f4f9" />
                    <path d="M39 16l-2 3" stroke="#0e9ab5" strokeWidth="1.5" strokeLinecap="round" />
                    {/* Stethoscope */}
                    <path d="M26 29c0 2 2 4 4 4s4-2 4-4" stroke="#0e9ab5" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="34" cy="33" r="1.5" fill="#0e9ab5" />
                  </svg>
                </div>
                <span
                  style={{
                    fontSize: 14.5,
                    fontWeight: 700,
                    color: TEAL,
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  Consultations
                </span>
              </Link>

              {/* Box 2: Diagnostics */}
              <Link
                href="/tests-services"
                className="right-helper-box"
                style={{
                  border: '1.5px solid #d4f2f7',
                  borderRadius: 16,
                  padding: '22px 14px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#ffffff',
                  textDecoration: 'none',
                  textAlign: 'center',
                  cursor: 'pointer',
                  minHeight: 160,
                  gap: 10,
                }}
              >
                <div style={{ marginBottom: 4 }}>
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    {/* Head silhouette */}
                    <circle cx="30" cy="26" r="16" stroke="#0e9ab5" strokeWidth="2" />
                    <path d="M30 42v6" stroke="#0e9ab5" strokeWidth="2" strokeLinecap="round" />
                    {/* Medical plus inside head */}
                    <circle cx="30" cy="26" r="8" stroke="#0e9ab5" strokeWidth="1.5" />
                    <path d="M30 20v12M24 26h12" stroke="#0e9ab5" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <span
                  style={{
                    fontSize: 14.5,
                    fontWeight: 700,
                    color: TEAL,
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  Diagnostics
                </span>
              </Link>

              {/* Box 3: Health Checkups */}
              <Link
                href="/health-checkup"
                className="right-helper-box"
                style={{
                  border: '1.5px solid #d4f2f7',
                  borderRadius: 16,
                  padding: '22px 14px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#ffffff',
                  textDecoration: 'none',
                  textAlign: 'center',
                  cursor: 'pointer',
                  minHeight: 160,
                  gap: 10,
                }}
              >
                <div style={{ marginBottom: 4 }}>
                  <svg width="60" height="60" viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="20" r="9" stroke="#0e9ab5" strokeWidth="2" />
                    <path d="M16 46c0-8 7-14 16-14s16 6 16 14" stroke="#0e9ab5" strokeWidth="2" strokeLinecap="round" />
                    <path d="M26 30c0 3 2.686 5 6 5s6-2 6-5" stroke="#0e9ab5" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M32 35v5" stroke="#0e9ab5" strokeWidth="1.5" />
                    <circle cx="32" cy="42" r="2" fill="#0e9ab5" />
                  </svg>
                </div>
                <span
                  style={{
                    fontSize: 14.5,
                    fontWeight: 700,
                    color: TEAL,
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  Health Checkups
                </span>
              </Link>

              {/* Box 4: Tests & Services */}
              <Link
                href="/tests-services"
                className="right-helper-box"
                style={{
                  border: '1.5px solid #d4f2f7',
                  borderRadius: 16,
                  padding: '22px 14px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#ffffff',
                  textDecoration: 'none',
                  textAlign: 'center',
                  cursor: 'pointer',
                  minHeight: 160,
                  gap: 10,
                }}
              >
                <div style={{ marginBottom: 4 }}>
                  <svg width="60" height="60" viewBox="0 0 64 64" fill="none">
                    <rect x="18" y="10" width="26" height="36" rx="3" stroke="#0e9ab5" strokeWidth="2" />
                    <rect x="26" y="6" width="12" height="6" rx="1.5" stroke="#0e9ab5" strokeWidth="1.5" />
                    <path d="M24 20H36M24 27H38M24 34H32" stroke="#0e9ab5" strokeWidth="1.8" strokeLinecap="round" />
                    <circle cx="44" cy="44" r="7" stroke="#0e9ab5" strokeWidth="2" />
                    <path d="M49 49l5 5" stroke="#0e9ab5" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <span
                  style={{
                    fontSize: 14.5,
                    fontWeight: 700,
                    color: TEAL,
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
        @media (max-width: 480px) {
          #booking-helper {
            padding: 36px 0 !important;
          }
          .booking-card {
            padding: 18px 14px !important;
          }
        }
      `}</style>
      {enquiryOpen && <EnquiryModal onClose={() => setEnquiryOpen(false)} />}
    </section>
  );
}
