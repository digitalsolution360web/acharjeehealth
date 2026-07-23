'use client';

import { use, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getDoctorBySlug } from '../doctorsData';

/* ── Enquiry Form ── */
function EnquiryForm({ accentBorder }: { accentBorder: string }) {
  const [sent, setSent] = useState(false);
  const [focusField, setFocusField] = useState<string | null>(null);

  return !sent ? (
    <form
      onSubmit={e => { e.preventDefault(); setSent(true); }}
      style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
    >
      <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0b3b4a', margin: '0 0 4px', fontFamily: "'Poppins', sans-serif" }}>
        Quick Enquiry
      </h3>
      {[
        { id: 'eq-name', label: 'Full Name', type: 'text', placeholder: 'Your name' },
        { id: 'eq-phone', label: 'Phone Number', type: 'tel', placeholder: '10-digit mobile number', pattern: '[0-9]{10}', maxLength: 10 },
        { id: 'eq-email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
      ].map(f => (
        <div key={f.id}>
          <label htmlFor={f.id} style={{ fontSize: 12, fontWeight: 700, color: '#334155', display: 'block', marginBottom: 4 }}>
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
              width: '100%',
              padding: '11px 14px',
              borderRadius: 10,
              border: focusField === f.id ? '1.5px solid #0e9ab5' : '1.5px solid #cbd5e1',
              boxShadow: focusField === f.id ? '0 0 0 3px rgba(14, 154, 181, 0.12)' : 'none',
              fontSize: 13.5,
              outline: 'none',
              boxSizing: 'border-box',
              fontFamily: 'inherit',
              color: '#0f172a',
              transition: 'all 0.2s',
            }}
            onFocus={() => setFocusField(f.id)}
            onBlur={() => setFocusField(null)}
          />
        </div>
      ))}
      <button
        type="submit"
        style={{
          padding: '12px',
          borderRadius: 10,
          border: 'none',
          background: 'linear-gradient(135deg, #0e9ab5, #3aaa35)',
          color: '#ffffff',
          fontWeight: 700,
          fontSize: 14,
          cursor: 'pointer',
          fontFamily: 'inherit',
          transition: 'all 0.2s',
          boxShadow: '0 4px 14px rgba(14, 154, 181, 0.25)',
          marginTop: 6,
        }}
        onMouseEnter={e => { (e.target as HTMLElement).style.opacity = '0.9'; }}
        onMouseLeave={e => { (e.target as HTMLElement).style.opacity = '1'; }}
      >
        Send Enquiry →
      </button>
    </form>
  ) : (
    <div style={{ textAlign: 'center', padding: '32px 16px' }}>
      <div style={{
        width: 60,
        height: 60,
        borderRadius: '50%',
        background: '#ecfdf5',
        border: '2.5px solid #3aaa35',
        color: '#3aaa35',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30,
        margin: '0 auto 16px',
      }}>
        ✓
      </div>
      <p style={{ fontWeight: 800, color: '#0b3b4a', fontSize: 18, marginBottom: 6, fontFamily: "'Poppins', sans-serif" }}>
        Enquiry Received!
      </p>
      <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.5 }}>
        Thank you. Our healthcare relationship manager will contact you shortly to confirm your details.
      </p>
    </div>
  );
}

/* ── Comment Form ── */
function CommentForm({ accentBorder }: { accentBorder: string }) {
  const [sent, setSent] = useState(false);
  return (
    <div style={{ background: '#f9fafb', borderRadius: 16, padding: '28px 24px', marginTop: 40, border: '1px solid #e5e7eb' }}>
      <h3 style={{ fontSize: 20, fontWeight: 800, color: '#1a2540', margin: '0 0 4px', fontFamily: "'Poppins',sans-serif" }}>Leave a Reply</h3>
      <p style={{ fontSize: 13, color: '#6b7280', margin: '0 0 20px' }}>Your email address will not be published. Required fields are marked *</p>
      {!sent ? (
        <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div>
            <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 5, color: '#374151' }}>Comment *</label>
            <textarea rows={5} placeholder="Type Your Comments" required
              style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '1.5px solid #d1d5db', fontSize: 14, outline: 'none', resize: 'vertical', boxSizing: 'border-box', fontFamily: 'inherit' }}
            />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
            {[
              { id: 'cm-name', label: 'Name *', placeholder: 'Name' },
              { id: 'cm-email', label: 'Email *', placeholder: 'Email' },
              { id: 'cm-web', label: 'Website', placeholder: 'Website' },
            ].map(f => (
              <div key={f.id}>
                <label htmlFor={f.id} style={{ fontSize: 12, fontWeight: 600, display: 'block', marginBottom: 4, color: '#374151' }}>{f.label}</label>
                <input id={f.id} type="text" placeholder={f.placeholder} required={f.id !== 'cm-web'}
                  style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1.5px solid #d1d5db', fontSize: 13, outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit' }}
                />
              </div>
            ))}
          </div>
          <label style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 13, color: '#374151', cursor: 'pointer' }}>
            <input type="checkbox" style={{ width: 15, height: 15 }} />
            Save my name, email, and website in this browser for the next time I comment.
          </label>
          <button type="submit" style={{ alignSelf: 'flex-start', padding: '10px 28px', borderRadius: 8, border: 'none', background: accentBorder, color: '#fff', fontWeight: 700, fontSize: 14, cursor: 'pointer', fontFamily: 'inherit' }}>
            Post Comment
          </button>
        </form>
      ) : (
        <div style={{ textAlign: 'center', padding: 24 }}>
          <div style={{ fontSize: 36 }}>✅</div>
          <p style={{ fontWeight: 700, color: '#1a2540', marginTop: 8 }}>Comment submitted! Thank you.</p>
        </div>
      )}
    </div>
  );
}

/* ── Review Card ── */
function ReviewCard({ author, text, accent }: { author: string; text: string; accent: string }) {
  return (
    <div style={{ background: '#fff', borderRadius: 14, padding: '20px 22px', border: '1px solid #f0f0f0', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', position: 'relative' }}>
      <div style={{ fontSize: 40, color: accent, lineHeight: 1, marginBottom: 8, opacity: 0.5, fontFamily: 'Georgia, serif' }}>"</div>
      <p style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.7, margin: '0 0 12px', fontStyle: 'italic' }}>{text}</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 36, height: 36, borderRadius: '50%', background: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: 14 }}>
          {author.charAt(0)}
        </div>
        <div>
          <p style={{ margin: 0, fontWeight: 700, fontSize: 13, color: '#1a2540' }}>{author}</p>
          <div style={{ display: 'flex', gap: 2, marginTop: 2 }}>
            {[1,2,3,4,5].map(s => <span key={s} style={{ color: '#fbbf24', fontSize: 11 }}>★</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Main Page ── */
export default function DoctorDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const doc = getDoctorBySlug(resolvedParams.slug);
  if (!doc) notFound();

  const { accent, accentBorder } = doc;

  return (
    <>
      {/* ── Breadcrumb & Hero ── */}
      <div style={{ background: `linear-gradient(135deg, ${accentBorder}22 0%, ${accent} 100%)`, borderBottom: `3px solid ${accentBorder}33` }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '18px clamp(16px,4vw,48px) 0' }}>
          <nav style={{ fontSize: 13, color: '#6b7280', marginBottom: 20, display: 'flex', gap: 6, alignItems: 'center', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: accentBorder, textDecoration: 'none', fontWeight: 500 }}>Home</Link>
            <span>›</span>
            <Link href="/doctors" style={{ color: accentBorder, textDecoration: 'none', fontWeight: 500 }}>Doctors List</Link>
            <span>›</span>
            <span style={{ color: '#374151', fontWeight: 600 }}>{doc.name}</span>
          </nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, paddingBottom: 28, flexWrap: 'wrap' }}>
            <span style={{ background: accentBorder, color: '#fff', fontSize: 12, fontWeight: 700, padding: '4px 14px', borderRadius: 20, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              {doc.badge}
            </span>
            <div style={{ flex: 1 }}>
              <h1 style={{ fontSize: 'clamp(20px,3.5vw,34px)', fontWeight: 800, color: '#1a2540', margin: '0 0 6px', fontFamily: "'Poppins',sans-serif", lineHeight: 1.25 }}>
                {doc.name}
              </h1>
              <p style={{ margin: 0, fontSize: 15, color: '#4b5563', fontWeight: 500 }}>{doc.qualification}</p>
              <p style={{ margin: '4px 0 0', fontSize: 14, color: accentBorder, fontWeight: 600 }}>{doc.specialty}</p>
            </div>
            {(doc.experience || doc.procedures) && (
              <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                {doc.experience && (
                  <div style={{ textAlign: 'center', background: '#fff', borderRadius: 12, padding: '12px 20px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
                    <div style={{ fontSize: 22, fontWeight: 800, color: accentBorder, fontFamily: "'Poppins',sans-serif" }}>{doc.experience}</div>
                    <div style={{ fontSize: 11, color: '#6b7280', fontWeight: 500 }}>Experience</div>
                  </div>
                )}
                {doc.procedures && (
                  <div style={{ textAlign: 'center', background: '#fff', borderRadius: 12, padding: '12px 20px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
                    <div style={{ fontSize: 22, fontWeight: 800, color: accentBorder, fontFamily: "'Poppins',sans-serif" }}>{doc.procedures}</div>
                    <div style={{ fontSize: 11, color: '#6b7280', fontWeight: 500 }}>Procedures</div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Main Body ── */}
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '36px clamp(16px,4vw,48px) 60px', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) clamp(260px,30%,320px)', gap: 36, alignItems: 'start' }}>

        {/* ──── LEFT CONTENT ──── */}
        <article>
          {/* Page title */}
          <h2 style={{ fontSize: 'clamp(18px,2.5vw,26px)', fontWeight: 800, color: '#1a2540', margin: '0 0 20px', fontFamily: "'Poppins',sans-serif", lineHeight: 1.3, paddingBottom: 14, borderBottom: `2px solid ${accentBorder}33` }}>
            {doc.title}
          </h2>

          {/* Content blocks */}
          {doc.content.map((block, idx) => {
            if (block.type === 'para') return (
              <p key={idx} style={{ fontSize: 15, color: '#374151', lineHeight: 1.8, marginBottom: 20 }}>
                {block.text}
              </p>
            );

            if (block.type === 'highlight') return (
              <div key={idx} style={{ background: `${accentBorder}14`, border: `1.5px solid ${accentBorder}44`, borderRadius: 12, padding: '16px 20px', margin: '20px 0', fontSize: 14, color: '#1a2540', lineHeight: 1.7, fontWeight: 500 }}>
                {block.text}
              </div>
            );

            if (block.type === 'heading' && block.reviews) return (
              <section key={idx} style={{ marginBottom: 32 }}>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: '#1a2540', margin: '0 0 16px', fontFamily: "'Poppins',sans-serif", display: 'flex', alignItems: 'center', gap: 8 }}>
                  {block.icon && <span>{block.icon}</span>}{block.heading}
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 16 }}>
                  {block.reviews!.map((r, ri) => (
                    <ReviewCard key={ri} author={r.author} text={r.text} accent={accentBorder} />
                  ))}
                </div>
              </section>
            );

            if (block.type === 'heading' && block.items) return (
              <section key={idx} style={{ marginBottom: 28, background: '#fff', borderRadius: 16, padding: '22px 24px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', border: '1px solid #f0f0f0' }}>
                <h3 style={{ fontSize: 17, fontWeight: 800, color: '#1a2540', margin: '0 0 14px', fontFamily: "'Poppins',sans-serif", display: 'flex', alignItems: 'center', gap: 8, paddingBottom: 10, borderBottom: `2px solid ${accentBorder}33` }}>
                  {block.icon && <span style={{ fontSize: 20 }}>{block.icon}</span>}{block.heading}
                </h3>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {block.items.map((item, ii) => (
                    <li key={ii} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, color: '#374151', lineHeight: 1.6 }}>
                      <span style={{ color: accentBorder, fontWeight: 700, flexShrink: 0, marginTop: 2 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            );

            return null;
          })}

          {/* Comment Form for Dr. P. Kranthi Kumar */}
          {doc.hasCommentForm && <CommentForm accentBorder={accentBorder} />}

          {/* Back link */}
          <div style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid #f0f0f0' }}>
            <Link href="/doctors" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: accentBorder, fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
              ← Back to All Doctors
            </Link>
          </div>
        </article>

        {/* ──── RIGHT SIDEBAR ──── */}
        <aside style={{ position: 'sticky', top: 100, display: 'flex', flexDirection: 'column', gap: 20 }}>
          {/* Photo */}
          <div style={{ borderRadius: 20, overflow: 'hidden', boxShadow: `0 8px 32px ${accentBorder}33`, border: `3px solid ${accentBorder}44` }}>
            <Image src={doc.image} alt={doc.name} width={320} height={340}
              style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
          </div>

          {/* Quick Info */}
          <div style={{ background: '#fff', borderRadius: 16, padding: '20px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', border: `1px solid ${accentBorder}22` }}>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: '#1a2540', margin: '0 0 14px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Contact Details</h3>
            {[
              { icon: '📞', label: doc.phone },
              { icon: '✉️', label: doc.email },
              { icon: '📍', label: doc.location },
            ].map((r, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 12, paddingBottom: 12, borderBottom: i < 2 ? '1px solid #f3f4f6' : 'none' }}>
                <span style={{ fontSize: 16, flexShrink: 0, marginTop: 1 }}>{r.icon}</span>
                <span style={{ fontSize: 12.5, color: '#374151', lineHeight: 1.5 }}>{r.label}</span>
              </div>
            ))}
            <Link href="/appointment" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: `linear-gradient(135deg, ${accentBorder}, ${accentBorder}cc)`, color: '#fff', fontWeight: 700, padding: '11px', borderRadius: 10, textDecoration: 'none', fontSize: 13.5, marginTop: 4 }}>
              📅 Book Appointment
            </Link>
          </div>

          {/* Enquiry Form */}
          <div style={{ background: '#fff', borderRadius: 16, padding: '20px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', border: `1px solid ${accentBorder}22` }}>
            <EnquiryForm accentBorder={accentBorder} />
          </div>
        </aside>
      </div>

      {/* ── CTA Strip ── */}
      <section style={{ background: `linear-gradient(135deg, #1a2540, ${accentBorder})`, padding: '48px 24px', textAlign: 'center' }}>
        <h2 style={{ color: '#fff', fontSize: 'clamp(18px,3vw,28px)', fontWeight: 800, margin: '0 0 10px', fontFamily: "'Poppins',sans-serif" }}>
          Ready to Consult {doc.name}?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', margin: '0 0 24px', fontSize: 15 }}>
          Call {doc.phone} or book online at Acharjee Health Clinic, Asansol.
        </p>
        <Link href="/appointment" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#e0142a', color: '#fff', fontWeight: 700, padding: '13px 32px', borderRadius: 50, textDecoration: 'none', fontSize: 15, boxShadow: '0 6px 20px rgba(224,20,42,0.4)' }}>
          📅 Book An Appointment
        </Link>
      </section>

      <style>{`
        @media (max-width: 860px) {
          article > div[style*="grid-template-columns"] { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 760px) {
          div[style*="grid-template-columns: clamp"] {
            grid-template-columns: 1fr !important;
          }
          aside { position: static !important; }
        }
        @media (max-width: 560px) {
          div[style*="grid-template-columns: 1fr 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
