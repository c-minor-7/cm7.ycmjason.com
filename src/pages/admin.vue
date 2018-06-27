<template>
  <div v-if="!authed">
    <AdminLoginPage/>
  </div>
  <div v-else>
    <AdminPanel/>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import AdminPanel from '@/components/admin/AdminPanel';
import AdminLoginPage from '@/components/admin/AdminLoginPage';

export default {
  components: { AdminPanel, AdminLoginPage },

  mounted() {
    this.$store.dispatch('admin/login', window.localStorage.getItem('admin_password'));
  },

  computed: mapState('admin', ['authed']),
};
</script>

<style lang="scss" scoped>
</style>
