// ─── components/Footer.tsx ───────────────────────────────────────────────────
// Simple footer bar with copyright and location.

export default function Footer() {
  return (
    <footer
      style={{
        padding: "2rem 4rem",
        borderTop: "1px solid rgba(124,111,255,0.12)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "0.75rem",
      }}
    >
      <p style={{ fontSize: "0.8rem", color: "var(--muted)" }}>
        © {new Date().getFullYear()} Shilpa K · Designed with intention
      </p>
      <p style={{ fontSize: "0.8rem", color: "var(--muted)" }}>
        Coimbatore, India · Open to Remote / Hybrid opportunities globally
      </p>
    </footer>
  );
}