# 4 - [git-hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)

> Git has a way to fire off custom scripts when certain important actions occur. There are two groups of these hooks: client-side and server-side. Client-side hooks are triggered by operations such as committing and merging, while server-side hooks run on network operations such as receiving pushed commits. You can use these hooks for all sorts of reasons.

This can help you make sure that no crap is commited or pushed

## husky

[husky](https://www.npmjs.com/package/husky)
Hooks can be defined in code and shared across team:

- add custom hooks from your package json

```
"precommit":"something",
"prepush":"somehting else"
```

- install husky and it will add it to your `.git/hooks`

## pre-commit

Commits are generally small (in theory) so it is good idea to check commited files:

- lint with respective linter \* even auto-fix fixable errors and update commit
- run unit tests affected by commit (i.e. `jest --findRelatedTests <commited files>`)
- format code (i.e. with Prettier and update commit)

### [lint-staged](https://www.npmjs.com/package/lint-staged)

> Run linters against staged git files and don't let 💩 slip into your code base!

- define what to do with witch files in `.linstagedrc` file.
- run in pre-commit hook using husky

## commit-msg

You can check commit message (provided by developer) i.e. if reference to ticket is included

## pre-push

Whole code is pushed so this is place to do something with it before it goes to remote repo (i.e lint all files, run all tests or anything that suits you).

You can also i.e. verify if code is pushed to the right place
