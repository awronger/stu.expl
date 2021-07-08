<template>
  <div class="icon-input border-black flex-r-s-c">
    <div class="front-icon mg-r-sm" v-if="front">
        <i class="fa user-icon" :class="frontIconClass"></i>
    </div>
    <input class="input-style" type="text" />
    <div class="back-icon mg-l-sm" v-if="back">
        <i class="fa user-icon" :class="backIconClass"></i>
    </div>
  </div>
</template>
<script>
export default {
  props: {
      //是否带前置图标
      front:{
          type: Boolean,
          default: false
      },
      //是否带后置图标
      back:{
          type: Boolean,
          default: () => false
      },
      frontIconClass:{
          type: String,
          default: ''
      },
      backIconClass:{
          type: String,
          default: ''
      }
  },
  data() {
    return {};
  },
  computed:{
      
  }
};
</script>
<style lang='less' scoped>
.icon-input {
  padding: 2px 5px;
  color: black;
  border-radius: 2px;
  width: 200px;
}
</style>