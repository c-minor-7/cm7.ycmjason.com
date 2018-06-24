<template>
  <nav :class="{ toggled }">
    <ul>
      <li v-for="(item, i) in items" :key="i">{{ item.label }}</li>
    </ul>
  </nav>
</template>

<script>
const getPosFromTouchEvent = e => ({
  x: e.changedTouches[0].clientX,
  y: e.changedTouches[0].clientY,
});

export default {
  mounted() {
    let startPos = {};
    document.addEventListener('touchstart', startEvent => {
      startPos = getPosFromTouchEvent(startEvent);
    }, { passive: true });

    document.addEventListener('touchend', endEvent => {
      const endPos = getPosFromTouchEvent(endEvent);
      const dx = endPos.x - startPos.x;
      const dy = endPos.y - startPos.y;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        this.toggled = dx > 0 && startPos.x <= 80;
      }
    }, { passive: true });

    document.addEventListener('click', e => {
      if (!this.toggled) return;
      if (!this.$el.contains(e.target)) {
        this.toggled = false;
      }
    }, { passive: true });
  },

  data: () => ({
    toggled: false,
    items: [
      {
        label: 'Request a song!',
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
@import '@/scss/config.scss';

$transition-duration: 0.2s;

nav {
  position: fixed;
  z-index: 50;
  background: $color-background;
  box-shadow: 1px 0 3px #656565;
  transform: translateX(-100%) translateX(-5px);
  transition: transform $transition-duration;
  height: 100vh;
  overflow: auto;
  top: 0;
  padding-top: 3rem;

  &.toggled {
    transform: unset;
  }
}

ul {
  margin: 0;
  padding: 1rem;
}
li {
  list-style: none;
  display: block;
}
</style>
