<template>
  <div
    class="comment__component"
  >
    <p class="comment-author">{{ comment.email }}</p>
    <p class="comment-body">{{ comment.body }}</p>

    <div class="comment-rating">
      <button
        class="comment-rating-up"
        @click="changeRating(comment.id, 1)"
      >
        +
      </button>

      <span class="comment-rating-value">{{ comment.rating }}</span>

      <button
        class="comment-rating-down"
        @click="changeRating(comment.id, -1)"
      >
        -
      </button>
    </div>
  </div>
</template>

<script>
// @flow

import Vue from 'vue'
import Component from 'nuxt-class-component'
import { Prop } from 'vue-property-decorator'
import { Mutation } from 'vuex-class'

import * as mutationTypes from '~/types/mutations'
import type { CommentType, CommentPayloadType } from '~/types'

// @vue/component
@Component()
/**
* Comment component is used to represent a single user's comment.
*/
export default class Comment extends Vue {
  @Mutation(mutationTypes.UPDATE_RATING)
  /**
  * This is a wrapped mutation from the vuex.
  */
  updateRating: (CommentPayloadType) => void

  @Prop()
  /**
  * Passed comment from the parent component.
  */
  comment: CommentType

  /**
  * Changes comment's rating.
  * Can be used to increase or decrease comment's rating.
  *
  * @param commentId - Comment's identifier to change rating.
  * @param delta - Delta value to change rating value.
  */
  changeRating (commentId: number, delta: number) {
    // Uncomment next line to test typing:
    // console.log(this.comment.missingKey)
    this.updateRating({ commentId, delta })
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
    $button-color-green: #a2dca2;
    $button-color-red: #efbcd1;

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
        background: $button-color-green;
      }

      &.comment-rating-down {
        background: $button-color-red;
      }
    }
  }
}
</style>
