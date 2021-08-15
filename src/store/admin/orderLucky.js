export const state = () => ({
    order: [],
    orderDetail: null,
    image: [],
    pagination: null,
    file: null,
    date: null,
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
    setFile(state, payload) {
        state.file = payload;
    },
    setDate(state, payload) {
        state.date = payload;
    },
};

export const actions = {
    async fetch({ commit }, params) {
        const res = await this.$axios.get('/admin/lottery-order/vietlott', { params });
        commit('setOrder', res.data);
    },
    async fetchComputer({ commit }, params) {
        const res = await this.$axios.get('/admin/lottery-order/computer', { params });
        commit('setOrder', res.data);
    },
    async fetchConstruction({ commit }, params) {
        const res = await this.$axios.get('/admin/lottery-order/construction', { params });
        commit('setOrder', res.data);
    },
    async getDetail({ commit }, id) {
        const res = await this.$axios.get(`/admin/lottery-order/detail/${id}`);
        commit('setOrderDetail', res.data);
    },
    async createImage({ commit }, payload) {
        const res = await this.$axios.post(`/admin/lottery-order/${payload.id}/images`, payload.data);
        commit('setImage', res);
    },
    async updateImage({ commit }, payload) {
        const res = await this.$axios.put(`/admin/lottery-order/updateImage/${payload.id}`, payload.data);
        commit('setImage', res);
    },
    async cancelTicket({ commit }, id) {
        const res = await this.$axios.post(`/admin/lottery-order/${id}`);
        commit('setOrderDetail', res);
    },
    async upFile({ commit }, params) {
        const res = await this.$axios.post('/admin/lottery-order/excel/upload', params);
        commit('setFile', res.data);
    },
    async upDate({ commit }, params) {
        console.log(params);
        const res = await this.$axios.post('/admin/lottery-order/date/upload', params);
        commit('setDate', res.data);
    },
};
