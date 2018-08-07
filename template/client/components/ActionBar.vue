<script>
// @flow
// @jsx ActionBar

import Vue from 'vue'
import Component from 'nuxt-class-component'
import { Action } from 'vuex-class'

import type { CommentType } from '~/types'

// @vue/component
@Component()
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
  fetchComments: () => Promise<Array<CommentType>>

  /**
   * Render function. It is an equavalent of `<template>` tag.
   *
   * @see https://vuejs.org/v2/guide/render-function.html
   * @returns { VNode } Virtual node to be rendered by Vue.
   */
  render () {
    return (
      <div class={this.$style.actions}>
        <button
          class={this.$style.reload}
          // Try to use `this.fetchComments(12)` instead to raise type errors
          onClick={this.fetchComments}
        >
          reload comments
        </button>
      </div>
    )
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
  outline: none;
  padding: 5px 10px;
  color: $color-white;
  background-color: $button-color-main;
  border-color: $button-color-main;
}
</style>
