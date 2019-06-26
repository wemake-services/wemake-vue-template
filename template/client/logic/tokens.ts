import { Token } from 'vue-typedi'

// TODO: document

// Generate some unique keys to bind our values to:
export default {
  // Whole store:
  'STORE': new Token('store'),

  // Comments service:
  'COMMENT_SERVICE': new Token('comment-service'),

  // Axios instance:
  'AXIOS': new Token('axios'),
}
