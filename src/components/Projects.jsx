import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import "./Projects.css";

const projects = [
  {
    number: "01",
    title: "Flavour Loft",
    subtitle: "Fictional Restaurant Website",
    description:
      "A fully responsive website for an imaginary restaurant, featuring an introduction section, detailed menu, online reservation system, and a contact page. Designed with a focus on user experience and clean layout.",
    stack: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Fully responsive across all devices",
      "Interactive online reservation flow",
      "Multi-page architecture with smooth navigation",
    ],
    accent: "#c8a96e",
    icon: "🍽",
    projectLink: "https://taru-sharma0503.github.io/Restaurant-Webpage-Design/",
  },
  {
    number: "02",
    title: "Weather API Integration",
    subtitle: "Real-Time Weather Web App",
    description:
      "A responsive weather application that fetches real-time city-based weather data including temperature, humidity, pressure, and conditions. Features dynamic UI updates and smooth transitions powered by a third-party REST API.",
    stack: ["HTML", "CSS", "JavaScript", "REST API", "JSON"],
    highlights: [
      "Integrated third-party REST API with JSON parsing",
      "Dynamic UI updates with smooth transitions",
      "Displays temperature, humidity, pressure & conditions",
    ],
    accent: "#7c6bff",
    icon: "🌤",
    projectLink: "https://taru-sharma0503.github.io/API-Integration/",
  },
  {
    number: "03",
    title: "File Encryption / Decryption Tool",
    subtitle: "Python Security Utility",
    description:
      "A Caesar Cipher-based encryption and decryption tool built in Python. Allows users to encrypt or decrypt any text file and saves the output as a new file, demonstrating solid Python file-handling fundamentals.",
    stack: ["Python", "File Handling"],
    highlights: [
      "Caesar Cipher algorithm implementation",
      "Reads input & writes encrypted/decrypted output files",
      "Clean CLI interface for easy use",
    ],
    accent: "#4ade80",
    icon: "🔐",
    projectLink:
      "https://github.com/Taru-Sharma0503/File-encryption-and-decryption",
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
