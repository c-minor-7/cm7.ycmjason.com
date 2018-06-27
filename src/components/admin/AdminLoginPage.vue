<template>
  <main>
    <h1>Admin Login<small>I beg you, please don't hack me...</small></h1>
    <form @submit.prevent="login">
      <input type="password" placeholder="your private secret" v-model="password">
      <div class="message" v-html="message"></div>
      <input type="submit" value="Submit">
    </form>
  </main>
</template>

<script>
export default {
  data: () => ({
    password: '',
    message: '',
  }),
  methods: {
    login() {
      if (!this.$store.dispatch('admin/login', this.password)) {
        this.message = 'Incorrect password. Try again?';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/config.scss";

input {
  margin-bottom: 1rem;
}

.message {
  margin-bottom: 1rem;
  color: $color-danger;
}
</style>
