// @flow

export type RawCommentType = {
  id: number,
  body: string,
  email: string
}

// We add rating only on the client (for demo purposes)
export type CommentType = RawCommentType & {
  rating: number
}

export type CommentPayloadType = {
  commentId: number,
  delta: number
}

export type StateType = {
  comments: ?Array<CommentType>
}
