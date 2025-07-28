# Notes for student_membership.html

## Structure
- Enrollment info displayed using the standard student tabbed interface.
- Long grid tables show membership history; potential block `membership-table` with row elements.

## Legacy Classes
- Nav cells rely on `.c1Background`, a color class that conflicts with prototype variables.
- Page header uses `.reset_style_h1_top` (see [css_conflicts.md](css_conflicts.md)).

## Scripts
- Same base stack: jQuery, jQuery UI, `detailValidator.js`, and CKEditor setup.
- Additional grid helpers and menu scripts for report dropdowns.
