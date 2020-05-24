import 'reflect-metadata'
import { AxiosInstance } from 'axios'
import Vue, { VueConstructor } from 'vue'
import VueTypeDI, { Container } from 'vue-typedi'

import tokens from '~/logic/tokens'

export function install(
  vueConstructor: VueConstructor,
  $axios: AxiosInstance,
): void {
  // Installing Vue dependency:
  vueConstructor.use(VueTypeDI)
  // Then we install the passed `axios` instance to the IoC container,
  // so we can resolve it later:
  Container.set(tokens.AXIOS, $axios)
}

/* istanbul ignore next */
export default ({ $axios }: { $axios: AxiosInstance }): void => {
  install(Vue, $axios)
}
