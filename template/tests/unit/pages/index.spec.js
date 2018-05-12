import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'
import MockAdapter from 'axios-mock-adapter'

import Index from '~/pages/index'
import { actions, getters, state, mutations } from '~/store'

import { createStore } from '../../utils/store'

const localVue = createLocalVue()
localVue.use(Vuex)

const comments = [{
  id: 1,
  email: 'test@mail.com',
  body: 'some text',
  rating: -4
}, {
  id: 2,
  email: 'other@mail.com',
  body: 'other text',
  rating: 2
}]

const mockedComment = {
  id: 3,
  email: 'mock@mail.com',
  body: 'mock text',
  rating: 19
}

const propsData = { comments }

describe('unit tests for Index page', () => {
  let store

  beforeEach(() => {
    store = createStore({ actions, getters, state, mutations }, {
      comments
    })
  })

  test('should have two comments', () => {
    const wrapper = mount(Index, { store, localVue, propsData })
    expect(wrapper.findAll('.comment__component')).toHaveLength(2)
  })

  test('should load new comments on actions', async () => {
    const wrapper = mount(Index, { store, localVue, propsData })

    const mock = new MockAdapter(store.$axios)
    mock.onGet('/comments').reply(200, [mockedComment])

    await wrapper.vm.$store.dispatch('fetchComments', wrapper.vm)
    expect(wrapper.vm.$store.state.comments).toHaveLength(1)
    expect(wrapper.vm.$store.state.comments[0].email).toBe(mockedComment.email)
    expect(wrapper.findAll('.comment__component')).toHaveLength(1)
  })

  test('should match the snapshot', () => {
    const wrapper = mount(Index, { store, localVue, propsData })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
