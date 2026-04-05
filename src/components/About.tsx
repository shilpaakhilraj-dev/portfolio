// ─── components/About.tsx ────────────────────────────────────────────────────
// Two-column about section:
//  Left  — personal bio paragraphs
//  Right — 2×2 grid of animated stat cards

import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";
import { STATS } from "../data";

export default function About() {
  const isMobile = window.innerWidth < 768;
  
  return (
    <section
      id="about"
      style={{ padding: isMobile ? "4rem 2rem" : "5rem 4rem", background: "var(--bg2)" }}
    >
      <SectionHeader
        label="About me"
        title={
          <>
            Crafting interfaces
            <br />
            with intention
          </>
        }
      />

      <div
        className="about-grid"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}
      >
        {/* ── Bio ── */}
        <AnimatedSection>
          <p style={{ color: "var(--muted)", marginBottom: "1.25rem", fontSize: "1.05rem", lineHeight: 1.8 }}>
            I'm a frontend engineer with a deep focus on the Angular ecosystem
            — from v7 through v19 — and a passion for writing clean,
            maintainable TypeScript. I love pushing the boundaries of what
            Signals and RxJS can do.
          </p>
          <p style={{ color: "var(--muted)", marginBottom: "1.25rem", fontSize: "1.05rem", lineHeight: 1.8 }}>
            Beyond code, I'm driven by curiosity: experimenting with new
            frameworks, optimizing rendering performance, or rethinking UI
            patterns from first principles. I believe the best code is
            invisible — it just works beautifully.
          </p>
          <p style={{ color: "var(--muted)", marginBottom: "1.25rem", fontSize: "1.05rem", lineHeight: 1.8 }}>
            This is my first React app — I'm excited to learn, iterate, and
            build more polished interfaces as I grow.
          </p>
          <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.8 }}>
            Based in Coimbatore, India — open to remote and hybrid opportunities
            globally.
          </p>
        </AnimatedSection>

        {/* ── Stats grid ── */}
        <AnimatedSection>
          <div className="stat-grid">
            {STATS.map((s) => (
              <div key={s.label} className="stat-card">
                <div
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "2.5rem",
                    fontWeight: 800,
                    background: "linear-gradient(135deg, var(--accent), var(--accent3))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--muted)",
                    marginTop: "0.25rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}