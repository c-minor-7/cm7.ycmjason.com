<template>
  <div>
    <transition mode="out-in">
      <section v-if="progress === 'form'" :key="progress">
        <h1>Request chords for a song</h1>
        <RequestForm @submit="submitRequest"></RequestForm>
      </section>

      <section v-else-if="progress === 'sending'" :key="progress">
        <h1>Sending...</h1>
        <p>Your request is on its way...</p>
      </section>

      <section v-else-if="progress === 'sent'" :key="progress">
        <h1>Successful!</h1>
        <p>Your request has been sent.</p>

        <button @click="reset">Send another</button>
      </section>

      <section v-else :key="progress">
        <h1>We are sorry, something went wrong...</h1>
        <p>{{ error || 'How did you get here?' }}</p>

        <p>Please report to me@ycmjason.com</p>

        <button @click="reset">Try again?</button>
      </section>
    </transition>
  </div>
</template>

<script>
import RequestForm from '../components/RequestForm.vue';

const getFreshData = () => ({
  progress: 'form',
  error: '',
});

export default {
  components: {
    RequestForm,
  },
  data: () => getFreshData(),
  methods: {
    async submitRequest(request) {
      this.$ga.event('request', 'sending');
      this.progress = 'sending';

      const { data, status } = await axios.post('/api/request', request);
      if (status !== 200) {
        this.$ga.event('request', 'error', data);
        this.progress = 'error';
        this.error = data.error;
        return;
      }

      this.$ga.event('request', 'sent');
      this.progress = 'sent';
    },

    reset() {
      Object.assign(this, getFreshData());
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/config.scss';

$transition-duration: 0.3s;
$transition-translate-distance: 100px;

.v-leave-to {
  transform: translateX($transition-translate-distance);
  opacity: 0;
}

.v-enter-active, .v-leave-active {
  transition: all $transition-duration;
}

.v-enter {
  transform: translateX(-$transition-translate-distance);
  opacity: 0;
}

.v-enter-to {
  transform: unset;
  opacity: 1;
}
</style>
