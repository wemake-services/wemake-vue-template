<template>
  <main :class="$style.main">
    <app-logo />
    <action-bar />

    <section
      v-if="typedStore.comments.hasComments"
      :class="$style.container"
    >
      <comment
        v-for="comment in typedStore.comments.comments"
        :key="comment.id"
        :comment="comment"
      />
    </section>
  </main>
</template>

<script lang="ts">
import Component, { mixins } from 'nuxt-class-component'
import { Store } from 'vuex'
import { useStore } from 'vuex-simple'

import ActionBar from '~/components/ActionBar.vue'
import AppLogo from '~/components/AppLogo.vue'
import Comment from '~/components/Comment.vue'
import { RawCommentType } from '~/logic/comments/models'
import TypedStore from '~/logic/store'
import { StateType } from '~/logic/types'
import TypedStoreMixin from '~/mixins/typed-store'

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
export default class Index extends mixins(TypedStoreMixin) {
  /**
   * Fetches comments from external API from the server side.
   * This method should preload Vuex store.
   *
   * @see https://nuxtjs.org/api/pages-fetch
   * @param context - Nuxt `context` instance.
   * @param context.store - Current Vuex store.
   * @returns List of downloaded comments.
   */
  fetch({ store }: { store: Store<StateType> }): Promise<RawCommentType[]> {
    // Here we don't have a DI setup yet, so we use the explicit approach:
    const typedStore = useStore<TypedStore>(store)
    return typedStore.comments.fetchComments()
  }
}
</script>

<style lang="scss" module>
.main {
  max-width: 100%;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
