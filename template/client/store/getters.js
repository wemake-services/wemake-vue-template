// @flow

import type { StateType } from '~/types'

export default {
  hasComments (state: StateType): boolean {
    return Boolean(state.comments && state.comments.length > 0)
  }
}
