// ─── hooks/useScrolled.ts ─────────────────────────────────────────────────────
import { useState, useEffect } from "react";

/**
 * Returns true when the page has scrolled past `threshold` pixels.
 * Used by Navbar (background opacity) and ScrollTop button (visibility).
 */
export function useScrolled(threshold = 40): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}