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

import Counter from 'components/Counter'

export default {
  components: {
    Counter
  },

  data () {
    const path: string = './client'

    return {
      path
    }
  }
}
</script>
