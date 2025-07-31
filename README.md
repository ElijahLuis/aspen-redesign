# Aspen Redesign (CPS Front-End Prototype)

This project is a front-end prototype for the Aspen student information system, focused on modernizing the UI while maintaining compatibility with legacy CSS and backend logic. The redesign emphasizes responsive layouts, accessibility, and a smooth transition path from the existing system.

## 📁 Directory Structure

```
aspen-redesign/
├── images/
│   ├── favicon.ico
│   └── aspen-header-logo.png
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

Project images and logos live in the `images/` folder at the repository root.
The file `images/aspen-header-logo.png` serves as the Aspen logo in both light and dark themes.

## Color Palette

The prototype uses a human-centered palette to reinforce clarity and support:

| Color                | Hex       | Purpose |
|----------------------|----------|---------|
| Soft Teal            | `#73C6B6` | District base accents |
| Denim Blue           | `#4A90E2` | Primary interface color |
| Muted Coral Red      | `#F67280` | Health alerts and errors |
| Warm Cream           | `#FDF6EC` | Default page background |
| Goldenrod Yellow     | `#F9D342` | Highlights and buttons |
| Slate Purple         | `#A28DFF` | Alternate accent |
| Cool Mint            | `#B2F2BB` | Success confirmations |


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

# Aspen Redesign Project

## Structure

- All CSS is in `prototype/styles/` (layout, components, themes, utils, etc.)
- All JavaScript is in `prototype/scripts/components.js`
- All HTML pages are in `prototype/pages/`
- Images are in `images/`
- Research and reference in `research/`

## Guidelines

- **Centralize all styles and scripts** in external files. No inline or embedded `<style>` or `<script>` in HTML.
- **Use shared classes and modules** for all widgets and features.
- **Avoid code duplication** by reusing classes and JS modules.
- **Document new features** in this README or in a `docs/` folder.
- **Lint and format code** using Prettier and Stylelint.

## Linting & Formatting

- Run `npx prettier --write .` to format code.
- Run `npx stylelint "**/*.css"` to lint CSS.

## Adding Features

- Add new widgets as components in the main HTML pages.
- Add new styles to the appropriate CSS file.
- Add new JS to `components.js` or as a module.
- Document any new structure or conventions here or in `docs/`.

