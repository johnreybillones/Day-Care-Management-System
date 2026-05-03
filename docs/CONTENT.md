# CONTENT.md — Page-by-Page Content Requirements

**Project:** DCCMS — Day Care Center Management System  
**Scope:** Public Static Website (Layer 1)  
**Last Updated:** 2026-05-03

> This document defines all copy, content blocks, and content requirements per page. Developers and designers should use this as the single source of truth for text content. Placeholder values are marked with `[PLACEHOLDER]`.

---

## 1. Global / Shared Content

### Site Name
```
Day Care Center Management System (DCCMS)
```

### Tagline
```
A simple and reliable system for managing student records, attendance, and reports.
```

### Barangay Attribution
```
Barangay San Antonio de Padua I, Dasmariñas City, Cavite
```

### Logo / Branding
- Official seal of Barangay San Antonio de Padua I (circular seal image)
- Wordmark: `DCCMS` in brand blue + `Day Care Center Management System` in subtitle size
- Always appear together in the Navbar

### Navigation Links (all pages)
```
Home | About Us | Announcements | Contact Us | [Staff Login Button]
```

---

## 2. Home Page (`/`)

### Hero Section

**Title:**
```
Day Care Center Management System (DCCMS)
```

**Overline (above title):**
```
Barangay San Antonio de Padua I
```

**Subtitle:**
```
A simple and reliable system for managing student records, attendance, and reports.
```

**Primary CTA Button:**
```
Staff Login
```
→ Links to `/login`

**Hero Image:**  
High-quality photo of the actual Day Care Center building or classroom interior. Optimized JPG, max 150KB. Alt text: `"Day Care Center of Barangay San Antonio de Padua I"`

---

### Quick Summary Section

**Section Heading:**
```
About the System
```

**Body Copy:**
```
The Day Care Center Management System (DCCMS) replaces manual record-keeping with a 
digital solution. It improves efficiency, reduces paperwork, and ensures accurate 
tracking of children's development — giving teachers more time to focus on what 
matters most: the children.
```

**Supporting Image:**  
Photo of children engaged in a learning activity or a teacher with students. Alt text: `"Children learning at the Day Care Center"`

---

### Feature Highlights Section

**Section Heading:**
```
What DCCMS Offers
```

**Feature Cards (3 cards):**

| # | Icon | Title | Description |
|---|---|---|---|
| 1 | 📋 | Student Records | Digitized profiles for every enrolled child — health records, contact info, and developmental milestones in one place. |
| 2 | ✅ | Attendance Tracking | Log and track daily attendance instantly, ensuring accurate records for every session. |
| 3 | 📊 | Reports | Generate and export reports for CSWD and barangay offices with just a few taps. |

---

### Footer CTA (Staff Access Reminder)

**Text:**
```
Are you a daycare staff member?
```

**Button:**
```
Staff Login
```
→ Links to `/login`

---

## 3. About Us Page (`/about`)

### Page Header

**Title:**
```
About Us
```

**Subtitle:**
```
Learn more about our mission, our team, and our commitment to the children of 
Barangay San Antonio de Padua I.
```

---

### Who We Are

**Section Heading:**
```
Who We Are
```

**Body Copy:**
```
The DCCMS team is a group of student developers dedicated to creating practical, 
community-centered digital solutions. This system was developed in collaboration 
with the Day Care Center of Barangay San Antonio de Padua I, Dasmariñas City, 
Cavite, as part of a service-learning initiative.

Our goal is to bridge the gap between technology and community needs — designing 
systems that are accessible, efficient, and easy to use, even in environments with 
limited resources.
```

---

### Mission & Vision

**Mission Heading:**
```
Our Mission
```

**Mission Body:**
```
We aim to improve the daily operations of daycare centers by providing a simple, 
reliable, and offline-capable system that enhances record management, reduces 
workload, and supports better communication between teachers and parents.
```

**Vision Heading:**
```
Our Vision
```

**Vision Body:**
```
We envision a future where local daycare centers can transition from manual 
processes to organized digital systems — enabling them to deliver better services, 
ensure data security, and focus more on child development rather than 
administrative tasks.
```

---

### Faculty Profiles

**Section Heading:**
```
Meet Our Personnel
```

**Section Intro:**
```
Our dedicated daycare staff work every day to provide a safe, nurturing environment 
for the children of our barangay.
```

**Personnel Card — Example:**

| Field | Value |
|---|---|
| Photo | `[PLACEHOLDER — actual photo of Ms. Cherry]` |
| Name | `[PLACEHOLDER — Full Name]` |
| Role | Day Care Worker |
| Short Bio | `[PLACEHOLDER — 1–2 sentence bio describing experience and dedication to the children]` |

> ⚠️ **Content Note:** Actual names, photos, and bios must be provided by the Day Care Center personnel. Do not use stock photos for faculty profiles — community trust depends on authenticity.

---

### Community Impact

**Section Heading:**
```
Our Impact on the Community
```

**Body Copy:**
```
By digitizing daily operations, DCCMS reduces the time personnel spend on 
paperwork — freeing them to focus on lesson planning, child interaction, and 
developmental support.

Parents and guardians benefit from consistent, transparent communication through 
the Announcement Board. Barangay and CSWD offices receive accurate, timely reports 
without manual data re-entry.
```

**Impact Stats (optional — use if data is available):**

| Stat | Label |
|---|---|
| `[X]` | Children enrolled |
| `[X]` | Hours saved per week on paperwork |
| `[X]` | Reports generated per quarter |

---

### What We Do

**Section Heading:**
```
What We Do
```

**Bullet Points:**
```
✅ Digitize student records for faster and more accurate data access
✅ Simplify attendance tracking and daily monitoring
✅ Automate report generation for submissions to CSWD and other offices
✅ Provide announcements and updates for parents and guardians
✅ Ensure accessibility through offline functionality
```

---

### Our Approach

**Section Heading:**
```
Our Approach
```

**Bullet Points:**
```
• Simplicity — easy to learn and use
• Accessibility — works even without internet
• Efficiency — reduces manual workload
• Security — protects sensitive information
```

---

### Partners

**Section Heading:**
```
Our Partners
```

**List:**
```
• Day Care Center Personnel of Barangay San Antonio de Padua I
• Barangay Officials of San Antonio de Padua I
• Parents and Guardians
• CSWD and Regional Offices
```

---

## 4. Announcements Page (`/announcements`)

### Page Header

**Title:**
```
Announcements
```

**Subtitle:**
```
Stay updated on school events, health reminders, and important notices from 
the Day Care Center.
```

---

### Announcement Feed

Each announcement is a card with the following fields:

| Field | Type | Notes |
|---|---|---|
| Category Badge | Text | e.g., `Event`, `Health Alert`, `Reminder`, `Holiday` |
| Date | Text | e.g., `May 5, 2026` |
| Title | Text | Short, clear headline |
| Body | Text | 2–4 sentences max per card |
| Read More link | Optional | For longer announcements |

**Category Badge Colors:**

| Category | Background | Text |
|---|---|---|
| Event | `blue-100` | `blue-700` |
| Health Alert | `red-100` | `red-700` |
| Reminder | `yellow-100` | `yellow-800` |
| Holiday | `green-100` | `green-700` |

---

### Sample Announcement Cards (for dev/design reference only — replace with real content)

**Card 1:**
```
[Health Alert] · May 10, 2026
Child Weight Monitoring Schedule
All enrolled children are scheduled for weight and height monitoring on May 15, 
2026. Please ensure your child is present. Results will be recorded in their 
health profile.
```

**Card 2:**
```
[Event] · May 3, 2026
Parent-Teacher Meeting
A parent-teacher meeting is scheduled for May 20, 2026 at 9:00 AM. Attendance 
is encouraged for all parents and guardians.
```

**Card 3:**
```
[Holiday] · April 28, 2026
No Classes — Labor Day
The Day Care Center will be closed on May 1, 2026 in observance of Labor Day. 
Classes resume on May 2, 2026.
```

---

### Empty State (when no announcements exist)

```
No announcements yet.
Check back soon for updates from the Day Care Center.
```

---

## 5. Contact & Location Page (`/contact`)

### Page Header

**Title:**
```
Contact Us
```

**Subtitle:**
```
We're here to help. Reach out to the Day Care Center or the development team 
for inquiries and concerns.
```

---

### Day Care Center Contact Block

**Label:**
```
Day Care Center of Barangay San Antonio de Padua I
```

| Field | Value |
|---|---|
| Address | Barangay San Antonio de Padua I, Dasmariñas City, Cavite, Philippines |
| Contact Number | `[PLACEHOLDER — actual barangay/center contact number]` |
| Email | `[PLACEHOLDER — if available]` |

**Office Hours:**
```
Monday to Friday
[PLACEHOLDER — e.g., 7:00 AM – 12:00 PM]

Saturday & Sunday: Closed
```

---

### Messenger Integration

**Label:**
```
Message Us on Facebook Messenger
```

**Body:**
```
For quick inquiries, you may contact us directly through our Facebook Messenger. 
Our personnel are available during office hours.
```

**Button:**
```
Open Messenger
```
→ Links to `https://m.me/[PLACEHOLDER — Facebook page username]`

> ⚠️ **Content Note:** The Messenger integration is a priority feature. Personnel are already familiar with the tool. Confirm the official Facebook page URL with the barangay before going live.

---

### Map Embed

Embed a Google Maps iframe pinned to the exact barangay location.

```
[PLACEHOLDER — Google Maps embed iframe for Barangay San Antonio de Padua I, 
Dasmariñas City, Cavite]
```

---

### Dev Team Contact (optional section)

**Label:**
```
Technical Support
```

| Field | Value |
|---|---|
| Email | `[PLACEHOLDER — dev team email]` |
| Note | For system-related concerns, bugs, or feature requests. |

---

## 6. Login Page (`/login`)

### Page Content

**Title:**
```
Staff Login
```

**Subtitle:**
```
Welcome back. Please sign in to access the management system.
```

**Security Disclaimer:**
```
⚠️ This portal is for authorized Day Care Center personnel only. 
Unauthorized access is strictly prohibited to protect sensitive student data.
```

**Form Fields:**

| Field | Type | Placeholder |
|---|---|---|
| Username | Text input | `Enter your username` |
| Password | Password input | `Enter your password` |

**Submit Button:**
```
Login
```

**Back Link:**
```
← Back to Home
```
→ Links to `/`

**Error Message (failed login):**
```
Unauthorized Access. The username or password you entered is incorrect. 
Please try again or contact your administrator.
```

**Offline Notice (shown when offline):**
```
⚠️ You are currently offline. Login requires an internet connection.
```

---

## 7. Footer Content (All Pages)

### Column 1 — Logo + Socials
- Official barangay seal image
- Social icons: Facebook (primary), optional: others if center has accounts

### Column 2 — System
```
Student Records
Attendance
Offline Access
```

### Column 3 — Explore
```
Home
About Us
Announcements
Contact Us
```

### Column 4 — Community
```
Day Care Personnel
Barangay San Antonio de Padua I
Parents & Guardians
CSWD Office
```

### Copyright Line
```
© 2026 DCCMS — Day Care Center of Barangay San Antonio de Padua I. 
Developed by [PLACEHOLDER — dev team name], DLSU-D.
```

---

## 8. Content Placeholders Checklist

Before launch, confirm and replace all `[PLACEHOLDER]` values:

- [ ] Actual photo of the Day Care Center building
- [ ] Faculty full names, photos, and bios (at minimum: Ms. Cherry and any co-workers)
- [ ] Center contact number
- [ ] Center email address (if available)
- [ ] Office hours
- [ ] Facebook Messenger link / page URL
- [ ] Google Maps embed URL
- [ ] Dev team contact email
- [ ] Dev team name for copyright line
- [ ] Impact stats (enrolled children count, etc.) — optional
- [ ] Real announcements to replace sample cards
