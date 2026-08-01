'use client';

export default function AppointmentCTA() {
  return (
    <section style={{ width: '100%', background: '#ffffff', padding: '64px 0', borderTop: '1px solid #f1f5f9' }}>
      <div
        style={{
          maxWidth: 900,
          margin: '0 auto',
          padding: '0 clamp(16px, 3vw, 32px)',
          textAlign: 'center',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            fontSize: 13,
            fontWeight: 800,
            letterSpacing: '0.18em',
            color: '#3aaa35',
            textTransform: 'uppercase',
            marginBottom: 12,
          }}
        >
          APPOINTMENT SUPPORT
        </span>

        <h2
          style={{
            fontSize: 'clamp(28px, 3.2vw, 44px)',
            fontWeight: 800,
            color: '#0b3b4a',
            lineHeight: 1.2,
            marginBottom: 14,
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: '-0.01em',
          }}
        >
          Book an Appointment
        </h2>

        <p
          style={{
            fontSize: 16,
            color: '#64748b',
            lineHeight: 1.6,
            marginBottom: 32,
          }}
        >
          Call or WhatsApp the clinic and share the doctor or department you need.
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
          }}
        >
          <a
            href="tel:7364921002"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '14px 32px',
              borderRadius: 14,
              background: '#094b7c',
              color: '#ffffff',
              fontWeight: 800,
              fontSize: 16,
              textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(9, 75, 124, 0.3)',
              minWidth: 200,
            }}
          >
            Call 7364921002
          </a>

          <a
            href="https://wa.me/917364921002?text=Hello%20Acharjee%20Health%20Clinic%2C%20I%20would%20like%20to%20book%20an%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '14px 32px',
              borderRadius: 14,
              background: '#15945D',
              color: '#ffffff',
              fontWeight: 800,
              fontSize: 16,
              textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(21, 148, 93, 0.3)',
              minWidth: 220,
            }}
          >
            WhatsApp Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
