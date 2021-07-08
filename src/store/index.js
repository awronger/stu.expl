import Vue from 'vue'
import Vuex from 'vuex'

import loginStore from './modules/loginStore.js'
import persistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        loginStore
    },
    plugins: [
        persistedState({
            storage: sessionStorage,
            reducer(val) {
                return {
                    loginStore: {}
                }
            }
        }), persistedState({
            storage: localStorage,
            reducer(val) {
                return {
                    loginStore: {
                        userinfo: val.loginStore.userinfo,                   
                    }
                }
            }
        })],
        // getters
})