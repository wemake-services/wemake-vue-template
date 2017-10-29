import * as types from './types'

export default {
  [types.INCREMENT]: (state) => {
    state.count++
  },

  [types.DECREMENT]: (state) => {
    state.count--
  }
}
