<template>
    <div class="swipe_box">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item,index) in banner">
                <img :src="item.image_src" alt="">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    export default {
        name: "MySwipe",
        props: {
            banner: {
                type: Array,
                default: []
            }
        }
    }
</script>

<style scoped>
    .swipe_box img {
        width: 100%;
        height: auto;
    }
    .my-swipe{
        padding: 0;
    }
</style>