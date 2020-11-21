<template>
    <div class="search_result">
        <!--关键字输入框-->
        <div class="searchBar">
            <i class="el-icon-arrow-left pop" @click="navPop"></i>
            <el-input
                    v-model="query"
                    placeholder="搜索商品"
                    class="inputBox"></el-input>
            <i class="el-icon-search pop" @click="searchAndToTop"></i>
        </div>
        <!--结果-->
        <div class="result">
            <!--无相关产品-->
            <div class="noResult" v-show="noProduct">
                <h3>找不到相关商品</h3>
            </div>
            <!--搜索结果-->
            <div class="product">
                <product-card v-for="item in resultList"
                              :product-info="item"
                              :key="item.goods_id"></product-card>
            </div>
        </div>
    </div>
</template>

<script>
    import {getMethod} from "../http/baseHttp";
    import ProductCard from "../components/home/ProductCard";
    import ScrollWidget from "../components/ScrollWidget";

    export default {
        name: "SearchResult",
        components: {
            ProductCard,
            ScrollWidget
        },
        data() {
            return {
                //请求参数
                query: '笔记本',
                pagenum: 0,
                //搜索结果
                resultList: [],
                noProduct: false,
                //商品页码总数
                total: 0,
                //显示加载中组件
            }
        },
        methods: {
            //发起搜索请求
            search() {
                getMethod('/goods/search', {
                    query: this.query,
                    pagenum: this.pagenum,
                    pagesize: 9000
                }).then(res => {
                    console.log(res.data.message.goods);
                    this.resultList = res.data.message.goods;
                    if (res.data.message.goods.length === 0) {
                        this.noProduct = true;
                    } else {
                        this.noProduct = false;
                    }
                    this.total = Math.ceil(res.data.message.total / 20);
                    console.log(this.resultList);
                }).catch(err => {
                    console.log(err)
                })
            },
            searchAndToTop() {
                this.search();
                this.toTop();
            },
            navPop() {
                this.$router.go(-1);
            },
            toTop() {
                let top = document.documentElement.scrollTop || document.body.scrollTop;
                // 实现滚动效果
                const timeTop = setInterval(() => {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                    if (top <= 0) {
                        clearInterval(timeTop);
                    }
                }, 10);
            },
        },
    }
</script>

<style scoped>
    .searchBar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        height: 40px;
        padding: 5px 10px;
        background-color: black;
        z-index: 9999;
    }

    .pop {
        color: white;
        margin-top: 8px;
        font-size: 24px;
    }

    .result {
        height: calc(100vh - 60px);
        margin-top: 60px;
    }

    .inputBox {
        width: calc(100vw - 68px);
        margin-right: 10px;
    }

    .noResult {
        height: 100%;
        line-height: calc(100vh - 60px);
        text-align: center;
        width: 100%;
    }
     .result{
         position: relative;
     }
    .product {
        display: flex;
        flex-wrap: wrap;
        margin-left: 10px;
        height: calc(100vh - 60px);
    }
</style>