# Contributing Guide

This prototype follows a simple naming convention based on BEM (Block__Element--Modifier).

## Blocks
- `.widget`, `.find-bar`, `.button-menu`

## Elements
- double underscore to denote child elements: `.widget__header`, `.widget__body`, `.find-bar__filters`

## Modifiers
- double hyphen indicates a variant: `.status-pill--warn`, `.table--dense`

Use semantic HTML where possible and apply utility classes from `utils.css` for common spacing or flex layout needs. Keep new classes lowercase and hyphenated.
