<template>
  <div :class="computedClasses">
    <p :class="$style.author">
      {{ comment.email }}
    </p>

    <p :class="$style.body">
      {{ comment.body }}
    </p>

    <div :class="$style.rating">
      <button
        :class="$style['rating-up']"
        @click="changeRating(comment.id, 1)"
        @keypress.enter.prevent="changeRating(comment.id, 1)"
      >
        +
      </button>

      <span :class="$style.number">{{ comment.rating }}</span>

      <button
        :class="$style['rating-down']"
        @click="changeRating(comment.id, -1)"
        @keydown.enter.prevent="changeRating(comment.id, -1)"
      >
        -
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Component, { mixins } from 'nuxt-class-component'
import { Prop } from 'vue-property-decorator'

import { CommentType } from '~/logic/comments/types'
import TypedStoreMixin from '~/mixins/typed-store'

// @vue/component
@Component({})
/**
 * Comment component is used to represent a single user's comment.
 */
export default class Comment extends mixins(TypedStoreMixin) {
  @Prop({ 'required': true })
  /**
   * Passed comment from the parent component.
   */
  readonly comment!: CommentType

  /**
   * Changes comment's rating.
   * Can be used to increase or decrease comment's rating.
   *
   * @param commentId - Comment's identifier to change rating.
   * @param delta - Delta value to change rating value.
   */
  changeRating(commentId: number, delta: number): void {
    this.typedStore.comments.updateRating({ commentId, delta })
  }

  /**
   * Defines which color borders are.
   * Uses `comment`'s rating to choose color.
   *
   * @returns Pairs of class names and boolean values if they should be applied.
   */
  get computedClasses(): Readonly<Record<string, boolean>> {
    return {
      [this.$style['comment-component']]: true,
      [this.$style['comment-positive']]: this.comment.rating > 0,
      [this.$style['comment-negative']]: this.comment.rating < 0,
    }
  }
}
</script>

<style lang="scss" module>
@import '~/scss/variables';

.comment-component {
  background: $color-white;
  max-width: 15.6rem;
  border: 0.12rem solid;
  padding: 0.74rem;
  margin: 0.5rem;
  position: relative;
}

.comment-positive {
  border-color: $button-color-green;
}

.comment-negative {
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
  // stylelint-disable-next-line plugin/no-unsupported-browser-features
  transform: translateX(-50%);

  .number {
    // This will be available as `this.$style.number`:
    font-weight: 700;
  }

  button {
    margin: 0 0.5rem;
    border: none;
    cursor: pointer;
    width: 2rem;
  }
}

.rating-up {
  background: $button-color-green;
}

.rating-down {
  background: $button-color-red;
}
</style>
