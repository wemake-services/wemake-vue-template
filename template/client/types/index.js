// @flow

export type RawComment = {
  id: number,
  body: string,
  email: string,
};

// We add rating only on the client (for demo purposes)
export type Comment = RawComment & {
  rating: number
};

export type State = {
  comments: ?Array<Comment>
};
