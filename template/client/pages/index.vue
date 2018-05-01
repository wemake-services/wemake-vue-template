<template>
  <section class="container">
    <div>
      <app-logo />

      <section
        v-if="hasComments"
        class="comments__component"
      >
        <comment
          v-for="comment in comments"
          :comment="comment"
          :key="comment.id"
        />
      </section>

    </div>
  </section>
</template>

<script>
// @flow

import Vue from 'vue'
import { Store } from 'vuex'

import AppLogo from '~/components/AppLogo'
import Comment from '~/components/Comment'

import Component from 'nuxt-class-component'
import { Getter, State } from 'vuex-class'

import type { CommentType } from '~/types'

// @vue/component
@Component({
  components: {
    AppLogo,
    Comment
  }
})
/**
* Main page. Or index page. Mounted as `/` by default.
*/
export default class Index extends Vue {
  @State('comments')
  /**
  * List of predownloaded comments, bound from Vuex
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
  * See: https://nuxtjs.org/api/pages-fetch
  *
  * @param context.store: current Vuex store
  * @param context.app: current Vue instance
  * @returns list of downloaded comments
  */
  fetch (
    { store, app }: { store: Store, app: Vue }
  ): Promise<Array<CommentType>> {
    // Uncomment the next line to test flow types:
    // console.log(this.comments + 12)
    return store.dispatch('fetchComments', app)
  }
}
</script>

<style lang="scss" scoped>
.comments__component {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
