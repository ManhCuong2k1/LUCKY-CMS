export const state = () => ({
    limit: null,
});

export const mutations = {
    setLimitExcgange(state, payload) {
        state.limit = payload;
    },
};

export const actions = {
    async fetch({ commit }, payload) {
        const res = await this.$axios.post('/admin/setting', payload.data);
        commit('setLimitExcgange', res.data);
    },

    async show({ commit }) {
        const res = await this.$axios.get('/admin/setting');
        commit('setLimitExcgange', res.data);
    },

    async update({ commit }, payload) {
        await this.$axios.put('/admin/setting', payload.data);
        commit('setLimitExcgange', payload.data);
    },
};
