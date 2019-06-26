import Vue from 'vue'
import Component from 'nuxt-class-component'
import { useStore } from 'vuex-simple'

import TypedStore from '~/logic/store'

// TODO: document

@Component({})
export default class TypedStoreMixin extends Vue {
  public typedStore: TypedStore = useStore(this.$store)
}
