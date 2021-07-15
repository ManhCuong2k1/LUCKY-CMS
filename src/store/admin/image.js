export const state = () => ({
    images: [],
});

export const getters = {
    getimages(state) {
        return state.images;
    },
};

export const mutations = {
    setimagesData(state, payload) {
        state.images = payload.data;
    },
};

export const actions = {
    async fetchData({ commit }, params) {
        const res = await this.$axios.post(`/admin/lottery-order/${params}/images`);
        commit('setimagesData', res.data);
    },
    // async fetchData({ commit }, params) {
    //     const res = await this.$axios.post(`/admin/lottery-order/${params}/images`);
    //     commit('setimagesData', res.data);
    // },
};
