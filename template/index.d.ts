import Vue from 'vue'
import '@nuxtjs/axios'

declare module 'vue/types/vue' {
  // 3. Declare augmentation for Vue
  interface Vue {
    // Augmentation to allow css-modules in .vue files:
    $style: { [key: string]: string };
  }
}
