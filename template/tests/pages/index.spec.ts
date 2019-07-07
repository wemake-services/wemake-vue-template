import { mount, createLocalVue } from '@vue/test-utils'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { Container } from 'vue-typedi'
import { Store } from 'vuex'

import { CommentType } from '~/logic/comments/types'
import TypedStore from '~/logic/store'
import tokens from '~/logic/tokens'
import { StateType } from '~/logic/types'
import Index from '~/pages/index.vue'

import { storeFactory, commentFactory } from '@/fixtures/vuex'

const localVue = createLocalVue()

describe('unit tests for Index view', () => {
  let store: Store<StateType>
  let comments: CommentType[]

  beforeEach(() => {
    comments = commentFactory.buildList(3)
    store = storeFactory.build(undefined, {
      localVue,
      'state': {
        'comments': { comments },
      },
    })

    // Clearing mocks:
    jest.clearAllMocks()
  })

  test('should have three comments', () => {
    expect.hasAssertions()

    const wrapper = mount(Index, {
      store,
      localVue,
      'propsData': { comments },
    })

    expect(wrapper.findAll('.comment-component')).toHaveLength(3)
  })

  test('should load new comments on actions', async () => {
    expect.hasAssertions()

    const comment = comments[0]
    const wrapper = mount(Index, {
      store,
      localVue,
      'propsData': { comments },
    })
    const typedStore: TypedStore = (wrapper.vm as any).typedStore

    new MockAdapter(axios).onGet('/comments').reply(200, [comment])
    Container.set(tokens.AXIOS, axios)

    await typedStore.comments.fetchComments()

    expect(wrapper.vm.$store.state.comments.comments).toHaveLength(1)
    expect(wrapper.vm.$store.state.comments.comments[0].id)
      .toStrictEqual(comment.id)
    expect(wrapper.findAll('.comment-component')).toHaveLength(1)
  })
})

describe('snapshot test for Index view', () => {
  let store: Store<StateType>
  let comments: CommentType[]

  beforeAll(() => {
    // We need a seed here to be consistent for snapshot testing:
    comments = commentFactory.buildList(3, {}, { 'seed': 1342 })
    store = storeFactory.build(undefined, {
      localVue,
      'state': {
        'comments': { comments },
      },
    })
  })

  test('should match the snapshot', () => {
    expect.hasAssertions()

    const wrapper = mount(Index, {
      store,
      localVue,
    })

    expect(wrapper).toMatchSnapshot()
  })
})
