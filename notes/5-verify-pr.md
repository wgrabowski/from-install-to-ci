# 5 - veryfing pull requests

You can setup CI and SCM systems to allow merging PR only when it is succesfully build.

Why?

- i.e. in Angular you can run AOT build which compiles templates and prevents ugly runtime errors (it's better to run in CI than locally as it takes some time)
- i.e. `jest --changedSince <git ref>` can run unit tests affected by changes that PR will bring to target branch
- other examples here
