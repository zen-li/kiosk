<template>
    <v-card height="600px" class="container">
        <v-layout class="pa-2">
            <v-flex xs3>
                <v-card class="darken-2 promobox elevation-5 mt-2">
                    <v-card-media class="white--text" :src="book.CoverPicList" height="288px">
                    </v-card-media>
                </v-card>
            </v-flex>
            <v-flex xs9 class="mt-3">
                <v-flex d-flex class="headline">
                    <strong>{{book.BookName}}</strong>
                </v-flex>
                <v-flex d-flex>
                    <div class="mt-3">
                    <span><strong>作者：</strong></span>
                    <span>基思参双里段雨状愿鲁！佛含先树影示盖艺！</span>
                    </div>
                </v-flex>
                <v-flex d-flex>
                    <div class="mt-3">
                        <span><strong>简介：</strong></span>
                    </div>
                </v-flex>
                <v-flex d-flex>
                    <div class="mt-2">
                        指困洋军律导准品？员远个丽不何画任比遇着地音放醒编话课？简于向尼著游今狗！改临顿教业写足消研离成原部回娘。并石南万夫恐晚习骨妇术富兴含征另疑呢！维礼判击追珍尔坚山雨信点除党层将班夫约！毛跟证摇味拿！车妙伊妙们续远生。留行露活京强期祖组红三败雨期游勒预。杀勒花景秋须便商新遇。市束抱吗跟处张沉承员边帮打关刻？风必了伯题达纪吉向。叶情树院洲南康手退争靠军依！桌布谁响留按按力案房枪。区阳的曲脸信误友立国。
                    </div>
                </v-flex>
                <v-flex d-flex>
                    <h4 class="red--text mt-4">折扣价：￥{{book.DiscountPrice}}</h4>
                </v-flex>
                <v-layout>
                    <v-flex xs6>
                        <v-btn @click="addCart">加入购物车</v-btn>
                    </v-flex>
               </v-layout>
            </v-flex>
        </v-layout>
    </v-card>
</template>

<script>
export default {
    props: ['book'],
    methods: {
        addCart () {
            const cartItem = {
                id: this.book.BookGuid,
                picture: this.book.CoverPicList,
                title: this.book.BookName,
                price: this.book.DiscountPrice
            }
            this.$store.commit('addCart', cartItem)
        }
    },
    data () {
        return {

        }
    }
}
</script>

<style scoped>
.container {
    overflow-x: hidden;
    overflow-y: hidden;
}
</style>
