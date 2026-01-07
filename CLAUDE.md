# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SEO-optimized landing page for Dan Systèmes, a French electronic/IT reseller. All content is in French.

## Commands

```bash
pnpm dev              # Start dev server with Turbopack (http://localhost:3000)
pnpm build            # Production build with Turbopack
pnpm start            # Start production server
pnpm lint             # Run ESLint
pnpm lint:fix         # Auto-fix ESLint issues
pnpm format           # Format with Prettier
pnpm type-check       # TypeScript type checking
```

Bundle analyzer: `BUNDLE_ANALYZER_ENABLED=true pnpm build`

## Architecture

**Stack**: Next.js 16 (App Router), React 19, TypeScript 5, Tailwind CSS 4, shadcn/ui (new-york style)

**Path alias**: `@/*` → `./src/*`

### Key Directories

- `src/app/` - Next.js App Router (layout.tsx, page.tsx, globals.css)
- `src/components/` - React components (page sections + reusable)
- `src/components/ui/` - shadcn/ui components
- `src/data/` - Static content data files (hero, services, faq, etc.)
- `src/lib/` - Utilities (`utils.ts` with cn() helper, `metadata.ts` for SEO)
- `src/types.ts` - Shared TypeScript interfaces (IMenuItem, IBenefit, IService, IFAQ, etc.)

### Data-Driven Content

Page sections pull content from `src/data/` files. To update content, edit the corresponding data file rather than the component.

### SEO Configuration

- Site metadata: `src/data/siteDetails.ts`
- Full SEO metadata: `src/lib/metadata.ts`
- Language is set to French (`lang="fr"`)

## Brand Colors

| Role | Hex | Tailwind Class |
|------|-----|----------------|
| **Primary** (Dark blue) | `#0c2760` | `bg-primary`, `text-primary` |
| **Primary Dark** | `#091d48` | `bg-primary-dark`, `border-primary-dark` |
| **Accent** (Yellow-green) | `#a8c823` | `bg-accent`, `text-accent` |
| **Card** (Pastel green) | `#D0de93` | `bg-card`, `text-card` |

### Color Usage

- **Primary**: Headers, navigation, primary buttons
- **Accent**: CTAs, hover states, focus rings, highlights
- **Card**: Card backgrounds, secondary containers
- **Primary Dark**: Button shadows, borders

### Examples

```tsx
// Primary button
<button className="bg-primary text-primary-foreground">Contactez-nous</button>

// Accent/CTA button
<button className="bg-accent text-accent-foreground">Demander un devis</button>

// Card
<div className="bg-card text-card-foreground">...</div>

// Button with shadow
<button className="bg-accent border-primary-dark" style={{ boxShadow: '0 4px 0 0 var(--primary-dark)' }}>
```

## Adding shadcn Components

```bash
pnpm dlx shadcn@latest add <component-name>
```

Components are added to `src/components/ui/`.

always run THIS COMMAND after any changes

```bash
pnpm build
```

each page should have a cannonical url a metadata tag and everything related to seo
