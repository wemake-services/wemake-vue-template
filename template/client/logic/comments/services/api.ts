import { AxiosInstance } from 'axios'
import * as ts from 'io-ts'
import * as tPromise from 'io-ts-promise'
import { Service, Container } from 'vue-typedi'

import { RawComment, RawCommentType } from '~/logic/comments/models'
import tokens from '~/logic/tokens'

@Service(tokens.COMMENT_SERVICE)
/**
 * Service class to fetch comments from the API.
 *
 * Is injected into the module context to be used.
 * Should not be used as-is, only as a part of the module.
 */
export default class CommentService {
  /**
   * That's an example of how to inject dependencies into the service.
   *
   * This is actually overly-complicated.
   * And usually `@Inject` decorator is enough.
   * But, since `$axios` is injected via `Nuxt`,
   * we have two conflicting IoC and DI implementations.
   * That's a fix!
   *
   * @returns Global `axios` instance from the IoC container.
   */
  protected get $axios(): AxiosInstance {
    return Container.get(tokens.AXIOS) as AxiosInstance
  }

  /**
   * Fetches comments from the remote API.
   *
   * Uses runtime type validation to make sure
   * that types are up-to-date with the server.
   *
   * @see https://github.com/aeirola/io-ts-promise.
   *
   * @returns Parsed response data.
   */
  public async fetchComments(): Promise<RawCommentType[]> {
    // Note, that $axios has some custom methods, that are not used on purpose
    // https://github.com/nuxt-community/axios-module#-features
    const response = await this.$axios.get('comments')
    return tPromise.decode(ts.array(RawComment), response.data)
  }
}
