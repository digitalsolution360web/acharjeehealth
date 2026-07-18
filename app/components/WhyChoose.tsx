'use client';

import Image from 'next/image';
import Link from 'next/link';

const TEAL = '#0e9ab5';
const RED = '#e0142a';

const features = [
  'Seamless Care',
  'Patient-Centered Approach',
  'Integrated Care',
  'Tailored Treatment Plans',
  'Comprehensive Healthcare Services',
  'Advanced Medical Technology',
  'Highly Experienced Doctors',
  'Positive Patient Feedback',
];

const stats = [
  { number: '48+', label: 'Years of Excellence' },
  { number: '50k+', label: 'Patients Treated' },
  { number: '20+', label: 'Specialist Doctors' },
];

export default function WhyChoose() {
  return (
    <section id="why-choose" style={{ background: '#fff', padding: '36px 0 24px 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1520, margin: '0 auto', padding: '0 clamp(16px, 4vw, 44px)' }}>
        <div
          id="why-choose-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            minHeight: 520,
            borderRadius: 20,
            overflow: 'hidden',
            boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
            border: '1px solid #eaeef2',
            margin: '0 0 0 0',
          }}
        >

          {/* ── LEFT: Image ── */}
          <div style={{ position: 'relative', minHeight: 480, overflow: 'hidden' }} data-animate="fade-left">
            <Image
              src="/1.jpeg"
              alt="Acharjee Health Clinic building"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Subtle gradient overlay on right edge for blending */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to right, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.08) 60%, rgba(255,255,255,0.1) 100%)',
            }} />

            {/* Floating stats bar at bottom */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: 'rgba(14,154,181,0.92)',
              backdropFilter: 'blur(8px)',
              display: 'flex', justifyContent: 'space-around', padding: '18px 24px',
            }} id="stats-bar">
              {stats.map((s, i) => (
                <div key={i} style={{ textAlign: 'center', color: '#fff' }}>
                  <div style={{ fontSize: 26, fontWeight: 800, fontFamily: 'Poppins, sans-serif', lineHeight: 1 }}>{s.number}</div>
                  <div style={{ fontSize: 11.5, fontWeight: 500, opacity: 0.9, marginTop: 4, letterSpacing: '0.04em' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Content ── */}
          <div
            data-animate="fade-right"
            style={{
              background: '#ffffff',
              padding: '48px 56px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              borderLeft: `1px solid #eaeef2`,
            }}
            id="why-choose-content"
          >

            {/* Eyebrow */}
            <span style={{
              display: 'inline-block', fontSize: 11.5, fontWeight: 700,
              letterSpacing: '0.2em', color: TEAL, textTransform: 'uppercase',
              marginBottom: 14,
            }}>
              About Acharjee Health Clinic
            </span>

            {/* Heading */}
            <h2 style={{
              fontSize: 'clamp(20px, 2.4vw, 30px)',
              fontWeight: 600,
              color: '#000000',
              lineHeight: 1.25,
              fontFamily: 'Poppins, sans-serif',
              marginBottom: 20,
              letterSpacing: '-0.01em',
            }}>
              We Provide Exceptional{' '}
              <span style={{ color: TEAL }}>Patient Care</span>{' '}
              &amp; Comfort
            </h2>

            {/* Body text */}
            <p style={{
              fontSize: 15, color: '#334155', lineHeight: 1.8,
              marginBottom: 28, maxWidth: 540,
            }}>
              At Acharjee Health Clinic, your health is our priority. We offer comprehensive medical services with a focus on personalized care and compassion, ensuring that every patient feels supported and valued throughout their journey with us.
            </p>

            {/* Feature grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '10px 24px',
              marginBottom: 30,
            }}>
              {features.map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 9 }}>
                  {/* Custom tick */}
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                    <path d="M3 10l5 5 9-9" stroke={RED} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7 10l3 3 5-5" stroke={RED} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity=".4" />
                  </svg>
                  <span style={{ fontSize: 13.5, color: '#1e293b', fontWeight: 600, lineHeight: 1.4 }}>{f}</span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div style={{ width: '100%', height: 1, background: '#e2e8f0', marginBottom: 24 }} />

            {/* Body closing */}
            <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.75, marginBottom: 28 }}>
              Our commitment to your well-being drives us to deliver the highest standards of medical excellence — because every patient deserves the very best.
            </p>

            {/* CTA */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
              <Link
                href="/about"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: `linear-gradient(135deg, ${TEAL}, #0b7a91)`,
                  color: '#fff', fontWeight: 700, fontSize: 14,
                  padding: '13px 28px', borderRadius: 8, textDecoration: 'none',
                  boxShadow: `0 6px 20px rgba(14,154,181,0.35)`,
                  transition: 'all 0.22s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
              >
                Learn About Us
                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/appointment"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  color: RED, fontWeight: 700, fontSize: 14, textDecoration: 'none',
                  transition: 'gap 0.2s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.gap = '12px'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.gap = '8px'; }}
              >
                Book Appointment
                <svg width="14" height="14" fill="none" stroke={RED} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 900px) {
          #why-choose-grid { grid-template-columns: 1fr !important; }
          #why-choose-content { padding: 40px 24px !important; }
          #stats-bar { padding: 14px 16px !important; }
        }
        @media (max-width: 640px) {
          #why-choose { padding: 48px 0 28px 0 !important; }
          #why-choose-content { padding: 28px 16px !important; }
        }
      `}</style>
    </section>
  );
}
