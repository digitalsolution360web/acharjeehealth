'use client';

import { useState } from 'react';
import EnquiryModal from './EnquiryModal';

const originalCards = [
  {
    id: 'consultation',
    badge: '60 sec',
    badgeLabel: 'Connect Time',
    label: 'Instant Clinic',
    title: 'Consultation',
    desc: 'Connect within 60 seconds with our medical experts. Real-time consultations that prioritise your time and well-being.',
    icon: '🩺',
  },
  {
    id: 'medicines',
    badge: '24/7',
    badgeLabel: 'Available',
    label: '24/7 Delivery',
    title: 'Medicines',
    desc: 'Essential medicines delivered to your doorstep anytime — especially during emergencies — fast and reliable.',
    icon: '💊',
  },
  {
    id: 'lab-tests',
    badge: '99.8%',
    badgeLabel: 'Accuracy',
    label: 'Accurate Results',
    title: 'Lab Tests',
    desc: 'Home sample collection with 99.8% accuracy. Get precise diagnostic results from the comfort of your home.',
    icon: '🧪',
  },
];

export default function ServicesCards() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section style={{ width: '100%', background: '#ffffff', padding: '64px 0', borderTop: '1px solid #f1f5f9' }}>
      <div
        style={{
          maxWidth: 1520,
          margin: '0 auto',
          padding: '0 clamp(16px, 3vw, 44px)',
        }}
      >
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 48px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <div style={{ width: 32, height: 2, background: '#0e9ab5', borderRadius: 2 }} />
            <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.18em', color: '#0e9ab5', textTransform: 'uppercase' }}>
              OUR CORE SERVICES
            </span>
            <div style={{ width: 32, height: 2, background: '#0e9ab5', borderRadius: 2 }} />
          </div>

          <h2 style={{ fontSize: 'clamp(24px, 2.8vw, 36px)', fontWeight: 800, color: '#000000', fontFamily: "'Poppins', sans-serif", marginBottom: 12 }}>
            Comprehensive Healthcare, <span style={{ color: '#0e9ab5' }}>Right at Your Door</span>
          </h2>

          <p style={{ fontSize: 15.5, color: '#475569', lineHeight: 1.65 }}>
            Expert healthcare services designed around you — fast, reliable, and delivered with compassion.
          </p>
        </div>

        {/* 3 Box Cards Grid matching Screenshot 4 design with exact original content */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 24,
          }}
        >
          {originalCards.map((card) => (
            <div
              key={card.id}
              style={{
                background: '#f4f8fd',
                border: '1.5px solid #dcebfa',
                borderRadius: 20,
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 4px 14px rgba(14, 154, 181, 0.04)',
                position: 'relative',
              }}
            >
              <div>
                {/* Badge Tag on top right */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
                  <span style={{ fontSize: 32 }}>{card.icon}</span>
                  <div
                    style={{
                      background: '#ffffff',
                      border: '1px solid #b3e8f0',
                      borderRadius: 10,
                      padding: '6px 12px',
                      textAlign: 'center',
                      boxShadow: '0 2px 8px rgba(14,154,181,0.08)',
                    }}
                  >
                    <div style={{ fontSize: 15, fontWeight: 900, color: '#0e9ab5', fontFamily: "'Poppins', sans-serif", lineHeight: 1.1 }}>
                      {card.badge}
                    </div>
                    <div style={{ fontSize: 9, fontWeight: 800, color: '#475569', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 2 }}>
                      {card.badgeLabel}
                    </div>
                  </div>
                </div>

                {/* Sub-label */}
                <span
                  style={{
                    display: 'inline-block',
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: '0.14em',
                    color: '#0e9ab5',
                    textTransform: 'uppercase',
                    marginBottom: 6,
                  }}
                >
                  {card.label}
                </span>

                {/* Title */}
                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    color: '#0b3b4a',
                    marginBottom: 10,
                    fontFamily: "'Poppins', sans-serif",
                    lineHeight: 1.15,
                  }}
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.65, marginBottom: 24 }}>
                  {card.desc}
                </p>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    color: '#073c67',
                    fontWeight: 800,
                    fontSize: 15,
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  Learn More <span style={{ fontSize: 16 }}>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && <EnquiryModal onClose={() => setShowModal(false)} />}
    </section>
  );
}
