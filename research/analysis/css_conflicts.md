# CSS Conflict Notes

The following overlapping class definitions were detected in `research/captures/css_captures`:

- `.repositoryListClass` — appears in **common-header.css** and **myResources.css** with different height values.
- `.reset_style_h1` and `.reset_style_h1_top` — defined in **common-mo.css** and **myResources.css**.
- `.listCellLastSelectionHighlight` — defined in **common-mo.css** and **health.css**.
- `.ui-accordion-header` — present in **common-mo.css** and **jquery-ui-1.12.1.min.css**.
- `.disabled` — rules exist in **common-header.css** and **common-mo.css**.

These overlaps may cause inconsistent styling when legacy sheets are combined.

## July 2025 testing
Loaded legacy student table fragment inside the new layout. Observed that `.button` and `.widget` share styles with different margins. Legacy `.button` required higher specificity; mapped with `legacy-map.css`.

Theme variables resolved correctly except for `.c1Background` elements, which override our dark mode values. Documented under `legacy-map.css` for future fix.
