import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'

import ActionBar from '~/components/ActionBar.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('unit tests for ActionBar component', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      'fetchComments': jest.fn(), // mocking Vuex action call
    }

    store = new Vuex.Store({ actions })
  })

  test('should have one button', () => {
    expect.hasAssertions()
    const wrapper = mount(ActionBar, { store, localVue })

    expect(wrapper.isVueInstance()).toBe(true)
    expect(wrapper.is(ActionBar)).toBe(true)
    expect(wrapper.findAll('button')).toHaveLength(1)
  })

  test('should call fetchComments action', () => {
    expect.hasAssertions()
    const wrapper = mount(ActionBar, { store, localVue })

    const input = wrapper.find('button')
    input.trigger('click')

    expect(actions.fetchComments).toHaveBeenCalled()
  })

  test('should match the snapshot', () => {
    expect.hasAssertions()
    const wrapper = mount(ActionBar, { store, localVue })
    expect(wrapper).toMatchSnapshot()
  })
})
