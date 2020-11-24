<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        name: "ScrollWidget",
        data() {
            return {
                scroll: null
            }
        },
        components: {},
        props: {
            probeType: {
                type: Number,
                default: 0
            },
            //是否监听滚动
            pullUpLoad: {
                type: Boolean,
                default: false
            }
        },
        mounted() {
            this.$nextTick(() => {
                if (!this.scroll) {
                    this.scroll = new BScroll(this.$refs.wrapper, {
                        click: true,
                        probeType: this.probeType,
                        pullUpLoad: this.pullUpLoad,
                    });
                }
                //监听滚动的位置
                this.scroll.on('scroll', (position) => {
                    this.$emit('scroll', position);
                });
                this.scroll.on('pullingUp', () => {
                    this.$emit('pullingUp');
                });
            })
        },
        methods: {
            refresh() {
                this.scroll && this.scroll.refresh();
            },
            finishPullUp() {
                this.scroll && this.scroll.finishPullUp();
            },
            toTop() {
                this.scroll.scrollTo(0, 0, 500)
            }
        }
    }
</script>
<style scoped>
    .content {
        /*display: flex;*/
        /*flex-wrap: wrap;*/
    }
</style>