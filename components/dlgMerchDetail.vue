<template>
    <div>
        <v-toolbar class="pink" dark>
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title class="white--text">商品信息</v-toolbar-title>
        </v-toolbar>
        <v-card class="pa-4">
            <v-layout>
                <v-flex xs3>
                    <v-card class="darken-2 promobox elevation-5 mt-2">
                        <v-card-media class="white--text" :src="merch.cover" height="288px">
                        </v-card-media>
                    </v-card>
                </v-flex>
                <v-flex xs9 class="mt-3">
                    <v-flex d-flex class="headline">
                        <strong>{{merch.name}}</strong>
                    </v-flex>
                    <v-flex d-flex>
                        <div class="mt-3">
                            <span><strong>简介：</strong></span>
                        </div>
                    </v-flex>
                    <v-flex d-flex>
                        <div class="mt-2">
                            {{merch.summary}}
                        </div>
                    </v-flex>
                    <v-flex d-flex>
                        <h4 class="red--text mt-4">折扣价：￥{{merch.new_price}}</h4>
                    </v-flex>
                    <v-layout>
                        <v-flex xs6>
                            <v-btn @click="addCart" block large dark class="pink">加入购物车</v-btn>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
            <v-divider class="my-4"></v-divider>
            <v-layout class="pl-5">
                <v-flex d-flex>
                    <img :src="pic" alt="" v-for="pic in merch.pics" v-bind:key="pic">
                </v-flex>
            </v-layout>
        </v-card>
    </div>
</template>

<script>
export default {
    props: ['merch'],
    methods: {
        addCart () {
            const cartItem = {
                id: this.merch.id,
                picture: this.merch.cover,
                title: this.merch.name,
                price: this.merch.new_price
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
