# 3 - static code analysis - linters

> Linters prevent errors and keep code consistent with agreed code-style

## tslint, eslint, stylelint

no need to introduce them, but things worth mention in this presentation:

- variety of plugins for naming conventions - less discussion in code review about names of things
- [https://github.com/simonsmith/stylelint-selector-bem-pattern] - you can set BEM'like rules for CSS selector naming (SUIT also supported)
- framework-specific plugins for naming conventions (i.e. Angular)
- grouping and sorting imports
  This helps automating checking naming conventions consistency with assumed code-style (less discussion, less rejected pull requests etc.)

## not only IDE

Following features are good for pre-commit hook:

- all linters have **fix** options and **fixable rules**
- can take list of files as input argument
