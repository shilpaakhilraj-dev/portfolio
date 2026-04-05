// ─── components/Hero.tsx ─────────────────────────────────────────────────────
// Full-viewport hero with:
//  - Animated rotating job title (cycles every 2.8s)
//  - Atmospheric background orbs
//  - CTA buttons (View Projects + Download Resume)
//  - "Available" badge with pulsing dot

import { useState, useEffect } from "react";
import { HERO_TITLES } from "../data";

export default function Hero() {
  const isMobile = window.innerWidth < 768;
  const [tick, setTick] = useState(0);

  // Rotate job titles
  useEffect(() => {
    const id = setInterval(
      () => setTick((t) => (t + 1) % HERO_TITLES.length),
      2800
    );
    return () => clearInterval(id);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: isMobile ? "8rem 2rem 4rem" : "8rem 4rem 4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── Background orbs ── */}
      <div
        style={{
          position: "absolute", width: 700, height: 700, borderRadius: "50%",
          background: "rgba(124,111,255,0.12)", filter: "blur(120px)",
          top: -150, right: -200, pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute", width: 450, height: 450, borderRadius: "50%",
          background: "rgba(255,107,157,0.07)", filter: "blur(100px)",
          bottom: 0, left: -100, pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute", width: 300, height: 300, borderRadius: "50%",
          background: "rgba(77,255,210,0.06)", filter: "blur(80px)",
          top: "40%", left: "40%", pointerEvents: "none",
        }}
      />

      {/* ── Content ── */}
      <div style={{ position: "relative", zIndex: 1 }}>

        {/* Available badge */}
        <div
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.6rem",
            background: "rgba(77,255,210,0.08)",
            border: "1px solid rgba(77,255,210,0.25)",
            borderRadius: 100, padding: "0.4rem 1rem",
            fontSize: "0.8rem", color: "var(--accent3)",
            marginBottom: "1.75rem",
          }}
        >
          <span
            style={{
              width: 7, height: 7,
              background: "var(--accent3)", borderRadius: "50%",
              animation: "pulse 2s infinite",
            }}
          />
          Available for new opportunities
        </div>

        {/* Name */}
        <h1
          style={{
            fontFamily: "sans-serif",
            fontWeight: 800,
            lineHeight: 1.05,
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            letterSpacing: "-0.02em",
            marginBottom: "0.5rem",
            color: "var(--text)",
          }}
        >
          Hi, I'm Shilpa
        </h1>

        {/* Animated rotating title */}
        <h2
          key={tick}                         // re-mounts on each tick → triggers animation
          style={{
            fontFamily: "sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)",
            letterSpacing: "-0.01em",
            marginBottom: "1.5rem",
            background: "linear-gradient(135deg, var(--accent), var(--accent2))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            minHeight: "1.2em",
            animation: "fadeInUp 0.4s ease",
          } as React.CSSProperties}
        >
          {HERO_TITLES[tick]}
        </h2>

        {/* Sub-text */}
        <p
          style={{
            fontSize: "1.1rem", color: "var(--muted)",
            maxWidth: 540, marginBottom: "2.5rem",
            lineHeight: 1.8, fontWeight: 300,
          }}
        >
          I build scalable, high-performance web applications with a sharp
          focus on clean architecture, reactive patterns, and delightful user
          experiences.
        </p>

        {/* CTA buttons */}
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3.5rem" }}>
          <button
            className="btn-primary"
            onClick={() => scrollTo("projects")}
          >
            View Projects
          </button>

          {/* Replace href with your actual resume PDF URL */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            View Resume ↗
          </a>
          
        </div>

        {/* Scroll hint */}
        <div
          style={{
            display: "flex", alignItems: "center", gap: "0.75rem",
            color: "var(--muted)", fontSize: "0.75rem",
            letterSpacing: "0.1em", textTransform: "uppercase",
          }}
        >
          <div style={{ width: 36, height: 1, background: "var(--muted)" }} />
          Scroll to explore
        </div>
      </div>
    </section>
  );
}