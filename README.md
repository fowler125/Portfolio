# Jabari Fowler Portfolio

An animated Next.js portfolio built to showcase biography, experience, featured projects, and contact information in a single-page layout.

## Jump Around

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Project Tour](#project-tour)
- [Edit Guide](#edit-guide)
- [Quality Checks](#quality-checks)
- [Known Gaps](#known-gaps)

## Overview

This project is a personal portfolio site using the Next.js App Router, Tailwind CSS, Framer Motion, and GSAP.

Current page sections:

- Hero intro
- About / biography
- Experience timeline
- Featured projects
- Contact form UI

## Tech Stack

| Layer | Tools |
| --- | --- |
| Framework | Next.js 14, React 18, TypeScript |
| Styling | Tailwind CSS |
| Motion | Framer Motion, GSAP, ScrollTrigger |
| UI Utilities | Radix UI, shadcn-style components, `clsx`, `tailwind-merge` |

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Production commands:

```bash
npm run build
npm run start
```

## Project Tour

| Path | Purpose |
| --- | --- |
| [app/layout.tsx](d:\Home Assignments\Portfolio\app\layout.tsx) | Root app wrapper and metadata |
| [app/page.tsx](d:\Home Assignments\Portfolio\app\page.tsx) | Home page composition and smooth-scroll behavior |
| [components/layout.tsx](d:\Home Assignments\Portfolio\components\layout.tsx) | Sticky header, nav, footer |
| [components/about.tsx](d:\Home Assignments\Portfolio\components\about.tsx) | Biography, skills, stats, timeline |
| [components/projects.tsx](d:\Home Assignments\Portfolio\components\projects.tsx) | Featured project cards and project section animation |
| [app/globals.css](d:\Home Assignments\Portfolio\app\globals.css) | Global styles and theme tokens |

## Edit Guide

### Change the biography

Update the text and profile facts in:

- [components/about.tsx](d:\Home Assignments\Portfolio\components\about.tsx)

Look for:

- `Hi, I'm Jabari Fowler`
- `Based in Dallas, Texas`
- the main bio paragraph
- the `stats` array
- the `experiences` array

### Change featured projects

Update the `projects` array in:

- [components/projects.tsx](d:\Home Assignments\Portfolio\components\projects.tsx)

Each project currently supports:

- `title`
- `description`
- `category`
- `image`
- `year`
- `technologies`
- `link`

### Change header links or brand text

Edit:

- [components/layout.tsx](d:\Home Assignments\Portfolio\components\layout.tsx)

### Change metadata

Edit:

- [app/layout.tsx](d:\Home Assignments\Portfolio\app\layout.tsx)

## Interactive Notes

<details>
<summary><strong>What should I edit first?</strong></summary>

Start here in this order:

1. [components/about.tsx](d:\Home Assignments\Portfolio\components\about.tsx)
2. [components/projects.tsx](d:\Home Assignments\Portfolio\components\projects.tsx)
3. [components/layout.tsx](d:\Home Assignments\Portfolio\components\layout.tsx)
4. [app/layout.tsx](d:\Home Assignments\Portfolio\app\layout.tsx)

</details>

<details>
<summary><strong>What still needs work?</strong></summary>

The site is functional, but these areas would make it feel more production-ready:

- Replace placeholder project content with real work
- Connect the contact form to email, Formspree, Resend, or a custom API route
- Add your updated resume PDF to `public` and link it from the hero or about section
- Refine the tall project section spacing if you want a denser layout
- Add SEO metadata, Open Graph image, and favicon assets

</details>

<details>
<summary><strong>How do I swap in my resume?</strong></summary>

Recommended flow:

1. Copy the PDF into [public](d:\Home Assignments\Portfolio\public)
2. Name it something stable like `jabari-fowler-resume.pdf`
3. Add a button linking to `/jabari-fowler-resume.pdf`

</details>

## Quality Checks

TypeScript check:

```bash
npx tsc --noEmit
```

Suggested manual checks:

- Verify smooth scroll in the navbar
- Verify the About section stacks correctly on mobile
- Verify project cards still feel good at laptop and desktop widths
- Verify the contact section is reachable from the nav

## Known Gaps

- The contact form is presentational and does not submit anywhere yet
- Some featured projects still use placeholder/demo content
- The project section is visually large by design and may still feel spacious on some screens

## Status

Current local verification completed:

- `npx tsc --noEmit` passed
