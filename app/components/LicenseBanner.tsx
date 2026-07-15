'use client';

import Image from 'next/image';

const TEAL = '#0e9ab5';
const GREEN = '#3aaa35';

export default function LicenseBanner() {
  return (
    <section
      id="license-banner"
      style={{
        background: '#fff',
        borderTop: '1px solid #e8eef3',
        borderBottom: '1px solid #e8eef3',
        padding: '36px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, #fff, ${TEAL}, ${GREEN}, ${TEAL}, #fff)` }} />

      <div
        id="license-inner"
        data-animate="fade-up"
        style={{
          maxWidth: 1440, margin: '0 auto', padding: '0 40px',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', gap: 32, flexWrap: 'wrap',
          transition: 'opacity 0.85s, transform 0.85s',
        }}
      >

        {/* Left: License No */}
        <div>
          <span style={{ fontSize: 10.5, fontWeight: 700, color: '#8a9fad', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'block', marginBottom: 4 }}>
            Government Certified
          </span>
          <span style={{ fontSize: 18, fontWeight: 800, color: '#0d2433', fontFamily: 'Poppins, sans-serif', letterSpacing: '0.05em' }}>
            License No | 34853610
          </span>
        </div>

        {/* Center: ashok.jpg — full image, no circle, no text */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image
            src="/ashok.jpg"
            alt="Ashok Stambh – Statutory CE FORM VII License Seal"
            width={180}
            height={180}
            style={{
              objectFit: 'contain',
              width: '180px',
              height: '180px',
            }}
            priority
          />
        </div>

        {/* Right: Original */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
          <span style={{ fontSize: 10.5, fontWeight: 700, color: '#8a9fad', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            Document Status
          </span>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'linear-gradient(135deg, #e8faf0, #d4f5e2)',
            border: `1.5px solid ${GREEN}55`, borderRadius: 8, padding: '6px 18px',
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: GREEN, display: 'inline-block' }} />
            <span style={{ fontSize: 16, fontWeight: 800, color: '#1a6b18', fontFamily: 'Poppins, sans-serif', letterSpacing: '0.04em' }}>Original</span>
          </div>
        </div>

      </div>
    </section>
  );
}
