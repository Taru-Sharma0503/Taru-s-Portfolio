# Taru Sharma — Personal Portfolio

> A dark, editorial-style personal portfolio built with **React + Vite** — featuring custom animations, scroll-reveal effects, and a refined design system.

---

## 🖥️ Live Preview

Portfolio of **Taru Sharma** — B.Tech CSE Student, Python Developer & Web Developer based in Ghaziabad, UP.

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
| `--bg` | `#0a0a0f` | Page background |
| `--bg-2` | `#0f0f18` | Subtle surface variant |
| `--bg-card` | `#13131f` | Card / panel backgrounds |
| `--accent` | `#c8a96e` | Gold — primary accent |
| `--accent-2` | `#7c6bff` | Purple — secondary accent |
| `--text` | `#e8e4d9` | Primary text |
| `--text-dim` | `#a09b8e` | Body copy |
| `--text-muted` | `#6e6a60` | Labels, captions |
| `--border` | `rgba(255,255,255,0.07)` | Subtle borders |
| `--font-display` | `Playfair Display` | Headings, serif |
| `--font-mono` | `DM Mono` | Labels, tags, code |
| `--font-body` | `Cabinet Grotesk` | Body text |
| `--ease-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Spring-like bounce |
| `--ease-smooth` | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | Smooth deceleration |

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

The app will be available at **http://localhost:5173**

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
| 01 | About | `About.jsx` | Bio, quick links, stats (GPA, projects, internships) |
| 02 | Skills | `Skills.jsx` | Skill bars (Languages, Web, Frameworks, Tools) + Soft skills |
| 03 | Experience | `Experience.jsx` | InternPe & CodVeda internship timeline |
| 04 | Projects | `Projects.jsx` | Flavour Loft, Weather API, File Encryption Tool |
| 05 | Education | `Education.jsx` | KIET B.Tech, Class XII (94.25%), Class X (96.8%) |
| 06 | Certifications | `Certifications.jsx` | Infosys, HackerRank certs + debate achievements |
| 07 | Contact | `Contact.jsx` | Email copy button, GitHub, LinkedIn, Phone |

---

## 🌐 Deployment

This project is a standard Vite SPA and can be deployed to any static host.

**Recommended platforms:**

- [Vercel](https://vercel.com) — `vercel deploy`
- [Netlify](https://netlify.com) — Drag & drop `dist/` folder
- [GitHub Pages](https://pages.github.com) — Use `gh-pages` branch with `vite.config.js` `base` option

> For GitHub Pages, set `base: '/your-repo-name/'` in `vite.config.js`.

---

## 🤝 Contact

**Taru Sharma**
- 📧 [ps9667279@gmail.com](mailto:ps9667279@gmail.com)
- 💼 [linkedin.com/in/taru-sharma](https://linkedin.com/in/taru-sharma)
- 🐙 [github.com/Taru-Sharma0503](https://github.com/Taru-Sharma0503)
- 📞 +91-9211982902

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

<p align="center">
  Crafted with React &amp; passion by <strong>Taru Sharma</strong>
</p>