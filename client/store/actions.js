import * as types from './types'

export default {
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit(types.INCREMENT)
    }, 200)
  }
}
