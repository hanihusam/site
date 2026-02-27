# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
pnpm dev          # Start dev server (Astro)
pnpm build        # Production build
pnpm preview      # Preview production build

# Type checking & sync
pnpm check        # astro check (type errors + diagnostics)
pnpm sync         # astro sync (generate content types)

# Code quality
pnpm lint         # ESLint on src/
pnpm lint:fix     # ESLint with auto-fix
pnpm format       # Prettier write
pnpm format:check # Prettier check
```

No test runner is configured — type safety and linting are the primary quality gates.

## Architecture

**Stack:** Astro 5 (static site) + React 19 (interactive islands) + Tailwind CSS 4 + TypeScript strict

**Site:** Personal portfolio at `https://www.bapak2.dev`

### Component Split

- `src/components/astro/` — Astro components for layout shells, metadata, and static structure (no client-side hydration)
- `src/components/react/` — Interactive React components used as Astro islands

React components are only used where interactivity or reusable logic is needed. Prefer Astro components for purely presentational content.

### Key Components

- `Grid.tsx` — 12-column responsive grid (4 cols mobile, 8 tablet, 12 desktop). Supports `as` polymorphic prop and `featured` prop for full-bleed background sections.
- `Typography.tsx` — Heading variants via CVA
- `Layout.astro` / `Head.astro` — Root layout; `Head.astro` inlines the theme-toggle script for dark mode (reads/writes `localStorage`)

### Styling

- Utility-first Tailwind with `cn()` utility (`src/scripts/cn.ts`) combining `clsx` + `tailwind-merge`
- Dark mode via localStorage theme preference (toggled via inline script in `Head.astro`)
- Custom design tokens in `src/styles/global.css`; prose overrides in `src/styles/prose.css`
- Tailwind Typography plugin with custom `light`/`dark` prose variants in `tailwind.config.ts`

### Design Tokens (`src/styles/global.css`)

All tokens are defined inside `@theme {}` and map 1:1 to the Figma variable file.

**Colors** — three palettes, full 11-step scale (50–950):
- `sunset-*` — warm accent; primary brand color is `sunset-400` (`#e6813e`)
- `sky-*` — cool blue/navy; primary heading color is `sky-600` (`#45577b`)
- `neutral-*` — grays/white; page bg `neutral-100`, dark bg `neutral-800`, body text `neutral-900`

**Typography** — semantic heading names, sizes from Figma `font.size.*`:
- `--text-xs/sm/base` (12/14/16px), `--text-paragraph/heading6` (18px) through `--text-heading1` (48px), `--text-6xl/7xl` (60/72px)
- Line-heights use Figma multipliers: headings 1–3 → `1.25` (tight), headings 4–5 → `1.375` (snug), heading6/paragraph → `1.5` (normal)
- Font weights: `--font-weight-regular` (400), `--font-weight-medium` (500), `--font-weight-bold` (700), `--font-weight-black` (900)

**Font families:**
- `--font-display`: `"Satoshi"` — self-hosted in `public/fonts/`, weights 300–900 with italics (WOFF2/WOFF)
- `--font-mono`: `"JetBrains Mono"` — self-hosted in `public/fonts/`, variable font TTF covering weights 100–800

**Key semantic usages in components:**
- Headings primary: `text-sky-600` / secondary: `text-sunset-400 dark:text-neutral-100`
- Body text: `text-neutral-900 dark:text-neutral-100`
- Button primary: `bg-sunset-400` (hover `sunset-500`, active `sunset-600`)
- Button secondary: `bg-sky-600` (hover `sky-700`, active `sky-800`)
- CTA section bg: `bg-neutral-900`

### Path Aliases

```
@/*           → src/*
@components/* → src/components/*
```

### External Links

All social/external URLs are centralized in `src/constant/external-links.ts`.
