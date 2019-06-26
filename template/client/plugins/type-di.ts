import 'reflect-metadata'
import { AxiosInstance } from 'axios'
import Vue, { VueConstructor } from 'vue'
import VueTypeDI, { Container } from 'vue-typedi'

import tokens from '~/logic/tokens'

export function install (
  vueConstructor: VueConstructor,
  $axios: AxiosInstance,
): void {
  vueConstructor.use(VueTypeDI)
  Container.remove(tokens.AXIOS)
  Container.set(tokens.AXIOS, $axios)
}

/* istanbul ignore next */
export default ({ $axios }): void => {
  install(Vue, $axios)
}
