import SectionWrapper from './SectionWrapper';
import './Experience.css';

const experiences = [
  {
    role: 'Open Source Contributor',
    company: 'GSSoC',
    period: 'May 2026 – June 2026',
    type: 'Open Source Contribution',
    bullets: [
      ' Implemented a reading progress indicator for story detail pages and a clipboard-based sharing feature, improving content navigation and sharing UX in an open-source web application',
      'Improved frontend accessibility in the GSoC organization finder by adding descriptive ARIA labels to search and filtering controls.',
    ],
  },
];

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="section-heading">
        <div className="section-heading-left">
          <p className="section-label">03 — Experience</p>
        </div>
        <div className="section-line" />
      </div>

      <div className="timeline">
        {experiences.map((exp, i) => (
          <div key={i} className="timeline-item">
            {/* Timeline spine */}
            <div className="timeline-spine">
              <div className="timeline-dot" />
              {i < experiences.length - 1 && <div className="timeline-line" />}
            </div>

            {/* Card */}
            <div className="exp-card">
              <div className="exp-card-top">
                <div>
                  <span className="exp-type">{exp.type}</span>
                  <h3 className="exp-role">{exp.role}</h3>
                  <p className="exp-company">{exp.company}</p>
                </div>
                <div className="exp-period">
                  <span className="exp-period-inner">{exp.period}</span>
                </div>
              </div>

              <ul className="exp-bullets">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="exp-bullet">
                    <span className="bullet-arrow">→</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
