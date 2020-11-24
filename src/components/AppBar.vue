<template>
  <div class="appbar">
    <div>
      <slot name="left"></slot>
    </div>
    <h3 :style="{color:titleColor}">{{ title }}</h3>
    <div>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppBar",
  props: {
    title: {
      type: String,
      default: '标题'
    },
    titleColor:{
      type:String,
      default: '#999999'
    }
  }
}
</script>

<style scoped>
.appbar {
  background-color: rgb(255,0,54);
  width: calc(100% - 30px);
  height: 44px;
  padding: 0 15px;
  line-height: 44px;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: space-between;
}
h3{
  font-weight: normal;
}
</style>