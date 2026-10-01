# The Arcade

A small static site built with **HTML and CSS only** — no JavaScript, no CSS frameworks.
It holds a playable mini crossword, plus pages about my experience and how to reach me.
More games will be added over the semester.

**Live site:** <https://j03huay.github.io/the-arcade/>

## Pages

| Path       | File                 |
| ---------- | -------------------- |
| `/`        | `index.html`         |
| `/game`    | `game/index.html`    |
| `/about`   | `about/index.html`   |
| `/contact` | `contact/index.html` |

Each page lives in its own folder as `index.html`, so URLs never show `.html`.

## Structure

```
.
├── index.html            landing page
├── home.css              page-specific styles, next to their page
├── game/
│   ├── index.html
│   └── game.css
├── about/
│   ├── index.html
│   └── about.css
├── contact/
│   ├── index.html
│   └── contact.css
└── assets/
    ├── css/
    │   ├── tokens.css    custom properties: colors, type scale, spacing
    │   ├── base.css      reset and base typography
    │   └── layout.css    shared header, nav, footer
    ├── fonts/
    ├── icons/
    └── img/
```

Load order in every page's `<head>`: `tokens.css` → `base.css` → `layout.css` → the page's own stylesheet.

## Local preview

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>. Use a server rather than opening the files
directly — `file://` does not resolve the directory-style URLs the same way.

## Notes

- Built for a course project. No JavaScript anywhere in this repository, by design.
- Stylesheets are linked with **relative** paths (`assets/...` from the root,
  `../assets/...` from a subpage) so the site works both locally and under the
  GitHub Pages project subpath.
