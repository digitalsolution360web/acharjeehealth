'use client';

import React, { useState, useEffect } from 'react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show a helpful welcome tooltip after a 2.5-second delay to catch attention professionally
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3 select-none pointer-events-none">
      {/* Premium Professional Tooltip */}
      {showTooltip && (
        <div
          className="pointer-events-auto bg-white text-slate-800 px-4 py-2.5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 text-xs md:text-sm font-medium whitespace-nowrap flex items-center gap-2"
          style={{
            animation: 'fadeInLeft 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Need help? Chat with us!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 transition-colors ml-1 p-0.5 cursor-pointer text-sm leading-none"
            aria-label="Close tooltip"
          >
            &times;
          </button>
        </div>
      )}

      {/* Pulsing & Bouncing WhatsApp Button */}
      <a
        href="https://wa.me/917364921002"
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center text-white text-3xl md:text-4xl shadow-[0_8px_24px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-108 hover:shadow-[0_12px_32px_rgba(37,211,102,0.55)] cursor-pointer whatsapp-float-btn"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <i className="bi bi-whatsapp"></i>
      </a>
    </div>
  );
}
