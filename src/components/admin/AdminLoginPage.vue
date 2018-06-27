<template>
  <main>
    <h1>Admin Login<small>I beg you, please don't hack me...</small></h1>
    <cm7-form :fields="fields" @submit="login"/>
  </main>
</template>

<script>
export default {
  data: () => ({
    fields: {
      password: {
        type: 'password',
        label: 'Password',
        placeholder: 'Your guilty pleasure... hmmmm...',
      },
    },
  }),
  methods: {
    login({ password }) {
      if (!this.$store.dispatch('admin/login', password)) {
        this.message = 'Incorrect password. Try again?';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
