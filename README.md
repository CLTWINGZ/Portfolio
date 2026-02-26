# Chethana Lakthilina Portfolio

A modern, SEO-optimized software engineer portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and MDX blog support.

## Run locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000`.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the project in Vercel.
3. Keep defaults (`npm install`, `npm run build`).
4. Set production domain in `lib/site.ts` by updating `siteConfig.url`.

## Add a new project

1. Add a new object in `lib/data.ts` inside the `projects` array.
2. Add a screenshot in `public/projects/`.
3. The project list, detail page, sitemap, and metadata update automatically.

## Add a new blog post

1. Create a file in `content/blog/` named `your-slug.mdx`.
2. Include frontmatter:
   - `title`
   - `description`
   - `date`
   - `keywords`
   - `readingTime`
3. The `/blog` listing, post route, sitemap, and metadata update automatically.

## Lighthouse & SEO notes

- Static generation on pages and dynamic routes through `generateStaticParams`.
- Per-page metadata and dynamic metadata for project/blog detail pages.
- JSON-LD schemas: Person, Website, BlogPosting, SoftwareSourceCode.
- `sitemap.xml`, `robots.txt`, and `manifest.webmanifest` generated via metadata routes.
