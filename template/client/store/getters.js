// @flow

import type { StateType } from '~/types'

const getters = {
  hasComments (state: StateType): boolean {
    return Boolean(state.comments && state.comments.length > 0)
  },
}

export default getters
