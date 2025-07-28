# Aspen Redesign (CPS Front-End Prototype)
This project explores a modernized front‑end for the Aspen student information system. The goal is to create responsive, accessible pages while remaining compatible with legacy CSS and backend logic.

## Folders
- `prototype/` – HTML, CSS and JS for the redesign
- `research/` – capture notes and compatibility testing

## Layout & Components
The new layout framework (`layout.css` and `components.css`) provides a mobile‑first grid and reusable widgets. `home.html` shows the first working district view using these styles. Theme variables support light and dark modes with fallback to legacy styles via `legacy-map.css`.

Utility classes in `utils.css` offer margin, padding, and flex helpers. Future interactive widgets will live under `prototype/scripts/`.

## Compatibility
Captured legacy fragments are tested against the new sheets. Conflicts and overrides are logged in `research/analysis/css_conflicts.md`.
Codex should treat the research/ folder as the authoritative mapping layer between legacy Aspen UI and the new prototype. 
Use its contents to:
- Understand overlapping CSS definitions (research/analysis/css_conflicts.md)
- Reference legacy classnames and their visual behavior
- Translate design patterns into modern equivalents using custom properties and layout utilities
- Avoid style or behavior regressions when matching form inputs, search bars, or navigation behaviors

For example:
- .listCellLastSelectionHighlight → mapped to --legacy-highlight
- c1Color / c1Background / c1Border → mapped to --legacy-c1
- c2Color / c2Background / c2Border (+ left/top) → mapped to --legacy-c2
- c3Color / c3Background / c3Border → mapped to --legacy-c3
- .menuItemHighlight → mapped to --legacy-highlight
- Navigation bar colors from `common-header.css` →
  `--legacy-dashboard`, `--legacy-myinfo`, `--legacy-student`,
  `--legacy-attendance`, `--legacy-gradebook`, `--legacy-planner`,
  `--legacy-quest`, `--legacy-pd`
- .repositoryListClass conflicts → noted for resolution in components.css or utils.css

## Dummy Data Policy
All captured HTML reflects either zeroed-out student data or the developer's own record. No third-party PHI is included.
