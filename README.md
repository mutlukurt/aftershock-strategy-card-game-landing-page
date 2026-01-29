# 🌋 Aftershock - Strategy Card Game

A premium, immersive landing page for **Aftershock**, a next-generation fantasy strategy card game. Built with modern web technologies and a dark, high-fantasy aesthetic.

![Vite](https://img.shields.io/badge/Vite-6.0.5-646CFF?logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7.13.0-CA4245?logo=reactrouter&logoColor=white)
![License](https://img.shields.io/badge/License-Private-red)

---

## ✨ Features

### Pages
- **Home Page**: Immersive hero section with animated background, floating logo, video trailer toggle, and call-to-action buttons
- **Media Page**: Video trailer player, interactive wallpaper gallery with lightbox
- **Community Page**: Links to Discord, Forums, and Esports sections
- **Support Page**: FAQ section and contact form

### UI Components
- **Responsive Navbar**: Glassmorphism effect on scroll, mobile menu toggle
- **Hero Section**: 
  - Parallax-like background zoom animation
  - Floating logo effect (unselectable/undraggable)
  - Video trailer toggle via "Watch Trailer" button
  - Click-to-stop video functionality
- **Card Carousel**: Interactive 3D card selection with perspective transforms (7 cards)
- **Wallpaper Lightbox**: Click-to-expand fullscreen image viewer
- **Video Player**: HTML5 video with controls for trailers
- **Custom Buttons**: Styled buttons with glare effect and multiple variants
- **Footer**: Newsletter signup CTA, social links, legal navigation

### Design System
- **Typography**: Cinzel (headings) + Lato (body) via Google Fonts
- **Color Palette**: Dark theme with teal (#00D2B4) and gold (#D4AF37) accents
- **Animations**: CSS keyframe animations for background, logo float, scroll indicator, lightbox fade
- **Custom Scrollbar**: Styled scrollbar matching the theme

---

## 🛠️ Tech Stack

| Category | Technology | Version |
|----------|------------|---------|
| **Framework** | React | 19.0.0 |
| **Build Tool** | Vite | 6.0.5 |
| **Routing** | React Router DOM | 7.13.0 |
| **Icons** | Lucide React | 0.473.0 |
| **Styling** | Vanilla CSS | - |
| **Linting** | ESLint | 9.17.0 |
| **Type Definitions** | @types/react, @types/react-dom | 19.0.0 |
| **React Plugin** | @vitejs/plugin-react | 4.3.4 |

### Dependencies
```json
{
  "dependencies": {
    "lucide-react": "^0.473.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-router-dom": "^7.13.0"
  }
}
```

### Dev Dependencies
```json
{
  "devDependencies": {
    "@eslint/js": "^9.17.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@vitejs/plugin-react": "^4.3.4",
    "eslint": "^9.17.0",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.16",
    "globals": "^15.14.0",
    "vite": "^6.0.5"
  }
}
```

---

## 📁 Project Structure

```
aftershock/
├── public/                     # Static assets (if any)
├── src/
│   ├── assets/                 # Images, videos, and media
│   │   ├── hero_bg.jpg         # Hero section background
│   │   ├── hero-trailer.mp4    # Hero section video trailer
│   │   ├── logo_transparent.png # Aftershock logo
│   │   ├── card_fire.png       # Fire Elemental card
│   │   ├── card_water.png      # Water Spirit card
│   │   ├── card_earth.png      # Earth Golem card
│   │   ├── card_air.png        # Air Spirit card
│   │   ├── card_lightning.png  # Storm Bringer card
│   │   ├── card_necro.png      # Necromancer card
│   │   ├── card_mystic.png     # Mystic Dragon card
│   │   ├── gameplay.png        # Hexagonal strategy map preview
│   │   ├── video.mp4           # Media page trailer video
│   │   ├── 1.jpeg              # Wallpaper 1
│   │   ├── 2.jpeg              # Wallpaper 2
│   │   └── 3.jpeg              # Wallpaper 3
│   ├── components/             # React components
│   │   ├── Button.jsx / Button.css
│   │   ├── Navbar.jsx / Navbar.css
│   │   ├── Hero.jsx / Hero.css
│   │   ├── Features.jsx / Features.css
│   │   ├── CardCarousel.jsx / CardCarousel.css
│   │   ├── Footer.jsx / Footer.css
│   │   ├── Media.jsx
│   │   ├── Community.jsx
│   │   ├── Support.jsx
│   │   └── PageStyles.css
│   ├── App.jsx                 # Main app with routing
│   ├── App.css
│   ├── main.jsx                # Entry point with BrowserRouter
│   └── index.css               # Global styles & CSS variables
├── index.html                  # HTML template with Google Fonts
├── vite.config.js
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** v18+ (tested on v24.13.0)
- **npm** v9+ (tested on v11.6.2)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd aftershock

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview  # Preview production build locally
```

The production build will be output to the `dist/` folder.

---

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 🎨 Design Tokens

### Colors (CSS Variables)
```css
--color-bg-dark: #0A1014;
--color-bg-card: #141A1E;
--color-accent-teal: #00D2B4;
--color-accent-gold: #D4AF37;
--color-text-primary: #FFFFFF;
--color-text-muted: #8A9199;
```

### Fonts
```css
--font-heading: 'Cinzel', serif;
--font-body: 'Lato', sans-serif;
```

---

## 📸 Assets

### Card Art (7 Cards)
| Asset | Character | Description |
|-------|-----------|-------------|
| `card_fire.png` | Fire Elemental | "Burn them all." |
| `card_water.png` | Water Spirit | "Control the tides." |
| `card_earth.png` | Earth Golem | "Unstoppable force." |
| `card_air.png` | Air Spirit | "Swift justice." |
| `card_lightning.png` | Storm Bringer | "Thunder rolls." |
| `card_necro.png` | Necromancer | "Death is a beginning." |
| `card_mystic.png` | Mystic Dragon | "Ancient wisdom." |

### Media
| Asset | Description |
|-------|-------------|
| `hero_bg.jpg` | Hero section background (dark fantasy portal) |
| `hero-trailer.mp4` | Hero section video trailer (plays on "Watch Trailer" click) |
| `logo_transparent.png` | Aftershock logo with transparent background |
| `gameplay.png` | Hexagonal strategy map preview |
| `video.mp4` | Media page trailer video |
| `1.jpeg`, `2.jpeg`, `3.jpeg` | Wallpaper images for lightbox gallery |

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy the dist/ folder to Vercel
```

### Netlify
```bash
npm run build
# Deploy the dist/ folder to Netlify
```

### Manual Hosting
The `dist/` folder contains static files that can be served by any static file server (Nginx, Apache, etc.).

---

## 📄 License

This project is **private** and not licensed for public distribution.

---

## 🤝 Contributing

This is currently a closed project. For inquiries, contact the development team.
