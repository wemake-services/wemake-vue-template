// @flow

import comments from '~/logics/api/comments'
import * as mutationTypes from '~/store/types'

import type { ActionContext } from 'vuex'
import type { StateType } from '~/types'

const actions = {
  async fetchComments ({
    commit,
    _state,
  }: ActionContext<StateType>) {
    const commentsList = await comments.fetchComments(this.$axios)
    commit(mutationTypes.SET_COMMENTS, commentsList)

    // Uncomment next line to see typing in action:
    // console.log(_state.comments, _state.fake)

    return commentsList
  },
}

export default actions
