export const state = () => ({
    order: [],
    orderDetail: null,
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
        };
    },
    setOrderDetail(state, payload) {
        state.orderDetail = payload.data;
    },
    setImage(state, payload) {
        state.image = payload;
    },
};

export const actions = {
    async fetch({ commit }, params) {
        const res = await this.$axios.get('/admin/lottery-order', { params });
        console.log(res.data);
        commit('setOrder', res.data);
    },
    async getDetail({ commit }, id) {
        const res = await this.$axios.get(`/admin/lottery-order/detail/${id}`);
        commit('setOrderDetail', res.data);
    },
    async updateImage({ commit }, payload) {
        const res = await this.$axios.put(`/admin/lottery-order/updateImage/${payload.id}`, payload.data);
        commit('setImage', res);
    },
};
