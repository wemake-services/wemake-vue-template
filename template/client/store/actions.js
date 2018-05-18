// @flow

import comments from '~/logics/api/comments'
import * as mutationTypes from '~/store/types'

import type { ActionContext } from 'vuex'
import type { StateType } from '~/types'

const actions = {
  async fetchComments ({
    commit,
    state
  }: ActionContext<StateType>) {
    const data = await comments.fetchComments(this.$axios)
    commit(mutationTypes.SET_COMMENTS, data)

    // Uncomment next line to see typing in action:
    // console.log(state.comments, state.fake)

    return data
  }
}

export default actions
