# Notes for student.html

## Structure
- Multi-tab layout inside a table wrapper. Navigation uses `c1Background navTabBackground` cells.
- Each view loads content into a central `<form>` (`contextListForm`).
- Candidate BEM block: `student-tabs` for the nav row; elements like `student-tabs__item`.

## Legacy Classes
- Uses `.reset_style_h1_top` for breadcrumb headers (see [css_conflicts.md](css_conflicts.md)).
- Heavy use of `.c1Background` for menu segments which overrides prototype colors.

## Scripts
- jQuery 3.5.1, jQuery UI, and numerous legacy helpers (`dynamicPickList.js`, `detailValidator.js`).
- CKEditor with `ckEditorSetup.js`.
- Accessibility helpers via `reader-accessibility.js`.
