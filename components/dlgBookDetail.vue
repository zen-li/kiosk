<template>
    <div>
        <v-toolbar class="pink" dark>
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title class="white--text">图书信息</v-toolbar-title>
        </v-toolbar>
        <v-card height="500px" class="pa-4">
            <v-layout>
                <v-flex xs3>
                    <v-card class="darken-2 promobox elevation-5 mt-2">
                        <v-card-media class="white--text" :src="book.cover" height="288px">
                        </v-card-media>
                    </v-card>
                </v-flex>
                <v-flex xs9 class="mt-3">
                    <v-flex d-flex class="headline">
                        <strong>{{book.name}}</strong>
                    </v-flex>
                    <v-flex d-flex>
                        <div class="mt-3">
                        <span><strong>作者：</strong></span>
                        <span>{{book.author}}</span>
                        </div>
                    </v-flex>
                    <v-flex d-flex>
                        <div class="mt-3">
                            <span><strong>简介：</strong></span>
                        </div>
                    </v-flex>
                    <v-flex d-flex>
                        <div class="mt-2">
                            {{book.summary}}
                        </div>
                    </v-flex>
                    <v-flex d-flex>
                        <h4 class="red--text mt-4">折扣价：￥{{book.new_price}}</h4>
                    </v-flex>
                    <v-layout>
                        <v-flex xs6>
                            <v-btn @click="addCart" block large dark class="pink">加入购物车</v-btn>
                        </v-flex>
                </v-layout>
                </v-flex>
            </v-layout>
        </v-card>
    </div>
</template>

<script>
export default {
    props: ['book'],
    methods: {
        addCart () {
            const cartItem = {
                id: this.book.id,
                picture: this.book.cover,
                title: this.book.name,
                qty: 1,
                price: this.book.new_price
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
