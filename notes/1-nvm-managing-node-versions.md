1. [intro](0-intro.md)
1. [nvm](1-nvm-managing-node-versions.md)
1. [npm and dependencies](2-npm-and-dependencies.md)
1. [linting](3-linters.md)
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
