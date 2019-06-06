import { AxiosInstance } from 'axios'
import * as ts from 'io-ts'
import * as tPromise from 'io-ts-promise'

import { RawComment, RawCommentType } from '~/logic/comments/types'

const methods = {
  /**
   * Fetches comments from the remote API.
   *
   * @param $axios - Slightly modified `Axios` instance from nuxt-axios module.
   * @returns Parsed response data.
   */
  async fetchComments ($axios: AxiosInstance): Promise<RawCommentType[]> {
    // Note, that $axios has some custom methods, that are not used on purpose
    // https://github.com/nuxt-community/axios-module#-features
    const response = await $axios.get('comments')
    return tPromise.decode(ts.array(RawComment), response.data)
  },
}

export default methods
