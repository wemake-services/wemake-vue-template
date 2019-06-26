import { CommentType } from '~/logic/comments/types'

// TODO: document

export interface StateType {
  // Module:
  comments: {
    // Module's state:
    comments: CommentType[]
  }
}
