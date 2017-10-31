<template>
  <div class="page">
    <p>
      This component is async!
    </p>

    <p>
      This data is async too!
    </p>

    <ul v-if="item">
      <li>ID: {{ item.id }}</li>
      <li>Name: {{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AsyncDataMixin from 'mixins/async-data-mixin'

export default {
  mixins: [AsyncDataMixin],

  asyncData ({ store }) {
    console.log('dispatch')
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
