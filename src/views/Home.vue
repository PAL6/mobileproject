<template>
    <div class="home">
        <!--导航-->
        <AppBar :title-color="appBarTextColor"
                class="appBar"
                :title="title">
            <div slot="left">
                <van-icon name="bars" class="icon" @click="toCategory"/>
            </div>
            <div slot="right">
                <span class="loginBtn">登录</span>
            </div>
        </AppBar>
        <div class="content">
            <!--搜索-->
            <div class="search" @click="pushToSearchPage">
                <div class="box">
                    <span class="el-icon-search search_icon"></span>
                    <span>搜索商品、品牌</span>
                </div>
            </div>
            <!--楼层导航-->
            <div class="floorNav">
                <div v-for="(item,index) in navList" class="nav_icon" :key="index">
                    <img :src="item.image_src" :alt="item.name">
                </div>
            </div>
            <!--轮播图-->
            <div class="swipe_box">
                <MySwipe :banner="banner"></MySwipe>
            </div>
            <!--广告-->
            <div class="ad_box">
                <img src="https://gw.alicdn.com/tfs/TB1qamdQEH1gK0jSZSyXXXtlpXa-750-367.png_790x10000.jpg_.webp"
                     alt="!!" class="ad">
            </div>
            <!--楼层推荐-->
            <div class="remFloor">
                <RemBox v-for="(item,index) in remProduct"
                        :product="item"></RemBox>
                <RemBox></RemBox>
            </div>
            <div class="remProduct">
                <ProductCard v-for="(item,index) in hotProduct"
                             :key="item.goods_id"
                             :product-info="item"></ProductCard>
            </div>
        </div>
    </div>
</template>

<script>
    import {getMethod} from "../http/baseHttp";
    import AppBar from "../components/AppBar";
    import MySwipe from "../components/MySwipe";
    import RemBox from "../components/home/RemBox";
    import ProductCard from "../components/home/ProductCard";

    export default {
        name: 'Home',
        components: {
            AppBar,
            MySwipe,
            RemBox,
            ProductCard
        },
        data() {
            return {
                title: '爽 购 √',
                appBarTextColor: '#FFFFFF',
                navList: [],
                banner: [],
                remProduct: [],
                hotProduct: []
            }
        },
        methods: {
            toCategory() {
                this.$router.push('/category')
            },
            getNavIcon() {
                getMethod('/home/catitems').then(res => {
                    this.navList = res.data.message;
                    console.log(res.data.message);
                }).catch(err => {
                    console.log(err)
                })
            },
            getBanner() {
                getMethod('/home/swiperdata').then(res => {
                    console.log(res.data.message);
                    this.banner = res.data.message;
                }).catch(err => {
                    console.log(err)
                })
            },
            getRemProduct() {
                getMethod('/home/floordata').then(res => {
                    console.log(res.data.message);
                    this.remProduct = res.data.message;
                }).catch(err => {
                    console.log(err)
                })
            },
            getHotProduct() {
                getMethod('/goods/search', {
                    query: '推荐'
                }).then(res => {
                    console.log(res.data.message);
                    if (res.data.total > 40) {
                        this.hotProduct = res.data.message.goods.splice(10, 30);
                    } else {
                        this.hotProduct = res.data.message.goods;
                    }
                }).catch(err => {
                    console.log(err)
                })
            },
            pushToSearchPage(){
                this.$router.push('/search')
            }
        },
        mounted() {
            this.getNavIcon();
            this.getBanner();
            this.getRemProduct();
            this.getHotProduct();
        }
    }
</script>

<style scoped>
    .appBar {
        position: fixed;
        z-index: 9999;
        top: 0;
        left: 0;
        right: 0;
    }

    .content {
        margin-top: 43px;
    }

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

    .box {
        height: 30px;
        line-height: 30px;
        background-color: #eeeeee;
        border-radius: 8px;
        padding-left: 30px;
        font-size: 12px;
        color: #5d5d5d;
    }

    .search_icon {
        font-size: 15px;
        margin-right: 10px;
        display: inline-block;
    }

    .floorNav {
        width: 100vw;
        display: flex;
        margin: 10px 0;
    }

    .nav_icon {
        width: 25%;
        text-align: center;
    }

    .floorNav img {
        width: 60%;
        height: auto;
    }

    .swipe_box {
        padding: 0 5px;
    }

    .ad_box {
        width: 100vw;
    }

    .ad {
        width: 100%;
        height: auto;
    }

    .remFloor {
        width: calc(100% - 10px);
        display: flex;
        flex-wrap: wrap;
        margin: 0 0 0 10px;
    }

    .remProduct {
        display: flex;
        flex-wrap: wrap;
        margin-left: 10px;
    }
</style>
