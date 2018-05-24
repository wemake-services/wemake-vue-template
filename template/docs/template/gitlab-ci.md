# GitLab CI

We use [GitLab](https://docs.gitlab.com/ee/README.html) to store our code
and [GitLab CI](https://docs.gitlab.com/ee/ci/) to run tests.

We use GitLab CI to build our containers, test it,
and store them in the internal registry.

These images are then pulled into the production servers.

## Usage with GitHub

You can store your code inside `GitHub` with no problems.
Just learn how to configure `GitLab CI` [to be used](https://about.gitlab.com/features/github/) with `GitHub`.

## Configuration

All configuration is done inside `.gitlab-ci.yml`.

## Pipelines

We have two pipelines configured: for `master` and other branches.
That's how it works: we only run testing for feature branches and do the whole
building/testing/deploying process for the `master` branch.

This allows us to speed up the development process.

## Secret variables

If some real secret variables are required, then you can use [GitLab secrets](https://docs.gitlab.com/ee/ci/variables/#secret-variables).
And these kinds of variables are required *most* of the time.

See `configuration.md` on how to use `dump-env` and `gitlab-ci` together.

## Further reading

- [Container Registry](https://gitlab.com/help/user/project/container_registry)
- [Gitlab CI/CD](https://about.gitlab.com/features/gitlab-ci-cd/)
