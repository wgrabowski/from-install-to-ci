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
