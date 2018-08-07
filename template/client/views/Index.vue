<template>
  <main>
    <div>
      <app-logo />
      <action-bar />

      <section
        v-if="hasComments"
        :class="$style.container"
      >
        <comment
          v-for="comment in comments"
          :comment="comment"
          :key="comment.id"
        />
      </section>

    </div>
  </main>
</template>

<script>
// @flow

import Vue from 'vue'
import { Store } from 'vuex'
import Component from 'nuxt-class-component'
import { Getter, State } from 'vuex-class'

import ActionBar from '~/components/ActionBar'
import AppLogo from '~/components/AppLogo'
import Comment from '~/components/Comment'

import type { CommentType, StateType } from '~/types'

// @vue/component
@Component({
  'components': {
    ActionBar,
    AppLogo,
    Comment,
  },
})
/**
 * Main page (or index page).
 * Mounted as `/` by default.
 */
export default class Index extends Vue {
  @State('comments')
  /**
   * List of predownloaded comments, bound from Vuex.
   */
  comments: Array<CommentType>

  @Getter('hasComments')
  /**
   * Returns either we have any comments or not.
   */
  hasComments: boolean

  /**
   * Fetches comments from external API from the server side.
   * This method should preload Vuex store.
   *
   * @see https://nuxtjs.org/api/pages-fetch
   * @param context - Nuxt `context` instance.
   * @param context.store - Current Vuex store.
   * @returns List of downloaded comments.
   */
  fetch ({ store }: { store: Store<StateType> }): Promise<Array<CommentType>> {
    // Uncomment the next line to test flow types:
    // console.log(this.comments + store.state.comments.length)
    return store.dispatch('fetchComments')
  }
}
</script>

<style lang="scss" module>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
