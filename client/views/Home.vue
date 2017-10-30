<template>
  <div class="page">
    <counter></counter>
    <p>
      To get started, edit files in <code>{{ path }}</code> and save.
    </p>
  </div>
</template>

<script>
// @flow

// eslint-disable-next-line flowtype-errors/show-errors
import Counter from '../components/Counter'

export default {
  components: {
    Counter
  },

  data () {
    const flowTyped: string = './client'

    return {
      path: flowTyped
    }
  }
}
</script>
