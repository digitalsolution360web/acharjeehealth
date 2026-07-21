'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  {
    label: 'Doctors List',
    href: '/doctors',
    dropdown: [
      { label: 'General Physician', href: '/doctors' },
      { label: 'Specialist Doctors', href: '/doctors' },
      { label: 'Meet Our Team', href: '/doctors' },
    ],
  },
  { label: 'Lab Test', href: '/lab-test' },
  { label: 'Appointment', href: '/appointment' },
  { label: 'Our Gallery', href: '/gallery' },
  { label: 'Health Tips', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
];

/* ─── colours ─── */
const TEAL = '#0e9ab5';
const GREEN = '#3aaa35';
const RED = '#e0142a';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>


      {/* ══════════════ MAIN NAV ══════════════ */}
      <nav
        className="sticky top-0 z-50 transition-shadow duration-300"
        style={{
          background: '#ffffff',
          boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,.12)' : '0 2px 10px rgba(0,0,0,.08)',
          borderBottom: '1px solid #f0f0f0',
        }}
      >
        <div style={{ maxWidth: 1520, margin: '0 auto', padding: '0 clamp(16px, 3vw, 44px)', height: 84 }}
          className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center" style={{ height: 84 }}>
            <Image src="/logoo.png" alt="Acharjee Health Clinic & Pharmacy"
              width={175} height={56} priority
              style={{ height: '56px', width: 'auto', objectFit: 'contain', borderRadius: 6 }} />
          </Link>

          {/* ── Desktop links (hidden < 1100 px) ── */}
          <div className="items-center" style={{ display: 'flex', gap: 2 }}
            id="desktop-nav">
            {navItems.map(item =>
              item.dropdown
                ? (
                  <div key={item.label} style={{ position: 'relative' }}
                    onMouseEnter={() => setHovered(item.label)}
                    onMouseLeave={() => setHovered(null)}>

                    <Link href={item.href} style={{ textDecoration: 'none' }}>
                      <span style={navLinkStyle(hovered === item.label)}
                        className="flex items-center gap-1 cursor-pointer select-none">
                        {item.label}
                        <svg style={{ width: 12, height: 12, transition: 'transform .2s', transform: hovered === item.label ? 'rotate(180deg)' : 'none', opacity: .6 }}
                          fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </Link>
                    {/* Underline */}
                    <span style={{
                      position: 'absolute', bottom: 0, left: 12, right: 12, height: 2,
                      background: `linear-gradient(90deg, ${TEAL}, ${GREEN})`,
                      borderRadius: 2,
                      transform: hovered === item.label ? 'scaleX(1)' : 'scaleX(0)',
                      transformOrigin: 'left',
                      transition: 'transform .25s',
                    }} />

                    {/* Dropdown */}
                    {hovered === item.label && (
                      <div style={{
                        position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
                        marginTop: 4, background: '#fff', borderRadius: 10,
                        boxShadow: '0 16px 48px rgba(0,0,0,.14)',
                        minWidth: 200, padding: '6px 0', zIndex: 100,
                        borderTop: `3px solid ${TEAL}`,
                      }}>
                        {item.dropdown.map(sub => (
                          <Link key={sub.label} href={sub.href}
                            style={dropItemStyle}
                            onMouseEnter={e => Object.assign((e.target as HTMLElement).style, dropItemHover)}
                            onMouseLeave={e => Object.assign((e.target as HTMLElement).style, dropItemStyle)}>
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
                : (
                  <Link key={item.label} href={item.href}
                    style={navLinkStyle(false)}
                    className="group relative"
                    onMouseEnter={e => Object.assign((e.currentTarget.children[0] as HTMLElement).style, { transform: 'scaleX(1)' })}
                    onMouseLeave={e => Object.assign((e.currentTarget.children[0] as HTMLElement).style, { transform: 'scaleX(0)' })}
                  >
                    {item.label}
                    <span style={{
                      position: 'absolute', bottom: 0, left: 12, right: 12, height: 2,
                      background: `linear-gradient(90deg, ${TEAL}, ${GREEN})`,
                      borderRadius: 2, transform: 'scaleX(0)',
                      transformOrigin: 'left', transition: 'transform .25s',
                    }} />
                  </Link>
                )
            )}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <a href="/appointment"
              className="hidden sm:flex items-center gap-2 text-white font-bold rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              style={{
                background: `linear-gradient(135deg,${RED},#c01020)`,
                padding: '11px 22px', fontSize: 14,
                letterSpacing: '0.02em',
                boxShadow: '0 4px 18px rgba(224,20,42,.4)',
                textDecoration: 'none', whiteSpace: 'nowrap',
              }}>
              <CalIcon /> Book Appointment
            </a>

            {/* Hamburger — visible < 1100px */}
            <button id="hamburger-btn"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="flex flex-col justify-center items-center gap-1.5 rounded-lg transition-colors"
              style={{ width: 44, height: 44, background: `rgba(14,154,181,0.08)`, border: `1px solid rgba(14,154,181,0.2)` }}>
              <span style={{ display: 'block', width: 26, height: 2.5, background: TEAL, borderRadius: 2 }} />
              <span style={{ display: 'block', width: 20, height: 2.5, background: TEAL, borderRadius: 2 }} />
              <span style={{ display: 'block', width: 26, height: 2.5, background: TEAL, borderRadius: 2 }} />
            </button>
          </div>
        </div>

        {/* Gradient accent line */}
        <div style={{ height: 3, background: `linear-gradient(90deg, ${GREEN}, #7ed957, ${GREEN})` }} />
      </nav>

      {/* ══════════════ MOBILE MENU ══════════════ */}
      {mobileOpen && (
        <div id="mobile-overlay" className="fixed inset-0 flex flex-col overflow-y-auto"
          style={{ zIndex: 9999, background: 'rgba(8,8,24,0.77)', backdropFilter: 'blur(12px)' }}>

          {/* Close */}
          <button onClick={() => setMobileOpen(false)} aria-label="Close"
            className="absolute top-4 right-4 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
            style={{ width: 40, height: 40 }}>
            <svg style={{ width: 20, height: 20, stroke: '#fff' }} fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div style={{ padding: '72px 24px 32px' }} className="flex flex-col flex-1">
            <Image src="/logoo.png" alt="Acharjee" width={175} height={56}
              style={{ height: '56px', width: 'auto', objectFit: 'contain', marginBottom: 32, borderRadius: 6 }} />

            <div style={{ borderTop: '1px solid rgba(255,255,255,.08)' }}>
              {navItems.map(item => (
                <div key={item.label} style={{ borderBottom: '1px solid rgba(255,255,255,.08)' }}>
                  {item.dropdown ? (
                    <>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Link href={item.href} onClick={() => setMobileOpen(false)}
                          className="block text-white hover:text-[#0e9ab5] transition-colors font-semibold"
                          style={{ padding: '16px 0', fontSize: 17, textDecoration: 'none' }}>
                          {item.label}
                        </Link>
                        <button onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                          className="flex items-center justify-between text-left text-white font-semibold hover:text-[#0e9ab5] transition-colors"
                          style={{ padding: '12px 0 12px 8px', fontSize: 16 }}>
                          <span className="text-sm text-slate-300">View categories</span>
                          <svg style={{ width: 16, height: 16, transition: 'transform .2s', transform: mobileExpanded === item.label ? 'rotate(180deg)' : 'none', color: mobileExpanded === item.label ? TEAL : '#9ca3af' }}
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                      {mobileExpanded === item.label && (
                        <div style={{ paddingLeft: 16, paddingBottom: 12 }}>
                          {item.dropdown.map(sub => (
                            <Link key={sub.label} href={sub.href} onClick={() => setMobileOpen(false)}
                              className="block text-gray-400 hover:text-[#0e9ab5] transition-colors"
                              style={{ padding: '8px 0', fontSize: 15, textDecoration: 'none' }}>
                              › {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link href={item.href} onClick={() => setMobileOpen(false)}
                      className="block text-white hover:text-[#0e9ab5] transition-colors font-semibold"
                      style={{ padding: '16px 0', fontSize: 17, textDecoration: 'none' }}>
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <a href="/appointment" onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full text-white font-bold rounded-xl"
              style={{
                marginTop: 32, padding: '14px 0', fontSize: 16,
                background: `linear-gradient(135deg,${RED},#c01020)`,
                textDecoration: 'none',
              }}>
              <CalIcon /> Book Appointment
            </a>
          </div>
        </div>
      )}

      {/* ────── Responsive: hide desktop-nav < 1100px ────── */}
      <style>{`
        #desktop-nav { display: flex; }
        #hamburger-btn { display: none; }
        @media (max-width: 1099px) {
          #desktop-nav { display: none !important; }
          #hamburger-btn { display: flex !important; }
        }
        /* Ensure mobile overlay doesn't appear on wide screens */
        @media (min-width: 1100px) {
          #mobile-overlay { display: none !important; }
        }
      `}</style>
    </>
  );
}

/* ── Styles ── */
const navLinkStyle = (active: boolean): React.CSSProperties => ({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  padding: '10px 14px',
  fontSize: 14.5,
  fontWeight: 700,
  letterSpacing: '0.01em',
  color: active ? '#0e9ab5' : '#1a2540',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  transition: 'color .2s',
  cursor: 'pointer',
});

const dropItemStyle: React.CSSProperties = {
  display: 'block',
  padding: '11px 22px',
  fontSize: 14,
  fontWeight: 500,
  color: '#374151',
  textDecoration: 'none',
  borderLeft: '3px solid transparent',
  transition: 'all .18s',
  cursor: 'pointer',
};

const dropItemHover: React.CSSProperties = {
  ...dropItemStyle,
  color: '#0e9ab5',
  background: '#e8f8fc',
  borderLeftColor: '#0e9ab5',
  paddingLeft: 26,
};

/* ── Icon components ── */
const PhoneIcon = () => (
  <svg style={{ width: 14, height: 14 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);
const MailIcon = () => (
  <svg style={{ width: 14, height: 14 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const ClockIcon = () => (
  <svg style={{ width: 14, height: 14 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const CalIcon = () => (
  <svg style={{ width: 15, height: 15 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const Divider = () => (
  <span style={{ width: 1, height: 14, background: 'rgba(255,255,255,0.3)', display: 'inline-block' }} />
);

const socialLinks = [
  { label: 'Facebook', d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
  { label: 'Instagram', d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
  { label: 'Twitter', d: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
];
