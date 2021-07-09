export default {
    init() {
        console.log(111)
    },
    login(){
        // console.log(222)
        const { userInfo } = this
        this.setAccount(userInfo.account)
        this.setPassword(userInfo.password)
        this.setToken('ASDADASDFSAFSDFGDFHGFHFH')
        console.log(this.$store.getters)
        this.$router.push({name:'Home'}).catch(() => {})
    }
}