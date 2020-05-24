import { mount, createLocalVue } from '@vue/test-utils'
import { Store } from 'vuex'

import ActionBar from '~/components/ActionBar.vue'
import { StateType } from '~/logic/types'

import { storeFactory } from '@/fixtures/vuex'

const localVue = createLocalVue()

describe('unit tests for ActionBar component', () => {
  let store: Store<StateType>

  beforeEach(() => {
    store = storeFactory.build(undefined, { localVue })
    // @ts-ignore
    // eslint-disable-next-line no-underscore-dangle
    store.__vxs_root__.comments.fetchComments = jest.fn()
  })

  test('should have one button', () => {
    expect.hasAssertions()

    const wrapper = mount(ActionBar, { store, localVue })

    expect(Boolean(wrapper.vm)).toBe(true)
    expect(wrapper.findAll('button')).toHaveLength(1)
  })

  test('should call fetchComments action', () => {
    expect.hasAssertions()

    const wrapper = mount(ActionBar, { store, localVue })
    const input = wrapper.find('button')
    input.trigger('click')

    // @ts-ignore
    // eslint-disable-next-line no-underscore-dangle
    expect(store.__vxs_root__.comments.fetchComments).toHaveBeenCalled()
  })

  test('should match the snapshot', () => {
    expect.hasAssertions()

    const wrapper = mount(ActionBar, { store, localVue })

    expect(wrapper).toMatchSnapshot()
  })
})
