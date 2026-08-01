'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

function CircleCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let startTimestamp: number | null = null;
    const duration = 2000;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easedProgress = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    window.requestAnimationFrame(step);
  }, [started, target]);

  return <span ref={ref}>{count}</span>;
}

export default function LegacyBanner() {
  return (
    <section style={{ width: '100%', background: '#073c67', color: '#ffffff', padding: '64px 0', position: 'relative', overflow: 'hidden' }}>
      <div
        style={{
          maxWidth: 1520,
          margin: '0 auto',
          padding: '0 clamp(16px, 3vw, 44px)',
          width: '100%',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 32 }}>
          
          {/* Left Text Content */}
          <div style={{ flex: '1 1 480px', maxWidth: 720 }}>
            <span
              style={{
                display: 'inline-block',
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: '0.18em',
                color: '#3aaa35',
                textTransform: 'uppercase',
                marginBottom: 12,
              }}
            >
              OUR LEGACY
            </span>

            <h2
              style={{
                fontSize: 'clamp(28px, 3.2vw, 44px)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.2,
                marginBottom: 18,
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Trusted Healthcare Since 1978
            </h2>

            <p
              style={{
                fontSize: 16,
                color: '#e2e8f0',
                lineHeight: 1.65,
                marginBottom: 28,
                maxWidth: 580,
              }}
            >
              The production website will present the verified founder story, clinic history, awards, photographs and milestones in a premium timeline.
            </p>

            <div>
              <Link
                href="/about"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '14px 32px',
                  borderRadius: 14,
                  background: '#15945D',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: 16,
                  textDecoration: 'none',
                  boxShadow: '0 6px 20px rgba(21, 148, 93, 0.4)',
                  transition: 'all 0.2s ease',
                }}
              >
                Contact the Clinic
              </Link>
            </div>
          </div>

          {/* Right White Circle Badge with Animated Counter */}
          <div style={{ flexShrink: 0, margin: '0 auto' }}>
            <div
              style={{
                width: 220,
                height: 220,
                borderRadius: '50%',
                background: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 16px 40px rgba(0, 0, 0, 0.25)',
                textAlign: 'center',
                padding: 16,
              }}
            >
              <span style={{ fontSize: 62, fontWeight: 900, color: '#073c67', lineHeight: 1, fontFamily: "'Poppins', sans-serif" }}>
                <CircleCounter target={48} />
              </span>
              <span style={{ fontSize: 16, fontWeight: 700, color: '#073c67', marginTop: 4 }}>
                Years of Service
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
