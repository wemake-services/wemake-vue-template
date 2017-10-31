// @flow

import * as types from './types'
import type { State, Item } from './state'

export default {
  [types.INCREMENT]: (state: State) => {
    state.count++
  },

  [types.DECREMENT]: (state: State) => {
    state.count--
  },

  [types.FETCH_ITEM]: (state: State, payload: Item) => {
    state.item = payload
  }
}
