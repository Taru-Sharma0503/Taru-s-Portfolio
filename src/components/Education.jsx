import SectionWrapper from './SectionWrapper';
import './Education.css';

const education = [
  {
    degree: 'B.Tech – Computer Science Engineering',
    institution: 'Krishna Institute of Engineering Technology (KIET)',
    location: 'Ghaziabad, UP',
    period: '2025 – 2029',
    grade: 'CGPA: 9.18',
    current: true,
    icon: '🎓',
  },
];

export default function Education() {
  return (
    <SectionWrapper id="education">
      <div className="section-heading">
        <div className="section-heading-left">
          <p className="section-label">05 — Education</p>
          <h2 className="section-title">Where I <em>Learned</em></h2>
        </div>
        <div className="section-line" />
      </div>

      <div className="edu-grid">
        {education.map((edu, i) => (
          <div
            key={i}
            className={`edu-card ${edu.current ? 'edu-card-current' : ''}`}
            style={{ animationDelay: `${i * 0.12}s` }}
          >
            {edu.current && <span className="edu-current-badge">Current</span>}

            <div className="edu-icon-wrap">
              <span className="edu-icon">{edu.icon}</span>
            </div>

            <div className="edu-body">
              <p className="edu-period">{edu.period}</p>
              <h3 className="edu-degree">{edu.degree}</h3>
              <p className="edu-institution">{edu.institution}</p>
              {edu.location && <p className="edu-location">{edu.location}</p>}
            </div>

            <div className="edu-footer">
              <div className="edu-grade-wrap">
                <span className="edu-grade-label">Result</span>
                <span className="edu-grade">{edu.grade}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}