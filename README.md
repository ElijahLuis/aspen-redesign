# Aspen Redesign (CPS Front-End Prototype)

This project is a front-end prototype for the Aspen student information system, focused on modernizing the UI while maintaining compatibility with legacy CSS and backend logic. The redesign emphasizes responsive layouts, accessibility, and a smooth transition path from the existing system.

## 📁 Directory Structure

```
aspen-redesign/
├── images/
│   ├── favicon.ico
│   └── new-aspen-logo.png
├── prototype/
│   ├── pages/
│   ├── scripts/
│   └── styles/
├── research/
│   ├── analysis/
│   │   └── maps/
│   └── captures/
│       ├── css_captures/
│       ├── html_captures/
│       └── img_captures/
├── reference/
│   └── manifest.json
├── .gitignore
├── AGENTS.md
├── CONTRIBUTING.md
├── package-lock.json
├── package.json
├── README.md (**You are here!**)
```

## Assets

Project images and logos live in the `images/` folder at the repository root. A
light and dark version of the Aspen logo are provided. Use `images/new-aspen-
logo.png` in light mode and `images/new-aspen-logo-dark.png` when the dark them
e is active.

## Layout & Components

The layout system (`layout.css`, `components.css`) is mobile-first, using a grid and reusable widgets. Theme variables enable light/dark modes and fallback to legacy styles via `legacy-map.css`. Utility classes in `utils.css` provide spacing and flexbox helpers. Interactive widgets are organized under `prototype/scripts/`.

## Legacy Compatibility

Legacy UI fragments are tested with the new stylesheets. Conflicts and overrides are tracked in `research/analysis/css_conflicts.md`. The `research/` folder is the source of truth for mapping legacy Aspen UI to the prototype. Use it to:

- Identify overlapping CSS (see `css_conflicts.md`)
- Reference legacy classnames and behaviors
- Translate old patterns to modern CSS custom properties and utilities
- Prevent regressions in forms, navigation, and search

**Mapping examples:**

- `.listCellLastSelectionHighlight` → `--legacy-highlight`
- `c1Color`/`c1Background`/`c1Border` → `--legacy-c1`
- `c2Color`/`c2Background`/`c2Border` → `--legacy-c2`
- `c3Color`/`c3Background`/`c3Border` → `--legacy-c3`
- `.menuItemHighlight` → `--legacy-highlight`
- Navigation bar colors from `common-header.css` → `--legacy-dashboard`, `--legacy-myinfo`, `--legacy-student`, `--legacy-attendance`, `--legacy-gradebook`, `--legacy-planner`, `--legacy-quest`, `--legacy-pd`
- `.repositoryListClass` conflicts are resolved in `components.css` or `utils.css`

## Dummy Data Policy

All sample HTML uses either anonymized data or the developer’s own record. No third-party PHI is present.

## Build Instructions

Run the following commands to install dependencies and generate the manifest.  
If `npm run build:manifest` fails because `cheerio` is missing, make sure you ran `npm install` first:

```bash
npm install
npm run build:manifest
```

The resulting file will be created at `reference/manifest.json`.

