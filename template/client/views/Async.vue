<template>
  <div class="page">
    <p>
      This component is async!
    </p>

    <p>
      This data is async too!
    </p>

    <ul class="item" v-if="item">
      <li class="item-id">ID: {{ item.id }}</li>
      <li class="item-name">Name: {{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AsyncDataMixin from 'mixins/async-data-mixin'

export default {
  mixins: [AsyncDataMixin],

  asyncData ({ store }) {
    return store.dispatch('fetchAsync')
  },

  computed: {
    ...mapState(['item'])
  }
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}
</style>
