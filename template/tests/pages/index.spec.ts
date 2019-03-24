import { mount, createLocalVue } from '@vue/test-utils'
import MockAdapter from 'axios-mock-adapter'

import Index from '~/pages/index.vue'
import { storeFactory, commentFactory } from '../fixtures/vuex'

const localVue = createLocalVue()

describe('unit tests for Index view', () => {
  let store
  let comments

  beforeEach(() => {
    comments = commentFactory.buildList(3)
    store = storeFactory.build({ 'state': { comments } }, { localVue })

    // Clearing mocks:
    jest.clearAllMocks()
  })

  test('should have three comments', () => {
    expect.hasAssertions()
    const wrapper = mount(Index, { store, localVue, 'propsData': { comments } })
    expect(wrapper.findAll('.commentComponent')).toHaveLength(3)
  })

  test('should load new comments on actions', async () => {
    expect.hasAssertions()
    const comment = comments[0]
    const wrapper = mount(Index, { store, localVue, 'propsData': { comments } })

    const mock = new MockAdapter(store.$axios)
    mock.onGet('/comments').reply(200, [comment])

    await wrapper.vm.$store.dispatch('fetchComments', wrapper.vm)

    expect(wrapper.vm.$store.state.comments).toHaveLength(1)
    expect(wrapper.vm.$store.state.comments[0].id).toStrictEqual(comment.id)
    expect(wrapper.vm.$store.state.comments[0].email)
      .toStrictEqual(comment.email)
    expect(wrapper.findAll('.commentComponent')).toHaveLength(1)
  })
})

describe('snapshot test for Index view', () => {
  let store
  let comments

  beforeAll(() => {
    // We need a seed here to be consistent for snapshot testing:
    comments = commentFactory.buildList(3, {}, { 'seed': 1342 })
    store = storeFactory.build({ 'state': { comments } }, { localVue })
  })

  test('should match the snapshot', () => {
    expect.hasAssertions()
    const wrapper = mount(Index, {
      store,
      localVue,
      'propsData': { comments },
    })

    expect(wrapper).toMatchSnapshot()
  })
})
