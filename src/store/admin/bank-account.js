export const state = () => ({
    banks: [],
});

export const mutations = {
    setbank(state, payload) {
        state.banks = payload.data.bank_rerchage_info;
    },
};

export const actions = {
    async fetch({ commit }) {
        const res = await this.$axios.get('/init/app-settings');
        commit('setbank', res.data);
    },
    async update({ commit }, payload) {
        await this.$axios.post('/admin/setting/update-bank', payload);
        commit('setbank');
    },
};
