'use client';

import { useState, useEffect, useRef } from 'react';

const stats = [
  { id: 1, target: 48, label: 'Years of Trust' },
  { id: 2, target: 15, label: 'Specialist Doctors' },
  { id: 3, target: 9, label: 'Departments' },
  { id: 4, target: 3, label: 'Integrated Services' },
];

function SingleCounter({ target }: { target: number }) {
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
    const duration = 1800; // 1.8 seconds

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

export default function CounterBar() {
  return (
    <div 
      style={{
        position: 'relative',
        zIndex: 40,
        width: '100%',
        height: 0,
        overflow: 'visible',
        background: 'transparent',
        margin: 0,
        padding: 0,
      }}
    >
      <div
        style={{
          maxWidth: 1520,
          margin: '0 auto',
          padding: '0 clamp(16px, 3vw, 44px)',
          transform: 'translateY(-50%)',
          width: '100%',
        }}
      >
        <div
          style={{
            width: '100%',
            background: '#ffffff',
            borderRadius: 20,
            padding: '18px 20px',
            boxShadow: '0 16px 40px rgba(15, 23, 42, 0.12)',
            border: '1px solid #e2e8f0',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            alignItems: 'center',
          }}
          id="counter-bar-grid"
        >
          {stats.map((stat, idx) => (
            <div
              key={stat.id}
              style={{
                textAlign: 'center',
                padding: '6px 12px',
                borderRight: idx < stats.length - 1 ? '1px solid #f1f5f9' : 'none',
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(20px, 2.2vw, 32px)',
                  fontWeight: 900,
                  color: '#073c67',
                  lineHeight: 1.15,
                  fontFamily: "'Poppins', sans-serif",
                  letterSpacing: '-0.02em',
                }}
              >
                <SingleCounter target={stat.target} />
              </div>
              <div
                style={{
                  fontSize: 'clamp(11px, 0.9vw, 13px)',
                  fontWeight: 600,
                  color: '#64748b',
                  marginTop: 3,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #counter-bar-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px;
            padding: 14px 12px !important;
          }
          #counter-bar-grid > div {
            border-right: none !important;
            border-bottom: 1px solid #f1f5f9;
            padding-bottom: 8px;
          }
          #counter-bar-grid > div:nth-child(3), #counter-bar-grid > div:nth-child(4) {
            border-bottom: none !important;
          }
        }
      `}</style>
    </div>
  );
}
