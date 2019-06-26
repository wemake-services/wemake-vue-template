// We use default Nuxt Module-based store,
// read more about it here:
// https://nuxtjs.org/guide/vuex-store

// TODO: document

import Vue from 'vue'
import Vuex, { Store, Plugin } from 'vuex'
import { createVuexStore } from 'vuex-simple'
import { Container } from 'vue-typedi'

import tokens from '~/logic/tokens'
import TypedStore from '~/logic/store'
import { StateType } from '~/logic/types'

Vue.use(Vuex)

export default function store (
  ssrContext,
  { plugins = [] }: { plugins: Plugin<StateType>[] },
): Store<StateType> {
  if (!Container.has(tokens.AXIOS)) {
    Container.set(tokens.AXIOS, (): void => {})
  }

  const typedStore = new TypedStore()

  // Registering DI container items:
  Container.set(tokens.STORE, typedStore)

  return createVuexStore(typedStore, {
    plugins,
  })
}
