# from install to ci

Demo application for [presentation](notes/0-intro.md)

## Things you can play with:
### pre-commit hook
Pre-commit hook is enabled in this repo (via `husky` and `lint-staged`):
- To see how they work commit changes in ts and scss files from src.
- tslint with --fix flag is enabled for ts files
- jest will run tests affected by changed files (.i.e edit constants.ts and tests will run)
- stylelint with --fix flag will run on SCSS files

