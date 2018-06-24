<template>
  <div>
    <Header @toggle-nav="navToggle"></Header>
    <Nav :toggled="navToggled" @toggle="navToggle"></Nav>

    <main class="container">
      <nuxt></nuxt>
    </main>

    <Footer></Footer>
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

main {
  padding-top: 3rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
