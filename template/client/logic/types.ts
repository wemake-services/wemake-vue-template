import { CommentType } from '~/logic/comments/types'

/**
 * We use this state type to enforce the same structure with `vuex-simple`.
 *
 * There are places where we use `Store<StateType>` and it cannot be changed.
 * This is a temporary solution.
 *
 * @see https://github.com/sascha245/vuex-simple/issues/30
 */
export interface StateType {
  // Module:
  comments: {
    // Module's state:
    comments: CommentType[]
  }
}
