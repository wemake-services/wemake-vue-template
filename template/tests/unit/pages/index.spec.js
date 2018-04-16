import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'
import axios from 'axios'
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

describe('Index page unit tests', () => {
  let store

  beforeEach(() => {
    store = createStore({ actions, getters, state, mutations }, {
      comments
    })
  })

  it('should have two comments', () => {
    const wrapper = mount(Index, { store, localVue, propsData })

    expect(wrapper.findAll('.comment__component').length).toBe(2)
  })

  it('should load new comments on actions', async () => {
    expect.assertions(3)
    const wrapper = mount(Index, { store, localVue, propsData })
    wrapper.vm.$axios = axios

    const mock = new MockAdapter(wrapper.vm.$axios)
    mock.onGet('/comments').reply(200, [mockedComment])

    await wrapper.vm.$store.dispatch('fetchComments', wrapper.vm)
    expect(wrapper.vm.$store.state.comments.length).toBe(1)
    expect(wrapper.vm.$store.state.comments[0].email).toBe(mockedComment.email)

    wrapper.vm.$nextTick(() => {
      expect(wrapper.findAll('.comment__component').length).toBe(1)
    })
  })

  it('should match the snapshot', () => {
    const wrapper = mount(Index, { store, localVue, propsData })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
