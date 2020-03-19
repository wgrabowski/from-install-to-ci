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
