<template>
  <div class="product_box" @click="toDetails">
    <div class="productImg">
      <img :src="productInfo.goods_small_logo"
           @load="imageLoad"
           alt="暂无图片!!!">
    </div>
    <div class="info">
      <span class="infoName">{{ productInfo.goods_name }}</span>
      <div class="label">
        <span>重量:{{ productInfo.goods_weight }}kg</span>
        <span>编码:{{ productInfo.cat_id }}</span>
      </div>
      <div class="price">
        <span>￥{{ productInfo.goods_price }}</span>
        <a href="#">找相似</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    productInfo: {
      type: Object,
      default() {
        return {
          "goods_id": 50007,
          "cat_id": 765,
          "goods_name": "Aveeno艾维诺婴儿温和防晒霜SPF55 112g 美国儿科医生推荐",
          "goods_price": 142,
          "goods_number": 100,
          "goods_weight": 100,
          "goods_big_logo": "http://image4.suning.cn/uimg/b2c/newcatentries/0070089069-000000000127774086_1_800x800.jpg",
          "goods_small_logo": "http://image4.suning.cn/uimg/b2c/newcatentries/0070089069-000000000127774086_1_400x400.jpg",
          "add_time": 1516626902,
          "upd_time": 1516626902,
          "hot_mumber": 0,
          "is_promote": false,
          "cat_one_id": 709,
          "cat_two_id": 740,
          "cat_three_id": 765
        }
      }
    }
  },
  methods: {
    imageLoad() {
      //利用事件总线把图片加载完成后的事件发射出去
      this.$bus.$emit('imageLoad');
    },
    toDetails(){
      this.$emit('toDetails')
    }
  }
}
</script>

<style scoped>
.product_box {
  width: calc(50% - 12px);
  margin-right: 10px;
  margin-bottom: 15px;
  border: 1px solid #9b9b9b;
}

.productImg {
  width: calc(100% - 20px);
  background-color: rgba(0, 0, 0, 0.03);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 10px;
}

.productImg img {
  width: 100%;
  height: auto;
}

.info {
  padding: 10px 10px 2px 10px;
}

.infoName {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 13px;
  color: #5d5d5d;
}

.label {
  margin-top: 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.label span {
  font-size: 12px;
  display: inline-block;
  color: rgb(255, 0, 54);
  padding: 2px;
  border: 1px solid rgb(255, 0, 54);
}

.price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 7px;
}

.price span {
  font-size: 21px;
  font-weight: bold;
  color: rgb(255, 0, 54);
}

.price a {
  display: inline-block;
  color: rgb(255, 0, 54);
  background-color: rgb(255, 230, 235);
  padding: 3px 8px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: bold;
}
</style>