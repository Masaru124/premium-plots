'use client';

import { useEffect } from 'react';

/* Section entrances for pages that do not own their own observer.
   The page never hides content without script, and reduced motion opts out. */
export default function useReveal() {
  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    root.classList.add('js-reveal');
    const items = Array.from(document.querySelectorAll('[data-reveal]'));

    if (!('IntersectionObserver' in window) || !items.length) {
      items.forEach((el) => el.classList.add('is-revealed'));
      return () => root.classList.remove('js-reveal');
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
    );

    items.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      root.classList.remove('js-reveal');
    };
  }, []);
}
