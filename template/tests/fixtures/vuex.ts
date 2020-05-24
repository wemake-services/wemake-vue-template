import axios from 'axios'
import faker from 'faker'
import { vuexPlugin } from 'jest-matcher-vue-test-utils'
import rosie from 'rosie'
import Vuex, { Store } from 'vuex'

import { CommentType } from '~/logic/comments/types'
import { StateType } from '~/logic/types'
import { install as installDI } from '~/plugins/type-di'
import createStore from '~/store'

import { fakerFactory, FakerFactoryType } from '@/fixtures/faker'

export const commentFactory = new rosie.Factory()
  .extend<FakerFactoryType & CommentType, FakerFactoryType>(fakerFactory)
  .sequence('id')
  .attr('email', faker.internet.email)
  .attr('body', faker.lorem.sentences)
  .attr('rating', () => faker.random.number({ 'min': -10, 'max': 10 }))

export const storeFactory = new rosie.Factory<Store<StateType>>()
  .option('localVue')
  .option('state', undefined)
  .after((empty, options) => {
    installDI(options.localVue, axios)

    options.localVue.use(Vuex)
    const store = createStore(undefined, {
      // We need this plugin to allow jest-matcher-vue-test-utils
      // assertions for Vuex:
      'plugins': [vuexPlugin()],
    })

    if (options.state) {
      store.replaceState(options.state)
    }

    return store
  })
