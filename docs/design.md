# DCCMS — Frontend Design Specification

**Version:** 2.0 *(refactored — duplicated content moved to single-source-of-truth docs)*  
**Stack:** React + TypeScript + Tailwind CSS  
**Audience:** Dev Team (Handoff Document)  
**Last Updated:** 2026-05-04

> **System Overview:** DCCMS (Day Care Center Management System) is an offline-capable web platform for Barangay San Antonio de Padua I's daycare center. It serves day care personnel, parents/guardians, and the CSWD office. The UI must feel approachable, child-friendly, and trustworthy — balancing playfulness for the public-facing pages with clarity and efficiency for the internal system dashboard.

> ⚠️ **Design Priority Update (v1.1):** The primary audience (parents/guardians) accesses this site on **low-to-mid-range Android smartphones** with **intermittent internet connectivity** and **low to moderate digital literacy**. All design decisions must prioritize mobile usability, performance, and simplicity over visual richness. See `WIREFRAME-SPEC.md` for the full constraint matrix.

---

## Cross-Reference Map

This document covers **visual design and component specs only**. For other domains, see:

| Domain | Source of Truth |
|---|---|
| Color tokens, font tokens, Tailwind config | `ENVIRONMENT.md §5` + `tailwind.config.js` |
| File/folder structure | `ARCHITECTURE.md §2` |
| Component boundaries & import rules | `ARCHITECTURE.md §3` |
| Page copy and content | `CONTENT.md` |
| Responsive breakpoints & mobile wireframes | `WIREFRAME-SPEC.md §2–5` |
| Performance budgets | `WIREFRAME-SPEC.md §7` |
| Coding standards & TypeScript rules | `STANDARDS.md` |

---

## Table of Contents

1. [Design Language](#1-design-language)
2. [Color & Typography Usage Map](#2-color--typography-usage-map)
3. [Spacing & Layout Grid](#3-spacing--layout-grid)
4. [Component Visual Specs](#4-component-visual-specs)
5. [Page-by-Page Layout Spec](#5-page-by-page-layout-spec)
6. [Motion & Interactions](#6-motion--interactions)

---

## 1. Design Language

### Aesthetic Direction
**Playful-Professional** — The public-facing pages (Home, About Us, Announcements, Contact) use a bright, cheerful, cloud-and-sky aesthetic with rounded elements and bold child-friendly visuals. The Login page shifts to a calm, focused, and clean feel while staying within the same color family.

### Core Principles
- **Mobile-first, always** — Design for 360px–430px viewport first. Scale up for tablet/desktop second. Never the reverse.
- **Warmth over sterility** — Use rounded corners, soft shadows, and warm whites. Avoid hard corporate edges.
- **Clarity first** — Navigation and CTAs must be immediately readable. No clever-but-confusing patterns. No multi-level menus.
- **Low-literacy friendly** — Icon + text label always. Plain language. Avoid ALL CAPS. No jargon in error messages.
- **Offline-aware** — UI must clearly communicate connectivity state where relevant (badge/indicator component).
- **Performance-conscious** — Images ≤ 150KB, minimal JS, fast first contentful paint on slow 3G.
- **Accessible** — Sufficient color contrast (WCAG AA minimum), readable font sizes (≥ 16px body), touch-friendly tap targets (min 44px).

---

## 2. Color & Typography Usage Map

> **Token definitions** live in `tailwind.config.js` and are documented in `ENVIRONMENT.md §5`. Do not duplicate hex values here — reference tokens by name only.

### Color Usage

| Element | Token |
|---|---|
| Navbar background | `white` |
| Navbar links | `brand-blue` |
| Primary CTA button | `brand-red` |
| Secondary / Login button | `brand-blue` (outlined or filled) |
| Hero background | `sky-light` → `sky-mid` gradient |
| Section backgrounds (alternating) | `sky-section` / `cloud` |
| Card backgrounds | `cloud` |
| Footer background | `white` |
| Body text | `neutral-700` |
| Section headings | `brand-blue` or `cloud` (on dark bg) |

### Typography Usage

| Role | Class | Size | Weight | Font |
|---|---|---|---|---|
| Hero Title | `text-5xl md:text-6xl` | 48–60px | 400 (Fredoka One) | `font-display` |
| Page Title | `text-4xl` | 36px | 400 (Fredoka One) | `font-display` |
| Section Heading | `text-3xl` | 30px | 400 (Fredoka One) | `font-display` |
| Card Heading | `text-xl` | 20px | 700 | `font-body` |
| Body | `text-base` | 16px | 400 | `font-body` |
| Small / Caption | `text-sm` | 14px | 400 | `font-body` |
| Nav Link | `text-sm md:text-base` | 14–16px | 600 | `font-body` |
| Button Label | `text-sm` | 14px | 700 | `font-body` |

---

## 3. Spacing & Layout Grid

- **Max content width:** `max-w-5xl` (1024px), centered with `mx-auto px-4 md:px-8`
- **Section vertical padding:** `py-16 md:py-24`
- **Card gap:** `gap-6` (24px)
- **Base unit:** Tailwind's default 4px grid (1 unit = 4px)

### Grid System
- Public pages use a **fluid 3-column card grid**: `grid grid-cols-1 md:grid-cols-3 gap-6`
- About page uses **2-column alternating layout** (text left, image right, and vice versa)

---

## 4. Component Visual Specs

> **File locations, import rules, and TypeScript interfaces** are defined in `ARCHITECTURE.md` and `STANDARDS.md`. This section covers **visual design details and prop intent only**.

### 4.1 Navbar

```
[ Logo (img + wordmark) ] ——————— [ Home | About Us | Announcements | Contact Us ] [ Staff Login Button ]
```

- `position: sticky`, `top-0`, `z-50`, white background, subtle `shadow-sm`
- Logo: image icon left + `PaduaKids` wordmark (blue+red) + `Center` subtitle in gray
- Nav links: `font-body font-semibold text-brand-blue hover:text-brand-blue-dark`
- **Staff Login button:** filled, `bg-brand-blue text-white rounded-full px-5 py-2`
- Mobile: hamburger icon → slide-down drawer with stacked links

**Props:** `activePage: string`

---

### 4.2 Hero Banner

- Full-width illustrated background (sky gradient + cloud SVG shapes top/bottom)
- Illustrated scene: rainbow, sun, children playing (positioned right side)
- Left-aligned text block:
  - Overline (small tag): e.g. `Barangay San Antonio de Padua I`
  - H1 in `font-display text-white`
  - Subtext in `text-white/90 text-base`
  - CTA Button (red) — "Staff Login"
- Cloud SVG wave divider at the bottom

**Props:** `title, subtitle, ctaLabel, ctaHref, overline?`

---

### 4.3 Section Heading

Centered heading used before card grids or content blocks.

```tsx
<SectionHeading title="Our Programs" />
// Renders: <h2 className="font-display text-3xl text-cloud text-center mb-10">
```

**Props:** `title, color?`

---

### 4.4 Program / Feature Card

Used in "What DCCMS Offers" section.

- Rounded card `rounded-2xl overflow-hidden shadow-md`
- Top: full-width image (fixed height ~180px, `object-cover`)
- Bottom overlay or below-image: colored label (brand-blue text, white/light bg)
- Optional "More" button (rounded, brand-blue)

**Props:** `image, title, description?, href?`

---

### 4.5 Info Block (About Page)

Used in alternating left/right layouts on the About page.

- `grid grid-cols-1 md:grid-cols-2 gap-10 items-center`
- Text side: section heading + body paragraph
- Visual side: illustration image or icon cluster

**Props:** `heading, body, imageSrc, imageAlt, reverse?`

---

### 4.6 Bullet Feature List

Used in "What We Do" and "Our Approach" sections.

```tsx
<BulletFeature icon="✅" text="Digitizing student records for faster and more accurate data access" />
```

- Icon (emoji or SVG) + body text, left-aligned
- `space-y-3` between items

**Props:** `icon, text`

---

### 4.7 CTA Button

Three variants:

| Variant | Classes |
|---|---|
| Primary (Red) | `bg-brand-red hover:bg-brand-red-dark text-white font-bold rounded-full px-6 py-2.5 transition` |
| Secondary (Blue) | `bg-brand-blue hover:bg-brand-blue-dark text-white font-bold rounded-full px-6 py-2.5 transition` |
| Outline | `border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white rounded-full px-6 py-2.5 transition` |

**Props:** `variant, label, onClick?, href?`

---

### 4.8 Announcement Card

- Card: `rounded-2xl shadow-sm border border-neutral-100`
- Date badge prominent, above title
- Category pill: color-coded (see `CONTENT.md` for category colors)
- Body: 2–4 sentences, truncated with "Read More" if > 4 lines

**Props:** `date, title, body, category, href?`

---

### 4.9 Footer

4-column layout: Logo + socials | System links | Explore links | Community links

```
[ Logo + social icons ]  [ System ]       [ Explore ]      [ Community ]
                          Student Records   Home             Day Care Personnel
                          Attendance        About Us         Barangay San Antonio...
                          Offline Access    Announcements    Parents & Guardians
                                            Contact Us       CSWD Office
```

- Background: `white`, top `border-t border-neutral-100`
- Link color: `neutral-700 hover:text-brand-blue`
- Column headers: `font-bold text-sm text-neutral-900 uppercase tracking-wide mb-4`
- Social icons: Facebook (primary) — 24px, `text-neutral-700 hover:text-brand-blue`

---

### 4.10 Connectivity Badge (Offline Indicator)

Small status pill shown in the navbar or login page when offline.

```tsx
// Online
<span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">● Online</span>

// Offline
<span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full">● Offline Mode</span>
```

Uses `navigator.onLine` + `window` event listeners.

---

### 4.11 Cloud Wave Divider (SVG)

Decorative SVG used to transition between sections (hero bottom, section edges).

```tsx
<CloudDivider position="bottom" fillColor="#87CEEB" />
```

Renders an `<svg>` with a wavy/cloud path. Two variants: `top` (flipped) and `bottom`.

**Props:** `position, fillColor`

---

## 5. Page-by-Page Layout Spec

> **All text content** (titles, body copy, button labels) is defined in `CONTENT.md`. Only structural layout is shown here.

### 5.1 Home Page (`/`)

```
[Navbar]
[HeroBanner]
  - Overline + H1 + Subtitle + CTA
[CloudDivider → sky-section]
[Section: "About the System" — sky-section bg]
  - InfoBlock (text left, image right)
[CloudDivider → white]
[Section: "What DCCMS Offers" — sky-section bg]
  - SectionHeading
  - 3-column FeatureCard grid
[CloudDivider → white]
[Footer]
```

---

### 5.2 About Us Page (`/about`)

```
[Navbar]
[HeroBanner — shorter variant, ~50vh]
[Section: "Who We Are" — white bg]
  - InfoBlock (text left, image right)
[Section: "Our Mission" — sky-section bg]
  - InfoBlock (image left, text right)
[Section: "Our Vision" — white bg]
  - InfoBlock (text left, image right)
[Section: "What We Do" — sky-section bg]
  - SectionHeading + BulletFeatureList
[Section: "Our Approach" — white bg]
  - SectionHeading + BulletFeatureList
[Section: "Our Commitment" — sky-section bg]
  - SectionHeading + centered paragraph
[Section: "Our Partners" — white bg]
  - SectionHeading + BulletFeatureList
[Section: "Contact Us" — sky-section bg]
  - SectionHeading + Email/Phone display
[Footer]
```

---

### 5.3 Announcements Page (`/announcements`)

```
[Navbar]
[Page Header — sky-section bg, centered]
[Section — white bg]
  - AnnouncementCard vertical stack
  - Loading: 3 Skeleton cards
  - Error: ErrorMessage component
  - Empty: EmptyState component
[Footer]
```

---

### 5.4 Contact Us Page (`/contact`)

```
[Navbar]
[Page Header — sky-section bg]
[Section — white bg, max-w-lg centered]
  - Contact details block (address, phone tap-to-call, email)
  - Messenger button (large, blue)
  - Google Maps iframe embed (max-h 250px on mobile)
[Footer]
```

---

### 5.5 Login Page (`/login`)

Distinct from public pages — calm and focused. **No shared Navbar/Footer.**

```
[Full-page centered layout — sky-light bg]
  [Card — white, rounded-3xl, shadow-xl, max-w-sm, p-8]
    - Logo (centered, large)
    - Title + Subtitle
    - Security disclaimer
    - Username input (with visible label)
    - Password input (with show/hide toggle)
    - ConnectivityBadge (if offline)
    - "Login" button (brand-red, full-width)
    - "← Back to Home" link
```

---

## 6. Motion & Interactions

> ⚠️ **Constraint:** Due to low digital literacy among users and performance requirements on slow connections, animations must be **minimal and purposeful**. Complex entrance effects, parallax, sliders, and carousels are prohibited.

### Allowed — Public Pages
- Hero text fade-in: `opacity-0 → opacity-100`, `duration-500 ease-out` — **no translate, no slide**
- Cards fade in on scroll via `IntersectionObserver` + class toggle — `duration-300` max

### Buttons
- Background color transition only: `transition-colors duration-200`
- **No scale transforms** — can disorient low-literacy users

### Navbar
- Scroll shadow appears after 10px: add `shadow-md` via scroll listener
- Mobile drawer: `max-h-0 → max-h-screen transition-all duration-300 overflow-hidden`

### Connectivity Badge
- Pulse on "Offline Mode": `animate-pulse` on dot only — not the whole badge

### Explicitly Prohibited
- Parallax scrolling
- Auto-playing carousels or sliders
- Multi-step modals
- Particle or confetti effects
- Page transition animations between routes
- Any animation that delays content visibility beyond 300ms

---

*Design spec v2.0 — refactored for DCCMS. Update this document when major UI changes are made.*
