import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import "./Projects.css";

const projects = [
  {
    number: "01",
    title: "AI Legal & Citizen Service Assistant",
    subtitle: "Team Project",
    description:
      "AI-powered citizen-service platform providing regional-language legal guidance, verified-source answers using RAG, smart document checklists, government service discovery, application tracking, and human escalation for complex cases.",
    stack: ["React","Node.js", "Express.js", "Redis","JWT","Gemini API"],
    highlights: [
      "Built a full-stack AI legal assistance platform integrating Google Gemini API and 35+ REST API endpoints, supporting legal queries, document checklists, office discovery, application tracking, and human-agent escalation.",
      "Developed a responsive React.js and Tailwind CSS frontend featuring AI chat, service directory, document checklists, office finder, application tracking, and human-escalation case threads.",
      "Designed REST APIs using Node.js and Express.js with JWT authentication, bcrypt password hashing, and role-based access control for Citizen, Agent, and Admin users."
    ],
    accent: "#4ade80",
    icon: "🤖",
    projectLink: "https://ai-legal-assisstant-frontend.vercel.app/",
  },
  {
    number: "02",
    title: "StudyMate",
    subtitle: "AI Powered Student Companion",
    description:
      "Developed a responsive student productivity web application using React, designed to streamline academic workflows. Implemented features like task management, AI assisstant, and resource organization with a focus on intuitive UI/UX.",
    stack: ["React", "Node.js", " Express.js", "MongoDB", "JWT", "Gemini API"],
    highlights: [
      " Architected a full-stack study management platform using React and Node.js, implementing efficient CRUD operations andMongoDB indexing to support sub-200ms query latency.",
      "Hardened application security by implementing JWT-based authentication and route protection, preventing unauthorized access to user-specific study data.",
      "Integrated Google Gemini API to provide real-time academic assistance, implementing robust error handling and prompt engineering to ensure 95% response accuracy.",
      "Added file upload support and deployed the application in production, hosting the frontend on Vercel and the backend on Render.",
    ],
    accent: "#c8a96e",
    icon: "🍽",
    projectLink: "https://studymate-umber-eta.vercel.app/",
  },
];

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <SectionWrapper id="projects">
      <div className="section-heading">
        <div className="section-heading-left">
          <p className="section-label">04 — Projects</p>
          <h2 className="section-title">
            Things I've <em>Built</em>
          </h2>
        </div>
        <div className="section-line" />
      </div>

      <div className="projects-list">
        {projects.map((proj, i) => (
          <div
            key={proj.number}
            className={`project-card ${active === i ? "active" : ""}`}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            onClick={() => window.open(proj.projectLink, "_blank")}
            style={{
              "--proj-accent": proj.accent,
              animationDelay: `${i * 0.12}s`,
            }}
          >
            {/* Left */}
            <div className="project-left">
              <span className="project-num">{proj.number}</span>
              <span className="project-icon">{proj.icon}</span>
            </div>

            {/* Content */}
            <div className="project-content">
              <div className="project-header">
                <div>
                  <p className="project-subtitle-label">{proj.subtitle}</p>
                  <h3 className="project-title">{proj.title}</h3>
                </div>
                <div className="project-stack">
                  {proj.stack.map((s) => (
                    <span key={s} className="stack-badge">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <p className="project-desc">{proj.description}</p>

              <ul className="project-highlights">
                {proj.highlights.map((h, j) => (
                  <li key={j} className="highlight-item">
                    <span className="highlight-dot" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Reveal line */}
            <div className="project-reveal-line" />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
