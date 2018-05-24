# Production

When going to production you have several options with this template.
Let's cover all of them.

Before going to production make sure, 
that you have checked your modules' size with `yarn build --analyze`.

## Nuxt deployment modes

There are two [deployment modes](https://nuxtjs.org/api/configuration-mode/) 
available for `nuxt` deployments.

Use `spa` only when you do not need server-side rendering.
By default, we use `universal` mode.

You can also provide `--spa` flag via command line: `yarn build --spa`.

## Static files

The easiest way to deploy your application is just pushing some static files
to your web server.

Use `yarn generate` to create static files. Then just deploy them.

## Native 

You can create a new virtual server, install `node` there, 
then configure [`nginx`](https://nuxtjs.org/faq/nginx-proxy).

There are a lot of tutorials about it. Here's [an example][do-example].

## Docker

We have already mentioned some [downsides](docker.md#production) 
of `docker` deployment.
But sometimes you really need the whole power 
of `nuxt` and its server-side rendering.
Or maybe you already have a micro-services architecture.

This way you already have the basics of the `docker` deployment.
It may be wise to add [`pm2`](http://pm2.keymetrics.io/) within `docker`, 
using [`process.yml`][process.yml].

We [used to have][docker-pipeline] 
the full `docker` production pipeline configured out of the box, 
but it was too confusing for other people.
So, we removed it.

One more thing. Check out our [backend template](https://github.com/wemake-services/wemake-django-template). 

### Extending GitLab CI to run a deployment

`GitLab CI` can run deploys for you. [Check it out](https://docs.gitlab.com/ee/ci/environments.html).

## Other methods

Very easy. Some of them are totally free. 

- [`now.sh`](https://nuxtjs.org/faq/now-deployment)
- [`heroku`](https://nuxtjs.org/faq/heroku-deployment)
- [`github`](https://nuxtjs.org/faq/github-pages)

[do-exmaple]: https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04
[docker-pipeline]: https://github.com/wemake-services/wemake-vue-template/blob/90197466fa17b9fb02a0936da04f5b0b53d2d054/template/docker/docker-compose.prod.yml
[process.yml]: http://pm2.keymetrics.io/docs/usage/application-declaration/
