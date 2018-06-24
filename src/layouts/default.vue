<template>
  <div>
    <Header @toggle-nav="navToggle"></Header>
    <Nav :toggled="navToggled" @toggle="navToggle"></Nav>

    <div class="content-container">
      <div class="content">
        <nuxt></nuxt>
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';

import { mapState, mapMutations } from 'vuex';

export default {
  components: {
    Header,
    Nav,
    Footer,
  },

  computed: mapState('nav', {
    'navToggled': 'toggled',
  }),

  methods: mapMutations('nav', {
    'navToggle': 'toggle',
  }),
};
</script>

<style lang="scss" scoped>
@import '@/scss/config.scss';

.content-container {
  margin-top: $header-height;
  @media (min-width: $media-breakpoint-md) {
    transform: translateX($nav-width);
    width: calc(100vw - #{$nav-width});
  }
}

.content {
  padding: 1rem;
  max-width: $media-breakpoint-md;
  @media (min-width: $media-breakpoint-md) {
    width: calc(100vw - #{$nav-width});
    margin: 0 auto;
  }
}
</style>
