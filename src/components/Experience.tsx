// ─── components/Experience.tsx ───────────────────────────────────────────────
// Vertical timeline showing career history.
// Each item has a glowing dot on the timeline line.

import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";
import { EXPERIENCE } from "../data";

export default function Experience() {
  const isMobile = window.innerWidth < 768;
  return (
    <section
      id="experience"
      style={{ padding: isMobile ? "4rem 2rem" : "5rem 4rem" }}
    >
      <SectionHeader label="Journey" title="Experience" />

      {/* Timeline container */}
      <div style={{ position: "relative", paddingLeft: isMobile ? "0.5rem" : "2rem", maxWidth: 700 }}>

        {/* Vertical line */}
        <div
          style={{
            position: "absolute",
            left: 0, top: 0, bottom: 0,
            width: 1,
            background: "rgba(124,111,255,0.2)",
          }}
        />

        {EXPERIENCE.map((item, i) => (
          <AnimatedSection key={i} delay={i * 100}>
            <div style={{ position: "relative", paddingLeft: isMobile ? "1.5rem" : "2rem", paddingBottom: "2.5rem" }}>

              {/* Glowing dot */}
              <div
                style={{
                  position: "absolute",
                  left: "-0.4rem", top: "0.4rem",
                  width: 12, height: 12,
                  background: "var(--accent)",
                  borderRadius: "50%",
                  boxShadow: "0 0 14px rgba(124,111,255,0.6)",
                }}
              />

              {/* Date */}
              <div
                style={{
                  fontSize: "0.78rem",
                  color: "var(--muted)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}
              >
                {item.date}
              </div>

              {/* Role */}
              <div
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  marginBottom: "0.2rem",
                  color: "var(--text)",
                }}
              >
                {item.role}
              </div>

              {/* Company */}
              <div style={{ fontSize: "0.9rem", color: "var(--accent)", marginBottom: "0.75rem" }}>
                {item.company}
              </div>

              {/* Description */}
              <div style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.75 }}>
                {item.desc}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}