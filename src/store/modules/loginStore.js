import getters from '../getters.js'
export default {
    state: {
        userInfo:{
            account:'',
            password:'',
            token:''
        }
    },
    getters,
    mutations: {
        SET_ACCOUNT(state,payload){
            state.userInfo.account = payload
        },
        SET_PASSWORD(state,payload){
            state.userInfo.password = payload
        },
        SET_TOKEN(state,payload){
            state.userInfo.token = payload
        }
    },
    actions: {
        setAccount(context,param){
            context.commit('SET_ACCOUNT',param)
        },
        setPassword(context,param){
            context.commit('SET_PASSWORD',param)
        },
        setToken(context,param){
            context.commit('SET_TOKEN',param)
        }
    },
}