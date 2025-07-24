# Health.css Research
This file defines Aspen’s "urban" color palette, last updated in 2003.

Table goes by Class / Color / Description.

- <span style="color: #98293E;">**Main Accent (dark rose/maroon)**</span>
    - .c1Color / .c1Background / .c1Border #98293E   

- <span style="color: #AD4D5F;">**Secondary Accent (muted red-pink)**</span>
    - .c2Color / .c2Background / .c2Border #AD4D5F

- <span style="color: #5C0000;">**Tertiary/Alert (deep blood red)**</span>
    - .c3Color / .c3Background / .c3Border #5C0000	

These are manually repeated in separate classes for:
- color
- background-color
- border-color
- border-sides (e.g. c2Border-left).

<span style="color: #EABBC4">**Pale pink**</span> (`#EABBC4`) is used to:
- Highlight hovered menu items
- Visually mark list cells you last interacted with
- No animation, no transitions. Hard swaps.

## Notes:
- Raw, repetitive static styles. 
- No CSS variables, no SCSS nesting, no dark/light mode.