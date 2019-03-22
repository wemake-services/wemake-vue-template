import { ActionContext, Store } from 'vuex'

import comments from '~/logics/api/comments'
import * as mutationTypes from '~/store/types'
import { StateType } from '~/types'

const actions = {
  async fetchComments (
    this: Store<StateType>,
    { commit }: ActionContext<StateType, StateType>,
  ) {
    const commentsList = await comments.fetchComments(this.$axios)
    commit(mutationTypes.SET_COMMENTS, commentsList)
    return commentsList
  },
}

export default actions
