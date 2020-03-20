1. [intro](0-intro.md)
1. [nvm](1-nvm-managing-node-versions.md)
1. [npm and dependencies](2-npm-and-dependencies.md)
1. [linting](3-linters.md)
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
