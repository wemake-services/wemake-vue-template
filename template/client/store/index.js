// @flow

import type { ActionContext } from 'vuex'

import comments from '~/logics/api/comments'
import * as mutationTypes from '~/types/mutations'
import type {
  CommentType,
  CommentPayloadType,
  StateType,
  RawCommentType
} from '~/types'

function state (): StateType {
  return {
    comments: null
  }
}

const getters = {
  hasComments (state: StateType): boolean {
    return Boolean(state.comments && state.comments.length > 0)
  }
}

const mutations = {
  [mutationTypes.SET_COMMENTS]: (
    state: StateType, comments: Array<RawCommentType>
  ) => {
    const updatedComments: Array<CommentType> = []

    for (const comment of comments.slice(0, 10)) {
      const newOne = {
        ...comment,
        rating: 0 // try to comment out this line
      }
      updatedComments.push(newOne)
    }

    state.comments = updatedComments
  },

  [mutationTypes.UPDATE_RATING]: (
    state: StateType, { commentId, delta }: CommentPayloadType
  ) => {
    if (!state.comments) return

    const commentIndex = state.comments.findIndex((c: CommentType) => {
      return c.id === commentId
    })

    if (!state.comments || !state.comments[commentIndex]) return

    state.comments[commentIndex].rating += delta
  }
}

const actions = {
  async fetchComments (
    { commit, state }: ActionContext<StateType>
  ) {
    const data = await comments.fetchComments(this.$axios)
    commit(mutationTypes.SET_COMMENTS, data)

    // Uncomment next line to see typing in action:
    // console.log(state.comments, state.fake)

    return data
  }
}

export {
  state,
  getters,
  mutations,
  actions
}
