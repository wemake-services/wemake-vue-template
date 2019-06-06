import Vuex from 'vuex'
import axios from 'axios'
import faker from 'faker'
import { Factory } from 'rosie'
import { vuexPlugin } from 'jest-matcher-vue-test-utils'

import { state, actions, mutations, getters } from '~/store/index'
import { CommentType } from '~/logic/comments/types'

import { fakerFactory, FakerFactoryType } from '@/fixtures/faker'

export const commentFactory = new Factory()
  .extend<FakerFactoryType & CommentType, FakerFactoryType>(fakerFactory)
  .sequence('id')
  .attr('email', faker.internet.email)
  .attr('body', faker.lorem.sentences)
  .attr('rating', () => faker.random.number({ 'min': -10, 'max': 10 }))

export const storeFactory = new Factory()
  .option('localVue', null)
  .attr('actions', actions)
  .attr('mutations', mutations)
  .attr('getters', getters)
  .attr('state', ['state'], (defaultState = {}) => {
    return { ...state(), ...defaultState }
  })
  .after((store, options) => {
    if (!options.localVue) {
      // Just return unmounted store:
      return store
    }

    options.localVue.use(Vuex)
    store = new Vuex.Store({
      ...store,
      // We need this plugin to allow jest-matcher-vue-test-utils
      // assertions for Vuex:
      'plugins': [vuexPlugin()],
    })

    // Extending store's context to match `nuxt`'s API:

    store.$axios = axios
    return store
  })
