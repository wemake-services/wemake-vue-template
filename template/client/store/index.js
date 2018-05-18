// @flow

import Vuex from 'vuex'
import createState from '~/store/state'
import mutations from '~/store/mutations'
import getters from '~/store/getters'
import actions from '~/store/actions'

const createStore = () => {
  return new Vuex.Store({
    state: createState(),
    getters,
    actions,
    mutations
  })
}

export default createStore
