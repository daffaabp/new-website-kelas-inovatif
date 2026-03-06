# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

KelasInovatif.com — Indonesian education platform landing page & admin CMS. Built with Next.js 16 (App Router), Tailwind CSS v4, Prisma ORM, and PostgreSQL. Deployed to Vercel (production) and optionally via PM2 with Bun as runtime (self-hosted).

## Commands

```bash
bun install          # Install dependencies (also runs prisma generate via postinstall)
bun dev              # Dev server at localhost:3000
bun build            # Production build
bun lint             # ESLint
npx prisma generate  # Regenerate Prisma client after schema changes
npx prisma migrate dev --name <name>  # Create and apply migration
npx prisma db push   # Push schema changes without migration
```

Production (PM2, self-hosted only):
```bash
bun run pm2:start    # Start with PM2 (port 3002)
bun run pm2:restart  # Restart
bun run pm2:logs     # View logs
```

## Architecture

### Routing & Pages
Next.js App Router. Each page lives in `src/app/<route>/page.tsx` with co-located `_components/` folders for page-specific components. The root `src/app/page.tsx` re-exports `src/app/homepage/page.tsx`.

Key routes:
- Public: `/`, `/about`, `/blogs`, `/schedule`, `/program`, `/bootcamp`, `/private`, `/community`, `/contact`, `/faq`, `/jobs`, `/user-story`, `/partnership`, `/class-cursor`, `/class-notebooklm`, `/class-scite`
- Blog detail: `/[slug]` (dynamic route, also redirects from `/blogs/:slug`)
- Schedule detail: `/schedule/[id]`
- Admin: `/admin/login`, `/admin/dashboard`, `/admin/blogs`, `/admin/schedule` (with create/edit sub-routes)

### Homepage is a Client Component
`src/app/homepage/page.tsx` is marked `"use client"` (needed for `selectedCourse` state). This means child components like `EventSection` and `LatestBlogSection` fetch data via server actions called from `useEffect`, NOT directly on the server. See "Known Pitfalls" below.

In contrast, `/schedule` and `/blogs` pages are server components that fetch data directly — no serialization boundary.

### Data Layer
- **ORM**: Prisma (`prisma/schema.prisma`) with PostgreSQL
- **Models**: `Schedule`, `Blog`, `Email`, `EventType`
- **Prisma client singleton**: `src/lib/prisma.ts`
- **Server Actions**: `src/app/actions/` — `auth.ts`, `blog.ts`, `schedule.ts`, `contact.ts`, `eventType.ts`, `subscribe.ts`, `dashboard.ts`
- **File storage**: Vercel Blob (`src/lib/storage.ts`) — images auto-converted to AVIF via sharp

### Auth
Simple env-based admin auth (ADMIN_EMAIL/ADMIN_PASSWORD). JWT sessions via `jose` stored in httpOnly cookies (`src/lib/session.ts`). No middleware file — auth checks happen in server actions and page components.

### UI & Styling
- **Tailwind CSS v4** with `@theme inline` in `globals.css` — extensive per-page color tokens (e.g., `--color-about-primary`, `--color-blog-primary`, etc.)
- **UI components**: `src/components/ui/` — shadcn/ui components (Radix primitives + CVA)
- **Common components**: `src/components/commons/` — `Navbar.tsx`, `Footer.tsx`, `BlogSection.tsx`, `NewsletterSection.tsx`
- **Utility**: `cn()` from `src/lib/utils.ts` (clsx + tailwind-merge)
- **Fonts**: Inter (sans) + Playfair Display (serif) via `next/font/google`
- **Icons**: `lucide-react`
- **React Compiler** enabled (`reactCompiler: true` in next.config.ts)

### Path Alias
`@/*` maps to `./src/*`

## Environment Variables

Required (see `env.example`):
- `DATABASE_URL` — PostgreSQL connection string
- `ADMIN_EMAIL`, `ADMIN_PASSWORD` — Admin login credentials
- `SESSION_SECRET` — JWT signing key (min 32 chars)
- `RESEND_API_KEY`, `RESEND_AUDIENCE_ID` — Email service (Resend)
- `BLOB_READ_WRITE_TOKEN` — Vercel Blob storage token

## Conventions

- Indonesian language for UI content (`lang="id"`)
- Page-specific components go in `src/app/<route>/_components/`
- Each page section has its own color palette defined as CSS custom properties in `globals.css`
- Images served from Vercel Blob Storage; uploaded images are auto-converted to AVIF
- Form validation uses Zod schemas in server actions
- Forms use `react-hook-form` with `@hookform/resolvers` (Zod)

## Known Pitfalls

### Server Action Serialization
When server actions (in `src/app/actions/`) are called from client components (like the homepage), return values cross a serialization boundary (React Flight protocol). Use `?? null` instead of `?? undefined` for optional fields — `null` is JSON-serializable, `undefined` is not reliably serializable and can cause silent failures where data appears empty.

Server components (like `/schedule`, `/blogs` pages) call the same actions but never cross this boundary, so they work regardless.

### README.md is Outdated
The README references Knex.js — the project has since migrated to Prisma ORM. Refer to this CLAUDE.md for accurate setup instructions.
