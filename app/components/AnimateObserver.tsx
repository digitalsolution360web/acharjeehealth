'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function AnimateObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Add tiny delay to ensure page elements are fully rendered/hydrated
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
            }
          });
        },
        {
          threshold: 0.08,
          rootMargin: '0px 0px -40px 0px',
        }
      );

      const items = document.querySelectorAll('[data-animate]');
      items.forEach((item) => observer.observe(item));

      return () => {
        observer.disconnect();
      };
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname]); // Re-observe when navigation path changes

  return null;
}
