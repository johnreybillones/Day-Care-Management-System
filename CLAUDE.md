# CLAUDE.md — Instructions for Claude Code

## Project

DCCMS (Day Care Center Management System) — public-facing static website for a barangay daycare center.
Stack: React + TypeScript + Tailwind CSS + React Router + Vite.
Audience: low-literacy mobile users on slow connections.

## Before You Write Any Code

- Read `ARCHITECTURE.md` before creating or moving files.
- Read `STANDARDS.md` before writing components, hooks, or styles.
- Read `CONTRIBUTING.md` before touching git or branch names.
- Read `docs/design.md` for color tokens, typography, and component specs.
- Read `docs/CONTENT.md` for copy — never invent placeholder text; use the values defined there.

## Hard Rules

- Mobile-first always. Base classes = mobile. `md:` = tablet. `lg:` = desktop.
- No arbitrary Tailwind values: no `w-[347px]`, no `text-[13px]`. Use the scale. Exception: `min-h-[44px]` and `min-w-[44px]` are allowed to meet WCAG tap target size.
- No `@apply` in CSS files. Compose classes in JSX only.
- Use `clsx()` for any conditional or multi-variant class composition — never string concatenation or template literals.
- All images need `alt` text. All inputs need visible `<label>` elements.
- Minimum tap target: 44×44px on all buttons and links.
- No complex animations: no parallax, no carousels, no slide-up transitions on route change.
- Never store auth tokens in `localStorage`. Use `sessionStorage` only.
- No inline styles. No `style={{}}` props unless rendering dynamic SVG values.

## Component Rules

- One component per file. Filename = component name. PascalCase. Use `.tsx` for components, `.ts` for non-JSX.
- Co-locate styles (className), logic (hooks), and markup in the same file unless the hook exceeds ~30 lines.
- Extract to `hooks/` only when a hook is reused across 2+ components.
- Never create a new component for something already in `src/components/ui/`.

## What NOT to Do

- Do not install new dependencies without flagging it first.
- Do not modify `tailwind.config.js` color/font tokens — they are locked to the design spec.
- Do not create new pages without a corresponding route in `App.tsx`.
- Do not add `console.log` statements to committed code.
- Do not use `any` type. Use `unknown` + type narrowing, or define a proper interface/type.
- Do not use `as` type assertions unless you have exhausted other options and add a `// SAFETY:` comment.
- Do not use `// @ts-ignore` or `// @ts-expect-error` without a justifying comment.

## Useful References

- Design tokens → `tailwind.config.js` (extend.colors, extend.fontFamily)
- User journey & routing logic → `docs/FLOW.md`
- Wireframe constraints → `docs/WIREFRAME-SPEC.md`
- Project background & stakeholders → `docs/PROJECT.md`
