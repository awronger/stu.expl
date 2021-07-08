export default {
    init() {
        console.log(111);
    },
    login(){
        // console.log(222);
        this.$router.push({name:'Home'}).catch(() => {})
        this.setAccount('111')
        console.log(this.$store.getters);
    }
}