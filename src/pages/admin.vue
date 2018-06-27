<template>
  <div v-if="!loggedIn">
    <AdminLoginPage @login="auth"/>
  </div>
  <div v-else>
    <AdminPanel/>
  </div>
</template>

<script>
import axios from 'axios';

import AdminPanel from '@/components/admin/AdminPanel';
import AdminLoginPage from '@/components/admin/AdminLoginPage';

export default {
  components: { AdminPanel, AdminLoginPage },

  async mounted() {
    this.loggedIn = await this.auth(this.password);
  },

  data: () => ({
    loggedIn: false,
  }),

  methods: {
    async auth(password) {
      if (!password) return false;

      const response = await axios.post('/api/admin/login', { password }).catch((error) => {
        if (!error.response) throw error;
        return error.response;
      });

      return response.status === 200;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
