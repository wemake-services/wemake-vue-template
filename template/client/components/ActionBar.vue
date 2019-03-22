<template>
  <div :class="$style.actions">
    <button
      :class="$style.reload"
      @click="fetchComments"
    >
      reload comments
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'
import { Action } from 'vuex-class'

import { CommentType } from '~/types'

// @vue/component
@Component({})
/**
 * Actions bar component written in jsx.
 * The main idea of this example is to demostrate flexibility of Vue and jsx.
 * We discourage using `jsx` in a real world apps,
 * unless you know what are you doing!
 */
export default class ActionBar extends Vue {
  @Action('fetchComments')
  /**
   * Typed alias to Vuex `fetchComments` action.
   */
  fetchComments!: () => Promise<CommentType[]>
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
  outline: none;
  padding: 5px 10px;
  color: $color-white;
  background-color: $button-color-main;
  border-color: $button-color-main;
}
</style>
