// @flow

import Vue from 'vue'
import to from 'await-to-js'

import type { RawComment } from '~/types'

function maybeHandleError (error: ?Error) {
  if (error) {
    throw new Error(error)
  }
}

export default {
  async fetchComments (app: Vue): Promise<Array<RawComment>> {
    const [error, response] = await to(app.$axios.get('comments'))
    maybeHandleError(error)
    return response.data
  }
}
