// @flow

import Vuex from 'vuex'
import axios from 'axios'
import faker from 'faker'
import { Factory } from 'rosie'

import createState from '~/store/state'
import mutations from '~/store/mutations'
import getters from '~/store/getters'
import actions from '~/store/actions'

import { fakerFactory } from './faker'

export const commentFactory = new Factory()
  .extend(fakerFactory)
  .sequence('id')
  .attr('email', faker.internet.email)
  .attr('body', faker.lorem.sentences)
  .attr('rating', () => faker.random.number({ min: -10, max: 10 }))

export const storeFactory = new Factory()
  .option('localVue', null)
  .attr('actions', actions)
  .attr('mutations', mutations)
  .attr('getters', getters)
  .attr('state', ['state'], (state = {}) => {
    return { ...createState(), ...state }
  })
  .after((store, options) => {
    if (!options.localVue) {
      // Just return unmounted store:
      return store
    }

    options.localVue.use(Vuex)
    store = new Vuex.Store({ ...store })

    // Extending store's context to match `nuxt`'s API:

    // $FlowFixMe
    store.$axios = axios
    return store
  })
