'use client';

import Link from 'next/link';

const TEAL = '#0e9ab5';
const GREEN = '#3aaa35';
const RED = '#e0142a';

export default function DoctorVideo() {
  return (
    <section
      id="doctor-video"
      style={{
        background: '#ffffff',
        padding: '72px 0',
        overflow: 'hidden',
        position: 'relative',
        borderTop: '1px solid #f0f2f8',
      }}
    >
      {/* Decorative background elements */}
      <div style={{
        position: 'absolute', top: -80, right: -80, width: 400, height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(14,154,181,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: -60, left: -60, width: 320, height: 320,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(58,170,53,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(16px, 4vw, 40px)', position: 'relative', zIndex: 1 }}>

        {/* ── Section Header ── */}
        <div style={{ textAlign: 'center', marginBottom: 44 }} data-animate="fade-up">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <div style={{ width: 28, height: 2, background: `linear-gradient(90deg, transparent, ${TEAL})`, borderRadius: 2 }} />
            <span style={{ fontSize: 11.5, fontWeight: 800, letterSpacing: '0.22em', color: TEAL, textTransform: 'uppercase' }}>
              Meet Our Doctors
            </span>
            <div style={{ width: 28, height: 2, background: `linear-gradient(90deg, ${TEAL}, transparent)`, borderRadius: 2 }} />
          </div>
          <h2 style={{
            fontSize: 'clamp(20px, 2.4vw, 30px)', fontWeight: 600,
            color: '#000000', fontFamily: 'Poppins, sans-serif',
            letterSpacing: '-0.01em', lineHeight: 1.15, marginBottom: 12,
          }}>
            Expert Doctor Consultation at{' '}
            <span style={{ color: TEAL }}>Acharjee Health Clinic</span>
          </h2>
          <p style={{ fontSize: 15.5, color: '#334155', maxWidth: 580, margin: '0 auto', lineHeight: 1.65 }}>
            Watch our experienced doctors share valuable insights on common health concerns, symptoms, and treatment options.
          </p>
        </div>

        {/* ── Main Layout: Video Left + Content Right ── */}
        <div
          id="doctor-video-grid"
          style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 48, alignItems: 'center' }}
        >

          {/* ── LEFT: Video Player ── */}
          <div style={{ position: 'relative', width: '100%', maxWidth: 650 }} data-animate="fade-left">
            {/* Decorative shadow card behind video */}


            <div style={{
              position: 'relative', zIndex: 1,
              borderRadius: 10,
              overflow: 'hidden',
              boxShadow: '0 28px 72px rgba(13,36,60,0.20)',
              border: '1px solid rgba(255,255,255,0.9)',
              background: '#000',
            }}>
              {/* Top accent bar */}
              <div style={{
                height: 4,
                background: `linear-gradient(90deg, ${TEAL}, ${GREEN}, ${TEAL})`,
              }} />

              {/* Video element - controls removed to prevent browser controls on hover */}
              <video
                autoPlay
                muted
                loop
                playsInline
                id="doctor-main-video"
                style={{
                  width: '100%',
                  height: 'clamp(320px, 55vw, 950px)',
                  objectFit: 'cover',
                  objectPosition: 'top',
                  display: 'block',
                }}
              >
                <source src="/All-Doctors-Final-2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Bottom badge overlay */}

            </div>
          </div>

          {/* ── RIGHT: Content ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }} data-animate="fade-right">

            {/* Text block */}
            <div>
              <p style={{ fontSize: 15, color: '#334155', lineHeight: 1.8, marginBottom: 0, paddingLeft: 16, borderLeft: `3px solid ${TEAL}` }}>
                At Acharjee Health Clinic &amp; Pharmacy, we focus on accurate diagnosis and patient-focused care across ENT, skin, neurology, urology, and general health. If you are looking for an ENT doctor in Asansol or need expert guidance for your health concerns, our specialists are here to help.
              </p>
            </div>

            {/* Feature list */}
            {[
              { icon: '🩺', color: TEAL, title: 'Multi-Specialty Care', desc: 'ENT, Skin, Neurology, Urology & General Health under one roof.' },
              { icon: '🏥', color: GREEN, title: 'Asansol\'s Trusted Clinic', desc: 'Serving the community for 48+ years with compassion and excellence.' },
              { icon: '⚡', color: RED, title: 'Rapid Consultation', desc: 'Connect with expert doctors within 60 seconds during working hours.' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', gap: 16, alignItems: 'flex-start',
                background: '#fff', borderRadius: 16, padding: '16px 18px',
                border: '1.5px solid rgba(14,154,181,0.12)',
                boxShadow: '0 3px 16px rgba(0,0,0,0.05)',
                transition: 'transform 0.22s, box-shadow 0.22s',
              }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = 'translateX(6px)';
                  el.style.boxShadow = `0 8px 24px ${item.color}18`;
                  el.style.borderColor = `${item.color}40`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = 'translateX(0)';
                  el.style.boxShadow = '0 3px 16px rgba(0,0,0,0.05)';
                  el.style.borderColor = 'rgba(14,154,181,0.12)';
                }}
              >
                <div style={{
                  width: 46, height: 46, borderRadius: 12, flexShrink: 0,
                  background: `${item.color}15`,
                  border: `1.5px solid ${item.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 20,
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: '#0d2433', fontFamily: 'Poppins, sans-serif', marginBottom: 4 }}>{item.title}</div>
                  <div style={{ fontSize: 13, color: '#475569', lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              </div>
            ))}

            {/* CTA */}
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 4 }}>
              <Link
                href="/doctors"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: `linear-gradient(135deg, ${TEAL}, #0b7a91)`,
                  color: '#fff', fontWeight: 700, fontSize: 14,
                  padding: '13px 26px', borderRadius: 50,
                  textDecoration: 'none',
                  boxShadow: `0 8px 24px rgba(14,154,181,0.38)`,
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = 'translateY(-3px)';
                  el.style.boxShadow = '0 14px 32px rgba(14,154,181,0.50)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = 'translateY(0)';
                  el.style.boxShadow = '0 8px 24px rgba(14,154,181,0.38)';
                }}
              >
                Meet Our Doctors
                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/appointment"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: '#fff', color: RED, fontWeight: 700, fontSize: 14,
                  padding: '13px 26px', borderRadius: 50,
                  textDecoration: 'none', border: `2px solid ${RED}30`,
                  boxShadow: '0 4px 16px rgba(0,0,0,0.07)',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = 'translateY(-3px)';
                  el.style.borderColor = RED;
                  el.style.boxShadow = `0 10px 28px rgba(224,20,42,0.20)`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = 'translateY(0)';
                  el.style.borderColor = `${RED}30`;
                  el.style.boxShadow = '0 4px 16px rgba(0,0,0,0.07)';
                }}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          #doctor-video-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 640px) {
          #doctor-main-video { height: 600px !important; }
          #doctor-video { padding: 48px 0 !important; }
        }
      `}</style>
    </section>
  );
}
