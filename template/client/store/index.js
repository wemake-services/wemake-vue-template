// @flow

import Vuex from 'vuex'
import state from '~/store/state'
import mutations from '~/store/mutations'
import getters from '~/store/getters'
import actions from '~/store/actions'

const createStore = () => {
  return new Vuex.Store({
    state,
    getters,
    actions,
    mutations
  })
}

export default createStore
