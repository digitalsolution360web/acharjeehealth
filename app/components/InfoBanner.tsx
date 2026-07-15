'use client';

import Image from 'next/image';
import Link from 'next/link';

const TEAL = '#0e9ab5';
const GREEN = '#3aaa35';
const RED = '#e0142a';

export default function InfoBanner() {
  return (
    <section
      id="info-banner"
      style={{
        background: '#f8fafc',
        padding: '72px 0 36px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── Background Decorative Blobs & Shapes ── */}
      <div style={{
        position: 'absolute', top: '10%', left: '-10%',
        width: '450px', height: '450px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(14,154,181,0.15) 0%, transparent 70%)',
        filter: 'blur(40px)', pointerEvents: 'none', zIndex: 0
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '-5%',
        width: '350px', height: '350px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(58,170,53,0.12) 0%, transparent 70%)',
        filter: 'blur(30px)', pointerEvents: 'none', zIndex: 0
      }} />

      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)',
          gap: '36px',
          alignItems: 'stretch',
        }} id="info-banner-layout">

          {/* ════════════════════════════════════════════
              LEFT PANEL: Brand Hero Glass Box (Pure CSS glowing background - no image)
          ════════════════════════════════════════════ */}
          <div
            id="info-hero-card"
            data-animate="fade-left"
            style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              minHeight: '440px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              boxShadow: '0 20px 48px rgba(13,36,60,0.16)',
              border: '1px solid rgba(255, 255, 255, 0.8)',
              // Premium gradient background (Teal to Deep Slate)
              background: `linear-gradient(135deg, #094756 0%, #0d2838 50%, #061824 100%)`,
              transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.85s, transform 0.85s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {/* Glowing Abstract CSS Shapes for depth */}
            <div style={{
              position: 'absolute', top: '-10%', right: '-10%',
              width: '260px', height: '260px', borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(14,154,181,0.25) 0%, transparent 70%)',
              filter: 'blur(30px)', pointerEvents: 'none', zIndex: 1
            }} />
            <div style={{
              position: 'absolute', bottom: '-20%', left: '10%',
              width: '320px', height: '320px', borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(58,170,53,0.18) 0%, transparent 70%)',
              filter: 'blur(35px)', pointerEvents: 'none', zIndex: 1
            }} />

            {/* Glowing Grid Overlay Pattern */}
            <div style={{
              position: 'absolute', inset: 0,
              opacity: 0.08,
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
              zIndex: 1,
              pointerEvents: 'none'
            }} />

            {/* Glowing Accent Lines (Aesthetic top boundary) */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
              background: `linear-gradient(90deg, ${TEAL}, ${GREEN}, ${TEAL})`,
              zIndex: 2,
            }} />

            {/* Content container */}
            <div style={{
              position: 'relative',
              zIndex: 3,
              padding: '48px 44px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}>
              {/* Accent Tag */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.18)',
                padding: '6px 14px', borderRadius: '40px',
                marginBottom: '22px',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: GREEN, display: 'inline-block' }} />
                <span style={{ fontSize: '11px', color: '#e2f4f7', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  OUR COMMITMENT TO CARE
                </span>
              </div>

              {/* Title */}
              <h2 style={{
                fontSize: 'clamp(24px, 3.2vw, 36px)',
                fontWeight: 800,
                color: '#fff',
                fontFamily: 'Poppins, sans-serif',
                lineHeight: 1.25,
                marginBottom: '18px',
                letterSpacing: '-0.02em',
              }}>
                Safeguarding Your Health,<br />
                <span style={{
                  background: `linear-gradient(to right, #6ef2d5, #5ce2a5)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 900
                }}>Today and Tomorrow</span>
              </h2>

              <p style={{
                fontSize: '15px',
                color: 'rgba(230, 242, 248, 0.85)',
                lineHeight: 1.7,
                marginBottom: '32px',
                maxWidth: '520px',
              }}>
                Step into a world of comprehensive healthcare where your well-being is our top priority. At Acharjee Health Clinic, we are dedicated to delivering personalized medical care with compassion and expertise.
              </p>

              {/* Ultra Premium CTA Button */}
              <Link
                href="/about"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '14px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '14px',
                  padding: '12px 28px',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = '#fff';
                  el.style.color = '#0d2131';
                  el.style.borderColor = '#fff';
                  el.style.boxShadow = '0 16px 36px rgba(255,255,255,0.22)';
                  const arr = el.querySelector('.arrow-c') as HTMLElement;
                  if (arr) {
                    arr.style.background = '#0e9ab5';
                    arr.style.color = '#fff';
                  }
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = 'rgba(255, 255, 255, 0.1)';
                  el.style.color = '#fff';
                  el.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  el.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
                  const arr = el.querySelector('.arrow-c') as HTMLElement;
                  if (arr) {
                    arr.style.background = 'rgba(255, 255, 255, 0.2)';
                    arr.style.color = '#fff';
                  }
                }}
              >
                Learn More
                <span className="arrow-c" style={{
                  width: '24px', height: '24px', borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.2)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 'bold', fontSize: '10px', transition: 'all 0.25s',
                  color: '#fff'
                }}>
                  ➔
                </span>
              </Link>
            </div>
          </div>

          {/* ════════════════════════════════════════════
              RIGHT PANEL: Two interactive cards stacked
          ════════════════════════════════════════════ */}
          <div 
            data-animate="fade-right"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              height: '100%',
              transition: 'opacity 0.85s, transform 0.85s',
            }} 
            id="info-stacked-panels"
          >

            {/* ── Card 1: Storefront Photo Card (Enhanced depth & style) ── */}
            <div style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              flex: 1,
              minHeight: '210px',
              boxShadow: '0 14px 36px rgba(13,36,60,0.12)',
              border: '1px solid #fff',
              transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.01)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
              }}
            >
              <Image
                src="/2.jpg"
                alt="Acharjee Storefront Clinic"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              {/* Rich Teal Gradient overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(135deg, rgba(14,154,181,0.92) 0%, rgba(13,33,49,0.3) 100%)',
                zIndex: 1,
              }} />

              {/* Text overlay */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: '24px 28px',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
              }}>
                <span style={{
                  fontSize: '11px', fontWeight: 800, color: '#bbf2fd',
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                }}>
                  Pharmacy &amp; Clinic
                </span>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: 900,
                  color: '#fff',
                  fontFamily: 'Poppins, sans-serif',
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  textShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                  One Stop Solution<br />
                  <span style={{ color: '#88f9a2' }}>For Medical Essentials</span>
                </h3>
              </div>
            </div>

            {/* ── Card 2: Interactive Welcome Widget ── */}
            <div style={{
              background: '#fff',
              borderRadius: '20px',
              padding: '36px 32px',
              boxShadow: '0 14px 36px rgba(13,36,60,0.08)',
              border: '1.5px solid #edf4f8',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '20px',
              flex: 1,
              position: 'relative',
            }}>
              {/* Subtle watermark medical cross in bg */}
              <div style={{
                position: 'absolute', right: '15px', top: '15px', opacity: 0.05,
                color: TEAL, pointerEvents: 'none', zIndex: 0
              }}>
                <svg width="86" height="86" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 10.5h-5.5V5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.5H5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h5.5V19c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5.5H19c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z"/>
                </svg>
              </div>

              {/* Status Header */}
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  {/* Glowing Pulse Dot */}
                  <span style={{ display: 'flex', position: 'relative', width: '10px', height: '10px' }}>
                    <span style={{
                      animation: 'pulse 1.8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                      position: 'absolute', inlineSize: '100%', blockSize: '100%', borderRadius: '9999px',
                      backgroundColor: '#3aaa35', opacity: 0.75
                    }} />
                    <span style={{
                      position: 'relative', display: 'inline-flex', borderRadius: '9999px',
                      width: '10px', height: '10px', backgroundColor: '#3aaa35'
                    }} />
                  </span>
                  <span style={{ fontSize: '13px', fontWeight: 800, color: GREEN, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                    WE ARE OPEN &amp; ACTIVE
                  </span>
                </div>

                <h4 style={{
                  fontSize: '18px', fontWeight: 800, color: '#0f2735',
                  fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.01em',
                  marginBottom: '8px', lineHeight: 1.3
                }}>
                  Welcome to Acharjee Clinic
                </h4>
                <p style={{ fontSize: '13.5px', color: '#5b7381', lineHeight: 1.6, margin: 0 }}>
                  Book an {' '}
                  <Link href="/appointment" style={{
                    color: TEAL, fontWeight: 700, textDecoration: 'none',
                    borderBottom: `2.5px solid ${TEAL}25`, transition: 'border-color 0.2s'
                  }}
                    onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = TEAL}
                    onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = `${TEAL}25`}
                  >
                    online appointment
                  </Link>{' '}
                  or access pharmacy &amp; emergency care services.
                </p>
              </div>

              {/* Call Widget Action Button */}
              <a
                href="tel:07364921002"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  background: `linear-gradient(135deg, ${TEAL} 0%, #0c88a0 100%)`,
                  padding: '12px 20px',
                  borderRadius: '16px',
                  textDecoration: 'none',
                  boxShadow: `0 8px 24px rgba(14,154,181,0.25)`,
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                  zIndex: 1,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = 'translateY(-2px)';
                  el.style.boxShadow = `0 12px 32px rgba(14,154,181,0.38)`;
                  const iconB = el.querySelector('.icon-bg') as HTMLElement;
                  if (iconB) iconB.style.background = '#fff';
                  const svgP = el.querySelector('.svg-phone') as HTMLElement;
                  if (svgP) svgP.style.stroke = '#0e9ab5';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = 'translateY(0)';
                  el.style.boxShadow = `0 8px 24px rgba(14,154,181,0.25)`;
                  const iconB = el.querySelector('.icon-bg') as HTMLElement;
                  if (iconB) iconB.style.background = 'rgba(255,255,255,0.18)';
                  const svgP = el.querySelector('.svg-phone') as HTMLElement;
                  if (svgP) svgP.style.stroke = '#fff';
                }}
              >
                {/* Clean phone icon */}
                <div
                  className="icon-bg"
                  style={{
                    width: '42px', height: '42px', borderRadius: '50%',
                    background: 'rgba(255,255,255,0.18)',
                    display: 'flex', alignItems: 'center', justifyItems: 'center',
                    justifyContent: 'center', flexShrink: 0,
                    transition: 'all 0.25s',
                  }}
                >
                  <svg
                    className="svg-phone"
                    width="20" height="20" fill="none" viewBox="0 0 24 24"
                    stroke="#fff" strokeWidth="2.5"
                    style={{ transition: 'stroke 0.25s' }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,0.75)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    DIRECT TELEPHONE:
                  </span>
                  <span style={{ display: 'block', fontSize: '18px', fontWeight: 800, color: '#fff', fontFamily: 'Poppins, sans-serif', letterSpacing: '0.02em' }}>
                    07364 921002
                  </span>
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Styled utilities for CSS Animations (keyframe pulse) */}
      <style>{`
        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(58,170,53, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 8px rgba(58,170,53, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(58,170,53, 0); }
        }
        @media (max-width: 1024px) {
          #info-banner-layout {
            grid-template-columns: 1fr !important;
          }
          #info-hero-card {
            min-height: 380px !important;
          }
        }
        @media (max-width: 640px) {
          #info-hero-card {
            padding: 32px 24px !important;
          }
          #info-hero-card div {
            padding: 24px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
