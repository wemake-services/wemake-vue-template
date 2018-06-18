// @flow

import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'
import MockAdapter from 'axios-mock-adapter'
import faker from 'faker'

import Index from '~/views/Index'
import state from '~/store/state'
import mutations from '~/store/mutations'
import getters from '~/store/getters'
import actions from '~/store/actions'

import { createStore } from '../utils/store'

const localVue = createLocalVue()
localVue.use(Vuex)

faker.seed(123)

function fakeComments (number) {
  const comments = []
  for (let i = 0; i < number; i += 1) {
    comments.push({
      id: faker.random.number(),
      email: faker.internet.email(),
      body: faker.lorem.sentences(),
      rating: faker.random.number({ min: -10, max: 10 })
    })
  }

  return comments
}

describe('unit tests for Index page', () => {
  let store
  let comments

  beforeEach(() => {
    comments = fakeComments(3)
    store = createStore({ actions, getters, state, mutations }, {
      comments
    })
  })

  test('should have three comments', () => {
    const wrapper = mount(Index, { store, localVue, propsData: { comments } })
    expect(wrapper.findAll('.commentComponent')).toHaveLength(3)
  })

  test('should load new comments on actions', async () => {
    const comment = fakeComments(1)[0]
    const wrapper = mount(Index, { store, localVue, propsData: { comments } })

    const mock = new MockAdapter(store.$axios)
    mock.onGet('/comments').reply(200, [comment])

    await wrapper.vm.$store.dispatch('fetchComments', wrapper.vm)
    expect(wrapper.vm.$store.state.comments).toHaveLength(1)
    expect(wrapper.vm.$store.state.comments[0].id).toEqual(comment.id)
    expect(wrapper.vm.$store.state.comments[0].email).toEqual(comment.email)
    expect(wrapper.findAll('.commentComponent')).toHaveLength(1)
  })

  test('should match the snapshot', () => {
    const wrapper = mount(Index, { store, localVue, propsData: { comments } })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
