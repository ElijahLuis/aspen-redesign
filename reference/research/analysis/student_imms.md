# Notes for student_imms.html

## Structure
- Immunization data loaded within the common student tab layout.
- Table-based form uses many `<td>` elements for alignment; candidate BEM block `imms-table`.

## Legacy Classes
- `.c1Background` applied to menu segments and nav cells (see [css_conflicts.md](css_conflicts.md)).
- `.reset_style_h1_top` used in page header.

## Scripts
- Large script stack: jQuery, jQuery UI, plus health specific helpers like `dynamicPickList.js`.
- CKEditor scripts for notes entry.
- Analytics and accessibility modules.
