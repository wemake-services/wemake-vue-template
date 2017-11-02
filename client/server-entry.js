import { createApp } from './app'

export default (context) => {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp()
    router.push(context.url)

    context.meta = {
      inject: function () {
        Object.assign(this, app.$meta().inject())
      }
    }

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      if (matchedComponents.length === 0) {
        // eslint-disable-next-line prefer-promise-reject-errors
        return reject({ code: 404 })
      }
      // Call fetchData hooks on components matched by the route.
      // A preFetch hook dispatches a store action and returns a Promise,
      // which is resolved when the action is complete and store state has been
      // updated.
      Promise.all(matchedComponents.map((c) => {
        if (c.asyncData) {
          return c.asyncData({
            store,
            route: router.currentRoute
          })
        }
      })).then(() => {
        // After all preFetch hooks are resolved, our store is now
        // filled with the state needed to render the app.
        // Expose the state on the render context, and let the request handler
        // inline the state in the HTML response. This allows the client-side
        // store to pick-up the server-side state without having to duplicate
        // the initial data fetching on the client.
        context.state = store.state
        resolve(app)
      }).catch(reject)
    }, reject)
  })
}
