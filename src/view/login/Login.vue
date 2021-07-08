<template>
  <div class="content login flex-r-c-c">
    <back-ground ref='background'></back-ground>
    <div class="login-form">
      <!-- <span>欢迎登录</span> -->
      <!-- <icon-input :front='true' :back='true' frontIconClass='fa-user'></icon-input>
      <pwd-input class="mg-t-sm"></pwd-input> -->
    </div>
  </div>
</template>

<script>
import methods from "./Login.js"
import backGround from '@/components/background/backGround.vue'
import iconInput from '@/components/iconinput/iconInput.vue'
import pwdInput from '@/components/pwdinput/pwdInput.vue'
export default {
  name: "Login",
  data() {
    return {};
  },
  created() {
    this.init();
  },
  methods: {
    ...methods,
  },
  components:{
    backGround,
    iconInput,
    pwdInput
  }
};
</script>

<style lang='less' scoped>
@import "./Login.less";
</style>
