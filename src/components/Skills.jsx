import { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import './Skills.css';

const skillGroups = [
  {
    category: 'Languages',
    icon: '{ }',
    skills: [
      { name: 'Python',     level: 85 },
      { name: 'Java',       level: 80 },
      { name: 'C',          level: 85 },
    ],
  },
  {
    category: 'Frontend',
    icon: '</>',
    skills: [
      { name: 'HTML',       level: 90 },
      { name: 'CSS',        level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'React', level: 75 },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'MongoDB', level: 75 },
    ],
  },
  {
    category: 'Tools & CS',
    icon: '◈',
    skills: [
      { name: 'Git / GitHub', level: 85 },
      { name: 'VS Code',      level: 90 },
      { name: 'OOP',          level: 80 },
      { name: 'DSA',    level: 70 },
    ],
  },
];

const softSkills = [
  'Communication',
  'Problem-Solving',
  'Teamwork',
  'Public Speaking',
  'Anchoring',
  'Debate',
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <SectionWrapper id="skills">
      <div className="section-heading">
        <div className="section-heading-left">
          <p className="section-label">02 — Skills</p>
          <h2 className="section-title">What I <em>Know</em></h2>
        </div>
        <div className="section-line" />
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, gi) => (
          <div key={group.category} className="skill-group" style={{ animationDelay: `${gi * 0.1}s` }}>
            <div className="skill-group-header">
              <span className="skill-group-icon">{group.icon}</span>
              <h3 className="skill-group-title">{group.category}</h3>
            </div>
            <div className="skill-bars">
              {group.skills.map((skill, si) => {
                const key = `${gi}-${si}`;
                return (
                  <div
                    key={skill.name}
                    className={`skill-bar-wrap${hoveredSkill === key ? ' hovered' : ''}`}
                    onMouseEnter={() => setHoveredSkill(key)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="skill-bar-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-pct">{skill.level}%</span>
                    </div>
                    <div className="skill-track">
                      <div
                        className="skill-fill"
                        style={{
                          '--pct': `${skill.level}%`,
                          animationDelay: `${(gi + si) * 0.12}s`,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Soft skills */}
      <div className="soft-skills">
        <p className="soft-skills-label">Soft Skills</p>
        <div className="soft-skills-list">
          {softSkills.map((s, i) => (
            <span key={s} className="soft-tag" style={{ animationDelay: `${i * 0.08}s` }}>
              <span className="soft-tag-dot" />
              {s}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}