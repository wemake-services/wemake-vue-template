// @flow

import { mount, createLocalVue } from '@vue/test-utils'
import MockAdapter from 'axios-mock-adapter'

import Index from '~/views/Index'
import { storeFactory, commentFactory } from '../fixtures/vuex'

const localVue = createLocalVue()

describe('unit tests for Index view', () => {
  let store
  let comments

  beforeEach(() => {
    comments = commentFactory.buildList(3)
    store = storeFactory.build({ state: { comments } }, { localVue })
  })

  test('should have three comments', () => {
    const wrapper = mount(Index, { store, localVue, propsData: { comments } })
    expect(wrapper.findAll('.commentComponent')).toHaveLength(3)
  })

  test('should load new comments on actions', async () => {
    const comment = comments[0]
    const wrapper = mount(Index, { store, localVue, propsData: { comments } })

    const mock = new MockAdapter(store.$axios)
    mock.onGet('/comments').reply(200, [comment])

    await wrapper.vm.$store.dispatch('fetchComments', wrapper.vm)
    expect(wrapper.vm.$store.state.comments).toHaveLength(1)
    expect(wrapper.vm.$store.state.comments[0].id).toEqual(comment.id)
    expect(wrapper.vm.$store.state.comments[0].email).toEqual(comment.email)
    expect(wrapper.findAll('.commentComponent')).toHaveLength(1)
  })
})

describe('snapshot test for Index view', () => {
  let store
  let comments

  beforeAll(() => {
    // We need a seed here to be consistent for snapshot testing:
    comments = commentFactory.buildList(3, {}, { seed: 1342 })
    store = storeFactory.build({ state: { comments } }, { localVue })
  })

  test('should match the snapshot', () => {
    const wrapper = mount(Index, { store, localVue, propsData: { comments } })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
