'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function AnimateObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Unobserve once animation is triggered to prevent re-runs
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    // Set to avoid observing the same element multiple times
    const observedElements = new Set<Element>();

    const observeNewElements = () => {
      const items = document.querySelectorAll('[data-animate]');
      items.forEach((item) => {
        if (!observedElements.has(item)) {
          observer.observe(item);
          observedElements.add(item);
        }
      });
    };

    // Initial check
    observeNewElements();

    // Use MutationObserver to watch for elements added via client-side rendering/hydration
    const mutationObserver = new MutationObserver(() => {
      observeNewElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return null;
}

