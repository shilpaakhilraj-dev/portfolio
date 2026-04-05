// ─── components/Skills.tsx ───────────────────────────────────────────────────
// Skills organized into themed groups (Frameworks, Languages, Styling, Tools).
// Each chip deepens its background color on hover.

import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";
import { SKILL_GROUPS } from "../data";

export default function Skills() {
  const isMobile = window.innerWidth < 768;
  return (
    <section
      id="skills"
      style={{ padding: isMobile ? "4rem 2rem" : "5rem 4rem" }}
    >
      <SectionHeader label="Toolkit" title="Skills & Technologies" />

      <div
        className="skills-grid"
      >
        {SKILL_GROUPS.map((group, i) => (
          <AnimatedSection key={group.label} delay={i * 80}>
            <div
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(124,111,255,0.12)",
                borderRadius: 16,
                padding: "1.5rem",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Group label */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  marginBottom: "1.1rem",
                }}
              >
                <span
                  style={{
                    width: 8, height: 8,
                    borderRadius: "50%",
                    background: group.accent,
                    flexShrink: 0,
                  }}
                />
                {group.label}
              </div>

              {/* Chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.55rem" }}>
                {group.chips.map((chip) => (
                  <span
                    key={chip}
                    style={{
                      padding: "0.45rem 0.9rem",
                      borderRadius: 8,
                      background: group.accent + "14",
                      border: `1px solid ${group.accent}30`,
                      color: group.accent,
                      fontSize: "0.84rem",
                      cursor: "default",
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = group.accent + "28")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = group.accent + "14")
                    }
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}