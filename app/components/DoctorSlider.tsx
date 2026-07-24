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
  {
    id: 1,
    image: '/d.png',
    name: 'Dr. Binidra Banerjee',
    title: 'Leading Gastroenterologist in Asansol, Durgapur, Dhanbad, and Jharkhand',
    specialty: 'Gastroenterologist',
    phone: '07364921002',
    email: 'acharjeehealth.in@gmail.com',
    location: 'ACHARJEE PHARMACY, MORE C/O, 256/2, SB Gorai Rd, Ismile, Islampur, Hamid Nagar, Asansol, West Bengal 713301',
    accent: '#fce4ec',
    accentBorder: '#e91e63',
    badge: 'Gastro',
  },
  {
    id: 2,
    image: '/d1.png',
    name: 'Dr. Atri Bandyopadhyay',
    title: 'Best Senior ENT Specialist in Asansol, West Bengal | Acharjee Health',
    specialty: 'ENT & Head Neck Surgeon',
    phone: '07364921002',
    email: 'acharjeehealth.in@gmail.com',
    location: 'ACHARJEE PHARMACY, MORE C/O, 256/2, SB Gorai Rd, Ismile, Islampur, Hamid Nagar, Asansol, West Bengal 713301',
    accent: '#e0f7fa',
    accentBorder: '#00acc1',
    badge: 'ENT',
  },
  {
    id: 3,
    image: '/d2.png',
    name: 'Dr. Rupam Sil',
    title: 'Best ENT Specialist in Asansol, West Bengal | Acharjee Health',
    specialty: 'ENT & Head Neck Surgeon',
    phone: '07364921002',
    email: 'acharjeehealth.in@gmail.com',
    location: 'ACHARJEE PHARMACY, MORE C/O, 256/2, SB Gorai Rd, Ismile, Islampur, Hamid Nagar, Asansol, West Bengal 713301',
    accent: '#fff8e1',
    accentBorder: '#f9a825',
    badge: 'ENT',
  },
  {
    id: 4,
    image: '/d3.png',
    name: 'Dr. Ananth Egoor',
    title: 'Best Neurologist Consultant in Asansol – Dr. Ananth Egoor (From Hyderabad)',
    specialty: 'Neurologist',
    phone: '07364921002',
    email: 'acharjeehealth.in@gmail.com',
    location: 'ACHARJEE PHARMACY, MORE C/O, 256/2, SB Gorai Rd, Ismile, Islampur, Hamid Nagar, Asansol, West Bengal 713301',
    accent: '#fce4ec',
    accentBorder: '#e53935',
    badge: 'Neuro',
  },
  {
    id: 5,
    image: '/d4.png',
    name: 'Dr. Shibasis Chatterjee',
    title: 'The Best Skin Specialist in Asansol, West Bengal | Acharjee Health',
    specialty: 'Consultant Dermatologist',
    phone: '07364921002 / 7029386969',
    email: 'acharjeehealth.in@gmail.com',
    location: 'ACHARJEE PHARMACY, MORE C/O, 256/2, SB Gorai Rd, Ismile, Islampur, Hamid Nagar, Asansol, West Bengal 713301',
    accent: '#e8f5e9',
    accentBorder: '#43a047',
    badge: 'Derma',
  },
  {
    id: 6,
    image: '/d5.png',
    name: 'Dr. Raghuram Tangirala',
    title: 'Gastroenterologist in Asansol (from Hyderabad)',
    specialty: 'Gastroenterologist',
    phone: '07364921002 / 7029386969',
    email: 'acharjeehealth.in@gmail.com',
    location: 'ACHARJEE PHARMACY, MORE C/O, 256/2, SB Gorai Rd, Ismile, Islampur, Hamid Nagar, Asansol, West Bengal 713301',
    accent: '#e8f0fe',
    accentBorder: '#3f51b5',
    badge: 'Gastro',
  },
  {
    id: 7,
    image: '/d6.jpeg',
    name: 'Dr. P. Kranthi Kumar',
    title: 'Meet the Expert: Dr. P. Kranthi Kumar – MBBS, MD (General Medicine), DM (Gastroenterology)',
    specialty: 'Consultant Gastroenterologist',
    phone: '+91 7364921002',
    email: 'acharjeehealth.in@gmail.com',
    location: '62 N.S.B. Gorai Road, Opp. IMA House, Ismile More, Asansol',
    accent: '#fff3e0',
    accentBorder: '#fb8c00',
    badge: 'Gastro',
  },
  {
    id: 8,
    image: '/d7.jpg',
    name: 'Dr. Sanjeev Kr. Suman',
    title: 'Top Neurologist Consultant in Asansol – Dr. Sanjeev Kr. Suman',
    specialty: 'Neurologist',
    phone: '07364921002 / 7029386969',
    email: 'acharjeehealth.in@gmail.com',
    location: 'ACHARJEE PHARMACY, MORE C/O, 256/2, SB Gorai Rd, Ismile, Islampur, Hamid Nagar, Asansol, West Bengal 713301',
    accent: '#ede7f6',
    accentBorder: '#7b1fa2',
    badge: 'Neuro',
  },
  {
    id: 9,
    image: '/d8.png',
    name: 'Dr. Rituparna Mukherjee',
    title: 'DR. RITUPARNA MUKHERJEE MBBS (Nilratan Sirkar Medical College & Hospital, Kolkata)',
    specialty: 'ENT & Head Neck Surgeon',
    phone: '07364921002 / 7029386969',
    email: 'acharjeehealth.in@gmail.com',
    location: '62 N, S.B. Gorai Road, Opp. IMA House, Ismile, More, Asansol',
    accent: '#e3f2fd',
    accentBorder: '#1565c0',
    badge: 'ENT',
  },
  {
    id: 10,
    image: '/d9.png',
    name: 'Dr. K. Seshu Mohan',
    title: 'Best Urologist Dr. K.Seshu in Asansol, West Bengal | Acharjee Health',
    specialty: 'Urologist',
    phone: '07364921002 / 7029386969',
    email: 'acharjeehealth.in@gmail.com',
    location: 'ACHARJEE PHARMACY, MORE C/O, 256/2, SB Gorai Rd, Ismile, Islampur, Hamid Nagar, Asansol, West Bengal 713301',
    accent: '#e0f2f1',
    accentBorder: '#00796b',
    badge: 'Urology',
  },
  {
    id: 11,
    image: '/d10.png',
    name: 'Dr. Pradip Sarkar',
    title: 'Dr Pradip Sarkar, Best Cardiologist in Asansol, West Bengal | Acharjee Health',
    specialty: 'Cardiologist',
    phone: '07364921002 / 7029386969',
    email: 'acharjeehealth.in@gmail.com',
    location: 'Ismile More, ACHARJEE PHARMACY, C/O, SB Gorai Rd, Ismile, Islampur, Hamid Nagar, Asansol, West Bengal 713301',
    accent: '#f1f8e9',
    accentBorder: '#558b2f',
    badge: 'Cardio',
  },
  {
    id: 12,
    image: '/d11.png',
    name: 'Dr. Aishwarya Bhattacharya',
    title: 'Best Gynaec Dr.Aishwarya Bhattacharya in Asansol, West Bengal | Acharjee Health',
    specialty: 'Gynaecologist & Obstetrician',
    phone: '07364921002 / 7029386969',
    email: 'acharjeehealth.in@gmail.com',
    location: 'ACHARJEE PHARMACY, MORE C/O, 256/2, SB Gorai Rd, Ismile, Islampur, Hamid Nagar, Asansol, West Bengal 713301',
    accent: '#fce4ec',
    accentBorder: '#d81b60',
    badge: 'Gynae',
  },
  {
    id: 13,
    image: '/d12.png',
    name: 'Dr. Nibedita Kabiraj',
    title: 'Dr. Nibedita Kabiraj, Best Pediatrician in Asansol, West Bengal | Acharjee Health',
    specialty: 'Child Specialist',
    phone: '07364921002 / 7029386969',
    email: 'acharjeehealth.in@gmail.com',
    location: 'ACHARJEE PHARMACY, MORE C/O, 256/2, SB Gorai Rd, Ismile, Islampur, Hamid Nagar, Asansol, West Bengal 713301',
    accent: '#f1f8e9',
    accentBorder: '#388e3c',
    badge: 'Paeds',
  },
  {
    id: 14,
    image: '/d13.png',
    name: 'Dr. Ratnakar Rao K',
    title: 'Best Orthopaedic and Knee Replacement Surgeon in Asansol | Dr. Ratnakar Rao K',
    specialty: 'Orthopaedic',
    phone: '07364921002 / 7029386969',
    email: 'acharjeehealth.in@gmail.com',
    location: '62 N, S.B. Gorai Road, Opp. IMA House, Ismile, More, Asansol',
    accent: '#e3f2fd',
    accentBorder: '#1976d2',
    badge: 'Ortho',
  },
  {
    id: 15,
    image: '/d14.png',
    name: 'Dr. Riya Sinha',
    title: 'Dr. Riya Sinha ENT & Head and Neck Surgeon | MBBS, MS (ENT & Head and Neck Surgery)',
    specialty: 'ENT & Head Neck Surgeon',
    phone: '07364921002 / 7029386969',
    email: 'acharjeehealth.in@gmail.com',
    location: '62 N, S.B. Gorai Road, Opp. IMA House, Ismile, More, Asansol',
    accent: '#e8eaf6',
    accentBorder: '#3949ab',
    badge: 'ENT',
  },
];

/* ─── Icons ─── */
const PhoneIcon = ({ color }: { color: string }) => (
  <svg width="14" height="14" fill="none" stroke={color} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);
const MailIcon = ({ color }: { color: string }) => (
  <svg width="14" height="14" fill="none" stroke={color} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const LocIcon = ({ color }: { color: string }) => (
  <svg width="14" height="14" fill="none" stroke={color} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export default function DoctorSlider() {
  const [current, setCurrent] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);
  const [isAnimating, setIsAnimating] = useState(false);
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
              Explore our departments
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
                <div className="doctor-card" style={{ '--accent': doc.accent, '--border-c': doc.accentBorder } as React.CSSProperties}>
                  {/* Badge */}
                  <span className="specialty-badge" style={{ background: doc.accentBorder }}>{doc.badge}</span>

                  {/* Image */}
                  <div className="card-img-wrap">
                    <div className="img-ring" style={{ borderColor: doc.accentBorder }}>
                      <Image
                        src={doc.image}
                        alt={doc.name}
                        width={130}
                        height={130}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="card-body">
                    <h3 className="doctor-name">{doc.name}</h3>
                    <p className="doctor-title">{doc.title}</p>
                    <span className="specialty-chip" style={{ color: doc.accentBorder, borderColor: `${doc.accentBorder}44`, background: `${doc.accentBorder}18` }}>
                      {doc.specialty}
                    </span>

                    <div className="info-list">
                      <div className="info-row">
                        <PhoneIcon color={doc.accentBorder} />
                        <span>{doc.phone}</span>
                      </div>
                      <div className="info-row">
                        <MailIcon color={doc.accentBorder} />
                        <span>{doc.email}</span>
                      </div>
                      <div className="info-row">
                        <LocIcon color={doc.accentBorder} />
                        <span>{doc.location}</span>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="card-actions">
                      <button
                        onClick={() => window.dispatchEvent(new CustomEvent('open-enquiry-modal'))}
                        className="book-btn"
                        style={{
                          background: `linear-gradient(135deg, ${doc.accentBorder}, ${doc.accentBorder}cc)`,
                          border: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        Book Appointment
                      </button>
                      <Link
                        href={`/doctors/${slugs[doc.id]}`}
                        className="read-more-btn"
                        style={{ borderColor: doc.accentBorder, color: doc.accentBorder }}
                      >
                        Read More ▶
                      </Link>
                    </div>

                    {/* Social Icons */}
                    <div className="social-row">
                      {['f', 'x', '▶', 'in'].map((s, i) => (
                        <a key={i} href="#" className="social-icon" style={{ '--s-color': doc.accentBorder } as React.CSSProperties} aria-label={s}>
                          {s}
                        </a>
                      ))}
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

      <style>{`
        .doctor-card {
          position: relative;
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.09);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-top: 4px solid var(--border-c);
          height: 100%;
        }
        .doctor-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.16);
        }
        .specialty-badge {
          position: absolute;
          top: 14px;
          right: 14px;
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 20px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          z-index: 2;
        }
        .card-img-wrap {
          background: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 28px 0 18px;
        }
        .img-ring {
          width: 130px;
          height: 130px;
          border-radius: 50%;
          border: 4px solid;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0,0,0,0.14);
        }
        .card-body {
          padding: 18px 20px 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 8px;
        }
        .doctor-name {
          font-size: 16px;
          font-weight: 800;
          color: #111827;
          margin: 0;
          font-family: 'Poppins', sans-serif;
          line-height: 1.3;
        }
        .doctor-title {
          font-size: 12.5px;
          color: #4b5563;
          margin: 0;
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .specialty-chip {
          display: inline-block;
          font-size: 11.5px;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: 20px;
          border: 1px solid;
          align-self: flex-start;
        }
        .info-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-top: 4px;
        }
        .info-row {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 12px;
          color: #374151;
          line-height: 1.5;
        }
        .info-row svg {
          flex-shrink: 0;
          margin-top: 2px;
        }
        .card-actions {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 8px;
          margin-top: auto;
          flex-wrap: nowrap;
        }
        .read-more-btn,
        .book-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 36px;
          line-height: 1.2;
          white-space: nowrap;
          border-radius: 8px;
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 12px;
          transition: all 0.2s ease;
          text-decoration: none;
          padding: 0 14px;
          box-sizing: border-box;
        }
        .read-more-btn {
          flex: 0 0 auto;
          border: 2px solid;
          background: transparent;
          cursor: pointer;
        }
        .read-more-btn:hover {
          opacity: 0.8;
          transform: scale(1.02);
        }
        .book-btn {
          flex: 1 1 0;
          min-width: 0;
          color: #fff;
          text-align: center;
          box-shadow: 0 4px 14px rgba(0,0,0,0.18);
        }
        .book-btn:hover {
          transform: scale(1.02);
          box-shadow: 0 6px 20px rgba(0,0,0,0.22);
        }
        .social-row {
          display: flex;
          gap: 8px;
          margin-top: 8px;
          justify-content: center;
        }
        .social-icon {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #f3f4f6;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 900;
          color: #374151;
          text-decoration: none;
          transition: all 0.2s;
        }
        .social-icon:hover {
          background: var(--s-color);
          color: #fff;
          transform: scale(1.15);
        }
        .ds-view-all:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 40px rgba(14,154,181,0.4) !important;
        }
      `}</style>
    </section>
  );
}
