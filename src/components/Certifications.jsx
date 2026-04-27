import SectionWrapper from './SectionWrapper';
import './Certifications.css';

const certifications = [
  {
    title: 'HTML Certificate',
    issuer: 'Infosys',
    icon: '📊',
    color: '#c8a96e',
  },
  {
    title: 'CSS Certificate',
    issuer: 'Infosys',
    icon: '🎨',
    color: '#7c6bff',
  },
  {
    title: 'JavaScript Certificate',
    issuer: 'Infosys',
    icon: '⚡',
    color: '#4ade80',
  },
];

const achievements = [
  {
    title: 'Best Team Award',
    description: 'Winner of Best Team Award at Inter-School Debate Competition.',
    icon: '🏆',
  },
  {
    title: 'Public Speaker & Anchor',
    description: 'Active participant in public speaking, anchoring, and debates across school events.',
    icon: '🎤',
  },
];

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <div className="section-heading">
        <div className="section-heading-left">
          <p className="section-label">06 — Certifications & Achievements</p>
          <h2 className="section-title">Badges & <em>Honours</em></h2>
        </div>
        <div className="section-line" />
      </div>

      <div className="ca-grid">
        {/* Certifications */}
        <div className="ca-block">
          <h3 className="ca-block-title">
            <span className="ca-block-icon">✦</span>
            Certifications
          </h3>
          <div className="cert-list">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="cert-card"
                style={{ '--cert-color': cert.color, animationDelay: `${i * 0.1}s` }}
              >
                <div className="cert-icon-wrap">
                  <span className="cert-icon">{cert.icon}</span>
                </div>
                <div className="cert-info">
                  <h4 className="cert-title">{cert.title}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                </div>
                <div className="cert-badge">
                  <span className="cert-badge-dot" />
                  <span className="cert-badge-text">Certified</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="ca-block">
          <h3 className="ca-block-title">
            <span className="ca-block-icon">◈</span>
            Achievements
          </h3>
          <div className="ach-list">
            {achievements.map((ach, i) => (
              <div
                key={i}
                className="ach-card"
                style={{ animationDelay: `${i * 0.1 + 0.3}s` }}
              >
                <div className="ach-icon">{ach.icon}</div>
                <div className="ach-info">
                  <h4 className="ach-title">{ach.title}</h4>
                  <p className="ach-desc">{ach.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
