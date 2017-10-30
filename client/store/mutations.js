// @flow

import * as types from './types'

export default {
  [types.INCREMENT]: (state: { count: number }) => {
    state.count++
  },

  [types.DECREMENT]: (state: { count: number }) => {
    state.count--
  }
}
