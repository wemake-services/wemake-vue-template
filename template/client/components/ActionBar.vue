<template>
  <div :class="$style.actions">
    <button
      :class="$style.reload"
      @click="fetchComments"
      @keypress.enter="fetchComments"
    >
      reload comments
    </button>
  </div>
</template>

<script lang="ts">
import Component, { mixins } from 'nuxt-class-component'

import { RawCommentType } from '~/logic/comments/models'
import TypedStoreMixin from '~/mixins/typed-store'

// @vue/component
@Component({})
/**
 * Stateless component.
 * The primary idea of this component is to illustrate,
 * how `Action`s from typed `Vuex` work.
 */
export default class ActionBar extends mixins(TypedStoreMixin) {
  /**
   * Typed alias to Vuex `fetchComments` action.
   */
  async fetchComments(): Promise<RawCommentType[]> {
    return this.typedStore.comments.fetchComments()
  }
}
</script>

<style lang="scss" module>
@import '~/scss/variables';

.actions {
  text-align: center;
}

.reload {
  display: inline-block;
  cursor: pointer;
  padding: 5px 10px;
  color: $color-white;
  background-color: $button-color-main;
  border-color: $button-color-main;
}
</style>
