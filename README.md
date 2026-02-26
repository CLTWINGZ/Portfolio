# Portfolio (Next.js)

This project is a personal portfolio built with Next.js (App Router), React, and TypeScript.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build for production (static export)

```bash
npm run build
```

The static site is generated in `out/`.

## Deploy to GitHub Pages

1. Push this project to GitHub (default branch: `main`).
2. In GitHub, open `Settings -> Pages`.
3. Set `Source` to `GitHub Actions`.
4. Push to `main` (or run the workflow manually).

A workflow is already added at `.github/workflows/deploy-pages.yml`.

## Project structure

- `src/app/page.tsx`: Main portfolio page UI
- `src/app/globals.css`: Global styles
- `src/data.ts`: Portfolio content/data source
- `public/`: Static assets (including CV PDF)

## Update content

Edit `src/data.ts` to update profile details, projects, education, and certifications.

## CV download

Set `cvDownloadPath` in `src/data.ts` to a file inside `public/`.
