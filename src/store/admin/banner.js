export const state = () => ({
    banners: [],
});

export const mutations = {
    setBanner(state, payload) {
        state.banners = payload;
    },
};

export const actions = {
    async fetch({ commit }) {
        const res = await this.$axios.get('/admin/banner');
        commit('setBanner', res.data);
    },
    async create({ commit }, payload) {
        const res = await this.$axios.post('/admin/banner', payload);
        commit('setBanner', res.data);
    },
};
