<template>
    <div class="box">
      <div>
        <h6 class="category_name">{{ product.cat_name }}</h6>
      </div>
      <div class="product">
        <div class="flexBox" v-for="(item,index) in product.children" :key="index">
          <div>
            <img :src="item.cat_icon" alt="!!!" class="productImg">
          </div>
          <span class="productName">{{ item.cat_name }}</span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
name: "ProductCard",
  props:{
    product:{
      type:Object,
      default:{
        cat_name:'电视',
        children:[]
      }
    }
  }
}
</script>

<style scoped>
.product{
  display: flex;
  flex-wrap: wrap;
}
.flexBox{
  text-align: center;
  width: 33.3333333%;
  margin-bottom: 20px;
}
.category_name{
  margin: 10px 0;
  font-size: 14px;
  color: #9b9b9b;
}
.productImg{
  border: 1px solid #999999;
  padding: 1px;
  width: 70%;
  height: auto;
}
.productName{
  font-size: 12px;
  color: #5d5d5d;
}
</style>