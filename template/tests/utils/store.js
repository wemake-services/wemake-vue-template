import axios from 'axios'
import Vuex from 'vuex'
import deepcopy from 'deepcopy'

export function createStore (
  { actions, getters, state, mutations }, customState
) {
  const callableState = state instanceof Function ? state : () => state
  const mixedState = Object.assign(callableState(), customState)

  const store = new Vuex.Store({
    state: deepcopy(mixedState),
    actions,
    getters,
    mutations
  })

  store.$axios = axios
  return store
}
