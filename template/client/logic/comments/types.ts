// This is a definition of domain model for `comments` context.

export interface RawCommentType {
  id: number;
  body: string;
  email: string;
}

// We add rating only on the client (for demo purposes)
export type CommentType = RawCommentType & {
  rating: number;
}

export interface CommentPayloadType {
  commentId: number;
  delta: number;
}

export interface StateType {
  comments: CommentType[];
}
