# STANDARDS.md — Coding Standards & Conventions

**Project:** DCCMS Public Static Website  
**Stack:** React + TypeScript + Tailwind CSS  
**Last Updated:** 2026-05-04

---

## 1. General Rules

- Write code for the next developer, not for the compiler.
- Prefer explicit and readable over clever and concise.
- If you need a comment to explain *what* code does, simplify the code first. Comments explain *why*.
- No dead code. No commented-out blocks. Use git history instead.
- No `console.log` in committed code. Use a `debug` flag pattern if needed during development.

---

## 2. File & Folder Naming

| Type | Convention | Example |
|---|---|---|
| React components | PascalCase | `AnnouncementCard.tsx` |
| Hooks | camelCase, `use` prefix | `useOnlineStatus.ts` |
| Services | camelCase | `auth.ts`, `announcements.ts` |
| Constants | camelCase | `navigation.ts`, `content.ts` |
| CSS | camelCase | `index.css` |
| Type declarations | camelCase | `vite-env.d.ts` |
| Docs | SCREAMING_SNAKE or Title | `ARCHITECTURE.md`, `design.md` |

**One component per file. Filename must match the component name exactly.** Use `.tsx` for files containing JSX, `.ts` for everything else.

---

## 3. TypeScript Standards

### File Extensions
- `.tsx` — any file that contains JSX (components, pages, sections)
- `.ts` — hooks, services, constants, utilities
- `.d.ts` — type declaration files only

### Types vs Interfaces
- Use `interface` for component props (they're extendable and produce better error messages)
- Use `type` for unions, intersections, utility types, and non-object shapes

```tsx
// ✅ Interface for component props
interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  isDisabled?: boolean;
}

export default function Button({ label, variant = 'primary', onClick, isDisabled = false }: ButtonProps) {
  // ...
}

// ✅ Type for unions and utility types
type AnnouncementCategory = 'Event' | 'Health Alert' | 'Reminder' | 'Holiday';
type ApiResponse<T> = { data: T; error: null } | { data: null; error: string };
```

### Strict Rules
- **No `any`** — use `unknown` + type narrowing, or define a proper type
- **No `as` assertions** unless unavoidable (add `// SAFETY:` comment explaining why)
- **No `// @ts-ignore`** or `// @ts-expect-error` without a justifying comment
- **No implicit return types on exported functions** — always annotate return types for hooks, services, and utility functions

```tsx
// ✅ Explicit return type on exported hook
export function useOnlineStatus(): boolean {
  // ...
}

// ✅ Explicit return type on service function
export async function loginUser(username: string, password: string): Promise<{ token: string }> {
  // ...
}

// ✅ Component return type is inferred (JSX.Element) — this is fine
export default function Navbar() {
  return <nav>...</nav>;
}
```

---

## 4. React Standards

### Component Structure Order
Write components in this order, always:

```tsx
// 1. Imports
import { useState } from 'react';
import Button from '../ui/Button';

// 2. Constants local to this component (if any)
const MAX_VISIBLE = 3;

// 3. Props interface
interface AnnouncementCardProps {
  date: string;
  title: string;
  body: string;
  category: string;
  href?: string;
}

// 4. Component definition
export default function AnnouncementCard({ date, title, body, category, href }: AnnouncementCardProps) {

  // 5. Hooks first
  const [expanded, setExpanded] = useState(false);

  // 6. Derived values / computed display logic
  const isLong = body.length > 200;

  // 7. Event handlers
  function handleToggle() {
    setExpanded(prev => !prev);
  }

  // 8. Return — JSX only, no logic here
  return (
    <article className="...">
      ...
    </article>
  );
}
```

### Props
- Define all props in the function signature with destructuring.
- Use descriptive prop names — no single-letter props except for well-known conventions (`i`, `e`).
- Boolean props: use positive names (`isLoading`, not `notLoaded`).
- Handler props: `on` prefix (`onClick`, `onSubmit`, `onToggle`).

```tsx
// ✅ Good
export default function Button({ label, variant = 'primary', onClick, isDisabled = false }) {}

// ❌ Bad
export default function Button(props) {}
export default function Button({ l, v, fn, d }) {}
```

### Conditional Rendering
```tsx
// ✅ Use ternary for two outcomes
{isLoading ? <Skeleton /> : <AnnouncementList items={items} />}

// ✅ Use && for optional render
{error && <ErrorMessage message={error} />}

// ❌ Avoid nested ternaries — extract to a variable or function instead
```

### Lists
Always use a stable, unique `key` prop. Never use array index as key for dynamic lists.

```tsx
// ✅ Good
{announcements.map(item => (
  <AnnouncementCard key={item.id} {...item} />
))}

// ❌ Bad — index as key breaks reconciliation on reorder/filter
{announcements.map((item, index) => (
  <AnnouncementCard key={index} {...item} />
))}
```

### Event Handlers
- Name handlers `handle[Event]`: `handleSubmit`, `handleToggle`, `handleInputChange`.
- Define handlers as named functions inside the component, not inline arrow functions in JSX (for readability and testability).

```tsx
// ✅ Good
function handleSubmit() { ... }
<button onClick={handleSubmit}>Login</button>

// ❌ Avoid for non-trivial logic
<button onClick={() => { validate(); submit(); setLoading(true); }}>Login</button>
```

---

## 5. Tailwind CSS Standards

### Class Order Convention
Follow this mental model (outside → inside, layout → visual):

```
1. Layout:     flex, grid, block, hidden
2. Position:   relative, absolute, sticky, z-*
3. Box model:  w-*, h-*, p-*, m-*, gap-*
4. Typography: font-*, text-*, leading-*, tracking-*
5. Visual:     bg-*, border-*, rounded-*, shadow-*
6. State:      hover:*, focus:*, active:*, disabled:*
7. Responsive: md:*, lg:* (always last)
```

```tsx
// ✅ Ordered
<button className="flex items-center justify-center px-6 py-3 font-bold text-sm text-white bg-brand-red rounded-full shadow-md hover:bg-brand-red-dark transition-colors duration-200 md:px-8">

// ❌ Unordered (hard to scan)
<button className="text-white hover:bg-brand-red-dark bg-brand-red md:px-8 rounded-full px-6 font-bold flex py-3">
```

### Absolute Rules

| Rule | Reason |
|---|---|
| No arbitrary values: `w-[347px]` | Breaks the design token system |
| No `@apply` in CSS files | Defeats Tailwind's utility purpose; hides classes from JSX |
| No inline `style={{}}` | Exception: dynamic SVG values only |
| Use only defined color tokens | `bg-brand-blue` not `bg-[#1AAEEE]` |
| No `!important` overrides | Fix the specificity problem instead |

### Responsive Classes
Always write mobile-first. Unprefixed = mobile. `md:` = 768px+. `lg:` = 1024px+.

```tsx
// ✅ Mobile-first
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// ❌ Desktop-first (wrong approach for this project)
<div className="grid grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-6">
```

### Extracting Repeated Class Groups
If the same class combination appears 3+ times, extract it to a constant or component — **not** `@apply`.

```tsx
// ✅ Extract to a component
// If the same button style repeats 3+ times, make a <Button /> component

// ✅ Extract to a constant (for non-component cases)
const cardBase = 'rounded-2xl overflow-hidden shadow-card bg-cloud';
<div className={cardBase}> ... </div>

// ✅ Use clsx() for conditional or variant-based classes
import clsx from 'clsx';
<button className={clsx(
  'rounded-full font-bold transition-colors duration-200',        // always applied
  variant === 'primary' && 'bg-brand-red hover:bg-brand-red-dark text-white',
  variant === 'secondary' && 'bg-brand-blue hover:bg-brand-blue-dark text-white',
  isDisabled && 'opacity-50 cursor-not-allowed',
)}>

// ❌ Don't use template literals for conditional classes — hard to read and error-prone
<button className={`rounded-full ${variant === 'primary' ? 'bg-brand-red' : 'bg-brand-blue'} ${isDisabled ? 'opacity-50' : ''}`}>
```

---

## 6. Accessibility Standards

Given the low-literacy audience and mobile-first context, these are non-negotiable:

### Images
```tsx
// ✅ Always meaningful alt text
<img src={heroDaycare} alt="Children playing at the Day Care Center of Barangay San Antonio de Padua I" />

// ✅ Decorative images: empty alt
<img src={cloudShape} alt="" role="presentation" />

// ❌ Never omit alt
<img src={heroDaycare} />
```

### Forms
```tsx
// ✅ Visible label always — placeholder is not a label
<label htmlFor="username" className="block text-sm font-semibold text-neutral-700 mb-1">
  Username
</label>
<input
  id="username"
  type="text"
  placeholder="Enter your username"
  className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-brand-blue"
/>
```

### Buttons & Links
```tsx
// ✅ Minimum 44px touch target (acknowledged exception to "no arbitrary values" rule —
//    Tailwind has no 44px utility, and WCAG AA requires exactly this size)
<button className="min-h-[44px] min-w-[44px] px-6 py-3 ...">

// ✅ Semantic HTML — use <button> for actions, <a> for navigation
<button onClick={handleLogin}>Login</button>       // action
<a href="/about">About Us</a>                       // navigation

// ❌ Don't use <div> or <span> as interactive elements
<div onClick={handleLogin}>Login</div>
```

### Color
- Never convey meaning through color alone — always pair with text or icon.
- Announcement category badges: color + text label (never just a colored dot).

### Focus States
- Never remove focus outlines without replacing them.
```tsx
// ✅ Custom focus ring using Tailwind
className="focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
```

---

## 7. Performance Standards

| Rule | Implementation |
|---|---|
| Optimize all images before committing | Max 150KB per JPG; use Squoosh or ImageOptim |
| Lazy load below-fold images | `<img loading="lazy" />` on all images not in the hero |
| No unused dependencies | Audit `package.json` before adding anything new |
| Font subsetting | Google Fonts URL should include `&subset=latin` |
| `font-display: swap` | Included automatically with Google Fonts URL param `&display=swap` |

---

## 8. Error & Loading States

Every component that fetches data **must** handle three states:

```tsx
function useAnnouncements() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  // ...
  return { data, isLoading, error };
}

// In the page component:
if (isLoading) return <AnnouncementsSkeleton />;
if (error)     return <ErrorMessage message="Could not load announcements. Check your connection." />;
if (!data.length) return <EmptyState message="No announcements yet. Check back soon." />;
return <AnnouncementList items={data} />;
```

**Never** render a blank white section. Always show loading, error, or empty state.

---

## 9. Naming Conventions Summary

| Thing | Convention | Example |
|---|---|---|
| Component | PascalCase | `FeatureCard` |
| Hook | `use` + PascalCase | `useOnlineStatus` |
| Event handler | `handle` + Event | `handleSubmit` |
| Boolean state/prop | `is/has/can` prefix | `isLoading`, `hasError` |
| Constants | SCREAMING_SNAKE | `MAX_VISIBLE = 3` |
| CSS class groups | camelCase const | `const cardBase = '...'` |
| Route paths | lowercase kebab | `/about`, `/contact-us` |
| Image files | lowercase kebab | `hero-daycare.jpg` |
