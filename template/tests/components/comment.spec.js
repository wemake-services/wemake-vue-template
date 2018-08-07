// @flow

import { mount, createLocalVue } from '@vue/test-utils'

import Comment from '~/components/Comment'
import * as types from '~/store/types'

import { storeFactory, commentFactory } from '../fixtures/vuex'

const localVue = createLocalVue()

describe('unit tests for Comment component', () => {
  let comment
  let store

  beforeEach(() => {
    comment = commentFactory.build({ 'rating': 0 })
    store = storeFactory.build(
      { 'state': { 'comments': [comment] } },
      { localVue }
    )
  })

  // Uncomment this line to test typing:
  // test(12, {})

  test('should have two buttons', () => {
    const wrapper = mount(Comment, {
      store,
      localVue,
      'propsData': { comment },
    })

    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.is(Comment)).toBeTruthy()
    expect(wrapper.findAll('button')).toHaveLength(2)
  })

  test('should have correct values', () => {
    const wrapper = mount(Comment, {
      store,
      localVue,
      'propsData': { comment },
    })

    expect(wrapper.find('.body').text().trim()).toEqual(comment.body)
    expect(wrapper.find('.author').text().trim()).toEqual(comment.email)
    expect(wrapper.find('.number').text().trim())
      .toEqual(comment.rating.toString())
  })

  test('should increment rating', () => {
    const delta = 1
    const newRating = comment.rating + delta
    const wrapper = mount(Comment, {
      store,
      localVue,
      'propsData': { comment },
    })

    wrapper.vm.$store.commit(types.UPDATE_RATING, {
      'commentId': comment.id,
      delta,
    })
    expect(wrapper.vm.$store.state.comments[0].rating).toEqual(newRating)

    expect(wrapper.props().comment.rating).toEqual(newRating)
    expect(wrapper.classes()).toContain(wrapper.vm.$style.commentPositive)
  })

  test('should decrement rating', async () => {
    const delta = -2
    const newRating = comment.rating + delta
    const wrapper = mount(Comment, {
      store,
      localVue,
      'propsData': { comment },
    })

    wrapper.vm.$store.commit(types.UPDATE_RATING, {
      'commentId': comment.id,
      delta,
    })
    expect(wrapper.vm.$store.state.comments[0].rating).toEqual(newRating)

    expect(wrapper.props().comment.rating).toEqual(newRating)
    expect(wrapper.classes()).toContain(wrapper.vm.$style.commentNegative)
  })
})

describe('snapshot tests for Comment component', () => {
  let comment
  let store

  beforeAll(() => {
    // We need a seed here to be consistent for snapshot testing:
    comment = commentFactory.build({}, { 'seed': 8874 })
    store = storeFactory.build(
      { 'state': { 'comments': [comment] } },
      { localVue }
    )
  })

  test('should match the snapshot', () => {
    const wrapper = mount(Comment, {
      store,
      localVue,
      'propsData': { comment },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
