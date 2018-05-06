<template>
  <div class="wemake-services__component">
    <h1>
      <a href="https://github.com/wemake-services/wemake-vue-template">
        wemake-vue-template
      </a>
    </h1>

    <h2>
      <a href="https://wemake-services.gitbook.io/wemake-vue-template/">
        documentation
      </a>
    </h2>
  </div>
</template>

<style lang="scss" scoped>
@import '~scss/partials/mixins';

.wemake-services__component {
  @include centered();

  a,
  a:visited,
  a:active {
    color: black;
  }
}
</style>
