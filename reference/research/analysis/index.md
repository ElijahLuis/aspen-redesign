# Notes for index.html

## Structure
- Full-page login table (`#fullTable`) uses nested `<table>` layout to center the form.
- `logonDetailContainer` wraps username and password fields; could map to a BEM block like `login-form`.
- Inline JS adjusts `#spanCell` height on window resize.

## Legacy Classes
- `.fullTable`, `.loginBackground`, and `.labelCell` control spacing.
- No direct conflicts noted in [css_conflicts.md](css_conflicts.md).

## Scripts
- jQuery 3.5.1 plus `jquery.qtip` for tooltips.
- Core utilities: `jquery-common.js`, `common.js`, `dateTime.js`.
- Google Analytics and `analyticsCore.js` for tracking.
