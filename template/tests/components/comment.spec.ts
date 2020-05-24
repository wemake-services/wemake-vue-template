import { mount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue'
import { Store } from 'vuex'

import Comment from '~/components/Comment.vue'
import { CommentType } from '~/logic/comments/types'
import TypedStore from '~/logic/store'
import { StateType } from '~/logic/types'

import { storeFactory, commentFactory } from '@/fixtures/vuex'

const localVue = createLocalVue()

describe('unit tests for Comment component', () => {
  let comment: CommentType
  let store: Store<StateType>

  beforeEach(() => {
    comment = commentFactory.build({ 'rating': 0 })
    store = storeFactory.build(undefined, {
      localVue,
      'state': { 'comments': { 'comments': [comment] } },
    })
  })

  test('should have valid props', () => {
    expect.hasAssertions()

    expect(Comment).toBeValidProps({ comment }, {
      localVue,
      store,
    })
  })

  test('should have two buttons', () => {
    expect.hasAssertions()

    const wrapper = mount(Comment, {
      store,
      localVue,
      'propsData': { comment },
    })

    expect(Boolean(wrapper.vm)).toBe(true)
    expect(wrapper.findAll('button')).toHaveLength(2)
  })

  test('should have correct values', () => {
    expect.hasAssertions()

    const wrapper = mount(Comment, {
      store,
      localVue,
      'propsData': { comment },
    })

    expect(wrapper.find('.body').text().trim()).toStrictEqual(comment.body)
    expect(wrapper.find('.author').text().trim()).toStrictEqual(comment.email)
    expect(wrapper.find('.number').text().trim())
      .toStrictEqual(comment.rating.toString())
  })

  test.each([
    { 'delta': 1, 'styleName': 'comment-positive' },
    { 'delta': -1, 'styleName': 'comment-negative' },
  ])('should change rating: %p', async ({ delta, styleName }) => {
    expect.hasAssertions()

    const newRating = comment.rating + delta
    const wrapper = mount(Comment, {
      store,
      localVue,
      'propsData': { comment },
    })
    const typedStore: TypedStore = (wrapper.vm as any).typedStore

    typedStore.comments.updateRating({ 'commentId': comment.id, delta })

    // This is required, because we use new version of
    // vue-test-utils, which does not have a `sync` mode to render UI:
    await Vue.nextTick()

    expect(wrapper.vm.$store.state.comments.comments[0].rating)
      .toStrictEqual(newRating)
    expect(typedStore.comments.comments[0].rating)
      .toStrictEqual(typedStore.comments.comments[0].rating)

    expect(wrapper.props().comment.rating).toStrictEqual(newRating)
    expect(wrapper.classes()).toContain(wrapper.vm.$style[styleName])
  })
})

describe('snapshot tests for Comment component', () => {
  let comment: CommentType
  let store: Store<StateType>

  beforeAll(() => {
    // We need a seed here to be consistent for snapshot testing:
    comment = commentFactory.build({}, { 'seed': 8874 })
    store = storeFactory.build(undefined, {
      localVue,
      'state': { 'comments': { 'comments': [comment] } },
    })
  })

  test('should match the snapshot', () => {
    expect.hasAssertions()

    const wrapper = mount(Comment, {
      store,
      localVue,
      'propsData': { comment },
    })

    expect(wrapper).toMatchSnapshot()
  })
})
