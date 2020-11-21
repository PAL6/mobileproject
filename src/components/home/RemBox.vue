<template>
    <div class="remBox">
        <h3>{{product.floor_title.name}}</h3>
        <div class="product">
            <img :src="product.product_list[0].image_src" alt="!!!!">
            <img :src="product.product_list[1].image_src" alt="!!!!">
        </div>
    </div>
</template>

<script>
    export default {
        name: "RemBox",
        props: {
            product: {
                type: Object,
                default() {
                    return {
                        floor_title: {
                            name: '韩版手链'
                        },
                        product_list: [
                            {
                                image_src: 'https://api-hmugo-web.itheima.net/pyg/pic_floor03_4@2x.png'
                            },
                            {
                                image_src: 'https://api-hmugo-web.itheima.net/pyg/pic_floor03_5@2x.png'
                            }
                        ]
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .remBox {
        background: url("https://gw.alicdn.com/tfs/TB1Wy_6rYZnBKNjSZFrXXaRLFXa-345-257.png?getAvatar=1_360x10000.jpg_.webp");
        width: calc(50% - 30px);
        margin-right: 10px;
        padding: 10px;
        margin-bottom: 10px;
    }

    .remBox h3 {
        font-size: 16px;
        font-weight: bold;
    }

    .product {
        display: flex;
        margin-top: 10px;
    }

    .product img {
        width: calc(50% - 5px);
        height: 120px;
        margin-right: 10px;
    }

    .product img:nth-child(2n) {
        margin-right: 0;
    }
</style>