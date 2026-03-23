import './App.css';
import Cursor        from './components/Cursor';
import Navbar        from './components/Navbar';
import Hero          from './components/Hero';
import About         from './components/About';
import Skills        from './components/Skills';
import Experience    from './components/Experience';
import Projects      from './components/Projects';
import Education     from './components/Education';
import Certifications from './components/Certifications';
import Contact       from './components/Contact';
import Footer        from './components/Footer';

export default function App() {
  return (
    <div className="app">
      {/* Custom cursor */}
      <Cursor />

      {/* Ambient glow blobs */}
      <div className="ambient-blob ambient-blob-1" aria-hidden="true" />
      <div className="ambient-blob ambient-blob-2" aria-hidden="true" />

      {/* Page content */}
      <div className="page-content">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Certifications />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}
