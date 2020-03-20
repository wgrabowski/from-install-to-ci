1. [intro](0-intro.md)
1. [nvm](1-nvm-managing-node-versions.md)
1. [npm and dependencies](2-npm-and-dependencies.md)
1. [linting](3-linters.md)
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
