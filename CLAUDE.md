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

`prefetch: true` is enabled globally in `astro.config.mjs` — all internal `<a>` links are prefetched automatically. The `astro-icon` integration is also active (icon components available via `astro-icon/components`).

### Component Split

- `src/components/astro/` — Astro components for layout shells, metadata, and static structure (no client-side hydration)
- `src/components/react/` — Interactive React components used as Astro islands

React components are only used where interactivity or reusable logic is needed. Prefer Astro components for purely presentational content.

### Key Components

- `Grid.tsx` — 12-column responsive grid (4 cols mobile, 8 tablet, 12 desktop). Props: `as` (polymorphic tag), `featured` (full-bleed bg section with vertical padding), `nested` (removes horizontal margins for inner grids), `smFull` (full-width on mobile, margins on md+), `rowGap` (adds row gap).
- `Typography.tsx` — Heading (`Title`) and `Paragraph` variants via CVA. `Title` accepts `as`, `variant` (`primary`/`secondary`), and `size`.
- `IconLink.tsx` — `<a>` wrapper with icon slot; used for social links in Footer.
- `Spacer.astro` — Vertical spacer with `size` prop (`sm`/`md`/`lg`).
- `Layout.astro` / `Head.astro` — Root layout; `Head.astro` inlines the theme-toggle script for dark mode (reads/writes `localStorage`).

### Styling

- Utility-first Tailwind with `cn()` utility (`src/scripts/cn.ts`) combining `clsx` + `tailwind-merge`
- Dark mode via localStorage theme preference (toggled via inline script in `Head.astro`)
- Custom design tokens in `src/styles/global.css`; prose overrides in `src/styles/prose.css`
- Tailwind Typography plugin with custom `light`/`dark` prose variants in `tailwind.config.ts`

### Design Tokens (`src/styles/global.css`)

All tokens are in `@theme {}` and map 1:1 to Figma variables. Three color palettes (`sunset-*`, `sky-*`, `neutral-*`), full 11-step scale (50–950). Typography tokens use semantic heading names (`--text-heading1` through `--text-heading6`, `--text-paragraph`). Fonts are self-hosted in `public/fonts/`.

**Key semantic color usages:**
- Headings primary: `text-sky-600` / secondary: `text-sunset-400 dark:text-neutral-100`
- Body text: `text-neutral-900 dark:text-neutral-100`
- Button primary: `bg-sunset-400` / secondary: `bg-sky-600`
- Page bg: `bg-neutral-100` / dark bg: `bg-neutral-800`
- CTA section bg: `bg-neutral-900`

### Path Aliases

```
@/*           → src/*
@components/* → src/components/*
```

### External Links

All social/external URLs are centralized in `src/constant/external-links.ts`.
