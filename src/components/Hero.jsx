import { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const titleRef = useRef(null);

  useEffect(() => {
    // Staggered letter reveal
    const el = titleRef.current;
    if (!el) return;
    const letters = el.querySelectorAll('.letter');
    letters.forEach((l, i) => {
      l.style.animationDelay = `${0.05 * i + 0.3}s`;
    });
  }, []);

  const splitText = (text) =>
    text.split('').map((char, i) => (
      <span key={i} className="letter" style={{ opacity: 0 }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));

  return (
    <section className="hero" id="hero">
      {/* Background grid lines */}
      <div className="hero-grid" aria-hidden="true">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="grid-line" style={{ animationDelay: `${i * 0.15}s` }} />
        ))}
      </div>

      {/* Corner decorations */}
      <div className="corner corner-tl" aria-hidden="true" />
      <div className="corner corner-br" aria-hidden="true" />

      <div className="hero-content">
        {/* Eyebrow */}
        <div className="hero-eyebrow">
          <span className="eyebrow-line" />
          <span className="eyebrow-text">B.Tech CSE Student & Developer</span>
        </div>

        {/* Title */}
        <h1 className="hero-title" ref={titleRef}>
          <span className="title-line">{splitText('Taru')}</span>
          <span className="title-line title-line-accent">{splitText('Sharma')}</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          Building web experiences &amp; Python tools —
          <br />
          <em>one line of code at a time.</em>
        </p>

        {/* Tags */}
        <div className="hero-tags">
          {['Python', 'Web Dev', 'Problem Solver', 'KIET Ghaziabad'].map((tag, i) => (
            <span
              key={tag}
              className="tag"
              style={{ animationDelay: `${1.2 + i * 0.1}s` }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="hero-ctas">
          <a
            className="btn btn-primary"
            href="#projects"
            onClick={e => {e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior:'smooth' }); }}
          >
            <span>View Projects</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a
            className="btn btn-ghost"
            href="#contact"
            onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior:'smooth' }); }}
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-hint">
        <span className="scroll-hint-text">scroll</span>
        <div className="scroll-line" />
      </div>

      {/* Floating badge */}
      <div className="floating-badge">
        <div className="badge-ring">
          <span className="badge-text">
            {'OPEN TO OPPORTUNITIES · '.split('').map((c, i) => (
              <span key={i} style={{ '--i': i }}>{c}</span>
            ))}
          </span>
        </div>
        <div className="badge-center">
          <span className="badge-icon">✦</span>
        </div>
      </div>
    </section>
  );
}
