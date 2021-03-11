import { createStore } from 'vuex'

export default createStore({
    state: {
        modalOpen: false,
        routeAnnouncement: ''
    },
    mutations: {
        UPDATE_ROUTE_ANNOUNCEMENT(state, payload) {
            state.routeAnnouncement = payload
        },
        TOGGLEMODAL(state, payload) {
            state.modalOpen = payload;
        },
    },
    actions: {
        update_routeAnnouncement({ commit }, { message }) {
            commit('UPDATE_ROUTE_ANNOUNCEMENT', message)
        },
        openModal({ commit }) {
            commit("TOGGLEMODAL", true);
        },
        closeModal({ commit }) {
            commit("TOGGLEMODAL", false);
            document.getElementById("focusHere").focus();
        },
    },
    modules: {}
})