<template>
  <div class="content home flex-r-c-c">
    <div>
      <icon-input :front='true' :back='true' frontIconClass='fa-user'></icon-input>
      <pwd-input class="mg-t-sm"></pwd-input>
    </div>
  </div>
</template>

<script>
import methods from "./Home.js";
import iconInput from '@/components/iconinput/iconInput.vue'
import pwdInput from '@/components/pwdinput/pwdInput.vue'
export default {
  name: "Home",
  data() {
    return {
      msg: "Welcome",
    };
  },
  created() {
    this.init();
  },
  methods: {
    ...methods,
  },
  components:{
    iconInput,
    pwdInput
  }
};
</script>

<style lang='less' scoped>
@import "./Home.less";
</style>
