<template>
  <div>
    <Header></Header>
    <Nav :toggled="navToggled"></Nav>

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

export default {
  components: {
    Header,
    Nav,
    Footer,
  },

  data: () => ({
    navToggled: false,
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
