<template>
  <section class="container">
    <div>
      <app-logo />

      <section v-if="hasComments" class="comments__component">
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

import { mapGetters, mapState } from 'vuex'

import AppLogo from '~/components/AppLogo'
import Comment from '~/components/Comment'

export default {
  fetch ({ store, app }: any) {
    return store.dispatch('fetchComments', app)
  },

  computed: {
    ...mapState(['comments']),
    ...mapGetters(['hasComments'])
  },

  components: {
    AppLogo,
    Comment
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
