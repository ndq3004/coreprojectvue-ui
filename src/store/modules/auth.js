import axios from 'axios';
const state = {
    user: null
};
const getters = {
    isAuthenticated: state => !!state.user,
    StateUser: state => state.user
};
const actions = {
    async login({commit}, User){
        await axios.post("/auth", User)
        await commit('setUser', User['username'])
    }
};
const mutations = {
    setUser(state, username){
        debugger
        state.user = username;
    }
};
export default {
  state,
  getters,
  actions,
  mutations
};