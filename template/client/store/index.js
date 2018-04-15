// @flow

import Vue from 'vue'

import comments from '~/logics/api/comments'
import * as mutationTypes from '~/types/mutations'
import type { Comment, State, RawComment } from '~/types'

function state (): State {
  return {
    comments: null
  }
}

const getters = {
  hasComments (state: State): boolean {
    return Boolean(state.comments && state.comments.length > 0)
  }
}

const mutations = {
  [mutationTypes.SET_COMMENTS]: (
    state: State, comments: Array<RawComment>
  ) => {
    const updatedComments: Array<Comment> = []

    for (const comment of comments.slice(0, 10)) {
      const newOne = {
        ...comment,
        rating: 0
      }
      updatedComments.push(newOne)
    }

    state.comments = updatedComments
  },

  [mutationTypes.UPDATE_RATING]: (
    state: State, { commentId, delta }: { commentId: number, delta: number }
  ) => {
    if (!state.comments) return

    const commentIndex = state.comments.findIndex((c: Comment) => {
      return c.id === commentId
    })

    if (!state.comments || !state.comments[commentIndex]) return

    state.comments[commentIndex].rating += delta
  }
}

const actions = {
  async fetchComments ({ commit }: any, app: Vue) {
    const data = await comments.fetchComments(app)
    commit(mutationTypes.SET_COMMENTS, data)

    return data
  }
}

export {
  state,
  getters,
  mutations,
  actions
}
