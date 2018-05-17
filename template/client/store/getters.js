// @flow

import type {
  StateType
} from '~/types'

export const getters = {
  hasComments(state: StateType): boolean {
    return Boolean(state.comments && state.comments.length > 0)
  }
}
