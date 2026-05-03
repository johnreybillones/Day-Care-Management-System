# WIREFRAME-SPEC.md — Technical Wireframe Requirements

**Project:** DCCMS — Day Care Center Management System  
**Scope:** Public Static Website (Layer 1)  
**Approach:** Mobile-First  
**Last Updated:** 2026-05-04

---

## 1. Guiding Philosophy

> **Design for the most constrained user first.**

The primary audience for the public site — parents and guardians — likely accesses DCCMS on a **low-to-mid-range Android smartphone** with an **unstable internet connection**. Day care personnel have **low to moderate digital literacy**. Every wireframe decision must be filtered through this lens before being finalized.

**Three rules that override everything else:**
1. If it requires more than 2 taps to find, simplify it.
2. If it takes more than 3 seconds to load on a slow connection, optimize it.
3. If a first-time smartphone user could be confused by it, remove it.

---

## 2. Viewport Targets

| Priority | Device Class | Width | Notes |
|---|---|---|---|
| 🔴 Primary | Mobile (Android/iOS) | 360px – 430px | Most parents & guardians |
| 🟡 Secondary | Tablet | 768px – 1024px | Some staff/office use |
| 🟢 Tertiary | Desktop | 1024px+ | Admin access, CSWD office |

All layouts must be designed **mobile-first** using Tailwind's base classes (no prefix = mobile), then scaled up with `md:` and `lg:` prefixes.

---

## 3. Element-by-Element Wireframe Requirements

### 3.1 Typography

| Requirement | Specification | Justification |
|---|---|---|
| Font style | Large, legible sans-serif | Low digital literacy; small mobile screens |
| Minimum body font size | `16px` (`text-base`) | Prevents squinting on low-res screens |
| Minimum label/caption size | `14px` (`text-sm`) — use sparingly | Below this is inaccessible on mobile |
| Line height | `1.6` minimum | Improves readability on small screens |
| Hero title (mobile) | `text-3xl` (30px) minimum | Must be immediately readable without zoom |
| Button text | `text-sm font-bold` | Clear, never tiny |
| ALL CAPS text | Avoid | Harder to read for low-literacy users |

---

### 3.2 Colors

| Requirement | Specification | Justification |
|---|---|---|
| Primary palette | Blue (`#1AAEEE`) and White | Derived from Barangay San Antonio de Padua I official seal |
| Accent | Red (`#E63329`) for CTAs only | High contrast; draws attention to action buttons |
| Background sections | Alternating white and sky blue (`#87CEEB`) | Visual separation without overwhelming complexity |
| Text on blue bg | White only | WCAG AA contrast requirement |
| Text on white bg | Dark gray `#374151` (not pure black) | Softer on mobile screens |
| Minimum contrast ratio | 4.5:1 (WCAG AA) | Accessibility baseline |
| No gradients on text | Hard rule | Inaccessible and hard to read on low-res screens |

---

### 3.3 Navigation

| Requirement | Specification | Justification |
|---|---|---|
| Mobile nav pattern | Hamburger icon → full-width slide-down drawer | Standard mobile UX; familiar to most users |
| Hamburger icon size | Minimum 44×44px tap target | Touch accessibility standard |
| Nav items (mobile) | Stacked, full-width, large tap targets (`py-4`) | Easy tapping; avoids misclicks |
| Active page indicator | Bold text or left border accent in brand blue | Orientation for low-literacy users |
| Navbar position | `sticky top-0 z-50` | Staff can always access login from any scroll position |
| Staff Login button | Always visible in navbar (desktop) | Collapsed inside drawer on mobile but listed first |
| Max nav items | 5 items + Login button | Keep it simple; no dropdowns, no mega menus |
| No multi-level menus | Hard rule | Complexity barrier for low-literacy users |

---

### 3.4 Imagery

| Requirement | Specification | Justification |
|---|---|---|
| Format | WebP preferred (with JPG fallback) | WebP provides 25-35% smaller file sizes than JPG for equivalent quality, crucial for slow connections. |
| Max file size per image | ~150KB | Fast loading on slow connections |
| Hero image | Actual photo of the Day Care Center | Community trust; authenticity |
| Faculty photos | Actual photos of personnel | Trust-building; do not use stock photos |
| Fallback | CSS `background-color` on image containers | Graceful failure when image fails to load |
| Alt text | Required on all images | Accessibility + fallback display |
| No autoplay video | Hard rule | Data and bandwidth concern |
| Image dimensions (card) | 350×200px displayed; supply at 2× (700×400px) | Crisp on retina screens without huge files |

---

### 3.5 Staff Login Access Point

| Location | Element | Behavior |
|---|---|---|
| Navbar | `<Button variant="primary" label="Staff Login" />` | Always visible on desktop; first item in mobile drawer |
| Hero section (Home) | Large CTA button | Primary entry point for staff visiting Home first |
| Footer | Text link + small button | Fallback; present on every page |

**Rule:** The Staff Login must be reachable within **1 tap** from any page, at any scroll depth.

---

### 3.6 Forms (Login Page)

| Requirement | Specification |
|---|---|
| Input field height | Minimum `48px` (`py-3`) — touch-friendly |
| Input font size | `16px` — prevents iOS auto-zoom on focus |
| Label position | Above the input (not placeholder-only) |
| Placeholder text | Supplement only, never the sole label |
| Submit button | Full-width (`w-full`) on mobile |
| Password field | Include show/hide toggle (eye icon) |
| Error message | Shown inline below the form, red text, clear language |
| Loading state | Disable button + show spinner while authenticating |
| Offline state | Disable submit button + show connectivity warning |

---

### 3.7 Announcements Feed

| Requirement | Specification |
|---|---|
| Layout | Single-column vertical card stack (mobile) |
| Card padding | `p-4` minimum — comfortable reading space |
| Date display | Prominent, above the title |
| Category badge | Color-coded pill label (see CONTENT.md for colors) |
| Card border | Subtle `border border-neutral-100` — no heavy shadows |
| "Read More" | Only if content exceeds 4 lines — collapse by default |
| Empty state | Friendly message — no blank white space |
| Loading state | Skeleton cards (3 placeholder cards) while fetching |

---

### 3.8 Contact Page

| Requirement | Specification |
|---|---|
| Address display | Full barangay address, prominent |
| Phone number | Tap-to-call link: `<a href="tel:+63XXXXXXXXXX">` |
| Messenger button | Large, recognizable Messenger blue + icon |
| Map embed | Google Maps iframe, max height 250px on mobile |
| Office hours | Clear table or list format |

---

## 4. Anti-Patterns — Things to Avoid

These are explicitly prohibited based on the low-literacy, low-connectivity constraint:

| ❌ Avoid | ✅ Use Instead |
|---|---|
| Multi-level dropdown menus | Single-level hamburger drawer |
| Complex entrance animations (parallax, particle effects) | Subtle fade-in only (`opacity` transition) |
| Auto-playing carousels / sliders | Static image or manually swipeable at most |
| Modals with multiple steps | Single-page flows |
| Infinite scroll | Paginated or show-all (announcements are infrequent) |
| Forms with 5+ fields | Minimal form: username + password only |
| Icon-only navigation (no labels) | Icon + text label always |
| Hover-only interactions | All interactions must work on tap/touch |
| External fonts loading slowly | Subset fonts; use `font-display: swap` |
| Large unoptimized images | Compressed JPGs ≤ 150KB |
| Small tap targets (< 44px) | All buttons and links minimum 44×44px |
| Error messages in jargon | Plain Filipino/English error messages |

---

## 5. Mobile Layout Wireframe Sketches (Text-Based)

### Home Page — Mobile (360px)

```
┌─────────────────────────┐
│ [Seal] DCCMS     [☰]   │  ← Sticky navbar, 60px height
├─────────────────────────┤
│                         │
│  [Hero Image]           │
│  ─────────────          │  ← Sky blue background
│  Barangay San           │
│  Antonio de Padua I     │  ← Overline, small
│                         │
│  Day Care Center        │
│  Management System      │  ← H1, Fredoka One, 30px
│  (DCCMS)                │
│                         │
│  A simple and reliable  │  ← Subtitle, 16px
│  system for...          │
│                         │
│  ┌─────────────────┐   │
│  │   Staff Login   │   │  ← Red button, full width
│  └─────────────────┘   │
│                         │
├─────────────────────────┤
│  About the System       │  ← White section
│  ─────────────          │
│  [Image]                │
│  Body copy...           │
├─────────────────────────┤
│  What DCCMS Offers      │  ← Sky blue section
│  ─────────────          │
│  ┌─────────────────┐   │
│  │ [img] Records   │   │  ← Card 1
│  └─────────────────┘   │
│  ┌─────────────────┐   │
│  │ [img] Attendance│   │  ← Card 2
│  └─────────────────┘   │
│  ┌─────────────────┐   │
│  │ [img] Reports   │   │  ← Card 3
│  └─────────────────┘   │
├─────────────────────────┤
│  [DCCMS Logo]           │  ← Footer
│  System | Explore       │
│  Community              │
│  [FB icon]              │
│  © 2026 DCCMS           │
└─────────────────────────┘
```

---

### Login Page — Mobile (360px)

```
┌─────────────────────────┐
│                         │
│   [Sky blue bg]         │
│                         │
│  ┌───────────────────┐  │
│  │  [Seal Logo]      │  │
│  │                   │  │
│  │  Staff Login      │  │  ← Card: white, rounded-3xl
│  │  Welcome back...  │  │
│  │                   │  │
│  │  ⚠️ Authorized    │  │  ← Security disclaimer
│  │  personnel only   │  │
│  │                   │  │
│  │  Username         │  │  ← Label above input
│  │  [____________]   │  │
│  │                   │  │
│  │  Password         │  │
│  │  [__________][👁]  │  │  ← Show/hide toggle
│  │                   │  │
│  │  [  Login  ]      │  │  ← Full-width red button
│  │                   │  │
│  │  ← Back to Home   │  │  ← Text link
│  └───────────────────┘  │
│                         │
└─────────────────────────┘
```

---

### Announcements Page — Mobile (360px)

```
┌─────────────────────────┐
│ [Seal] DCCMS     [☰]   │
├─────────────────────────┤
│  Announcements          │  ← Page header, sky blue bg
│  Stay updated on...     │
├─────────────────────────┤
│                         │  ← White section
│  ┌─────────────────┐   │
│  │ [Health Alert]  │   │  ← Category badge
│  │ May 10, 2026    │   │  ← Date
│  │ Child Weight    │   │  ← Title
│  │ Monitoring...   │   │  ← Body (truncated)
│  │ Read More →     │   │  ← Optional link
│  └─────────────────┘   │
│                         │
│  ┌─────────────────┐   │
│  │ [Event]         │   │
│  │ May 3, 2026     │   │
│  │ Parent-Teacher  │   │
│  │ Meeting...      │   │
│  └─────────────────┘   │
│                         │
├─────────────────────────┤
│  [Footer]               │
└─────────────────────────┘
```

---

## 6. Accessibility Checklist

Before handing off wireframes for development, verify:

- [ ] All interactive elements have minimum 44×44px touch target
- [ ] Color contrast ratio ≥ 4.5:1 on all text/background combinations
- [ ] All images have meaningful `alt` text defined
- [ ] Form inputs have visible labels (not placeholder-only)
- [ ] Error messages are descriptive and in plain language
- [ ] No interaction depends solely on color (badges also have text labels)
- [ ] Phone numbers are tap-to-call links
- [ ] All font sizes ≥ 14px (prefer 16px for body)
- [ ] Focus states are visible (keyboard navigation)
- [ ] No content is hidden behind hover-only states

---

## 7. Performance Budget

| Asset Type | Target | Hard Limit |
|---|---|---|
| Total page weight (Home) | < 500KB | < 1MB |
| Per image file size | < 100KB | < 150KB |
| Time to interactive (3G) | < 5 seconds | < 8 seconds |
| JavaScript bundle size | < 150KB gzipped | < 250KB |
| Web fonts | 2 families max | Subset to Latin characters only |
| Third-party scripts | Minimize | No analytics scripts without consent |

---

## 8. Testing Checklist

Before wireframe sign-off and before development completion:

- [ ] Tested on Chrome Mobile (Android)
- [ ] Tested on Safari Mobile (iOS)  
- [ ] Tested at 360px viewport width
- [ ] Tested at 768px viewport width
- [ ] Tested with slow 3G throttling (Chrome DevTools)
- [ ] Tested offline (airplane mode) — verify graceful degradation
- [ ] Login form tested with incorrect credentials
- [ ] Login form tested while offline
- [ ] Announcements tested with empty state
- [ ] All links verified functional
- [ ] "Back to Home" on login page verified
- [ ] Messenger button verified to open correctly
- [ ] Tap-to-call link verified on mobile device
