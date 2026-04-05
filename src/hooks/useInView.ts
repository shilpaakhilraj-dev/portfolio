// ─── hooks/useInView.ts ───────────────────────────────────────────────────────
import { useState, useEffect, type RefObject } from "react";

/**
 * Returns true once the referenced element enters the viewport.
 * Stays true — used for scroll-triggered fade-in animations.
 */
export function useInView(ref: RefObject<Element>, threshold = 0.15): boolean {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return inView;
}