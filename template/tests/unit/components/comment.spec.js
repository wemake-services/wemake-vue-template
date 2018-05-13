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

describe('unit tests for Comment component', () => {
  let store

  beforeEach(() => {
    store = createStore({ state, mutations }, {
      comments: [comment]
    })
  })

  test('should have two buttons', () => {
    const wrapper = mount(Comment, { store, localVue, propsData: { comment } })

    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.is(Comment)).toBeTruthy()
    expect(wrapper.findAll('button')).toHaveLength(2)
  })

  test('should have correct values', () => {
    const wrapper = mount(Comment, { store, localVue, propsData: { comment } })

    expect(wrapper.find('.body').text().trim()).toEqual(comment.body)
    expect(wrapper.find('.author').text().trim()).toEqual(comment.email)
    expect(wrapper.find('.number').text().trim()).toEqual(
      comment.rating.toString()
    )
  })

  test('should increment rating', () => {
    const delta = 1
    const wrapper = mount(Comment, { store, localVue, propsData: { comment } })

    wrapper.vm.$store.commit(types.UPDATE_RATING, {
      commentId: comment.id,
      delta
    })
    expect(wrapper.vm.$store.state.comments[0].rating).toEqual(delta)

    // See https://vue-test-utils.vuejs.org/en/guides/common-tips.html
    wrapper.setProps({ comment: wrapper.vm.$store.state.comments[0] })

    expect(wrapper.props().comment.rating).toEqual(delta)
    expect(wrapper.classes()).toContain(wrapper.vm.$style.commentPositive)
  })

  test('should decrement rating', async () => {
    const delta = -2
    const wrapper = mount(Comment, { store, localVue, propsData: { comment } })

    wrapper.vm.$store.commit(types.UPDATE_RATING, {
      commentId: comment.id,
      delta
    })
    expect(wrapper.vm.$store.state.comments[0].rating).toEqual(delta)

    // See https://vue-test-utils.vuejs.org/en/guides/common-tips.html
    wrapper.setProps({ comment: wrapper.vm.$store.state.comments[0] })

    expect(wrapper.props().comment.rating).toEqual(delta)
    expect(wrapper.classes()).toContain(wrapper.vm.$style.commentNegative)
  })

  test('should match the snapshot', () => {
    const wrapper = mount(Comment, { store, localVue, propsData: { comment } })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
