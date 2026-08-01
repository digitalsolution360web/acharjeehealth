'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

type Slide = {
  id: number;
  image: string;
  alt: string;
  badge: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  secondaryLabel?: string;
  meta?: string;
};

const slides: Slide[] = [
  {
    id: 1,
    image: '/hero-2.png',
    alt: 'Advanced specialist care in Asansol',
    badge: 'SPECIALIST CARE IN ASANSOL',
    title: 'Advanced Specialist Care, Closer to Home',
    description: 'Consult experienced doctors across ENT, Gastroenterology, Urology, Cardiology, Orthopaedics and more.',
    buttonLabel: 'Find a Doctor',
    buttonHref: '/doctors',
    secondaryLabel: 'Call 7364921002',
    meta: '15 SPECIALIST DOCTORS',
  },
  {
    id: 2,
    image: '/hero-3.png',
    alt: 'One clinic, multiple specialities',
    badge: 'ONE CLINIC. MULTIPLE SPECIALITIES.',
    title: 'One Clinic. Multiple Specialities.',
    description: 'Browse by department, search by doctor and book directly through WhatsApp.',
    buttonLabel: 'Browse Departments',
    buttonHref: '/services',
    meta: 'Integrated bookings, care and support',
  },
  {
    id: 3,
    image: '/hero-4.png',
    alt: 'Integrated patient support services',
    badge: 'INTEGRATED PATIENT SUPPORT',
    title: 'Diagnostics, Hearing Care and Pharmacy',
    description: 'Convenient patient services designed around a simpler clinic journey.',
    buttonLabel: 'Explore Services',
    buttonHref: '/services',
    meta: 'Patient-friendly care under one roof',
  },
  {
    id: 4,
    image: '/banner.png',
    alt: '48 years of service legacy of trust and care',
    badge: '48 YEARS OF SERVICE',
    title: 'A Legacy of Trust and Care',
    description: 'Serving families in Asansol with continuity, compassion and specialist access.',
    buttonLabel: 'Learn More',
    buttonHref: '/about',
    meta: 'Trusted care for decades',
  },
];

const INTERVAL = 3000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [key, setKey] = useState(0);

  const goTo = useCallback((idx: number) => {
    setCurrent(idx);
    setKey((k) => k + 1);
  }, []);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, INTERVAL);
    return () => clearInterval(t);
  }, [paused, next]);

  return (
    <section style={{ position: 'relative', width: '100%', overflow: 'hidden', background: '#f8fafc' }}>
      {/* ── Slide Banner Container ── */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 'clamp(420px, 48vw, 640px)',
          overflow: 'hidden',
          userSelect: 'none',
          background: '#e2e8f0',
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          {slides.map((s, i) => (
            <div
              key={s.id}
              style={{
                position: 'absolute',
                inset: 0,
                transition: 'opacity 700ms ease-in-out',
                opacity: i === current ? 1 : 0,
                zIndex: i === current ? 2 : 1,
              }}
            >
              <Image
                src={s.image}
                alt={s.alt}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                priority={i === 0}
                sizes="100vw"
              />

              {/* Dark subtle gradient overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(90deg, rgba(15,23,42,0.7) 0%, rgba(15,23,42,0.3) 50%, rgba(15,23,42,0) 100%)',
                  zIndex: 2,
                }}
              />

              {/* Card Container aligned with Navbar logo container (maxWidth: 1520px) */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 10,
                  width: '100%',
                  height: '100%',
                  maxWidth: 1520,
                  margin: '0 auto',
                  padding: '0 clamp(16px, 3vw, 44px)',
                  display: 'flex',
                  alignItems: 'center',
                  pointerEvents: 'none',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    maxWidth: 540,
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    borderRadius: 24,
                    padding: 'clamp(20px, 3vw, 32px)',
                    boxShadow: '0 20px 60px rgba(15, 23, 42, 0.2)',
                    border: '1px solid rgba(255, 255, 255, 0.9)',
                    pointerEvents: 'auto',
                  }}
                >
                  {/* Badge */}
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      padding: '5px 12px',
                      borderRadius: 999,
                      background: '#e6f7fa',
                      border: '1px solid #b3e8f0',
                      color: '#0e9ab5',
                      fontSize: 11,
                      fontWeight: 800,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      marginBottom: 12,
                    }}
                  >
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#0e9ab5' }} />
                    {s.badge}
                  </div>

                  {/* Title */}
                  <h2
                    style={{
                      fontSize: 'clamp(20px, 2.5vw, 32px)',
                      fontWeight: 800,
                      color: '#0f172a',
                      lineHeight: 1.2,
                      letterSpacing: '-0.02em',
                      marginBottom: 12,
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {s.title}
                  </h2>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: 'clamp(13px, 1.2vw, 15px)',
                      color: '#475569',
                      lineHeight: 1.6,
                      marginBottom: 20,
                      fontWeight: 500,
                    }}
                  >
                    {s.description}
                  </p>

                  {/* Buttons */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12, marginBottom: s.meta ? 14 : 0 }}>
                    <a
                      href={s.buttonHref}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 8,
                        padding: '12px 24px',
                        borderRadius: 999,
                        background: 'linear-gradient(90deg, #0e9ab5, #15945D)',
                        color: '#ffffff',
                        fontWeight: 700,
                        fontSize: 14,
                        textDecoration: 'none',
                        boxShadow: '0 4px 16px rgba(14, 154, 181, 0.3)',
                      }}
                    >
                      <span>{s.buttonLabel}</span>
                      <span>→</span>
                    </a>

                    {s.secondaryLabel ? (
                      <a
                        href="tel:7364921002"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 6,
                          padding: '10px 18px',
                          borderRadius: 999,
                          background: '#f1f5f9',
                          border: '1px solid #cbd5e1',
                          color: '#334155',
                          fontSize: 13,
                          fontWeight: 600,
                          textDecoration: 'none',
                        }}
                      >
                        <span>📞</span>
                        <span>{s.secondaryLabel}</span>
                      </a>
                    ) : null}
                  </div>

                  {/* Meta */}
                  {s.meta ? (
                    <div
                      style={{
                        paddingTop: 12,
                        borderTop: '1px solid #f1f5f9',
                        fontSize: 11,
                        fontWeight: 700,
                        color: '#15945D',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                      }}
                    >
                      ✓ {s.meta}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── PREV ARROW ── */}
        <button
          onClick={prev}
          aria-label="Previous"
          style={{
            position: 'absolute',
            left: 16,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 20,
            width: 44,
            height: 44,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255,255,255,0.25)',
            backdropFilter: 'blur(8px)',
            border: '2px solid rgba(255,255,255,0.5)',
            cursor: 'pointer',
            color: '#fff',
          }}
        >
          <svg style={{ width: 20, height: 20 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* ── NEXT ARROW ── */}
        <button
          onClick={next}
          aria-label="Next"
          style={{
            position: 'absolute',
            right: 16,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 20,
            width: 44,
            height: 44,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255,255,255,0.25)',
            backdropFilter: 'blur(8px)',
            border: '2px solid rgba(255,255,255,0.5)',
            cursor: 'pointer',
            color: '#fff',
          }}
        >
          <svg style={{ width: 20, height: 20 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* ── DOTS ── */}
        <div style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)', zIndex: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              style={{
                width: i === current ? 28 : 10,
                height: 10,
                borderRadius: 999,
                border: '2px solid rgba(255,255,255,0.8)',
                background: i === current ? '#ffffff' : 'rgba(255,255,255,0.45)',
                cursor: 'pointer',
                transition: 'all 300ms ease',
              }}
            />
          ))}
        </div>

        {/* ── PROGRESS LINE ── */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 5, zIndex: 20, background: 'rgba(255,255,255,0.2)' }}>
          <div
            key={key}
            style={{
              height: '100%',
              background: 'linear-gradient(90deg, #0e9ab5, #15945D)',
              animation: `growWidth ${INTERVAL}ms linear forwards`,
            }}
          />
        </div>
      </div>
    </section>
  );
}
