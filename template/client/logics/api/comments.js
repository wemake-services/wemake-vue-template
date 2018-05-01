// @flow

import Vue from 'vue'
import to from 'await-to-js'

import type { RawCommentType } from '~/types'

/**
* Throws error when there is one.
*
* @param error: error instance to be thrown
*/
function maybeHandleError (error: ?Error): void {
  if (error) {
    throw new Error(error)
  }
}

export default {
  /**
  * Fetches comments from the remote API.
  *
  * @param app: injected `Vue` instance to make API calls with correct `$axios`
  * @returns parsed response data
  */
  async fetchComments (app: Vue): Promise<Array<RawCommentType>> {
    const [error, response] = await to(app.$axios.get('comments'))
    maybeHandleError(error)
    return response.data
  }
}
