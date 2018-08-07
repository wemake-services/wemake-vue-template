// @flow

import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'

import ActionBar from '~/components/ActionBar'

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
    const wrapper = mount(ActionBar, { store, localVue })

    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.is(ActionBar)).toBeTruthy()
    expect(wrapper.findAll('button')).toHaveLength(1)
  })

  test('should call fetchComments action', () => {
    const wrapper = mount(ActionBar, { store, localVue })

    const input = wrapper.find('button')
    input.trigger('click')

    expect(actions.fetchComments).toHaveBeenCalled()
  })

  test('should match the snapshot', () => {
    const wrapper = mount(ActionBar, { store, localVue })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
