<template>
  <div :class="computedClasses">
    <p :class="$style.author">{{ comment.email }}</p>

    <p :class="$style.body">{{ comment.body }}</p>

    <div :class="$style.rating">
      <button
        :class="$style.ratingUp"
        @click="changeRating(comment.id, 1)"
      >
        +
      </button>

      <span :class="$style.number">{{ comment.rating }}</span>

      <button
        :class="$style.ratingDown"
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

import * as mutationTypes from '~/store/types'
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

  /**
   * Defines which color borders are.
   * Uses `comment`'s rating to choose color.
   *
   * @returns Pairs of class names and boolean values if they should be applied.
   */
  get computedClasses () {
    return {
      [this.$style.commentComponent]: true,
      [this.$style.commentPositive]: this.comment.rating > 0,
      [this.$style.commentNegative]: this.comment.rating < 0,
    }
  }
}
</script>

<style lang="scss" module>
@import '~/scss/variables';

.commentComponent {
  background: $color-white;
  max-width: 15.6rem;
  border: 0.12rem solid;
  padding: 0.74rem;
  margin: 0.5rem;
  position: relative;
}

.commentPositive {
  border-color: $button-color-green;
}

.commentNegative {
  border-color: $button-color-red;
}

.author {
  padding-bottom: 0.74rem;
  font-weight: 700;
  border-bottom: 0.12rem solid;
}

.body {
  text-align: justify;
}

.rating {
  position: absolute;
  bottom: 0.3rem;
  left: 50%;
  transform: translateX(-50%);

  .number {
    // This will be available as `this.$style.number`
    font-weight: 700;
  }

  button {
    margin: 0 0.5rem;
    border: none;
    outline: none;
    cursor: pointer;
    width: 2rem;
  }
}

.ratingUp {
  background: $button-color-green;
}

.ratingDown {
  background: $button-color-red;
}
</style>
