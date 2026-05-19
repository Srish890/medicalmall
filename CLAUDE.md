# CLAUDE.md — read this first, every time

**This file is the entry point for every task in this project. On every prompt, read this file *before* you start making any change — then act.**

## Project

Medical Mall — a static React prototype (React 18 UMD + Babel-standalone in the browser, no build step). Each page is a `*.jsx` file loaded by `index.html`; shared components live in `components.jsx`.

## The rule for every prompt

1. **Read `design.md` first — always.** For *any* design, UI, layout, component, colour, spacing, typography, icon, or styling change, **`design.md` is the single source of truth.** Open it, follow its tokens, components, and Working Rules. Never use a raw/magic value when a `design.md` token or component already covers it.

2. **Follow the `design.md` Working Rules.** In short:
   - Build every section — confirm the section list with the user before building.
   - Build only from `design.md` components and tokens — no inline magic numbers.
   - Ask the user before creating any new component; prefer a *variant* of an existing one.
   - The storybook is the live catalogue — removing something from it removes it from every page.
   - **Global components are single-source:** any deletion, update, or addition to a component in `components.jsx` (`ProductCard`, `Header`, `Footer`, `TrustPill`, `SearchBar`, `Icon`) must propagate to **every page that uses it** — edit it once, in `components.jsx`, never copy its markup into a page.
   - Always use Lucide for icons.
   - Verify before declaring done — parse-check / headless-render the touched files and confirm a clean console.

## Self-check before every response — REQUIRED

Before telling the user a task is done, **stop and ask yourself:**

> **"Did I do everything according to CLAUDE.md and design.md?"**

Go element by element: did every value come from a `design.md` token or component? Did I follow the Working Rules? Did I keep global components single-source? Did I verify it renders cleanly? If the answer is not *yes* for every part, the task is **not done** — fix it first, then respond.

## Key files

- `design.md` — the design system: tokens, components, and Working Rules. **The source of truth.**
- `components.jsx` — shared global components (edit a component here once → all pages update).
- `styles.css` — design tokens (`:root`) and utility classes.
- `index.html` — loads the page `.jsx` files and routes between them.
