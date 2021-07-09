import {mapActions, mapState} from 'vuex'

export default{
    methods: {
        ...mapActions(['setAccount','setPassword','setToken'])
    }
}