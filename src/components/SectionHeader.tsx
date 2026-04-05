// ─── components/SectionHeader.tsx ────────────────────────────────────────────
// Reusable section header: eyebrow label + big title + accent divider bar.
// Usage: <SectionHeader label="About me" title={<>Line one<br />Line two</>} />

import AnimatedSection from "./AnimatedSection";

interface Props {
  label: string;
  title: React.ReactNode;
}

export default function SectionHeader({ label, title }: Props) {
  return (
    <AnimatedSection>
      <p
        style={{
          fontSize: "0.75rem",
          fontWeight: 500,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: "0.5rem",
        }}
      >
        {label}
      </p>

      <h2
        style={{
          fontFamily: "sans-serif",
          fontSize: "clamp(2rem, 4vw, 2.75rem)",
          fontWeight: 800,
          marginBottom: "0.75rem",
          lineHeight: 1.1,
          color: "var(--text)",
        }}
      >
        {title}
      </h2>

      {/* Gradient accent bar */}
      <div
        style={{
          width: 40,
          height: 3,
          background: "linear-gradient(90deg, var(--accent), var(--accent2))",
          borderRadius: 2,
          marginBottom: "2.5rem",
        }}
      />
    </AnimatedSection>
  );
}