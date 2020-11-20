<template>
  <div class="home">
    <!--导航-->
    <AppBar :title-color="appbarTextColor" :title="title">
      <div slot="left">
        <van-icon name="bars" class="icon" @click="toCategory"/>
      </div>
      <div slot="right">
        <span class="loginBtn">登录</span>
      </div>
    </AppBar>
    <!--搜索-->
    <div class="search">
      <div class="box">
        <span class="el-icon-search search_icon"></span>
        <span>搜索商品、品牌</span>
      </div>
    </div>
  </div>
</template>

<script>
import AppBar from "@/components/AppBar";

export default {
  name: 'Home',
  data() {
    return {
      title: '爽 购 √',
      appbarTextColor: '#FFFFFF'
    }
  },
  components: {
    AppBar
  },
  methods: {
    toCategory() {
      this.$router.push('/category')
    }
  }
}
</script>

<style scoped>
.icon {
  color: #eeeeee;
  font-size: 24px;
  margin-top: 16px;
}

.loginBtn {
  color: #eeeeee;
  font-size: 13px;
}

.search {
  background-color: rgb(255, 0, 54);
  padding: 10px;
  width: calc(100vw - 20px);
}
.box{
  height: 30px;
  line-height: 30px;
  background-color: #eeeeee;
  border-radius: 8px;
  padding-left: 30px;
  font-size: 12px;
  color: #5d5d5d;
}
.search_icon{
  font-size: 15px;
  margin-right: 10px;
  display: inline-block;
}
</style>
