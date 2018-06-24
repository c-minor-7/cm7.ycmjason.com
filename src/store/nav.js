export const state = () => ({
  toggled: false,
});

export const mutations = {
  toggle(state, to = !state.toggled) {
    state.toggled = to;
  },
};
