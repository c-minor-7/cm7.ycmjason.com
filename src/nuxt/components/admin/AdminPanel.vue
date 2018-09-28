<template>
  <main>
    <h1>Admin Panel</h1>
    <button @click="logout" class="secondary">Logout</button>

    <section>
      <h2>Add new song</h2>
      <AddNewSongForm/>
    </section>
  </main>
</template>

<script>
import { mapActions } from 'vuex';
import AddNewSongForm from '@/components/admin/AddNewSongForm.vue';

export default {
  components: { AddNewSongForm },
  methods: mapActions('admin', ['logout']),
};
</script>

<style scoped>

</style>
