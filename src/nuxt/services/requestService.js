import api from './apiService';

export default {
  async create ({ name, email, songLink, content }) {
    return await api.post('/request', {
      name,
      email,
      songLink,
      content,
    });
  },
};
