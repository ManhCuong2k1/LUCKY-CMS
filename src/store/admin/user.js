export const state = () => ({
    users: [],
    user: null,
    id: null,
    pagination: null,
});

export const getters = {
    getUsers(state) {
        return state.users;
    },
};

export const mutations = {
    setUsersData(state, payload) {
        state.users = payload.data;
        state.pagination = {
            page: payload.page,
            pageSize: payload.pageSize,
            total: payload.total,
        };
    },
    setUser(state, payload) {
        state.user = payload.data;
    },
    setIdUser(state, payload) {
        state.id = payload;
    },
};

export const actions = {
    async fetch({ commit }, params) {
        const res = await this.$axios.get('/admin/users', { params });
        commit('setUsersData', res.data);
    },

    async show({ commit }, id) {
        const res = await this.$axios.get(`/admin/users/${id}`);
        commit('setUser', res.data);
    },

    async update({ commit }, payload) {
        await this.$axios.put(`/admin/user/${payload.id}`, payload.data);
        commit('setUser', payload.data);
    },

    async lock({ commit }, payload) {
        const data = await this.$axios.delete(`/admin/user/${payload.id}`);
        commit('setUser', data);
    },

    async unLock({ commit }, payload) {
        const data = await this.$axios.put(`/admin/user/restore/${payload.id}`);
        commit('setUser', data);
    },
    fetchIdUser({ commit }, id) {
        commit('setIdUser', id);
    },
};
