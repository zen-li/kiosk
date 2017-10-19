<template>
    <v-container class="home-container">
        <v-layout row class="mt-5">
            <!-- BEGIN of Back button -->
            <v-flex xs1>
                <v-btn fab dark class="blue ml-5" @click="goBack">
                    <v-icon>arrow_back</v-icon>
                </v-btn>
            </v-flex>
            <!-- END of Back button -->

            <!-- BEGIN of magazine section and comments section -->
            <v-flex xs5>
                <!-- BEGIN of magazine information -->
                <v-flex d-flex>
                    <v-layout>

                        <!-- BEGIN of magazine cover -->
                        <v-flex xs5>
                            <v-card class="darken-2 promobox elevation-5 mt-2">
                                <v-card-media class="white--text" :src="book.cover" height="388px">
                                </v-card-media>
                            </v-card>
                        </v-flex>
                        <!-- END of magazine cover -->

                        <!-- BEGIN of information section -->
                        <v-flex d-flex xs6 class="mt-3">
                            <!-- BEGIN of magazine information -->
                            <v-flex class="headline"><strong>{{book.name}}</strong></v-flex>
                            <v-flex class="black--text darken-5 mt-4">作者：{{book.author}}</v-flex>
                            <v-flex class="black--text darken-5 mt-2">出版社：{{book.publisher}}</v-flex>
                            <v-flex class="black--text darken-5 mt-2">出版日期：{{book.publishTime}}</v-flex>
                            <v-flex class="black--text darken-5 mt-2">页数：{{book.pages}}</v-flex>
                            <v-flex class="black--text darken-5 mt-2">装帧：{{book.type}}</v-flex>
                            <v-flex class="black--text darken-5 mt-2">ISBN：{{book.ISBN}}</v-flex>
                            <v-flex class="mt-4"><h5 class="red--text">折扣价：￥{{Number(book.new_price).toFixed(2)}}</h5></v-flex>
                            <!-- END of magazine information -->

                            <!-- BEGIN of action buttons -->
                            <v-layout>
                                <v-flex d-flex xs12>
                                    <v-btn block large dark class="pink" @click.native.stop="addCart">加入购物车</v-btn>
                                </v-flex>
                            </v-layout>
                            <!-- END of action buttons -->
                        </v-flex>
                        <!-- END of information section -->

                    </v-layout>
                </v-flex>
                <!-- END of book information -->
                <!-- BEGIN of book summary -->
                <v-flex d-flex class="mt-4">
                    <h5>简介</h5>
                </v-flex>
                <v-flex d-flex class="mt-3 mr-4">
                    <span class="summaryBox">{{book.summary}}</span>
                </v-flex>
                <!-- END of book summary -->
                <!-- BEGIN of comments section -->
                <v-flex d-flex class="mt-4">
                    <h5>精彩书评</h5>
                </v-flex>
                <!-- BEGIN of comments -->
                <v-flex d-flex class="mr-5">
                    <v-list three-line style="background: #eeeeee">
                        <template v-for="item in comments">
                            <v-subheader v-if="item.header" v-text="item.header" v-bind:key="item.title"></v-subheader>
                            <v-list-tile avatar v-else v-bind:key="item.title">
                                <v-list-tile-avatar>
                                    <img v-bind:src="item.avatar" alt="">
                                </v-list-tile-avatar>
                                <v-list-tile-content>
                                    <v-list-tile-title v-html="item.title"></v-list-tile-title>
                                    <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </template>
                    </v-list>
                </v-flex>
                <!-- END of comments section -->
            </v-flex>
            <!-- END of magazine section -->

            <!-- BEGIN of magazine history and related magazine -->
            <v-flex xs6 class="mr-5">
                <v-flex d-flex>
                    <h5>猜你喜欢</h5>
                </v-flex>
                <!-- BEGIN of related magazines -->
                <v-flex d-flex>
                    <v-layout row wrap>
                        <v-flex xs3 v-for="item in related" v-bind:key="item.id">
                            <nuxt-link :to="`/book/${item.id}`">
                            <v-card class="darken=2 promobox elevation-5 mt-3 mb-4">
                                <v-card-media class="white--text" :src="item.cover" height="220px"></v-card-media>
                                <v-card-text>
                                    <div class="card-title">
                                        <span>
                                            {{item.name}}
                                        </span>
                                        <span class="paragraph-end">
                                        </span>
                                    </div>
                                </v-card-text>
                            </v-card>
                            </nuxt-link>
                        </v-flex>
                    </v-layout>
                </v-flex>
                <!-- END of related magazines -->
            </v-flex>
            <!-- END of magazine history -->
        </v-layout>
    </v-container>
</template>

<script>
import db from '../../data/'
import BookDialog from '../../components/dlgBookDetail'


export default {
    async asyncData ({ params, error }) {
        let data = {}
        try {
            const book = db.books.find((bk) => { return bk.id === params.id })
            const comments = db.comments
            const related = []
            for (let i = 0; i < 8; i += 1) {
                related.push(db.books[i])
            }
            data = { book, related, comments }
            return data
        } catch (e) {
            error({ message: 'not found', statusCode: 404 })
        }
        return data
    },

    data () {
        return {
            dialog: false
        }
    },

    components: {
        BookDialog
    },

    methods: {
        goBack () {
            this.$router.go(-1)
        },
        closeDlg () {
            this.dialog = false
        },
        addCart () {
            const cartItem = {
                id: this.book.id,
                picture: this.book.cover,
                title: this.book.name,
                qty: 1,
                price: this.book.new_price
            }
            this.$store.commit('addCart', cartItem)
            this.$store.state.dlgCartOpen = true
            this.$store.state.dlgPaymentOpen = false
        }
    }
}
</script>

<style>
summaryBox{
    text-align: justify;
}
</style>
