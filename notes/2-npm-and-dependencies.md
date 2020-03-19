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
