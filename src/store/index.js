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
            // reducer(val) {
            //     return {
            //         loginStore: {
            //             userinfo: val.userinfo,
            //         }
            //     }
            // }
        }), persistedState({
            storage: localStorage,
            reducer(val) {
                return {
                    userinfo: val.userinfo,                   
                }
            }
        })],
        // getters
})