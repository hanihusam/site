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

### Path Aliases

```
@/*           → src/*
@components/* → src/components/*
```

### External Links

All social/external URLs are centralized in `src/constant/external-links.ts`.
