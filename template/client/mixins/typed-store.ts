import Component from 'nuxt-class-component'
import Vue from 'vue'
import { useStore } from 'vuex-simple'

import TypedStore from '~/logic/store'

@Component({})
/**
 * Mixin to inject `typedStore` field into all components using this mixin.
 *
 * Basically, all components should inherit from it by
 * if typed store is required.
 * See usage docs: https://github.com/sascha245/vuex-simple#usage.
 */
export default class TypedStoreMixin extends Vue {
  public typedStore: TypedStore = useStore(this.$store)
}
