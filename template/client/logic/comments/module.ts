import { Inject, Injectable } from 'vue-typedi'
import { Action, Mutation, State, Getter } from 'vuex-simple'

import { RawCommentType } from '~/logic/comments/models'
import CommentService from '~/logic/comments/services/api'
import { CommentType, CommentPayloadType } from '~/logic/comments/types'
import tokens from '~/logic/tokens'

@Injectable()
/**
 * Represents a typed Vuex module.
 *
 * @see https://vuex.vuejs.org/guide/modules.html
 * @see https://github.com/sascha245/vuex-simple
 */
export default class CommentsModule {
  // Dependencies

  @Inject(tokens.COMMENT_SERVICE)
  public service!: CommentService

  // State

  @State()
  public comments: CommentType[] = []

  // Getters

  @Getter()
  public get hasComments(): boolean {
    return Boolean(this.comments && this.comments.length > 0)
  }

  // Mutations

  @Mutation()
  public setComments(payload: RawCommentType[]): void {
    const updatedComments: CommentType[] = []

    for (const comment of payload.slice(0, 10)) {
      // We transform RawCommentType in CommentType here:
      updatedComments.push({ ...comment, 'rating': 0 })
    }

    this.comments = updatedComments
  }

  @Mutation()
  public updateRating({ commentId, delta }: CommentPayloadType): void {
    if (!this.comments) return

    const commentIndex = this.comments.findIndex((comment): boolean => {
      return comment.id === commentId
    })

    if (!this.comments || !this.comments[commentIndex]) return

    this.comments[commentIndex].rating += delta
  }

  // Actions

  @Action()
  public async fetchComments(): Promise<RawCommentType[]> {
    const commentsList = await this.service.fetchComments()
    this.setComments(commentsList)
    return commentsList
  }
}
