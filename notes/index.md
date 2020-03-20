1. [intro](0-intro.md)
1. [nvm](1-nvm-managing-node-versions.md)
1. [npm and dependencies](2-npm-and-dependencies.md)
1. [linting](3-npm-and-dependencies.md)
1. [git hooks](4-git-hooks.md)
1. [Verify PR](5-verify-pr.md)
1. [CI/CD - what?](6-ci-part-1-what.md)
1. [CI/CD - how?](7-ci-part-2-how.md)
1. [summary](8-summary.md)

# From install to CI

A few things that every front-end developer can't apart from writing code.

Some tools and techniques that you can use with your team to improve and automate quality checking and build process of your frontend application (regardless of framework).
1. [intro](0-intro.md)
1. [nvm](1-nvm-managing-node-versions.md)
1. [npm and dependencies](2-npm-and-dependencies.md)
1. [linting](3-npm-and-dependencies.md)
1. [git hooks](4-git-hooks.md)
1. [Verify PR](5-verify-pr.md)
1. [CI/CD - what?](6-ci-part-1-what.md)
1. [CI/CD - how?](7-ci-part-2-how.md)
1. [summary](8-summary.md)

# 1 - nvm

> [nvm](https://github.com/nvm-sh/nvm) is a version manager for node.js, designed to be installed per-user, and invoked per-shell.
> nvm works on any POSIX-compliant shell (sh, dash, ksh, zsh, bash), in particular on these platforms: unix, macOS, and windows WSL.

## With nvm you can:

- work with multiple project with different node versions (i.e older Angular and new Angular versions etc)
- test code on multiple node versions

### essential usage

`nvm install <version>` and `nvm use <version>`

## .nvmrc

File containing name of node version

```
lts/erbium
```

`nvm use` will read this file and switch to desired verison

## CI server

- ask DevOps/admin to install nvm and few lts node versions
- switch between them any way you like without need for support tickets
1. [intro](0-intro.md)
1. [nvm](1-nvm-managing-node-versions.md)
1. [npm and dependencies](2-npm-and-dependencies.md)
1. [linting](3-npm-and-dependencies.md)
1. [git hooks](4-git-hooks.md)
1. [Verify PR](5-verify-pr.md)
1. [CI/CD - what?](6-ci-part-1-what.md)
1. [CI/CD - how?](7-ci-part-2-how.md)
1. [summary](8-summary.md)

# 2 - npm and dependencies

## npx - npm package runner

Executes `<command>` either from a local node_modules/.bin, or from a central cache, installing any packages needed in order for `<command>` to run.

## [ npm audit](https://docs.npmjs.com/cli/audit) - a security audit

> Scan your project for vulnerabilities and automatically install any compatible updates to vulnerable dependencies

### essential usage

`npm audit` - scan dependencies for vulnerabilites

`npm audit -audit-level=(low|moderate|high|critical)]` control level of detecte vulnerbilities

`npm audit fix` - fix vulnerabilities (update affected dependencies)

## npm audit on CI

- you can set your CI to fail job when audit finds something i.e high and critical level vulnerabilities
- what if you can't update dependency (don't) or you just want to ignore some warning:
  [npm-audit-resolver](https://www.npmjs.com/package/npm-audit-resolver)
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
1. [intro](0-intro.md)
1. [nvm](1-nvm-managing-node-versions.md)
1. [npm and dependencies](2-npm-and-dependencies.md)
1. [linting](3-npm-and-dependencies.md)
1. [git hooks](4-git-hooks.md)
1. [Verify PR](5-verify-pr.md)
1. [CI/CD - what?](6-ci-part-1-what.md)
1. [CI/CD - how?](7-ci-part-2-how.md)
1. [summary](8-summary.md)

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
1. [intro](0-intro.md)
1. [nvm](1-nvm-managing-node-versions.md)
1. [npm and dependencies](2-npm-and-dependencies.md)
1. [linting](3-npm-and-dependencies.md)
1. [git hooks](4-git-hooks.md)
1. [Verify PR](5-verify-pr.md)
1. [CI/CD - what?](6-ci-part-1-what.md)
1. [CI/CD - how?](7-ci-part-2-how.md)
1. [summary](8-summary.md)

# 5 - veryfing pull requests

You can setup CI and SCM systems to allow merging PR only when it is succesfully build.

Why?

- i.e. in Angular you can run AOT build which compiles templates and prevents ugly runtime errors (it's better to run in CI than locally as it takes some time)
- i.e. `jest --changedSince <git ref>` can run unit tests affected by changes that PR will bring to target branch
- other examples here
1. [intro](0-intro.md)
1. [nvm](1-nvm-managing-node-versions.md)
1. [npm and dependencies](2-npm-and-dependencies.md)
1. [linting](3-npm-and-dependencies.md)
1. [git hooks](4-git-hooks.md)
1. [Verify PR](5-verify-pr.md)
1. [CI/CD - what?](6-ci-part-1-what.md)
1. [CI/CD - how?](7-ci-part-2-how.md)
1. [summary](8-summary.md)

# 5 - CI - what to do with frontend application in CI

CI build is last place before code is shipped to environemnt and it integrates different changes so it is good place to check everything one more time before building.

What can and should be done in CI/CDbuild process (in my opinion):

1. select node version (`nvm use`) from `.nvmrc`
2. install npm dependencies
3. audit npm dependencies
4. lint code (eslint,stylelint,tslint,jsonlint)
5. run tests (with raport generation to track changes in time)
6. build application
7. deploy application to environment/push container image to AWS/publish npm package etc
8. repeat steps 6 & 7 for as many environments as needed
9. run static code analysis with Sonar
10. Notify team about success/error/update tracking system etc

Test reports, test coverage report and sonar report can give hard data that can be presented to client - i.e. to negotiate time for reducing technical depts, to measure quality etc.

All that things should be automated, whole process should be transparent and easily trackable by everyone - so people can react when something is going wrong

Also other things can and should be done like running automated tests in separated environemtn before deploying to UAT/staging/prod or triggering other actions.
1. [intro](0-intro.md)
1. [nvm](1-nvm-managing-node-versions.md)
1. [npm and dependencies](2-npm-and-dependencies.md)
1. [linting](3-npm-and-dependencies.md)
1. [git hooks](4-git-hooks.md)
1. [Verify PR](5-verify-pr.md)
1. [CI/CD - what?](6-ci-part-1-what.md)
1. [CI/CD - how?](7-ci-part-2-how.md)
1. [summary](8-summary.md)

# 5 - CI - how to setup CI/CD process (from Jenkins experience)

## Pipeline vs multiple jobs

All CI/CD tasks can be defined in single job but often there is need to i.e.

- build different versions of application separatedly (multiple branches)
- some steps depend on other tasks (automated taks)
- the same version have to be deployed to multiple environemnts

With multibranch pipeline CI/CD process consist of steps that keep order and dependency between them, can be run on multiple branches in one job definition (in Jenkins sense) and allow to build application once and deploy it to multiple environemnts in single workspace

## Pipeline as code

Whole CI/CD process pipeline can be defined as code and stored in version control next to application code:

- portability
- versioning of configuration
- tracking changes
- developers can create/change CI/CD process without DevOps/admin assistance (they only provide initial setup)
- steps can be parallelized

All CI/CD services provide that options (Jenkins, Bitbucket Pipelines, Travis etc)
1. [intro](0-intro.md)
1. [nvm](1-nvm-managing-node-versions.md)
1. [npm and dependencies](2-npm-and-dependencies.md)
1. [linting](3-npm-and-dependencies.md)
1. [git hooks](4-git-hooks.md)
1. [Verify PR](5-verify-pr.md)
1. [CI/CD - what?](6-ci-part-1-what.md)
1. [CI/CD - how?](7-ci-part-2-how.md)
1. [summary](8-summary.md)

# 8 summary

1. Get best of tools you already use (npm, git, linters)
2. Check early for errors
3. Automate what you can (lint --fix, git hooks, prettier, PR verification, CI/CD)
4. Don't be afraid to learn new things and tools
5. Don't leave everyting to DevOps - learn some 'magic' yourself (frontend ops?)
