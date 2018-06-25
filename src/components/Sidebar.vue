<template>
  <aside class="sidebar" :class="{ toggled }">
    <nav>
      <ul>
        <li v-for="item in items" :key="item.to">
          <nuxt-link
            :to="item.to"
            @click.native="$emit('toggle', false)">{{ item.label }}</nuxt-link>
        </li>
      </ul>
    </nav>

    <ul class="bottom">
      <li>v{{ version }}</li>
    </ul>
  </aside>
</template>

<script>
import { version } from '@@/package.json';

const getPosFromTouchEvent = e => ({
  x: e.changedTouches[0].clientX,
  y: e.changedTouches[0].clientY,
});

export default {
  props: {
    toggled: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    items: [
      {
        label: 'Home',
        to: '/',
      },
      {
        label: 'Requests',
        to: '/request',
      },
    ],
    version,
  }),

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
        this.$emit('toggle', dx > 0 && startPos.x <= 80);
      }
    }, { passive: true });

    document.addEventListener('click', e => {
      if (!this.toggled) return;
      if (!this.$el.contains(e.target)) {
        this.$emit('toggle', false);
      }
    }, { passive: true });
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/config.scss';

$transition-duration: 0.2s;

.sidebar {
  display: flex;
  flex-direction: column;
  $shadow-spread: 8px;
  position: fixed;
  z-index: 50;
  background: $color-background;
  box-shadow: 1px 0 $shadow-spread $color-border;
  transform: translateX(-100%) translateX(-$shadow-spread);
  transition: transform $transition-duration;
  height: 150vh;
  overflow: auto;
  top: 0;
  padding-top: $header-height;
  padding-bottom: 50vh;
  width: $sidebar-width;

  &.toggled {
    transform: unset;
  }

  @media (min-width: $media-breakpoint-md) {
    transform: unset;
  }
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
  display: block;
  padding: 0 1rem;

  &:first-child {
    padding-top: 1rem;
  }

  &:last-child {
    padding-bottom: 1rem;
  }

  &.nuxt-link-exact-active {
    color: $color-secondary;
  }
}

nav li a {
  display: block;
  cursor: pointer;
  padding: 0.5rem 0;
}

ul.bottom {
  margin-top: auto;
}
</style>
