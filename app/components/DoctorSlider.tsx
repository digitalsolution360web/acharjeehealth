'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TEAL = '#0e9ab5';
const DARK_NAVY = '#0b3b4a';

const slugs: Record<number, string> = {
  1: 'dr-binidra-banerjee-leading-gastroenterologist-in-asansol-durgapur-dhanbad-and-jharkhand',
  2: 'dr-atri-bandyopadhyay-doctor-in-asansol',
  3: 'dr-rupam-sil-ent-specialist-in-asansol-west-bengal',
  4: 'best-neurologist-in-asansol-2',
  5: 'top-dermatologist-in-asansol-kolkata',
  6: 'gastroenterologist-in-asansol-kolkata',
  7: 'gastroenterologist-in-asansol-dr-p-kranthi-kumar',
  8: 'best-neurologist-in-asansol',
  9: 'dr-rituparna-mukherjee-mbbs-nilratan-sirkar-medical-college-hospital-kolkata',
  10: 'top-urologist-in-asansol-kolkata',
  11: 'cardiologists-in-asansol-kolkata',
  12: 'top-gynaecologist-in-asansol-kolkata',
  13: 'top-pediatrician-in-asansol-kolkata',
  14: 'best-orthopaedic-knee-replacement-surgeon-in-asansol-dr-ratnakar-rao-dr-ratnakar-rao',
  15: 'dr-riya-sinha-ent-head-and-neck-surgeon-mbbs-ms-ent-head-and-neck-surgery',
};

const doctors = [
  { id: 1, image: '/d.png', name: 'Dr. Binidra Banerjee', specialty: 'Gastroenterologist', exp: '15+ Yrs', accentBorder: '#e91e63', badge: 'Gastro' },
  { id: 2, image: '/d1.png', name: 'Dr. Atri Bandyopadhyay', specialty: 'ENT & Head Neck Surgeon', exp: '12+ Yrs', accentBorder: '#00acc1', badge: 'ENT' },
  { id: 3, image: '/d2.png', name: 'Dr. Rupam Sil', specialty: 'ENT & Head Neck Surgeon', exp: '10+ Yrs', accentBorder: '#f9a825', badge: 'ENT' },
  { id: 4, image: '/d3.png', name: 'Dr. Ananth Egoor', specialty: 'Neurologist', exp: '18+ Yrs', accentBorder: '#e53935', badge: 'Neuro' },
  { id: 5, image: '/d4.png', name: 'Dr. Shibasis Chatterjee', specialty: 'Consultant Dermatologist', exp: '14+ Yrs', accentBorder: '#43a047', badge: 'Derma' },
  { id: 6, image: '/d5.png', name: 'Dr. Raghuram Tangirala', specialty: 'Gastroenterologist', exp: '20+ Yrs', accentBorder: '#3f51b5', badge: 'Gastro' },
  { id: 7, image: '/d6.jpeg', name: 'Dr. P. Kranthi Kumar', specialty: 'Consultant Gastroenterologist', exp: '16+ Yrs', accentBorder: '#fb8c00', badge: 'Gastro' },
  { id: 8, image: '/d7.jpg', name: 'Dr. Sanjeev Kr. Suman', specialty: 'Neurologist', exp: '13+ Yrs', accentBorder: '#7b1fa2', badge: 'Neuro' },
  { id: 9, image: '/d8.png', name: 'Dr. Rituparna Mukherjee', specialty: 'ENT & Head Neck Surgeon', exp: '11+ Yrs', accentBorder: '#1565c0', badge: 'ENT' },
  { id: 10, image: '/d9.png', name: 'Dr. K. Seshu Mohan', specialty: 'Urologist', exp: '17+ Yrs', accentBorder: '#00796b', badge: 'Urology' },
  { id: 11, image: '/d10.png', name: 'Dr. Pradip Sarkar', specialty: 'Cardiologist', exp: '22+ Yrs', accentBorder: '#558b2f', badge: 'Cardio' },
  { id: 12, image: '/d11.png', name: 'Dr. Aishwarya Bhattacharya', specialty: 'Gynaecologist & Obstetrician', exp: '9+ Yrs', accentBorder: '#d81b60', badge: 'Gynae' },
  { id: 13, image: '/d12.png', name: 'Dr. Nibedita Kabiraj', specialty: 'Child Specialist', exp: '12+ Yrs', accentBorder: '#388e3c', badge: 'Paeds' },
  { id: 14, image: '/d13.png', name: 'Dr. Ratnakar Rao K', specialty: 'Orthopaedic', exp: '19+ Yrs', accentBorder: '#1976d2', badge: 'Ortho' },
  { id: 15, image: '/d14.png', name: 'Dr. Riya Sinha', specialty: 'ENT & Head Neck Surgeon', exp: '8+ Yrs', accentBorder: '#3949ab', badge: 'ENT' },
];

export default function DoctorSlider() {
  const [current, setCurrent] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);
  const [isAnimating, setIsAnimating] = useState(false);
  const [enquiryDoctor, setEnquiryDoctor] = useState<typeof doctors[0] | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const autoRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 600) setCardsPerView(1);
      else if (window.innerWidth < 900) setCardsPerView(2);
      else if (window.innerWidth < 1200) setCardsPerView(3);
      else setCardsPerView(4);
    };
    updateCards();
    window.addEventListener('resize', updateCards);
    return () => window.removeEventListener('resize', updateCards);
  }, []);

  const maxIndex = Math.max(0, doctors.length - cardsPerView);

  const goTo = useCallback((idx: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(Math.max(0, Math.min(idx, maxIndex)));
    setTimeout(() => setIsAnimating(false), 400);
  }, [isAnimating, maxIndex]);

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  // Auto-slide
  useEffect(() => {
    autoRef.current = setInterval(() => {
      setCurrent(c => (c >= maxIndex ? 0 : c + 1));
    }, 3500);
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [maxIndex]);

  const resetAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setCurrent(c => (c >= maxIndex ? 0 : c + 1));
    }, 3500);
  };

  const handlePrev = () => { prev(); resetAuto(); };
  const handleNext = () => { next(); resetAuto(); };

  const cardWidth = 100 / cardsPerView;
  const translateX = -(current * cardWidth);

  return (
    <section id="doctor-slider-section" style={{ background: 'linear-gradient(180deg, #f0fafd 0%, #ffffff 100%)', padding: '72px 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1520, margin: '0 auto', padding: '0 clamp(16px, 4vw, 44px)' }}>

        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <span style={{
              display: 'inline-block',
              fontSize: 11.5,
              fontWeight: 700,
              letterSpacing: '0.2em',
              color: TEAL,
              textTransform: 'uppercase',
              marginBottom: 14,
            }}>Our Specialists</span>
            <h2 style={{
              fontSize: 'clamp(22px, 2.4vw, 28px)',
              fontWeight: 700,
              color: DARK_NAVY,
              fontFamily: 'Poppins, sans-serif',
              margin: 0,
              lineHeight: 1.25,
            }}>
              Meet Our Expert <span style={{ color: TEAL }}>Doctors</span>
            </h2>
            <p style={{ color: '#64748b', fontSize: 15, margin: '10px 0 0', maxWidth: 460 }}>
              Experienced specialists dedicated to providing world-class healthcare in Asansol & West Bengal.
            </p>
          </div>

          {/* Arrow Controls */}
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <button
              onClick={handlePrev}
              disabled={current === 0}
              style={{
                width: 46, height: 46, borderRadius: '50%',
                border: `2px solid ${current === 0 ? '#e2e8f0' : TEAL}`,
                background: current === 0 ? '#f8fafc' : '#fff',
                color: current === 0 ? '#cbd5e1' : TEAL,
                cursor: current === 0 ? 'not-allowed' : 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 20, fontWeight: 700,
                transition: 'all 0.2s',
                boxShadow: current === 0 ? 'none' : '0 4px 14px rgba(14,154,181,0.18)',
              }}
              aria-label="Previous doctors"
            >
              ‹
            </button>
            <button
              onClick={handleNext}
              disabled={current >= maxIndex}
              style={{
                width: 46, height: 46, borderRadius: '50%',
                border: `2px solid ${current >= maxIndex ? '#e2e8f0' : TEAL}`,
                background: current >= maxIndex ? '#f8fafc' : `linear-gradient(135deg, ${TEAL}, #0b3b4a)`,
                color: current >= maxIndex ? '#cbd5e1' : '#fff',
                cursor: current >= maxIndex ? 'not-allowed' : 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 20, fontWeight: 700,
                transition: 'all 0.2s',
                boxShadow: current >= maxIndex ? 'none' : '0 4px 14px rgba(14,154,181,0.28)',
              }}
              aria-label="Next doctors"
            >
              ›
            </button>
          </div>
        </div>

        {/* Slider Track */}
        <div style={{ overflow: 'hidden', borderRadius: 20, position: 'relative' }}>
          <div
            ref={trackRef}
            style={{
              display: 'flex',
              transform: `translateX(${translateX}%)`,
              transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
              willChange: 'transform',
            }}
          >
            {doctors.map((doc) => (
              <div
                key={doc.id}
                style={{
                  flex: `0 0 ${cardWidth}%`,
                  padding: '0 10px',
                  boxSizing: 'border-box',
                }}
              >
                <div className="ds-card">
                  {/* Specialty Badge */}
                  <span className="ds-badge" style={{ background: doc.accentBorder }}>{doc.badge}</span>

                  {/* Image Area */}
                  <div className="ds-img-wrap" style={{ background: `${doc.accentBorder}14` }}>
                    <div className="ds-img-ring" style={{ borderColor: doc.accentBorder }}>
                      <Image
                        src={doc.image}
                        alt={doc.name}
                        width={120}
                        height={120}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                      />
                    </div>
                    {/* Decorative arc */}
                    <div className="ds-arc" style={{ borderColor: `${doc.accentBorder}30` }} />
                  </div>

                  {/* Content */}
                  <div className="ds-body">
                    <h3 className="ds-name">{doc.name}</h3>
                    <p className="ds-spec" style={{ color: doc.accentBorder }}>{doc.specialty}</p>

                    <div className="ds-stats">
                      <div className="ds-stat">
                        <span className="ds-stat-val" style={{ color: doc.accentBorder }}>{doc.exp}</span>
                        <span className="ds-stat-lbl">Experience</span>
                      </div>
                      <div className="ds-divider" />
                      <div className="ds-stat">
                        <span className="ds-stat-val" style={{ color: doc.accentBorder }}>⭐ 4.8</span>
                        <span className="ds-stat-lbl">Rating</span>
                      </div>
                    </div>

                    <div className="ds-actions">
                      <button
                        className="ds-book-btn"
                        style={{ background: `linear-gradient(135deg, ${doc.accentBorder}, ${doc.accentBorder}cc)` }}
                        onClick={() => setEnquiryDoctor(doc)}
                      >
                        Book Appointment
                      </button>
                      <Link href={`/doctors/${slugs[doc.id]}`} className="ds-view-btn" style={{ color: doc.accentBorder, borderColor: `${doc.accentBorder}55` }}>
                        View Profile
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 32 }}>
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => { goTo(i); resetAuto(); }}
              style={{
                width: i === current ? 28 : 8,
                height: 8,
                borderRadius: 4,
                background: i === current ? TEAL : '#cbd5e1',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: 0,
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* View All CTA */}
        <div style={{ textAlign: 'center', marginTop: 36 }}>
          <Link
            href="/doctors"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'linear-gradient(135deg, #0e9ab5, #0b3b4a)',
              color: '#fff',
              textDecoration: 'none',
              padding: '14px 36px',
              borderRadius: 50,
              fontSize: 15,
              fontWeight: 700,
              fontFamily: 'Poppins, sans-serif',
              boxShadow: '0 8px 28px rgba(14,154,181,0.3)',
              transition: 'all 0.3s ease',
              letterSpacing: '0.02em',
            }}
            className="ds-view-all"
          >
            View All Doctors
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Enquiry Mini Modal */}
      {enquiryDoctor && (
        <div
          style={{
            position: 'fixed', inset: 0, background: 'rgba(11,59,74,0.55)',
            backdropFilter: 'blur(6px)', zIndex: 1000, display: 'flex',
            alignItems: 'center', justifyContent: 'center', padding: 16,
          }}
          onClick={() => setEnquiryDoctor(null)}
        >
          <div
            style={{
              background: '#fff', borderRadius: 20, padding: 36,
              maxWidth: 420, width: '100%', position: 'relative',
              boxShadow: '0 24px 64px rgba(0,0,0,0.2)',
              border: `2px solid ${enquiryDoctor.accentBorder}33`,
            }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setEnquiryDoctor(null)}
              style={{
                position: 'absolute', top: 14, right: 14, width: 30, height: 30,
                borderRadius: '50%', border: '1.5px solid #e2e8f0', background: '#f8fafc',
                cursor: 'pointer', fontSize: 16, color: '#64748b',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >×</button>
            <div style={{ textAlign: 'center', marginBottom: 20 }}>
              <div style={{
                width: 72, height: 72, borderRadius: '50%', overflow: 'hidden',
                border: `3px solid ${enquiryDoctor.accentBorder}`,
                margin: '0 auto 12px', boxShadow: `0 6px 20px ${enquiryDoctor.accentBorder}40`,
              }}>
                <Image src={enquiryDoctor.image} alt={enquiryDoctor.name} width={72} height={72} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
              <h3 style={{ margin: 0, fontFamily: 'Poppins, sans-serif', color: DARK_NAVY, fontSize: 18, fontWeight: 800 }}>{enquiryDoctor.name}</h3>
              <p style={{ margin: '4px 0 0', color: enquiryDoctor.accentBorder, fontSize: 13, fontWeight: 600 }}>{enquiryDoctor.specialty}</p>
            </div>
            <p style={{ textAlign: 'center', color: '#64748b', fontSize: 14, marginBottom: 20 }}>
              Call us to book an appointment with {enquiryDoctor.name}
            </p>
            <a
              href="tel:07364921002"
              style={{
                display: 'block', width: '100%', textAlign: 'center',
                background: `linear-gradient(135deg, ${enquiryDoctor.accentBorder}, ${enquiryDoctor.accentBorder}aa)`,
                color: '#fff', textDecoration: 'none', padding: '13px 0',
                borderRadius: 12, fontWeight: 700, fontSize: 16,
                fontFamily: 'Poppins, sans-serif', letterSpacing: '0.02em',
                boxShadow: `0 6px 20px ${enquiryDoctor.accentBorder}40`,
              }}
            >
              📞 07364921002
            </a>
          </div>
        </div>
      )}

      <style>{`
        .ds-card {
          position: relative;
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.07);
          border: 1.5px solid #f1f5f9;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .ds-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.14);
          border-color: rgba(14,154,181,0.2);
        }
        .ds-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          color: #fff;
          font-size: 10px;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 20px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          z-index: 2;
        }
        .ds-img-wrap {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px 0 20px;
          overflow: hidden;
        }
        .ds-img-ring {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          border: 3.5px solid;
          overflow: hidden;
          box-shadow: 0 8px 28px rgba(0,0,0,0.15);
          position: relative;
          z-index: 1;
        }
        .ds-arc {
          position: absolute;
          bottom: -30px;
          left: 50%;
          transform: translateX(-50%);
          width: 200px;
          height: 200px;
          border-radius: 50%;
          border: 40px solid;
          opacity: 0.4;
        }
        .ds-body {
          padding: 16px 18px 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }
        .ds-name {
          font-size: 15px;
          font-weight: 800;
          color: #0b3b4a;
          margin: 0;
          font-family: 'Poppins', sans-serif;
          line-height: 1.3;
        }
        .ds-spec {
          font-size: 12px;
          font-weight: 700;
          margin: 0;
          letter-spacing: 0.03em;
        }
        .ds-stats {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #f8fafc;
          border-radius: 12px;
          padding: 10px 14px;
          margin-top: 4px;
        }
        .ds-stat {
          display: flex;
          flex-direction: column;
          gap: 2px;
          flex: 1;
          align-items: center;
        }
        .ds-stat-val {
          font-size: 13px;
          font-weight: 800;
          font-family: 'Poppins', sans-serif;
        }
        .ds-stat-lbl {
          font-size: 10px;
          color: #94a3b8;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .ds-divider {
          width: 1px;
          height: 28px;
          background: #e2e8f0;
        }
        .ds-actions {
          display: flex;
          gap: 8px;
          margin-top: auto;
          flex-wrap: wrap;
        }
        .ds-book-btn {
          flex: 1;
          min-width: 0;
          color: #fff;
          border: none;
          padding: 10px 12px;
          border-radius: 10px;
          font-size: 12px;
          font-weight: 700;
          font-family: 'Poppins', sans-serif;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 0 4px 14px rgba(0,0,0,0.15);
          white-space: nowrap;
        }
        .ds-book-btn:hover {
          transform: scale(1.03);
          box-shadow: 0 6px 20px rgba(0,0,0,0.22);
        }
        .ds-view-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 12px;
          border-radius: 10px;
          border: 1.5px solid;
          font-size: 12px;
          font-weight: 700;
          font-family: 'Poppins', sans-serif;
          text-decoration: none;
          background: transparent;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .ds-view-btn:hover {
          opacity: 0.8;
        }
        .ds-view-all:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 40px rgba(14,154,181,0.4) !important;
        }
        @media (max-width: 600px) {
          .ds-body { padding: 14px 14px 16px; }
          .ds-name { font-size: 14px; }
        }
      `}</style>
    </section>
  );
}
