<template>
    <div class="search_result">
        <!--关键字输入框-->
        <div class="searchBar">
            <i class="el-icon-arrow-left pop" @click="navPop"></i>
            <el-input
                    v-model="query"
                    placeholder="搜索商品"
                    class="inputBox"></el-input>
            <i class="el-icon-search pop" @click="searchToTop"></i>
        </div>
        <!--结果-->
        <div class="result">
            <!-- 返回顶部-->
            <a href="#" @click="scrollToTop" class="toTop" v-show="showToTop">Top</a>
            <!--无相关产品-->
            <div class="noResult" v-show="noProduct">
                <h3>找不到相关商品</h3>
            </div>
            <!--搜索结果-->
            <ScrollWidget
                    class="product"
                    :probe-type="3"
                    ref="scroll"
                    :pull-up-load="true"
                    @pullingUp="loadMore"
                    @scroll="scroll">
                <ProductCard v-for="i in resultList" :product-info="i"></ProductCard>
            </ScrollWidget>
        </div>
        <div class="loading" v-show="showLoading">
            <span>加载中......</span>
        </div>
        <div class="loading" v-show="noMore">
            <span>客官！没有更多了嗷！！</span>
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
                query: '推荐',
                pagenum: 1,
                //搜索结果
                resultList: [],
                noProduct: false,
                showLoading: false,
                noMore: false,
                showToTop: false
            }
        },
        methods: {
            //发起搜索请求
            search() {
                this.showLoading = true;
                this.noMore = false;
                getMethod('/goods/search', {
                    query: this.query,
                    pagenum: this.pagenum,
                }).then(res => {
                    let list = res.data.message.goods;
                    console.log(list)
                    if (list.length !== 0) {
                        //数组追加数据
                        for (let i = 0; i < list.length; i++) {
                            this.resultList.push(list[i]);
                        }
                        this.showLoading = false;
                        //页码加一
                        this.pagenum++;
                        //隐藏加载中组件
                    } else {
                        //显示没有更多组件并隐藏加载中组件
                        this.noMore = true;
                        this.showLoading = false;
                        setTimeout(() => {
                            this.noMore = false;
                        }, 1000)
                    }
                }).catch(err => {
                    console.log(err)
                })
            },
            searchToTop() {
                this.resultList = [];
                this.pagenum = 0;
                this.search();
                this.scrollToTop();
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
            scroll(position) {
                if (-position.y > 600) {
                    this.showToTop = true;
                } else {
                    this.showToTop = false;
                }
            },
            loadMore() {
                console.log('加载更多')
                this.search();
                //解决只能监听一次上拉事件
                // this.$nextTick 解决找不到相应方法问题（原因：渲染前找不到相应方法）
                this.$nextTick(() => {
                    this.$refs.scroll.finishPullUp();
                })
            },
            scrollToTop() {
                this.$nextTick(() => {
                    this.$refs.scroll.toTop();
                })
            }
        },
        mounted() {
            //利用事件总线监听图片加载完成
            this.$bus.$on('imageLoad', () => {
                console.log('-=-=-=-=');
                this.$nextTick(() => {
                    this.$refs.scroll.refresh();
                })
            })
        }
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
        position: relative;
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

    .result {
        position: relative;
    }

    .product {
        overflow: hidden;
        margin-left: 10px;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        height: calc(100vh - 60px);
        display: flex;
        flex-wrap: wrap;
    }

    .loading {
        background-color: #9b9b9b;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        justify-content: center;
        align-items: center;
        display: flex;
        z-index: 9999999;
        color: black;
    }

    .loading span {
        display: inline-block;
        margin: 10px auto;
        text-align: center;
    }

    .toTop {
        z-index: 99999;
        display: inline-block;
        padding: 5px;
        background-color: #999999;
        position: absolute;
        bottom: 40px;
        right: 20px;
    }
</style>