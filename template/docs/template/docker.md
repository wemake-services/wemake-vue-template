# Docker

We use [`docker`](https://www.docker.com/) to develop and test our application.
Because it is really easy!

## Prerequisites 

Before going any further make sure that 
you have `docker` installed on your machine.
It comes for [Mac, Linux, and Windows](https://www.docker.com/community-edition).

Minimal versions:

- `docker`: `18.02`
- `docker-compose`: `1.20`

## Developing

To start your development environment just run:

```bash
docker-compose up
```

That's it. You will see that your development server is up and running.

## Testing

To test your application run:

```bash
docker-compose run --rm vue yarn test
```

## Production

We use [`GitLab CI`](gitlab-ci.md) to build production ready `docker` images.

However, we do not 100% recommend to use `docker` for production in this case.
Because you need to answer some questions before doing it:

1. Are some raw static files just fine for me? 
   If so, just use `yarn generate`

2. Do I really need all the complexity that comes with `docker`? 
   If not, use `yarn start`

3. Can I deploy my application to some 3rd-party services? 
   Like: `now.sh`, `gh-pages`, `heroku` or so on. 
   If so, do not hesitate to do it

4. Do I really need to scale my server-side rendering? If not, use `yarn start`

All in all: if you have some complex private frontend 
with server-side rendering and complex infrastructure, 
then you might need `docker`.
