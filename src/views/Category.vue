<template>
  <div class="category">
    <div class="header">
      <h3>全部分类</h3>
    </div>
    <!--内容盒子-->
    <div class="content">
      <!--左边菜单-->
      <div class="leftMenu">
        <ul>
          <li v-for="(item,index) in allData"
              :class="active===item.cat_id?'active':''"
              :key="item.cat_id"
              @click="changeProduct(item.cat_id,index)">
            {{ item.cat_name }}
          </li>
        </ul>
      </div>
      <!--右边内容-->
      <div class="product">
        <ProductCard v-for="item in allData[index].children" :product="item" :key="item.id"></ProductCard>
      </div>
    </div>
  </div>
</template>

<script>
import {getMethod} from "@/http/baseHttp";
import ProductCard from "@/components/categroy/ProductCard";
export default {
  name: "Category",
  components:{
    ProductCard
  },
  data() {
    return {
      allData: [],
      active: 0,
      index:0
    }
  },
  methods: {
    getData() {
      getMethod('/categories').then(res => {
        this.allData = res.data.message;
        this.active = res.data.message[0].cat_id;
        console.log(this.active)
        console.log(res.data.message)
      }).catch(err => {
        console.log(err)
      })
    },
    changeProduct(id,index){
      this.active = id;
      this.index = index;
    }
  },
  mounted() {
    this.getData();
  }
}
</script>

<style scoped>
.category {
  width: 100%;
}

.header {
  position: fixed;
  z-index: 80;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 44px;
  line-height: 44px;
  background-color: #eee;
}

.header h3 {
  margin-left: 20px;
  font-size: 15px;
  font-weight: normal;
}

.content {
  height: calc(100vh - 44px);
  overflow: scroll;
  margin-top: 44px;
  display: flex;
}

.leftMenu {
  height: calc(100vh - 44px);
  overflow: scroll;
  flex: 2;
  background-color: #eeeeee;
}

.leftMenu ul li {
  width: 100%;
  height: auto;
  padding: 20px 0;
  text-align: center;
  font-size: 14px;
  color: #999999;
  border-bottom:1px solid #999999;
  background-color: #eeeeee;
}

.active {
  color: black !important;
  background-color: white !important;
}

.product {
  height: calc(100vh - 44px);
  overflow: scroll;
  flex: 6;
  padding: 0 10px;
  background-color: white;
}
</style>