export const state = () => ({
    banks: [],
    bank: null,
});

export const mutations = {
    setbanks(state, payload) {
        state.banks = payload;
    },
    setbank(state, payload) {
        state.bank = payload;
    },
};

export const actions = {
    async fetch({ commit }) {
        const res = await this.$axios.get('/admin/setting/bank');
        commit('setbanks', res.data);
    },
    async create({ commit }, payload) {
        await this.$axios.post('/admin/setting/update-bank', payload);
        commit('setbanks');
    },
    async update({ commit }, payload) {
        const res = await this.$axios.put(`/admin/setting/bank/${payload.id}`, payload.data);
        commit('setbank', res.data);
    },
    async show({ commit }, id) {
        const res = await this.$axios.get(`/admin/setting/bank/${id}`);
        commit('setbank', res.data);
    },
    async delete({ commit }, id) {
        await this.$axios.delete(`/admin/setting/bank/${id}`);
        commit('setbank');
    },
};
