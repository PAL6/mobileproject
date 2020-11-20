<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="toCategory">ToCategory</button>
  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {

  },
  methods:{
    toCategory(){
      this.$router.push('/category')
    }
  }
}
</script>
