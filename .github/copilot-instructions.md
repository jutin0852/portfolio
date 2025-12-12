## Copilot / AI Agent Instructions — jutin_dev (portfolio)

This repository is a small React + Vite portfolio that includes 3D/animation components (Three.js / R3F / GSAP) and Tailwind-related tooling. The goal of this file is to give an AI coding agent the concrete, discoverable facts needed to be productive immediately.

### Quick context (big picture)
- Single-page React app bootstrapped with Vite. Entry: `src/main.jsx` → `src/App.jsx`.
- UI components live under `src/components/`; a `LandingPage/` folder groups page-specific components.
- There are 3D/animation integrations: `three`, `@react-three/fiber`, `@react-three/drei`, and `gsap` are used for interactive/visual components.

### Key files and why they matter
- `package.json` — primary scripts: `dev`, `build`, `preview`, `lint`, `deploy` (uses `gh-pages`). Prefer using the repo's package manager (see below).
- `src/main.jsx` — app bootstrap (render root). Minimal; changes here affect the whole app.
- `src/App.jsx` — top-level composition and routes/layout; most components get imported here.
- `src/components/*` — contains UI and 3D components. Examples: `LayeredText.jsx`, `RingTextRotate.jsx`, `ProjectRoom.jsx` (3D scene placeholder).
- `index.html`, `public/`, `src/assets/` — static and asset locations.

### Project-specific conventions
- Package manager: pnpm (lockfile `pnpm-lock.yaml` exists). Use `pnpm` when installing / running scripts in examples.
- File naming: React components use PascalCase and `.jsx` extensions (e.g., `ProjectRoom.jsx`).
- No TypeScript in this branch — `type: "module"` and plain `.jsx` files.
- Styling: global CSS in `src/index.css` and `src/App.css`. Tailwind-related deps are present in package.json — verify presence of `tailwind.config.js` before changing Tailwind config.
- Lint/format: `eslint` and `prettier` are configured (see `package.json` devDependencies). Use `npm run lint` / `pnpm lint` to check linting.

### Integration points & common gotchas
- 3D components (R3F / three) are side-effecty: avoid shallow refactors without testing the scene in the browser.
- Animations rely on `gsap` and may manipulate DOM/three objects — prefer incremental changes and live dev server testing.
- Deploy uses `gh-pages` (`npm run deploy` / `pnpm deploy`) which builds `dist` and pushes to `gh-pages` branch — double-check build output before running deploy.

### How to make common changes (examples)
- Add a new visual component:
  1. Create `src/components/MyFeature.jsx` with a default-exported React function component (PascalCase).
  2. Import styles in `App.jsx` or `index.css` as needed.
  3. Wire into `App.jsx` or a LandingPage component and test with `pnpm dev`.
- Edit a 3D scene (e.g., `ProjectRoom.jsx`): run dev server and test hot-reload frequently. If changing imports or three version behavior, run a full build (`pnpm build`) to catch bundler differences.

### Commands summary (use pnpm when possible)
- Install deps: `pnpm install` (or `npm install` if pnpm not available)
- Dev server: `pnpm dev`
- Build: `pnpm build`
- Preview built app: `pnpm preview`
- Lint: `pnpm lint`
- Deploy: `pnpm deploy` (uses `gh-pages` to publish `dist`)

### Where to be cautious
- There are no unit tests in the repo — rely on manual dev server checks for UI/3D changes.
- Tailwind-related packages exist in dependencies; check for a `tailwind.config.js` before changing class names or plugin config.

If anything here is missing or you want more detailed rules (commit messages, PR style, branch policy, required tests), tell me which area to expand and I will iterate.
