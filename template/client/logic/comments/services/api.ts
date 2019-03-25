import { AxiosInstance } from 'axios'
import { RawCommentType } from '~/logic/comments/types'

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
    const response = await $axios.get<RawCommentType[]>('comments')
    return response.data
  },
}

export default methods
