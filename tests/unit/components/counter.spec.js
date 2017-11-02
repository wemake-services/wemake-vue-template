import Vuex from 'vuex'
import { mount, createLocalVue } from 'vue-test-utils'
import Counter from 'components/Counter'
import createStore from 'store'
import * as types from 'store/types'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Counter component unit tests', () => {
  let store

  beforeEach(() => {
    store = createStore()
  })

  it('should have three buttons', () => {
    const wrapper = mount(Counter, { store, localVue })

    expect(wrapper.findAll('button').length).toBe(3)
  })

  it('should have 0 as a default counter value', () => {
    const wrapper = mount(Counter, { store, localVue })

    expect(wrapper.find('.counter').text().trim()).toBe('0')
  })

  it('should increment counter', () => {
    const wrapper = mount(Counter, { store, localVue })

    wrapper.vm.$store.commit(types.INCREMENT)
    expect(wrapper.vm.count).toBe(1)
  })

  it('should decrement counter', () => {
    const wrapper = mount(Counter, { store, localVue })

    wrapper.vm.$store.commit(types.DECREMENT)
    expect(wrapper.vm.count).toBe(-1)
  })

  it('should match the snapshot', () => {
    const wrapper = mount(Counter, { store, localVue })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
