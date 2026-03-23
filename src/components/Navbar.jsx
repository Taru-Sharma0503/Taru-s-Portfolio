import { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'About',        href: '#about' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Education',    href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',      href: '#contact' },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [active,    setActive]    = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Highlight active section
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Logo */}
        <button className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="logo-text">TS</span>
          <span className="logo-dot" />
        </button>

        {/* Desktop Links */}
        <ul className="nav-links">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <button
                className={`nav-link ${active === href.slice(1) ? 'active' : ''}`}
                onClick={() => handleLink(href)}
              >
                <span>{label}</span>
                <span className="nav-link-line" />
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(({ label, href }, i) => (
          <button
            key={href}
            className="mobile-link"
            style={{ animationDelay: `${i * 0.06}s` }}
            onClick={() => handleLink(href)}
          >
            <span className="mobile-link-num">0{i + 1}</span>
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}
