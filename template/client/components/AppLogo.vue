<template>
  <div :class="$style.logo">
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

<style lang="scss" module>
@import '~/scss/variables';
@import '~/scss/mixins';

.logo {
  @include centered();

  a,
  a:visited,
  a:active {
    color: $color-black;
  }
}
</style>
