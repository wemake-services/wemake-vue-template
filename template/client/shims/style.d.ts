import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    // Augmentation to allow css-modules in .vue files:
    $style: Readonly<Record<string, string>>
  }
}
