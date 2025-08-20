const music = {
    namespaced: true,
    state() {
      return {
        power: false,
      }
    },
    mutations: {
        toggleMutationPower(state, {newPower}) {
          state.power = newPower;
        }
    },
    actions: {},
    getters: {},
};

export default music;