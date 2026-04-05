// ─── hooks/useActiveSection.ts ────────────────────────────────────────────────
import { useState, useEffect } from "react";

const SECTIONS = ["home", "about", "experience", "projects", "skills", "contact"];

/**
 * Tracks which section is currently visible in the viewport.
 * Used by Navbar to highlight the active link.
 */
export function useActiveSection(): string {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.4 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return active;
}