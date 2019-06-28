import { Token } from 'vue-typedi'

/**
 * Here we generate some unique keys to bind our values to.
 *
 * This tokens are unique representation of your dependencies inside the app.
 *
 * @see https://github.com/sascha245/vue-typedi
 * @see https://github.com/typestack/typedi
 */
export default {
  // Comments service:
  'COMMENT_SERVICE': new Token('comment-service'),

  // Axios instance:
  'AXIOS': new Token('axios'),
}
