# Taru Sharma — Personal Portfolio

A dark, editorial-style personal portfolio built with **React + Vite**.

## 🚀 Getting Started

```bash
# Install dependencies (already done if node_modules exists)
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 📁 New Files Added

The following files were **added** to your existing project structure:

```
src/
├── index.css                  ✅ Updated — global styles, CSS variables, animations
├── App.css                    ✅ Updated — layout, ambient blobs, noise texture
├── App.jsx                    ✅ Updated — wires all sections together
├── main.jsx                   ✅ Updated — standard React entry
│
├── components/                ✅ NEW FOLDER
│   ├── Cursor.jsx             Custom animated cursor (dot + ring)
│   ├── Cursor — (styles in index.css)
│   ├── Navbar.jsx + .css      Sticky nav with active section highlighting
│   ├── Hero.jsx + .css        Full-screen hero with letter animations
│   ├── SectionWrapper.jsx + .css  Scroll-reveal wrapper for all sections
│   ├── About.jsx + .css       Bio, links, stats
│   ├── Skills.jsx + .css      Animated skill bars by category
│   ├── Experience.jsx + .css  Timeline layout for internships
│   ├── Projects.jsx + .css    Interactive project cards
│   ├── Education.jsx + .css   Education cards
│   ├── Certifications.jsx + .css  Certs + achievements
│   ├── Contact.jsx + .css     Email copy + contact links
│   └── Footer.jsx + .css      Footer with watermark
│
└── pages/
    └── Home.jsx               Reserved for future routing

index.html                     ✅ Updated — meta tags, font preconnects
```

---

## 🎨 Design System

| Token            | Value                          |
|------------------|-------------------------------|
| Background       | `#0a0a0f`                     |
| Accent (gold)    | `#c8a96e`                     |
| Accent (purple)  | `#7c6bff`                     |
| Display font     | Playfair Display (serif)      |
| Mono font        | DM Mono                       |
| Body font        | Cabinet Grotesk               |

---

## ✨ Features

- **Custom animated cursor** — dot + lagging ring, blend mode difference
- **Staggered letter reveal** on hero title
- **Scroll-reveal** on every section via IntersectionObserver
- **Animated skill bars** with CSS transitions
- **Interactive project cards** with color-coded accent per project
- **Timeline** layout for experience
- **Copy-to-clipboard** email button
- **Sticky navbar** with active section detection
- **Responsive** — works on mobile, tablet, and desktop
- **Noise texture + ambient glow blobs** for depth
- **Back-to-top** button in footer

---

## 📦 Dependencies Used

Only your existing dependencies are used — no new packages needed:
- `react`, `react-dom`
- `react-router-dom` (available but not used yet)
- `vite`, `@vitejs/plugin-react`
