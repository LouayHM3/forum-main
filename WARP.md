# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

### Core Development
- `npm run dev` - Start the Next.js development server (http://localhost:3000)
- `npm run build` - Build the production application
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint on the codebase

### Package Management
- `npm install` - Install all dependencies
- `pnpm install` - Alternative package manager (pnpm-lock.yaml present)

### Component Development
- `npx shadcn@latest add [component-name]` - Add new shadcn/ui components
- Components are configured with "new-york" style and Lucide icons
- Use `@/components` alias for component imports
- Use `@/lib/utils` for the `cn()` utility function

## Architecture Overview

### Project Structure
This is a **Next.js 15 App Router** project for "Forum ENIT Entreprise 2025" - a French conference/forum website connecting companies with students.

### Key Architecture Patterns

**App Router Structure:**
- `/app` - Next.js App Router with single-page application approach
  - `/app/layout.tsx` - Root layout with Navbar, Footer, Montserrat font, and French locale
  - `/app/page.tsx` - Homepage using snap-scroll sections with full-screen layout
  - `/app/globals.css` - Custom brand colors and Tailwind CSS 4.x configuration

**Component Architecture:**
- `/components` - Feature-specific sections (hero-section, countdown-timer, companies-section, etc.)
- `/components/ui` - shadcn/ui reusable components with extensive Radix UI library
- `/hooks` - Custom React hooks (`use-mobile` with 768px breakpoint, `use-toast`, `use-parallax`, `use-scroll-animation`)
- `/lib` - Utilities and data (`utils.ts` with `cn()`, `companies-data.ts`)

**Styling & Brand System:**
- **Tailwind CSS 4.1.9** with CSS variables and OKLCH color space
- **Brand Colors:** Primary #28384d (dark blue), Secondary #00adb5 (teal), Accent #ffcd11 (yellow)
- **Montserrat font** with weights 500 (medium), 600 (semibold), 700 (bold)
- **Responsive design** with 768px mobile breakpoint
- **Full-screen snap-scroll sections** with alternating backgrounds

**Key Dependencies:**
- React 19.1.0 with Next.js 15.5.4
- TypeScript with strict mode enabled
- Form handling: react-hook-form + zod validation
- UI: Complete Radix UI component suite
- Animation: embla-carousel-react, tw-animate-css
- Analytics: Vercel Analytics
- Icons: Lucide React + Font Awesome brands

### Development Configuration

**Build Configuration:**
- ESLint and TypeScript errors ignored during builds (`next.config.mjs`)
- Images unoptimized for deployment flexibility
- TypeScript paths with `@/*` aliases pointing to root directory
- PostCSS with Tailwind CSS 4.x plugin

**Component System:**
- Server Components by default (RSC enabled)
- shadcn/ui with "new-york" style variant
- Suspense boundaries in root layout
- CSS variables for theming with light/dark mode support

**Homepage Architecture:**
The main page (`/app/page.tsx`) is composed of full-screen snap-scroll sections:
1. HeroSection
2. CountdownTimer  
3. WhoWeAreSection
4. ServicesSection
5. OurAxesSection
6. ForumInfoSection
7. ReserveStandSection
8. PanelistsCarousel
9. CompaniesSection

Each section alternates between default and muted backgrounds for visual separation.

**Custom Hooks Pattern:**
- `useIsMobile()` - Responsive breakpoint detection at 768px
- Animation and scroll-based hooks for enhanced UX
- Toast notifications system

This is a modern React/Next.js 15 application focused on French enterprise conference presentation with heavy emphasis on visual design and smooth user experience.
