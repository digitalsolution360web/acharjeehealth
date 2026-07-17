'use client';

import Image from 'next/image';
import Link from 'next/link';

const TEAL = '#0e9ab5';
const RED = '#e0142a';

const whyItems = [
  {
    title: 'Seamless Care Experience',
    desc: 'Hassle-free appointments, quick check-ins, and step-by-step guidance.',
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Warm & Welcoming Environment',
    desc: 'A clinical space designed for maximum patient comfort and tranquility.',
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Comprehensive Healthcare',
    desc: 'From general consultation to specialized treatment, all under one roof.',
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Experienced Medical Team',
    desc: 'Dedicated clinicians committing to the highest standards of diagnostic accuracy.',
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
];

const stats = [
  { value: '15+', label: 'Years of Service' },
  { value: '50k+', label: 'Happy Patients' },
  { value: '98%', label: 'Satisfaction Rate' },
];

export default function AboutSection() {
  return (
    <section id="about-section" style={{ background: '#ffffff', padding: '72px 0 84px 0', overflow: 'hidden', position: 'relative' }}>
      {/* Grid Pattern Background */}
      <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '45%', opacity: 0.03, backgroundImage: 'radial-gradient(#0e9ab5 1.5px, transparent 1.5px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 10 }}>
        <div id="about-grid" className="about-grid-container">
          
          {/* COLUMN 1: Visual Trust Assets (Left) */}
          <div className="about-left-col" data-animate="fade-left" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            
            {/* Main Award Image Card */}
            <div style={{ position: 'relative', borderRadius: 24, overflow: 'hidden', height: 460, border: '1px solid #eaeef2', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
              <Image
                src="/3.jpg"
                alt="Acharjee Health Clinic – Asansol Trusted Clinic"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.45) 0%, transparent 60%, transparent 100%)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: 20, left: 24, color: '#fff', fontSize: 13, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', textShadow: '0 2px 4px rgba(0,0,0,0.4)' }}>
                Asansol's Trusted Clinic
              </div>
            </div>

            {/* License & Stats Row */}
            <div className="license-stats-row">
              
              {/* License Card (Government Emblem / Official) */}
              <div style={{ background: '#ffffff', border: '1.5px solid #eaeef2', borderRadius: 20, padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', minHeight: 148, boxShadow: '0 4px 16px rgba(0,0,0,0.02)' }}>
                <span style={{ position: 'absolute', top: 12, fontSize: 9.5, fontWeight: 800, color: '#94a3b8', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  Govt Regd.
                </span>
                <div style={{ marginTop: 12, position: 'relative', width: '100%', height: 76, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    src="/ashok.jpg"
                    alt="Statutory CE FORM VII License"
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>

              {/* Stats Cards Row */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flexGrow: 1 }}>
                {stats.map((s, i) => (
                  <div
                    key={i}
                    className="stat-micro-card"
                    style={{
                      background: '#ffffff',
                      border: '1.5px solid #eaeef2',
                      borderRadius: 16,
                      padding: '12px 20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 16,
                      boxShadow: '0 4px 16px rgba(0,0,0,0.02)',
                    }}
                  >
                    <div style={{ fontSize: 24, fontWeight: 900, color: TEAL, fontFamily: 'Poppins, sans-serif', minWidth: 55, lineHeight: 1 }}>
                      {s.value}
                    </div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: '#64748b', lineHeight: 1.2, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

          {/* COLUMN 2: About Text & Benefits Grid (Right) */}
          <div className="about-right-col" data-animate="fade-right" style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            
            <div>
              <span style={{ display: 'block', fontSize: 11.5, fontWeight: 800, color: TEAL, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12 }}>
                About Acharjee Health Clinic
              </span>
              <h2 style={{ fontSize: 'clamp(20px, 2.4vw, 30px)', fontWeight: 600, color: '#000000', fontFamily: 'Poppins, sans-serif', lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.01em' }}>
                We Provide Exceptional <span style={{ color: TEAL }}>Patient Care</span> &amp; Comfort
              </h2>
              <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.75, borderLeft: `4px solid ${TEAL}`, paddingLeft: 20, fontWeight: 600, margin: 0, textAlign: 'justify' }}>
                At Acharjee Health Clinic, we offer a comprehensive range of healthcare services, placing your well-being at the center of everything we do. Our team is dedicated to providing personalized, compassionate medical care to each and every patient.
              </p>
            </div>

            {/* Why Choose Us Benefits Matrix */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <h4 style={{ fontSize: 11, fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'flex', alignItems: 'center', gap: 8, margin: 0 }}>
                <span style={{ width: 20, height: 20, borderRadius: '50%', backgroundColor: TEAL, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="11" height="11" fill="none" stroke="#ffffff" viewBox="0 0 24 24" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Why Patients Trust Us
              </h4>

              <div className="benefits-subgrid">
                {whyItems.map((item, i) => (
                  <div
                    key={i}
                    className="benefit-card"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 12,
                      padding: 20,
                      backgroundColor: 'rgba(248, 250, 252, 0.55)',
                      border: '1.5px solid #eaeef2',
                      borderRadius: 20,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{ width: 36, height: 36, borderRadius: 10, backgroundColor: 'rgba(14, 154, 181, 0.1)', color: TEAL, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        {item.icon}
                      </div>
                      <h5 style={{ fontSize: 13.5, fontWeight: 600, color: '#000000', fontFamily: 'Poppins, sans-serif', lineHeight: 1.3, margin: 0 }}>
                        {item.title}
                      </h5>
                    </div>
                    <p style={{ fontSize: 12.5, color: '#64748b', lineHeight: 1.6, margin: 0, paddingLeft: 0, fontWeight: 500 }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div style={{ marginTop: 8 }}>
              <Link
                href="/about"
                className="about-cta-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  backgroundColor: RED,
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: 13.5,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  padding: '14px 34px',
                  borderRadius: 50,
                  textDecoration: 'none',
                  boxShadow: '0 6px 18px rgba(224,20,42,0.22)',
                }}
              >
                More About Us
                <span style={{ width: 18, height: 18, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>
                  ➔
                </span>
              </Link>
            </div>

          </div>

        </div>
      </div>

      {/* Styled Grid Responsive Breakpoints */}
      <style>{`
        .about-grid-container {
          display: grid;
          grid-template-columns: 1fr 1.35fr;
          gap: 60px;
          align-items: center;
        }
        
        .license-stats-row {
          display: grid;
          grid-template-columns: 1.1fr 1.3fr;
          gap: 20px;
        }

        .benefits-subgrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .benefit-card {
          transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .benefit-card:hover {
          background-color: #ffffff !important;
          border-color: rgba(14, 154, 181, 0.3) !important;
          box-shadow: 0 10px 24px rgba(13,36,60,0.05) !important;
          transform: translateY(-2px);
        }

        .about-cta-btn {
          transition: all 0.22s ease-in-out;
        }
        .about-cta-btn:hover {
          background-color: #c90f23 !important;
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(224,20,42,0.35) !important;
        }

        .stat-micro-card {
          transition: all 0.25s ease;
        }
        .stat-micro-card:hover {
          border-color: rgba(14, 154, 181, 0.25) !important;
          transform: translateY(-1px);
        }

        @media (max-width: 1100px) {
          .about-grid-container {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .about-left-col {
            max-width: 650px;
            margin: 0 auto;
            width: 100%;
          }
        }

        @media (max-width: 640px) {
          .license-stats-row {
            grid-template-columns: 1fr !important;
          }
          .benefits-subgrid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </section>
  );
}
