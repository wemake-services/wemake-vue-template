import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'

import Comment from '~/components/Comment'
import { state, mutations } from '~/store'
import * as types from '~/types/mutations'

const localVue = createLocalVue()
localVue.use(Vuex)

function createStore (customState) {
  const mixedState = Object.assign(state, customState)

  return new Vuex.Store({
    state: mixedState,
    mutations
  })
}

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
    store = createStore({
      comments: [comment]
    })
  })

  it('should have two buttons', () => {
    const wrapper = mount(Comment, { store, localVue, propsData })

    expect(wrapper.findAll('button').length).toBe(2)
  })

  it('should have correct values', () => {
    const wrapper = mount(Comment, { store, localVue, propsData })

    expect(wrapper.find('.comment-author').text().trim()).toBe(comment.email)
    expect(wrapper.find('.comment-body').text().trim()).toBe(comment.body)
    expect(wrapper.find('.comment-rating-value').text().trim()).toBe(
      String(comment.rating))
  })

  // it('should increment counter', () => {
  //   const wrapper = mount(Counter, { store, localVue })

  //   wrapper.vm.$store.commit(types.INCREMENT)
  //   expect(wrapper.vm.count).toBe(1)
  // })

  // it('should decrement counter', () => {
  //   const wrapper = mount(Counter, { store, localVue })

  //   wrapper.vm.$store.commit(types.DECREMENT)
  //   expect(wrapper.vm.count).toBe(-1)
  // })

  it('should match the snapshot', () => {
    const wrapper = mount(Comment, { store, localVue, propsData })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
