# ENVIRONMENT.md — Environment, Tooling & Configuration Guide

**Project:** DCCMS Public Static Website  
**Stack:** React + TypeScript + Tailwind CSS + React Router v6 + Vite  
**Last Updated:** 2026-05-04

---

## 1. Required Tooling

| Tool    | Version                         | Install                                       |
| ------- | ------------------------------- | --------------------------------------------- |
| Node.js | `>=20.x` (LTS)                  | [nodejs.org](https://nodejs.org) or use `nvm` |
| npm     | `>=10.x` (bundled with Node 20) | —                                             |
| Git     | Latest                          | [git-scm.com](https://git-scm.com)            |

### Recommended: Use `nvm` to manage Node versions

```bash
# Install nvm (if not already installed)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

# Install and use the correct Node version
nvm install 20
nvm use 20

# Verify
node --version   # → v20.x.x
npm --version    # → 10.x.x
```

---

## 2. Project Dependencies

### Core Dependencies

```json
{
  "react": "^18.x",
  "react-dom": "^18.x",
  "react-router-dom": "^6.x",
  "clsx": "^2.x"
}
```

> `clsx` is used for **conditional class composition** in JSX. Use it any time class names depend on props or state:
>
> ```js
> import clsx from 'clsx';
> className={clsx('base-btn', isDisabled && 'opacity-50 cursor-not-allowed', variant === 'primary' ? 'bg-brand-red' : 'bg-brand-blue')}
> ```

### Dev Dependencies

```json
{
  "typescript": "^5.x",
  "@types/react": "^18.x",
  "@types/react-dom": "^18.x",
  "vite": "^5.x",
  "@vitejs/plugin-react": "^4.x",
  "tailwindcss": "^3.x",
  "postcss": "^8.x",
  "autoprefixer": "^10.x"
}
```

> ⚠️ **Before adding any new dependency**, check: Does a built-in or existing package already handle this? New dependencies must be flagged in your PR and justified. This keeps the bundle lean for slow-connection users.

---

## 3. Environment Variables

All environment variables are prefixed with `VITE_` — this is required by Vite to expose variables to the client-side bundle.

### `.env.example` (commit this file)

```env
# Public site base URL
VITE_SITE_URL=http://localhost:5173

# URL of the Private Management PWA — redirect target after successful login
VITE_PWA_URL=https://app.dccms.example.com

# Backend API base URL (for announcements fetch, auth)
VITE_API_URL=https://api.dccms.example.com

# Facebook Messenger link for the Contact page
VITE_MESSENGER_URL=https://m.me/YOUR_PAGE_USERNAME
```

### `.env.local` (gitignored — each dev creates their own)

```env
VITE_SITE_URL=http://localhost:5173
VITE_PWA_URL=https://app.dccms.example.com
VITE_API_URL=http://localhost:8000
VITE_MESSENGER_URL=https://m.me/YOUR_PAGE_USERNAME
```

### Accessing Variables in Code

```js
// Always access via import.meta.env
const pwaUrl = import.meta.env.VITE_PWA_URL;

// Never hardcode URLs in source files
// ❌ window.location.href = 'https://app.dccms.example.com';
// ✅ window.location.href = import.meta.env.VITE_PWA_URL;
```

### Variable Descriptions

| Variable             | Required | Description                                                              |
| -------------------- | -------- | ------------------------------------------------------------------------ |
| `VITE_SITE_URL`      | Yes      | Base URL of this public site                                             |
| `VITE_PWA_URL`       | Yes      | Redirect destination after successful login — the private management PWA |
| `VITE_API_URL`       | Yes      | Backend API base URL for auth and announcements endpoints                |
| `VITE_MESSENGER_URL` | Yes      | Facebook Messenger `m.me` link for the Contact page                      |

---

## 4. Vite Configuration

```js
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

---

## 5. Tailwind Configuration

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1AAEEE',
          'blue-dark': '#0D8DC0',
          red: '#E63329',
          'red-dark': '#C2271F',
        },
        sky: {
          light: '#B3E5FC',
          mid: '#81D4FA',
          section: '#87CEEB',
        },
        cloud: '#FFFFFF',
        ground: {
          green: '#5D9E3A',
          brown: '#8B5E3C',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          700: '#374151', // Body text
          900: '#111827', // Headings (dark)
        },
      },
      fontFamily: {
        display: ['"Fredoka One"', 'cursive'],
        body: ['"Nunito"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        card: '0 4px 20px rgba(0, 0, 0, 0.08)',
        nav: '0 2px 12px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};
```

> ⚠️ **Do not modify color tokens or font tokens without updating `docs/design.md` first.** These tokens are the single source of truth for the visual design.

---

## 6. CSS Entry Point

```css
/* src/styles/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Google Fonts — loaded here, not in index.html, to keep HTML clean */
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800&display=swap&subset=latin');
```

---

## 7. Available npm Scripts

| Script     | Command             | Description                                            |
| ---------- | ------------------- | ------------------------------------------------------ |
| Dev server | `npm run dev`       | Start Vite dev server at `localhost:5173`              |
| Build      | `npm run build`     | Type-check with `tsc` then production build to `dist/` |
| Preview    | `npm run preview`   | Preview production build locally                       |
| Type check | `npm run typecheck` | Run TypeScript compiler in check-only mode             |

---

## 8. Recommended VS Code Extensions

Add a `.vscode/extensions.json` to the repo to auto-suggest these:

```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "dsznajder.es7-react-js-snippets",
    "christian-kohler.path-intellisense"
  ]
}
```

### Recommended VS Code Settings

```json
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.tabSize": 2,
  "tailwindCSS.experimental.classRegex": [["clsx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]]
}
```

---

## 9. ESLint Configuration (Optional)

If you add ESLint to this repo, use the following configuration as a baseline:

```js
// .eslintrc.cjs
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.x' } },
  rules: {
    'no-console': 'warn',
    'react/prop-types': 'off', // TypeScript handles prop validation
    'react/display-name': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
};
```

---

## 10. Deployment

| Target         | Platform             | Command                            |
| -------------- | -------------------- | ---------------------------------- |
| Production     | Vercel (recommended) | Auto-deploy on push to `main`      |
| Staging        | Vercel Preview       | Auto-deploy on push to `develop`   |
| Manual preview | Local                | `npm run build && npm run preview` |

### Vercel Environment Variables

Set these in the Vercel project dashboard under **Settings → Environment Variables**:

- `VITE_SITE_URL` — set to production domain
- `VITE_PWA_URL` — set to production PWA URL
- `VITE_API_URL` — set to production API URL
- `VITE_MESSENGER_URL` — set to official Messenger link

> Never commit production values to the repo. All secrets and production URLs live in the hosting platform's environment variable settings.
