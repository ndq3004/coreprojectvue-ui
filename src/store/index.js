import Vuex from 'vuex'
import Vue from 'vue'
import createPersistedState from "vuex-persistedstate"
import auth from './modules/auth'

//load vuex
Vue.use(Vuex);

//create store
export default new Vuex.Store({
    modules:{
        auth
    },
    plugins: [createPersistedState()]
})