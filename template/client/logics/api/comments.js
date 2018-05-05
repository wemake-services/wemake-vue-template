// @flow

import to from 'await-to-js'

import type { Axios } from 'axios'
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
  * @param app.$axios: slightly modified `Axios` instance
  * @returns parsed response data
  */
  async fetchComments (
    { $axios }: { $axios: Axios }
  ): Promise<Array<RawCommentType>> {
    // Note, that $axios has some custom methods, that are not used on purpose
    // https://github.com/nuxt-community/axios-module#-features
    const [error, response] = await to($axios.get('comments'))
    maybeHandleError(error)
    return response.data
  }
}
