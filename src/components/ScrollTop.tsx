// ─── components/ScrollTop.tsx ────────────────────────────────────────────────
// Floating "back to top" button — appears after scrolling 400px.

import { useScrolled } from "../hooks/useScrolled";

export default function ScrollTop() {
  const show = useScrolled(400);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        zIndex: 50,
        width: 44,
        height: 44,
        borderRadius: "50%",
        background: "var(--accent)",
        border: "none",
        color: "#fff",
        fontSize: "1.2rem",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.3s, transform 0.3s",
        boxShadow: "0 4px 24px rgba(124,111,255,0.4)",
        pointerEvents: show ? "auto" : "none",
      }}
    >
      ↑
    </button>
  );
}