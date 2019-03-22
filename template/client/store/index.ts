import Vuex, { StoreOptions } from 'vuex'

import createState from '~/store/state'
import mutations from '~/store/mutations'
import getters from '~/store/getters'
import actions from '~/store/actions'
import { StateType } from '~/types'

function createStore (): StoreOptions<StateType> {
  return new Vuex.Store({
    'strict': process.env.NODE_ENV !== 'production',
    'state': createState(),
    actions,
    getters,
    mutations,
  })
}

export default createStore
