<template>
    <div class="infinite-list-wrapper" style="overflow:auto">
        <ul class="list"
            v-infinite-scroll="load"
            infinite-scroll-disabled="disabled">
            <ProductCard v-for="item in list.length"
                         :product-info="list[item]"
                         class="list-item"
                         :key="item"></ProductCard>
        </ul>
        <div class="loadingBox" v-if="loading">
            <p>加载中...</p>
        </div>
        <div class="noMoreBox" v-if="noMore">
            <p>没有更多了</p>
        </div>
    </div>
</template>

<script>
    import ProductCard from "./home/ProductCard";

    export default {
        name: "ScrollWidget",
        components: {
            ProductCard
        },
        props: {
            //加载方法
            load: {
                type: Function,
                default() {
                    return function () {

                    }
                }
            },
            list: {
                type: Array,
                default: []
            },
            total: {
                type: Number,
                default: 20
            },
            loading: {
                type: Boolean,
                default: false
            },
            pagenum: {
                type: Number,
                default: 0
            }
        },
        computed: {
            noMore() {
                return this.count >= this.total
            },
            disabled() {
                return this.loading || this.noMore
            }
        },
    }
</script>

<style scoped>
    .infinite-list-wrapper ul {
        margin-left: 10px;
        display: flex;
        flex-wrap: wrap;
    }

    .loadingBox, .noMoreBox {
        padding: 10px;
        text-align: center;
        background-color: #bcbec2;
        opacity: .4;
        color: black;
    }
</style>