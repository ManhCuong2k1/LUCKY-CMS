export const state = () => ({
    images: [],
});

export const mutations = {
    setImages(state, payload) {
        state.images = payload;
    },
};

export const actions = {
    async fetch({ commit }, id) {
        const res = await this.$axios.get(`/upload/images/${id}`);
        commit('setImages', res.data);
    },
};
