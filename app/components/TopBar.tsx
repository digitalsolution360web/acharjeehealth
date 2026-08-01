import React from 'react';

export default function TopBar() {
  return (
    <div
      style={{
        background: '#073c67',
        color: '#ffffff',
        fontSize: '13px',
        fontWeight: 600,
        fontFamily: "'Poppins', sans-serif",
        letterSpacing: '0.04em',
        padding: '8px 0',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'inline-block',
          animation: 'topbar-scroll 28s linear infinite',
          paddingLeft: '100%',
        }}
      >
        48 Years of Trusted Healthcare&nbsp;&nbsp;•&nbsp;&nbsp;Acharjee Health Clinic &amp; Pharmacy&nbsp;&nbsp;•&nbsp;&nbsp;Asansol, West Bengal&nbsp;&nbsp;•&nbsp;&nbsp;Call: 07364921002&nbsp;&nbsp;•&nbsp;&nbsp;48 Years of Trusted Healthcare&nbsp;&nbsp;•&nbsp;&nbsp;Acharjee Health Clinic &amp; Pharmacy&nbsp;&nbsp;•&nbsp;&nbsp;Asansol, West Bengal&nbsp;&nbsp;•&nbsp;&nbsp;Call: 07364921002
      </div>
      <style>{`
        @keyframes topbar-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
