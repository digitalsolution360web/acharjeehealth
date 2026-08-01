'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TEAL = '#0e9ab5';
const GREEN = '#3aaa35';

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
  { id: 1, image: '/d.png', name: 'Dr. Binidra Banerjee', qualification: 'MBBS, MD (Gastroenterology)', specialty: 'Gastroenterology', role: 'Gastroenterologist', department: 'Gastroenterology' },
  { id: 2, image: '/d1.png', name: 'Dr. Atri Bandyopadhyay', qualification: 'MBBS, MS (ENT)', specialty: 'ENT & Head Neck Surgery', role: 'ENT Specialist', department: 'ENT & Head Neck Surgery' },
  { id: 3, image: '/d2.png', name: 'Dr. Rupam Sil', qualification: 'MBBS, MS (ENT)', specialty: 'ENT & Head Neck Surgery', role: 'ENT Specialist', department: 'ENT & Head Neck Surgery' },
  { id: 4, image: '/d3.png', name: 'Dr. Ananth Egoor', qualification: 'MBBS, DM (Neurology)', specialty: 'Neurosurgery', role: 'Neurosurgery Specialist', department: 'Neurosurgery' },
  { id: 5, image: '/d4.png', name: 'Dr. Shibasis Chatterjee', qualification: 'MBBS, MD (Dermatology)', specialty: 'Dermatology', role: 'Dermatologist', department: 'Dermatology' },
  { id: 6, image: '/d5.png', name: 'Dr. Raghuram Tangirala', qualification: 'MBBS, MD, DM', specialty: 'Gastroenterology', role: 'Gastroenterologist', department: 'Gastroenterology' },
  { id: 7, image: '/d6.jpeg', name: 'Dr. P. Kranthi Kumar', qualification: 'MBBS, MD, DM (Gastroenterology)', specialty: 'Gastroenterology', role: 'Consultant Gastroenterologist', department: 'Gastroenterology' },
  { id: 8, image: '/d7.jpg', name: 'Dr. Sanjeev Kr. Suman', qualification: 'MBBS, DM (Neurology)', specialty: 'Neurology', role: 'Neurologist', department: 'Neurology' },
  { id: 9, image: '/d8.png', name: 'Dr. Rituparna Mukherjee', qualification: 'MBBS, MS (ENT)', specialty: 'ENT & Head Neck Surgery', role: 'ENT & Head Neck Surgeon', department: 'ENT & Head Neck Surgery' },
  { id: 10, image: '/d9.png', name: 'Dr. K. Seshu Mohan', qualification: 'MBBS, MS, MCh', specialty: 'Urology', role: 'Urologist', department: 'Urology' },
  { id: 11, image: '/d10.png', name: 'Dr. Pradip Sarkar', qualification: 'MBBS, MD (Cardiology)', specialty: 'Cardiology', role: 'Cardiology Specialist', department: 'Cardiology' },
  { id: 12, image: '/d11.png', name: 'Dr. Aishwarya Bhattacharya', qualification: 'MBBS, MS (Obs & Gynae)', specialty: 'Gynaecology', role: 'Gynaecologist & Obstetrician', department: 'Gynaecology' },
  { id: 13, image: '/d12.png', name: 'Dr. Nibedita Kabiraj', qualification: 'MBBS, DCH', specialty: 'Paediatrics', role: 'Child Specialist', department: 'Paediatrics' },
  { id: 14, image: '/d13.png', name: 'Dr. Ratnakar Rao K', qualification: 'MBBS, MS (Orthopaedics)', specialty: 'Orthopaedics', role: 'Orthopaedician', department: 'Orthopaedics' },
  { id: 15, image: '/d14.png', name: 'Dr. Riya Sinha', qualification: 'MBBS, MS (ENT & Head and Neck Surgery)', specialty: 'ENT & Head Neck Surgery', role: 'ENT & Head Neck Surgeon', department: 'ENT & Head Neck Surgery' },
];

const departments = ['All departments', ...Array.from(new Set(doctors.map(d => d.department)))];

function DoctorCard({ doc }: { doc: typeof doctors[0] }) {
  return (
    <div className="ds-card">
      <div className="ds-card-badge">{doc.specialty.toUpperCase()}</div>
      <div className="ds-card-img-wrap">
        <Image src={doc.image} alt={doc.name} fill sizes="200px" style={{ objectFit: 'cover', objectPosition: 'top center' }} />
      </div>
      <div className="ds-card-body">
        <h3 className="ds-card-name">{doc.name}</h3>
        <p className="ds-card-qual">{doc.qualification}</p>
        <p className="ds-card-role">{doc.role}</p>
        <div className="ds-card-actions">
          <Link href={`/doctors/${slugs[doc.id]}`} className="ds-btn-outline">View Profile</Link>
          <button className="ds-btn-solid" onClick={() => window.dispatchEvent(new CustomEvent('open-enquiry-modal'))}>Book</button>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({ items, reverse }: { items: typeof doctors; reverse?: boolean }) {
  const tripled = [...items, ...items, ...items];
  return (
    <div className="ds-marquee-outer">
      <div className={`ds-marquee-track ${reverse ? 'ds-rtl' : 'ds-ltr'}`}>
        {tripled.map((doc, i) => (
          <div key={`${reverse ? 'r' : 'l'}-${i}`} className="ds-slide">
            <DoctorCard doc={doc} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DoctorSlider() {
  const [search, setSearch] = useState('');
  const [dept, setDept] = useState('All departments');

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return doctors.filter(d => {
      const matchDept = dept === 'All departments' || d.department === dept;
      const matchSearch = !q || d.name.toLowerCase().includes(q) || d.specialty.toLowerCase().includes(q) || d.qualification.toLowerCase().includes(q) || d.role.toLowerCase().includes(q);
      return matchDept && matchSearch;
    });
  }, [search, dept]);

  const isFiltered = search.trim() !== '' || dept !== 'All departments';
  const row1 = doctors.slice(0, 8);
  const row2 = doctors.slice(8);

  return (
    <section id="doctor-slider-section" className="ds-section">
      <div className="ds-container">
        <div className="ds-header">
          <div>
            <span className="ds-eyebrow">OUR SPECIALIST TEAM</span>
            <h2 className="ds-title">Meet Our Doctors</h2>
            <p className="ds-subtitle">Two moving rows on desktop and a touch-friendly swipe experience on mobile.</p>
          </div>
          <Link href="/doctors" className="ds-view-all">
            View All Doctors
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        <div className="ds-search-bar">
          <div className="ds-search-input-wrap">
            <svg className="ds-search-icon" width="18" height="18" fill="none" stroke="#9ca3af" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
            </svg>
            <input type="text" className="ds-search-input" placeholder="Search doctor, speciality or qualification" value={search} onChange={e => setSearch(e.target.value)} />
            {search && <button className="ds-search-clear" onClick={() => setSearch('')} aria-label="Clear">✕</button>}
          </div>
          <div className="ds-dept-wrap">
            <select className="ds-dept-select" value={dept} onChange={e => setDept(e.target.value)}>
              {departments.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
            <svg className="ds-dept-arrow" width="14" height="14" fill="none" stroke="#0e9ab5" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {isFiltered ? (
        <div className="ds-container">
          {filtered.length === 0 ? (
            <div className="ds-no-results">
              <svg width="48" height="48" fill="none" stroke="#cbd5e1" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path strokeLinecap="round" d="M21 21l-4.35-4.35" /></svg>
              <p>No doctors found for your search.</p>
              <button onClick={() => { setSearch(''); setDept('All departments'); }}>Clear filters</button>
            </div>
          ) : (
            <div className="ds-grid">{filtered.map(doc => <DoctorCard key={doc.id} doc={doc} />)}</div>
          )}
        </div>
      ) : (
        <div className="ds-container">
          <div className="ds-marquee-wrap">
            <div style={{ marginBottom: 16 }}><MarqueeRow items={row1} /></div>
            <MarqueeRow items={row2} reverse />
          </div>
        </div>
      )}

      <style>{`
        .ds-section { background: #f8fafb; padding: 64px 0 72px; overflow: hidden; }
        .ds-container { max-width: 1520px; margin: 0 auto; padding: 0 clamp(16px,4vw,44px); }
        .ds-header { display: flex; align-items: flex-end; justify-content: space-between; flex-wrap: wrap; gap: 16px; margin-bottom: 28px; }
        .ds-eyebrow { display: block; font-size: 11.5px; font-weight: 700; letter-spacing: 0.18em; color: #0e9ab5; text-transform: uppercase; margin-bottom: 8px; font-family: 'Poppins', sans-serif; }
        .ds-title { font-size: clamp(22px,2.4vw,32px); font-weight: 800; color: #0b2a3a; font-family: 'Poppins', sans-serif; margin: 0 0 6px; line-height: 1.2; }
        .ds-subtitle { color: #64748b; font-size: 14px; margin: 0; }
        .ds-view-all { display: inline-flex; align-items: center; gap: 8px; background: #15945D; color: #fff; text-decoration: none; padding: 11px 26px; border-radius: 50px; font-size: 14px; font-weight: 700; font-family: 'Poppins',sans-serif; box-shadow: 0 6px 24px rgba(21,148,93,.3); transition: all .3s; white-space: nowrap; letter-spacing: .02em; }
        .ds-view-all:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(21,148,93,.45); background: #11784b; }
        .ds-search-bar { display: flex; align-items: center; background: #fff; border: 1.5px solid #e2e8f0; border-radius: 8px; box-shadow: 0 2px 12px rgba(0,0,0,.07); margin-bottom: 36px; overflow: hidden; }
        .ds-search-input-wrap { flex: 1; display: flex; align-items: center; gap: 10px; padding: 0 16px; min-width: 0; }
        .ds-search-icon { flex-shrink: 0; }
        .ds-search-input { flex: 1; border: none; outline: none; font-size: 14px; color: #1e293b; background: transparent; padding: 14px 0; font-family: 'Poppins',sans-serif; min-width: 0; }
        .ds-search-input::placeholder { color: #9ca3af; }
        .ds-search-clear { border: none; background: none; cursor: pointer; color: #94a3b8; font-size: 14px; padding: 2px 4px; flex-shrink: 0; transition: color .2s; }
        .ds-search-clear:hover { color: #e53935; }
        .ds-dept-wrap { position: relative; border-left: 1.5px solid #e2e8f0; flex-shrink: 0; }
        .ds-dept-select { appearance: none; border: none; outline: none; background: transparent; font-size: 14px; color: #1e293b; padding: 14px 40px 14px 16px; font-family: 'Poppins',sans-serif; cursor: pointer; font-weight: 500; min-width: 160px; }
        .ds-dept-arrow { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); pointer-events: none; }
        .ds-card { width: 220px; flex-shrink: 0; background: #fff; border-radius: 8px; border: 1px solid #e8eef3; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,.07); display: flex; flex-direction: column; transition: transform .28s ease,box-shadow .28s ease; cursor: pointer; position: relative; height: 335px; }
        .ds-card:hover { transform: translateY(-6px); box-shadow: 0 14px 36px rgba(0,0,0,.13); }
        .ds-card-badge { position: absolute; top: 0; left: 0; right: 0; background: #0e9ab5; color: #fff; font-size: 9.5px; font-weight: 800; letter-spacing: .1em; text-align: center; padding: 5px 8px; z-index: 2; font-family: 'Poppins',sans-serif; }
        .ds-card-img-wrap { position: relative; width: 100%; height: 180px; min-height: 180px; background: #eef6f9; overflow: hidden; flex-shrink: 0; }
        .ds-card-body { padding: 10px 12px 12px; display: flex; flex-direction: column; flex: 1; border-top: 1px solid #f0f4f7; justify-content: space-between; }
        .ds-card-name { margin: 0; font-size: 13px; font-weight: 800; color: #0b2a3a; font-family: 'Poppins',sans-serif; line-height: 1.25; height: 33px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .ds-card-qual { margin: 2px 0 0; font-size: 10.5px; color: #64748b; line-height: 1.35; height: 28px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .ds-card-role { margin: 2px 0 0; font-size: 10.5px; color: #0e9ab5; font-weight: 600; line-height: 1.3; height: 15px; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; }
        .ds-card-actions { display: flex; gap: 6px; margin-top: 8px; padding-top: 4px; }
        .ds-btn-outline { flex: 1; display: flex; align-items: center; justify-content: center; height: 28px; border-radius: 4px; border: 1.5px solid #15945D; color: #15945D; background: transparent; font-size: 10px; font-weight: 700; text-decoration: none; font-family: 'Poppins',sans-serif; white-space: nowrap; transition: all .2s; }
        .ds-btn-outline:hover { background: #15945D; color: #fff; }
        .ds-btn-solid { flex: 0 0 auto; height: 28px; padding: 0 12px; border-radius: 4px; border: none; background: #15945D; color: #fff; font-size: 10px; font-weight: 700; font-family: 'Poppins',sans-serif; cursor: pointer; white-space: nowrap; transition: all .2s; }
        .ds-btn-solid:hover { background: #11784b; }
        .ds-marquee-wrap { overflow: hidden; }
        .ds-marquee-outer { overflow: visible; width: 100%; }
        .ds-marquee-track { display: flex; width: max-content; align-items: stretch; }
        .ds-slide { padding: 0 8px; display: flex; }
        .ds-ltr { animation: ds-scroll-ltr 38s linear infinite; }
        .ds-rtl { animation: ds-scroll-rtl 38s linear infinite; }
        .ds-marquee-outer:hover .ds-marquee-track { animation-play-state: paused; }
        @keyframes ds-scroll-ltr { 0% { transform: translateX(0); } 100% { transform: translateX(-33.333%); } }
        @keyframes ds-scroll-rtl { 0% { transform: translateX(-33.333%); } 100% { transform: translateX(0); } }
        .ds-grid { display: grid; grid-template-columns: repeat(auto-fill,minmax(200px,1fr)); gap: 20px; padding: 8px 0 16px; }
        .ds-grid .ds-card { width: auto; }
        .ds-no-results { text-align: center; padding: 64px 24px; color: #94a3b8; display: flex; flex-direction: column; align-items: center; gap: 12px; }
        .ds-no-results p { font-size: 15px; margin: 0; }
        .ds-no-results button { margin-top: 8px; padding: 9px 22px; border-radius: 6px; border: 1.5px solid #0e9ab5; color: #0e9ab5; background: transparent; font-size: 13px; font-weight: 700; cursor: pointer; font-family: 'Poppins',sans-serif; transition: all .2s; }
        .ds-no-results button:hover { background: #0e9ab5; color: #fff; }
        @media (max-width: 600px) {
          .ds-search-bar { flex-direction: column; }
          .ds-dept-wrap { border-left: none; border-top: 1.5px solid #e2e8f0; width: 100%; }
          .ds-dept-select { width: 100%; }
          .ds-header { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </section>
  );
}
