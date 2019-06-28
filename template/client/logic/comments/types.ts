/**
 * These are inner types, they are only used inside the client.
 *
 * If your exchange some information with a server - make it a model.
 * And place it in `/models.ts` file.
 */

import { RawCommentType } from '~/logic/comments/models'

// We add rating only on the client (for demo purposes)
export type CommentType = RawCommentType & {
  rating: number
}

export interface CommentPayloadType {
  commentId: number
  delta: number
}
