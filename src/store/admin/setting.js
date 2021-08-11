export const state = () => ({
    limit: null,
    hotline: null,
});

export const mutations = {
    setLimitExcgange(state, payload) {
        state.limit = payload;
    },
    setHotline(state, payload) {
        state.hotline = payload;
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

    async createHotline({ commit }, payload) {
        const res = await this.$axios.post('/admin/setting/hotline', payload.data);
        commit('setHotline', res.data);
    },

    async getHotline({ commit }) {
        const res = await this.$axios.get('/admin/setting/hotline');
        commit('setHotline', res.data);
    },

    async updateHotline({ commit }, payload) {
        console.log(payload.data);
        await this.$axios.put('/admin/setting/hotline', payload.data);
        commit('setHotline', payload.data);
    },
};
