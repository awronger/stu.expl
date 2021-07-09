<template>
  <div class="content home ">
    <div class="header flex-r-sb-c">
      <img class="img-style mg-l-lg" src="../../assets/img/logo.png">
      <img class="img-style mg-r-md mouse-pointer" src="../../assets/img/logout.png">
    </div>
    <div class="container flex-r">
      <div class="left">
        <el-menu class="menu">
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
import methods from "./Home.js"
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
    
  }
};
</script>

<style lang='less' scoped>
@import "./Home.less";
</style>
