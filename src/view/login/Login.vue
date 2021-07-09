<template>
  <div class="content login flex-r-c-c">
    <back-ground ref='background'></back-ground>
    <div class="login-form flex-c-s-c">
      <div class="login-title flex-r-c-c">
        <span >Welcome To Our PlatForm</span>
      </div>
      <div class="flex-c-c-c login-content">
        <icon-input :front='true' :back='true' frontIconClass='fa-user' v-model="userInfo.account"></icon-input>
        <pwd-input class="mg-t-md" v-model="userInfo.password"></pwd-input>
        <div class="check-box mg-t-md flex-r-sb-c">
          <el-checkbox v-model="checked.account">account</el-checkbox>
          <el-checkbox v-model="checked.password">password</el-checkbox>
        </div>
        <new-button class="mg-t-md" text='Login' @onHandle='login'></new-button>
      </div>
    </div>
  </div>
</template>

<script>
import methods from "./Login.js"
import backGround from '@/components/background/backGround.vue'
import iconInput from '@/components/iconinput/iconInput.vue'
import pwdInput from '@/components/pwdinput/pwdInput.vue'
import newButton from '@/components/newbutton/newButton.vue'
export default {
  name: "Login",
  data() {
    return {
      checked:{
        account:false,
        password:true
      },
      userInfo:{
        account:'11',
        password:''
      }
    };
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
    pwdInput,
    newButton
  }
};
</script>

<style lang='less' scoped>
@import "./Login.less";
</style>
