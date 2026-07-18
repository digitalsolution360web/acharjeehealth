'use client';

import Image from 'next/image';
import Link from 'next/link';

const TEAL = '#0e9ab5';
const GREEN = '#3aaa35';
const RED = '#e0142a';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Doctors', href: '/doctors' },
  { label: 'Services', href: '/services' },
  { label: 'Lab Tests', href: '/lab-test' },
  { label: 'Our Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
];

const services = [
  { label: 'Health Checkup', href: '/services/health-checkup' },
  { label: 'Pharmacy / Medicines', href: '/services/pharmacy' },
  { label: 'Diagnostics & Lab', href: '/services/diagnostics' },
  { label: 'Doctor Consultations', href: '/services/consultations' },
  { label: 'Emergency Care', href: '/contact' },
  { label: 'Home Sample Collection', href: '/services/diagnostics' },
];

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    color: '#1877f2',
    icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    color: '#e1306c',
    icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />,
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    color: '#ff0000',
    icon: <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="site-footer" style={{ background: 'linear-gradient(175deg, #06182a 0%, #091e30 60%, #061422 100%)', color: '#cbd5e1', position: 'relative', overflow: 'hidden' }}>

      {/* Top decorative gradient line */}
      <div style={{ height: 4, background: `linear-gradient(90deg, ${TEAL}, ${GREEN}, ${RED}, ${GREEN}, ${TEAL})` }} />

      {/* Background grid */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />

      {/* Glow blobs */}
      <div style={{ position: 'absolute', top: '10%', left: '-5%', width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(14,154,181,0.12) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '-5%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(58,170,53,0.1) 0%, transparent 70%)', filter: 'blur(35px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1440, margin: '0 auto', padding: 'clamp(40px, 5vw, 64px) clamp(16px, 4vw, 40px) 0', position: 'relative', zIndex: 1 }}>

        {/* ── Main Grid ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1.2fr', gap: '48px', marginBottom: 56 }} id="footer-grid">

          {/* Col 1: Brand */}
          <div>
            <div style={{ marginBottom: 22 }}>
              <Image src="/logoo.png" alt="Acharjee Health Clinic & Pharmacy" width={160} height={52} style={{ height: 52, width: 'auto', objectFit: 'contain', borderRadius: 6 }} />
            </div>
            <p style={{ fontSize: 13.5, color: '#94a3b8', lineHeight: 1.75, marginBottom: 24, maxWidth: 280 }}>
              Acharjee Health Clinic &amp; Pharmacy — 48 years of trusted, compassionate healthcare serving Asansol and beyond.
            </p>
            {/* Contact Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { icon: '📞', text: '07364 921002', href: 'tel:07364921002' },
                { icon: '✉️', text: 'acharjeeclinic@gmail.com', href: 'mailto:acharjeeclinic@gmail.com' },
                { icon: '📍', text: 'Asansol, West Bengal, India', href: '/contact' },
              ].map((item, i) => (
                <a key={i} href={item.href} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: '#94a3b8', fontSize: 13.5, transition: 'color 0.2s' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#7de8f8'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#94a3b8'; }}
                >
                  <span style={{ fontSize: 14 }}>{item.icon}</span>
                  <span>{item.text}</span>
                </a>
              ))}
            </div>
            {/* Social Icons */}
            <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{ width: 38, height: 38, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.22s', textDecoration: 'none' }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = s.color; el.style.borderColor = s.color; el.style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(255,255,255,0.08)'; el.style.borderColor = 'rgba(255,255,255,0.12)'; el.style.transform = 'translateY(0)'; }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">{s.icon}</svg>
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 800, color: '#fff', fontFamily: 'Poppins, sans-serif', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 22, paddingBottom: 12, borderBottom: `2px solid ${TEAL}44` }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}
                    style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#94a3b8', fontSize: 13.5, textDecoration: 'none', transition: 'color 0.2s, gap 0.2s' }}
                    onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = '#7de8f8'; el.style.gap = '12px'; }}
                    onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = '#94a3b8'; el.style.gap = '8px'; }}
                  >
                    <span style={{ color: TEAL, fontSize: 11 }}>›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 800, color: '#fff', fontFamily: 'Poppins, sans-serif', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 22, paddingBottom: 12, borderBottom: `2px solid ${GREEN}44` }}>
              Our Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {services.map((s) => (
                <li key={s.label}>
                  <Link href={s.href}
                    style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#94a3b8', fontSize: 13.5, textDecoration: 'none', transition: 'color 0.2s, gap 0.2s' }}
                    onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = '#7de8f8'; el.style.gap = '12px'; }}
                    onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = '#94a3b8'; el.style.gap = '8px'; }}
                  >
                    <span style={{ color: GREEN, fontSize: 11 }}>›</span> {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Book Appointment CTA */}
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 800, color: '#fff', fontFamily: 'Poppins, sans-serif', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 22, paddingBottom: 12, borderBottom: `2px solid ${RED}44` }}>
              Book Appointment
            </h4>
            <p style={{ fontSize: 13.5, color: '#94a3b8', lineHeight: 1.7, marginBottom: 22 }}>
              Get expert medical care without the wait. Book your appointment online and let us take care of the rest.
            </p>
            <a href="/appointment"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: `linear-gradient(135deg, ${RED}, #b01020)`, color: '#fff', fontWeight: 700, fontSize: 14, padding: '14px 24px', borderRadius: 12, textDecoration: 'none', boxShadow: `0 8px 24px rgba(224,20,42,0.3)`, transition: 'all 0.25s', marginBottom: 16 }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-3px)'; el.style.boxShadow = '0 14px 32px rgba(224,20,42,0.45)'; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(0)'; el.style.boxShadow = '0 8px 24px rgba(224,20,42,0.3)'; }}
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Appointment
            </a>
            {/* Working Hours */}
            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '16px 18px' }}>
              <p style={{ fontSize: 11.5, fontWeight: 700, color: TEAL, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10 }}>Working Hours</p>
              {[
                { day: 'Mon – Sat', time: '8:00 AM – 8:00 PM' },
                { day: 'Sunday', time: '9:00 AM – 2:00 PM' },
                { day: 'Emergency', time: '24 / 7 Available' },
              ].map((h, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontSize: 12.5, color: '#94a3b8' }}>{h.day}</span>
                  <span style={{ fontSize: 12.5, color: '#fff', fontWeight: 600 }}>{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 13, color: '#64748b', margin: 0 }}>
            © {year} <span style={{ color: TEAL, fontWeight: 600 }}>Acharjee Health Clinic &amp; Pharmacy</span>. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((t) => (
              <Link key={t} href="/" style={{ fontSize: 12.5, color: '#64748b', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = TEAL; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#64748b'; }}
              >{t}</Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1200px) { #footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; } }
        @media (max-width: 640px) { 
          #footer-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
          #site-footer .bottom-bar { flex-direction: column !important; text-align: center !important; }
        }
      `}</style>
    </footer>
  );
}
