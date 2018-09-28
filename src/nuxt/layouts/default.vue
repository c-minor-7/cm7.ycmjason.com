<template>
  <div>
    <Header @toggle-sidebar="sidebarToggle"></Header>
    <Sidebar :toggled="sidebarToggled" @toggle="sidebarToggle"></Sidebar>

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
import Sidebar from '@/components/Sidebar.vue';
import Footer from '@/components/Footer.vue';

import { mapState, mapMutations } from 'vuex';

export default {
  components: {
    Header,
    Sidebar,
    Footer,
  },

  computed: mapState('sidebar', {
    'sidebarToggled': 'toggled',
  }),

  methods: mapMutations('sidebar', {
    'sidebarToggle': 'toggle',
  }),
};
</script>

<style lang="scss" scoped>
@import '@/scss/config.scss';

.content-container {
  margin-top: $header-height;
  @media (min-width: $media-breakpoint-md) {
    transform: translateX($sidebar-width);
    width: calc(100vw - #{$sidebar-width});
  }
}

.content {
  &::before {
    content: ' ';
    display: table;
  }

  max-width: $media-breakpoint-md;
  padding: 0 1rem;
  @media (min-width: $media-breakpoint-md) {
    width: calc(100vw - #{$sidebar-width});
    margin: 0 auto;
  }
}
</style>
