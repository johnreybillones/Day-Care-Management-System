# DCCMS — Public Website

**Day Care Center Management System**  
Public-facing static website for the Day Care Center of Barangay San Antonio de Padua I.

---

## Overview

This repository contains the **public-facing static website** of the DCCMS. It serves as the community portal where parents and guardians can learn about the day care center, view announcements, and access the staff login gateway.

The site is mobile-first, accessibility-focused (WCAG AA), and optimized for low-bandwidth connections on mid-range Android devices.

> **This is not the internal management system.** The private staff PWA is a separate repository. Successful login from this site redirects users to that PWA via `VITE_PWA_URL`.

---

## Tech Stack

| Tool                                         | Version | Purpose                       |
| -------------------------------------------- | ------- | ----------------------------- |
| [React](https://react.dev)                   | ^18     | UI framework                  |
| [TypeScript](https://www.typescriptlang.org) | ^5      | Static typing                 |
| [Vite](https://vitejs.dev)                   | ^5      | Build tool & dev server       |
| [React Router](https://reactrouter.com)      | ^6      | Client-side routing           |
| [Tailwind CSS](https://tailwindcss.com)      | ^3      | Utility-first styling         |
| [clsx](https://github.com/lukeed/clsx)       | ^2      | Conditional class composition |

---

## Pages

| Route            | Page          |
| ---------------- | ------------- |
| `/`              | Home          |
| `/about`         | About Us      |
| `/announcements` | Announcements |
| `/contact`       | Contact Us    |
| `/login`         | Staff Login   |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) v20 or higher
- npm v10 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/johnreybillones/Day-Care-Management-System.git
cd "Day Care Management System"

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Edit .env.local and fill in your values (see Environment Variables below)

# 4. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values. **Never commit `.env.local`.**

| Variable             | Description                                                | Example                         |
| -------------------- | ---------------------------------------------------------- | ------------------------------- |
| `VITE_SITE_URL`      | Base URL of this site                                      | `http://localhost:5173`         |
| `VITE_PWA_URL`       | URL of the private staff PWA — redirect target after login | `https://app.dccms.example.com` |
| `VITE_API_URL`       | Backend API base URL                                       | `https://api.dccms.example.com` |
| `VITE_MESSENGER_URL` | Facebook Messenger link for the Contact page               | `https://m.me/YOUR_PAGE`        |

> All environment variables must be prefixed with `VITE_` to be accessible in the browser. See `ENVIRONMENT.md` for the full guide.

---

## Available Scripts

| Command             | Description                                                   |
| ------------------- | ------------------------------------------------------------- |
| `npm run dev`       | Start the Vite development server at `localhost:5173`         |
| `npm run build`     | Type-check with `tsc`, then build for production into `dist/` |
| `npm run preview`   | Locally preview the production build                          |
| `npm run typecheck` | Run the TypeScript compiler in check-only mode                |

---

## Project Structure

```
src/
├── components/
│   ├── layout/         # Navbar, Footer, PublicLayout, CloudDivider
│   ├── ui/             # Reusable atoms: Button, Card, Skeleton, etc.
│   └── sections/       # Page-specific sections: HeroBanner, ProgramsSection, etc.
├── pages/              # One file per route: Home, About, Announcements, Contact, Login
├── hooks/              # Custom React hooks: useOnlineStatus, useAnnouncements
├── services/           # API calls: auth.ts, announcements.ts
├── constants/          # Static config: navigation.ts, content.ts
├── assets/             # Images and static assets (processed by Vite)
├── styles/
│   └── index.css       # Tailwind directives + Google Fonts import
├── App.tsx             # Route definitions only
├── main.tsx            # React DOM entry point
└── vite-env.d.ts       # Vite client type declarations
```

---

## Design System

The site uses two Google Fonts and a custom Tailwind color palette:

| Token          | Value       | Usage                           |
| -------------- | ----------- | ------------------------------- |
| `font-display` | Fredoka One | Headings, hero text             |
| `font-body`    | Nunito      | Body text, nav links, buttons   |
| `brand-blue`   | `#1AAEEE`   | Primary UI color                |
| `brand-red`    | `#E63329`   | CTA buttons                     |
| `sky-section`  | light blue  | Alternating section backgrounds |

> Full design specification: [`docs/design.md`](docs/design.md)  
> Exact token values: [`tailwind.config.js`](tailwind.config.js)

---

## Documentation

| Document                                           | Purpose                                                 |
| -------------------------------------------------- | ------------------------------------------------------- |
| [`ARCHITECTURE.md`](ARCHITECTURE.md)               | Folder structure, routing, module boundaries            |
| [`STANDARDS.md`](STANDARDS.md)                     | React + TypeScript coding standards & conventions       |
| [`ENVIRONMENT.md`](ENVIRONMENT.md)                 | Full environment, tooling & configuration guide         |
| [`CONTRIBUTING.md`](CONTRIBUTING.md)               | Git workflow, branch naming, commit conventions         |
| [`docs/design.md`](docs/design.md)                 | Visual design spec, component specs, page layouts       |
| [`docs/CONTENT.md`](docs/CONTENT.md)               | All page copy and text content                          |
| [`docs/FLOW.md`](docs/FLOW.md)                     | User journey, routing logic, auth flow                  |
| [`docs/PROJECT.md`](docs/PROJECT.md)               | Project background and stakeholder overview             |
| [`docs/WIREFRAME-SPEC.md`](docs/WIREFRAME-SPEC.md) | Viewport targets, responsive specs, performance budgets |

---

## Contributing

Please read [`CONTRIBUTING.md`](CONTRIBUTING.md) before submitting changes. Key points:

- Branch off `develop`, not `main`
- Use [Conventional Commits](https://www.conventionalcommits.org): `feat:`, `fix:`, `chore:`, etc.
- Run `npm run typecheck` before opening a PR
- PRs require at least one reviewer approval before merging

---

## Key Constraints

> These are non-negotiable requirements for this project:

- **Mobile-first** — base styles target 360–430px viewport. Scale up with `md:` and `lg:`.
- **Accessibility** — WCAG AA minimum. All images need `alt`. All inputs need `<label>`.
- **No `any` type** — TypeScript strict mode is enabled. Use proper interfaces and types.
- **No inline styles** — compose classes in JSX only, using `clsx()` for conditional logic.
- **Touch targets** — minimum 44×44px on all interactive elements.
- **No complex animations** — no parallax, no carousels, no page-transition effects.

---

## License

This project is developed for **Barangay San Antonio de Padua I** day care center.  
All rights reserved.
