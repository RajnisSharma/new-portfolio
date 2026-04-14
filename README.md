# Rajnish Kumar Sharma Portfolio

A modern personal portfolio built with React and Vite. The project showcases AI, Python, backend, and full stack work through a polished single-page experience with animated sections, project cards, testimonials, statistics, and a theme-aware UI.

## Overview

This portfolio is designed as a fast, responsive, frontend-only site that highlights personal branding and recent work. It combines a glassmorphism-inspired visual style with practical UX features such as a page loader, scroll progress, scroll-to-top button, typed hero text, project pagination, and a system-aware theme switcher.

## Main Features

- Light mode, dark mode, and system mode support.
- System mode is the default and follows the user's OS preference on first load.
- Manual theme selection is available from the header and is saved in local storage.
- Welcome voice message using the Web Speech API, with a mute/unmute toggle.
- Page loader for initial entry.
- Sticky header with desktop navigation and mobile menu.
- Scroll progress indicator at the top of the page.
- Scroll-to-top floating action button.
- Home, About, Services, Statistics, Portfolio, Testimonials, and Contact sections.
- Typed hero text powered by `typed.js`.
- Portfolio pagination with image fallback icons when assets are missing.
- Client-side contact form validation with loading, success, and error states.
- Responsive layout across desktop, tablet, and mobile breakpoints.
- Accessibility improvements including ARIA labels, focus-visible states, and keyboard-friendly controls.

## Recent Improvements

The current version folds together all earlier modernization work and update reports:

- Centralized shared data in `src/constants.js` to reduce duplication.
- Added Statistics and Testimonials sections.
- Added custom animation hooks in `src/hooks/useAnimations.js`.
- Added `PageLoader`, `ScrollProgress`, and `ScrollToTop` components.
- Upgraded the header with voice controls and theme controls.
- Expanded the design token system in `src/index.css` for dark and light themes.
- Improved cards, gradients, hover states, and responsive behavior.
- Kept the UI resilient by falling back gracefully when project images are missing.

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | React 18 |
| Build Tool | Vite 5 |
| Styling | CSS variables + custom CSS + Bootstrap 5 utilities |
| Icons | Boxicons |
| Animation | Typed.js + CSS animations |
| Fonts | Google Fonts |

## Project Structure

```text
portfolio/
|- public/
|  |- raj_circle.png
|- src/
|  |- Assets/
|  |  |- images/
|  |  `- Rajnish_BTech_CSE_2023_GenAI.pdf
|  |- components/
|  |  |- About.jsx
|  |  |- Contact.jsx
|  |  |- Footer.jsx
|  |  |- Header.jsx
|  |  |- Home.jsx
|  |  |- PageLoader.jsx
|  |  |- Projects.jsx
|  |  |- ScrollProgress.jsx
|  |  |- ScrollToTop.jsx
|  |  |- Services.jsx
|  |  |- Statistics.jsx
|  |  `- Testimonials.jsx
|  |- hooks/
|  |  `- useAnimations.js
|  |- App.jsx
|  |- constants.js
|  |- index.css
|  `- main.jsx
|- index.html
|- package.json
|- vite.config.js
`- README.md
```

## Key Files

- `src/App.jsx`: App shell, theme state, system preference sync, and section composition.
- `src/components/Header.jsx`: Navigation, theme switcher, voice toggle, and mobile menu.
- `src/constants.js`: Central data for navigation, skills, services, social links, and projects.
- `src/hooks/useAnimations.js`: Voice welcome and reusable animation helpers.
- `src/index.css`: Design tokens, responsive styling, theme tokens, and UI effects.

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm 9 or newer

### Install

```bash
npm install
```

### Start the dev server

```bash
npm run dev
```

Then open the local Vite URL shown in the terminal.

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Available Scripts

- `npm run dev`: Start the Vite development server.
- `npm run build`: Create a production build in `dist/`.
- `npm run preview`: Preview the built app locally.
- `npm run predeploy`: Build the project before deploying to GitHub Pages.
- `npm run deploy`: Deploy the `dist/` folder to GitHub Pages.

## Data and Content Customization

### Update personal details and project data

Edit `src/constants.js` to update:

- `SOCIAL_LINKS`
- `NAV_LINKS`
- `SKILLS`
- `SERVICES`
- `PROJECTS`

### Update hero text

Edit the `strings` array in `src/components/Home.jsx`.

### Update the welcome voice message

Edit the message passed to `useWelcomeMessage()` in `src/App.jsx`.

### Update theme colors and styling

Edit the design tokens in `src/index.css`. The file already includes separate token sets for dark and light themes.

### Update contact behavior

`src/components/Contact.jsx` currently simulates a successful submission on the client. If you want real email sending or backend integration, replace the simulated timeout with an API request.

## Assets

Static assets are located in `src/Assets/` and the favicon is in `public/`.

Current assets include:

- `public/raj_circle.png` (favicon)
- `src/Assets/Rajnish_BTech_CSE_2023_GenAI.pdf`
- images inside `src/Assets/images/`

Some project cards intentionally fall back to an icon if the referenced image cannot be loaded.

## UX and Quality Notes

- Theme preference persists between visits.
- System theme changes are detected live while the app is open.
- The voice welcome hook safely cancels speech when disabled or unmounted.
- Controls include hover, focus, and pressed states for better usability.
- The layout is optimized for desktop, tablet, and small mobile screens.

## Deployment

This is a static frontend project and can be deployed to any static host, including:

- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting

A typical deployment flow is:

1. Run `npm run build`.
2. Upload the `dist/` folder or connect the repo to your hosting platform.
3. Set the build command to `npm run build`.
4. Set the publish directory to `dist`.

## Summary

This README replaces the earlier scattered notes and reports. It now serves as the single source of truth for:

- project overview
- implemented features
- modernization work
- theme support
- setup and build steps
- customization points
- deployment guidance

## Author

Rajnish Kumar Sharma

- LinkedIn: https://www.linkedin.com/in/rajnish-kumar-sharma-5910b9288
- GitHub: https://github.com/RajnisSharma
