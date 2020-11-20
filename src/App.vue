<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>
<script>
import Home from "@/views/Home";
export default {
  name:"APP",
  components:{
    Home
  }
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
</style>
