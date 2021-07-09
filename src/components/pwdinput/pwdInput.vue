<template>
  <div class="pwd-input border-black flex-r-s-c">
    <div class="front-icon mg-r-sm">
        <i class="fa fa-lock user-icon"></i>
    </div>
    <input class="input-style" :type="status ? 'password' : 'text'" v-model="inputValue"/>
    <div class="back-icon mg-l-sm" @click="changeStatus">
        <i class="fa user-icon" :class="{'fa-eye-slash': status,'fa-eye': !status}"></i>
    </div>
  </div>
</template>
<script>
export default {
  model: {
    prop: 'value',
    event: 'handle'
  },
  props: {
      //输入文本类型（账户text和密码password）
      type:{
          type: String,
          default: 'password'
      },
      value: {
        type: String,
        default: ''
      }
  },
  data() {
    return {
        status: this.type === 'password',
        inputValue: this.value
    };
  },
  computed:{
      
  },
  methods:{
      changeStatus(){
          this.status = !this.status
      }
  },
  watch:{
    inputValue(newVal,oldVal){
      this.$emit('handle',newVal)
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