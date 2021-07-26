export const state = () => ({
    history: [],
    pagination: null,
});

export const mutations = {
    setHistory(state, payload) {
        state.history = payload.data;
        state.pagination = {
            page: payload.page,
            pageSize: payload.pageSize,
            total: payload.total,
        };
    },
};

export const actions = {
    async fetch({ commit }, params) {
        const res = await this.$axios.get('/admin/history', { params });
        commit('setHistory', res.data);
    },
};
