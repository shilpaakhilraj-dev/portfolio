// ─── components/Contact.tsx ──────────────────────────────────────────────────
// Two-column contact section:
//  Left  — contact link cards (email, LinkedIn, GitHub, phone)
//  Right — controlled contact form with send state feedback
//
// To wire up real form submission, replace the setTimeout in handleSubmit
// with your preferred service (EmailJS, Formspree, Resend, etc.)

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";
import { CONTACT_LINKS } from "../data";

type FormState = { name: string; email: string; message: string };
type SendStatus = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<SendStatus>("idle");
  const [focused, setFocused] = useState<string | null>(null);

  // ── Form submit handler ──────────────────────────────────────────────────
  // Replace the setTimeout with your real email service:
  //   EmailJS  → emailjs.sendForm(...)
  //   Formspree → fetch("https://formspree.io/f/YOUR_ID", { method:"POST", body: formData })
  //   Resend   → your own API route
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!form.name || !form.email || !form.message) return;

  setStatus("sending");

  try {
    const response = await fetch("https://formspree.io/f/mgorqwon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
      }),
    });

    if (response.ok) {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } else {
      setStatus("error");
    }
  } catch {
    setStatus("error");
  }
};

  // ── Dynamic input border on focus ────────────────────────────────────────
  const inputStyle = (field: string): React.CSSProperties => ({
    width: "100%",
    background: "rgba(255,255,255,0.03)",
    border: `1px solid ${focused === field ? "var(--accent)" : "rgba(124,111,255,0.15)"}`,
    borderRadius: 8,
    padding: "0.85rem 1rem",
    color: "var(--text)",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.95rem",
    outline: "none",
    transition: "border-color 0.25s",
  });

  const isMobile = window.innerWidth < 768;

  return (
    <section
      id="contact"
      style={{ padding: isMobile ? "4rem 2rem" : "5rem 4rem" }}
    >
      <SectionHeader label="Let's connect" title="Get in Touch" />

      <div
        className="contact-grid"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}
      >
        {/* ── Left: contact links ── */}
        <AnimatedSection>
          <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "2rem" }}>
            I'm always open to discussing new opportunities, interesting
            projects, or just a conversation about frontend architecture. Drop
            me a message — I reply within 24 hours.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            {CONTACT_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: "1rem",
                  padding: "1rem 1.25rem",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(124,111,255,0.12)",
                  borderRadius: 12, textDecoration: "none", color: "var(--text)",
                  transition: "border-color 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(124,111,255,0.4)";
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(124,111,255,0.12)";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                {/* Icon bubble */}
                <div
                  style={{
                    width: 36, height: 36, borderRadius: 8,
                    background: link.color + "18",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "0.9rem", color: link.color,
                    fontWeight: 700, flexShrink: 0,
                  }}
                >
                  {link.icon}
                </div>

                {/* Label + value */}
                <div style={{ flex: 1 }}>
                  <strong style={{ display: "block", fontWeight: 500, fontSize: "0.88rem", marginBottom: "0.1rem" }}>
                    {link.label}
                  </strong>
                  <span style={{ fontSize: "0.78rem", color: "var(--muted)" }}>
                    {link.value}
                  </span>
                </div>

                <span style={{ color: "var(--muted)" }}>→</span>
              </a>
            ))}
          </div>
        </AnimatedSection>

        {/* ── Right: contact form ── */}
        <AnimatedSection delay={150}>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            {/* Name */}
            <div>
              <label style={{ display: "block", fontSize: "0.75rem", color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
                style={inputStyle("name")}
                required
              />
            </div>

            {/* Email */}
            <div>
              <label style={{ display: "block", fontSize: "0.75rem", color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                style={inputStyle("email")}
                required
              />
            </div>

            {/* Message */}
            <div>
              <label style={{ display: "block", fontSize: "0.75rem", color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                Message
              </label>
              <textarea
                placeholder="Tell me about your project or opportunity..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                style={{ ...inputStyle("message"), height: 130, resize: "none" }}
                required
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              style={{
                padding: "0.9rem",
                background: status === "sent" ? "var(--accent3)" : "var(--accent)",
                color: status === "sent" ? "#000" : "#fff",
                border: "none",
                borderRadius: 8,
                fontSize: "0.95rem",
                fontWeight: 500,
                fontFamily: "'DM Sans', sans-serif",
                cursor: status === "sending" ? "wait" : "pointer",
                transition: "background 0.3s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                if (status === "idle") e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
              }}
            >
              {status === "idle"    && "Send Message"}
              {status === "sending" && "Sending..."}
              {status === "sent"    && "✓ Message Sent!"}
              {status === "error"   && "Error — Try Again"}
            </button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}