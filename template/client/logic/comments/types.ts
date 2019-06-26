import { RawCommentType } from '~/logic/comments/models'

// We add rating only on the client (for demo purposes)
export type CommentType = RawCommentType & {
  rating: number
}

export interface CommentPayloadType {
  commentId: number
  delta: number
}
