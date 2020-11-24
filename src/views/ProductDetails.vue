<template>
    <div class="product_details">
        <!--轮播图-->
        <div class="swipe_box">
            <div class="btn">
                <van-icon name="arrow-left" class="pop"/>
                <van-icon name="shopping-cart" class="pop"/>
            </div>
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="(item,index) in productList">
                    <img :src="item" alt="">
                </van-swipe-item>
            </van-swipe>
        </div>
        <!-- 价格信息-->
        <div class="baseInfo">
            <h3>￥{{ goods_price }}</h3>
            <span class="goodName">{{goods_name}}</span>
            <!--分割线-->
            <span class="diver"></span>
        </div>
        <!--商品介绍-->
        <div class="info" ref="info"></div>
        <!-- 底部工具栏-->
        <div class="bottomTools">
          <div class="iconBtn">
              <van-icon name="shop" />
              <span>店铺</span>
          </div>
            <div class="iconBtn">
                <van-icon name="map-marked" />
                <span>客服</span>
            </div>
            <div class="iconBtn">
                <van-icon name="star" />
                <span>收藏</span>
            </div>
            <div class="textBtn add">加入购物车</div>
            <div class="textBtn buy">立即购买</div>
        </div>
    </div>
</template>

<script>
    import {getMethod} from "../http/baseHttp";

    export default {
        name: "ProductDetails",
        components: {},
        data() {
            return {
                productList: [],
                goods_price: '',
                goods_name: ''
            }
        },
        methods: {
            getDetails() {
                getMethod('/goods/detail', {
                    goods_id: this.$route.params.id
                }).then(res => {
                    this.$refs.info.innerHTML = res.data.message.goods_introduce;
                    let list = res.data.message.pics;
                    list.forEach(item => {
                        this.productList.push(item.pics_sma_url);
                    })
                    this.goods_price = res.data.message.goods_price;
                    this.goods_name = res.data.message.goods_name;
                    console.log(this.productList)
                }).catch(err => {
                    console.log(err)
                })
            }
        },
        mounted() {
            this.getDetails();
        }
    }
</script>

<style scoped>
    .product_details{
        margin-bottom: 44px;
    }
    .swipe_box {
        position: relative;
        box-shadow: 0 0 5px gray;
    }

    .swipe_box img {
        width: 100%;
        height: auto;
    }

    .my-swipe {
        padding: 0;
    }

    .btn {
        margin: 0 15px;
        position: absolute;
        top: 10px;
        left: 0;
        right: 0;
        z-index: 89;
        display: flex;
        justify-content: space-between;
    }

    .pop {
        text-align: center;
        display: inline-block;
        padding: 10px;
        font-size: 20px;
        border-radius: 80px;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
    }

    .baseInfo {
        background-color: white;
        width: 100vw;
    }

    .baseInfo h3 {
        margin: 5px;
        font-size: 30px;
        color: #ee0a24;
    }

    .goodName {
        display: block;
        margin: 10px;
    }

    .diver {
        margin: 10px 0 0 0;
        display: block;
        height: 10px;
        width: 100%;
        background-color: rgb(240, 240, 240);
    }
    .bottomTools{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 44px;
        display: flex;
        justify-items: center;
        align-items: center;
        background-color: white;
        border-top: 1px solid gray;
    }
    .iconBtn{
        color: gray;
        padding: 0 10px;
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
        background-color: white;
    }
    .textBtn{
        flex: 1;
        height: 44px;
        line-height: 44px;
        text-align: center;
        color: white;
    }
    .add{
        background-color: orange;
    }
    .buy{
        background-color:#ff0036;
    }
</style>