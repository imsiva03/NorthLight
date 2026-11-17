# Northlight Studio: Design Agency Homepage

A responsive single-page agency site built for the Next.js Developer Internship task.

## Tech stack
- Next.js 14 (App Router) with TypeScript
- Tailwind CSS 3 (class-based dark mode)
- lucide-react icons
- `next/font` (Bricolage Grotesque, DM Sans) and `next/image`

## Setup
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Deploy
Push to GitHub, import the repo at vercel.com/new, and deploy with default settings.

## Structure
```
app/            layout (fonts, SEO metadata, theme script), page, global styles
components/     Navbar, Hero, Services, Portfolio, Contact, Footer + small reusable
                pieces (ServiceCard, ProjectCard, SectionHeading, ThemeToggle)
lib/data.ts     Service and project content, kept apart from the markup
public/work/    Project thumbnails (original SVG artwork)
```

## Assumptions and extras
- The agency name, copy and projects are placeholders.
- Contact form: client-side validation with inline errors and a success message. Submission is simulated; connect it to an API route or email service to send real messages.
- Extras: dark mode toggle (saved in localStorage, follows system preference by default), SEO and Open Graph metadata, one hero entrance animation, image hover zoom, `prefers-reduced-motion` support, visible keyboard focus, `next/image` for thumbnails.
- Client components are limited to `ThemeToggle` and `Contact`; everything else renders on the server.
