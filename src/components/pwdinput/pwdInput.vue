<template>
  <div class="pwd-input border-black flex-r-s-c">
    <div class="front-icon mg-r-sm">
        <i class="fa fa-lock user-icon"></i>
    </div>
    <input class="input-style" :type="status ? 'password' : 'text'" />
    <div class="back-icon mg-l-sm" @click="changeStatus">
        <i class="fa user-icon" :class="{'fa-eye-slash': status,'fa-eye': !status}"></i>
    </div>
  </div>
</template>
<script>
export default {
  props: {
      //输入文本类型（账户text和密码password）
      type:{
          type: String,
          default: 'password'
      },
  },
  data() {
    return {
        status: this.type === 'password'
    };
  },
  computed:{
      
  },
  methods:{
      changeStatus(){
          this.status = !this.status
      }
  }
};
</script>
<style lang='less' scoped>
.pwd-input {
  width: 200px;
  padding: 2px 5px;
  border-radius: 2px;
}
</style>