export const state = () => ({
    order: [],
    image: [],
    pagination: null,
});

export const mutations = {
    setOrder(state, payload) {
        state.order = payload.data;
        state.pagination = {
            page: payload.page,
            pageSize: payload.pageSize,
            total: payload.total,
            // lastPage: Math.ceil(payload.total / payload.pageSize),
        };
    },
    setImage(state, payload) {
        state.image = payload;
    },
};

export const actions = {
    async fetch({ commit }, params) {
        const res = await this.$axios.get('/admin/lottery-order', { params });
        commit('setOrder', res.data);
    },
    async getDetail({ commit }, id) {
        const res = await this.$axios.get(`/admin/lottery-order/detail/${id}`);
        commit('setOrder', res.data);
    },
    async upload({ commit }, payload) {
        const res = await this.$axios.post(`/admin/lottery-order/${payload.id}/images`, payload.image);
        commit('setImage', res);
    },
};
