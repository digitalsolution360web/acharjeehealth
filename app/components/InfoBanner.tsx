'use client';

import Image from 'next/image';
import Link from 'next/link';

const TEAL = '#0e9ab5';
const GREEN = '#3aaa35';
const RED = '#e0142a';

export default function InfoBanner() {
  return (
    <section id="info-banner" style={{ background: '#ffffff', padding: '72px 0', overflow: 'hidden', position: 'relative' }}>
      {/* Decorative Blur Backgrounds */}
      <div style={{ position: 'absolute', top: '10%', left: '-10%', width: 450, height: 450, borderRadius: '50%', background: 'radial-gradient(circle, rgba(14,154,181,0.06) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '-5%', width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(58,170,53,0.04) 0%, transparent 70%)', filter: 'blur(30px)', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 10 }}>
        <div id="info-banner-layout" className="info-grid-container">
          
          {/* LEFT PANEL: Commitment to Care (Light themed card) */}
          <div
            id="info-hero-card"
            data-animate="fade-left"
            style={{
              background: 'linear-gradient(135deg, #f0f9fb 0%, #f7fcfd 50%, #edf7f9 100%)',
              border: '1.5px solid #d2ebef',
              borderRadius: 24,
              padding: '48px',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              minHeight: 440,
              boxShadow: '0 8px 30px rgba(14, 154, 181, 0.03)',
            }}
          >
            {/* Glowing Accent Top Line */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 5, background: `linear-gradient(90deg, ${TEAL}, ${GREEN}, ${TEAL})`, pointerEvents: 'none' }} />

            <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              {/* Accent Tag */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#ffffff', border: '1px solid rgba(14,154,181,0.2)', padding: '6px 14px', borderRadius: 50, marginBottom: 24, boxShadow: '0 2px 6px rgba(0,0,0,0.02)' }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: GREEN }} />
                <span style={{ fontSize: 10.5, fontWeight: 800, color: TEAL, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  Our Commitment to Care
                </span>
              </div>

              {/* Title */}
              <h2 style={{ fontSize: 'clamp(20px, 2.4vw, 30px)', fontWeight: 600, color: '#000000', fontFamily: 'Poppins, sans-serif', lineHeight: 1.25, marginBottom: 20, letterSpacing: '-0.01em' }}>
                Safeguarding Your Health,<br />
                <span style={{ color: TEAL }}>Today and Tomorrow</span>
              </h2>

              <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.75, marginBottom: 32, maxWidth: 540, fontWeight: 500 }}>
                Step into a world of comprehensive healthcare where your well-being is our top priority. At Acharjee Health Clinic, we are dedicated to delivering personalized medical care with compassion and expertise.
              </p>

              {/* CTA Button */}
              <Link
                href="/about"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: TEAL,
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: 13.5,
                  padding: '14px 32px',
                  borderRadius: 50,
                  textDecoration: 'none',
                  transition: 'all 0.22s ease-in-out',
                  boxShadow: '0 6px 20px rgba(14,154,181,0.25)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = '#0c869d';
                  el.style.transform = 'translateY(-2px)';
                  el.style.boxShadow = '0 8px 24px rgba(12,134,157,0.35)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = TEAL;
                  el.style.transform = 'translateY(0)';
                  el.style.boxShadow = '0 6px 20px rgba(14,154,181,0.25)';
                }}
              >
                Learn More
                <span>➔</span>
              </Link>
            </div>
          </div>

          {/* RIGHT PANEL: Stacked Cards Column */}
          <div
            id="info-stacked-panels"
            data-animate="fade-right"
            style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
          >
            {/* Card 1: Pharmacy Storefront */}
            <div style={{ position: 'relative', borderRadius: 24, overflow: 'hidden', minHeight: 220, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', border: '1px solid #eaeef2', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
              <Image
                src="/2.jpg"
                alt="Acharjee Storefront Pharmacy & Clinic"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                sizes="(max-width: 768px) 100vw, 35vw"
              />
              {/* Overlay gradient */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,39,53,0.92) 0%, rgba(15,39,53,0.4) 60%, transparent 100%)', zIndex: 1 }} />

              {/* Text overlay */}
              <div style={{ position: 'relative', zIndex: 2, padding: 24, pointerEvents: 'none' }}>
                <span style={{ display: 'block', fontSize: 10, fontWeight: 800, color: '#cbd5e1', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 5 }}>
                  Pharmacy &amp; Clinic
                </span>
                <h3 style={{ fontSize: 21, fontWeight: 800, color: '#ffffff', fontFamily: 'Poppins, sans-serif', lineHeight: 1.3, margin: 0 }}>
                  One Stop Solution <br />
                  <span style={{ color: '#6ef2d5' }}>For Medical Essentials</span>
                </h3>
              </div>
            </div>

            {/* Card 2: Interactive Welcome Widget */}
            <div style={{ background: '#ffffff', border: '1px solid #eaeef2', borderRadius: 24, padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 20, boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
              
              <div>
                {/* Status Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <span style={{ position: 'relative', display: 'flex', width: 9, height: 9 }}>
                    <span style={{ position: 'absolute', display: 'inline-flex', height: '100%', width: '100%', borderRadius: '50%', backgroundColor: GREEN, opacity: 0.75, animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite' }}></span>
                    <span style={{ position: 'relative', display: 'inline-flex', borderRadius: '50%', width: 9, height: 9, backgroundColor: GREEN }}></span>
                  </span>
                  <span style={{ fontSize: 11, fontWeight: 800, color: GREEN, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    We are Open &amp; Active
                  </span>
                </div>

                <h4 style={{ fontSize: 18, fontWeight: 800, color: '#0f2735', fontFamily: 'Poppins, sans-serif', marginBottom: 8, lineHeight: 1.3 }}>
                  Welcome to Acharjee Clinic
                </h4>
                <p style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                  Book an{' '}
                  <Link
                    href="/appointment"
                    style={{
                      color: TEAL,
                      fontWeight: 800,
                      textDecoration: 'underline',
                      textDecorationThickness: '2px',
                      textDecorationColor: 'rgba(14, 154, 181, 0.3)',
                    }}
                  >
                    online appointment
                  </Link>{' '}
                  or access pharmacy &amp; emergency care services.
                </p>
              </div>

              {/* Telephone Contact Widget */}
              <a
                href="tel:07364921002"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  background: '#f0f9fb',
                  border: '1.5px solid rgba(14,154,181,0.1)',
                  borderRadius: 18,
                  padding: '16px 20px',
                  textDecoration: 'none',
                  transition: 'all 0.22s ease-in-out',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(14,154,181,0.3)';
                  el.style.background = '#ebf8fa';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(14,154,181,0.1)';
                  el.style.background = '#f0f9fb';
                }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: TEAL, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg style={{ width: 20, height: 20, color: '#ffffff' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: 9.5, fontWeight: 700, color: '#64748b', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 2 }}>
                    Direct Telephone:
                  </span>
                  <span style={{ display: 'block', fontSize: 17.5, fontWeight: 800, color: '#0f2735', fontFamily: 'Poppins, sans-serif', letterSpacing: '0.02em', lineHeight: 1.1 }}>
                    07364 921002
                  </span>
                </div>
              </a>

            </div>

          </div>

        </div>
      </div>

      {/* Styled Grid Breakpoints */}
      <style>{`
        .info-grid-container {
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: 32px;
          align-items: stretch;
        }
        @media (max-width: 1024px) {
          .info-grid-container {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
        @keyframes ping {
          0% { transform: scale(1); opacity: 1; }
          70%, 100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
