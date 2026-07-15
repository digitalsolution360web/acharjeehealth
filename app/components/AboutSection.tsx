'use client';

import Image from 'next/image';
import Link from 'next/link';

const TEAL = '#0e9ab5';
const RED = '#e0142a';

const whyItems = [
  { text: 'Seamless Care Experience', icon: '❤️' },
  { text: 'Warm and Welcoming Environment', icon: '🏥' },
  { text: 'Comprehensive Healthcare Services', icon: '🩺' },
  { text: 'Experienced and Expert Doctors', icon: '👨‍⚕️' },
];

const stats = [
  { value: '15+', label: 'Years of Service' },
  { value: '50k+', label: 'Happy Patients' },
  { value: '98%', label: 'Satisfaction Rate' },
];

export default function AboutSection() {
  return (
    <section
      id="about-section"
      style={{ background: '#fff', padding: '72px 0', overflow: 'hidden', position: 'relative' }}
    >
      {/* Subtle BG pattern */}
      <div style={{
        position: 'absolute', top: 0, right: 0, bottom: 0,
        width: '45%', opacity: 0.035,
        backgroundImage: 'radial-gradient(circle, #0e9ab5 1.5px, transparent 1.5px)',
        backgroundSize: '26px 26px',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }}>
        <div
          id="about-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: '64px', alignItems: 'center' }}
        >

          {/* ── COL 1: Featured Image (LEFT) ── */}
          <div style={{ position: 'relative' }} data-animate="fade-left">

            {/* Main image card */}
            <div style={{
              position: 'relative', borderRadius: 28, overflow: 'hidden',
              height: 480,
              boxShadow: '0 24px 64px rgba(13,36,60,0.20)',
            }}>
              <Image
                src="/3.jpg"
                alt="Acharjee Health Clinic – Asansol Trusted Clinic"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(5,18,32,0.75) 0%, rgba(5,18,32,0.1) 55%, transparent 100%)',
              }} />
              {/* Badge */}
              {/* <div style={{
                position: 'absolute', top: 18, left: 18,
                background: 'rgba(14,154,181,0.90)',
                backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.25)',
                borderRadius: 12, padding: '8px 14px',
              }}>
                <p style={{ fontSize: 9, fontWeight: 800, color: 'rgba(255,255,255,0.75)', letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0 }}>Business Excellence</p>
                <p style={{ fontSize: 13, fontWeight: 900, color: '#fff', margin: 0, fontFamily: 'Poppins, sans-serif' }}>🏆 Award Winner</p>
              </div> */}
              {/* Bottom text */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 22px' }}>
                <p style={{ fontSize: 9.5, fontWeight: 800, color: TEAL, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 4 }}>Asansol&apos;s Trusted</p>
                <h3 style={{ fontSize: 18, fontWeight: 900, color: '#fff', fontFamily: 'Poppins, sans-serif', lineHeight: 1.2, textTransform: 'uppercase' }}>Name in Health and Wellness</h3>
              </div>
            </div>

            {/* License card + Stats row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 14, marginTop: 16 }}>
              {/* Ashok / License image — shown fully */}
              <div style={{
                position: 'relative', borderRadius: 18, overflow: 'hidden',
                background: 'linear-gradient(135deg, #f0f8fb, #e8f4f8)',
                border: '2px solid rgba(14,154,181,0.2)',
                boxShadow: '0 6px 20px rgba(14,154,181,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                minHeight: 130, padding: 10,
              }}>
                <Image
                  src="/ashok.jpg"
                  alt="Statutory CE FORM VII License – Acharjee Health Clinic"
                  width={100} height={110}
                  style={{ objectFit: 'contain', width: '100%', height: '110px' }}
                />
              </div>
              {/* Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 10 }}>
                {stats.map((s, i) => (
                  <div key={i} style={{
                    background: 'linear-gradient(135deg, #f8fcff 0%, #eef6f9 100%)',
                    borderRadius: 14, padding: '12px 16px',
                    border: '1.5px solid rgba(14,154,181,0.15)',
                    boxShadow: '0 3px 12px rgba(14,154,181,0.07)',
                    display: 'flex', alignItems: 'center', gap: 12,
                  }}>
                    <div style={{ fontSize: 22, fontWeight: 900, color: TEAL, fontFamily: 'Poppins, sans-serif', lineHeight: 1, minWidth: 52 }}>{s.value}</div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: '#6b8a9a', lineHeight: 1.3 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── COL 2: About Text + Why Choose Us ── */}
          <div data-animate="fade-right">
            <span style={{
              fontSize: 11.5, fontWeight: 800, color: TEAL,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              display: 'block', marginBottom: 14,
            }}>
              About Acharjee Health Clinic
            </span>
            <h2 style={{
              fontSize: 'clamp(28px, 3.2vw, 42px)', fontWeight: 800,
              color: '#0d2433', fontFamily: 'Poppins, sans-serif',
              lineHeight: 1.16, marginBottom: 20, letterSpacing: '-0.025em',
            }}>
              We Provide Exceptional{' '}
              <span style={{ color: TEAL }}>Patient Care</span>{' '}
              &amp; Comfort
            </h2>

            <p style={{
              fontSize: 15, color: '#5a7280', lineHeight: 1.8,
              marginBottom: 36, paddingLeft: 18,
              borderLeft: `3px solid ${TEAL}`,
            }}>
              At Acharjee Health Clinic, we offer a comprehensive range of healthcare services, placing your well-being at the center of everything we do. Our team is dedicated to providing personalized, compassionate medical care to each and every patient.
            </p>

            {/* Why Choose Us */}
            <div style={{
              background: 'linear-gradient(135deg, #f8fcff 0%, #f0f8fb 100%)',
              borderRadius: 20, padding: '28px 28px',
              border: '1.5px solid rgba(14,154,181,0.15)',
              boxShadow: '0 4px 20px rgba(14,154,181,0.08)',
              marginBottom: 36,
            }}>
              <h4 style={{
                fontSize: 15.5, fontWeight: 800, color: '#0d2433',
                fontFamily: 'Poppins, sans-serif', marginBottom: 20,
                display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <span style={{
                  width: 24, height: 24, borderRadius: '50%',
                  background: TEAL, display: 'inline-flex',
                  alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <svg width="12" height="12" fill="none" stroke="white" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Why Choose Us?
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                {whyItems.map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    background: '#fff', borderRadius: 12, padding: '12px 14px',
                    border: '1px solid rgba(14,154,181,0.12)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                  }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.transform = 'translateY(-2px)';
                      el.style.boxShadow = '0 6px 16px rgba(14,154,181,0.12)';
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.transform = 'translateY(0)';
                      el.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                    }}
                  >
                    <span style={{ fontSize: 18 }}>{item.icon}</span>
                    <span style={{ fontSize: 12.5, color: '#2d4a5a', fontWeight: 700, lineHeight: 1.35 }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/about"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                background: RED, color: '#fff',
                fontWeight: 700, fontSize: 14,
                padding: '14px 28px', borderRadius: 50,
                textDecoration: 'none',
                boxShadow: `0 6px 24px rgba(224,20,42,0.35)`,
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(-3px)';
                el.style.boxShadow = '0 12px 32px rgba(224,20,42,0.45)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = '0 6px 24px rgba(224,20,42,0.35)';
              }}
            >
              <span style={{
                width: 26, height: 26, borderRadius: '50%',
                background: 'rgba(255,255,255,0.22)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 13, fontWeight: 900,
              }}>→</span>
              More About Us
            </Link>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          #about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
