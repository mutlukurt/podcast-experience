# Podcast Experience

A modern, high-energy podcast landing page built with cutting-edge web technologies. This project showcases a visually stunning, fully responsive design with smooth animations and an exceptional user experience.

![Podcast Experience](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.17-38B2AC?logo=tailwind-css)

## 🚀 Features

### Core Functionality
- **Fixed Navigation Bar**: Persistent navbar across all devices with smooth scrolling to sections
- **Responsive Mobile Menu**: Hamburger menu with smooth animations for mobile and tablet devices
- **Back to Top Button**: Floating button with smooth scroll functionality
- **Modern Contact Form**: Fully responsive contact section with form validation
- **Smooth Scrolling**: Native smooth scroll behavior for enhanced UX
- **Skip Navigation**: Accessibility feature for keyboard users

### Design Highlights
- **Bold Typography**: Large, impactful headings with modern font scaling
- **Dynamic Animations**: Framer Motion powered animations throughout
- **Glassmorphism Effects**: Modern UI design patterns
- **Responsive Grid Layouts**: Adaptive layouts for all screen sizes
- **Category Cards**: Interactive podcast category showcase
- **Episode Previews**: Latest episodes with hover effects
- **Newsletter Section**: Eye-catching call-to-action area
- **Artist Highlights**: Featured podcaster showcase

### Accessibility & SEO
- **ARIA Labels**: Comprehensive ARIA attributes for screen readers
- **Semantic HTML**: Proper HTML5 semantic structure
- **Focus Management**: Visible focus indicators for keyboard navigation
- **Descriptive Alt Text**: Detailed image descriptions
- **SEO Meta Tags**: Complete Open Graph and Twitter Card integration
- **Skip to Content**: Quick navigation for assistive technologies

## 🛠️ Technologies

### Frontend Framework
- **React 19.2.0**: Latest React with concurrent features
- **TypeScript 5.9.3**: Type-safe development
- **Vite 7.2.4**: Next-generation frontend tooling with lightning-fast HMR

### Styling
- **Tailwind CSS 4.1.17**: Utility-first CSS framework with latest features
- **PostCSS 8.5.6**: CSS transformations
- **Autoprefixer 10.4.22**: Automatic vendor prefixing
- **@tailwindcss/postcss 4.1.17**: Tailwind v4 PostCSS plugin

### Animation & Icons
- **Framer Motion 12.23.24**: Production-ready motion library for React
- **Lucide React 0.554.0**: Beautiful, consistent icon set

### Development Tools
- **ESLint 9.39.1**: Code linting and quality
- **TypeScript ESLint 8.46.4**: TypeScript-specific linting rules
- **Vite Plugin React 5.1.1**: Official Vite plugin for React
- **React Hooks ESLint Plugin 7.0.1**: Enforces Rules of Hooks
- **React Refresh ESLint Plugin 0.4.24**: Fast Refresh support

## 📦 Project Structure

```
podcast/
├── public/
│   └── assets/          # Images and static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Stats.tsx
│   │   ├── FeaturedEpisode.tsx
│   │   ├── Categories.tsx
│   │   ├── LeadingPodcaster.tsx
│   │   ├── Newsletter.tsx
│   │   ├── LatestEpisodes.tsx
│   │   ├── ArtistHighlight.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── BackToTop.tsx
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles and Tailwind imports
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── postcss.config.js    # PostCSS configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd podcast
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

### Theme Configuration
The project uses Tailwind CSS v4 with CSS-based configuration. Customize colors and fonts in `src/index.css`:

```css
@theme {
  --color-primary: #ffd700;
  --font-sans: 'Inter', system-ui, sans-serif;
}
```

### Component Customization
All components are modular and can be easily customized. Each component is self-contained in the `src/components/` directory.

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px - 1280px
- **Large Desktop**: > 1280px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

© 2025 Mutlu Kurt. Licensed under MIT License.

## 👨‍💻 Author

**Mutlu Kurt**

Designed by Mutlu

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
