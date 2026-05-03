# FLOW.md — User Journey & Routing Logic

**Project:** DCCMS — Day Care Center Management System  
**Scope:** Public Static Website (Layer 1) + Authentication Gateway  
**Last Updated:** 2026-05-04

---

## 1. User Types

DCCMS has two distinct user types who interact with the public site differently:

| User Type | Who They Are | Primary Goal |
|---|---|---|
| **Parent / Guardian** | Family members of enrolled children | Check announcements, find contact info, learn about the center |
| **Day Care Personnel** | Authorized staff (e.g., Ms. Cherry) | Log in and access the private management PWA |

> **No registration flow exists on the public site.** Accounts are created and managed by system administrators directly in the backend.

---

## 2. Full User Journey Map

```
┌─────────────────────────────────────────────────────────────────┐
│                        PUBLIC ENTRY POINT                       │
│                   User arrives at Home Page (/)                 │
└──────────────────────────┬──────────────────────────────────────┘
                           │
              ┌────────────┴────────────┐
              │                         │
        [Parent / Guardian]       [Day Care Staff]
              │                         │
              ▼                         ▼
   ┌──────────────────┐      ┌──────────────────────┐
   │  Browse public   │      │  Clicks "Staff Login" │
   │  pages freely    │      │  button (Navbar/Footer)│
   └────────┬─────────┘      └──────────┬───────────┘
            │                           │
    ┌───────┴────────┐                  ▼
    │                │       ┌─────────────────────┐
    ▼                ▼       │    Login Page (/login)│
 About Us      Announcements │  Username + Password  │
    │                │       └──────────┬────────────┘
    │                │                  │
    ▼                ▼         ┌────────┴────────┐
  Contact         Read         │                 │
    Us          updates    [Valid]          [Invalid]
    │                │       │                   │
    └────────────────┘       ▼                   ▼
                      Redirect to PWA    Show Error Message
                      (Private App)     "Unauthorized Access"
                      [External URL]    Stay on /login
```

---

## 3. Page Routing Table

| Route | Page | Access | Redirects To |
|---|---|---|---|
| `/` | Home | Public | — |
| `/about` | About Us | Public | — |
| `/announcements` | Announcements | Public | — |
| `/contact` | Contact & Location | Public | — |
| `/login` | Staff Login | Public (form) | On success → PWA URL |
| `/dashboard` | *(not part of static site)* | Private PWA | Handled by separate app |

> ⚠️ All routes above are **public** — no route protection is needed on the static site itself. The `/login` page simply acts as the authentication gateway to the separate Private PWA.

---

## 4. Authentication Flow (Login Page Detail)

```
User lands on /login
        │
        ▼
  Form displayed:
  [Username] [Password]
  [Staff Login Button]
        │
  User submits form
        │
        ▼
  ┌─── Is device online? ───┐
  │                         │
 [YES]                     [NO]
  │                         │
  ▼                         ▼
Call auth API         Show offline notice:
(backend/Supabase)    "Login requires an
        │              internet connection."
        │              Block submission.
  ┌─────┴──────┐
  │            │
[200 OK]   [401/Error]
  │            │
  ▼            ▼
Store token   Show error:
in memory /   "Unauthorized Access.
session       Incorrect credentials.
  │           Contact your admin."
  │
  ▼
Redirect to Private PWA
(e.g., https://app.dccms.ph or subdomain)
```

### Auth Implementation Notes

- Use **session-based or JWT token** stored in `sessionStorage` (not `localStorage`) for security.
- The static site does **not** manage sessions beyond the initial login handoff.
- On successful login, redirect to the PWA URL. The PWA handles all further session management.
- The "Back to Home" link on the login page links to `/` — always visible.
- No "Forgot Password" self-service flow: direct users to contact their administrator.

---

## 5. Navigation Flow Between Public Pages

All public pages share the sticky Navbar. Users can navigate freely in any order.

```
Home (/) ◄──────────────────────────────────────────────┐
  │                                                       │
  ├──► About Us (/about) ──────────────────────────────► │
  │                                                       │
  ├──► Announcements (/announcements) ─────────────────► │
  │                                                       │
  ├──► Contact Us (/contact) ──────────────────────────► │
  │                                                       │
  └──► Login (/login) ──► [PWA if success]               │
                     └──► [Back to Home link] ───────────┘
```

---

## 6. Staff Login Entry Points

The "Staff Login" button must be accessible from **every page** to ensure staff can always find the login regardless of where they land. It appears in:

| Location | Component | Notes |
|---|---|---|
| Navbar (top right) | `<Navbar />` | Always visible, sticky header |
| Hero section (Home) | `<HeroBanner />` | Primary CTA on the landing page |
| Footer | `<Footer />` | Fallback entry point at bottom of every page |

---

## 7. Offline State Handling (Public Site)

The public static site should handle offline gracefully even without full PWA functionality:

| State | Behavior |
|---|---|
| Page already loaded, goes offline | Content remains visible (static HTML/CSS already in browser cache) |
| User tries to submit login while offline | Show `<ConnectivityBadge />` warning; disable submit button |
| Announcements fail to load (API down or offline) | Show empty state: "Could not load announcements. Check your connection." |
| Images fail to load | Always include `alt` text; use CSS `background-color` fallback on image containers |

---

## 8. Error States Reference

| Scenario | Page | Message |
|---|---|---|
| Login — wrong credentials | `/login` | "Unauthorized Access. The username or password you entered is incorrect. Please try again or contact your administrator." |
| Login — offline | `/login` | "You are currently offline. Login requires an internet connection." |
| Login — server error | `/login` | "Something went wrong. Please try again later." |
| Announcements — failed fetch | `/announcements` | "Could not load announcements. Please check your internet connection." |
| Announcements — empty | `/announcements` | "No announcements yet. Check back soon for updates." |
| 404 — page not found | Any invalid route | "Page not found. [Go back to Home]" |

---

## 9. React Router Setup (Recommended)

Uses React Router v6 **nested layout routes** with `<Outlet />` — the canonical pattern defined in `ARCHITECTURE.md`.

```tsx
// App.tsx — route definitions only
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicLayout from './components/layout/PublicLayout';
import Home from './pages/Home';
import About from './pages/About';
import Announcements from './pages/Announcements';
import Contact from './pages/Contact';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public pages — wrapped in shared Navbar + Footer */}
        <Route element={<PublicLayout />}>
          <Route path="/"              element={<Home />} />
          <Route path="/about"         element={<About />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/contact"       element={<Contact />} />
        </Route>

        {/* Login — full screen, no shared layout */}
        <Route path="/login" element={<Login />} />

        {/* Catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
```

> **Note:** Login uses a full-screen centered card layout (no Navbar/Footer). All other public pages inherit Navbar + Footer through `<PublicLayout />`.

```tsx
// PublicLayout.tsx — uses <Outlet /> for nested routing
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function PublicLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
```
