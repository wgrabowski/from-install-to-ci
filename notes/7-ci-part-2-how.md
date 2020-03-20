1. [intro](0-intro.md)
1. [nvm](1-nvm-managing-node-versions.md)
1. [npm and dependencies](2-npm-and-dependencies.md)
1. [linting](3-linters.md)
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
