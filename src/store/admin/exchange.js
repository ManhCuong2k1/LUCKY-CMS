export const state = () => ({
    exchanges: [],
    pagination: null,
    exchange: null,
    total: null,
});

export const mutations = {
    setExchanges(state, payload) {
        state.exchanges = payload.data;
        state.pagination = {
            page: payload.page,
            pageSize: payload.pageSize,
            total: payload.total,
        };
    },
    setExchange(state, payload) {
        state.exchange = payload;
    },
    setTotalExchangeToday(state, payload) {
        state.total = payload;
    },
};

export const actions = {
    async fetch({ commit }, params) {
        const res = await this.$axios.get('/admin/exchange', { params });
        commit('setExchanges', res.data);
    },
    async update({ commit }, id) {
        const res = await this.$axios.put(`/admin/exchange/${id}`);
        commit('setExchange', res.data);
    },
    async totalExchangeToday({ commit }) {
        const res = await this.$axios.get('/admin/exchange/detail');
        commit('setTotalExchangeToday', res.data);
    },
};
