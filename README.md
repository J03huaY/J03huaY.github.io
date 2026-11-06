# The Arcade

A small arcade site built with **SvelteKit** (Svelte 5). It holds a sports-themed mini
crossword, a game of 2048, and pages about me and how to reach me.

Project 1 was plain HTML and CSS; for Project 2 it was migrated to SvelteKit. The
original static version lives in the git history, and its planning docs, writeup and
Lighthouse screenshot are kept in [`docs/project1/`](docs/project1/).

**Live site:** <https://j03huay.github.io>

## 2048

Play it at <https://j03huay.github.io/2048>.

Slide the tiles with the **arrow keys**. On a phone or tablet, four arrow buttons appear
under the board instead. Two equal tiles merge into one, and each merge adds the new
tile's value to your score. A new 2 or 4 appears after every move that changes the board.
Reach a 2048 tile to win; the game is over when no move is left.

### Game logic: `@firefly13/arcade-core`

The rules live in a separate npm package that I wrote and published, so the site only
handles state and display:

- npm: <https://www.npmjs.com/package/@firefly13/arcade-core>
- source: <https://github.com/J03huaY/arcade-core>

| Function                     | Used for                                         |
| ---------------------------- | ------------------------------------------------ |
| `move(board, direction)`     | slide and merge the tiles                        |
| `scoreMove(board, direction)`| points earned by a move (added in 0.2.0)         |
| `spawn(board)`               | add a new 2 or 4 in a random empty cell          |
| `canMove(board, direction)`  | skip moves that would not change the board       |
| `hasMoves(board)`            | detect game over                                 |

Every function is pure: it takes a board and returns a new one, so the package has no
dependency on Svelte or the browser and is tested on its own with Node's test runner.

### How the page is built

- `src/lib/game2048/game.svelte.js` holds the game state in a class with `$state`
  fields (`board`, `score`, `best`) and `$derived` ones (`won`, `over`), and exports one
  shared `game` instance with `newGame()` and `play(direction)`.
- The page listens for arrow keys with `<svelte:window onkeydown>` and passes data down
  to small components through props:

```
2048/+page.svelte
├─ ScoreBoard   score and best (aria-live, so changes are read out)
├─ GameStatus   "You win!" / "Game over." (aria-live)
├─ Board        the 4×4 grid
│   └─ Tile     one cell; its blue gets darker as the number grows
└─ ArrowPad     touch-screen buttons; calls the page's onmove callback
```

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
│   │   ├── crossword/          CrosswordGrid, CrosswordCell, ClueList
│   │   └── game2048/           Board, Tile, ScoreBoard, GameStatus, ArrowPad
│   ├── data/
│   │   └── crossword.js        puzzle solution, clues, and cell numbering
│   └── game2048/
│       └── game.svelte.js      2048 game state, built on @firefly13/arcade-core
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

## Lighthouse

All four Lighthouse categories (Performance, Accessibility, Best Practices, SEO) score
in the green on the live `/2048` page. Screenshots are in [`docs/project2/`](docs/project2/).
