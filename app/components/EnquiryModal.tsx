'use client';

import { useState, useEffect } from 'react';

interface EnquiryModalProps {
  onClose: () => void;
}

export default function EnquiryModal({ onClose }: EnquiryModalProps) {
  const [sent, setSent] = useState(false);
  const [focusField, setFocusField] = useState<string | null>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const fields = [
    { id: 'em-name',  label: 'Full Name',     type: 'text',  placeholder: 'Your full name' },
    { id: 'em-phone', label: 'Phone Number',  type: 'tel',   placeholder: '10-digit mobile number', pattern: '[0-9]{10}', maxLength: 10 },
    { id: 'em-email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
  ];

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 99999,
        background: 'rgba(5,15,30,0.75)',
        backdropFilter: 'blur(12px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: '#fff',
          borderRadius: 24,
          width: '100%',
          maxWidth: 460,
          position: 'relative',
          boxShadow: '0 32px 100px rgba(0,0,0,0.35)',
          animation: 'emPopIn 0.28s cubic-bezier(0.34,1.56,0.64,1) both',
          overflow: 'hidden',
        }}
      >
        {/* Top gradient header */}
        <div style={{
          background: 'linear-gradient(135deg, #0e9ab5 0%, #0b7d94 50%, #3aaa35 100%)',
          padding: '28px 32px 24px',
          position: 'relative',
        }}>
          {/* Decorative circles */}
          <div style={{
            position: 'absolute', top: -20, right: -20,
            width: 100, height: 100, borderRadius: '50%',
            background: 'rgba(255,255,255,0.08)',
          }} />
          <div style={{
            position: 'absolute', bottom: -30, left: 20,
            width: 70, height: 70, borderRadius: '50%',
            background: 'rgba(255,255,255,0.06)',
          }} />

          {/* Calendar icon */}
          <div style={{
            width: 48, height: 48, borderRadius: 14,
            background: 'rgba(255,255,255,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: 14,
          }}>
            <svg width="24" height="24" fill="none" stroke="white" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>

          <h2 style={{
            margin: '0 0 4px', color: '#fff',
            fontSize: 22, fontWeight: 800,
            fontFamily: "'Poppins', sans-serif",
          }}>
            Book Appointment
          </h2>
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.82)', fontSize: 13.5 }}>
            Fill in your details — we&apos;ll call you back shortly.
          </p>

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              position: 'absolute', top: 16, right: 16,
              width: 34, height: 34, borderRadius: '50%',
              border: '1.5px solid rgba(255,255,255,0.4)',
              background: 'rgba(255,255,255,0.15)',
              cursor: 'pointer', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontSize: 16, lineHeight: '1',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.3)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.15)'; }}
          >
            ✕
          </button>
        </div>

        {/* Form body */}
        <div style={{ padding: '28px 32px 32px' }}>
          {!sent ? (
            <form
              onSubmit={e => { e.preventDefault(); setSent(true); }}
              style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
            >
              {fields.map(f => (
                <div key={f.id}>
                  <label
                    htmlFor={f.id}
                    style={{
                      fontSize: 11, fontWeight: 700, color: '#64748b',
                      display: 'block', marginBottom: 6, textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    type={f.type}
                    placeholder={f.placeholder}
                    required
                    pattern={f.pattern}
                    maxLength={f.maxLength}
                    style={{
                      width: '100%', padding: '12px 16px',
                      borderRadius: 12,
                      border: focusField === f.id
                        ? '2px solid #0e9ab5'
                        : '1.5px solid #e2e8f0',
                      boxShadow: focusField === f.id
                        ? '0 0 0 4px rgba(14,154,181,0.1)'
                        : 'none',
                      fontSize: 14, outline: 'none',
                      boxSizing: 'border-box',
                      fontFamily: 'inherit', color: '#0f172a',
                      transition: 'all 0.2s',
                      background: focusField === f.id ? '#f0fbfd' : '#f8fafc',
                    }}
                    onFocus={() => setFocusField(f.id)}
                    onBlur={() => setFocusField(null)}
                  />
                </div>
              ))}

              <button
                type="submit"
                style={{
                  marginTop: 6, padding: '14px',
                  borderRadius: 12, border: 'none',
                  background: '#15945D',
                  color: '#fff', fontWeight: 800,
                  fontSize: 15, cursor: 'pointer',
                  fontFamily: "'Poppins', sans-serif",
                  transition: 'all 0.25s',
                  boxShadow: '0 6px 20px rgba(21,148,93,0.35)',
                  letterSpacing: '0.02em',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = '#11784b';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 28px rgba(21,148,93,0.45)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = '#15945D';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 20px rgba(21,148,93,0.35)';
                }}
              >
                Send Enquiry →
              </button>
            </form>
          ) : (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{
                width: 72, height: 72, borderRadius: '50%',
                background: 'linear-gradient(135deg, #ecfdf5, #d1fae5)',
                border: '3px solid #15945D',
                color: '#15945D',
                display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: 36,
                margin: '0 auto 20px',
                boxShadow: '0 8px 24px rgba(21,148,93,0.2)',
              }}>✓</div>

              <h3 style={{
                fontWeight: 800, color: '#0b3b4a', fontSize: 22,
                marginBottom: 8, fontFamily: "'Poppins', sans-serif",
              }}>
                Enquiry Received!
              </h3>
              <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.7, marginBottom: 24 }}>
                Thank you! Our healthcare team will contact you shortly.
              </p>
              <button
                onClick={onClose}
                style={{
                  padding: '12px 36px', borderRadius: 12,
                  border: 'none',
                  background: '#15945D',
                  color: '#fff', fontWeight: 700, fontSize: 15,
                  cursor: 'pointer',
                  boxShadow: '0 4px 16px rgba(21,148,93,0.3)',
                }}
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes emPopIn {
          from { opacity: 0; transform: scale(0.82) translateY(20px); }
          to   { opacity: 1; transform: scale(1)   translateY(0); }
        }
      `}</style>
    </div>
  );
}
