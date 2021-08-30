export const state = () => ({
    status: null,
});

export const mutations = {
    setStatusGame(state, payload) {
        state.status = payload;
    },
};

export const actions = {
    async fetch({ commit }, payload) {
        const res = await this.$axios.post('/admin/status-game', payload.data);
        commit('setStatusGame', res.data);
    },

    async show({ commit }) {
        const res = await this.$axios.get('/admin/status-game');
        commit('setStatusGame', res.data);
    },

    async update({ commit }, payload) {
        await this.$axios.put('/admin/status-game', payload.data);
        commit('setStatusGame', payload.data);
    },
};
