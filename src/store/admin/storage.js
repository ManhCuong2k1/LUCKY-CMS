export const state = () => ({
    files: [],
    pagination: null,
});

export const mutations = {
    setFile(state, payload) {
        state.files = payload.data;
        state.pagination = {
            page: payload.page,
            pageSize: payload.pageSize,
            total: payload.total,
        };
    },
};

export const actions = {
    async fetch({ commit }, params) {
        const res = await this.$axios.get('/admin/storage', { params });
        commit('setFile', res.data);
    },
};
