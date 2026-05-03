# PROJECT.md — DCCMS Project Context & Background

**Project:** Day Care Center Management System (DCCMS)  
**Client:** Day Care Center of Barangay San Antonio de Padua I  
**Location:** Dasmariñas City, Cavite, Philippines  
**Type:** Service-Learning / Community Development Project  
**Developed by:** Student developers from De La Salle University – Dasmariñas (DLSU-D)  
**Last Updated:** 2026-05-03

---

## 1. Project Background

The Day Care Center of Barangay San Antonio de Padua I currently manages all student records, attendance, and developmental tracking through manual, paper-based processes. This results in heavy administrative burden on daycare personnel, delays in report generation for the City Social Welfare and Development (CSWD) office, and limited communication with parents and guardians.

DCCMS was initiated as a service-learning project to bridge this gap — replacing manual record-keeping with a simple, reliable, offline-capable digital system tailored to the specific constraints of a barangay daycare center in a semi-urban Philippine community.

---

## 2. Problem Statement

- Personnel spend excessive time on paperwork, reducing time available for child interaction and lesson planning.
- Student records are prone to loss, damage, or inaccuracy.
- Parents and guardians receive inconsistent updates on school activities and their child's development.
- Report generation for CSWD and barangay offices is slow and error-prone.
- The center lacks a dedicated computer; internet connectivity is limited or unreliable.

---

## 3. Project Goals

1. Digitize student records for faster, accurate data access.
2. Simplify daily attendance tracking and monitoring.
3. Automate report generation for CSWD and barangay submissions.
4. Provide a parent-facing announcement board for consistent communication.
5. Ensure offline-first functionality for low-connectivity environments.

---

## 4. Stakeholders

| Stakeholder | Role | Needs |
|---|---|---|
| Day Care Personnel (e.g., Ms. Cherry) | Primary system users | Simple, low-friction UI; fast attendance marking; easy report export |
| Parents & Guardians | Public site viewers | Announcements, schedules, health reminders, contact info |
| Barangay San Antonio de Padua I Officials | Community partners | Transparency, data accuracy, professional system |
| CSWD Office | Report recipients | Accurate, timely, formatted reports |
| DLSU-D Dev Team | Developers | Clear requirements, offline support, low-spec device compatibility |

---

## 5. System Architecture Overview

DCCMS consists of two distinct layers:

### Layer 1 — Public Static Website
A mobile-first, public-facing website accessible to anyone (parents, guardians, community members). Contains:
- Home page with system overview
- About Us with mission, vision, and faculty profiles
- Announcement board with real-time updates
- Contact & location information
- Login entry point for staff

### Layer 2 — Private Management PWA (Progressive Web App)
Accessible only to authorized personnel after login. Contains:
- Student record management
- Daily attendance tracking
- Report generation and export
- Offline access via service workers

> ⚠️ **Scope Note:** This documentation suite covers **Layer 1 (Public Static Website)** only. The Private Management PWA has a separate technical specification.

---

## 6. Key Constraints

| Constraint | Impact on Design & Development |
|---|---|
| No dedicated computer at the center | System must be fully functional on smartphones |
| Poor or intermittent internet connection | Assets must be optimized (small JPGs, minimal JS); PWA layer must support offline mode |
| Low digital literacy among personnel and parents | UI must avoid complexity: no multi-level menus, no animations that confuse, large tap targets |
| Sensitive student data | Login-protected admin area; security disclaimer on login page; no PII exposed on public pages |
| Community trust requirement | Use of official barangay seal, professional typography, familiar contact methods (Messenger) |

---

## 7. Brand Identity Anchor

The visual identity is anchored to the **official seal of Barangay San Antonio de Padua I**, which uses a blue and white color palette. All design decisions should reinforce institutional trust and community recognition.

- Primary palette: Blue (`#1AAEEE`) and White
- Secondary accent: Red (`#E63329`) for CTAs
- Tone: Professional, warm, approachable — not corporate or clinical

---

## 8. Technology Stack

| Layer | Stack |
|---|---|
| Public Static Site | React + TypeScript + Tailwind CSS |
| Hosting | TBD (recommend Vercel or Netlify for free tier) |
| PWA (Private) | React + Tailwind CSS + Service Workers + Supabase (TBD) |
| Fonts | Google Fonts — Fredoka One (display), Nunito (body) |
| Images | Optimized JPG, max ~150KB per image |

---

## 9. Related Documentation

| File | Description |
|---|---|
| `design.md` | UI/UX design spec — colors, typography, components, layouts, responsive rules |
| `CONTENT.md` | Page-by-page copy and content requirements |
| `FLOW.md` | User journey, routing logic, authentication flow |
| `WIREFRAME-SPEC.md` | Technical wireframe requirements and ease-of-implementation guide |

---

## 10. Collaborators & Acknowledgments

This project was made possible through collaboration with:
- Day Care Center Personnel of Barangay San Antonio de Padua I
- Barangay Officials of San Antonio de Padua I, Dasmariñas City, Cavite
- Parents and Guardians of enrolled children
- CSWD Office, Dasmariñas City
