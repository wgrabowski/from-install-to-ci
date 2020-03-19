1. [intro](0-intro.md)
1. [nvm](1-nvm-managing-node-versions.md)
1. [npm and dependencies](2-npm-and-dependencies.md)
1. [linting](3-npm-and-dependencies.md)
1. [git hooks](4-git-hooks.md)
1. [Verify PR](5-verify-pr.md)
1. [CI/CD - what?](6-ci-part-1-what.md)
1. [CI/CD - how?](7-ci-part-2-how.md)
1. [summary](8-summary.md)

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
