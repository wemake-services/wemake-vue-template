import { Module } from 'vuex-simple'

import CommentsModule from '~/logic/comments/module'

/**
 * We use typed store with different modules inside.
 *
 * Root level store should only contain links to other modules.
 * It might have some utility or shared data in the root state.
 *
 * @see https://github.com/sascha245/vuex-simple#root-state
 */
export default class TypedStore {
  @Module()
  public comments = new CommentsModule()
}
