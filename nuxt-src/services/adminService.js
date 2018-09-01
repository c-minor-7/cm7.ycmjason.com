import axios from 'axios';

const post = (endpoint, password = window.localStorage.getItem('admin_password')) => axios({
  url: endpoint,
  method: 'POST',
  headers: { 'X-ADMIN-AUTH': password },
});

export default {
  async auth(password) {
    if (!password) return false;

    try {
      const response = await post('/api/admin/auth', password);
      return response.status === 200;

    } catch (e) {
      if (!e.response) throw e;
      return false;
    }
  },
};
