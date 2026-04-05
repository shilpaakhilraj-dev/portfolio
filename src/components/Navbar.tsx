// ─── components/Navbar.tsx ────────────────────────────────────────────────────
// Sticky navbar with:
//  - Active section highlighting (via IntersectionObserver)
//  - Background opacity on scroll
//  - Mobile hamburger drawer

import { useState } from "react";
import { useActiveSection } from "../hooks/useActiveSection";
import { useScrolled } from "../hooks/useScrolled";
import { NAV_LINKS } from "../data";

export default function Navbar() {
  const active = useActiveSection();
  const scrolled = useScrolled(40);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      {/* ── Main bar ── */}
      <nav
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.1rem 4rem",
          backdropFilter: "blur(20px)",
          background: scrolled ? "rgba(10,10,15,0.85)" : "rgba(10,10,15,0.5)",
          borderBottom: scrolled
            ? "1px solid rgba(124,111,255,0.15)"
            : "1px solid transparent",
          transition: "background 0.4s, border-color 0.4s",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "1.1rem",
            letterSpacing: "0.05em",
            color: "var(--accent)",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          SK
        </button>

        {/* Desktop links */}
        <ul
          className="desktop-nav"
          style={{ display: "flex", gap: "2rem", listStyle: "none", margin: 0, padding: 0 }}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.8rem",
                  fontWeight: 400,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  color: active === link.id ? "var(--text)" : "var(--muted)",
                  borderBottom:
                    active === link.id
                      ? "1px solid var(--accent)"
                      : "1px solid transparent",
                  paddingBottom: "0.2rem",
                  transition: "color 0.3s",
                }}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger — hidden on desktop via .hamburger CSS class */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            display: "none",
            flexDirection: "column",
            gap: 5,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 4,
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: "var(--text)",
                borderRadius: 2,
                transition: "transform 0.3s, opacity 0.3s",
                transform: menuOpen
                  ? i === 0
                    ? "translateY(7px) rotate(45deg)"
                    : i === 2
                    ? "translateY(-7px) rotate(-45deg)"
                    : "scaleX(0)"
                  : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      {/* ── Mobile slide-in drawer ── */}
      <div
        style={{
          position: "fixed",
          top: 0, right: 0, bottom: 0,
          width: "70vw",
          maxWidth: 280,
          background: "rgba(17,17,24,0.97)",
          backdropFilter: "blur(20px)",
          zIndex: 99,
          padding: "5rem 2rem 2rem",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
          borderLeft: "1px solid rgba(124,111,255,0.15)",
        }}
      >
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1.1rem",
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  color: active === link.id ? "var(--accent)" : "var(--text)",
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Backdrop overlay (click to close) */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 98,
            background: "rgba(0,0,0,0.4)",
          }}
        />
      )}
    </>
  );
}