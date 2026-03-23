import { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import './Contact.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('ps9667279@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <SectionWrapper id="contact">
      <div className="section-heading">
        <div className="section-heading-left">
          <p className="section-label">07 &mdash; Contact</p>
          <h2 className="section-title">Say <em>Hello</em></h2>
        </div>
        <div className="section-line" />
      </div>

      <div className="contact-layout">
        <div className="contact-cta">
          <p className="contact-tagline">
            Open to internships, collaborations, and new opportunities.
          </p>
          <p className="contact-body">
            Whether you have a project in mind, want to collaborate on something cool,
            or just want to connect &mdash; my inbox is always open. I'll get back to you as soon as I can!
          </p>
          <button className="contact-email-btn" onClick={copyEmail}>
            <span className="contact-email-text">ps9667279@gmail.com</span>
            <span className="contact-email-action">
              {copied ? (
                <>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  Copy
                </>
              )}
            </span>
          </button>
        </div>

        <div className="contact-links-grid">
          <a href="mailto:ps9667279@gmail.com" className="contact-link-card" style={{ animationDelay: '0s' }}>
            <div className="contact-link-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div className="contact-link-info">
              <span className="contact-link-label">Email</span>
              <span className="contact-link-value">ps9667279@gmail.com</span>
            </div>
            <svg className="contact-link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>

          <a href="https://github.com/Taru-Sharma0503" target="_blank" rel="noreferrer" className="contact-link-card" style={{ animationDelay: '0.08s' }}>
            <div className="contact-link-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
            <div className="contact-link-info">
              <span className="contact-link-label">GitHub</span>
              <span className="contact-link-value">github.com/Taru-Sharma0503</span>
            </div>
            <svg className="contact-link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>

          <a href="https://www.linkedin.com/in/taru-sharma-304b98381" target="_blank" rel="noreferrer" className="contact-link-card" style={{ animationDelay: '0.16s' }}>
            <div className="contact-link-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <div className="contact-link-info">
              <span className="contact-link-label">LinkedIn</span>
              <span className="contact-link-value">linkedin.com/in/taru-sharma-304b98381</span>
            </div>
            <svg className="contact-link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}