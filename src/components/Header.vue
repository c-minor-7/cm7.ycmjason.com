<template>
  <header>
    <div class="container">
      <div class="site-name">Chords</div>
    </div>
  </header>
</template>

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
  height: 3rem;
  display: flex;
  align-items: center;
}

.site-name {
  font-family: $font-secondary;
}
</style>
