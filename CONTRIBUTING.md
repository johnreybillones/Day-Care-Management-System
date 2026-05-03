# CONTRIBUTING.md — Git Workflow & Collaboration Guidelines

**Project:** DCCMS Public Static Website  
**Stack:** React + TypeScript + Tailwind CSS  
**Last Updated:** 2026-05-04

---

## 1. Branch Strategy

We use a simplified **GitHub Flow** — appropriate for a small team on a short-cycle project.

```
main
 └── develop
      ├── feature/navbar-component
      ├── feature/announcements-page
      ├── fix/login-offline-state
      └── chore/update-tailwind-config
```

| Branch | Purpose | Merges Into |
|---|---|---|
| `main` | Production-ready code only. Never commit directly. | — |
| `develop` | Integration branch. All features merge here first. | `main` (via PR) |
| `feature/*` | New pages, components, or functionality | `develop` |
| `fix/*` | Bug fixes | `develop` |
| `chore/*` | Config, tooling, dependency updates, docs | `develop` |
| `hotfix/*` | Critical production bugs only | `main` + `develop` |

### Branch Naming Rules
- Use lowercase kebab-case only: `feature/contact-page`, not `Feature/ContactPage`
- Be specific: `feature/announcement-card-component`, not `feature/cards`
- Reference issue number if applicable: `fix/42-login-button-disabled`

---

## 2. Commit Conventions

We follow the **Conventional Commits** specification.

### Format
```
<type>(<scope>): <short description>

[optional body]

[optional footer: BREAKING CHANGE or issue ref]
```

### Types

| Type | When to Use |
|---|---|
| `feat` | New component, page, or feature |
| `fix` | Bug fix |
| `style` | Tailwind class changes, formatting — no logic change |
| `refactor` | Code restructure with no behavior change |
| `chore` | Config, build scripts, dependency updates |
| `docs` | Documentation changes only |
| `test` | Adding or updating tests |
| `perf` | Performance improvements (image optimization, lazy loading) |

### Scope (optional but encouraged)

Use the page or component name: `navbar`, `login`, `announcements`, `home`, `footer`, `config`.

### Examples
```
feat(announcements): add AnnouncementCard component with category badge
fix(login): disable submit button when offline
style(navbar): adjust mobile drawer padding to meet 44px tap target
chore(config): add custom color tokens to tailwind.config.js
docs(readme): add local setup instructions
perf(home): compress hero image from 400KB to 120KB
```

### Rules
- Subject line: max 72 characters, imperative mood ("add" not "added"), no period at end
- Never commit directly to `main` or `develop`
- One logical change per commit — do not bundle unrelated changes
- No `WIP` commits on shared branches — use draft PRs instead

---

## 3. Pull Request Process

### Before Opening a PR
- [ ] Branch is up to date with `develop` (`git pull origin develop`)
- [ ] Code follows all rules in `STANDARDS.md`
- [ ] No `console.log` statements left in code
- [ ] All images have `alt` text
- [ ] Tested on mobile viewport (360px) in browser DevTools
- [ ] Tested offline behavior if the change touches network/auth logic

### PR Title
Follow the same convention as commit messages:
```
feat(contact): add Messenger button with tap-to-open link
```

### PR Description Template
```markdown
## What does this PR do?
[1–3 sentence summary]

## Pages / Components affected
- [ ] Home
- [ ] About Us
- [ ] Announcements
- [ ] Contact
- [ ] Login
- [ ] Shared (Navbar, Footer, etc.)

## How to test
1. Step one
2. Step two

## Screenshots (mobile view required)
[Attach at least one mobile screenshot]

## Checklist
- [ ] Mobile-first layout verified at 360px
- [ ] All tap targets ≥ 44px
- [ ] No arbitrary Tailwind values used
- [ ] Images optimized (≤ 150KB)
- [ ] No inline styles
```

### Review & Merge
- Minimum 1 approval required to merge into `develop`
- `develop` → `main` requires team lead approval
- Use **Squash and Merge** for `feature/*` and `fix/*` branches
- Use **Merge Commit** for `develop` → `main` to preserve history

---

## 4. Local Setup

```bash
# 1. Clone the repo
git clone https://github.com/johnreybillones/Day-Care-Management-System.git
cd "Day Care Management System"

# 2. Install dependencies (use exact Node version — see ENVIRONMENT.md)
npm install

# 3. Copy environment variables
cp .env.example .env.local
# Fill in values — see ENVIRONMENT.md for what each variable means

# 4. Start dev server
npm run dev
# → http://localhost:5173
```

---

## 5. Git Hygiene

- **Pull before you branch:** Always `git pull origin develop` before creating a new branch.
- **Keep branches short-lived:** Merge within 1–3 days to avoid drift.
- **Delete merged branches:** After a PR merges, delete the remote branch.
- **No binary files in git:** Do not commit raw PSDs, large images (>500KB), or zip files. Optimize images before committing.
- **No secrets in git:** Never commit `.env.local`, API keys, or passwords. They are in `.gitignore`.

---

## 6. .gitignore Essentials

Ensure these are always ignored:

```
node_modules/
dist/
.env.local
.env.*.local
.DS_Store
*.log
```
