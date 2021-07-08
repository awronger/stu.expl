<template>
  <div class="new-button mouse-pointer" :style="getStyle" @click="handle">
      <span>{{text}}</span>
  </div>
</template>
<script>
export default {
  props:{
      text:{
          type: String,
          default: 'button'
      },
      color:{
          type: String,
          default: 'black'
      },
      bgColor:{
          type: String,
          default: '#f3f3f3'
      },
  },
  data() {
    return {};
  },
  computed:{
      getStyle(){
          return {
              'color': this.color,
              'background-color': this.bgColor
          }
      }
  },
  methods:{
      handle(){
          this.$emit('onHandle')
      }
  }
};
</script>
<style lang='less' scoped>
.new-button{
    padding: 5px 10px;
    border:1px solid black;
    border-radius: 2px;
}
</style>