import { ActionTree, ActionContext, Store } from 'vuex'

import comments from '~/logic/comments/services/api'
import * as reducers from '~/logic/comments/module/reducers'
import { StateType } from '~/logic/comments/types'

export const actions: ActionTree<StateType, StateType> = {
  async fetchComments (
    this: Store<StateType>,
    { commit }: ActionContext<StateType, StateType>,
  ) {
    const commentsList = await comments.fetchComments(this.$axios)
    commit(reducers.SET_COMMENTS, commentsList)
    return commentsList
  },
}
