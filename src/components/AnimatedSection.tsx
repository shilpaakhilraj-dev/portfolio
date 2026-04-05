// ─── components/AnimatedSection.tsx ──────────────────────────────────────────
// Wraps any content in a fade-up reveal triggered by IntersectionObserver.
// Usage: <AnimatedSection> ... </AnimatedSection>

import { useRef } from "react";
import { useInView } from "../hooks/useInView";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number; // optional stagger delay in ms
}

export default function AnimatedSection({ children, className = "", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}