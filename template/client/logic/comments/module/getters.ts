import { GetterTree } from 'vuex'

import { StateType } from '~/logic/comments/types'

export const getters: GetterTree<StateType, StateType> = {
  hasComments (state: StateType): boolean {
    return Boolean(state.comments && state.comments.length > 0)
  },
}
