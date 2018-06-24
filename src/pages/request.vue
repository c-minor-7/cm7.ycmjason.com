<template>
  <div>
    <h1>Request chords for a song</h1>
    <RequestForm></RequestForm>
  </div>
</template>

<script>
import RequestForm from '../components/RequestForm.vue';

export default {
  components: {
    RequestForm,
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/config.scss';

.notes {
  color: $color-secondary;
  margin: 1rem;
}
</style>
