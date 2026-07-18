'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const TEAL = '#0e9ab5';
const GREEN = '#3aaa35';
const RED = '#e0142a';

const stats = [
  {
    id: 'patients',
    target: 20000,
    suffix: '+',
    label: 'Satisfied Patients',
    desc: 'We are proud to have provided top-quality care to over 20,000 satisfied patients, ensuring their health and well-being.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4a6 6 0 100 12A6 6 0 0016 4z" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 28c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M22 10l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: TEAL,
    bg: 'linear-gradient(135deg, #0e9ab5 0%, #076f84 100%)',
    glow: 'rgba(14,154,181,0.35)',
  },
  {
    id: 'concerns',
    target: 68,
    suffix: '%',
    label: 'Health Concerns Worldwide',
    desc: 'Many adults worldwide experience health concerns that are preventable with regular check-ups and early intervention.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="white" strokeWidth="2" />
        <path d="M16 10v6l4 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 6l2 2M22 6l-2 2M10 26l2-2M22 26l-2-2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    color: GREEN,
    bg: 'linear-gradient(135deg, #3aaa35 0%, #1e7a1b 100%)',
    glow: 'rgba(58,170,53,0.35)',
  },
  {
    id: 'access',
    target: 25,
    suffix: '%',
    label: 'Access to Medical Care',
    desc: 'People globally still need better access to essential medical services and treatments that could save lives.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="8" width="20" height="18" rx="3" stroke="white" strokeWidth="2" />
        <path d="M12 8V6a4 4 0 018 0v2" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M13 17h6M16 14v6" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    color: RED,
    bg: 'linear-gradient(135deg, #e0142a 0%, #a30d1e 100%)',
    glow: 'rgba(224,20,42,0.35)',
  },
  {
    id: 'preventable',
    target: 80,
    suffix: '%',
    label: 'Preventable Health Problems',
    desc: '80% of health problems can be avoided or cured with timely medical attention and expert care by professionals.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4l2.5 7.5H26l-6.5 4.5 2.5 7.5L16 19l-6 4.5 2.5-7.5L6 11.5h7.5z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
    color: '#8b5cf6',
    bg: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
    glow: 'rgba(139,92,246,0.35)',
  },
];

// Helper Counter component to animate counting from 0 when visible
function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    const end = target;
    const duration = 2000; // Animation duration 2 seconds
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing curve (ease-out quad)
      const easeProgress = progress * (2 - progress);
      const currentCount = Math.floor(easeProgress * end);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, target]);

  return (
    <span ref={elementRef}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function HealthStats() {
  return (
    <section
      id="health-stats"
      style={{
        background: 'linear-gradient(135deg, #0d2847 0%, #153c65 55%, #0d2139 100%)',
        padding: '48px 0 24px 0',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Background grid */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.04,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
        backgroundSize: '36px 36px',
        pointerEvents: 'none',
      }} />

      {/* Glow blobs */}
      <div style={{ position: 'absolute', top: -80, left: -80, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(14,154,181,0.15) 0%, transparent 70%)', filter: 'blur(48px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -60, right: -60, width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(58,170,53,0.12) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(16px, 4vw, 40px)', position: 'relative', zIndex: 1 }}>

        {/* ── Header ── */}
        <div style={{ textAlign: 'center', marginBottom: 52 }} data-animate="fade-up">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <div style={{ width: 28, height: 2, background: `linear-gradient(90deg, transparent, ${TEAL})`, borderRadius: 2 }} />
            <span style={{ fontSize: 11.5, fontWeight: 800, letterSpacing: '0.22em', color: TEAL, textTransform: 'uppercase' }}>
              Healthcare Solution
            </span>
            <div style={{ width: 28, height: 2, background: `linear-gradient(90deg, ${TEAL}, transparent)`, borderRadius: 2 }} />
          </div>

          <h2 style={{
            fontSize: 'clamp(20px, 2.4vw, 30px)', fontWeight: 600,
            color: '#fff', fontFamily: 'Poppins, sans-serif',
            letterSpacing: '-0.01em', lineHeight: 1.2, marginBottom: 20,
          }}>
            Your Health Is Our{' '}
            <span style={{
              background: `linear-gradient(135deg, ${TEAL}, #7de8f8)`,
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>Top Priority</span>
          </h2>

          <p style={{ fontSize: 15.5, color: '#e2e8f0', maxWidth: 520, margin: '0 auto 28px', lineHeight: 1.7 }}>
            Delivering exceptional, compassionate healthcare solutions that transform lives — one patient at a time.
          </p>

          <Link
            href="/about"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: `linear-gradient(135deg, ${TEAL}, #0b7a91)`,
              color: '#fff', fontWeight: 700, fontSize: 14.5,
              padding: '13px 30px', borderRadius: 50,
              textDecoration: 'none',
              boxShadow: `0 8px 28px rgba(14,154,181,0.40)`,
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              letterSpacing: '0.02em',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = 'translateY(-3px)';
              el.style.boxShadow = '0 14px 36px rgba(14,154,181,0.55)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = 'translateY(0)';
              el.style.boxShadow = '0 8px 28px rgba(14,154,181,0.40)';
            }}
          >
            Learn More
            <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* ── Stats Grid ── */}
        <div
          id="health-stats-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}
        >
          {stats.map((stat) => (
            <div
              key={stat.id}
              id={`stat-${stat.id}`}
              data-animate="zoom-in"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.09)',
                borderRadius: 22,
                padding: '36px 28px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.32s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s, border-color 0.3s, background 0.3s, opacity 0.85s, transform 0.85s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(-8px)';
                el.style.background = 'rgba(255,255,255,0.07)';
                el.style.borderColor = `${stat.color}55`;
                el.style.boxShadow = `0 24px 56px ${stat.glow}`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(0)';
                el.style.background = 'rgba(255,255,255,0.04)';
                el.style.borderColor = 'rgba(255,255,255,0.09)';
                el.style.boxShadow = 'none';
              }}
            >
              {/* Top glow line on hover */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                background: stat.bg, borderRadius: '22px 22px 0 0', opacity: 0.8,
              }} />

              {/* Icon circle */}
              <div style={{
                width: 60, height: 60, borderRadius: 16,
                background: stat.bg,
                boxShadow: `0 8px 24px ${stat.glow}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 24,
              }}>
                {stat.icon}
              </div>

              {/* Big number */}
              <div style={{
                fontSize: 'clamp(34px, 2.8vw, 44px)', fontWeight: 900,
                fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.03em',
                lineHeight: 1, marginBottom: 8,
                background: `linear-gradient(135deg, #fff 0%, ${stat.color} 100%)`,
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
                <Counter target={stat.target} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <div style={{
                fontSize: 14, fontWeight: 800, color: '#e2e8f0',
                fontFamily: 'Poppins, sans-serif', marginBottom: 12,
                letterSpacing: '-0.01em',
              }}>
                {stat.label}
              </div>

              {/* Divider */}
              <div style={{ width: 40, height: 2, background: stat.bg, borderRadius: 2, marginBottom: 14, opacity: 0.7 }} />

              {/* Desc */}
              <p style={{ fontSize: 13, color: '#e2e8f0', lineHeight: 1.7, margin: 0 }}>
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1200px) {
          #health-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          #health-stats-grid { grid-template-columns: 1fr !important; }
          #health-stats { padding: 48px 0 28px 0 !important; }
        }
      `}</style>
    </section>
  );
}
