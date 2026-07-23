'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

const TEAL = '#0e9ab5';
const DARK_NAVY = '#0b3b4a';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    location: 'Asansol',
    rating: 5,
    text: 'My experience at Acharjee Health was truly exceptional. The doctors were extremely professional and took their time to understand my concerns. All reports were ready on time, and the treatment was highly effective. I highly recommend this clinic to anyone seeking quality healthcare.',
    avatar: '👨',
    color: '#0e9ab5',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    location: 'Durgapur',
    rating: 5,
    text: 'I visited Acharjee Health for a consultation and was very impressed with the overall experience. The staff was courteous and the environment was clean. The doctor provided a thorough diagnosis and explained everything clearly. Excellent service from start to finish.',
    avatar: '👩',
    color: '#e91e63',
  },
  {
    id: 3,
    name: 'Amit Das',
    location: 'Dhanbad',
    rating: 5,
    text: 'I had an appointment with the ENT specialist and I must say the doctor was brilliant. Very knowledgeable and patient. The clinic staff handled everything smoothly, from registration to billing. Will definitely visit again whenever needed.',
    avatar: '👨‍💼',
    color: '#43a047',
  },
  {
    id: 4,
    name: 'Sunita Devi',
    location: 'Raniganj',
    rating: 4,
    text: 'The neurologist I met was outstanding. He carefully listened to all my symptoms and provided a clear treatment plan. The follow-up was also very smooth. I am feeling much better now. Thank you Acharjee Health for the excellent care.',
    avatar: '👩‍🦳',
    color: '#7b1fa2',
  },
  {
    id: 5,
    name: 'Suresh Patel',
    location: 'Jharia',
    rating: 5,
    text: 'Visited for a gastroenterology consultation. The doctor was extremely experienced and explained my condition in simple terms. The treatment started immediately and I noticed improvement within days. The entire team deserves appreciation for their dedication.',
    avatar: '👴',
    color: '#fb8c00',
  },
  {
    id: 6,
    name: 'Meera Singh',
    location: 'Burnpur',
    rating: 5,
    text: 'I brought my child to see the pediatrician and I was so relieved by how gentle and caring the doctor was. My child was comfortable throughout. The diagnosis was accurate and the medicine worked perfectly. Highly satisfied with the experience.',
    avatar: '👩‍👧',
    color: '#388e3c',
  },
  {
    id: 7,
    name: 'Vikram Rao',
    location: 'Asansol',
    rating: 5,
    text: 'I had my knee checked by the orthopedic specialist at Acharjee Health. The doctor was very thorough and explained all treatment options. The clinic is well-equipped and the staff is very supportive. I am very happy with the outcome of my treatment.',
    avatar: '🧑‍💼',
    color: '#1976d2',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {[1, 2, 3, 4, 5].map(i => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i <= rating ? '#f59e0b' : '#e2e8f0'} style={{ flexShrink: 0 }}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function PatientSpeak() {
  const [current, setCurrent] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const autoRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - cardsPerView);

  const startAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setCurrent(c => (c >= maxIndex ? 0 : c + 1));
    }, 4000);
  }, [maxIndex]);

  useEffect(() => {
    startAuto();
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [startAuto]);

  const goTo = (idx: number) => {
    setCurrent(Math.max(0, Math.min(idx, maxIndex)));
    startAuto();
  };

  const cardWidth = 100 / cardsPerView;
  const translateX = -(current * cardWidth);

  return (
    <section
      id="patients-speak"
      style={{
        background: 'linear-gradient(135deg, #0b3b4a 0%, #0e4d60 40%, #0e9ab5 100%)',
        padding: '80px 0',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Decorative circles */}
      <div style={{
        position: 'absolute', top: -80, right: -80,
        width: 300, height: 300, borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.07)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: -120, left: -60,
        width: 350, height: 350, borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.05)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1520, margin: '0 auto', padding: '0 clamp(16px, 4vw, 44px)', position: 'relative' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <span style={{
            display: 'inline-block',
            fontSize: 11.5,
            fontWeight: 700,
            letterSpacing: '0.2em',
            color: '#7dd3fc',
            textTransform: 'uppercase',
            marginBottom: 14,
          }}>Patient Testimonials</span>
          <h2 style={{
            fontSize: 'clamp(22px, 2.4vw, 28px)',
            fontWeight: 700,
            color: '#ffffff',
            fontFamily: 'Poppins, sans-serif',
            margin: '0 0 12px',
            lineHeight: 1.25,
          }}>
            What Our Patients <span style={{ color: '#7dd3fc' }}>Say</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 15.5, maxWidth: 520, margin: '0 auto' }}>
            Real experiences from our valued patients across Asansol, Durgapur and Jharkhand
          </p>
        </div>

        {/* Slider */}
        <div style={{ overflow: 'hidden', position: 'relative' }}>
          <div
            style={{
              display: 'flex',
              transform: `translateX(${translateX}%)`,
              transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              willChange: 'transform',
            }}
          >
            {testimonials.map((t) => (
              <div
                key={t.id}
                style={{
                  flex: `0 0 ${cardWidth}%`,
                  padding: '0 12px',
                  boxSizing: 'border-box',
                }}
              >
                <div className="ps-card">
                  {/* Quote Icon */}
                  <div className="ps-quote-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="rgba(14,154,181,0.15)">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Stars */}
                  <StarRating rating={t.rating} />

                  {/* Text */}
                  <p className="ps-text">{t.text}</p>

                  {/* Author */}
                  <div className="ps-author">
                    <div className="ps-avatar" style={{ background: `${t.color}22`, border: `2px solid ${t.color}44` }}>
                      <span style={{ fontSize: 22 }}>{t.avatar}</span>
                    </div>
                    <div>
                      <div className="ps-name">{t.name}</div>
                      <div className="ps-location">
                        <svg width="12" height="12" fill="none" stroke={t.color} strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {t.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16, marginTop: 40 }}>
          <button
            onClick={() => goTo(current - 1)}
            disabled={current === 0}
            style={{
              width: 42, height: 42, borderRadius: '50%',
              border: `2px solid ${current === 0 ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.6)'}`,
              background: 'rgba(255,255,255,0.1)',
              color: current === 0 ? 'rgba(255,255,255,0.3)' : '#fff',
              cursor: current === 0 ? 'not-allowed' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 20, fontWeight: 700, transition: 'all 0.2s',
              backdropFilter: 'blur(8px)',
            }}
            aria-label="Previous testimonials"
          >‹</button>

          <div style={{ display: 'flex', gap: 8 }}>
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                style={{
                  width: i === current ? 28 : 8,
                  height: 8,
                  borderRadius: 4,
                  background: i === current ? '#fff' : 'rgba(255,255,255,0.35)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: 0,
                }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => goTo(current + 1)}
            disabled={current >= maxIndex}
            style={{
              width: 42, height: 42, borderRadius: '50%',
              border: `2px solid ${current >= maxIndex ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.6)'}`,
              background: current >= maxIndex ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.2)',
              color: current >= maxIndex ? 'rgba(255,255,255,0.3)' : '#fff',
              cursor: current >= maxIndex ? 'not-allowed' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 20, fontWeight: 700, transition: 'all 0.2s',
              backdropFilter: 'blur(8px)',
            }}
            aria-label="Next testimonials"
          >›</button>
        </div>


      </div>

      <style>{`
        .ps-card {
          background: rgba(255, 255, 255, 0.97);
          border-radius: 20px;
          padding: 28px 24px 24px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          position: relative;
          border: 1px solid rgba(255,255,255,0.6);
          box-shadow: 0 8px 32px rgba(0,0,0,0.18);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          min-height: 280px;
        }
        .ps-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(0,0,0,0.25);
        }
        .ps-quote-icon {
          position: absolute;
          top: 20px;
          right: 20px;
          opacity: 0.6;
        }
        .ps-text {
          font-size: 14px;
          color: #374151;
          line-height: 1.7;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex: 1;
        }
        .ps-author {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 16px;
          border-top: 1px solid #f1f5f9;
          margin-top: auto;
        }
        .ps-avatar {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .ps-name {
          font-size: 14.5px;
          font-weight: 800;
          color: #0b3b4a;
          font-family: 'Poppins', sans-serif;
        }
        .ps-location {
          font-size: 12px;
          color: #64748b;
          display: flex;
          align-items: center;
          gap: 4px;
          margin-top: 2px;
          font-weight: 500;
        }
        .ps-stats-bar {
          display: flex;
          justify-content: center;
          gap: 0;
          margin-top: 56px;
          background: rgba(255,255,255,0.1);
          border-radius: 18px;
          padding: 24px 32px;
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.15);
          flex-wrap: wrap;
        }
        .ps-stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          flex: 1;
          min-width: 100px;
          padding: 8px 16px;
          border-right: 1px solid rgba(255,255,255,0.15);
        }
        .ps-stat-item:last-child { border-right: none; }
        .ps-stat-value {
          font-size: clamp(20px, 2.5vw, 28px);
          font-weight: 900;
          color: #ffffff;
          font-family: 'Poppins', sans-serif;
        }
        .ps-stat-label {
          font-size: 12px;
          color: rgba(255,255,255,0.7);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        @media (max-width: 640px) {
          .ps-stats-bar { gap: 12px; }
          .ps-stat-item { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.15); padding: 12px; }
          .ps-stat-item:last-child { border-bottom: none; }
        }
      `}</style>
    </section>
  );
}
