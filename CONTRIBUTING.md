# Contributing Guide

This prototype follows a simple naming convention based on BEM (Block__Element--Modifier).

## Blocks
- `.widget`, `.find-bar`, `.button-menu`

## Elements
- double underscore to denote child elements: `.widget__header`, `.widget__body`, `.find-bar__filters`

## Modifiers
- double hyphen indicates a variant: `.status-pill--warn`, `.table--dense`

Use semantic HTML where possible and apply utility classes from `utils.css` for common spacing or flex layout needs. Keep new classes lowercase and hyphenated.

## Assets

Reference images from the top-level `images/` directory. Within HTML files inside
`prototype/pages/` use the relative path `../../images/`. Dark mode should load
`/images/new-aspen-logo-dark.png` while light mode uses `/images/new-aspen-logo.png`.

## Folder Conventions

The former `src/` directory has been replaced with `prototype/`. HTML lives in
`prototype/pages/`, scripts in `prototype/scripts/`, and stylesheets in
`prototype/styles/`.

## BEM Patterns

New layouts introduce blocks like `layout-wrapper` and `form-section` with
modifiers such as `form-actions--sticky` or elements like
`form-section__title`. Follow the `Block__Element--Modifier` style and keep
class names descriptive.
