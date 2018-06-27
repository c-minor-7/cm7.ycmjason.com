import adminService from '@/services/adminService';

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
    console.log(adminService);
    const authed = await adminService.auth(password);
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
