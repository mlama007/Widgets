import { createStore } from 'vuex'

export default createStore({
    state: {
        modalOpen: false,
        people: [{
            firstName: "Maria",
            lastName: "Lamardo"
        }],
        announce: "",
        routeAnnouncement: ''
    },
    mutations: {
        UPDATE_ROUTE_ANNOUNCEMENT(state, payload) {
            state.routeAnnouncement = payload
        },
        TOGGLEMODAL(state, payload) {
            state.modalOpen = payload;
        },
        DELETEPERSON(state, index) {
            state.people.splice(index, 1);
        },
        ADDPERSON(state, person) {
            state.people.push(person);
        },
        UPDATEANNOUNCE(state, payload) {
            state.announce = payload;
        }
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
            document.getElementById("addNew").focus();
        },
        deletePerson({ commit }, { index, person }) {
            commit("DELETEPERSON", index);
            commit("UPDATEANNOUNCE", `${person.firstName} has been deleted.`);
            document.getElementById("pageTitle").focus();
        },
        addPerson({ commit }, person) {
            let form = { firstName: person.formFirstName, lastName: person.formLastName }
            commit('ADDPERSON', form);
            commit('UPDATEANNOUNCE', `${form.firstName} has been added.`);
        }
    },
    modules: {}
})