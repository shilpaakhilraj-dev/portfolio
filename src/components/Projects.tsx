// ─── components/Projects.tsx ─────────────────────────────────────────────────
// Responsive card grid of featured projects.
// Each card lifts on hover and tints its border with the project's accent color.

import { useState } from "react";
import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";
import { PROJECTS } from "../data";

export default function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);
  const isMobile = window.innerWidth < 768;
  
  return (
    <section
      id="projects"
      style={{
        padding: isMobile ? "4rem 2rem" : "5rem 4rem",
        background: "var(--bg2)",
      }}
    >
      <SectionHeader label="Work" title="Featured Projects" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {PROJECTS.map((project, i) => (
          <AnimatedSection key={i} delay={i * 80}>
            <div
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background:
                  hovered === i
                    ? "rgba(255,255,255,0.04)"
                    : "rgba(255,255,255,0.02)",
                border: `1px solid ${
                  hovered === i
                    ? project.color + "55"
                    : "rgba(124,111,255,0.12)"
                }`,
                borderRadius: 16,
                padding: "1.75rem",
                transition: "transform 0.3s, border-color 0.3s, background 0.3s",
                transform: hovered === i ? "translateY(-6px)" : "translateY(0)",
                cursor: "default",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Category tag */}
              <div
                style={{
                  display: "inline-block",
                  background: project.color + "18",
                  border: `1px solid ${project.color}40`,
                  borderRadius: 100,
                  fontSize: "0.7rem",
                  padding: "0.25rem 0.8rem",
                  color: project.color,
                  marginBottom: "1rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  width: "fit-content",
                }}
              >
                {project.tag}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  marginBottom: "0.75rem",
                  color: "var(--text)",
                }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: "0.92rem",
                  lineHeight: 1.75,
                  marginBottom: "1.25rem",
                  flex: 1,
                }}
              >
                {project.desc}
              </p>

              {/* Tech stack chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.25rem" }}>
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 6,
                      fontSize: "0.72rem",
                      padding: "0.2rem 0.6rem",
                      color: "var(--muted)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: "flex", gap: "1rem", justifyContent: "space-between" }}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--accent)",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    textDecoration: "none",
                  }}
                >
                  GitHub →
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "var(--muted)",
                      fontSize: "0.85rem",
                      textDecoration: "none",
                    }}
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}