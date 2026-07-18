'use client';

import Image from 'next/image';
import Link from 'next/link';

const TEAL = '#0e9ab5';
const GREEN = '#3aaa35';
const RED = '#e0142a';

export default function AboutPage() {
  const serviceList = [
    { title: 'ENT Surgeon' },
    { title: 'Child Physician' },
    { title: 'Urologist' },
    { title: 'Gastroenterology' },
    { title: 'Gynecologist & Obstetrician' },
    { title: 'Cardiologist' },
    { title: 'General Medicine' },
    { title: 'Consultant Dermatologist' }
  ];

  return (
    <div style={{ background: '#fcfdfe', minHeight: '100vh', color: '#1a2d3d', wordBreak: 'break-word', fontFamily: 'Poppins, Arial, Helvetica, sans-serif' }}>

      {/* 1. HERO BREADCRUMB HEADER */}
      <section style={{
        position: 'relative',
        background: `linear-gradient(135deg, #084f5c 0%, #0b7a91 50%, #0e9ab5 100%)`,
        padding: '80px 0',
        color: '#ffffff',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: 320, height: 320, background: 'rgba(255,255,255,0.06)', borderRadius: '50%', filter: 'blur(90px)', pointerEvents: 'none' }} />

        <div className="section-container" style={{ maxWidth: 1520, margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'flex', gap: 8, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.75)', marginBottom: 12 }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>Home</Link>
            <span>•</span>
            <span style={{ color: '#ffffff' }}>About Us</span>
          </div>
          <h1 style={{ fontSize: 'clamp(30px, 4.5vw, 48px)', fontWeight: 900, margin: 0, lineHeight: 1.25 }}>
            About Acharjee Health Clinic
          </h1>
          <p style={{ maxWidth: 700, fontSize: 'clamp(14.5px, 1.8vw, 17px)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, marginTop: 8, marginBottom: 0 }}>
            Our experienced team of professionals is dedicated to providing personalized, high-quality treatments
          </p>
        </div>
      </section>

      {/* 2. SERVICES OVERVIEW & 5.JPG SPECIALTIES SECTION */}
      <section style={{ padding: '48px 0', background: '#fcfdfe' }}>
        <div className="section-container" style={{ maxWidth: 1520, margin: '0 auto' }}>
          <div id="intro-grid" style={{ display: 'grid', gridTemplateColumns: '1.05fr 1.25fr', gap: '64px', alignItems: 'center' }}>

            {/* Main 5.jpg image card */}
            <div data-animate="fade-right" style={{ position: 'relative', height: 600, borderRadius: 28, overflow: 'hidden', boxShadow: '0 24px 64px rgba(13,36,60,0.08)', border: '1.5px solid #f1f5f9' }}>
              <Image
                src="/5.jpg"
                alt="Services Graphic"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                priority
              />
            </div>

            <div data-animate="fade-left">
              <span style={{ display: 'inline-block', padding: '6px 14px', borderRadius: 50, background: 'rgba(14, 154, 181, 0.1)', color: '#0e9ab5', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 14 }}>
                Acharjee Services & specialties
              </span>

              <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontWeight: 800, color: '#0d2433', margin: '0 0 18px', lineHeight: 1.25, letterSpacing: '-0.02em' }}>
                Your Health is Our Top Priority
              </h2>

              <p style={{ fontSize: 16, fontWeight: 600, color: '#324a5e', borderLeft: `4px solid ${TEAL}`, paddingLeft: 18, margin: '0 0 24px', lineHeight: 1.65 }}>
                At Acharjee Health Clinic & Pharmacy, we offer expert healthcare across a wide range of specialties to ensure comprehensive care for all your medical needs
              </p>

              <p style={{ fontSize: 15, color: '#516b7e', lineHeight: 1.75, margin: '0 0 28px' }}>
                At Acharjee Health Clinic & Pharmacy, we prioritize patient well-being, offering comprehensive medical solutions under one roof
              </p>

              {/* Specialties pill grid */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                {serviceList.map((item, idx) => (
                  <div key={idx} className="specialty-pill" style={{ background: '#ffffff', padding: '10px 18px', borderRadius: 12, border: '1.5px solid #eef2f6', fontSize: 13, fontWeight: 700, color: '#2d3748', boxShadow: '0 2px 8px rgba(0,0,0,0.02)', transition: 'all 0.25s' }}>
                    🩺 {item.title}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. LEGACY - Mr. Premananda Acharya (6.JPG IMAGE) */}
      <section style={{ padding: '48px 0', background: '#ffffff' }}>
        <div className="section-container" style={{ maxWidth: 1520, margin: '0 auto' }}>
          <div id="legacy-grid" style={{ display: 'grid', gridTemplateColumns: '1.25fr 1.05fr', gap: '64px', alignItems: 'center' }}>

            <div data-animate="fade-right">
              <span style={{ display: 'inline-block', padding: '6px 14px', borderRadius: 50, background: 'rgba(58,170,53,0.1)', color: '#3aaa35', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 14 }}>
                Our Roots
              </span>
              <h3 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 800, color: '#0d2433', margin: '0 0 20px', lineHeight: 1.25, letterSpacing: '-0.025em' }}>
                A Legacy of Care: The Visionary Journey of the Acharjee Health Clinic
              </h3>
              <p style={{ fontSize: 15, color: '#4e6578', lineHeight: 1.85, margin: 0, textAlign: 'justify' }}>
                In 1978, Mr. Premananda Acharya established the Acharjee Health Clinic and Pharmacy in Asansol, creating a one-stop healthcare hub that combined medical consultations, prescriptions, and pharmacy services. This innovative approach transformed local healthcare, offering a wide range of specialties, preventive care, and health management. Over time, the clinic expanded to include advanced diagnostics and modern treatments, continuing to serve the community as a trusted resource for quality, accessible healthcare. Mr. Acharya’s vision of a comprehensive healthcare facility lives on, improving the well-being of residents through expert care and education
              </p>
            </div>

            {/* Main 6.jpg image card */}
            <div data-animate="fade-left" style={{ position: 'relative', height: 480, borderRadius: 28, overflow: 'hidden', boxShadow: '0 24px 64px rgba(13,36,60,0.08)', border: '1.5px solid #f1f5f9' }}>
              <Image
                src="/6.jpg"
                alt="Clinic Legacy"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* 4. EXECUTIVE BREATHE - Chandana Acharya (7.JPG IMAGE) */}
      <section style={{ padding: '48px 0', background: '#fcfdfe' }}>
        <div className="section-container" style={{ maxWidth: 1520, margin: '0 auto' }}>
          <div id="profile-grid" style={{ display: 'grid', gridTemplateColumns: '1.05fr 1.25fr', gap: '64px', alignItems: 'center' }}>

            {/* Main 7.jpg image card */}
            <div data-animate="fade-right" style={{ position: 'relative', height: 480, borderRadius: 28, overflow: 'hidden', boxShadow: '0 24px 64px rgba(13,36,60,0.08)', border: '1.5px solid #f1f5f9' }}>
              <Image
                src="/7.jpg"
                alt="Advocate Chandana Acharya"
                fill
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
            </div>

            <div data-animate="fade-left">
              <span style={{ display: 'inline-block', padding: '6px 14px', borderRadius: 50, background: 'rgba(14,154,181,0.1)', color: '#0e9ab5', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 14 }}>
                Leadership &amp; Business Partner
              </span>
              <h3 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 800, color: '#0d2433', margin: '0 0 20px', lineHeight: 1.25, letterSpacing: '-0.025em' }}>
                Advocate Chandana Acharya
              </h3>
              <p style={{ fontSize: 15, color: '#516b7e', lineHeight: 1.8, margin: '0 0 28px', textAlign: 'justify' }}>
                Advocate Chandana Acharya is a beacon of empowerment, excelling in law, business, and family life. With over 35 years of experience in law, she has earned respect for her legal expertise and dedication to justice. In the last five years, she has also thrived as a business partner, helping manage her family’s successful pharmacy and clinic. Beyond her professional achievements, she skillfully balances her career with family and social responsibilities, embodying modern womanhood through multitasking, leadership, and compassion. Her story is one of resilience and determination, showing that women can break barriers and excel in all aspects of life.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div style={{ background: '#ffffff', border: '1px solid #f1f5f9', padding: '16px', borderRadius: 16, boxShadow: '0 4px 16px rgba(0,0,0,0.01)' }}>
                  <h4 style={{ fontSize: 20, fontWeight: 900, color: TEAL, margin: 0 }}>35+ Years</h4>
                  <p style={{ fontSize: 11.5, fontWeight: 700, color: '#6b8a9a', margin: 0, marginTop: 4 }}>Legal Experience</p>
                </div>
                <div style={{ background: '#ffffff', border: '1px solid #f1f5f9', padding: '16px', borderRadius: 16, boxShadow: '0 4px 16px rgba(0,0,0,0.01)' }}>
                  <h4 style={{ fontSize: 20, fontWeight: 900, color: GREEN, margin: 0 }}>5+ Years</h4>
                  <p style={{ fontSize: 11.5, fontWeight: 700, color: '#6b8a9a', margin: 0, marginTop: 4 }}>Pharmacy Administration</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. RATINGS PANEL - 8.JPG IMAGE */}
      <section style={{ padding: '48px 0', background: '#ffffff' }}>
        <div className="section-container" style={{ maxWidth: 1520, margin: '0 auto' }}>
          <div id="ratings-grid" style={{ display: 'grid', gridTemplateColumns: '1.25fr 1.05fr', gap: '64px', alignItems: 'center' }}>

            <div data-animate="fade-right">
              <span style={{ display: 'inline-block', padding: '6px 14px', borderRadius: 50, background: 'rgba(58,170,53,0.1)', color: '#3aaa35', fontSize: 11, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 14 }}>
                ⭐ AVERAGE GOOGLE RATINGS
              </span>
              <h3 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 900, color: '#0d2433', margin: '0 0 20px', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
                4.9 <span style={{ fontSize: 18, fontWeight: 600, color: '#94a3b8' }}>/ 5.0 Rating Score</span>
              </h3>
              <p style={{ fontSize: 15.5, color: '#516b7e', lineHeight: 1.8, margin: 0, fontWeight: 500 }}>
                We take pride in delivering award-winning healthcare, backed by a commitment to quality and compassion.
              </p>
            </div>

            {/* Main 8.jpg featured ratings image card */}
            <div data-animate="fade-left" style={{ position: 'relative', height: 420, borderRadius: 28, overflow: 'hidden', boxShadow: '0 24px 64px rgba(13,36,60,0.08)', border: '1.5px solid #f1f5f9' }}>
              <Image
                src="/8.jpg"
                alt="Google Ratings Data"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* 6. SECURITY & DATA PRIVACY - 9.JPG IMAGE */}
      <section style={{ padding: '48px 0', background: '#fcfdfe' }}>
        <div className="section-container" style={{ maxWidth: 1520, margin: '0 auto' }}>
          <div id="privacy-grid" style={{ display: 'grid', gridTemplateColumns: '1.05fr 1.25fr', gap: '64px', alignItems: 'center' }}>

            {/* Main 9.jpg confidentiality image card */}
            <div data-animate="fade-right" style={{ position: 'relative', height: 420, borderRadius: 28, overflow: 'hidden', boxShadow: '0 24px 64px rgba(13,36,60,0.08)', border: '1.5px solid #f1f5f9' }}>
              <Image
                src="/9.jpg"
                alt="Patient Privacy Shield"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>

            <div data-animate="fade-left">
              <span style={{ display: 'inline-block', padding: '6px 14px', borderRadius: 50, background: 'rgba(224,20,42,0.08)', color: '#e0142a', fontSize: 11, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 14 }}>
                🔒 Patient Security Shield
              </span>
              <h3 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 800, color: '#0d2433', margin: '0 0 20px', lineHeight: 1.3, letterSpacing: '-0.025em' }}>
                Confidentiality & Privacy Standards
              </h3>
              <p style={{ fontSize: 15.5, color: '#516b7e', lineHeight: 1.8, margin: 0, textAlign: 'justify' }}>
                At Acharjee Health Clinic, we adhere to the highest standards of patient confidentiality and data protection.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 7. PREMIUM CORE PILLARS SECTION (MISSION, VISION, VALUES) */}
      <section style={{ padding: '48px 0', background: 'linear-gradient(180deg, #ffffff 0%, #f7fbfd 100%)' }}>
        <div className="section-container" style={{ maxWidth: 1520, margin: '0 auto' }}>

          {/* Section Header */}
          <div data-animate="fade-up" style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 40px' }}>
            <span style={{ display: 'inline-block', padding: '6px 14px', borderRadius: 50, background: 'rgba(14,154,181,0.08)', color: TEAL, fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 14 }}>
              OUR CORE FOUNDATION
            </span>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 920, color: '#0d2433', margin: 0, fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.03em', lineHeight: 1.2 }}>
              The Pillars of Our Excellence
            </h2>
            <p style={{ fontSize: 14.5, color: '#5a7280', margin: 0, marginTop: 12, lineHeight: 1.6, fontWeight: 500 }}>
              Guided by legacy and driven by healthcare innovation to support your wellness journey
            </p>
          </div>

          <div id="pillars-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1.15fr', gap: 32, alignItems: 'stretch' }}>

            {/* Card 1: MISSION */}
            <div data-animate="fade-right" className="pillar-card border-accent-teal" style={{ background: '#ffffff', border: '1.5px solid #edf6f8', borderRadius: 28, padding: '36px', boxShadow: '0 10px 30px rgba(13,36,60,0.02)', display: 'flex', flexDirection: 'column', transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}>
              <div style={{ width: 48, height: 48, borderRadius: 16, background: 'rgba(14,154,181,0.1)', color: '#0e9ab5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 900, marginBottom: 24 }}>
                🎯
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: '#0d2433', margin: '0 0 16px', letterSpacing: '0.06em', fontFamily: 'Poppins, sans-serif' }}>OUR MISSION</h3>
              <p style={{ fontSize: 13.5, color: '#526f84', lineHeight: 1.8, margin: 0, textAlign: 'justify', fontWeight: 500 }}>
                At Acharjee Health Clinic & Pharmacy, our mission is to provide exceptional healthcare services that address the unique needs of each patient. We aim to deliver comprehensive, accessible, and affordable medical care across a wide range of specialties, ensuring every patient receives personalized treatment and support. Our commitment is to enhance the overall well-being of our community by offering high-quality healthcare services in a compassionate
              </p>
            </div>

            {/* Card 2: VISION */}
            <div data-animate="fade-up" className="pillar-card border-accent-green" style={{ background: '#ffffff', border: '1.5px solid #edf6ed', borderRadius: 28, padding: '36px', boxShadow: '0 10px 30px rgba(13,36,60,0.02)', display: 'flex', flexDirection: 'column', transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}>
              <div style={{ width: 48, height: 48, borderRadius: 16, background: 'rgba(58,170,53,0.1)', color: '#3aaa35', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 900, marginBottom: 24 }}>
                👁️
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: '#0d2433', margin: '0 0 16px', letterSpacing: '0.06em', fontFamily: 'Poppins, sans-serif' }}>OUR VISION</h3>
              <p style={{ fontSize: 13.5, color: '#526f84', lineHeight: 1.8, margin: 0, textAlign: 'justify', fontWeight: 500 }}>
                Our vision is to be a leading healthcare provider, known for excellence in patient care, innovation, and comprehensive medical services. We aspire to create a healthier future for our community by continually advancing our services and integrating the latest medical technologies. Our goal is to make healthcare accessible to all and become a trusted healthcare hub that supports the well-being of every individual at every stage of life.
              </p>
            </div>

            {/* Card 3: VALUES - Highly Styled Micro-Cards block */}
            <div data-animate="fade-left" className="pillar-card border-accent-red" style={{ background: '#ffffff', border: '1.5px solid #f9eeee', borderRadius: 28, padding: '36px', boxShadow: '0 10px 30px rgba(13,36,60,0.02)', display: 'flex', flexDirection: 'column', transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}>
              <div style={{ width: 48, height: 48, borderRadius: 16, background: 'rgba(224,20,42,0.08)', color: '#e0142a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 900, marginBottom: 24 }}>
                🤝
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: '#0d2433', margin: '0 0 20px', letterSpacing: '0.06em', fontFamily: 'Poppins, sans-serif' }}>OUR VALUES</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

                {/* Value 1: Compassion */}
                <div className="value-micro-card" style={{ background: '#fffafa', border: '1px solid #fbebeb', padding: '14px 18px', borderRadius: 18, transition: 'all 0.2s' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                    <span style={{ fontSize: 14 }}>❤️</span>
                    <strong style={{ color: '#0d2433', fontSize: 14, fontWeight: 800 }}>Compassion</strong>
                  </div>
                  <span style={{ display: 'block', fontSize: 12.5, color: '#526f84', lineHeight: 1.5, textAlign: 'justify' }}>
                    We believe in treating each patient with kindness, empathy, and respect, fostering a supportive environment for their health journey.
                  </span>
                </div>

                {/* Value 2: Excellence */}
                <div className="value-micro-card" style={{ background: '#fafcfa', border: '1px solid #ebebeb', padding: '14px 18px', borderRadius: 18, transition: 'all 0.2s' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                    <span style={{ fontSize: 14 }}>⭐</span>
                    <strong style={{ color: '#0d2433', fontSize: 14, fontWeight: 800 }}>Excellence</strong>
                  </div>
                  <span style={{ display: 'block', fontSize: 12.5, color: '#526f84', lineHeight: 1.5, textAlign: 'justify' }}>
                    We are dedicated to providing the highest standard of medical care, ensuring every patient receives the best possible treatment and service.
                  </span>
                </div>

                {/* Value 3: Integrity */}
                <div className="value-micro-card" style={{ background: '#f6fbfd', border: '1px solid #ebebeb', padding: '14px 18px', borderRadius: 18, transition: 'all 0.2s' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                    <span style={{ fontSize: 14 }}>🛡️</span>
                    <strong style={{ color: '#0d2433', fontSize: 14, fontWeight: 800 }}>Integrity</strong>
                  </div>
                  <span style={{ display: 'block', fontSize: 12.5, color: '#526f84', lineHeight: 1.5, textAlign: 'justify' }}>
                    We uphold the highest ethical standards in all aspects of our practice, promoting trust and transparency in our relationships with patients and their families
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Breakpoints responsiveness embedded */}
      <style>{`
        /* Staggered dynamic styles */
        .section-container {
          padding: 0 44px !important;
        }

        #intro-grid { transition: all .3s; }
        #legacy-grid { transition: all .3s; }
        #profile-grid { transition: all .3s; }
        
        .specialty-pill:hover {
          border-color: ${TEAL} !important;
          background: #f0f9fb !important;
          color: ${TEAL} !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(14,154,181,0.1) !important;
        }

        .pillar-card:hover {
          transform: translateY(-8px) !important;
          box-shadow: 0 20px 40px rgba(13,36,60,0.08) !important;
        }
        .pillar-card.border-accent-teal:hover {
          border-color: ${TEAL} !important;
        }
        .pillar-card.border-accent-green:hover {
          border-color: ${GREEN} !important;
        }
        .pillar-card.border-accent-red:hover {
          border-color: ${RED} !important;
        }

        .value-micro-card:hover {
          background: #ffffff !important;
          box-shadow: 0 4px 12px rgba(0,0,0,0.03) !important;
          transform: scale(1.01);
        }

        @media (max-width: 1100px) {
          #intro-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          #legacy-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          #profile-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          #ratings-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          #privacy-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          #pillars-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }

        @media (max-width: 640px) {
          .section-container {
            padding: 0 20px !important;
          }
        }
      `}</style>

    </div>
  );
}
