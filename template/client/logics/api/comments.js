// @flow

import to from 'await-to-js'

import type { Axios, $AxiosError, $AxiosXHR } from 'axios'
import type { RawCommentType } from '~/types'

/**
* Throws error when there is one.
*
* @param error - Error instance to be thrown.
*/
function maybeHandleError <T> (error: ?$AxiosError<T>): void {
  if (error) {
    throw new Error(error)
  }
}

export default {
  /**
  * Fetches comments from the remote API.
  *
  * @param app - Injected Vue instance to make API calls with correct `$axios`.
  * @param app.$axios - Slightly modified `Axios` instance.
  * @throws { $AxiosError } If there is one.
  * @returns Parsed response data.
  */
  async fetchComments (
    { $axios }: { $axios: Axios }
  ): Promise<Array<RawCommentType>> {
    // Note, that $axios has some custom methods, that are not used on purpose
    // https://github.com/nuxt-community/axios-module#-features
    const [error, response]: [
      ?$AxiosError<empty>,
      $AxiosXHR<Array<RawCommentType>>
    ] = await to($axios.get('comments'))

    // Uncomment next line to see typing error:
    // console.log(response.data[0].fake)

    maybeHandleError(error)
    return response.data
  }
}
