# Notes for student_details.html

## Structure
- Similar tabbed layout as `student.html` but focused on address details.
- Form `personAddressDetailForm` posts changes back to the server.
- Candidate component: `detail-form` block with elements for field rows.

## Legacy Classes
- Header uses `.reset_style_h1_top` which conflicts with styles noted in [css_conflicts.md](css_conflicts.md).
- Navigation cells rely on `.c1Background` for color, overriding theme variables.

## Scripts
- Same script stack as the student list: jQuery, jQuery UI, `detailValidator.js`.
- CKEditor setup plus comment bank scripts.
- Analytics and accessibility scripts included at bottom.
