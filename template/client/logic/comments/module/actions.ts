import { ActionTree } from 'vuex'

import comments from '~/logic/comments/services/api'
import * as reducers from '~/logic/comments/module/reducers'
import { StateType, RawCommentType } from '~/logic/comments/types'

export const actions: ActionTree<StateType, StateType> = {
  async fetchComments ({ commit }): Promise<RawCommentType[]> {
    const commentsList = await comments.fetchComments(this.$axios)
    commit(reducers.SET_COMMENTS, commentsList)
    return commentsList
  },
}
