export const state = () => ({
    order: [],
    image: [],
});

export const mutations = {
    setOrder(state, payload) {
        state.order = payload.data;
    },
    setImage(state, payload) {
        state.image = payload;
    },
};

export const actions = {
    async fetch({ commit }) {
        const res = await this.$axios.get('/admin/lottery-order');
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
