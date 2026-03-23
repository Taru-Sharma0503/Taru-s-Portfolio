import SectionWrapper from './SectionWrapper';
import './Experience.css';

const experiences = [
  {
    role: 'Python Intern',
    company: 'InternPe',
    period: 'Dec 2025 – Jan 2026',
    type: 'Internship',
    bullets: [
      'Developed Python-based mini projects to solve real-world problems.',
      'Improved coding and debugging skills through iterative development.',
      'Worked on real-time problem statements under guidance.',
    ],
  },
  {
    role: 'Python Intern',
    company: 'CodVeda',
    period: 'Nov 2025 – Dec 2025',
    type: 'Internship',
    bullets: [
      'Worked in Python using various modules and libraries.',
      'Explored BeautifulSoup and Requests for web automation and scraping.',
      'Built practical Python applications including a To-Do List and Data Scraper.',
    ],
  },
];

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="section-heading">
        <div className="section-heading-left">
          <p className="section-label">03 — Experience</p>
          <h2 className="section-title">Where I've <em>Worked</em></h2>
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
