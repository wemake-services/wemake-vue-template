<template>
  <div
    class="comment__component"
  >
    <p class="comment-author">{{ comment.email }}</p>
    <p class="comment-body">{{ comment.body }}</p>

    <div class="comment-rating">
      <button
        @click="changeRating(comment.id, 1)"
        class="comment-rating-up">+</button>

      <span class="comment-rating-value">{{ comment.rating }}</span>

      <button
        @click="changeRating(comment.id, -1)"
        class="comment-rating-down">-</button>
    </div>
  </div>
</template>

<script>
// @flow

import * as mutationTypes from '~/types/mutations'

export default {
  props: {
    comment: {
      type: Object,
      required: true
    }
  },

  methods: {
    changeRating (commentId: number, delta: number) {
      this.$store.commit(mutationTypes.UPDATE_RATING, { commentId, delta })
    }
  }
}
</script>

<style lang="scss" scoped>
.comment__component {
  background: white;
  max-width: 15.6rem;
  border: 0.12rem solid;
  padding: 0.74rem;
  margin: 0.5rem;
  position: relative;

  .comment-author {
    padding-bottom: 0.74rem;
    font-weight: bold;
    border-bottom: 0.12rem solid;
  }

  .comment-rating {
    position: absolute;
    bottom: 0.3rem;
    left: 50%;
    transform: translateX(-50%);

    button {
      margin: 0 0.5rem;
      border: none;
      outline: none;
      cursor: pointer;
      width: 2rem;

      &.comment-rating-up {
        background: #a2dca2;
      }

      &.comment-rating-down {
        background: #efbcd1;
      }
    }
  }
}
</style>
