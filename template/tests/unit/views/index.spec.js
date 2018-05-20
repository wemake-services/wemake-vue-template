import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'
import MockAdapter from 'axios-mock-adapter'

import Index from '~/views/Index'
import state from '~/store/state'
import mutations from '~/store/mutations'
import getters from '~/store/getters'
import actions from '~/store/actions'

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
}, {
  id: 3,
  email: 'zero@mail.com',
  body: 'zero test',
  rating: 0
}]

const mockedComment = {
  id: 4,
  email: 'mock@mail.com',
  body: 'mock text',
  rating: 19
}

describe('unit tests for Index page', () => {
  let store

  beforeEach(() => {
    store = createStore({ actions, getters, state, mutations }, {
      comments
    })
  })

  test('should have three comments', () => {
    const wrapper = mount(Index, { store, localVue, propsData: { comments } })
    expect(wrapper.findAll('.commentComponent')).toHaveLength(3)
  })

  test('should load new comments on actions', async () => {
    const wrapper = mount(Index, { store, localVue, propsData: { comments } })

    const mock = new MockAdapter(store.$axios)
    mock.onGet('/comments').reply(200, [mockedComment])

    await wrapper.vm.$store.dispatch('fetchComments', wrapper.vm)
    expect(wrapper.vm.$store.state.comments).toHaveLength(1)
    expect(wrapper.vm.$store.state.comments[0].email).toBe(mockedComment.email)
    expect(wrapper.findAll('.commentComponent')).toHaveLength(1)
  })

  test('should match the snapshot', () => {
    const wrapper = mount(Index, { store, localVue, propsData: { comments } })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
