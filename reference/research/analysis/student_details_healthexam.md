# Notes for student_details_healthexam.html

## Structure
- Health exam records presented in the same tabbed shell as other detail pages.
- Fields appear in long tables; could translate into a BEM block like `exam-form` with `exam-form__row`.

## Legacy Classes
- Uses `.c1Background` on nav tabs, causing color conflicts documented in [css_conflicts.md](css_conflicts.md).
- Breadcrumb heading again styled with `.reset_style_h1_top`.

## Scripts
- Mirrors `student_details.html` — jQuery stack, CKEditor, and `detailValidator.js`.
- Additional form helpers from `dynamicPickList.js` and `dependencyHandler.js`.
