import { MutationTree } from 'vuex'

import * as reducers from '~/logic/comments/module/reducers'

import {
  CommentType,
  CommentPayloadType,
  StateType,
  RawCommentType,
} from '~/logic/comments/types'

export const mutations: MutationTree<StateType> = {
  [reducers.SET_COMMENTS]: (
    state,
    comments: RawCommentType[],
  ): void => {
    const updatedComments: CommentType[] = []

    for (const comment of comments.slice(0, 10)) {
      updatedComments.push({ ...comment, 'rating': 0 })
    }

    state.comments = updatedComments
  },

  [reducers.UPDATE_RATING]: (
    state,
    { commentId, delta }: CommentPayloadType,
  ): void => {
    if (!state.comments) return

    const commentIndex = state.comments.findIndex((comment): boolean => {
      return comment.id === commentId
    })

    if (!state.comments || !state.comments[commentIndex]) return

    state.comments[commentIndex].rating += delta
  },
}
