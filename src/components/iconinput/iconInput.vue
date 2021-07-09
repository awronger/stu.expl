<template>
  <div class="icon-input border-black flex-r-s-c">
    <div class="front-icon mg-r-sm" v-if="front">
      <i class="fa user-icon" :class="frontIconClass"></i>
    </div>
    <input class="input-style" type="text" v-model="inputValue" />
    <div class="back-icon mg-l-sm" v-if="back">
      <i class="fa user-icon" :class="backIconClass"></i>
    </div>
  </div>
</template>
<script>
export default {
  model:{
      prop:'value',
      event:'change'
  },
  props: {
      value:{
        type: String,
        default: ''
      },
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
    return {
      inputValue: this.value
    };
  },
  mounted(){
    // console.log(this.inputValue);
  },
  computed:{
      
  },
  watch:{
    inputValue(newVal,oldVal){
      // console.log(newVal,oldVal);
      this.$emit('change',newVal)
    }
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