import axios from 'axios';

const auth = async (password) => {
  if (!password) return false;

  const response = await axios.post('/api/admin/login', { password }).catch((error) => {
    if (!error.response) throw error;
    return error.response;
  });

  return response.status === 200;
};

export const state = () => ({
  authed: false,
});

export const mutations = {
  setAuthed(state, authed) {
    state.authed =authed;
  },
};

export const actions = {
  async login({ commit, dispatch }, password) {
    const authed = await auth(password);
    if (!authed) {
      dispatch('logout');
      return false;
    }

    commit('setAuthed', true);
    window.localStorage.setItem('admin_password', password);
    return true;
  },

  logout({ commit }) {
    commit('setAuthed', false);
    window.localStorage.removeItem('admin_password');
  },
};
