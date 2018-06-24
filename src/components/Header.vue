<template>
  <header>
    <div class="container">
      <NavButton class="nav-button" @toggle-nav="$emit('toggle-nav')"></NavButton>
      <nuxt-link to="/" class="site-name">Chords</nuxt-link>
    </div>
  </header>
</template>

<script>
import NavButton from './NavButton.vue';

export default {
  components: {
    NavButton,
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/config.scss';

header {
  background-color: $color-primary;
  color: $color-background;
  box-shadow: 0 1px 3px #656565;
  z-index: 99;
  position: fixed;
  top: 0;
  width: 100vw;
  height: $header-height;
  display: flex;
  align-items: center;
}

.site-name {
  font-family: $font-secondary;
  color: currentColor;
}

.container {
  display: flex;
  align-items: center;
  padding: 1rem;
}

.nav-button {
  margin-right: 1rem;
  @media (min-width: $media-breakpoint-md) {
    display: none;
  }
}
</style>
