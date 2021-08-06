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
        console.log(res.data);
        commit('setImages', res.data);
    },
    // async create({ commit }, payload) {
    //     const res = await this.$axios.post('/admin/banner', payload);
    //     commit('setBanner', res.data);
    // },
};
