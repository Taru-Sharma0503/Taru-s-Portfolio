# Taru Sharma — Personal Portfolio

## 🖥️ Live Preview
https://taru-s-portfolio.vercel.app/

---

## ✨ Features

| Feature | Description |
|---|---|
| 🖱️ Custom Cursor | Animated dot + lagging ring with `mix-blend-mode: difference` |
| 🔤 Letter Reveal | Staggered per-letter entrance animation on hero title |
| 🔍 Scroll Reveal | Every section fades in via `IntersectionObserver` |
| 📊 Skill Bars | Animated CSS progress bars with percentage labels |
| 🗂️ Project Cards | Interactive hover-activated cards with per-project accent colors |
| 🕐 Experience Timeline | Vertical timeline layout with animated connecting lines |
| 📋 Copy Email | One-click clipboard copy with visual feedback |
| 📌 Sticky Navbar | Active section detection with underline indicator |
| 📱 Responsive | Mobile-first, works across all viewport sizes |
| 🌫️ Ambient FX | Noise texture overlay + floating radial glow blobs |
| ⬆️ Back to Top | Smooth scroll button in the footer |

---

## 🏗️ Tech Stack

- **React 18** — Component-based UI
- **Vite** — Lightning-fast dev server & build tool
- **React Router DOM** — Client-side routing (reserved for future pages)
- **Vanilla CSS** — No CSS framework; all styles hand-crafted with CSS custom properties
- **Google Fonts** — Playfair Display · DM Mono · Cabinet Grotesk

---

## 📁 Project Structure

```
├── index.html                    # Root HTML with meta tags
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx                  # React entry point (BrowserRouter)
    ├── App.jsx                   # Root component — wires all sections
    ├── App.css                   # Layout, ambient blobs, noise texture
    ├── index.css                 # Global styles, CSS variables, keyframe animations
    │
    ├── components/
    │   ├── Cursor.jsx            # Custom animated cursor (dot + ring)
    │   ├── Navbar.jsx + .css     # Sticky nav with active section highlighting
    │   ├── Hero.jsx + .css       # Full-screen hero with letter-by-letter animation
    │   ├── SectionWrapper.jsx + .css  # Scroll-reveal HOC for all sections
    │   ├── About.jsx + .css      # Bio, social links, stats grid
    │   ├── Skills.jsx + .css     # Animated skill bars by category + soft skills
    │   ├── Experience.jsx + .css # Vertical timeline for internships
    │   ├── Projects.jsx + .css   # Interactive project list with accent colors
    │   ├── Education.jsx + .css  # Education cards with grade display
    │   ├── Certifications.jsx + .css  # Certs + achievements grid
    │   ├── Contact.jsx + .css    # Email copy button + contact link cards
    │   └── Footer.jsx + .css     # Footer with watermark + back-to-top
    │
    └── pages/
        └── Home.jsx              # Reserved for future routing
```

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#1e2230` | Main background |
| `--bg-2` | `#252a3a` | Section contrast |
| `--bg-card` | `#2c3145` | Cards / panels |
| `--border` | `rgba(255, 255, 255, 0.08)` | Subtle borders |
| `--accent` | `#7c7cff` | Primary accent (soft indigo) |
| `--accent-2` | `#22c1c3` | Secondary accent (cyan) |
| `--accent-glow` | `rgba(124, 124, 255, 0.15)` | Accent glow effect |
| `--text` | `#f1f3f8` | Primary text |
| `--text-muted` | `#b0b6c3` | Secondary text |
| `--text-dim` | `#7f8596` | Low emphasis text |
| `--font-display` | `Playfair Display` | Headings (serif) |
| `--font-mono` | `DM Mono` | Code / labels |
| `--font-body` | `Cabinet Grotesk` | Body text |
| `--ease-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Spring-like motion |
| `--ease-smooth` | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | Smooth transitions |

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>= 18.x`
- npm `>= 9.x`

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Taru-Sharma0503/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory — ready to deploy to Vercel, Netlify, or GitHub Pages.

### Preview Production Build Locally

```bash
npm run preview
```

---

## 📦 Dependencies

| Package | Version | Purpose |
|---|---|---|
| `react` | ^18 | UI library |
| `react-dom` | ^18 | DOM renderer |
| `react-router-dom` | ^6 | Client-side routing |
| `vite` | ^5 | Build tool |
| `@vitejs/plugin-react` | ^4 | React + Fast Refresh support |

> ℹ️ No third-party UI libraries. All components are built from scratch.

---

## 📋 Sections Overview

| # | Section | Component | Description |
|---|---|---|---|
| — | Hero | `Hero.jsx` | Full-viewport opener with animated title |
| 01 | About | `About.jsx` | Bio, quick links, stats (CGPA, projects, internships) |
| 02 | Skills | `Skills.jsx` | Skill bars (Languages, Web, Frameworks, Tools) + Soft skills |
| 03 | Experience | `Experience.jsx` | InternPe & CodVeda internship timeline |
| 04 | Projects | `Projects.jsx` | Flavour Loft, Weather API, File Encryption Tool |
| 05 | Education | `Education.jsx` | KIET B.Tech|
| 06 | Certifications | `Certifications.jsx` | Infosys, HackerRank certs + debate achievements |
| 07 | Contact | `Contact.jsx` | Email copy button, GitHub, LinkedIn|

---

## 🤝 Contact

**Taru Sharma**
- 📧 [ps9667279@gmail.com](mailto:ps9667279@gmail.com)
- 💼 [linkedin.com/in/taru-sharma](https://linkedin.com/in/taru-sharma)
- 🐙 [github.com/Taru-Sharma0503](https://github.com/Taru-Sharma0503)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

<p align="center">
  Crafted with React &amp; passion by <strong>Taru Sharma</strong>
</p>