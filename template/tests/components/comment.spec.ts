import { mount, createLocalVue } from '@vue/test-utils'
import { Store } from 'vuex'

import Comment from '~/components/Comment.vue'
import { CommentType, StateType } from '~/logic/comments/types'
import * as reducers from '~/logic/comments/module/reducers'

import { storeFactory, commentFactory } from '@/fixtures/vuex'

const localVue = createLocalVue()

describe('unit tests for Comment component', () => {
  let comment: CommentType
  let store: Store<StateType>

  beforeEach(() => {
    comment = commentFactory.build({ 'rating': 0 })
    store = storeFactory.build(
      { 'state': { 'comments': [comment] } },
      { localVue }
    )
  })

  test('should have valid props', () => {
    expect.hasAssertions()

    expect(Comment).toBeValidProps({ comment })
  })

  test('should have two buttons', () => {
    expect.hasAssertions()

    const wrapper = mount(Comment, {
      store,
      localVue,
      'propsData': { comment },
    })

    expect(wrapper.isVueInstance()).toBe(true)
    expect(wrapper.is(Comment)).toBe(true)
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
  ])('should change rating: %p', ({ delta, styleName }) => {
    expect.hasAssertions()

    const newRating = comment.rating + delta
    const wrapper = mount(Comment, {
      store,
      localVue,
      'propsData': { comment },
    })

    wrapper.vm.$store.commit(reducers.UPDATE_RATING, {
      'commentId': comment.id,
      delta,
    })

    expect(wrapper.vm.$store.state.comments[0].rating).toStrictEqual(newRating)
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
    store = storeFactory.build(
      { 'state': { 'comments': [comment] } },
      { localVue }
    )
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
