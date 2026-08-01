'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  { id: 1, image: '/hero-2.png', alt: 'Experience Matters – 48 Years of Healthcare' },
  { id: 2, image: '/hero-3.png', alt: 'Celebrating 46 Years of Healthcare Excellence' },
  { id: 3, image: '/hero-4.png', alt: '48 Years of Healing' },
];

const INTERVAL = 3000;
const TEAL = '#0e9ab5';
const SLATE_GRAY = '#4a6a78';

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
    <section className="relative w-full overflow-hidden bg-white hero-slide-container">
      {/* ── Slide Banner Container ── */}
      <div
        className="relative w-full hero-slider-height overflow-hidden select-none bg-gray-200"
        style={{ height: 'clamp(340px, 46vw, 620px)' }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {slides.map((s, i) => (
          <div
            key={s.id}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 2 : 1 }}
          >
            <Image
              src={s.image}
              alt={s.alt}
              fill
              className="object-cover object-center"
              priority={i === 0}
              sizes="100vw"
            />
            {/* Soft dark backing overlay to ensure slider controls show cleanly */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0,0,0,0.15)',
              zIndex: 3
            }} />
          </div>
        ))}

        {/* ── PREV ARROW ── */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
          style={{ background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(6px)', border: '2px solid rgba(255,255,255,0.4)', cursor: 'pointer' }}
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* ── NEXT ARROW ── */}
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
          style={{ background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(6px)', border: '2px solid rgba(255,255,255,0.4)', cursor: 'pointer' }}
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* ── DOTS ── */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              className="transition-all duration-300 rounded-full border-2 border-white/70"
              style={{
                width: i === current ? 28 : 10,
                height: 10,
                background: i === current ? '#fff' : 'rgba(255,255,255,0.45)',
                cursor: 'pointer'
              }}
            />
          ))}
        </div>

        {/* ── PROGRESS LINE ── */}
        <div className="absolute bottom-0 left-0 w-full h-1.5 z-10" style={{ background: 'rgba(255,255,255,0.2)' }}>
          <div
            key={key}
            className="h-full"
            style={{
              background: 'linear-gradient(90deg, #0e9ab5, #3aaa35)',
              animation: `growWidth ${INTERVAL}ms linear forwards`,
            }}
          />
        </div>
      </div>



    </section>
  );
}
