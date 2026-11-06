# The Arcade

A small arcade site built with **SvelteKit** (Svelte 5). It holds a sports-themed mini
crossword, a game of 2048, and pages about me and how to reach me.

Project 1 was plain HTML and CSS; for Project 2 it was migrated to SvelteKit. The
original static version lives in the git history, and its planning docs, writeup and
Lighthouse screenshot are kept in [`docs/project1/`](docs/project1/).

**Live site:** <https://j03huay.github.io>

## Pages

| Path       | Route file                          |
| ---------- | ----------------------------------- |
| `/`        | `src/routes/+page.svelte`           |
| `/game`    | `src/routes/game/+page.svelte`      |
| `/2048`    | `src/routes/2048/+page.svelte`      |
| `/about`   | `src/routes/about/+page.svelte`     |
| `/contact` | `src/routes/contact/+page.svelte`   |

## Structure

```
src/
├── app.css                     design tokens (colour, type scale, spacing) and base styles
├── lib/
│   ├── components/
│   │   ├── layout/             SiteHeader, NavLink, SiteFooter
│   │   └── crossword/          CrosswordGrid, CrosswordCell, ClueList
│   └── data/
│       └── crossword.js        puzzle solution, clues, and cell numbering
└── routes/
    ├── +layout.svelte          shared header and footer for every page
    ├── +layout.js              prerenders every page to static HTML
    └── …                       one folder per page
static/
└── img/                        images served as-is
```

## Local development

```bash
npm install
npm run dev
```

Then open <http://localhost:5173>.

To build and preview the production version:

```bash
npm run build
npm run preview
```

## Deployment

The site uses `@sveltejs/adapter-static` and is deployed to GitHub Pages by
`.github/workflows/deploy.yml` on every push to `main`. In the repository settings,
**Pages → Source** must be set to **GitHub Actions**.
