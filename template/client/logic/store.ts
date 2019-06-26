import { Module } from 'vuex-simple'

// TODO: document

import CommentsModule from '~/logic/comments/module'

export default class TypedStore {
  @Module()
  public comments = new CommentsModule()
}
