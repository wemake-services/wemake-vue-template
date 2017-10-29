import Vue from 'vue'
import Vuex from 'vuex'
import createState from './state'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default function () {
  return new Vuex.Store({
    state: createState(),
    mutations,
    actions
  })
}
