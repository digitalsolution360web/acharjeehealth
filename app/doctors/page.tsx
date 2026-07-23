'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

/* ─── Slug map (matches doctorsData.ts) ─── */
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

/* ─── Doctor Data ─── */
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

/* ─── Doctor Card ─── */
function DoctorCard({ doc, onBook }: { doc: typeof doctors[0]; onBook: () => void }) {
  return (
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
            onClick={onBook}
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
      `}</style>
    </div>
  );
}

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

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDoc: typeof doctors[0] | null;
  doctorsList: typeof doctors;
}

function BookingModal({ isOpen, onClose, selectedDoc, doctorsList }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    doctorId: selectedDoc ? selectedDoc.id : (doctorsList[0]?.id || 1),
    date: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync state when selectedDoc changes
  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: '',
        phone: '',
        email: '',
        doctorId: selectedDoc ? selectedDoc.id : (doctorsList[0]?.id || 1),
        date: '',
        message: '',
      });
      setIsSubmitted(false);
    }
  }, [selectedDoc, isOpen, doctorsList]);

  if (!isOpen) return null;

  const currentDoc = doctorsList.find(d => d.id === Number(formData.doctorId)) || selectedDoc || doctorsList[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneClean = formData.phone.replace(/\D/g, '');
    if (phoneClean.length < 10) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }
    setIsSubmitted(true);
  };

  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(15, 23, 42, 0.65)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: 16,
    }}>
      <div style={{
        background: '#ffffff',
        width: '100%',
        maxWidth: 480,
        borderRadius: 24,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 40px rgba(14, 154, 181, 0.1)',
        overflow: 'hidden',
        position: 'relative',
        border: '1px solid rgba(226, 232, 240, 0.8)',
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 18,
            right: 18,
            width: 32,
            height: 32,
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.2)',
            border: 'none',
            color: '#ffffff',
            fontSize: 20,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s',
            zIndex: 10,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
          aria-label="Close modal"
        >
          &times;
        </button>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Header with gradient strip */}
            <div style={{
              background: 'linear-gradient(135deg, #0e9ab5, #0b3b4a)',
              padding: '28px 28px 24px',
              color: '#ffffff',
            }}>
              <span style={{
                background: 'rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                fontSize: 10,
                fontWeight: 700,
                padding: '4px 12px',
                borderRadius: 20,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                display: 'inline-block',
                marginBottom: 8,
              }}>
                Enquiry Form
              </span>
              <h3 style={{
                fontSize: 22,
                fontWeight: 800,
                margin: 0,
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: '-0.02em',
                color: '#ffffff',
                lineHeight: 1.2,
              }}>
                Book an Enquiry
              </h3>
              <p style={{
                fontSize: 13,
                color: 'rgba(255, 255, 255, 0.85)',
                margin: '6px 0 0',
                lineHeight: 1.4,
              }}>
                Enter your details and our team will connect with you shortly.
              </p>
            </div>

            {/* Form Fields */}
            <div style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: 16 }}>

              {/* Info Badge for Selected Doctor */}
              {selectedDoc ? (
                <div style={{
                  background: '#f0fafc',
                  border: '1px solid #ccecf2',
                  borderRadius: 14,
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  marginBottom: 4,
                }}>
                  <div style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    overflow: 'hidden',
                    position: 'relative',
                    background: '#ffffff',
                    border: '1.5px solid #0e9ab5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    {selectedDoc.image ? (
                      <img src={selectedDoc.image} alt={selectedDoc.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <span style={{ fontSize: 18 }}>👩‍⚕️</span>
                    )}
                  </div>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, color: '#0e9ab5', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Enquiry For Specialist
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#0b3b4a', lineHeight: 1.2, marginTop: 1 }}>
                      {selectedDoc.name}
                    </div>
                    <div style={{ fontSize: 12, color: '#537a9a', marginTop: 1 }}>
                      {selectedDoc.specialty}
                    </div>
                  </div>
                </div>
              ) : (
                <div style={{
                  background: '#f0fafc',
                  border: '1px solid #ccecf2',
                  borderRadius: 14,
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  marginBottom: 4,
                }}>
                  <div style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: '#e0f4f9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0e9ab5',
                    fontSize: 20,
                    flexShrink: 0,
                  }}>
                    🏥
                  </div>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, color: '#0e9ab5', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Enquiry Scope
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#0b3b4a', lineHeight: 1.2, marginTop: 1 }}>
                      General Clinic Consultation
                    </div>
                  </div>
                </div>
              )}

              {/* Full Name */}
              <div>
                <label style={{ fontSize: 13, fontWeight: 700, color: '#334155', display: 'block', marginBottom: 6 }}>
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter patient full name"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: 10,
                    border: '1.5px solid #cbd5e1',
                    fontSize: 14,
                    outline: 'none',
                    boxSizing: 'border-box',
                    fontFamily: 'inherit',
                    color: '#0f172a',
                    transition: 'all 0.2s',
                  }}
                  onFocus={e => {
                    e.currentTarget.style.borderColor = '#0e9ab5';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(14, 154, 181, 0.12)';
                  }}
                  onBlur={e => {
                    e.currentTarget.style.borderColor = '#cbd5e1';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label style={{ fontSize: 13, fontWeight: 700, color: '#334155', display: 'block', marginBottom: 6 }}>
                  Mobile Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter 10-digit mobile number"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  required
                  maxLength={10}
                  pattern="[0-9]{10}"
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: 10,
                    border: '1.5px solid #cbd5e1',
                    fontSize: 14,
                    outline: 'none',
                    boxSizing: 'border-box',
                    fontFamily: 'inherit',
                    color: '#0f172a',
                    transition: 'all 0.2s',
                  }}
                  onFocus={e => {
                    e.currentTarget.style.borderColor = '#0e9ab5';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(14, 154, 181, 0.12)';
                  }}
                  onBlur={e => {
                    e.currentTarget.style.borderColor = '#cbd5e1';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Email Address */}
              <div>
                <label style={{ fontSize: 13, fontWeight: 700, color: '#334155', display: 'block', marginBottom: 6 }}>
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter email (e.g. yourname@gmail.com)"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: 10,
                    border: '1.5px solid #cbd5e1',
                    fontSize: 14,
                    outline: 'none',
                    boxSizing: 'border-box',
                    fontFamily: 'inherit',
                    color: '#0f172a',
                    transition: 'all 0.2s',
                  }}
                  onFocus={e => {
                    e.currentTarget.style.borderColor = '#0e9ab5';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(14, 154, 181, 0.12)';
                  }}
                  onBlur={e => {
                    e.currentTarget.style.borderColor = '#cbd5e1';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>
            </div>

            {/* Footer Actions */}
            <div style={{
              padding: '18px 28px 24px',
              borderTop: '1px solid #f1f5f9',
              background: '#f8fafc',
              display: 'flex',
              justifyContent: 'flex-end',
              gap: 12,
            }}>
              <button
                type="button"
                onClick={onClose}
                style={{
                  padding: '11px 20px',
                  borderRadius: 10,
                  border: '1.5px solid #cbd5e1',
                  background: '#ffffff',
                  color: '#475569',
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#f1f5f9'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#ffffff'; }}
              >
                Cancel
              </button>
              <button
                type="submit"
                style={{
                  padding: '11px 24px',
                  borderRadius: 10,
                  border: 'none',
                  background: 'linear-gradient(135deg, #0e9ab5, #3aaa35)',
                  color: '#ffffff',
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  transition: 'all 0.2s',
                  boxShadow: '0 4px 14px rgba(14, 154, 181, 0.25)',
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
              >
                Submit Enquiry →
              </button>
            </div>
          </form>
        ) : (
          /* Success Screen */
          <div style={{ padding: '40px 32px', textAlign: 'center' }}>
            <div style={{
              width: 72,
              height: 72,
              borderRadius: '50%',
              background: '#ecfdf5',
              border: '3px solid #3aaa35',
              color: '#3aaa35',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 36,
              margin: '0 auto 20px',
            }}>
              ✓
            </div>
            <h3 style={{
              fontSize: 22,
              fontWeight: 800,
              color: '#0f172a',
              margin: '0 0 8px',
              fontFamily: "'Poppins', sans-serif",
            }}>
              Enquiry Received!
            </h3>
            <p style={{
              fontSize: 14,
              color: '#475569',
              lineHeight: 1.6,
              maxWidth: 380,
              margin: '0 auto 24px',
            }}>
              Thank you, <strong style={{ color: '#0f172a' }}>{formData.name}</strong>. Your enquiry for {selectedDoc ? <strong style={{ color: '#0f172a' }}>{selectedDoc.name}</strong> : 'our medical services'} has been successfully submitted.
            </p>
            <div style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: 14,
              padding: 16,
              marginBottom: 28,
              fontSize: 13,
              color: '#64748b',
              textAlign: 'left',
            }}>
              <div style={{ margin: '0 0 6px', display: 'flex', justifyContent: 'space-between' }}>
                <strong>Mobile:</strong> <span>{formData.phone}</span>
              </div>
              <div style={{ margin: '0 0 6px', display: 'flex', justifyContent: 'space-between' }}>
                <strong>Email:</strong> <span>{formData.email}</span>
              </div>
              <div style={{ margin: 0, marginTop: 8, paddingTop: 8, borderTop: '1px solid #e2e8f0', fontSize: 12, lineHeight: 1.4 }}>
                Our healthcare relationship manager will contact you shortly on your registered number or email address.
              </div>
            </div>
            <button
              onClick={onClose}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: 10,
                border: 'none',
                background: 'linear-gradient(135deg, #0e9ab5, #3aaa35)',
                color: '#ffffff',
                fontSize: 14,
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: 'inherit',
                transition: 'all 0.2s',
                boxShadow: '0 4px 14px rgba(14, 154, 181, 0.25)',
              }}
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Main Page ─── */
export default function DoctorsPage() {
  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState<typeof doctors[0] | null>(null);

  const [current, setCurrent] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);

  const filtered = doctors.filter(d =>
    d.name.toLowerCase().includes(search.toLowerCase()) ||
    d.specialty.toLowerCase().includes(search.toLowerCase())
  );

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

  useEffect(() => {
    setCurrent(0);
  }, [search]);

  const maxIndex = Math.max(0, filtered.length - cardsPerView);

  const prev = () => setCurrent(c => Math.max(0, c - 1));
  const next = () => setCurrent(c => Math.min(maxIndex, c + 1));

  return (
    <>
      {/* ── Hero Banner ── */}
      <section style={{
        background: 'linear-gradient(135deg, #0e9ab5 0%, #3aaa35 60%, #0e9ab5 100%)',
        padding: '60px 24px 50px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: -60, left: -60, width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,255,255,0.07)' }} />
        <div style={{ position: 'absolute', bottom: -40, right: -40, width: 160, height: 160, borderRadius: '50%', background: 'rgba(255,255,255,0.07)' }} />

        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 14, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', margin: '0 0 12px' }}>
          🏥 Acharjee Health Clinic & Pharmacy
        </p>
        <h1 style={{ color: '#fff', fontSize: 'clamp(26px, 5vw, 44px)', fontWeight: 800, margin: '0 0 16px', fontFamily: "'Poppins', sans-serif", lineHeight: 1.2 }}>
          Meet Our Expert Doctors
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: 16, maxWidth: 560, margin: '0 auto 36px', lineHeight: 1.7 }}>
          Trusted specialists with decades of experience, dedicated to providing world-class healthcare in Asansol & beyond.
        </p>

        {/* Search */}
        <div style={{ maxWidth: 480, margin: '0 auto', position: 'relative' }}>
          <input
            type="text"
            placeholder="Search by name or specialty…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width: '100%',
              padding: '14px 20px 14px 48px',
              borderRadius: 50,
              border: 'none',
              fontSize: 15,
              boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
              outline: 'none',
              fontFamily: "'Inter', sans-serif",
              boxSizing: 'border-box',
            }}
          />
          <svg style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }}
            width="19" height="19" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>


      </section>



      {/* ── Cards Section ── */}
      <section style={{ background: '#f8fafc', padding: 'clamp(32px, 5vw, 60px) clamp(16px, 4vw, 48px)', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1520, margin: '0 auto' }}>

          {/* Section header */}
          <div style={{ textAlign: 'center', marginBottom: 20 }}>
            <span style={{
              display: 'inline-block',
              fontSize: 11.5,
              fontWeight: 700,
              letterSpacing: '0.2em',
              color: '#0e9ab5',
              textTransform: 'uppercase',
              marginBottom: 14,
            }}>
              OUR SPECIALISTS
            </span>
          </div>

          {/* Slider */}
          {filtered.length > 0 ? (
            <div style={{ position: 'relative' }}>
              {/* Arrow Controls Row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, marginBottom: 24, alignItems: 'center', flexWrap: 'wrap' }}>
                <span style={{ fontSize: 15, color: '#64748b', fontWeight: 600 }}>
                  {/* Showing {filtered.length} doctor{filtered.length > 1 ? 's' : ''} matching search */}
                </span>
                <div style={{ display: 'flex', gap: 12 }}>
                  <button
                    onClick={prev}
                    disabled={current === 0}
                    style={{
                      width: 42, height: 42, borderRadius: '50%',
                      border: `2px solid ${current === 0 ? '#e2e8f0' : '#0e9ab5'}`,
                      background: current === 0 ? '#f8fafc' : '#fff',
                      color: current === 0 ? '#cbd5e1' : '#0e9ab5',
                      cursor: current === 0 ? 'not-allowed' : 'pointer',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 20, fontWeight: 700,
                      transition: 'all 0.2s',
                    }}
                    aria-label="Previous doctors"
                  >
                    ‹
                  </button>
                  <button
                    onClick={next}
                    disabled={current >= maxIndex}
                    style={{
                      width: 42, height: 42, borderRadius: '50%',
                      border: `2px solid ${current >= maxIndex ? '#e2e8f0' : '#0e9ab5'}`,
                      background: current >= maxIndex ? '#f8fafc' : 'linear-gradient(135deg, #0e9ab5, #0b3b4a)',
                      color: current >= maxIndex ? '#cbd5e1' : '#fff',
                      cursor: current >= maxIndex ? 'not-allowed' : 'pointer',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 20, fontWeight: 700,
                      transition: 'all 0.2s',
                    }}
                    aria-label="Next doctors"
                  >
                    ›
                  </button>
                </div>
              </div>

              {/* Slider Track Wrapper */}
              <div style={{ overflow: 'hidden', borderRadius: 20 }}>
                <div
                  style={{
                    display: 'flex',
                    transform: `translateX(-${current * (100 / cardsPerView)}%)`,
                    transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
                    willChange: 'transform',
                  }}
                >
                  {filtered.map(doc => (
                    <div
                      key={doc.id}
                      style={{
                        flex: `0 0 ${100 / cardsPerView}%`,
                        padding: '0 12px',
                        boxSizing: 'border-box',
                      }}
                    >
                      <DoctorCard
                        doc={doc}
                        onBook={() => {
                          setSelectedDoc(doc);
                          setIsModalOpen(true);
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Dot Indicators */}
              {maxIndex > 0 && (
                <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 32 }}>
                  {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      style={{
                        width: i === current ? 24 : 8,
                        height: 8,
                        borderRadius: 4,
                        background: i === current ? '#0e9ab5' : '#cbd5e1',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        padding: 0,
                      }}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: '#6b7280' }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
              <p style={{ fontSize: 18, fontWeight: 600 }}>No doctors found for "{search}"</p>
              <button onClick={() => setSearch('')} style={{ marginTop: 12, padding: '10px 24px', background: '#0e9ab5', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 600 }}>
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA Strip ── */}
      <section style={{ background: 'linear-gradient(135deg, #1a2540, #0e9ab5)', padding: '50px 24px', textAlign: 'center' }}>
        <h2 style={{ color: '#fff', fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 800, margin: '0 0 12px', fontFamily: "'Poppins', sans-serif" }}>
          Ready to Book Your Appointment?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15, margin: '0 0 28px' }}>
          Contact us at 07364921002 or book online — our team is here to help.
        </p>
        <button
          onClick={() => {
            setSelectedDoc(null);
            setIsModalOpen(true);
          }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: '#e0142a', color: '#fff', fontWeight: 700,
            padding: '14px 36px', borderRadius: 50, textDecoration: 'none',
            fontSize: 15, boxShadow: '0 8px 24px rgba(224,20,42,0.4)',
            transition: 'all 0.2s', border: 'none', cursor: 'pointer',
            fontFamily: 'inherit',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.03)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
        >
          📅 Book An Appointment
        </button>
      </section>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedDoc={selectedDoc}
        doctorsList={doctors}
      />

      <style>{`
        @media (max-width: 768px) {
          .doctor-card { border-radius: 14px; }
          .card-body { padding: 14px 16px 16px; }
        }
        @media (min-width: 1200px) {
          [data-grid] { grid-template-columns: repeat(4, 1fr) !important; }
        }
      `}</style>
    </>
  );
}
