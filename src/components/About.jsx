import SectionWrapper from './SectionWrapper';
import './About.css';

const stats = [
  { value: '2+', label: 'Internships'    },
  { value: '3+', label: 'Projects Built' },
  { value: '2+', label: 'Hackathons' },
  { value: '100+', label: 'Leetcode problems solved' },
];

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="about-link-icon">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="about-link-icon">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="about-link-icon">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="section-heading">
        <div className="section-heading-left">
          <p className="section-label">01 — About Me</p>
          <h2 className="section-title">Who I <em>Am</em></h2>
        </div>
        <div className="section-line" />
      </div>

      <div className="about-grid">
        {/* Avatar */}
        <div className="about-avatar-wrap">
          <div className="about-avatar">
            <div className="avatar-initials">TS</div>
            <div className="avatar-ring" />
            <div className="avatar-ring avatar-ring-2" />
          </div>
          <div className="avatar-accent">
            <span className="font-mono" style={{ fontSize: '0.65rem', color: 'var(--accent)' }}>
              B.Tech CSE '29
            </span>
          </div>
        </div>

        {/* Bio */}
        <div className="about-bio">
          <p className="about-text">
            Hey there! I'm <strong>Taru Sharma</strong>, a first-year Computer Science Engineering
            student at <strong>KIET, Ghaziabad</strong>. I'm passionate about crafting responsive
            web experiences and building practical Python tools that solve real problems.
          </p>
          <p className="about-text">
            With hands-on internship experience at <strong>InternPe</strong> and <strong>CodVeda</strong>,
            I've sharpened my coding, debugging, and problem-solving skills. I love exploring
            new technologies — from automating tasks with BeautifulSoup to building visually
            rich web apps with REST APIs.
          </p>
          <p className="about-text">
            Beyond code, I'm an <strong>active public speaker</strong>, debater, and anchor —
            a <em>Best Team Award</em> winner at an Inter-School Debate Competition.
          </p>

          <div className="about-links">
            <a href="https://github.com/Taru-Sharma0503" target="_blank" rel="noreferrer" className="about-link">
              <GitHubIcon />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/taru-sharma-304b98381" target="_blank" rel="noreferrer" className="about-link">
              <LinkedInIcon />
              LinkedIn
            </a>
            <a href="mailto:ps9667279@gmail.com" className="about-link">
              <EmailIcon />
              Email
            </a>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        {stats.map(({ value, label }, i) => (
          <div key={label} className="stat-card" style={{ animationDelay: `${i * 0.1}s` }}>
            <span className="stat-value">{value}</span>
            <span className="stat-label">{label}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}