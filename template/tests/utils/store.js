import axios from 'axios'
import Vuex from 'vuex'
import deepcopy from 'deepcopy'

export function createStore (
  { actions, getters, state, mutations }, customState
) {
  const mixedState = Object.assign(state(), customState)

  const store = new Vuex.Store({
    state: deepcopy(mixedState),
    getters,
    actions,
    mutations
  })

  // Extending store's context to match `nuxt`'s API:
  store.$axios = axios
  return store
}
