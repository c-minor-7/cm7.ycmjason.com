<template>
  <main>
    <h1>Admin Login<small>I beg you, please don't hack me...</small></h1>
    <cm7-form :fields="fields" @submit="login"/>
  </main>
</template>

<script>
import Cm7Form from '@/components/global/Form.vue';

export default {
  components: { Cm7Form },
  data: () => ({
    fields: {
      password: {
        type: 'password',
        label: 'Password',
        placeholder: 'Your guilty pleasure... hmmmm...',
        error: '',
      },
    },
  }),
  methods: {
    async login({ password }) {
      this.fields.password.error = '';
      if (!await this.$store.dispatch('admin/login', password)) {
        this.fields.password.error = 'Incorrect password. Try again?';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
