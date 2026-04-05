// ─── App.tsx ──────────────────────────────────────────────────────────────────
// Root component — assembles all sections in order.
// Global styles are imported once here via global.css.

import "./styles/global.css";

import Navbar        from "./components/Navbar";
import Hero          from "./components/Hero";
import About         from "./components/About";
import Experience    from "./components/Experience";
import Projects      from "./components/Projects";
import Skills        from "./components/Skills";
import Contact       from "./components/Contact";
import Footer        from "./components/Footer";
import ScrollTop     from "./components/ScrollTop";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <ScrollTop />
    </>
  );
}