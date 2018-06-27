<template>
  <main>
    <h1>Admin Panel</h1>
    <button @click="logout" class="secondary">Logout</button>
  </main>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: mapActions('admin', ['logout']),
};
</script>

<style scoped>

</style>
