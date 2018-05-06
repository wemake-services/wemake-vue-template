import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'

import Comment from '~/components/Comment'
import { state, mutations } from '~/store'
import * as types from '~/types/mutations'

import { createStore } from '../../utils/store'

const localVue = createLocalVue()
localVue.use(Vuex)

const comment = {
  id: 1,
  email: 'test@mail.com',
  body: 'some text',
  rating: 0
}

const propsData = { comment }

describe('Comment component unit tests', () => {
  let store

  beforeEach(() => {
    store = createStore({ state, mutations }, {
      comments: [comment]
    })
  })

  test('should have two buttons', () => {
    const wrapper = mount(Comment, { store, localVue, propsData })

    expect(wrapper.findAll('button')).toHaveLength(2)
  })

  test('should have correct values', () => {
    const wrapper = mount(Comment, { store, localVue, propsData })

    expect(wrapper.find('.comment-author').text().trim()).toEqual(comment.email)
    expect(wrapper.find('.comment-body').text().trim()).toEqual(comment.body)
    expect(wrapper.find('.comment-rating-value').text().trim()).toEqual(
      comment.rating.toString()
    )
  })

  test('should increment rating', () => {
    const wrapper = mount(Comment, { store, localVue, propsData })

    wrapper.vm.$store.commit(types.UPDATE_RATING, {
      commentId: comment.id,
      delta: 1
    })
    expect(wrapper.vm.$store.state.comments[0].rating).toEqual(1)
  })

  test('should decrement rating', () => {
    const wrapper = mount(Comment, { store, localVue, propsData })

    wrapper.vm.$store.commit(types.UPDATE_RATING, {
      commentId: comment.id,
      delta: -1
    })
    expect(wrapper.vm.$store.state.comments[0].rating).toEqual(-1)
  })

  test('should match the snapshot', () => {
    const wrapper = mount(Comment, { store, localVue, propsData })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
